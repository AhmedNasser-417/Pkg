namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICopilotEngineSchema

	/// <exclude/>
	public class ICopilotEngineSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICopilotEngineSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICopilotEngineSchema(ICopilotEngineSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("e00de856-b056-4ec3-99d2-9bdcb74693ed");
			Name = "ICopilotEngine";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,109,144,65,106,195,48,16,69,215,14,228,14,90,166,16,114,129,46,74,9,161,120,81,40,117,114,0,69,30,187,3,246,200,104,70,33,33,244,238,153,81,156,146,69,55,146,254,240,254,255,131,200,143,192,147,15,224,246,144,146,231,216,201,102,27,169,195,62,39,47,24,73,213,132,67,148,229,226,186,92,84,153,145,122,215,92,88,96,124,253,211,207,214,2,111,222,131,121,89,17,133,166,124,28,48,56,36,129,212,89,85,61,99,59,234,145,64,9,139,174,230,225,246,199,203,151,79,226,26,160,246,192,144,62,129,217,247,176,98,73,86,22,162,230,144,172,221,71,198,246,77,101,113,53,10,105,99,221,174,221,35,199,184,179,60,128,89,190,216,214,213,41,98,171,220,56,13,32,112,223,117,101,113,255,164,205,173,190,64,53,177,120,10,112,120,234,185,219,119,103,8,217,30,223,192,121,16,151,202,85,218,126,237,19,244,184,1,122,231,73,187,107,1,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("e00de856-b056-4ec3-99d2-9bdcb74693ed"));
		}

		#endregion

	}

	#endregion

}

