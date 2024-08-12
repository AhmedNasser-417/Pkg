namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotRequestLoggerSchema

	/// <exclude/>
	public class CopilotRequestLoggerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotRequestLoggerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotRequestLoggerSchema(CopilotRequestLoggerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("2bdc15d3-8dbc-493f-b7c4-24b2d92a7d35");
			Name = "CopilotRequestLogger";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("bad99159-33f2-43af-aab2-3508b9685277");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,147,81,75,195,64,12,199,159,39,248,29,2,190,108,47,251,0,27,34,232,156,14,20,196,237,77,68,110,109,90,15,175,151,154,203,9,99,248,221,77,219,57,167,92,231,203,209,164,191,252,249,95,146,243,166,194,80,155,12,97,133,204,38,80,33,227,43,242,133,45,35,27,177,228,53,170,173,35,57,61,217,158,158,12,98,176,190,132,229,38,8,86,211,125,124,88,202,56,158,155,76,136,45,6,37,148,57,99,44,85,8,174,156,9,97,2,59,189,71,124,143,24,100,225,11,106,169,58,174,157,205,32,107,160,4,3,138,108,91,112,175,55,183,232,114,21,124,136,181,86,118,255,118,42,142,212,213,108,119,3,216,66,137,50,133,208,28,159,7,212,204,8,174,108,133,176,20,195,210,68,189,232,154,200,193,34,204,141,117,152,247,82,65,184,105,199,53,51,113,47,100,189,192,138,196,184,21,189,161,15,71,185,7,166,170,150,255,193,11,237,88,85,59,108,174,155,166,219,198,161,207,187,222,181,113,151,253,147,60,58,172,59,42,75,228,150,123,154,97,97,162,147,75,235,115,189,243,80,54,53,82,49,92,164,10,70,163,103,173,80,155,200,222,184,228,136,59,16,38,144,20,56,50,123,182,31,58,183,221,240,187,0,24,77,78,222,109,246,98,183,54,232,66,110,150,122,152,18,225,37,75,165,167,201,38,253,52,132,188,142,55,54,155,221,238,220,250,239,206,165,140,15,123,28,36,13,140,160,121,97,131,65,218,30,156,167,171,154,87,56,72,15,120,239,253,30,229,149,242,180,237,155,104,115,88,154,15,252,237,127,152,120,130,252,243,253,237,149,81,34,251,158,142,142,19,178,135,26,71,172,39,179,154,252,2,218,101,56,235,175,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("2bdc15d3-8dbc-493f-b7c4-24b2d92a7d35"));
		}

		#endregion

	}

	#endregion

}

