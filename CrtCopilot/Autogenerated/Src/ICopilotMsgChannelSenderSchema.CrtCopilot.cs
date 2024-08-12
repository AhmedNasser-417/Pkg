namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ICopilotMsgChannelSenderSchema

	/// <exclude/>
	public class ICopilotMsgChannelSenderSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ICopilotMsgChannelSenderSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ICopilotMsgChannelSenderSchema(ICopilotMsgChannelSenderSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("cc6f8de7-370e-4976-88fe-d5e53187b248");
			Name = "ICopilotMsgChannelSender";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,85,139,49,10,2,49,16,69,235,13,228,14,41,181,241,2,150,91,89,44,8,122,129,49,59,137,3,113,18,102,102,109,196,187,155,192,54,54,31,254,255,239,49,188,80,27,68,12,119,20,1,173,201,78,115,229,68,121,19,48,170,220,91,163,82,205,187,143,119,83,219,30,133,98,32,54,148,52,172,203,126,47,154,231,39,48,99,185,33,175,40,157,29,252,244,174,180,134,49,45,168,10,25,245,176,11,157,182,43,136,133,248,223,143,231,174,125,189,243,174,199,15,187,3,155,151,158,0,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("cc6f8de7-370e-4976-88fe-d5e53187b248"));
		}

		#endregion

	}

	#endregion

}

