/* global Ext,I18n */
/**
 * Customers Page
 * @author Said Ouarrich <said.ouarrich@sage.com>
 * @class SageCME.view.main.Customers
 * @extends Ext.dataview.List
 */
Ext.define('SageCME.view.main.Customers', {
	extend: 'Ext.Container',
	xtype: 'customersEvolution',
	requires: [
		'SageCME.model.Customer',
		'Ext.dataview.List'
	],

	config: {
		cls    : 'customers-evo-list',
		items :[
			{
				xtype: 'toolbar',
				docked: 'top',
				items:[
					{
						xtype : 'searchfield',
						itemId: 'searchfield',
						placeHolder : ''
					},
					{
						xtype: 'selectfield',
						itemId: 'selectfieldDashboard',
						options: [
							{ text: 'Ordre Alphabétique', value: 'name' },
							{ text: 'Code Postal', value: 'city' }
						],
					}
				],
			},
			{
				xtype: 'list',
				itemId: 'customerList',
				itemHeight : 70,
				height: '100%',
			    itemTpl: [],
			    emptyText: '<div>Aucun Résultat</div>',
				infinite   : true,
				grouped    : true,
			    store: {
					storeId: 'customers-list-store',
					model: 'SageCME.model.Customer',
					grouper : {
						groupFn : function (record) {
							if (record.get('name')) {
								return record.get('name')[0].toUpperCase();
							} else {
								return '-';
							}
						}
					},
				}
			}
		]
	},
	initialize : function(){
		var me = this;
		me.down('#selectfieldDashboard').setOptions([
			{ text: I18n.translate('modules.semanticZoomCustomer.sort.alpha'), value: 'name' },
			{ text: I18n.translate('modules.semanticZoomCustomer.sort.zipcode'), value: 'city' },
		]);
		this.down('#searchfield').setPlaceHolder(I18n.translate('search'));
		this.down('#customerList').setEmptyText(I18n.translate('modules.customerList.noCustomer'));

	}
});
