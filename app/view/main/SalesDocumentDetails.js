/* global Ext*/

/**
 * Invoice details page
 * @author Youssef Boubdir <youssef.boubdir@sage.com>
 * @class SageCME.view.pages.InvoiceDetails
 * @extends Ext.Container
 */
Ext.define('SageCME.view.main.SalesDocumentDetails', {
	extend: 'Ext.Container',
	xtype: 'salesDocument-details',
	requires: ['Ext.Panel'
	],

	config: {
		/* jshint -W015 */
		tpl:[],
		scrollable:true,
		items:[
				{
					xtype: 'container',
					itemId: 'containerEntete',
					tpl:[],
					html:'',
					flex:2,
				},
				{
					xtype: 'container',
					itemId: 'containerInfo',
					tpl:[],
					html:'',
					flex:1,
				},
				{
					xtype: 'panel',
					itemId: 'containerTable',
					element:'',
					flex:1,
				},

		]
		},


	});
