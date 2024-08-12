// ReSharper disable NonReadonlyMemberInGetHashCode
namespace Terrasoft.Configuration.Copilot
{
	using System;
	using System.Collections.Generic;
	using System.Linq;
	using System.Runtime.Serialization;

	/// <summary>
	/// Client's context that is used for Copilot to understand what client is dealing with at the current moment.
	/// </summary>
	[DataContract]
	[Serializable]
	public class CopilotContext
	{

		#region Properties: Public

		[DataMember(Name = "parts")]
		public List<CopilotContextPart> Parts { get;  private set; } = new List<CopilotContextPart>();

		#endregion

		#region Methods: Protected

		protected bool Equals(CopilotContext other) {
			return Parts.Count == other.Parts.Count && Parts.All(other.Parts.Contains);
		}

		#endregion

		#region Methods: Public

		/// <summary>Determines whether the specified object is equal to the current object.</summary>
		/// <param name="obj">The object to compare with the current object. </param>
		/// <returns>
		/// <see langword="true" /> if the specified object  is equal to the current object; otherwise,
		/// <see langword="false" /></returns>
		public override bool Equals(object obj) {
			if (ReferenceEquals(null, obj)) {
				return false;
			}
			if (ReferenceEquals(this, obj)) {
				return true;
			}
			if (obj.GetType() != GetType()) {
				return false;
			}
			return Equals((CopilotContext)obj);
		}

		/// <summary>Serves as the default hash function. </summary>
		/// <returns>A hash code for the current object.</returns>
		public override int GetHashCode() {
			return Parts != null ? Parts.GetHashCode() : 0;
		}

		#endregion

	}

	/// <summary>
	/// Part of the whole client's context.
	/// </summary>
	[DataContract]
	[Serializable]
	public class CopilotContextPart
	{

		#region Constructors: Public

		/// <summary>Initializes a new instance of the <see cref="T:System.Object" /> class.</summary>
		public CopilotContextPart(string pageSchemaName) {
			PageSchemaName = pageSchemaName;
		}

		#endregion

		#region Properties: Public

		/// <summary>
		/// Schema name of the context's page.
		/// </summary>
		[DataMember(Name = "pageSchemaName")]
		public string PageSchemaName { get; private set; }

		/// <summary>
		/// List of data sources.
		/// </summary>
		[DataMember(Name = "dataSources")]
		public List<CopilotContextDataSource> DataSources { get; private set; } = new List<CopilotContextDataSource>();

		#endregion

		#region Methods: Protected

		protected bool Equals(CopilotContextPart other) {
			return PageSchemaName == other.PageSchemaName && DataSources.Count == other.DataSources.Count && 
				DataSources.All(other.DataSources.Contains);
		}

		#endregion

		#region Methods: Public

		/// <summary>Determines whether the specified object is equal to the current object.</summary>
		/// <param name="obj">The object to compare with the current object. </param>
		/// <returns>
		/// <see langword="true" /> if the specified object  is equal to the current object; otherwise,
		/// <see langword="false" /></returns>
		public override bool Equals(object obj) {
			if (ReferenceEquals(null, obj)) {
				return false;
			}
			if (ReferenceEquals(this, obj)) {
				return true;
			}
			if (obj.GetType() != GetType()) {
				return false;
			}
			return Equals((CopilotContextPart)obj);
		}

		/// <summary>Serves as the default hash function. </summary>
		/// <returns>A hash code for the current object.</returns>
		public override int GetHashCode() {
			unchecked {
				return ((PageSchemaName != null ? PageSchemaName.GetHashCode() : 0) * 397)
					^ (DataSources != null ? DataSources.GetHashCode() : 0);
			}
		}

		#endregion

	}

	/// <summary>
	/// Datasource used in context part.
	/// </summary>
	[DataContract]
	[Serializable]
	public class CopilotContextDataSource
	{

		#region Constructors: Public

		/// <summary>Initializes a new instance of the <see cref="T:System.Object" /> class.</summary>
		public CopilotContextDataSource(string entitySchemaName, bool isCollection, bool isPrimary,
				List<Guid> recordIds) {
			EntitySchemaName = entitySchemaName;
			IsCollection = isCollection;
			IsPrimary = isPrimary;
			RecordIds = recordIds ?? new List<Guid>();
		}

		#endregion

		#region Properties: Public

		/// <summary>
		/// Entity schema name.
		/// </summary>
		[DataMember(Name = "entitySchemaName")]
		public string EntitySchemaName { get;  private set; }

		/// <summary>
		/// Indicated datasource is in collection mode (i.e. grid).
		/// </summary>
		[DataMember(Name = "isCollection")]
		public bool IsCollection { get;  private set; }

		/// <summary>
		/// Primary keys of record(s) in the datasource.
		/// </summary>
		[DataMember(Name = "recordIds")]
		public List<Guid> RecordIds { get; private set; }

		/// <summary>
		/// Indicates it is the primary datasource for the give context part.
		/// </summary>
		[DataMember(Name = "isPrimary")]
		public bool IsPrimary { get;  private set; }

		/// <summary>
		/// Columns of <see cref="EntitySchemaName"/>.
		/// </summary>
		[DataMember(Name = "columns")]
		public List<CopilotContextDataSourceColumn> Columns { get; set; }

		#endregion

		#region Methods: Protected

		protected bool Equals(CopilotContextDataSource other) {
			if (other == null) {
				return false;
			}
			if (ReferenceEquals(this, other)) {
				return false;
			}
			return EntitySchemaName == other.EntitySchemaName 
				&& IsCollection == other.IsCollection
				&& RecordIds.Count == other.RecordIds.Count
				&& RecordIds.All(other.RecordIds.Contains) 
				&& IsPrimary == other.IsPrimary;
		}

		#endregion

		#region Methods: Public

		/// <summary>Determines whether the specified object is equal to the current object.</summary>
		/// <param name="obj">The object to compare with the current object. </param>
		/// <returns>
		/// <see langword="true" /> if the specified object  is equal to the current object; otherwise,
		/// <see langword="false" /></returns>
		public override bool Equals(object obj) => this.Equals(obj as CopilotContextDataSource);

		/// <summary>Serves as the default hash function. </summary>
		/// <returns>A hash code for the current object.</returns>
		public override int GetHashCode() {
			unchecked {
				int hashCode = EntitySchemaName != null ? EntitySchemaName.GetHashCode() : 0;
				hashCode = (hashCode * 397) ^ IsCollection.GetHashCode();
				hashCode = (hashCode * 397) ^ (RecordIds != null ? RecordIds.GetHashCode() : 0);
				hashCode = (hashCode * 397) ^ IsPrimary.GetHashCode();
				return hashCode;
			}
		}

		#endregion

	}

	/// <summary>
	/// Column config for content datasource's entity schema.
	/// </summary>
	[DataContract]
	[Serializable]
	public class CopilotContextDataSourceColumn
	{
		[DataMember(Name = "name")]
		public string Name { get; set; }
		
		[DataMember(Name = "caption")]
		public string Caption { get; set; }
		
		[DataMember(Name = "type")]
		public string Type { get; set; }
		
		[DataMember(Name = "referenceEntitySchemaName", EmitDefaultValue = false)]
		public string ReferenceEntitySchemaName { get; set; }
	}
}

