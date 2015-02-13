/* global Ext,I18n */
/**
 * Deliveries Page
 * @author Othman LABZAR <othman.labzar@sage.com>
 * @class SageCME.view.main.Deliveries
 * @extends Ext.dataview.List
 */
Ext.define('SageCME.view.main.Deliveries', {
	extend: 'Ext.Container',
	xtype: 'deliveries',
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
