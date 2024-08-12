namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICopilotSessionManagerSchema

	/// <exclude/>
	public class ICopilotSessionManagerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICopilotSessionManagerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICopilotSessionManagerSchema(ICopilotSessionManagerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e947f22a-dded-4d56-a11b-5ff87b914929");
			Name = "ICopilotSessionManager";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,125,144,193,106,195,48,16,68,207,14,228,31,116,76,161,228,7,90,10,105,104,141,14,61,165,253,0,69,26,155,5,121,229,106,165,64,40,249,247,74,113,114,176,41,189,105,86,111,102,150,101,51,64,70,99,161,62,17,163,145,208,165,237,62,112,71,125,142,38,81,224,162,70,242,33,173,87,63,235,85,147,133,184,87,135,179,36,12,79,11,93,72,239,97,171,73,182,45,24,145,108,97,10,53,230,163,39,171,136,19,98,87,187,244,45,244,0,145,130,127,24,54,61,98,33,107,71,51,255,84,59,231,54,139,145,157,201,135,186,73,115,10,228,212,215,232,76,194,166,205,229,61,135,180,123,84,215,113,196,119,134,36,237,38,219,34,249,157,216,189,158,181,251,59,98,178,232,55,206,3,162,57,122,60,207,237,47,170,69,218,149,19,156,112,155,200,20,148,5,241,110,191,46,186,247,65,238,204,63,93,151,122,191,139,250,5,78,104,120,5,166,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e947f22a-dded-4d56-a11b-5ff87b914929"));
		}

		#endregion

	}

	#endregion

}

