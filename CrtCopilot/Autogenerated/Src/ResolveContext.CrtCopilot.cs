namespace Terrasoft.Core.Process
{

	using System;
	using System.Collections.Generic;
	using System.Collections.ObjectModel;
	using System.Drawing;
	using System.Globalization;
	using System.Linq;
	using System.Text;
	using Terrasoft.Common;
	using Terrasoft.Configuration.Copilot;
	using Terrasoft.Core;
	using Terrasoft.Core.Configuration;
	using Terrasoft.Core.DB;
	using Terrasoft.Core.Entities;
	using Terrasoft.Core.Factories;
	using Terrasoft.Core.Process;
	using Terrasoft.Core.Process.Configuration;

	#region Class: ResolveContextMethodsWrapper

	/// <exclude/>
	public class ResolveContextMethodsWrapper : ProcessModel
	{

		public ResolveContextMethodsWrapper(Process process)
			: base(process) {
			AddScriptTaskMethod("ResolveContextLoadDataScriptTaskExecute", ResolveContextLoadDataScriptTaskExecute);
		}

		#region Methods: Private

		private bool ResolveContextLoadDataScriptTaskExecute(ProcessExecutingContext context) {
			var entitySchemaName = Get<string>("EntitySchemaName");
			var columns = Get<CompositeObjectList<CompositeObject>>("Columns");
			var records = Get<CompositeObjectList<CompositeObject>>("Records");
			List<string> columnNames = columns.SelectMany(o => o.Where(pair => pair.Key == "Name")
				.Select(pair => pair.Value).Cast<string>()).ToList();
			List<Guid> recordIds = records.SelectMany(o => o.Where(pair => pair.Key == "Id")
				.Select(pair => pair.Value).Cast<Guid>()).ToList();
			var contextResolver = ClassFactory.Get<ICopilotContextResolver>();
			CompositeObjectList<CompositeObject> result = contextResolver.Resolve(entitySchemaName, columnNames, recordIds);
			Set("Result", result);
			return true;
		}

		#endregion

	}

	#endregion

}

