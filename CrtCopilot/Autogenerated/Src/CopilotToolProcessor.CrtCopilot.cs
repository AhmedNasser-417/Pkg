namespace Terrasoft.Configuration.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Core.Applications.GenAI;
	using Newtonsoft.Json;
	using Terrasoft.Common;
	using Terrasoft.Copilot;
	using Terrasoft.Copilot.Actions;
	using Terrasoft.Copilot.Metadata;
	using Terrasoft.Core;
	using Terrasoft.Enrichment.Interfaces.ChatCompletion;
	using Terrasoft.Enrichment.Interfaces.ChatCompletion.Responses;
	using SystemSettings = Terrasoft.Core.Configuration.SysSettings;
	using global::Common.Logging;

	public interface IToolExecutor
	{
		List<CopilotMessage> Execute(string toolCallId, Dictionary<string,object> arguments,
			CopilotSession session);
	}

	public class CopilotToolProcessor
	{

		#region Class: NotFoundToolExecutor

		private class NotFoundToolExecutor: IToolExecutor
		{
			public List<CopilotMessage> Execute(string toolCallId, Dictionary<string, object> arguments,
				CopilotSession session) {
				return new List<CopilotMessage> {
					new CopilotMessage(FnNotFoundMessage, CopilotMessageRole.Tool, toolCallId),
				};
			}
		}

		#endregion

		#region Class: IntentToolExecutor

		private class IntentToolExecutor : IToolExecutor
		{
			private readonly CopilotIntentSchema _instance;

			public IntentToolExecutor(CopilotIntentSchema instance) {
				_instance = instance;
			}

			public List<CopilotMessage> Execute(string toolCallId, Dictionary<string, object> arguments,
					CopilotSession session) {
				session.SetCurrentIntent(_instance.UId);
				return new List<CopilotMessage> {
					CopilotMessage.FromTool($"Intent started: Name: {_instance.Name}, Caption: {_instance.Caption}, " +
						$"Description: {_instance.Description}.", toolCallId),
					CopilotMessage.FromSystem(_instance.Prompt)
				};
			}
		}

		#endregion

		#region Class: ActionToolExecutor

		private class ActionToolExecutor : IToolExecutor
		{

			#region Fields: Private

			private readonly ILog _log = LogManager.GetLogger("Copilot");
			private readonly CopilotActionMetaItem _instance;
			private readonly UserConnection _userConnection;

			#endregion

			public ActionToolExecutor(CopilotActionMetaItem instance, UserConnection userConnection) {
				_instance = instance;
				_userConnection = userConnection;
			}

			public List<CopilotMessage> Execute(string toolCallId, Dictionary<string, object> arguments,
					CopilotSession session) {
				Dictionary<string, string> stringifiedArgs = arguments != null
					? arguments.ToDictionary(k => k.Key, k => k.Value.ToString())
					: new Dictionary<string, string>();
				CopilotAction action = _instance.CreateActionInstance(_userConnection);
				CopilotActionExecutionResult result;
				try {
					result = action.Run(new CopilotActionExecutionOptions {
						InstanceUId = toolCallId,
						CopilotSessionUId = session.Id,
						ParameterValues = stringifiedArgs
					});
				} catch (Exception e) {
					_log.Error(e);
					result = new CopilotActionExecutionResult {
						ErrorMessage = e.Message,
						Status = CopilotActionExecutionStatus.Failed
					};
				}
				var messages = new List<CopilotMessage>();
				if (result == null) {
					messages.Add(new CopilotMessage(AsyncFnTemporaryResultMessage, CopilotMessageRole.Tool,
						toolCallId));
				} else {
					string content = result.Status == CopilotActionExecutionStatus.Failed
						? result.ErrorMessage ?? "Unknown error"
						: result.Response; 
					messages.Add(new CopilotMessage(content, CopilotMessageRole.Tool, toolCallId));
				}
				return messages;
			}
		}

		#endregion

		#region Constants: Private

		private const string FnNotFoundMessage = "Function not found. Use only suggested functions (tools)!";
		private const string AsyncFnTemporaryResultMessage =
			"Invoking... It may take some time. You will get results a bit later. Don't try to re-execute until that time";

		#endregion

		#region Methods: Private

		private static Dictionary<string, object> ParseArguments(string functionCallingArguments) {
			Dictionary<string, object> result = functionCallingArguments.IsNotNullOrWhiteSpace()
				? JsonConvert.DeserializeObject<Dictionary<string, object>>(functionCallingArguments)
				: null;
			return result ?? new Dictionary<string, object>();
		}

		private static int GetAvailableFunctionCallingCount(UserConnection userConnection, List<CopilotMessage> messages) {
			int maxFunctionCallingCountPerCopilotRequest =
				SystemSettings.GetValue(userConnection, "MaxFunctionCallingCountPerCopilotRequest", 15);
			int lastUserIndex = messages.FindLastIndex(x => x.Role == CopilotMessageRole.User);
			int lastAssistantMessagesCount = messages
				.Skip(lastUserIndex + 1)
				.Count(m => m.Role == CopilotMessageRole.Assistant);
			int availableFunctionCallingCount = maxFunctionCallingCountPerCopilotRequest - lastAssistantMessagesCount;
			return availableFunctionCallingCount;
		}

		#endregion

		#region Methods: Public

		public static (List<ToolDefinition> tools, Dictionary<string, IToolExecutor> mapping) GetToolDefinitions(
				UserConnection userConnection, IEnumerable<CopilotActionMetaItem> actionItems,
				IEnumerable<CopilotIntentSchema> intents) {
			List<ToolDefinition> tools = new List<ToolDefinition>();
			var mapping = new Dictionary<string, IToolExecutor>();
			foreach (CopilotIntentSchema intent in intents) {
				ToolDefinition toolDefinition = intent.ToTool();
				mapping[toolDefinition.Function.Name] = new IntentToolExecutor(intent);
				tools.Add(toolDefinition);
			}
			foreach (CopilotActionMetaItem actionItem in actionItems) {
				ToolDefinition toolDefinition = actionItem.ToTool();
				mapping[toolDefinition.Function.Name] = new ActionToolExecutor(actionItem, userConnection);
				tools.Add(toolDefinition);
			}
			return (tools, mapping);
		}

		public static List<CopilotMessage> HandleToolCalls(UserConnection userConnection,
				ChatCompletionResponse completionResponse, CopilotSession session,
				Dictionary<string, IToolExecutor> toolMapping) {
			int availableFunctionCallingCount = GetAvailableFunctionCallingCount(userConnection, session.Messages.ToList());
			IEnumerable<ToolCall> toolCalls = completionResponse?.Choices?
				.SelectMany(choice => choice?.Message?.ToolCalls ?? new List<ToolCall>()) 
				.Where(toolCall => toolCall?.FunctionCall != null && toolCall.FunctionCall.Name.IsNotNullOrEmpty())
				.Take(availableFunctionCallingCount)
				.ToList();
			var resultMessages = new List<CopilotMessage>();
			if (toolCalls.IsNullOrEmpty() || toolMapping.IsNullOrEmpty()) {
				return resultMessages;
			}
			foreach (ToolCall toolCall in toolCalls) {
				Dictionary<string, object> arguments = ParseArguments(toolCall.FunctionCall.Arguments);
				string functionCallName = toolCall.FunctionCall.Name;
				resultMessages.Add(new CopilotMessage(toolCall));
				List<CopilotMessage> copilotMessages;
				if (!toolMapping.TryGetValue(functionCallName, out IToolExecutor executor)) {
					var notFoundToolExecutor = new NotFoundToolExecutor();
					copilotMessages = notFoundToolExecutor.Execute(toolCall.Id, arguments, session);
					resultMessages.AddRange(copilotMessages);
					continue;
				}
				copilotMessages = executor.Execute(toolCall.Id, arguments, session);
				resultMessages.AddRange(copilotMessages);
			}
			return resultMessages;
		}

		#endregion

	}
}

