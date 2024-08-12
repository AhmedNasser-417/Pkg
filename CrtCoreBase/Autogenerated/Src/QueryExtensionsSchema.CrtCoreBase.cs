﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: QueryExtensionsSchema

	/// <exclude/>
	public class QueryExtensionsSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public QueryExtensionsSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public QueryExtensionsSchema(QueryExtensionsSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("9ed34ded-1a85-474a-9605-5ebac1141369");
			Name = "QueryExtensions";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("0c4dab6c-6e58-4a84-8a65-63630c246206");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,213,27,107,115,219,54,242,179,59,211,255,128,234,58,45,117,85,228,239,126,40,231,218,78,198,115,73,47,141,212,187,185,105,123,29,136,130,36,54,20,169,16,160,31,227,250,191,223,62,0,18,124,136,146,156,184,105,62,36,22,65,96,223,187,88,44,150,137,92,41,189,150,161,18,19,149,101,82,167,115,51,60,79,147,121,180,200,51,105,162,52,249,242,139,251,47,191,56,200,117,148,44,196,248,78,27,181,58,174,61,195,252,56,86,33,78,214,195,151,42,81,89,20,54,230,92,72,35,27,131,175,162,228,125,99,112,162,110,205,240,173,90,228,177,204,46,111,215,153,210,26,33,151,243,124,66,87,171,52,105,127,147,169,77,227,195,139,239,55,190,186,76,76,100,34,133,216,96,202,223,50,181,0,220,226,60,150,90,31,137,31,115,149,221,93,222,26,149,16,69,52,229,240,240,80,156,232,124,181,146,217,221,200,62,255,100,162,56,50,119,34,196,101,194,44,165,17,235,44,189,142,102,74,11,229,150,139,149,50,203,116,166,197,60,205,0,130,82,34,204,212,252,180,55,86,40,203,222,225,72,188,71,116,176,160,16,129,48,169,197,176,146,239,20,0,86,43,177,2,170,69,174,85,246,108,158,69,42,153,197,119,67,71,213,161,71,214,58,159,198,81,40,180,1,157,134,150,176,6,59,7,247,196,82,193,246,5,144,178,144,70,1,235,111,104,61,191,174,179,76,3,23,106,30,37,10,185,85,66,71,139,68,154,28,8,75,231,52,192,172,178,36,34,45,66,9,246,50,35,198,103,96,22,34,83,97,154,193,235,76,38,26,6,87,100,119,195,2,213,97,29,215,201,90,102,114,37,18,48,221,211,30,66,120,171,228,76,101,189,209,5,67,195,135,225,201,33,205,162,69,150,251,153,229,71,76,196,229,173,10,115,163,120,225,228,110,173,102,248,243,53,209,121,146,230,70,76,70,193,213,69,1,90,148,88,250,199,86,72,32,108,150,83,85,104,12,3,69,150,69,215,128,140,223,174,249,193,41,128,149,44,206,102,51,240,157,124,149,4,118,64,211,159,129,72,167,191,211,99,154,103,161,226,41,125,129,126,120,112,144,41,144,108,98,103,14,237,242,51,77,202,228,167,210,105,130,10,0,164,252,224,224,161,149,160,139,239,89,34,160,146,203,68,131,234,198,107,21,70,50,190,152,186,241,224,39,48,50,136,12,9,123,58,217,92,249,56,96,107,250,103,148,204,216,110,241,87,141,228,98,92,156,158,150,211,57,98,200,88,252,241,135,248,234,101,156,78,101,124,182,94,143,149,49,224,158,122,8,88,139,169,154,160,29,60,175,225,30,50,197,23,223,151,67,65,159,167,30,237,48,181,36,215,151,207,118,245,110,243,136,51,3,209,108,109,208,107,69,152,38,215,42,51,98,17,93,171,196,105,23,198,61,191,111,85,32,132,129,194,15,198,249,122,157,102,6,28,199,128,189,106,33,51,117,84,32,143,35,109,104,252,180,55,205,193,187,76,175,244,150,8,232,24,157,64,240,9,179,104,141,44,151,175,182,163,23,207,196,77,20,199,98,10,241,6,60,11,209,247,164,6,47,238,121,14,234,195,62,57,36,124,251,97,215,38,3,109,87,209,89,153,33,191,59,9,202,129,189,137,204,210,159,95,241,141,128,49,245,17,213,60,79,194,90,164,249,96,70,166,105,26,63,13,27,60,21,247,102,109,2,182,160,39,227,226,170,149,184,115,230,36,154,198,138,89,44,183,166,130,219,116,106,36,236,3,51,34,255,49,144,33,28,152,141,182,104,247,17,187,171,68,137,81,217,28,82,151,29,89,63,68,39,241,30,59,183,21,63,114,246,70,99,122,2,93,226,163,207,55,232,212,215,113,101,215,33,152,28,251,116,13,194,190,70,1,112,29,160,2,178,186,13,21,49,234,236,60,91,228,43,149,152,31,192,255,47,221,187,222,136,185,130,25,109,140,129,76,97,63,62,9,71,9,44,58,57,12,17,81,1,119,59,42,15,205,127,150,16,216,118,192,5,186,139,146,107,25,71,28,198,118,195,247,130,146,130,71,96,115,168,216,235,27,200,170,89,81,171,240,197,166,173,181,99,139,214,96,252,225,82,4,109,239,14,66,169,149,64,113,31,241,243,129,89,102,233,141,72,212,141,104,213,96,128,204,165,243,42,176,129,232,85,12,10,3,50,1,237,241,38,102,209,48,219,246,15,47,117,88,237,158,220,22,28,45,14,31,80,187,104,222,151,163,53,176,222,27,31,204,86,239,119,11,139,129,118,184,219,163,69,80,33,223,101,87,249,148,127,213,160,218,208,58,118,175,131,98,98,5,10,198,118,250,175,149,229,74,124,46,103,57,8,51,53,151,121,92,96,182,154,129,179,151,150,11,37,78,197,215,85,133,90,87,73,82,164,218,223,247,143,196,189,111,9,40,0,76,95,131,254,67,239,120,163,65,149,198,100,17,14,0,223,125,155,97,61,0,41,21,4,15,206,162,30,188,228,168,53,223,177,106,209,98,252,227,171,103,113,244,110,67,184,132,84,31,158,214,105,50,67,1,236,147,0,237,17,177,61,0,163,243,6,21,180,181,166,36,16,200,59,121,157,48,18,237,79,66,118,10,17,67,234,205,145,252,141,204,52,40,227,35,71,237,29,35,118,117,63,124,76,236,222,63,150,54,112,218,168,250,225,225,52,48,75,0,231,162,84,43,74,23,55,163,121,53,158,122,32,109,232,43,34,236,35,2,170,135,207,55,247,46,172,112,134,233,253,189,87,32,173,70,129,51,13,169,73,164,223,5,21,104,215,50,131,211,233,66,221,130,147,33,121,111,241,119,240,143,222,255,130,224,249,9,217,223,232,151,155,239,250,191,12,251,207,97,128,189,135,70,130,224,23,253,157,212,253,231,240,7,222,144,129,210,139,254,243,175,123,3,38,128,128,253,107,205,85,152,171,69,146,102,234,28,162,150,37,224,181,196,29,105,69,255,159,50,17,67,26,219,36,134,227,130,255,175,104,21,68,199,48,132,119,45,82,174,89,84,240,117,239,202,110,187,92,193,104,132,129,35,241,237,125,59,218,135,111,43,225,198,73,21,177,180,155,147,37,134,99,231,25,202,5,216,99,130,95,102,105,190,214,63,247,72,176,189,95,135,255,150,113,174,6,254,124,134,214,190,138,137,174,45,107,159,74,234,112,51,153,248,227,109,193,18,78,254,218,158,6,221,14,14,177,209,151,151,198,191,182,172,86,132,192,9,250,139,205,130,177,138,162,155,149,35,87,18,104,149,23,157,24,40,111,134,200,23,223,13,192,233,68,68,53,153,223,115,56,64,74,161,151,176,213,192,121,191,12,186,27,14,82,173,137,249,77,154,199,51,76,136,115,205,169,237,58,75,209,104,132,186,46,25,219,57,158,115,33,204,101,206,173,37,50,64,33,103,51,39,177,102,204,222,180,63,104,218,22,172,116,113,163,245,148,0,228,3,204,174,92,254,117,58,139,230,17,238,1,245,168,89,16,70,91,12,152,109,124,199,192,60,18,31,155,200,187,249,237,241,186,192,156,102,34,77,168,242,214,21,211,117,203,246,81,234,229,113,71,128,10,129,123,208,176,4,159,106,38,58,27,201,169,238,50,54,181,3,136,154,119,147,90,37,141,240,107,91,114,249,249,215,202,46,163,43,155,11,175,123,236,102,194,233,98,91,240,170,96,28,158,45,22,25,21,33,3,71,97,81,4,236,239,19,53,122,231,105,158,152,158,11,174,187,4,143,143,237,111,187,187,91,111,212,36,23,224,60,133,135,213,28,108,131,177,0,45,173,214,178,189,238,90,150,108,221,154,23,121,18,14,25,228,110,101,216,253,244,60,206,87,159,143,150,107,196,126,66,29,3,37,31,87,195,8,240,41,244,123,118,189,248,124,244,91,35,246,19,234,23,40,249,184,250,69,128,79,161,223,243,84,198,74,135,234,51,81,50,100,70,103,30,69,94,110,244,233,162,53,11,240,241,219,123,171,82,97,242,251,182,113,204,239,171,91,182,45,10,109,48,142,254,112,146,158,101,153,188,115,103,189,109,27,133,229,166,29,249,158,198,117,1,137,196,69,52,159,255,133,141,139,78,27,112,28,44,243,195,43,190,37,134,73,6,205,11,180,13,63,102,120,25,137,213,23,5,255,232,129,110,139,53,94,67,130,109,241,18,204,11,113,201,20,118,219,153,68,46,179,84,195,81,195,99,173,203,204,17,17,74,204,175,14,141,75,236,229,1,181,155,35,160,176,14,229,210,17,221,5,227,207,113,23,103,18,173,238,226,94,146,37,191,176,55,71,87,86,67,194,169,202,158,118,93,40,109,138,173,8,179,13,81,116,186,92,9,10,124,108,99,172,109,162,179,142,213,14,211,146,208,1,177,73,228,46,142,90,200,177,144,74,73,254,192,97,221,213,93,61,39,34,224,175,229,109,199,1,253,47,235,203,93,151,98,216,205,113,179,140,194,101,113,35,137,197,132,156,202,1,114,189,142,163,167,57,81,239,226,18,40,237,61,115,133,13,246,187,161,20,184,217,152,125,208,21,171,171,246,111,20,70,209,89,148,220,106,102,58,159,218,99,108,181,230,254,39,154,17,144,240,140,208,109,177,36,119,195,226,71,81,55,115,12,48,26,124,12,241,130,65,71,216,140,211,138,95,218,227,57,247,83,213,205,168,5,93,121,213,94,24,172,212,118,55,194,109,169,141,8,182,66,25,99,143,209,157,128,193,52,190,174,222,5,80,23,89,181,85,166,122,135,241,137,78,67,238,106,171,205,15,208,250,78,198,246,129,12,121,36,90,36,214,217,129,212,50,63,192,170,137,187,81,227,201,85,193,236,156,74,95,105,44,186,248,122,144,250,169,171,137,221,246,27,46,85,248,206,183,221,9,164,39,52,184,115,26,145,169,117,44,67,133,54,75,149,99,134,225,141,138,107,28,254,84,65,147,101,222,21,55,107,50,40,198,235,140,117,218,13,218,222,229,237,208,98,107,128,108,192,218,209,98,248,54,207,94,237,213,253,151,147,103,13,200,86,146,68,86,94,251,161,13,216,85,28,197,246,52,175,171,36,50,17,164,82,157,33,178,78,213,150,80,73,116,254,0,191,11,235,245,72,239,94,203,87,19,181,101,91,238,55,31,99,86,109,44,109,181,176,23,89,218,94,163,113,23,130,5,227,197,16,145,222,110,79,4,173,92,210,31,158,233,128,167,111,181,24,219,179,44,194,24,171,214,209,106,29,147,193,109,109,67,197,227,136,47,237,9,184,48,158,80,184,207,213,129,169,100,127,87,231,136,67,218,22,170,178,131,233,228,176,0,214,149,122,113,140,224,223,155,53,72,253,172,204,205,12,112,128,212,147,176,163,26,223,188,169,174,170,107,34,136,232,215,234,100,50,98,125,77,44,9,125,200,248,84,134,253,180,71,162,228,172,170,158,96,210,183,244,210,132,96,187,58,108,111,174,182,105,11,250,230,58,75,49,180,104,161,36,36,152,182,95,24,164,7,14,69,181,121,236,26,126,140,166,108,39,89,154,155,117,110,252,196,104,187,62,118,219,79,48,81,160,230,225,109,123,129,107,62,238,141,222,182,117,67,219,27,182,205,58,47,162,159,79,202,171,72,155,251,201,3,185,236,50,213,224,160,206,36,101,70,253,227,152,194,228,177,177,93,89,233,59,244,49,58,104,59,228,141,20,9,79,92,168,131,56,74,20,113,231,137,189,113,179,149,129,51,102,239,192,32,189,107,203,105,62,159,171,12,40,128,13,221,163,96,170,230,216,201,206,32,176,87,75,252,55,205,233,4,17,207,146,111,13,222,40,226,77,37,38,119,82,208,109,226,52,90,176,100,125,2,24,95,211,134,175,46,19,200,14,51,52,79,176,98,103,98,149,193,182,80,196,7,225,206,102,113,128,86,106,207,133,38,190,233,39,198,248,170,31,53,129,56,236,33,128,191,61,8,188,174,235,89,209,104,13,43,54,181,96,183,102,81,3,23,1,139,62,233,126,113,123,101,241,180,119,178,99,161,139,87,86,24,12,74,82,74,64,7,112,180,3,207,14,202,213,67,252,19,120,51,14,152,225,33,236,191,65,41,17,111,5,236,221,194,206,229,11,50,251,167,114,91,198,64,182,198,8,132,8,201,58,112,23,43,23,15,104,19,167,147,166,174,123,15,118,137,152,15,15,16,216,79,250,249,132,134,74,21,14,40,199,245,146,197,84,64,192,13,2,94,13,240,218,216,182,168,249,4,79,104,151,162,62,180,37,90,210,13,100,72,228,244,27,227,208,91,254,139,23,203,38,203,21,94,44,35,0,171,34,183,126,128,239,231,50,214,60,1,160,171,236,38,210,170,253,122,92,226,86,90,12,80,48,209,52,134,241,225,70,11,248,143,58,203,92,72,241,24,176,150,61,38,67,97,241,217,128,104,165,86,160,9,211,89,137,163,234,23,254,234,32,179,190,51,34,191,190,119,43,14,174,102,212,88,67,174,241,82,25,78,111,41,103,253,6,236,249,101,30,205,190,89,152,227,160,119,53,235,245,7,197,42,76,85,186,214,113,222,195,43,41,5,236,187,165,15,3,180,74,129,145,6,53,200,129,133,173,187,194,10,94,159,151,2,172,70,69,234,104,108,97,242,35,69,67,166,112,194,244,217,56,241,249,69,62,108,14,232,10,123,200,157,85,97,51,228,29,151,193,145,194,27,250,196,113,53,8,58,0,214,253,32,95,114,19,236,26,242,147,227,70,196,108,255,80,133,71,107,131,181,239,216,248,204,245,168,207,215,232,115,51,247,165,89,189,172,89,186,149,222,249,35,52,71,75,253,219,179,221,191,179,25,219,150,165,250,135,116,84,83,179,231,202,214,234,220,160,189,167,12,75,176,229,103,21,14,11,151,54,141,124,135,95,222,36,119,174,131,159,242,221,221,122,248,203,18,149,222,245,84,185,91,149,1,188,84,113,243,140,41,191,14,138,146,82,96,85,210,202,47,254,134,155,59,186,158,184,116,209,117,220,96,149,85,110,40,92,49,226,195,10,15,13,131,216,46,137,122,65,162,111,99,224,174,203,187,203,23,143,112,93,250,62,245,110,76,199,92,22,81,20,27,140,137,238,228,242,212,159,167,110,37,0,131,128,247,205,170,197,9,46,242,81,190,89,221,139,255,199,199,20,170,33,197,42,89,24,239,58,99,78,168,72,32,138,200,112,5,21,62,167,98,6,146,103,25,149,160,121,230,254,133,246,121,93,152,163,23,117,80,3,23,138,150,164,18,250,34,207,226,115,31,97,113,77,198,164,187,212,149,240,238,210,227,101,75,213,147,236,155,75,81,148,185,20,221,1,142,42,62,176,209,151,96,107,56,89,37,252,149,47,210,90,124,167,182,5,195,10,30,35,157,38,152,89,148,73,120,57,206,197,167,221,160,93,115,112,34,215,227,111,15,16,74,73,11,193,218,28,165,206,173,120,139,101,44,102,250,182,161,247,234,242,135,128,121,255,13,145,245,61,18,127,163,123,106,70,222,89,89,217,96,205,104,126,175,200,248,248,153,115,177,173,166,47,234,214,227,18,54,111,161,85,115,81,80,43,53,58,16,14,158,175,1,81,85,200,0,139,46,204,153,127,212,85,250,61,36,48,117,244,195,55,18,189,129,104,229,244,165,201,66,225,91,238,199,41,2,27,178,228,173,12,236,171,160,201,13,193,176,147,121,164,121,3,103,249,45,25,117,77,154,72,184,213,40,159,209,55,8,56,104,147,203,240,242,125,46,203,46,209,87,106,110,42,23,130,173,240,60,178,28,191,110,67,169,73,253,180,38,119,206,250,152,110,166,121,248,54,90,44,61,156,154,206,221,219,208,118,188,35,174,222,160,35,40,0,95,112,86,140,176,19,157,178,242,153,158,190,79,144,167,119,164,132,7,171,119,158,60,182,231,14,8,99,255,7,182,159,155,203,164,66,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("9ed34ded-1a85-474a-9605-5ebac1141369"));
		}

		#endregion

	}

	#endregion

}

