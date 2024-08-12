namespace Terrasoft.Configuration.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using Terrasoft.Copilot;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;

    #region Class: CopilotIntentQueryExecutor

	[DefaultBinding(typeof(IEntityQueryExecutor), Name = "CopilotIntentQueryExecutor")]
	public class CopilotIntentQueryExecutor : IEntityQueryExecutor
	{

    	#region Fields: Private

		private readonly string _entitySchemaName = "CopilotIntent";

		private readonly UserConnection _userConnection;

		private CopilotIntentSchemaManager _copilotIntentSchemaManager;

    	#endregion

    	#region Constructors: Public

		public CopilotIntentQueryExecutor(UserConnection userConnection) {
			_userConnection = userConnection;
		}

    	#endregion

    	#region Properties: Public

		public CopilotIntentSchemaManager CopilotIntentSchemaManager =>
			_copilotIntentSchemaManager ?? (_copilotIntentSchemaManager =
				(CopilotIntentSchemaManager)_userConnection.GetSchemaManager(nameof(CopilotIntentSchemaManager)));

		public EntitySchema IntentEntitySchema =>
			_userConnection.EntitySchemaManager.GetInstanceByName(_entitySchemaName);

    	#endregion

    	#region Methods: Private

		private Entity GetIntentEntityFromManagerItem(ISchemaManagerItem<CopilotIntentSchema> managerItem) {
			//CopilotIntentSchema instance = managerItem.Instance;
			Entity entity = IntentEntitySchema.CreateEntity(_userConnection);
			entity.LoadColumnValue("Id", managerItem.UId);
			entity.LoadColumnValue("Code", managerItem.Name);
			entity.LoadColumnValue("Description", managerItem.Description);
			entity.LoadColumnValue("Name", managerItem.Caption);
			//entity.LoadColumnValue("Prompt", instance.Prompt);
			return entity;
		}

    	#endregion

    	#region Methods: Public

		/// <summary>
		/// Returns intent data.
		/// </summary>
		/// <param name="esq">Filters.</param>
		/// <returns>Intent data.</returns>
		public EntityCollection GetEntityCollection(EntitySchemaQuery esq) {
			IEnumerable<ISchemaManagerItem<CopilotIntentSchema>> managerItems = CopilotIntentSchemaManager.GetItems()
				.Where(item => {
					ExtraProperty property = item.ExtraProperties.FindByName("Type");
					return Enum.TryParse(property?.Value?.ToString(),
						out CopilotIntentType intentType) && intentType.Equals(CopilotIntentType.Common);
				});
			var collection = new EntityCollection(_userConnection, IntentEntitySchema);
			foreach (ISchemaManagerItem<CopilotIntentSchema> schemaManagerItem in managerItems) {
				Entity entity = GetIntentEntityFromManagerItem(schemaManagerItem);
				collection.Add(entity);
			}
			return collection;
		}

    	#endregion

	}

    #endregion

}

