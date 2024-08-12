namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: CopilotChatPartSchema

	/// <exclude/>
	public class CopilotChatPartSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public CopilotChatPartSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public CopilotChatPartSchema(CopilotChatPartSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("7ed79dd2-49c8-4c98-bc9b-f91b45c48c5d");
			Name = "CopilotChatPart";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("7a3a8162-4be1-46b5-bd50-b3efc2df6d2e");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,181,82,193,110,194,48,12,61,23,137,127,136,224,66,37,196,7,208,177,11,155,118,25,19,26,187,77,28,66,48,37,82,155,84,177,123,216,16,255,62,39,20,104,35,144,182,195,46,81,98,63,63,219,239,197,200,18,176,146,10,196,7,56,39,209,238,104,50,183,102,167,243,218,73,210,214,240,171,210,133,165,126,239,208,239,37,53,106,147,139,213,23,18,148,156,41,10,80,30,132,147,23,48,224,180,202,98,204,123,109,72,151,48,89,113,86,22,250,59,112,50,138,113,159,79,146,36,247,34,39,21,173,57,80,213,155,66,43,161,10,137,40,154,182,243,189,164,165,116,220,62,57,132,170,100,232,32,103,14,6,24,36,87,43,178,14,167,98,25,106,79,136,134,39,98,24,189,106,164,135,38,184,0,68,153,195,163,40,79,23,28,159,225,43,14,120,122,213,121,166,194,111,159,36,77,29,138,217,165,50,11,137,168,122,22,213,7,208,241,223,198,27,11,150,194,171,206,30,90,215,84,143,195,96,73,59,51,183,91,72,197,84,208,94,227,232,202,125,123,215,231,22,23,47,212,166,206,174,0,79,121,206,250,123,123,211,33,152,237,201,173,174,117,75,103,43,112,164,33,50,46,252,136,5,148,27,112,163,55,254,152,204,59,56,79,57,72,215,45,241,110,138,117,49,231,32,114,160,76,160,63,142,247,169,187,107,119,27,68,114,71,207,95,54,104,75,214,165,111,76,233,72,252,23,82,175,244,125,198,224,201,13,186,200,143,16,229,227,7,114,243,22,65,4,4,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("7ed79dd2-49c8-4c98-bc9b-f91b45c48c5d"));
		}

		#endregion

	}

	#endregion

}

