/* global Ext,I18n */
/**
 * Quotations Page
 * @author Othman LABZAR <othman.labzar@sage.com>
 * @class SageCME.view.main.Quotations
 * @extends Ext.dataview.List
 */
Ext.define('SageCME.view.main.Quotations', {
	extend: 'Ext.Container',
	xtype: 'quotations',
	requires: [
		'SageCME.model.SaleDocument',
		'SageCME.form.SalesDocumentListOptions',
		'SageCME.form.TemplateSaleDocument'
	],

	config: {
		cls    : 'sales-document-list',
		items: [
			{
				xtype: 'templateSaleDocument',
				docked: 'top',
			}
		],
	},
	 /* jshint -W101 */
	initialize:function  () {
		 // setter emptyText so as to have message when there is no documents
		this.query('templateSaleDocument')[0].setEmptyText(I18n.translate('modules.documents.noDocument'));
	}
});
