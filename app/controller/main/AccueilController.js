/* global HermesJSManager */
/* global HermesJS, I18n */
/* global SageCME*/

/**
 * AccueilController Controller
 *
 * @class SageCME.controller.main.AccueilController
 * @extends Ext.app.Controller
 * @author Othman Labzar <othman.labzar@sage.com>
*/
Ext.define('SageCME.controller.main.AccueilController', {
	extend: 'Ext.app.Controller',
	requires: [
		'SageCME.singleton.HermesJSManager',
		'SageCME.view.main.Home',
		'SageCME.view.main.QuotationFavorite',
		'SageCME.view.main.OrderFavorite',
		'SageCME.view.main.InvoiceFavorite',
		'SageCME.view.main.DeliveryFavorite',
		'SageCME.view.main.CustomerFavorite',
		'Ext.Array'
	],

	config: {
		heightAccueil :   false,
		refs: {
			accueil:            'accueil',
			dashboard:          'dashboard',

			favoriteKpi:        'accueil container kpi-favorite',
			favoriteInvoice:    'accueil invoiceFavorite templateSaleDocumentFavorite',
			favoriteOrder:      'accueil orderFavorite templateSaleDocumentFavorite',
			favoriteDelivery:   'accueil deliveryFavorite templateSaleDocumentFavorite',
			favoriteQuotation:  'accueil quotationFavorite templateSaleDocumentFavorite',
			favoriteCustomer:   'accueil #containerFavoris customerFavorislist #list-customer',

			favoriteInvoiceLazy:    'accueil invoiceFavorite',
			favoriteOrderLazy:      'accueil orderFavorite',
			favoriteDeliveryLazy:   'accueil deliveryFavorite',
			favoriteQuotationLazy:  'accueil quotationFavorite',
			favoriteCustomerLazy:   'accueil customerFavorislist',

			ButtonKpiId:        'button[name=kpiId]',
			ButtonclientId:     'button[name=clientId]',
			ButtonFactureId:    'button[name=factureId]',
			ButtonOrderId:      'button[name=orderId]',
			ButtonDeliveryId:   'button[name=deliveryId]',
			ButtonDevisId:      'button[name=devisId]',

			customerLabelId:    'accueil #customerLabelId',
			invoiceLabelId:     'accueil #invoiceLabelId',
			orderLabelId:       'accueil #orderLabelId',
			deliveryLabelId:    'accueil #deliveryLabelId',
			quotationLabelId:   'accueil #quotationLabelId',

			ButtonKpiSeeAllButton:          'button[name=kpiSeeAllButton]',
			ButtonCustomerSeeAllButton:     'button[name=customerSeeAllButton]',
			ButtonnInvoiceSeeAllButton:     'button[name=invoiceSeeAllButton]',
			ButtonOrderSeeAllButton:        'button[name=orderSeeAllButton]',
			ButtonDeliverySeeAllButton:     'button[name=deliverySeeAllButton]',
			ButtonQuotationSeeAllButton:    'button[name=quotationSeeAllButton]',
		},
		control: {
			accueil :{
				show : 'onShow',
			},
			ButtonKpiSeeAllButton:{
				tap : 'seeAllKpis'
			},
			ButtonCustomerSeeAllButton:{
				tap : 'seeAllCustomers'
			},
			ButtonnInvoiceSeeAllButton:{
				tap : 'seeAllInvoices'
			},
			ButtonOrderSeeAllButton:{
				tap : 'seeAllOrders'
			},
			ButtonDeliverySeeAllButton:{
				tap : 'seeAllDeliverys'
			},
			ButtonQuotationSeeAllButton:{
				tap : 'seeAllQuotations'
			},


			ButtonKpiId:{
				tap : 'goKpiSection'
			},
			ButtonclientId: {
				tap : 'goCustomerSection'
			},
			ButtonFactureId: {
				tap : 'goFactureSection'
			},
			ButtonOrderId: {
				tap : 'goOrderSection'
			},
			ButtonDeliveryId: {
				tap : 'goDeliverySection'
			},
			ButtonDevisId: {
				tap : 'goDevisSection'
			},

			favoriteCustomer:{
				itemtap:         'onItemTapCustomer'
			},

			favoriteInvoice : {
				itemtap:         'showSaleDocument'
			},

			favoriteOrder   : {
				itemtap:         'showSaleDocument'
			},

			favoriteDelivery : {

				itemtap:         'showSaleDocument'
			},
			favoriteQuotation : {
				itemtap:         'showSaleDocument'
			},

			favoriteCustomerLazy: {
				lazy : 'onLoadCustomerFavoriteList'
			},
			favoriteInvoiceLazy: {
				lazy : 'onLoadInvoiceFavoriteList'
			},
			favoriteOrderLazy: {
				lazy : 'onLoadOrderFavoriteList'
			},
			favoriteDeliveryLazy: {
				lazy : 'onLoadDeliveryFavoriteList'
			},
			favoriteQuotationLazy: {
				lazy : 'onLoadQuotationFavoriteList'
			},
		}
	},

	onLoadCustomerFavoriteList : function () {
		this.loadDataByType('customer','');
	},

	onLoadInvoiceFavoriteList : function () {
		this.loadDataByType('salesDocument','invoice');
	},

	onLoadOrderFavoriteList : function () {
		this.loadDataByType('salesDocument','order');
	},

	onLoadDeliveryFavoriteList : function () {
		this.loadDataByType('salesDocument','delivery');
	},

	onLoadQuotationFavoriteList : function () {
		this.loadDataByType('salesDocument','quotation');
	},


	seeAllKpis: function() {
		this.redirectTo('home');
	},
	seeAllCustomers: function() {
		this.redirectTo('customers');
	},

	seeAllInvoices: function() {
		this.redirectTo('saleDocument/invoices');
	},

	seeAllOrders: function() {
		this.redirectTo('saleDocument/orders');
	},

	seeAllDeliverys: function() {
		this.redirectTo('saleDocument/deliveries');
	},

	seeAllQuotations: function() {
		this.redirectTo('saleDocument/quotations');
	},


	setClsButtons: function  (type) {
		/*jshint -W101*/
		var self=this,
			currentButton = {
			
			'kpi': function  () {
				self.getButtonKpiId().addCls('home-kpi-button-active');
			},
			'customer': function  () {
				self.getButtonclientId().addCls('home-client-button-active');
			},
			'invoice': function  () {
				self.getButtonFactureId().addCls('home-facture-button-active');
			},
			'order': function  () {
				self.getButtonOrderId().addCls('home-order-button-active');
			},
			'delivery': function  () {
				
				self.getButtonDeliveryId().addCls('home-delivery-button-active');

			},
			'devis': function  () {
				self.getButtonDevisId().addCls('home-devis-button-active');
			},
		};

		self.getButtonKpiId().setCls('home-kpi-button');

		self.getButtonclientId().setCls('home-client-button');

		self.getButtonFactureId().setCls('home-facture-button');

		self.getButtonOrderId().setCls('home-order-button');

		self.getButtonDeliveryId().setCls('home-delivery-button');

		self.getButtonDevisId().setCls('home-devis-button');
		
		
		if (currentButton[type]) {
			return currentButton[type]();
		} else{
			throw new Error('Invalid type');
		}

	},

	onScroll:function (scroller, x, y){

		var TargetLabelTab = Ext.select('[data-scrollspy-target]').elements,
			self=this,
			i;
		for (i = 0; i < TargetLabelTab.length-1; i++) {
			if ((y+14>=TargetLabelTab[i].offsetTop)&&(y<TargetLabelTab[i+1].offsetTop)) {
				self.setClsButtons(TargetLabelTab[i].attributes[0].nodeValue);
			}
			else if(y>TargetLabelTab[i+1].offsetTop){
				self.setClsButtons(TargetLabelTab[TargetLabelTab.length-1].attributes[0].nodeValue);
			}
		}

	},

	goKpiSection: function () {
		this.getAccueil().getScrollable().getScroller().scrollTo(0, 1, true);
	},

	goCustomerSection: function () {
		var customerLabelId = this.getCustomerLabelId(),
			position=customerLabelId.element.dom.offsetTop;
		this.getAccueil().getScrollable().getScroller().scrollTo(0, position, true);
	},
	goFactureSection: function () {
		var invoiceLabelId = this.getInvoiceLabelId(),
			position=invoiceLabelId.element.dom.offsetTop;
		this.getAccueil().getScrollable().getScroller().scrollTo(0, position, true);
	},

	goOrderSection: function () {
		var orderLabelId = this.getOrderLabelId(),
			position=orderLabelId.element.dom.offsetTop;
		this.getAccueil().getScrollable().getScroller().scrollTo(0, position, true);
	},

	goDeliverySection: function () {
		var deliveryLabelId = this.getDeliveryLabelId(),
			position=deliveryLabelId.element.dom.offsetTop;
		this.getAccueil().getScrollable().getScroller().scrollTo(0, position, true);
	},

	goDevisSection: function () {
		// this.getAccueil().getScrollable().getScroller().setSize({y : max});
		var quotationLabelId = this.getQuotationLabelId(),
			position = quotationLabelId.element.dom.offsetTop;
		this.addSupportHeight();
		this.getAccueil().getScrollable().getScroller().scrollTo(0, position, true);
	},

	addSupportHeight : function () {
		var heightAccuiel = this.getAccueil().getScrollable().getScroller().getSize().y,
			accueil = this.getAccueil();

		if (!this.getHeightAccueil()) {
			accueil.getScrollable().getScroller().setSize({y : heightAccuiel+200});
		}
		this.setHeightAccueil(true);
	},
	
	onShow: function () {
		var self =this;

		self.getButtonKpiId().addCls('home-kpi-button-active');
		this.getAccueil().getScrollable().getScroller().on('scroll',function (scroller,x,y) {
			self.onScroll(scroller, x, y);
		});
		this.setHeightAccueil(false);
				
	},

	loadDataByType: function (ressourceKind,type) {
		if (ressourceKind==='customer') {
			HermesJSManager.resource(
				{resourceKind : 'customer'},
				this,
				this.renderViewCustomer
			);
		} else if (ressourceKind==='salesDocument'){
			this.callBackSalesDocument(type);
		}else {
			throw new Error('Invalid ressourceKind or type');

		}
		
	},

	callBackSalesDocument: function  (type) {
		var self = this,
			currentCallBack = {

			'invoice': function  () {
				self.showLoader(self.getFavoriteInvoice());
				HermesJSManager.data(
				HermesJS.getConfig('$options.modules.invoiceList.preview.query')+
				'&count='+HermesJS.getConfig('$options.modules.invoiceList.preview.maxResult')+'',
				self,
				self.renderViewInvoice);
			},

			'order': function  () {
				self.showLoader(self.getFavoriteOrder());
				HermesJSManager.data(
				HermesJS.getConfig('$options.modules.orderList.preview.query')+
				'&count='+HermesJS.getConfig('$options.modules.orderList.preview.maxResult')+'',
				self,
				self.renderViewOrder);
			},

			'delivery': function  () {
				self.showLoader(self.getFavoriteDelivery());
				HermesJSManager.data(
				HermesJS.getConfig('$options.modules.deliveryList.preview.query')+
				'&count='+HermesJS.getConfig('$options.modules.deliveryList.preview.maxResult')+'',
				self,
				self.renderViewDelivery);
			},

			'quotation': function  () {
				self.showLoader(self.getFavoriteQuotation());
				HermesJSManager.data(
				HermesJS.getConfig('$options.modules.quoteList.preview.query')+
				'&count='+HermesJS.getConfig('$options.modules.quoteList.preview.maxResult')+'',
				self,
				self.renderViewQuotation);
			},
		};
		if (currentCallBack[type]) {
			return currentCallBack[type]();
		} else{
			throw new Error('Invalid type');
		}
	},

	setDataInStore : function (view,template,data) {

		data=data.$resources||data;
		view.setItemTpl(template);
		view.getStore().setData(data);
		this.hideLoader(view);
	},

	renderViewInvoice: function (data) {
		var listInvoice     = this.getFavoriteInvoice(),height,
		/*jshint -W101*/
		previewTemplate= HermesJS.getConfig('$options.modules.invoiceList.preview.template-ios');
		/*jshint +W101*/

		data=data.$resources||data;
		height = Math.ceil(data.length/2)*122;
		if (height===0) {
			height = 20;
		}
		listInvoice.setHeight(height);
		this.setDataInStore(listInvoice,previewTemplate,data);
	},

	renderViewOrder: function (data) {
		var listOrder           = this.getFavoriteOrder(),height,
		/*jshint -W101*/
		previewTemplate= HermesJS.getConfig('$options.modules.orderList.preview.template-ios');
		/*jshint +W101*/
		data=data.$resources||data;
		height = Math.ceil(data.length/2)*122;
		if (height===0) {
			height = 20;
		}
		listOrder.setHeight(height);
		this.setDataInStore(listOrder,previewTemplate,data);
	},

	renderViewDelivery: function (data) {
		var listDelivery        = this.getFavoriteDelivery(),height,
		/*jshint -W101*/
		previewTemplate= HermesJS.getConfig('$options.modules.deliveryList.preview.template-ios');
		/*jshint +W101*/
		data=data.$resources||data;
		height = Math.ceil(data.length/2)*122;
		if (height===0) {
			height = 20;
		}
		listDelivery.setHeight(height);
		this.setDataInStore(listDelivery,previewTemplate,data);
	},

	renderViewQuotation: function (data) {
		var listQuotation       = this.getFavoriteQuotation(),height,
		/*jshint -W101*/
		previewTemplate= HermesJS.getConfig('$options.modules.quoteList.preview.template-ios');
		/*jshint +W101*/
		data=data.$resources||data;
		height = Math.ceil(data.length/2)*122;
		if (height===0) {
			height = 20;
		}
		listQuotation.setHeight(height);
		this.setDataInStore(listQuotation,previewTemplate,data);
	},

	renderViewCustomer: function (data) {
		var listFavoriteCustomer= this.getFavoriteCustomer(),
			favoriteClient,
			height,
			buttonCustomerSeeAllButton = this.getButtonCustomerSeeAllButton();

		data=data.$resources||data;
		favoriteClient = Ext.Array.filter(data,function (client) {
			return HermesJSManager.isResourceFavorite('customer', client.$key);
		});
		if (favoriteClient.length===0) {
			buttonCustomerSeeAllButton.setHtml(I18n.translate('home.addFavoriteCustomer'));
		}
		height = Math.ceil(favoriteClient.length/4)*179;
		listFavoriteCustomer.setHeight(height);
		listFavoriteCustomer.getStore().setData(favoriteClient);
	},



	showLoader: function (context) {
		context.setMasked({
				xtype   : 'loadmask',
				message : I18n.translate('semanticZoom.processing')
			});
	},

	hideLoader: function (context) {
		context.setMasked(false);
	},

	onItemTapCustomer :function(context, index, target, record) {
		var url = 'customer-detail/' + record.get('$key');
		// trick to keep customer informations when offline
		SageCME.currentCustomer = record;

		this.getApplication().redirectTo(url);
	},

	showSaleDocument :function(context, index, target, record) {
		this.redirectTo('salesDocument-details/'+record.get('$key'));

	},
});