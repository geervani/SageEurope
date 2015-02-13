/* global HermesJS,SageCME, I18n */
/**
 * @author Said Ouarrich <said.ouarrich@sage.com>
 * @class SageCME.controller.main.Customer
 * 
 * This controller is the Customer detail controller
 */

Ext.define('SageCME.controller.main.Customer', {
	extend : 'Ext.app.Controller',
	requires : [
		'SageCME.view.main.Main',
		'Ext.device.Connection',
		'Ext.LoadMask'
	],
	config : {
		refs    : {
			favoriteCustomerButton:'main #favorite-customer',
			customerDetail:'customer',
			main:'main'
		},
		control : {
			favoriteCustomerButton:{
				tap : 'onFavoriteCustomerButtonTap'
			},
			customerDetail:{
				favorite : 'initCustomerFavoriteButtton',
				show:'showDetail'
			}
		}
	},
	showDetail  :  function() {
		var customer = SageCME.currentCustomer;
		this.getFavoriteCustomerButton().show();
		this.getCustomerDetail().loadData(customer.get('$key'));
	},

	initCustomerFavoriteButtton : function(customer){
		var customerKey = customer.get('$key');

		if(HermesJS.isResourceFavorite('customer',customerKey)){
			this
			.getFavoriteCustomerButton()
			.setIconCls('customer-favori-button');
		}else{
			this
			.getFavoriteCustomerButton()
			.setIconCls('customer-non-favori-button');
		}
	},

	onFavoriteCustomerButtonTap : function(){
		var customerDetailView = this.getCustomerDetail(),
		self = this,
		customer = customerDetailView.getCustomer(),
		customerKey = customer.get('$key');

		if(Ext.device.Connection.isOnline()){

			customerDetailView.setMasked({
					xtype   : 'loadmask',
					message : I18n.translate('semanticZoom.processing')
				});

			HermesJS.updateResourceAsFavorite('customer', customerKey)
					.then(function(){
						self.initCustomerFavoriteButtton(customer);
						customerDetailView.setMasked(false);
					},
					function(){
						Ext.Msg.alert(I18n.translate('expenses.errmess.loadError'));
						customerDetailView.setMasked(false);
					});
		}else{
			/*jshint -W101*/
			Ext.Msg.alert(HermesJS.i18nGet('favorite_add_offline_title'),HermesJS.i18nGet('favorite_add_offline_message'));
			/*jshint +W101*/
		}

	},
});