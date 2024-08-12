namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICopilotRequestLoggerSchema

	/// <exclude/>
	public class ICopilotRequestLoggerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICopilotRequestLoggerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICopilotRequestLoggerSchema(ICopilotRequestLoggerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("fc8c4b88-443d-4ef0-8d6c-416f9365c556");
			Name = "ICopilotRequestLogger";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("bad99159-33f2-43af-aab2-3508b9685277");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,101,145,61,110,195,48,12,133,231,24,240,29,136,76,237,98,29,160,110,150,14,69,128,78,77,46,192,68,148,67,192,146,28,137,106,17,4,189,123,101,197,110,243,3,104,16,73,125,143,143,148,67,75,113,192,61,193,150,66,192,232,141,52,111,222,25,238,82,64,97,239,114,52,112,239,165,174,206,117,181,72,145,93,7,155,83,20,178,47,117,149,51,74,41,104,99,178,22,195,105,53,197,31,190,235,40,128,241,1,38,26,2,29,19,69,137,205,140,168,43,102,72,187,158,247,192,78,40,152,209,203,122,194,62,47,212,69,47,63,60,151,150,15,61,75,98,131,95,20,1,239,59,2,58,157,239,146,130,139,192,18,33,57,206,5,96,77,78,216,48,133,230,79,82,221,107,182,3,6,180,224,242,146,94,151,147,224,218,25,191,92,109,15,4,214,107,234,225,155,229,0,26,5,65,60,196,108,34,207,1,122,215,170,194,254,75,77,30,10,249,224,1,188,1,201,133,145,215,179,245,166,85,51,52,170,188,39,214,101,202,219,229,60,221,134,163,61,184,178,250,156,191,105,241,83,87,249,192,47,54,244,41,35,237,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("fc8c4b88-443d-4ef0-8d6c-416f9365c556"));
		}

		#endregion

	}

	#endregion

}

