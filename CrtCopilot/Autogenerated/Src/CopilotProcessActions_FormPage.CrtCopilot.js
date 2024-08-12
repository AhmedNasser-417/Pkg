define("CopilotProcessActions_FormPage", /**SCHEMA_DEPS*/["InplaceProcessSchemaDesignerComponent", "css!CopilotProcessActions_FormPage"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/(d)/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"stretch": true,
					"fitContent": false
				}
			},
			{
				"operation": "merge",
				"name": "MainContainer",
				"values": {
					"padding": {
						"bottom": "small"
					},
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"classes": ["tab-panel-fixed-height"]
				}
			},
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"visible": "$ProcessActionHasUnsavedData"
				}
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"visible": "$ProcessActionHasUnsavedData"
				}
			},
			{
				"operation": "merge",
				"name": "CloseButton",
				"values": {
					"visible": "$ProcessActionHasUnsavedData | crt.InvertBooleanValue"
				}
			},
			{
				"operation": "insert",
				"name": "InplaceProcessDesignerContainer",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.FlexContainer",
					"direction": "column",
					"stretch": true,
					"items": [],
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"fitContent": false,
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch",
					"justifyContent": "start",
					"gap": "none",
				},
				"parentName": "ActionSchemaTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "InplaceProcessSchemaDesigner",
				"values": {
					"type": "crt.InplaceProcessSchemaDesigner",
					"processSchemaUId": "$ProcessSchemaUId",
					"processName": "$PDS_Name",
					"processDescription": "$PDS_Description",
					"designerInstanceId": "$ProcessDesignerInstanceId",
					"schemaIsLoaded": "$ProcessSchemaIsLoaded",
					"schemaIsChanged": "$ProcessSchemaIsChanged",
				},
				"parentName": "InplaceProcessDesignerContainer",
				"propertyName": "items",
				"index": 0
			},
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"ProcessDesignerInstanceId": {},
					"ProcessSchemaUId": {},
					"PDS_Name": {},
					"ProcessSchemaIsLoaded": {},
					"ProcessSchemaIsChanged": {},
					"ProcessActionHasUnsavedData": {},
					"PDS_Description": {
						"validators": {
							"required": {
								"type": "crt.Required"
							}
						},
					},
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});
