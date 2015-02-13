/* global HermesJSManager,I18n */
/* global HermesJS */

/**
 * SaleDocument Controller
 *
 * @class SageCME.controller.main.SaleDocument
 * @extends Ext.app.Controller
 * @author Layla Ait Laaraj <layla.aitlaaraj@sage.com>
 * @author Othman Labzar <othman.labzar@sage.com>
 * @author Said Ouarrich <said.ouarrich@sage.com>
*/
Ext.define('SageCME.controller.main.SaleDocument', {
	extend: 'Ext.app.Controller',
	requires: [
		'SageCME.view.main.Invoices',
		'SageCME.view.main.Customer',
		'SageCME.view.main.Orders',
		'SageCME.view.main.Quotations',
		'SageCME.view.main.Deliveries',
		'SageCME.singleton.HermesJSManager'
	],

	config: {
		viewsConfig: [],
		groupField: 'date',
		refs: {
			invoices: 'invoices',
			orders: 'orders',
			deliveries: 'deliveries',
			quotations: 'quotations',
			customer:'customer',

			customerDocument:'customer templateSaleDocument',
			groupingPanel: 'customer templateSaleDocument sales-document-list-options-form',

			listInvoices : 'invoices templateSaleDocument',
			listOrders : 'orders templateSaleDocument',
			listDeliveries : 'deliveries templateSaleDocument',
			listQuotations : 'quotations templateSaleDocument',
			listSalesDocumentCustomer: 'customer tabpanel templateSaleDocument',

			groupSelectFieldInvoices: 'invoices sales-document-list-options-form selectfield',
			groupSelectFieldOrders: 'orders sales-document-list-options-form selectfield',
			groupSelectFieldDeliveries: 'deliveries sales-document-list-options-form selectfield',
			groupSelectFieldQuotations: 'quotations sales-document-list-options-form selectfield',
			groupSelectFieldCustomer: 'customer sales-document-list-options-form selectfield'
		},
		control: {
			invoices: {
				show: 'onShow',
				destroy: 'onDestroy'
			},
			orders: {
				show: 'onShow',
				destroy: 'onDestroy'
			},
			deliveries: {
				show: 'onShow',
				destroy: 'onDestroy'
			},
			quotations: {
				show: 'onShow',
				destroy: 'onDestroy'
			},
			groupSelectFieldInvoices: {
				change: 'onGroupSelectFieldChange'
			},
			groupSelectFieldOrders: {
				change: 'onGroupSelectFieldChange'
			},
			groupSelectFieldDeliveries: {
				change: 'onGroupSelectFieldChange'
			},
			groupSelectFieldQuotations: {
				change: 'onGroupSelectFieldChange'
			},
			groupSelectFieldCustomer: {
				change: 'onGroupSelectFieldChange'
			},

			listQuotations:{
				itemtap:'onItemtap'
			},
			listOrders:{
				itemtap:'onItemtap'
			},
			listDeliveries:{
				itemtap:'onItemtap'
			},
			listInvoices:{
				itemtap:'onItemtap'
			},
			listSalesDocumentCustomer:{
				show: 'onShowCustomerDocument',
				itemtap:'onItemtap'
			}
		}
	},

	onShowCustomerDocument: function (){
		this.initViewsConfig();
	},

	onShow: function () {
		this.initViewsConfig();
		this.loadData();
		this.groupData();
	},

	/* jshint -W101 */
	initViewsConfig: function () {
        var query = [
            'salesDocument?',
            'where=type eq \'{{documentType}}\'',
            '&orderBy=date desc',
            '&select=type, totalGrossAmountwithoutVAT, currency, originalType, number, date, customer.name,customer.shortName'
        ].join('');

		this.viewsConfig = [
			{
				view:             this.getInvoices(),
				list:             this.getListInvoices(),
				groupSelectField: this.getGroupSelectFieldInvoices(),
				documentType:     'invoiceList',
				// TODO: Remove the count limit
				queryString:      query.replace('{{documentType}}', 'invoice'),
				previewTemplate:  HermesJS.getConfig('$options.modules.invoiceList.preview.template-ios'),
				viewTitleKey:     'modules.invoiceList.title'
			},
			{
				view:             this.getOrders(),
				list:             this.getListOrders(),
				groupSelectField: this.getGroupSelectFieldOrders(),
				documentType:     'orderList',
				queryString:      query.replace('{{documentType}}', 'order'),
				previewTemplate:  HermesJS.getConfig('$options.modules.orderList.preview.template-ios'),
				viewTitleKey:     'modules.orderList.title'
			},
			{
				view:             this.getDeliveries(),
				list:             this.getListDeliveries(),
				groupSelectField: this.getGroupSelectFieldDeliveries(),
				documentType:     'deliveryList',
				queryString:      query.replace('{{documentType}}', 'delivery'),
				previewTemplate:  HermesJS.getConfig('$options.modules.deliveryList.preview.template-ios'),
				viewTitleKey:     'modules.deliveryList.title'
			},
			{
				view:             this.getQuotations(),
				list:             this.getListQuotations(),
				groupSelectField: this.getGroupSelectFieldQuotations(),
				documentType:     'quoteList',
				queryString:      query.replace('{{documentType}}', 'quotation'),
				previewTemplate:  HermesJS.getConfig('$options.modules.quoteList.preview.template-ios'),
				viewTitleKey:     'modules.quoteList.title'
			},
			{
				view: this.getCustomer(),
				list: this.getListSalesDocumentCustomer()
			}
		];
	},
	/* jshint +W101 */

	/**
	 * this function allow you to load saleDocument from hermes.
	 *
	 * @author Labzar Othman <othman.labzar@sage.com>
	 */
	loadData: function () {
		var cmp = Ext.getCmp('ext-title-1'),
		me=this,
		viewTitleKey     = this.getActiveViewConfig('viewTitleKey');
		this.showLoader();

		cmp.setTitle(I18n.translate(viewTitleKey));
		HermesJSManager.paginatedData(
			this.getActiveViewConfig('queryString')).then(function(data){
				me.renderView(data);

			});
	},

	/**
	 * @param  {Array} Array of saleDocument by type.
	 * @author Labzar Othman <othman.labzar@sage.com>
	 */
		/* jshint -W101 */
	renderView: function (data) {
		var view             = this.getActiveViewConfig('list'),
			previewTemplate  = this.getActiveViewConfig('previewTemplate'),
			store            = view.getStore(),
			groupSelectField = this.getActiveViewConfig('groupSelectField'),
			viewTitleKey     = this.getActiveViewConfig('viewTitleKey'),
			cmp = Ext.getCmp('ext-title-1'),
			optionSalesDocs  = [
				{ text:HermesJSManager.getI18nConfig('$options.modules.semanticZoomDelivery.sort.createDate.$title') , value: 'date' },
				{ text: HermesJSManager.getI18nConfig('$options.modules.semanticZoomDelivery.sort.originalType.$title'), value: 'originalType' },
				{ text: HermesJSManager.getI18nConfig('$options.modules.semanticZoomDelivery.sort.customerName.$title'), value: 'customer' }
			];

		groupSelectField.setOptions(optionSalesDocs);
		store.setData(data.value.$resources);
		view.setItemTpl(previewTemplate);

		cmp.setTitle(I18n.translate(viewTitleKey));

		this.hideLoader();
	},

	/**
	 * this function allow you to check Select Field change ,
	 * and apply function groupData.
	 *
	 * @author Labzar Othman <othman.labzar@sage.com>
	 */
	onGroupSelectFieldChange: function (field, newValue) {
		this.groupData(newValue);
	},

	/**
	 * this function allow you to group data by options.
	 *
	 * @author Labzar Othman <othman.labzar@sage.com>
	 */
	groupData: function (groupField) {
		var view = this.getActiveViewConfig('list'),
			store = view.getStore();

		if (groupField) {
			this.setGroupField(groupField);
		}
		if (groupField==='customer') {
			store.setGrouper({
				groupFn: this.groupDataFn.bind(this),
			});
		} else{
			store.setGrouper({
				groupFn: this.groupDataFn.bind(this),
				sortProperty: 'date',
				direction: 'DESC',
			});
		}

	},

	groupDataFn: function (record) {
		var obj = {
			'date':         this.converteDate(record.get('date')),
			'customer':     record.get('_customer').name,
			'originalType': record.get('originalType'),
		};

		if ( obj[this.getGroupField()] ) {
			return obj[this.getGroupField()];
		} else {
			/* jshint -W101 */
			throw new Error('Invalid sales document grouping field: "' + this.getGroupField() + '"');

		}
	},

	converteDate : function (d) {
		/* jshint -W101 */
		var monthname = [	I18n.translate('month.Jan').substring(0,3),
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
		return monthname[d.getMonth()] + ' '+d.getFullYear();
	},

	/**
	 * Returns show Loader for the Current view.
	 *
	 * @author Labzar Othman <othman.labzar@sage.com>
	 */
	showLoader: function () {
		this
			.getActiveViewConfig('list')
			.setMasked({
				xtype   : 'loadmask',
				message : I18n.translate('semanticZoom.processing')
			});
	},

	/**
	 * Returns hide Loader for the Current view.
	 *
	 * @author Labzar Othman <othman.labzar@sage.com>
	 */
	hideLoader: function () {
		this
			.getActiveViewConfig('list')
			.setMasked(false);
	},

	/**
	 * Returns current view configuration.
	 * If a key is given, it returns configuration just for that particular key.
	 *
	 * @param  {string} key A configuration key
	 * @return {mixed}
	 */
	getActiveViewConfig: function (key) {
		var config;

		Ext.Array.each(this.viewsConfig, function (item) {
			if (item.view) {
				config = item;
			}
		});

		if (key !== undefined && config.hasOwnProperty(key)) {
			config = config[key];
		} else {
			throw new Error('Invalid configuration key: ' + key);
		}

		return config;
	},


	onItemtap :function(me, index, target, record) {
		var self =this;

		self.redirectTo('salesDocument-details/'+record.get('$key'));

	},

	onDestroy: function () {
		// A workarround to solve performance issue relative to store destruction

		Ext.Array.each(Ext.StoreManager.all, function (store) {
			if (store.getId() === 'sales-document-list-store') {
				store.destroy();
			}
		});
	}
});
