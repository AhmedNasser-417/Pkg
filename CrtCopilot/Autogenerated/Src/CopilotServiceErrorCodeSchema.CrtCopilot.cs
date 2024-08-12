namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotServiceErrorCodeSchema

	/// <exclude/>
	public class CopilotServiceErrorCodeSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotServiceErrorCodeSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotServiceErrorCodeSchema(CopilotServiceErrorCodeSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("6e610705-d2ec-4865-9c17-dbc18d0d91df");
			Name = "CopilotServiceErrorCode";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("bad99159-33f2-43af-aab2-3508b9685277");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,78,75,10,194,64,12,93,91,232,29,178,212,141,23,16,23,82,244,2,234,1,98,154,150,224,152,148,204,212,15,226,221,157,22,65,17,65,200,34,239,203,83,60,113,236,144,24,118,236,142,209,154,52,175,76,27,105,123,199,36,166,25,117,18,44,149,197,189,44,38,93,127,8,66,16,83,214,8,40,96,140,240,50,108,217,207,66,188,118,55,175,172,230,236,30,18,95,17,103,172,77,195,45,99,23,109,97,175,71,181,139,142,41,88,130,230,57,214,76,63,217,217,226,127,203,138,134,169,235,43,83,63,60,27,148,192,245,187,238,167,60,246,62,202,34,223,19,2,23,195,71,5,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("6e610705-d2ec-4865-9c17-dbc18d0d91df"));
		}

		#endregion

	}

	#endregion

}

