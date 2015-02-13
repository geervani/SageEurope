/* global I18n*/
/**
 * sse.view.PanelPrompt a modal view for suggested products of a given search query
 * @author Layla Ait Laaraj <layla.aitllaraj@sage.com>
 * @type {View}
 */
Ext.define('SageCME.view.PanelPrompt', {
	extend: 'Ext.Panel',
	alias : 'widget.PanelPrompt',
	xtype: 'PanelPrompt',
	requires: ['Ext.dataview.List'],

	config: {
		itemId:'PanelPromptId',
		cls: 'PanelPrompt-style',
	    // We give it a left and top property to make it floating by default
		left: 0,
		top: 0,

		// Make it modal so you can click the mask to hide the overlay
		modal: true,
		hideOnMaskTap: true,

		// Set the width and height of the panel
		width: 200,


		layout: {
			type: 'vbox',
		},
		defaults: {
			margin: '0 0 5 0',
			labelWidth: '30%'
		},

		items: [
			{
				xtype:'container',
				itemId:'containerPrompt',
				cls:'containerPrompt',
				items:[
					{   xtype: 'button',
						text : 'Annuler',
						itemId: 'Cancel',
						cls:'Annuler'
					},
					{
						xtype: 'button',
						text : 'Valider',
						itemId: 'ValiDate',
						cls:'Valider'
					},
				]
			},
			{
				xtype: 'textfield',
				placeHolder : 'Nom Indicateur',
				itemId:'name',
				cls:'textfieldKPI'
			}
			
		],
	},
	initialize : function () {
		this.down('#Cancel').setText(I18n.translate('dialog.cancel'));
		this.down('#ValiDate').setText(I18n.translate('dialog.accept'));
		this.down('#name').setPlaceHolder(I18n.translate('kpi.name'));
	}

});
