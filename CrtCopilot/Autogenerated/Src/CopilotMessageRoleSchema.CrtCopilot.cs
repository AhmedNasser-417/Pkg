namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotMessageRoleSchema

	/// <exclude/>
	public class CopilotMessageRoleSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotMessageRoleSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotMessageRoleSchema(CopilotMessageRoleSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("0912d679-1a89-49e0-8044-cb3aca27cc1d");
			Name = "CopilotMessageRole";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,117,206,65,10,194,64,12,5,208,181,133,222,33,244,0,94,64,92,136,107,55,90,15,16,135,180,12,76,39,101,126,186,16,241,238,102,138,93,22,2,63,33,47,144,204,147,96,230,32,212,75,41,12,29,236,120,213,60,196,113,41,108,81,179,79,115,76,106,109,243,105,155,195,188,188,82,12,4,243,93,160,144,24,160,63,184,9,192,163,220,53,137,195,138,55,29,52,195,252,166,196,60,210,227,13,147,137,206,212,97,237,186,211,158,124,66,74,117,139,231,190,186,0,209,223,201,86,41,111,195,190,239,85,83,165,230,185,170,111,219,120,253,0,173,54,84,143,8,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("0912d679-1a89-49e0-8044-cb3aca27cc1d"));
		}

		#endregion

	}

	#endregion

}

