namespace Terrasoft.Configuration.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Runtime.Serialization;
	using Newtonsoft.Json;
	using Terrasoft.Common;
	using Terrasoft.Copilot.Metadata;
	using Terrasoft.Core;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;

	#region Class: CopilotParametrizedActionResponseProvider

	/// <inheritdoc />
	[DefaultBinding(typeof(ICopilotParametrizedActionResponseProvider))]
	public class CopilotParametrizedActionResponseProvider: ICopilotParametrizedActionResponseProvider
	{

		#region Class: ParameterProcessingContext

		private class ParameterProcessingContext
		{

			#region Properties: Public

			public IReadOnlyList<ICopilotParameterMetaInfo> Parameters { get; }

			public Func<ICopilotParameterMetaInfo, object> ParameterValueGetter { get; }

			public Dictionary<EntitySchemaUIdRecordIdKey, List<ParameterValue>> EntityRecordIdsToLoad { get; }

			public Dictionary<string, ParameterValue> ResultValues { get; }

			#endregion

			#region Constructors: Public

			public ParameterProcessingContext(IReadOnlyList<ICopilotParameterMetaInfo> parameters,
					Func<ICopilotParameterMetaInfo, object> parameterValueGetter,
					Dictionary<EntitySchemaUIdRecordIdKey, List<ParameterValue>> entityRecordIdsToLoad,
					Dictionary<string, ParameterValue> resultValues) {
				Parameters = parameters;
				ParameterValueGetter = parameterValueGetter;
				EntityRecordIdsToLoad = entityRecordIdsToLoad;
				ResultValues = resultValues;
			}

			#endregion

		}

		#endregion

		#region Class: ParameterValue

		[Serializable]
		private class ParameterValue: ISerializable
		{

			#region Fields: Private

			private ICopilotParameterMetaInfo _parameter;

			#endregion

			#region Properties: Public

			public object Value { get; }

			public string DisplayValue { get; set; }

			public string EntitySchemaName { get; set; }

			#endregion

			#region Constructors: Public

			public ParameterValue(ICopilotParameterMetaInfo parameter, object value) {
				_parameter = parameter;
				Value = value;
				DisplayValue = string.Empty;
			}

			#endregion

			#region Methods: Public

			public void GetObjectData(SerializationInfo info, StreamingContext context) {
				info.AddValue(nameof(Value), Value);
				info.AddValue("Type", _parameter.DataValueType.Name);
				info.AddValue("Description", _parameter.Description);
				if (_parameter.DataValueType.UId != DataValueType.LookupDataValueTypeUId) {
					return;
				}
				info.AddValue(nameof(DisplayValue), DisplayValue);
				info.AddValue(nameof(EntitySchemaName), EntitySchemaName);
			}

			#endregion

		}

		#endregion

		#region Class: EntitySchemaUIdRecordIdKey

		private class EntitySchemaUIdRecordIdKey
		{

			#region Class: EntitySchemaUIdRecordIdPairEqualityComparer

			public class EntitySchemaUIdRecordIdKeyEqualityComparer: IEqualityComparer<EntitySchemaUIdRecordIdKey>
			{

				#region Methods: Public

				public bool Equals(EntitySchemaUIdRecordIdKey x, EntitySchemaUIdRecordIdKey y) {
					if (ReferenceEquals(x, y)) {
						return true;
					}
					if (ReferenceEquals(x, null)) {
						return false;
					}
					if (ReferenceEquals(y, null)) {
						return false;
					}
					if (x.GetType() != y.GetType()) {
						return false;
					}
					return x.EntitySchemaUId.Equals(y.EntitySchemaUId) && x.RecordId.Equals(y.RecordId);
				}

				public int GetHashCode(EntitySchemaUIdRecordIdKey obj) {
					unchecked {
						return (obj.EntitySchemaUId.GetHashCode() * 397) ^ obj.RecordId.GetHashCode();
					}
				}

				#endregion

			}

			#endregion

			#region Properties: Public

			public Guid EntitySchemaUId { get; set; }

			public Guid RecordId { get; set; }

			#endregion

			#region Constructors: Public

			public EntitySchemaUIdRecordIdKey(Guid entitySchemaUId, Guid recordId) {
				EntitySchemaUId = entitySchemaUId;
				RecordId = recordId;
			}

			#endregion

		}

		#endregion

		#region Methods: Private

		private static void ProcessLookupParameter(ParameterProcessingContext parameterProcessingContext,
				object value, ICopilotParameterMetaInfo parameter) {
			if (!(value is Guid guidValue) || guidValue.IsEmpty()) {
				parameterProcessingContext.ResultValues[parameter.Name] = new ParameterValue(parameter, null);
				return;
			}
			var parameterValue = new ParameterValue(parameter, guidValue);
			var pair = new EntitySchemaUIdRecordIdKey(parameter.ReferenceSchemaUId, guidValue);
			var entityRecordIdsToLoad = parameterProcessingContext.EntityRecordIdsToLoad;
			if (entityRecordIdsToLoad.TryGetValue(pair, out var existingValue)) {
				existingValue.Add(parameterValue);
			} else {
				var newValue = new List<ParameterValue> { parameterValue };
				entityRecordIdsToLoad.Add(pair, newValue);
			}
			parameterProcessingContext.ResultValues[parameter.Name] = parameterValue;
		}

		private static void LoadLookupDisplayValues(UserConnection userConnection,
				Dictionary<EntitySchemaUIdRecordIdKey, List<ParameterValue>> entityRecordIdToParametersMap) {
			var entityGroups = entityRecordIdToParametersMap.GroupBy(e => e.Key.EntitySchemaUId);
			var entitySchemaManager = userConnection.EntitySchemaManager;
			foreach (var entityGroup in entityGroups) {
				var entitySchema = entitySchemaManager.GetInstanceByUId(entityGroup.Key);
				foreach (var entityChunk in entityGroup.SplitOnChunks(900)) {
					var entityChunkDictionary = entityChunk.ToDictionary(k => k.Key.RecordId, v => v.Value);
					LoadEntityLookupDisplayValues(userConnection, entitySchema, entityChunkDictionary);
				}
			}
		}

		private static void LoadEntityLookupDisplayValues(UserConnection userConnection, EntitySchema entitySchema,
				Dictionary<Guid, List<ParameterValue>> entityRecords) {
			entityRecords.SelectMany(entityRecord => entityRecord.Value)
				.ForEach(parameterValue => parameterValue.EntitySchemaName = entitySchema.Name);
			if (entitySchema.PrimaryDisplayColumn == null) {
				return;
			}
			var esq = new EntitySchemaQuery(entitySchema);
			string primaryColumnName = entitySchema.PrimaryColumn.Name;
			string displayColumnName = entitySchema.PrimaryDisplayColumn.Name;
			esq.PrimaryQueryColumn.IsAlwaysSelect = true;
			esq.AddColumn(displayColumnName);
			EntitySchemaQueryFilterCollection filters = esq.Filters;
			IEntitySchemaQueryFilterItem filter = esq.CreateFilterWithParameters(FilterComparisonType.Equal,
				primaryColumnName, entityRecords.Keys.ToArray().Cast<object>());
			filters.Add(filter);
			EntityCollection entities = esq.GetEntityCollection(userConnection);
			foreach (Entity entity in entities) {
				var primaryColumnValue = entity.GetTypedColumnValue<Guid>(primaryColumnName);
				var parameterValues = entityRecords[primaryColumnValue];
				parameterValues.ForEach(parameter =>
					parameter.DisplayValue = entity.GetTypedColumnValue<string>(displayColumnName) ?? string.Empty);
			}
		}

		private static object GetValueFromCompositeObject(ICopilotParameterMetaInfo info,
				ICompositeObject compositeObject) {
			return compositeObject.TryGetValue(info.Name, out object value) ? value : null;
		}

		private static void ProcessCompositeObjectListParameter(ParameterProcessingContext parameterProcessingContext,
				object value, ICopilotParameterMetaInfo parameter) {
			var compositeObjectList = (ICompositeObjectList<ICompositeObject>)value;
			var compositeObjectListResultValues = new List<Dictionary<string, ParameterValue>>();
			foreach (ICompositeObject compositeObject in compositeObjectList) {
				if (compositeObject == null) {
					continue;
				}
				var compositeObjectResultValues = new Dictionary<string, ParameterValue>();
				var processingContext = new ParameterProcessingContext(parameter.ItemProperties,
					info => GetValueFromCompositeObject(info, compositeObject),
					parameterProcessingContext.EntityRecordIdsToLoad, compositeObjectResultValues);
				ProcessParameters(processingContext);
				compositeObjectListResultValues.Add(compositeObjectResultValues);
			}
			var parameterValue = new ParameterValue(parameter, compositeObjectListResultValues);
			parameterProcessingContext.ResultValues[parameter.Name] = parameterValue;
		}

		private static void ProcessObjectListParameter(ParameterProcessingContext parameterProcessingContext,
				object value, ICopilotParameterMetaInfo parameter) {
			var objectList = value != null ? (IObjectList)value : ObjectList.Create<string>();
			var objectListResultValues = new List<ParameterValue>();
			foreach (object objectValue in objectList) {
				var compositeObjectResultValues = new Dictionary<string, ParameterValue>();
				var processingContext = new ParameterProcessingContext(parameter.ItemProperties,
					_ => objectValue, parameterProcessingContext.EntityRecordIdsToLoad,
					compositeObjectResultValues);
				ProcessParameters(processingContext);
				objectListResultValues.Add(compositeObjectResultValues.Values.First());
			}
			var parameterValue = new ParameterValue(parameter, objectListResultValues);
			parameterProcessingContext.ResultValues[parameter.Name] = parameterValue;
		}

		private static void ProcessCompositeObjectParameter(ParameterProcessingContext parameterProcessingContext,
				object value, ICopilotParameterMetaInfo parameter) {
			var compositeObject = (ICompositeObject)value;
			var compositeObjectResultValues = new Dictionary<string, ParameterValue>();
			var processingContext = new ParameterProcessingContext(parameter.ItemProperties,
				info => GetValueFromCompositeObject(info, compositeObject),
				parameterProcessingContext.EntityRecordIdsToLoad, compositeObjectResultValues);
			ProcessParameters(processingContext);
			var parameterValue = new ParameterValue(parameter, compositeObjectResultValues); 
			parameterProcessingContext.ResultValues[parameter.Name] = parameterValue;
		}

		private static void ProcessParameters(ParameterProcessingContext parameterProcessingContext) {
			foreach (ICopilotParameterMetaInfo parameter in parameterProcessingContext.Parameters) {
				if (parameter.IsInternal || parameter.Direction == ParameterDirection.Input) {
					continue;
				}
				object value = parameterProcessingContext.ParameterValueGetter(parameter);
				if (parameter.DataValueType.UId == DataValueType.CompositeObjectDataValueTypeUId && value != null) {
					ProcessCompositeObjectParameter(parameterProcessingContext, value, parameter);
				} else if (parameter.DataValueType.UId == DataValueType.ObjectListDataValueTypeUId) {
					ProcessObjectListParameter(parameterProcessingContext, value, parameter);
				} else if (parameter.DataValueType.UId == DataValueType.CompositeObjectListDataValueTypeUId) {
					ProcessCompositeObjectListParameter(parameterProcessingContext, value, parameter);
				} else if (parameter.DataValueType.UId == DataValueType.LookupDataValueTypeUId) {
					ProcessLookupParameter(parameterProcessingContext, value, parameter);
				} else {
					var parameterValue = new ParameterValue(parameter, value);
					parameterProcessingContext.ResultValues[parameter.Name] = parameterValue;
				}
			}
		}

		#endregion

		#region Methods: Public

		/// <inheritdoc />
		public string GetParameterizedResponse(UserConnection userConnection, CopilotActionDescriptor actionDescriptor,
				Func<ICopilotParameterMetaInfo, object> parameterValueGetter) {
			var resultValues = new Dictionary<string, ParameterValue>();
			var equalityComparer = new EntitySchemaUIdRecordIdKey.EntitySchemaUIdRecordIdKeyEqualityComparer();
			var entityRecordIdsToLoad =
				new Dictionary<EntitySchemaUIdRecordIdKey, List<ParameterValue>>(equalityComparer);
			var parameterProcessingContext = new ParameterProcessingContext(actionDescriptor.Parameters,
				parameterValueGetter, entityRecordIdsToLoad, resultValues);
			ProcessParameters(parameterProcessingContext);
			LoadLookupDisplayValues(userConnection, entityRecordIdsToLoad);
			return JsonConvert.SerializeObject(resultValues);
		}

		#endregion

	}

	#endregion

}

