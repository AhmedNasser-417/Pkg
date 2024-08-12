﻿namespace Terrasoft.Configuration.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Runtime.Serialization;
	using Terrasoft.Common;
	using Terrasoft.Enrichment.Interfaces.ChatCompletion;

	[DataContract]
	[Serializable]
	public class CopilotSession
	{

		#region Constructors: Public

		public CopilotSession() {
		}

		public CopilotSession(Guid userId, List<CopilotMessage> messages) {
			messages.CheckArgumentNull(nameof(messages));
			Id = Guid.NewGuid();
			UserId = userId;
			State = CopilotSessionState.Active;
			StartDate = DateTime.UtcNow;
			AddMessages(messages);
		}

		#endregion

		#region Properties: Internal

		private List<CopilotMessage> _messages = new List<CopilotMessage>();

		internal IEnumerable<CopilotMessage> Messages => _messages;

		#endregion

		#region Properties: Public

		[DataMember(Name = "id")]
		public Guid Id { get; set; }
		
		[DataMember(Name = "userId")]
		public Guid UserId { get; set; }
		
		[DataMember(Name = "state")]
		public Guid State { get; set; }
		
		[DataMember(Name = "startDate")]
		public DateTime StartDate { get; set; }
		
		[DataMember(Name = "endDate")]
		public DateTime? EndDate { get; set; }
		
		[DataMember(Name = "currentIntentId")]
		public Guid? CurrentIntentId { get; set; }

		[DataMember(Name = "currentContext")]
		public CopilotContext CurrentContext { get; private set; }

		#endregion

		#region Methods: Internal

		internal void UpdateContext(CopilotContext copilotContext, ICopilotContextBuilder contextBuilder) {
			if (CurrentContext?.Equals(copilotContext) == true) {
				return;
			}
			CurrentContext = copilotContext;
			CopilotMessage contextMessage = Messages.FirstOrDefault(message => message.IsContext);
			Guid contextMessageId = contextMessage?.Id ?? Guid.NewGuid();
			if (contextMessage != null) {
				_messages.Remove(contextMessage);
			}
			if (copilotContext == null) {
				return;
			}
			string contextContent = contextBuilder.BuildMessageContent(copilotContext);
			contextMessage = CopilotMessage.FromSystem(contextContent);
			contextMessage.Id = contextMessageId;
			contextMessage.IsContext = true;
			AddMessage(contextMessage);
		}

		#endregion

		#region Methods: Public

		public CopilotSession AddMessage(CopilotMessage copilotMessage) {
			copilotMessage.IntentId = CurrentIntentId;
			_messages.Add(copilotMessage);
			return this;
		}

		public CopilotSession AddMessages(IEnumerable<CopilotMessage> copilotMessages) {
			copilotMessages.ForEach(message => message.IntentId = CurrentIntentId);
			_messages.AddRange(copilotMessages);
			return this;
		}

		public List<CopilotMessage> CreateToolCallMessages(string toolCallId, string resultContent) {
			var resultMessages = new List<CopilotMessage>();
			Guid? toolRequestMessageId = null;
			Guid? toolResponseMessageId = null;
			lock (Messages) {
				CopilotMessage oldCallRequestMessage = Messages.FirstOrDefault(msg =>
					msg.ToolCalls.Any(call => call.Id == toolCallId) && msg.Role == CopilotMessageRole.Assistant);
				if (oldCallRequestMessage == null) {
					return resultMessages;
				}
				ToolCall toolCall = oldCallRequestMessage.ToolCalls.FirstOrDefault(call => call.Id == toolCallId);
				oldCallRequestMessage.ToolCalls.Remove(toolCall);
				if (oldCallRequestMessage.ToolCalls.Count == 0) {
					toolRequestMessageId = oldCallRequestMessage.Id;
					_messages.Remove(oldCallRequestMessage);
				}
				CopilotMessage oldCallResponseMessage = Messages.FirstOrDefault(msg =>
					msg.ToolCallId == toolCallId && msg.Role == CopilotMessageRole.Tool);
				if (oldCallResponseMessage != null) {
					toolResponseMessageId = oldCallResponseMessage.Id;
					_messages.Remove(oldCallResponseMessage);
				}
				CopilotMessage newCallRequestMessage = CopilotMessage.FromAssistant(toolCall);
				newCallRequestMessage.Id = toolRequestMessageId ?? newCallRequestMessage.Id; 
				CopilotMessage newCallResponseMessage = CopilotMessage.FromTool(resultContent, toolCallId);
				newCallResponseMessage.Id = toolResponseMessageId ?? newCallResponseMessage.Id;
				resultMessages.AddRange(new [] {
					newCallRequestMessage,
					newCallResponseMessage
				});
				return resultMessages;
			}
		}

		public void SetCurrentIntent(Guid intentId) {
			CurrentIntentId = intentId;
			CopilotMessage lastUserMessage = _messages.FindLast(message => message.Role == CopilotMessageRole.User);
			if (lastUserMessage != null) {
				lastUserMessage.IntentId = intentId;
				lastUserMessage.IsSaved = false;
			}
		}

		#endregion

	}

}

