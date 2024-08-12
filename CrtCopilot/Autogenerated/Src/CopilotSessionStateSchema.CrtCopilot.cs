namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotSessionStateSchema

	/// <exclude/>
	public class CopilotSessionStateSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotSessionStateSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotSessionStateSchema(CopilotSessionStateSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("81485d6d-b24f-4b2b-bbf4-8fcbaef8188d");
			Name = "CopilotSessionState";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,133,143,65,106,195,48,16,69,215,53,248,14,67,86,237,66,37,24,91,145,9,89,72,138,220,3,184,23,80,229,73,16,40,146,241,200,45,161,244,238,85,218,110,218,77,55,3,243,231,253,7,19,237,5,105,182,14,225,25,151,197,82,58,229,71,157,226,201,159,215,197,102,159,98,217,102,31,82,174,171,247,186,186,91,201,199,51,140,87,202,120,217,215,85,73,230,245,37,120,7,148,11,237,192,5,75,4,63,149,17,137,138,97,44,39,44,228,173,255,7,95,208,78,41,134,43,60,173,126,2,233,178,127,69,56,64,196,183,175,228,126,211,236,244,208,136,94,50,33,7,206,90,193,21,235,229,81,48,161,68,219,15,106,43,56,215,155,135,253,127,102,29,18,225,244,203,44,123,222,21,149,98,70,117,91,214,170,157,97,162,83,134,73,105,148,209,66,31,101,215,124,155,63,110,127,150,241,9,194,238,160,101,43,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("81485d6d-b24f-4b2b-bbf4-8fcbaef8188d"));
		}

		#endregion

	}

	#endregion

}

