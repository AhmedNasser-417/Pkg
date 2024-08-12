namespace Terrasoft.Configuration.Copilot
{
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Common.Json;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using SystemSettings = Terrasoft.Core.Configuration.SysSettings;

	public interface ICopilotContextBuilder
	{
		string BuildMessageContent(CopilotContext copilotContext);
	}

	[DefaultBinding(typeof(ICopilotContextBuilder))]
	internal class CopilotContextBuilder: ICopilotContextBuilder
	{

		#region Constants: Private

		private const string DefaultCopilotContextPromptTemplate = "To solve user tasks you can use information from the " +
			"current user's context. The user's screen was devided to several parts, each one corresponds with a context part. " +
			"Here they are: \n{contextParts}\nEach datasource of a context part contains one or several records. " +
			"You can get data for columns you may need. To do this call function which exact name is 'ResolveContext' " +
			"and pass to its arguments datasource's EntitySchemaName, array of column codes and array of primary key values";

		#endregion

		#region Field: Private

		private readonly UserConnection _userConnection;

		#endregion

		#region Constructors: Public

		public CopilotContextBuilder(UserConnection userConnection) {
			_userConnection = userConnection;
		}

		#endregion

		#region Properties: Private

		private string MessageContentTemplate => SystemSettings.GetValue(_userConnection, 
			"CopilotContextPromptTemplate", DefaultCopilotContextPromptTemplate);

		#endregion

		#region Methods: Private

		private void UpdateContextPartDataSourceColumns(CopilotContextPart contextPart) {
			contextPart.DataSources.ForEach(dataSource => 
				dataSource.Columns = GetEntitySchemaColumns(dataSource.EntitySchemaName));
		}

		private List<CopilotContextDataSourceColumn> GetEntitySchemaColumns(string entitySchemaName) {
			EntitySchema entitySchema = _userConnection.EntitySchemaManager.GetInstanceByName(entitySchemaName);
			var columns = entitySchema.Columns.Select(column => new CopilotContextDataSourceColumn {
				Name = column.Name,
				Caption = column.Caption,
				Type = column.DataValueType?.Name,
				ReferenceEntitySchemaName = column.ReferenceSchema?.Name
			}).ToList();
			return columns;
		}

		#endregion

		#region Methods: Public

		public string BuildMessageContent(CopilotContext copilotContext) {
			foreach (CopilotContextPart contextPart in copilotContext.Parts) {
				UpdateContextPartDataSourceColumns(contextPart);
			}
			string contextContent = Json.Serialize(copilotContext);
			string contextMessageContent = MessageContentTemplate.Replace("{contextParts}", contextContent);
			return contextMessageContent;
		}

		#endregion

	}
} 
