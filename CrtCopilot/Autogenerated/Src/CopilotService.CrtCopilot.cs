namespace Terrasoft.Configuration.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.ServiceModel;
	using System.ServiceModel.Activation;
	using System.ServiceModel.Web;
	using System.Web.SessionState;
	using Terrasoft.Core.Factories;
	using Terrasoft.Web.Common;

	[ServiceContract]
	[AspNetCompatibilityRequirements(RequirementsMode = AspNetCompatibilityRequirementsMode.Required)]
	public class CopilotService: BaseService, IReadOnlySessionState
	{

		#region Methods: Public

		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		[return: MessageParameter(Name = "copilotChatPart")]
		public CopilotChatPart SendUserMessage(string content, Guid? copilotSessionId,
				CopilotContext copilotContext = null) {
			ICopilotEngine copilotEngine = ClassFactory.Get<ICopilotEngine>();
			CopilotChatPart copilotChatPart = copilotEngine.SendUserMessage(content, copilotSessionId, copilotContext);
			return copilotChatPart;
		}

		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		[return: MessageParameter(Name = "copilotSessions")]
		public List<CopilotSession> GetActiveCopilotSessions() {
			ICopilotSessionManager copilotSessionManager = ClassFactory.Get<ICopilotSessionManager>();
			return copilotSessionManager.GetActiveSessions(UserConnection.CurrentUser.Id)?.ToList();
		}

		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		[return: MessageParameter(Name = "copilotMessages")]
		public List<CopilotMessage> GetCopilotSessionMessage(Guid copilotSessionId) {
			ICopilotSessionManager copilotSessionManager = ClassFactory.Get<ICopilotSessionManager>();
			CopilotSession copilotSession = copilotSessionManager.FindById(copilotSessionId);
			return copilotSession?.Messages?.OrderBy(message => message.CreatedOnTicks).ToList();
		}

		[WebInvoke(Method = "POST", BodyStyle = WebMessageBodyStyle.Wrapped,
			RequestFormat = WebMessageFormat.Json, ResponseFormat = WebMessageFormat.Json)]
		public void CloseSession(Guid copilotSessionId) {
			ICopilotSessionManager copilotSessionManager = ClassFactory.Get<ICopilotSessionManager>();
			copilotSessionManager.CloseSession(copilotSessionId);
		}

		#endregion

	}

}
 
