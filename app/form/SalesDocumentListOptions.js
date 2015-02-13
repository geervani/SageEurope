/* global Ext */
/**
 * SalesDocumentListOptions Form
 * @author Youssef Boubdir <youssef.boubdir@sage.com>
 * @class SageCME.form.SalesDocumentListOptions
 * @extends Ext.form.Panel
 */
Ext.define('SageCME.form.SalesDocumentListOptions', {
	extend: 'Ext.form.Panel',
	xtype: 'sales-document-list-options-form',
	requires: [
	],

	config: {
		itemId: 'selectform',
		items: [
			{
                xtype:'spacer',
            },
			{
				xtype: 'selectfield',
				itemId: 'selectfield',
				options: [

				]
			}
		]
	}
});
