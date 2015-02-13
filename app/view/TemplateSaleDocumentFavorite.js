/**
 * TemplateSaleDocument Form
 * @author Othman Labzar <othman.labzar@sage.com>
 * @class SageCME.view.TemplateSaleDocumentFavorite
 * @extends Ext.form.Panel
 */
Ext.define('SageCME.view.TemplateSaleDocumentFavorite', {
	extend: 'Ext.dataview.DataView',
	xtype: 'templateSaleDocumentFavorite',
	requires: [
		'SageCME.model.SaleDocument',
		'SageCME.form.SalesDocumentListOptions'
	],
	config: {
		itemId:'list-salesDocument',
		height: '100%',
		itemTpl: '',
		scrollable: false,
		emptyText: '<div class="empty-text">Aucun document n\'existe dans la liste</div>',
        deferEmptyText : false,
        inline :true,
		grouped: true,
		// indexBar  : true,
		store: {
			storeId: 'sales-document-list-store',
			model: 'SageCME.model.SaleDocument',
			// default grouper
		}
	},

});