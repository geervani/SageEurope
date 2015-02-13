/* global I18n */
/**
 * TemplateSaleDocument Form
 * @author Othman Labzar <othman.labzar@sage.com>
 * @class SageCME.form.TemplateSaleDocument
 * @extends Ext.form.Panel
 */
Ext.define('SageCME.form.TemplateSaleDocument', {
	extend: 'Ext.dataview.List',
	xtype: 'templateSaleDocument',
	requires: [
		'SageCME.model.SaleDocument',
		'SageCME.form.SalesDocumentListOptions'
	],
	config: {
		height: '100%',
		items: [
			{
				xtype: 'sales-document-list-options-form',
				scrollable:false,
				height: 40,
				docked: 'top',
			}
		],
		variableHeights: 112,
		/* jshint -W015 */
		itemTpl: [],
		emptyText: '<div>Aucun document</div>',
		/* jshint +W015 */
		grouped: true,
		// indexBar  : true,
		infinite: true,
		store: {
			storeId: 'sales-document-list-store',
			model: 'SageCME.model.SaleDocument',
			// default grouper
			grouper: {
				sortProperty: 'date',
				direction: 'DESC',
				groupFn: function (record) {
					var d = record.get('date'),
					/* jshint -W101 */
					monthname = [	I18n.translate('month.Jan').substring(0,3),
									I18n.translate('month.Feb').substring(0,3),
									I18n.translate('month.Mar').substring(0,3),
									I18n.translate('month.Apr').substring(0,3),
									I18n.translate('month.May').substring(0,3),
									I18n.translate('month.Jun').substring(0,3),
									I18n.translate('month.Jul').substring(0,3),
									I18n.translate('month.Aug').substring(0,3),
									I18n.translate('month.Sep').substring(0,3),
									I18n.translate('month.Oct').substring(0,3),
									I18n.translate('month.Nov').substring(0,3),
									I18n.translate('month.Dec').substring(0,3)];
					/* jshint +W101 */
					return monthname[d.getMonth()] + ' ' + d.getFullYear();
				},
			},
		}
	},

});