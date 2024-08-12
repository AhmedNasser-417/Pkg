namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICopilotParametrizedActionResponseProviderSchema

	/// <exclude/>
	public class ICopilotParametrizedActionResponseProviderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICopilotParametrizedActionResponseProviderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICopilotParametrizedActionResponseProviderSchema(ICopilotParametrizedActionResponseProviderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("0f550306-ffed-4a2f-96af-6009daaa7f5c");
			Name = "ICopilotParametrizedActionResponseProvider";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("c57b9697-4890-481a-8f98-2e9a2e48aaa1");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,149,83,77,107,194,64,16,61,43,248,31,6,123,105,65,146,187,198,128,180,180,120,40,136,253,184,175,201,68,183,152,221,48,187,43,181,210,255,222,201,230,3,77,83,218,66,8,153,217,121,111,222,188,217,40,145,163,41,68,130,240,140,68,194,232,204,6,183,90,101,114,235,72,88,169,21,71,133,220,107,59,26,158,70,195,129,51,82,109,225,233,104,44,230,179,54,62,135,250,226,224,17,173,72,133,21,253,53,132,101,158,159,43,194,45,247,128,165,178,72,25,171,152,194,178,166,88,9,98,105,150,228,7,166,139,164,84,178,102,161,90,25,92,145,62,200,20,105,52,100,134,48,12,33,50,46,207,5,29,227,58,174,11,12,216,29,2,213,40,208,153,143,139,138,23,61,49,8,207,12,248,142,137,243,211,54,148,225,25,103,225,54,123,153,128,108,68,254,75,227,224,228,117,182,163,178,51,59,157,154,41,172,60,107,117,216,157,194,39,214,104,29,41,211,163,186,153,41,104,177,97,23,28,121,4,40,70,205,199,206,32,241,82,21,122,141,227,120,161,120,24,99,133,74,90,91,34,131,8,9,97,54,31,191,92,86,135,49,216,99,129,65,20,122,202,254,14,149,143,119,104,18,146,133,213,244,91,143,218,192,69,23,246,167,102,173,25,175,98,239,240,1,45,127,142,227,123,167,170,101,218,157,176,108,81,143,121,112,40,1,223,201,235,226,184,217,30,24,222,169,218,114,97,115,82,150,86,73,224,126,171,243,109,52,160,235,75,223,224,210,244,9,148,20,131,31,230,134,174,127,19,40,199,137,58,23,13,169,252,175,150,42,211,19,208,155,55,102,142,161,207,140,155,89,125,231,80,165,213,181,243,241,167,127,95,38,57,247,5,90,48,139,182,3,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("0f550306-ffed-4a2f-96af-6009daaa7f5c"));
		}

		#endregion

	}

	#endregion

}

