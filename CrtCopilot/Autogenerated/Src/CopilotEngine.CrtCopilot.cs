namespace Terrasoft.Configuration.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Configuration.GenAI;
	using Terrasoft.Copilot;
	using Terrasoft.Copilot.Actions;
	using Terrasoft.Copilot.Metadata;
	using Terrasoft.Core;
	using Terrasoft.Core.Applications.GenAI;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Factories;
	using Terrasoft.Enrichment.Interfaces.ChatCompletion;
	using Terrasoft.Enrichment.Interfaces.ChatCompletion.Requests;
	using Terrasoft.Enrichment.Interfaces.ChatCompletion.Responses;
	using global::Common.Logging;

	[DefaultBinding(typeof(ICopilotEngine))]
	internal class CopilotEngine : ICopilotEngine
	{

		#region Constants: Private

		private const string SystemPrompt = "You're a bot who resolves tasks of the user. " +
			"For resolving you can do following: " +
			"1. Ask user for additional information; " +
			"2. Use one of the functions that are provided with this request by Creatio platform.\n" +
			"You will be helped with context in json format. " +
			"Use only appropriate attributes from it to find function and define its parameters:" +
			"Don't make assumptions about what values to plug into functions. " +
			"Ask for clarification if a user request is ambiguous.";
		private const string CanDevelopCopilotIntentsOperation = "CanDevelopCopilotIntents";

		#endregion

		#region Fields: Private

		private readonly ILog _log = LogManager.GetLogger("Copilot");
		private readonly UserConnection _userConnection;
		private readonly IGenAICompletionServiceProxy _completionService;
		private readonly ICopilotSessionManager _sessionManager;
		private readonly ICopilotRequestLogger _requestLogger;
		private readonly ICopilotMsgChannelSender _copilotMsgChannelSender;
		private readonly ICopilotContextBuilder _contextBuilder;

		#endregion

		#region Constructors: Public

		public CopilotEngine(UserConnection userConnection, IGenAICompletionServiceProxy completionService,
				ICopilotSessionManager copilotSessionManager, ICopilotMsgChannelSender copilotMsgChannelSender,
				ICopilotContextBuilder contextBuilder, ICopilotRequestLogger requestLogger) {
			_userConnection = userConnection;
			_completionService = completionService;
			_sessionManager = copilotSessionManager;
			_copilotMsgChannelSender = copilotMsgChannelSender;
			_contextBuilder = contextBuilder;
			_requestLogger = requestLogger;
		}

		#endregion

		#region Properties: Private

		private CopilotIntentSchema _systemIntent;
		private CopilotIntentSchema SystemIntent => _systemIntent ?? (_systemIntent = FindSystemIntent());

		private CopilotIntentSchemaManager IntentSchemaManager => 
			_userConnection.Workspace.SchemaManagerProvider.GetManager<CopilotIntentSchemaManager>();

		#endregion

		#region Methods: Private

		private CopilotSession CreateSession() {
			string systemPrompt = SystemIntent?.Prompt ?? SystemPrompt;
			var messages = new List<CopilotMessage> {
				CopilotMessage.FromSystem(systemPrompt)
			};
			var session = new CopilotSession(_userConnection.CurrentUser.Id, messages);
			_sessionManager.Add(session);
			return session;
		}

		private Guid SaveRequestInfo(DateTime? start, DateTime? end, UsageResponse usage, string error, bool isFailed) {
			start = start ?? DateTime.Now;
			end = end ?? DateTime.Now;
			var duration = (long)(end - start).Value.TotalMilliseconds;
			var requestInfo = new CopilotRequestInfo {
				StartDate = start.Value,
				Error = error,
				TotalTokens = usage?.TotalTokens ?? 0,
				PromptTokens = usage?.PromptTokens ?? 0,
				CompletionTokens = usage?.CompletionTokens,
				Duration = duration,
				IsFailed = isFailed
			};
			return _requestLogger.SaveCopilotRequest(requestInfo);
		}

		private void HandleCompletionResponse(ChatCompletionResponse completionResponse, CopilotSession session) {
			if (completionResponse?.Choices == null) {
				return;
			}
			List<CopilotMessage> assistantMessages = GetAssistantMessagesWithoutToolCalls(completionResponse);
			session.AddMessages(assistantMessages);
			SendMessagesToClient(session);
		}

		private void SendMessagesToClient(CopilotSession copilotSession) {
			var messagesToSend = copilotSession.Messages.Where(message => !message.IsSentToClient).ToList();
			if (messagesToSend.IsNullOrEmpty()) {
				return;
			}
			var copilotChatPart = new CopilotChatPart(messagesToSend, copilotSession);
			_copilotMsgChannelSender.SendMessages(copilotChatPart);
			messagesToSend.ForEach(message => message.IsSentToClient = true);
		}

		private static List<CopilotMessage> GetAssistantMessagesWithoutToolCalls(
				ChatCompletionResponse completionResponse) {
			List<CopilotMessage> assistantMessages = completionResponse.Choices
				.Where(response => response.Message.Content.IsNotNullOrEmpty())
				.Select(response => new CopilotMessage(response.Message, skipToolCalls: true))
				.ToList();
			return assistantMessages;
		}

		private void HandleToolCallsCompleted(List<CopilotMessage> toolMessages, CopilotSession session) {
			if (toolMessages.IsNullOrEmpty()) {
				return;
			}
			session.AddMessages(toolMessages);
			SendSession(session);
		}

		private CopilotIntentSchema FindSystemIntent() {
			ISchemaManagerItem<CopilotIntentSchema> intentSchemaItem = IntentSchemaManager.GetItems()
				.FirstOrDefault(item => item.Instance.Type == CopilotIntentType.System);
			return intentSchemaItem?.Instance;
		}

		private IEnumerable<CopilotIntentSchema> FindCommonIntents(Guid? currentIntentId) {
			var intentItems = IntentSchemaManager.GetItems() ?? new List<ISchemaManagerItem<CopilotIntentSchema>>();
			bool canDevelopIntents = _userConnection.DBSecurityEngine.GetCanExecuteOperation(
				CanDevelopCopilotIntentsOperation, new GetCanExecuteOperationOptions {
					ThrowExceptionIfNotFound = false
				});
			return intentItems
				.Select(x => x.Instance)
				.Where(x => x.Type != CopilotIntentType.System && x.UId != currentIntentId && 
					(x.Status == CopilotIntentStatus.Active 
						|| x.Status == CopilotIntentStatus.InDevelopment && canDevelopIntents));
		}

		private IEnumerable<CopilotActionMetaItem> GetActionsMetaItems(Guid? currentIntentId) {
			var actionMetaItems = new List<CopilotActionMetaItem>();
			CopilotActionMetaItemCollection systemActionMetaItems = SystemIntent?.Actions;
			if (systemActionMetaItems != null && systemActionMetaItems.IsNotNullOrEmpty()) {
				actionMetaItems.AddRange(systemActionMetaItems);
			}
			var currentIntentActionsMetaItems = GetCurrentIntentActionsMetaItems(currentIntentId);
			actionMetaItems.AddRange(currentIntentActionsMetaItems);
			return actionMetaItems;
		}

		private IEnumerable<CopilotActionMetaItem> GetCurrentIntentActionsMetaItems(Guid? intentId) {
			if (intentId.IsNullOrEmpty()) {
				return new List<CopilotActionMetaItem>();
			}
			CopilotIntentSchema intent = IntentSchemaManager.FindInstanceByUId(intentId.Value);
			List<CopilotActionMetaItem> actions = intent?.Actions?.ToList();
			return actions ?? new List<CopilotActionMetaItem>();
		}

		private (List<ToolDefinition> tools, Dictionary<string, IToolExecutor> toolMapping) GetToolDefinitions(
				Guid? intentId) {
			IEnumerable<CopilotIntentSchema> commonIntents = FindCommonIntents(intentId);
			IEnumerable<CopilotActionMetaItem> actionMetaItems = GetActionsMetaItems(intentId);
			var (tools, toolMapping) =
				CopilotToolProcessor.GetToolDefinitions(_userConnection, actionMetaItems, commonIntents);
			return (tools, toolMapping);
		}

		private ChatCompletionRequest CreateCompletionRequest(CopilotSession session, List<ToolDefinition> tools) {
			List<ChatMessage> messages = session.Messages
				.Select(msg => msg.ToCompletionApiMessage())
				.ToList();
			var completionRequest = new ChatCompletionRequest {
				Messages = messages,
				Tools = tools,
				Temperature = null
			};
			return completionRequest;
		}

		private (DateTime? start, DateTime? end, ChatCompletionResponse response) ProcessCompletionRequest(
				ChatCompletionRequest request) {
			DateTime? start = DateTime.Now;
			ChatCompletionResponse response = _completionService.ChatCompletion(request);
			DateTime? end = DateTime.Now;
			return (start, end, response);
		}

		private void HandleToolCalls(CopilotSession session, ChatCompletionResponse response,
				Dictionary<string, IToolExecutor> mapping) {
			List<CopilotMessage> messages =
				CopilotToolProcessor.HandleToolCalls(_userConnection, response, session, mapping);
			HandleToolCallsCompleted(messages, session);
		}

		private (bool isFailed, string errorMessage, string errorCode) HandleException(Exception e) {
			if (e is GenAIException genAiException) {
				return (true, genAiException.Message, genAiException.ErrorCode);
			}
			_log.Error(e);
			return (true, e.Message, CopilotServiceErrorCode.UnknownError);
		}

		private CopilotChatPart SendSession(CopilotSession session) {
			lock (session) {
				DateTime? startDate = null, endDate = null;
				ChatCompletionResponse completionResponse = null;
				string errorMessage = string.Empty, errorCode = string.Empty;
				CopilotMessage lastMessage = session.Messages.Last();
				(List<ToolDefinition> tools, Dictionary<string, IToolExecutor> toolMapping) = GetToolDefinitions(session.CurrentIntentId);
				ChatCompletionRequest completionRequest = CreateCompletionRequest(session, tools);
				var isFailed = false;
				Guid requestId;
				try {
					SendMessagesToClient(session);
					(startDate, endDate, completionResponse) = ProcessCompletionRequest(completionRequest);
					HandleCompletionResponse(completionResponse, session);
					HandleToolCalls(session, completionResponse, toolMapping);
				} catch (Exception e) {
					(isFailed, errorMessage, errorCode) = HandleException(e);
				} finally {
					UsageResponse usage = completionResponse?.Usage;
					requestId = SaveRequestInfo(startDate, endDate, usage, errorMessage, isFailed);
				}
				_sessionManager.Update(session.Id, requestId);
				var messages = new List<CopilotMessage> { lastMessage };
				return new CopilotChatPart(messages, session, errorMessage, errorCode);
			}
		}

		#endregion

		#region Methods: Public

		public CopilotChatPart SendUserMessage(string content, Guid? copilotSessionId = null,
				CopilotContext copilotContext = null) {
			CopilotSession session = null;
			if (copilotSessionId.HasValue && copilotSessionId.Value.IsNotEmpty()) {
				session = _sessionManager.FindById(copilotSessionId.Value);
			}
			if (session == null) {
				session = CreateSession();
			}
			session.UpdateContext(copilotContext, _contextBuilder);
			CopilotMessage userMessage = CopilotMessage.FromUser(content);
			session.AddMessage(userMessage);
			return SendSession(session);
		}

		public void CompleteAction(Guid copilotSessionId, string actionInstanceUId,
				CopilotActionExecutionResult result) {
			CopilotSession session = _sessionManager.FindById(copilotSessionId);
			if (session?.State != CopilotSessionState.Active) {
				return;
			}
			string resultContent = result.Status == CopilotActionExecutionStatus.Completed
				? result.Response ?? "Ok"
				: result.ErrorMessage ?? "Unknown error occurred";
			List<CopilotMessage> toolMessages = session.CreateToolCallMessages(actionInstanceUId, resultContent);
			HandleToolCallsCompleted(toolMessages, session);
		}

		#endregion

	}

}

