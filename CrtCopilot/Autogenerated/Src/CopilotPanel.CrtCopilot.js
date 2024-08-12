define("CopilotPanel", /**SCHEMA_DEPS*/["css!CopilotPanel"]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "insert",
				"name": "RestartSessionButton",
				"values": {
					"type": "crt.Button",
					"icon": "restart-button-icon",
					"iconPosition": "only-icon",
					"title": "#ResourceString(CopilotRestartSessionButton_title)#",
					"classes": ["copilot-restart-session-button"],
					"clicked": {
						"request": "crt.CopilotRestartSessionRequest",
						"params": {
							"chatMessagesAttributeName": "ChatMessages",
							"conversationEventAttributeName": "ConversationEvent"
						}
					}
				},
				"parentName": "ToggleTabPanel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Conversation",
				"values": {
					"type": "crt.Conversation",
					"actions": [],
					"information": [],
					"placeholder": [
						{
							"type": "crt.Placeholder",
							"image": {
								"type": "animation",
								"name": "copilot"
							},
							"title": null,
							"subhead": null
						},
						{
							"type": "crt.Label",
							"caption": "#MacrosTemplateString(#ResourceString(CopilotTitle_caption)#)#",
							"labelType": "headline-3",
							"labelColor": "#0D2E4E",
							"labelTextAlign": "center",
							"labelMargin": "24px 0 0 0"
						},
						{
							"type": "crt.Label",
							"caption": "#MacrosTemplateString(#ResourceString(CopilotTitle_text)#)#",
							"labelType": "body",
    						"labelThickness": "default",
							"labelMargin": "16px 0 8px 0"
						}
					],
					"conversationEvent": "$ConversationEvent",
					"messages": "$ChatMessages",
					"isTyping": "$IsTyping",
					"tools": []
				},
				"parentName": "MainContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_MessageEditor",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"justifyContent": "start",
					"gap": "none",
					"alignItems": "center",
					"items": []
				},
				"parentName": "Conversation",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Conversation_MessageEditor",
				"values": {
					"type": "crt.MessageEditor",
					"chatInput": "$ChatInput",
					"sendMessage": {
						"request": "crt.MessageEditorSendRequest",
						"params": {
							"attributesMapping": "$MessageEditorAttributesMapping"
						}
					}
				},
				"parentName": "FlexContainer_MessageEditor",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfig: /**SCHEMA_VIEW_MODEL_CONFIG*/{
			"attributes": {
				"ChatMessages": {},
				"IsTyping": {},
				"ChatInput": {
					"value": ""
				},
				"ConversationEvent": {
					"value": []
				},
				"MessageEditorAttributesMapping": {
					"value": {
						"chatInput": "ChatInput",
						"chatMessages": "ChatMessages"
					}
				}
			}
		}/**SCHEMA_VIEW_MODEL_CONFIG*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{}/**SCHEMA_VALIDATORS*/
	};
});