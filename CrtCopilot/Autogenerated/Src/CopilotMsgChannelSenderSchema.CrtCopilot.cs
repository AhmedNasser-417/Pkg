namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotMsgChannelSenderSchema

	/// <exclude/>
	public class CopilotMsgChannelSenderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotMsgChannelSenderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotMsgChannelSenderSchema(CopilotMsgChannelSenderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("536757cd-f909-4133-9259-97971ebdf9fd");
			Name = "CopilotMsgChannelSender";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,117,82,193,78,195,48,12,61,119,18,255,16,196,165,149,166,126,192,16,7,24,2,118,232,52,81,56,33,14,161,117,187,136,212,169,226,4,52,77,251,119,220,166,3,214,109,82,213,214,126,126,182,159,109,148,13,80,43,11,16,47,96,173,36,83,185,116,110,176,82,181,183,210,41,131,108,181,74,27,119,49,217,94,76,34,79,10,107,145,111,200,65,115,253,107,255,167,54,141,193,211,136,133,244,65,22,206,88,5,116,42,34,3,34,89,179,239,47,11,71,189,221,67,37,189,118,119,10,75,198,98,183,105,193,84,241,98,104,43,163,122,190,150,136,160,115,192,18,108,146,188,51,73,161,3,139,82,139,66,75,34,113,38,118,38,206,101,225,20,219,190,122,116,101,161,230,41,136,12,220,218,148,52,19,43,255,161,85,17,192,182,255,23,95,70,149,162,35,6,5,64,241,144,150,115,186,149,180,78,20,135,118,34,186,89,70,209,200,157,206,215,80,124,222,218,218,55,128,110,233,181,142,145,215,195,106,199,252,228,186,231,171,74,196,151,127,189,103,18,185,186,77,23,244,236,17,121,88,251,58,145,5,231,45,6,210,174,127,127,73,43,72,53,173,134,161,105,113,35,16,190,69,126,224,27,232,119,166,220,48,62,234,98,26,192,69,201,208,163,87,101,186,132,239,238,27,39,3,242,4,146,103,201,232,144,166,207,243,194,251,91,178,170,174,94,16,55,26,214,158,29,133,85,28,197,29,109,60,132,7,89,187,160,241,196,76,144,156,196,2,210,149,33,23,119,74,223,222,183,99,69,251,91,207,89,126,119,250,175,4,150,229,237,166,135,163,10,211,223,13,7,194,77,132,27,233,109,246,242,243,3,87,31,57,153,86,3,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("536757cd-f909-4133-9259-97971ebdf9fd"));
		}

		#endregion

	}

	#endregion

}

