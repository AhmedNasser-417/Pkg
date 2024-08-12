namespace Terrasoft.Configuration.Copilot
{
	using System;
	using Terrasoft.Copilot.Actions;

	public interface ICopilotEngine
	{
		CopilotChatPart SendUserMessage(string content, Guid? copilotSessionId, CopilotContext copilotContext);
		void CompleteAction(Guid copilotSessionId, string actionInstanceUId, CopilotActionExecutionResult result);
	}

}

