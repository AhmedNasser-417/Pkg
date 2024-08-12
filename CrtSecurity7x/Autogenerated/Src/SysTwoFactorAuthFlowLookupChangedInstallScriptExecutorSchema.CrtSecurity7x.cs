namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: SysTwoFactorAuthFlowLookupChangedInstallScriptExecutorSchema

	/// <exclude/>
	public class SysTwoFactorAuthFlowLookupChangedInstallScriptExecutorSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public SysTwoFactorAuthFlowLookupChangedInstallScriptExecutorSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public SysTwoFactorAuthFlowLookupChangedInstallScriptExecutorSchema(SysTwoFactorAuthFlowLookupChangedInstallScriptExecutorSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("b9a382c2-0527-459d-8ce7-d8cfc500a180");
			Name = "SysTwoFactorAuthFlowLookupChangedInstallScriptExecutor";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("610721a9-3852-4373-b7e8-d0f2647cd718");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,157,83,81,79,219,48,16,126,46,18,255,193,234,94,130,68,162,2,81,74,91,241,176,22,130,42,149,169,82,97,175,211,213,185,36,214,28,59,179,157,178,10,241,223,119,141,39,104,75,59,137,249,205,223,221,125,223,231,187,179,130,10,109,13,28,217,35,26,3,86,231,46,154,104,149,139,162,49,224,132,86,167,39,47,167,39,157,198,10,85,176,197,218,58,172,70,123,119,202,151,18,249,38,217,70,247,168,208,8,254,33,103,38,212,175,119,112,91,203,224,49,60,186,29,83,136,209,57,24,189,83,78,56,129,246,189,188,144,122,9,114,56,156,232,170,210,42,154,233,162,32,152,226,148,241,197,96,65,14,217,68,130,181,195,141,173,199,103,157,2,119,218,124,109,92,153,74,253,60,211,250,103,83,79,74,80,5,102,83,101,29,72,185,224,70,212,238,238,55,242,134,50,91,166,186,89,74,193,25,223,16,253,39,15,27,178,233,17,129,206,75,43,242,230,55,21,40,51,50,60,55,98,5,14,125,176,246,23,118,223,136,140,253,176,71,61,76,51,118,211,38,69,115,48,22,131,238,146,247,161,119,5,16,94,37,144,133,241,229,5,15,175,243,30,15,243,30,38,131,1,135,56,231,131,238,217,232,51,26,11,63,250,5,47,177,130,167,15,138,23,189,126,6,121,198,67,82,206,73,177,31,135,16,103,121,152,47,147,65,2,151,24,39,188,215,42,182,143,70,149,249,119,239,54,225,1,93,169,219,46,180,189,255,219,4,63,135,149,38,127,190,127,24,60,89,52,180,190,202,123,162,189,217,190,158,177,205,42,119,58,237,226,172,189,225,7,80,80,160,97,120,0,187,217,171,143,14,20,142,182,24,153,108,27,66,117,7,216,232,103,56,159,54,94,127,163,79,23,116,125,251,186,231,251,46,61,165,231,138,82,116,188,76,141,174,110,199,193,63,7,189,91,182,64,71,191,178,169,212,119,144,13,105,209,154,206,201,197,219,144,72,245,19,35,221,227,134,21,6,30,122,61,56,54,143,238,130,132,253,1,114,3,64,233,107,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("b9a382c2-0527-459d-8ce7-d8cfc500a180"));
		}

		#endregion

	}

	#endregion

}

