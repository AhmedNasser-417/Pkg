﻿namespace Terrasoft.Configuration
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Globalization;
	using Terrasoft.Common;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;

	#region Class: FileCacheManagerSchema

	/// <exclude/>
	public class FileCacheManagerSchema : Terrasoft.Core.SourceCodeSchema
	{

		#region Constructors: Public

		public FileCacheManagerSchema(SourceCodeSchemaManager sourceCodeSchemaManager)
			: base(sourceCodeSchemaManager) {
		}

		public FileCacheManagerSchema(FileCacheManagerSchema source)
			: base( source) {
		}

		#endregion

		#region Methods: Protected

		protected override void InitializeProperties() {
			base.InitializeProperties();
			UId = new Guid("922b7915-b016-4c84-88d1-770381d21f2b");
			Name = "FileCacheManager";
			ParentSchemaUId = new Guid("50e3acc0-26fc-4237-a095-849a1d534bd3");
			CreatedInPackageId = new Guid("3c624d29-361c-47f2-ac8f-7824eb3cde6f");
			ZipBody = new byte[] { 31,139,8,0,0,0,0,0,4,0,197,26,219,110,219,56,246,125,128,249,7,214,45,82,121,215,16,118,95,147,122,138,212,177,59,198,52,73,209,36,219,135,32,8,100,137,114,180,149,37,15,69,165,227,245,228,223,247,240,38,145,20,41,219,77,118,71,15,190,72,135,135,231,126,163,138,104,133,171,117,20,99,116,141,9,137,170,50,165,225,164,44,210,108,89,147,136,102,101,17,206,178,28,79,162,248,1,159,71,69,180,196,228,231,159,182,63,255,132,224,170,171,172,88,162,171,77,69,241,234,164,123,11,208,228,57,142,25,142,138,161,140,107,66,112,65,221,144,218,134,46,128,249,165,235,238,167,172,248,221,184,191,204,203,69,148,31,31,79,202,213,10,40,255,84,46,151,112,219,0,209,185,100,64,222,135,182,8,110,214,121,25,37,94,112,130,123,30,245,48,104,1,78,11,154,209,12,87,125,48,179,40,166,37,241,3,49,106,141,71,167,139,138,146,72,104,2,141,45,200,80,127,106,44,155,95,26,192,92,7,226,249,107,130,151,0,142,38,121,84,85,199,136,91,7,195,53,47,210,82,193,172,235,69,158,197,40,102,32,54,4,123,190,85,128,6,66,160,129,146,154,241,7,120,63,115,20,58,156,68,106,160,11,134,104,139,158,118,66,233,108,134,115,118,27,165,240,49,68,219,118,33,187,248,147,49,127,118,210,62,49,240,191,198,69,34,8,118,241,240,153,148,107,76,152,18,123,56,112,80,195,63,182,104,137,233,9,170,216,135,139,167,143,117,150,112,200,121,178,19,22,118,96,106,156,213,121,254,57,162,15,126,248,126,126,206,49,125,40,147,62,102,202,71,48,146,44,193,104,81,150,57,154,254,94,71,121,21,148,139,127,131,243,35,248,234,136,248,49,34,40,214,149,3,242,6,56,20,89,134,114,98,46,203,82,196,176,162,241,24,21,192,19,250,243,79,27,139,231,65,40,116,218,62,213,255,119,168,99,23,193,180,38,5,74,129,17,108,81,241,100,254,149,144,221,253,194,79,184,88,210,135,80,138,67,187,53,68,71,71,174,5,231,101,146,165,25,78,46,139,240,186,188,41,50,144,106,21,229,215,217,10,7,195,46,137,6,226,190,165,67,159,25,219,218,203,10,138,62,98,250,107,84,61,76,202,4,7,29,201,72,94,149,65,133,6,240,254,206,34,37,40,67,137,246,88,187,107,6,152,110,10,18,96,183,103,56,141,234,156,126,200,138,4,76,61,160,155,53,46,211,96,110,195,15,135,119,142,160,100,67,161,99,212,89,217,19,171,102,25,206,185,91,144,236,49,162,216,144,172,184,5,2,139,146,178,200,55,168,77,127,103,25,119,250,136,108,222,9,255,28,153,54,255,11,186,231,166,129,198,166,236,11,252,253,16,44,92,31,135,18,196,130,203,72,134,13,69,71,114,5,31,171,136,229,13,47,9,198,186,93,59,207,33,43,163,251,28,62,198,8,126,74,57,51,91,98,233,26,147,96,192,152,248,4,185,22,147,129,27,215,252,50,156,159,101,4,179,52,177,65,247,137,250,233,5,230,254,126,47,67,250,174,184,167,22,86,20,178,117,220,18,46,3,26,144,30,127,147,210,16,183,44,142,157,121,192,111,35,42,74,43,195,123,78,168,222,43,245,240,32,61,175,174,234,56,198,85,53,47,160,222,136,242,236,63,188,52,81,27,55,196,253,112,174,240,51,252,88,138,20,150,115,118,131,155,10,19,176,170,66,84,138,80,122,232,127,59,33,104,126,73,192,46,112,50,45,234,21,38,209,34,199,239,148,130,133,247,48,37,87,236,39,7,252,176,57,195,85,140,121,116,0,157,181,166,194,236,173,49,33,94,31,24,10,112,198,91,177,37,229,78,86,5,131,191,13,70,232,10,71,36,126,184,92,243,42,241,186,92,55,40,47,193,98,92,72,58,84,5,105,147,189,4,241,60,31,76,192,234,24,78,22,193,135,86,2,74,161,6,4,58,81,160,51,222,44,133,40,222,35,3,103,178,99,121,245,213,53,217,124,142,72,5,117,69,53,35,229,138,225,189,128,214,160,33,47,100,255,70,168,172,169,168,65,48,43,84,55,34,56,220,204,19,237,9,95,145,12,157,91,177,43,46,97,105,81,219,121,149,93,79,221,91,83,109,31,99,83,80,167,105,43,161,14,170,133,149,57,148,148,81,17,227,15,27,160,51,176,232,182,133,203,46,79,165,200,196,114,182,112,192,83,8,66,30,94,219,117,64,46,208,162,212,37,238,5,38,3,35,131,63,41,112,41,77,151,176,160,134,160,96,7,47,34,102,87,73,198,227,189,113,207,179,149,86,50,11,198,70,30,56,85,137,142,91,75,103,247,24,167,14,42,29,148,115,83,21,137,41,4,139,61,77,146,224,35,46,184,87,114,74,127,195,27,91,195,141,8,71,38,131,126,3,5,196,103,56,199,194,209,131,14,165,78,93,120,107,196,167,158,152,223,33,221,237,89,186,87,121,74,178,55,131,173,181,236,233,126,43,150,60,13,188,245,159,30,144,155,60,112,104,68,54,19,215,24,25,173,174,114,195,211,245,250,10,83,176,199,101,117,59,104,86,204,202,156,37,249,59,32,240,53,104,246,98,122,61,251,114,122,62,253,122,249,229,55,115,15,41,175,42,163,60,40,193,46,114,2,240,21,47,194,95,203,138,33,86,223,211,226,49,35,101,177,2,121,132,87,114,129,163,145,104,112,189,234,105,3,108,222,120,213,59,41,87,139,172,192,102,194,24,53,196,217,230,1,34,103,57,51,75,205,219,172,2,10,121,226,121,51,104,101,207,213,44,236,52,228,238,34,126,67,204,103,146,66,107,216,105,188,53,54,126,10,7,246,142,194,73,218,84,55,253,35,171,104,101,37,184,222,76,192,211,143,0,110,50,90,224,119,24,95,49,49,118,54,80,234,18,166,123,144,51,177,139,151,95,129,136,1,78,138,100,120,152,228,144,155,3,151,179,182,181,135,101,218,254,78,207,233,55,243,118,44,196,163,35,171,89,103,50,6,10,252,222,228,53,66,208,178,64,233,252,149,128,213,16,180,208,254,88,177,211,12,192,162,36,111,66,152,203,23,197,158,26,89,42,128,89,220,121,178,86,106,198,127,23,198,192,145,166,76,194,66,49,161,232,222,150,9,192,31,122,75,26,229,188,254,231,157,50,16,225,64,44,219,104,95,146,145,149,139,103,237,254,185,70,12,193,130,43,10,206,176,66,85,89,147,152,33,229,109,68,120,185,198,69,224,225,110,196,105,128,150,92,128,249,253,70,224,132,128,178,222,92,151,129,110,4,225,135,168,194,98,103,151,5,179,203,0,159,229,117,245,224,52,118,219,153,100,209,16,76,255,136,49,47,91,145,199,139,88,124,154,18,82,66,67,54,137,138,183,20,49,245,139,248,148,130,129,11,225,30,163,1,250,59,194,225,57,56,63,4,122,23,1,244,129,148,223,247,154,161,56,12,213,233,119,188,129,241,70,41,155,25,143,157,239,17,127,5,126,25,129,155,112,138,118,198,95,142,190,13,191,2,77,75,161,25,135,93,107,119,147,118,230,163,6,197,124,183,164,75,85,79,185,168,233,250,141,84,118,252,12,222,15,79,7,7,143,219,40,169,189,211,89,219,76,180,90,78,214,17,169,47,12,249,108,133,187,188,192,19,52,139,61,242,61,196,179,148,180,19,142,26,65,146,23,90,222,170,77,158,66,36,93,235,24,109,27,55,123,114,138,253,127,34,68,71,47,212,109,99,122,11,70,53,24,50,242,159,72,26,125,133,45,107,72,82,62,8,2,177,150,68,166,35,145,138,102,237,253,160,139,213,221,49,41,124,77,55,102,53,143,146,43,113,182,2,97,132,221,8,52,2,92,69,86,139,239,189,44,178,88,53,201,196,234,84,60,143,132,156,141,11,80,239,23,156,98,130,161,47,109,236,5,204,65,149,16,199,194,14,138,146,66,233,87,23,9,250,158,65,54,156,39,199,232,141,42,235,29,30,238,141,170,157,214,181,215,97,126,184,21,240,185,79,27,63,198,98,162,43,165,204,100,252,206,24,230,253,226,204,97,220,255,124,107,153,184,220,203,52,62,118,20,122,207,112,221,172,13,208,19,145,17,255,18,63,85,186,83,6,116,93,138,10,212,51,203,104,156,114,125,64,24,52,11,34,134,70,254,52,138,162,181,89,1,137,236,231,175,129,36,82,230,158,122,69,35,253,93,175,146,131,118,71,63,186,46,157,149,162,209,16,5,47,221,105,150,87,225,23,28,37,28,117,63,82,118,9,84,63,88,175,169,107,207,186,77,93,142,89,141,231,246,11,84,122,111,58,165,30,143,59,5,196,85,176,235,84,213,207,144,149,254,82,35,119,14,42,85,110,151,255,15,25,85,218,82,177,22,176,209,29,64,135,211,213,154,110,236,97,172,56,138,237,129,16,116,221,222,161,44,209,233,149,51,48,246,51,188,90,231,25,13,222,222,191,117,118,242,124,42,20,42,182,3,19,205,237,63,238,4,63,246,92,19,29,29,117,181,210,139,233,159,18,147,154,223,238,101,44,20,34,8,224,130,212,36,186,2,145,182,90,123,17,230,242,255,51,17,179,93,190,89,39,170,67,216,61,91,27,245,15,126,189,21,138,42,132,38,226,216,174,59,54,237,248,183,39,190,74,11,254,134,55,124,88,188,231,88,115,191,41,41,32,29,117,169,245,135,60,23,99,2,227,45,160,186,219,111,168,44,70,53,221,93,125,155,10,117,41,177,205,11,161,56,15,227,35,125,222,236,96,205,19,83,245,61,4,254,31,70,247,34,1,183,105,168,80,205,40,227,133,50,123,116,64,225,127,120,135,221,176,181,215,104,184,43,178,253,189,198,58,151,118,8,214,150,144,48,94,158,107,228,224,178,179,70,155,35,29,29,161,87,142,178,167,87,151,237,114,167,122,220,227,127,199,106,159,42,154,193,217,69,73,103,172,122,215,43,252,89,147,85,89,53,175,138,121,94,233,99,209,66,100,242,109,146,157,5,190,16,210,21,166,250,105,97,15,193,78,81,100,198,219,35,254,119,69,124,6,209,250,233,115,3,108,239,224,115,63,187,233,242,39,95,146,233,198,100,45,176,187,205,192,57,158,182,52,224,150,167,113,20,230,170,23,58,43,120,5,33,132,180,27,190,61,68,243,31,71,160,247,239,81,27,90,6,35,212,229,175,239,200,232,126,203,43,133,11,252,157,125,7,67,51,238,188,232,187,99,242,45,139,206,139,55,114,250,118,96,7,42,15,7,216,151,83,169,44,103,103,242,60,88,155,112,235,27,59,171,113,181,38,244,207,182,26,16,179,131,238,239,60,217,37,99,179,90,191,239,33,132,246,50,7,59,228,174,132,26,57,39,201,174,137,140,203,85,221,129,216,195,239,51,95,154,83,231,121,205,212,230,196,169,70,227,5,36,255,129,149,9,199,222,181,165,17,72,211,81,52,245,140,226,27,82,94,232,189,130,208,193,150,186,44,130,101,137,214,9,157,45,77,238,227,127,12,114,222,139,31,115,191,91,107,163,61,138,185,62,245,85,226,52,86,29,239,50,201,252,43,202,107,219,242,71,90,60,146,132,12,212,20,66,244,77,54,147,210,156,42,75,173,129,91,44,46,231,112,30,208,53,135,115,59,124,164,231,236,78,207,105,38,205,222,83,189,142,225,89,54,54,121,192,241,183,83,178,172,217,185,53,27,15,6,172,137,42,83,59,126,216,66,50,142,226,188,72,116,168,14,10,193,136,185,152,43,68,173,86,13,225,174,137,234,11,190,223,226,122,29,69,111,230,12,68,158,166,192,99,79,221,83,90,83,185,198,89,172,245,202,200,254,73,176,121,108,62,130,219,255,5,115,74,89,23,113,49,0,0 };
		}

		#endregion

		#region Methods: Public

		public override void GetParentRealUIds(Collection<Guid> realUIds) {
			base.GetParentRealUIds(realUIds);
			realUIds.Add(new Guid("922b7915-b016-4c84-88d1-770381d21f2b"));
		}

		#endregion

	}

	#endregion

}

