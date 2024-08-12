﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: DefaultContactLanguageRuleSchema

	/// <exclude/>
	public class DefaultContactLanguageRuleSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public DefaultContactLanguageRuleSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public DefaultContactLanguageRuleSchema(DefaultContactLanguageRuleSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("ccb6c79d-1ff8-407f-b693-9cc2f33fe333");
			Name = "DefaultContactLanguageRule";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("2659875a-4670-491c-9c1f-f4641a7bae64");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,141,84,219,78,227,48,16,125,14,18,255,48,155,125,73,165,42,121,135,182,8,186,128,42,193,94,184,236,235,202,141,39,173,165,196,41,190,128,34,196,191,239,196,118,218,164,5,118,95,218,120,60,115,124,230,156,177,37,171,80,111,88,142,240,128,74,49,93,23,38,157,215,178,16,43,171,152,17,181,60,62,122,61,62,138,172,22,114,5,247,141,54,88,157,238,173,211,27,33,159,118,193,121,173,112,184,74,47,165,17,70,160,166,48,109,124,85,184,34,96,152,151,76,235,19,248,134,5,179,165,161,67,13,203,205,13,147,43,203,86,120,103,75,116,217,89,150,193,68,219,170,98,170,153,133,117,40,129,50,36,131,162,236,49,152,53,51,176,66,163,119,27,133,170,43,200,61,244,56,84,43,44,153,65,14,47,194,172,65,231,107,172,216,24,234,165,97,66,82,212,85,76,52,34,228,10,139,105,124,193,52,118,164,22,6,73,148,90,197,217,44,237,168,101,61,110,27,187,44,69,14,121,219,216,39,125,193,9,244,81,125,171,209,171,107,119,171,206,149,192,146,147,60,63,149,120,38,186,126,115,227,23,212,2,227,181,44,27,208,70,181,42,255,241,109,124,39,51,79,3,12,74,238,145,134,176,68,135,106,108,78,93,180,224,142,176,207,216,23,218,5,230,116,146,65,13,130,170,152,164,41,169,139,190,56,31,247,24,36,58,212,200,71,54,76,177,10,36,241,157,198,86,163,34,4,137,121,59,111,241,236,145,214,173,103,33,144,78,50,151,253,126,241,174,241,120,118,31,188,116,126,19,227,206,248,1,66,240,232,99,230,201,227,128,15,12,233,141,59,201,119,7,143,90,216,232,4,150,228,105,50,204,30,193,171,219,236,249,3,83,24,152,21,69,111,159,59,118,139,102,93,243,255,49,235,199,210,183,189,157,126,193,145,110,94,33,72,207,193,69,240,55,69,163,33,95,33,39,218,159,89,37,228,26,149,48,188,206,33,235,43,88,63,211,131,65,39,192,181,21,28,174,113,43,226,130,39,46,212,158,109,154,59,204,107,197,23,188,147,194,189,5,141,183,42,164,132,197,20,134,202,167,253,212,91,38,9,90,165,87,66,242,69,24,198,139,166,213,48,233,137,59,114,130,70,162,128,100,0,253,101,10,210,150,101,199,225,32,129,158,188,210,86,82,167,231,178,73,114,247,13,211,25,248,175,212,219,54,133,56,76,75,60,218,2,69,207,76,1,234,39,34,47,241,5,250,140,127,89,84,77,242,239,150,198,112,216,128,199,237,124,244,228,194,240,208,97,233,57,231,62,150,116,148,210,78,252,116,193,227,81,186,157,173,173,224,65,234,0,64,110,249,240,30,191,241,190,105,29,136,51,180,220,26,220,194,184,196,179,22,234,161,217,96,32,244,155,149,22,39,109,246,44,57,164,63,130,179,51,55,46,233,101,181,49,77,7,174,208,88,37,123,240,97,227,205,253,249,223,144,179,87,252,254,213,241,209,97,240,237,47,207,36,235,185,233,6,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("ccb6c79d-1ff8-407f-b693-9cc2f33fe333"));
		}

		#endregion

	}

	#endregion

}

