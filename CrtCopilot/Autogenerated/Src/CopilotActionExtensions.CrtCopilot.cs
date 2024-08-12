namespace Terrasoft.Configuration.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common;
	using Terrasoft.Copilot;
	using Terrasoft.Copilot.Metadata;
	using Terrasoft.Core;
	using Terrasoft.Enrichment.Interfaces.ChatCompletion;

	internal static class CopilotActionExtensions
	{

		#region Constants: Private

		private const int ShortStringLength = 22;

		#endregion

		#region Fields: Private

		private static readonly List<string> _systemActionNames = new List<string> {
			"ResolveContext", "DateDiff", "GetCurrentUserInfo", "GetCurrentDateTime"
		};

		#endregion

		#region Methods: Private

		private static string ToShortString(Guid guid) {
			var base64Guid = Convert.ToBase64String(guid.ToByteArray());

			// Replace URL unfriendly characters
			base64Guid = base64Guid.Replace('+', '-').Replace('/', '_');

			// Remove the trailing ==
			return base64Guid.Substring(0, base64Guid.Length - 2);
		}

		private static Guid FromShortString(string str) {
			str = str.Replace('_', '/').Replace('-', '+');
			var byteArray = Convert.FromBase64String(str + "==");
			return new Guid(byteArray);
		}

		private static string FormatToolName(string name, Guid uid) {
			return _systemActionNames.Contains(name) ? name : $"{name}_{ToShortString(uid)}";
		}
		
		private static Guid GetUIdFromToolName(string toolName) {
			var uidShortString = toolName.Substring(toolName.Length - ShortStringLength);
			return FromShortString(uidShortString);
		}

		private static PropertyDefinition DefineCompositeObjectListToolDefinition(
				ICopilotParameterMetaInfo parameterMetaInfo) {
			var properties = new Dictionary<string, PropertyDefinition>();
			foreach (ICopilotParameterMetaInfo internalParameterMetaInfo in parameterMetaInfo.ItemProperties) {
				properties[internalParameterMetaInfo.Name] = internalParameterMetaInfo.ToToolParam();
			}
			List<string> requiredProperties = parameterMetaInfo.ItemProperties.Where(param => param.IsRequired)
				.Select(param => param.Name).ToList();
			var objectDefinition = PropertyDefinition.DefineObject(properties, requiredProperties, 
				parameterMetaInfo.Description, null);
			return PropertyDefinition.DefineArray(objectDefinition);
		}

		private static PropertyDefinition ToToolParam(this ICopilotParameterMetaInfo parameterMetaInfo) {
			switch (parameterMetaInfo.DataValueType) {
				case TextDataValueType _:
				case GuidDataValueType _:
				case DateTimeDataValueType _:
					return PropertyDefinition.DefineString(parameterMetaInfo.Description);
				case FloatDataValueType _:
					return PropertyDefinition.DefineNumber(parameterMetaInfo.Description);
				case IntegerDataValueType _:
					return PropertyDefinition.DefineInteger(parameterMetaInfo.Description);
				case BooleanDataValueType _:
					return PropertyDefinition.DefineBoolean(parameterMetaInfo.Description);
				case null:
					return PropertyDefinition.DefineNull(parameterMetaInfo.Description);
				case CompositeObjectListDataValueType _:
					return DefineCompositeObjectListToolDefinition(parameterMetaInfo);
				default:
					throw new NotImplementedException(
						$"DataValueType {parameterMetaInfo.DataValueType.Name} is not supported yet");
			}
		}

		#endregion

		#region Methods: Public

		public static ToolDefinition ToTool(this CopilotIntentSchema intentSchema) {
			string toolName = FormatToolName(intentSchema.Name, intentSchema.UId);
			string description = intentSchema.Description;
			if (description.IsNullOrWhiteSpace()) {
				description = intentSchema.Caption;
			}
			var functionDefinitionBuilder = new FunctionDefinitionBuilder(toolName, description);
			FunctionDefinition functionDefinition = functionDefinitionBuilder.Validate().Build();
			var tool = new ToolDefinition {
				Function = functionDefinition
			};
			return tool;
		}

		public static ToolDefinition ToTool(this CopilotActionMetaItem actionMetaItem) {
			CopilotActionDescriptor actionDescriptor = actionMetaItem.Descriptor;
			string toolName = FormatToolName(actionDescriptor.Name, actionDescriptor.UId);
			var functionDefinitionBuilder = new FunctionDefinitionBuilder(toolName, actionDescriptor.Description);
			var parameters = actionDescriptor.Parameters.Where(param => param.Direction == ParameterDirection.Input);
			foreach (ICopilotParameterMetaInfo parameterMetaInfo in parameters) {
				functionDefinitionBuilder = functionDefinitionBuilder.AddParameter(parameterMetaInfo.Name,
					parameterMetaInfo.ToToolParam(), parameterMetaInfo.IsRequired);
			}
			FunctionDefinition functionDefinition = functionDefinitionBuilder.Validate().Build();
			var tool = new ToolDefinition {
				Function = functionDefinition
			};
			return tool;
		}

		#endregion

	}
}

