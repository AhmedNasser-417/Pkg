﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: ObjectQuerySchema

	/// <exclude/>
	public class ObjectQuerySchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public ObjectQuerySchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public ObjectQuerySchema(ObjectQuerySchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("3b10e61a-ae95-408e-9047-2a0737a78960");
			Name = "ObjectQuery";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("84b09f59-6bd7-4f07-9626-7a5c32da980f");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,189,88,89,111,227,56,12,126,78,129,254,7,13,246,197,1,178,6,102,31,123,162,247,6,232,76,187,77,176,243,184,80,109,38,209,142,35,185,146,221,25,163,232,127,31,234,242,169,36,157,238,241,146,196,22,245,145,252,72,145,84,8,167,107,80,57,77,128,204,65,74,170,196,162,136,207,242,252,26,104,81,74,80,251,123,47,251,123,163,82,49,190,36,179,74,21,176,62,236,61,199,23,34,203,32,41,152,224,42,190,1,14,146,37,3,153,91,198,159,130,47,227,171,239,57,170,81,122,119,35,208,152,114,33,214,107,193,195,43,18,226,43,94,176,130,129,222,138,34,191,72,88,34,16,185,200,168,82,7,228,238,241,111,180,235,143,18,100,101,150,25,47,64,114,154,145,68,175,183,151,143,230,246,225,4,165,94,140,108,141,117,9,25,44,105,1,136,55,117,251,173,64,141,150,58,9,242,40,68,70,174,89,134,239,167,232,223,213,51,205,74,90,8,25,25,29,110,129,47,4,89,212,50,19,50,125,0,154,222,241,172,106,104,172,173,33,52,203,180,148,154,104,133,35,81,22,219,197,145,200,50,43,198,135,206,3,224,169,117,162,235,145,99,199,218,131,156,94,8,244,228,123,209,243,202,114,52,20,26,121,130,106,188,123,41,114,144,58,10,7,228,190,124,204,88,226,4,114,243,64,166,183,76,21,71,1,94,78,66,100,41,242,66,150,80,28,18,165,63,94,201,49,225,240,141,108,132,136,188,183,3,119,95,183,179,112,205,32,75,181,197,146,61,99,240,236,98,110,31,144,72,154,10,36,185,161,251,146,25,174,41,230,138,42,52,33,19,98,191,79,200,95,137,200,202,53,159,11,71,68,245,137,230,135,65,180,38,215,143,174,75,158,248,192,77,136,176,1,68,172,20,22,20,99,120,39,83,67,251,174,80,226,169,41,100,153,104,222,186,228,59,238,91,57,30,189,197,151,128,43,54,247,70,187,109,239,153,62,38,47,102,103,136,30,140,234,38,210,70,125,10,80,118,72,202,206,240,126,130,98,37,54,198,215,164,83,228,157,55,184,151,76,218,227,52,62,33,55,80,204,4,102,52,95,234,227,26,153,34,83,205,146,21,172,169,161,146,60,233,79,239,160,4,172,148,220,190,211,197,16,221,82,150,179,248,203,10,36,68,9,57,70,102,227,174,26,242,225,184,167,56,254,44,56,140,221,78,179,116,94,117,246,222,11,197,140,133,78,102,6,186,2,88,145,40,137,239,105,177,154,12,244,140,199,241,92,104,127,205,73,169,121,243,76,76,141,67,244,49,131,166,140,160,251,6,3,210,75,80,137,100,185,78,175,0,11,160,158,38,65,0,166,107,150,167,103,234,176,2,114,194,174,232,51,94,102,153,13,255,51,149,68,53,228,227,90,47,26,168,213,122,50,90,96,7,160,201,138,68,155,34,73,152,70,96,188,13,232,205,26,177,5,137,62,132,146,51,158,203,10,117,254,137,37,6,34,141,16,235,146,243,17,51,29,235,175,54,47,119,178,159,177,117,142,107,188,81,130,37,146,241,18,172,113,154,104,175,166,246,211,58,218,108,105,8,168,245,252,166,165,122,137,113,166,18,76,115,116,192,109,27,157,90,138,235,44,233,88,228,133,14,186,66,58,150,22,165,43,238,205,37,144,41,248,23,44,115,59,227,249,10,248,102,211,186,82,187,108,51,95,175,237,211,230,237,59,237,83,209,47,31,225,172,191,226,229,26,228,32,237,109,135,129,212,52,221,104,107,175,85,162,148,9,76,200,134,222,142,63,93,225,236,183,80,146,216,111,159,5,38,15,163,102,27,97,190,237,54,106,201,82,138,50,111,114,173,206,124,157,142,139,97,91,212,57,239,212,196,161,30,219,100,160,214,30,0,104,217,51,169,93,245,249,239,198,140,6,196,7,197,46,184,160,249,3,224,190,156,8,142,150,89,85,83,18,121,232,70,157,139,121,39,216,24,153,134,11,19,155,115,135,113,163,121,169,81,12,75,147,154,224,159,137,252,86,252,183,36,66,59,216,253,192,77,6,115,84,48,9,140,172,139,151,138,207,120,21,53,28,59,38,172,178,0,69,118,239,173,88,178,132,102,119,120,130,168,81,143,39,182,255,110,134,181,50,193,25,159,167,22,249,180,235,254,121,101,124,198,229,121,149,131,53,102,19,193,22,224,32,8,112,39,119,239,127,95,128,66,10,254,251,8,53,137,223,30,73,189,142,168,223,146,180,184,46,76,250,36,118,226,90,71,212,75,40,219,226,186,165,199,19,198,204,29,161,195,151,14,185,54,35,62,75,211,7,202,151,216,163,76,187,13,36,133,19,188,68,75,25,79,90,19,192,59,232,238,38,196,255,204,183,69,196,65,230,119,170,86,51,40,222,65,183,219,217,27,82,222,206,253,80,185,143,131,185,22,42,196,252,194,138,213,174,96,188,57,229,123,133,242,31,246,34,237,217,166,134,51,53,188,41,188,76,172,115,42,193,78,176,218,23,51,1,89,56,162,216,58,207,220,195,160,42,53,246,199,87,235,188,168,6,199,162,67,196,206,153,171,173,203,13,212,118,182,13,14,96,190,138,185,28,177,219,122,131,199,164,107,191,175,91,173,106,250,230,235,196,240,142,181,233,8,185,33,34,180,90,223,235,73,120,170,54,6,110,142,230,24,39,126,35,82,107,241,128,132,170,237,127,17,224,188,228,101,235,123,193,196,78,242,131,201,69,87,185,254,49,197,150,116,248,51,222,191,233,223,141,109,44,108,161,97,119,17,9,26,183,104,159,246,80,1,104,236,106,235,234,22,225,208,181,199,205,164,45,220,192,53,170,69,181,19,197,33,186,6,179,244,110,178,60,109,112,16,191,173,46,158,125,101,185,198,54,63,30,196,183,11,81,114,111,171,59,119,122,213,175,232,193,224,215,143,228,180,3,121,208,126,138,231,244,43,68,237,61,227,45,7,197,190,237,190,220,223,195,183,63,0,101,244,248,32,96,20,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("3b10e61a-ae95-408e-9047-2a0737a78960"));
		}

		#endregion

	}

	#endregion

}

