namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICopilotHistoryStorageSchema

	/// <exclude/>
	public class ICopilotHistoryStorageSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICopilotHistoryStorageSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICopilotHistoryStorageSchema(ICopilotHistoryStorageSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("94c696e0-f740-48c2-a029-90597ed84345");
			Name = "ICopilotHistoryStorage";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,144,77,110,2,49,12,133,215,140,52,119,176,88,209,13,115,128,82,54,44,10,219,194,5,2,113,192,18,147,76,99,135,10,85,189,123,157,153,128,248,145,170,74,179,241,228,189,231,207,207,155,22,185,51,59,132,13,198,104,56,56,153,46,130,119,180,79,209,8,5,175,83,71,199,32,117,245,93,87,163,196,228,247,176,62,179,96,251,90,87,250,167,105,26,152,113,106,91,19,207,243,50,175,37,68,179,71,112,33,66,177,3,35,179,198,49,24,111,129,132,65,247,178,138,120,122,9,105,110,82,186,180,61,210,14,200,11,70,151,233,86,37,103,73,172,225,231,178,65,149,153,234,9,98,160,48,39,228,199,253,211,171,188,121,212,207,58,19,77,11,94,27,121,27,239,6,219,122,112,141,231,143,49,179,166,87,247,230,83,32,219,111,43,234,201,226,206,12,247,89,47,67,111,127,49,155,43,117,196,207,132,44,125,105,17,37,69,45,48,151,151,60,233,3,144,69,47,228,8,227,127,239,42,129,43,239,194,120,190,57,32,180,193,226,17,190,72,14,96,141,24,144,0,172,16,90,61,216,237,237,149,125,84,97,232,157,79,12,16,28,136,62,100,191,189,160,107,83,23,83,78,121,79,165,171,114,225,199,160,154,220,143,25,15,110,80,115,103,163,159,186,210,239,23,195,98,227,49,177,2,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("94c696e0-f740-48c2-a029-90597ed84345"));
		}

		#endregion

	}

	#endregion

}

