namespace Terrasoft.Configuration.Copilot
{
	using System.Collections.Generic;
	using System.Runtime.Serialization;

	[DataContract]
	public class CopilotChatPart
	{

		#region Constructors: Public

		public CopilotChatPart(List<CopilotMessage> messages, CopilotSession copilotSession) {
			Messages = messages;
			CopilotSession = copilotSession;
		}

		public CopilotChatPart(List<CopilotMessage> messages, CopilotSession copilotSession, string errorMessage,
				string errorCode) : this(messages, copilotSession) {
			ErrorMessage = errorMessage;
			ErrorCode = errorCode;
		}

		#endregion

		#region Properties: Public

		[DataMember(Name = "messages")]
		public List<CopilotMessage> Messages { get; set; }

		[DataMember(Name = "copilotSession")]
		public CopilotSession CopilotSession { get; set; }

		[DataMember(Name = "errorMessage")]
		public string ErrorMessage { get; set; }

		[DataMember(Name = "errorCode")]
		public string ErrorCode { get; set; }

		#endregion

	}

}

