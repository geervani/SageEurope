/* global Ext,I18n */
/**
 * Invoices Page
 * @author Othman LABZAR <othman.labzar@sage.com>
 * @class SageCME.view.main.DeliveryFavorite
 * @extends Ext.dataview.List
 */
Ext.define('SageCME.view.main.DeliveryFavorite', {
	extend: 'Ext.Container',
	xtype: 'deliveryFavorite',
	requires: [
		'SageCME.model.SaleDocument',
		'SageCME.view.TemplateSaleDocumentFavorite'
	],

	config: {
		cls    : 'sales-delivery-list-favorite',
		items: [
			{
				xtype: 'templateSaleDocumentFavorite',
				docked: 'top',
			}
		],
	},
	/* jshint -W101 */
	initialize:function  () {
		 // setter emptyText so as to have message when there is no documents
		this.query('templateSaleDocumentFavorite')[0].setEmptyText('<span class="x-button-label">'+I18n.translate('modules.documents.noDocument')+'</span>');
	}
});
