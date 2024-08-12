﻿namespace Terrasoft.Configuration.Copilot
{
	using System;
	using System.Collections.Generic;
	using Terrasoft.Copilot;
	using Terrasoft.Copilot.Actions;
	using Terrasoft.Copilot.Metadata;
	using Terrasoft.Core;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Hooks;
	using Terrasoft.Core.Tasks;
	using HookArgs = Core.Process.Hooks.ProcessExecutionHookArgs<ProcessCopilotAction.ProcessCompletionHookArgs>;

	#region Class: ProcessCopilotAction

	/// <summary>
	/// Represents a Copilot action associated with a process.
	/// </summary>
	public class ProcessCopilotAction : CopilotAction
	{

		#region Class: ProcessCompletionHookArgs

		/// <summary>
		/// Represents arguments for the process completion hook.
		/// </summary>
		public class ProcessCompletionHookArgs
		{

			#region Properties: Public

			/// <summary>
			/// Gets or sets the unique identifier of the Copilot intent schema.
			/// </summary>
			public Guid IntentSchemaUId { get; set; }

			/// <summary>
			/// Gets or sets the unique identifier of the action element.
			/// </summary>
			public Guid ActionElementUId { get; set; }

			/// <summary>
			/// Gets or sets the unique identifier of the Copilot session.
			/// </summary>
			public Guid CopilotSessionUId { get; set; }

			/// <summary>
			/// Gets or sets the unique identifier of the Copilot action instance.
			/// </summary>
			public string CopilotActionInstanceUId { get; set; }

			/// <summary>
			/// Gets or sets the execution identifier.
			/// </summary>
			public Guid ExecutionId { get; set; }

			#endregion

		}

		#endregion

		#region Class: ProcessCompletionHook

		/// <summary>
		/// Represents a background task for the process completion hook.
		/// </summary>
		[DefaultBinding(typeof(ProcessCompletionHook))]
		public class ProcessCompletionHook : IBackgroundTask<HookArgs>
		{

			#region Fields: Private

			private readonly ICopilotEngine _copilotEngine;
			private readonly ICopilotParametrizedActionResponseProvider _responseProvider;

			#endregion

			#region Constructors: Public

			public ProcessCompletionHook(ICopilotEngine copilotEngine,
					ICopilotParametrizedActionResponseProvider responseProvider) {
				_copilotEngine = copilotEngine;
				_responseProvider = responseProvider;
			}

			#endregion

			#region Methods: Private

			private CopilotActionExecutionResult FillResults(HookArgs args, CopilotActionDescriptor actionDescriptor) {
				BaseProcessHookArgs processHookInfo = args.ProcessHookInfo;
				UserConnection userConnection = args.UserConnection;
				IProcessInfo processInfo = processHookInfo.Process;
				string response =
					_responseProvider.GetParameterizedResponse(userConnection, actionDescriptor, GetParameterValue);
				return new CopilotActionExecutionResult {
					Status = processInfo.Descriptor.ProcessStatus == ProcessStatus.Done
						? CopilotActionExecutionStatus.Completed
						: CopilotActionExecutionStatus.Failed,
					ErrorMessage = (processHookInfo as ProcessExecutionErrorHookArgs)?.ErrorMessage,
					Response = response
				};
				object GetParameterValue(ICopilotParameterMetaInfo info) => processInfo.GetParameterValue(info.Name).Value;
			}

			private CopilotActionDescriptor GetActionDescriptor(HookArgs parameters) {
				ProcessCompletionHookArgs hookArgs = parameters.Arguments;
				var intentSchemaManager = parameters.UserConnection.Workspace.SchemaManagerProvider
					.GetManager<CopilotIntentSchemaManager>();
				CopilotIntentSchema intentSchema = intentSchemaManager.GetInstanceByUId(hookArgs.IntentSchemaUId);
				CopilotActionMetaItem action = intentSchema.Actions.GetByUId(hookArgs.ActionElementUId);
				return action.Descriptor;
			}

			#endregion

			#region Methods: Public

			/// <summary>
			/// Runs the process completion hook.
			/// </summary>
			public void Run(HookArgs parameters) {
				CopilotActionDescriptor actionDescriptor = GetActionDescriptor(parameters);
				CopilotActionExecutionResult result = FillResults(parameters, actionDescriptor);
				if (parameters.InlineExecutionContext is SyncExecutionResultBucket resultBucket) {
					resultBucket.Result = result;
				} else {
					ProcessCompletionHookArgs args = parameters.Arguments;
					_copilotEngine.CompleteAction(args.CopilotSessionUId, args.CopilotActionInstanceUId, result);
				}
			}

			#endregion

		}

		#endregion

		#region Class: SyncExecutionResultBucket

		/// <summary>
		/// Represents a bucket for synchronous execution result.
		/// </summary>
		private class SyncExecutionResultBucket
		{

			#region Properties: Public

			/// <summary>
			/// Gets or sets the Copilot action execution result.
			/// </summary>
			public CopilotActionExecutionResult Result { get; set; }

			#endregion

		}

		#endregion

		#region Constructors: Public

		/// <summary>
		/// Initializes a new instance of the <see cref="ProcessCopilotAction"/> class with the specified
		/// Copilot action meta item and user connection.
		/// </summary>
		/// <param name="actionMetaItem">The Copilot action meta item.</param>
		/// <param name="userConnection">The user connection.</param>
		public ProcessCopilotAction(CopilotActionMetaItem actionMetaItem, UserConnection userConnection)
			: base(actionMetaItem, userConnection) {
		}

		#endregion

		#region Methods: Protected

		/// <inheritdoc />
		protected override CopilotActionExecutionResult InternalRun(CopilotActionExecutionOptions options) {
			var metaItem = (ProcessCopilotActionMetaItem)ActionMetaItem;
			Guid processSchemaUId = metaItem.ProcessSchemaUId;
			ProcessExecutionHookEvents hookEvents =
				ProcessExecutionHookEvents.ProcessCompleted | ProcessExecutionHookEvents.ElementFailed;
			var hookArgs = new ProcessCompletionHookArgs {
				IntentSchemaUId = metaItem.IntentSchema.UId,
				ActionElementUId = metaItem.UId,
				CopilotSessionUId = options.CopilotSessionUId,
				CopilotActionInstanceUId = options.InstanceUId
			};
			var resultBucket = new SyncExecutionResultBucket();
			ExecuteProcessOptions executeProcessOptions = ExecuteProcessOptions
				.RunBySchemaUId(processSchemaUId)
				.WithParseSerializableObjectAsJson()
				.WithHook<ProcessCompletionHook, ProcessCompletionHookArgs>(hookArgs, hookEvents,
					resultBucket);
			var values = new Dictionary<string, string>(options.ParameterValues);
			foreach (ICopilotParameterMetaInfo parameter in metaItem.Descriptor.Parameters) {
				if (parameter.IsInternal) {
					values.Remove(parameter.Name);
					continue;
				}
				if (parameter.DefValue != null && !values.ContainsKey(parameter.Name)) {
					values[parameter.Name] = parameter.DefValue.Value;
				}
			}
			executeProcessOptions.ParameterValues = values;
			UserConnection.ProcessEngine.ProcessExecutor.Execute(executeProcessOptions);
			return resultBucket.Result;
		}

		#endregion

	}

	#endregion

}

