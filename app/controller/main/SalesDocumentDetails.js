/* global SaleDocumentModel,SaleDocumentLineModel, I18n */
/* global Ext:true */
/* global HermesJS:true */

/**
 * Invoice details page
 * @author Youssef Boubdir <youssef.boubdir@sage.com>
 * @author othman LABZAR  <othman.labzar@sage.com>
 * @class SageCME.controller.pages.InvoiceDetails
 * @extends NijiLibrary.controller.NijiRoutingController
 */
Ext.define('SageCME.controller.main.SalesDocumentDetails', {
	extend: 'NijiLibrary.controller.NijiRoutingController',

	requires: [
		'SageCME.view.main.SalesDocumentDetails',
		'SageCME.model.SaleDocument',
		'SageCME.model.SaleDocumentLine',
		'SageCME.view.main.Invoices',
		'SageCME.view.main.Customer',
		'SageCME.view.main.Orders',
		'SageCME.view.main.Deliveries',
		'Ext.device.Connection'
	],

	config: {
		navigationViewRef: 'main',
		pages: [
			{
				route : 'salesDocument-details/:number',
				view  : 'SageCME.view.main.SalesDocumentDetails',
				// title : 'Details Facture',
				after : ['showSalesDocumentDetails']
			}
		],

		refs: {
			titlebar: 'main titlebar',
			page: 'salesDocument-details',
			invoices: 'invoices',
			orders: 'orders',
			deliveries: 'deliveries',
			quotations: 'quotations',
			customer:'customer',
			documents: 'customer #tabpanel #documents',
			listInvoices : 'invoices templateSaleDocument',
			listOrders : 'orders templateSaleDocument',
			listDeliveries : 'deliveries templateSaleDocument',
			listQuotations : 'quotations templateSaleDocument',
			listSalesDocumentCustomer: 'customer tabpanel templateSaleDocument',
		},
		control: {
			page: {
				show: 'onShow',
			},
			customer: {
				backToPreviousView:'backToPreviousView',
			},
			documents:{
				show:'documentsShow'
			},
			modelDocumentDetail:{
				checkConnexion :'checkConnexion',

			},
			nijiRoutingControllerNavigationViewReference : {
				pop       : 'onMainViewPop',
				push      : 'onMainviewPush',
				beforePop : 'onMainViewBeforePop'
			}
			
		}
	},
	documentsShow:function() {
		var customerDetail = this.getCustomer(),

		key = customerDetail.self.currentCustomer.get('$key');
		customerDetail.loadData(key);

	},

	/**
	 * show details of a specific invoice 
	 * @author Youssef Zine el abidine <youssef.zineelabidine@sage.com>
	 * @method [showInvoiceDetails]
	 */
	showSalesDocumentDetails: function (number) {
		var me = this,
			titlebar = me.getTitlebar();

			/* jshint -W101 */
			/* jshint -W102 */

		SaleDocumentModel
			.findOneByNumber(number)
			.then(function (salesDocument) {

				var htmlInfoCompiled,htmlEnteteCompiled,htmlTableCompiled,	
				title,			
				templatesBrico = {
					'invoice'	: HermesJS.getConfig('$options.modules.invoiceList.detail.template-info-ios'),
					'order': HermesJS.getConfig('$options.modules.orderList.detail.template-info-ios'),
					'delivery': HermesJS.getConfig('$options.modules.deliveryList.detail.template-info-ios'),
					'quotation' : HermesJS.getConfig('$options.modules.quoteList.detail.template-info-ios'),
				},
				htmlEntete = HermesJS.getConfig('$options.modules.invoiceList.detail.template-entete-ios'),
				htmlInfo = templatesBrico[salesDocument.get('type').$key],
				htmlTable = HermesJS.getConfig('$options.modules.invoiceList.detail.documentLineTemplate-ios'),
				salesDocumentType = salesDocument.get('type').$key;
				
				switch(salesDocumentType){
					case 'invoice': 
						title = I18n.translate('module.invoice.title');
						break;
					case 'order':
						title = I18n.translate('module.order.title');
						break;
					case 'delivery':
						title = I18n.translate('module.delivery.title');
						break;
					case 'quotation':
						title = I18n.translate('module.quote.title');
						break;
					default: 
						title = salesDocumentType;
						break;
				}
				
				titlebar.setTitle(title);

				// container Info
				
				htmlInfoCompiled = HermesJS.templateAsString(htmlInfo,salesDocument.data);
				me.getPage().down('#containerInfo').setHtml(htmlInfoCompiled);
				
				// container Entete
				
				htmlEnteteCompiled = HermesJS.templateAsString(htmlEntete,salesDocument.data);
				me.getPage().down('#containerEntete').setHtml(htmlEnteteCompiled);


				SaleDocumentLineModel.findRecords(salesDocument.get('$key'),salesDocument.get('type').$key)
					.done(function(records){
						records=records.$resources;
						//container Table
						var context = {records:records};
						htmlTableCompiled = HermesJS.templateAsString(htmlTable,context);
						me.getPage().down('#containerTable').setHtml(htmlTableCompiled);

					});

				me.getPage().setMasked(false);
			}, function () {
				me.checkConnexion();
			});
	},

	onShow: function (page) {
		page.setMasked({
			xtype   : 'loadmask',
			message : I18n.translate('semanticZoom.processing')
		});
	},

	checkConnexion : function () {
		var me = this;
		
		me.getPage().setMasked(false);
		/* jshint -W101 */
		Ext.Msg.alert( I18n.translate('message.alert') , I18n.translate('resourceUnavailable') , function () {
		/* jshint -W101 */
			me.backToPreviousView();
		});
	},

	backToPreviousView : function () {
		var mainView = this.getNijiRoutingControllerNavigationViewReference();
		if (mainView.getItems().length > 1) {
			mainView.pop();
		}
	},
});
