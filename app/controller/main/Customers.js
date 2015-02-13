/* global HermesJSManager */
/* global HermesJS, SageCME, I18n */

/**
 * Customers Controller
 *
 * @class SageCME.controller.main.Customers
 * @extends Ext.app.Controller
 * @author Said Ouarrich <said.ouarrich@sage.com>
*/
Ext.define('SageCME.controller.main.Customers', {
	extend: 'Ext.app.Controller',
	requires: [
		'SageCME.view.main.Customers',
		'SageCME.singleton.HermesJSManager'
	],

	config: {
		groupField : 'name',
		refs: {
			customers:          'customersEvolution',
			customerslist:      'customersEvolution list',
			selectFieldGroup:   'customersEvolution selectfield',
			search:             'customersEvolution searchfield'
		},
		control: {
			customers :{
				show : 'onShow',
				destroy : 'onDestroy'
			},
			customerslist:{
				itemtap:         'onItemTap'
			},
			selectFieldGroup : {
				change : 'onGroupSelectFieldChange'
			},
			search:{
				clearicontap:    'onSearchClearIconTap',
				keyup:           'onSearchKeyUp',
				focus:           'scrollToTop'
			}
		}
	},

	onShow: function () {
		var groupField = this.getGroupField();

		this.loadData();
		this.groupData(groupField);
	},

	loadData: function () {
		var self=this;
		this.showLoader();

		HermesJSManager.paginatedData(
			 'customer?').then(function(data){
				self.renderView(data);
				
			});
	},

	renderView: function (data) {
		var view             = this.getCustomers().down('#customerList'),
		store            = view.getStore(),
		cmp = Ext.getCmp('ext-title-1'),
		tempalteString = HermesJS.getConfig('$options.module.customerList.preview.template-ios');

		store.setSorters('name');
		store.setData(data.value.$resources);

		cmp.setTitle(I18n.translate('modules.semanticZoomCustomer.title'));

		view.setItemTpl(tempalteString);
		this.hideLoader();
	},

	onGroupSelectFieldChange: function (field, newValue) {
		this.groupData(newValue);
	},

	groupData: function (groupField) {
		var view = this.getCustomers().down('#customerList'),
		store = view.getStore();
		if(groupField){
			this.setGroupField(groupField);
		}
		store.setGrouper({
			groupFn : function(record){
				var name = record.get('name'),
					address = record.get('mainPostalAddress');

				if (
					groupField === 'name' &&
					name
				) {
					return name[0].toUpperCase();
				} else if (
					groupField === 'city' &&
					address &&
					address.zipCode
				) {
					return address.zipCode;
				} else {
					return '-';
				}
			}
		});
	},

	showLoader: function () {
		this
			.getCustomers()
			.setMasked({
				xtype   : 'loadmask',
				message : I18n.translate('semanticZoom.processing')
			});
	},

	hideLoader: function () {
		this
			.getCustomers()
			.setMasked(false);
	},

	onSearchKeyUp: function(field){
		var value = field.getValue(),
			store = this.getCustomers().down('#customerList').getStore(),
			i,
			regexps = [],
			searches,
			regex;


		store.clearFilter(!!value);


		if (value) {
			searches = value.split(',');


			for (i = 0; i < searches.length; i++) {
				if (!searches[i]) {
					continue;
				}

				regex = searches[i].trim();
				regex = regex.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');

				regexps.push(new RegExp(regex.trim(), 'i'));
			}

			store.filter(function (record) {
				var matched = [],
					search,
					didMatch;

				for (i = 0; i < regexps.length; i++) {
					search = regexps[i];
					didMatch = search.test(record.get('name'));

					matched.push(didMatch);
				}

				return (regexps.length && matched.indexOf(true) !== -1);
			});
		}
		this.scrollToTop();
	},

	scrollToTop: function(){
		this.
			getCustomers().
			down('#customerList').
			getScrollable().
			getScroller().scrollTo(0, 1, true);
	},

	onSearchClearIconTap : function () {
		//call the clearFilter method on the store instance
		this.getCustomers().down('#customerList').getStore().clearFilter();
	},


	onItemTap :function(context, index, target, record) {
		var url = 'customer-detail/' + record.get('$key');
		// trick to keep customer informations when offline
		SageCME.currentCustomer = record;

		this.getApplication().redirectTo(url);
	},

	onDestroy: function () {
		// A workarround to solve performance issue relative to store destruction

		Ext.Array.each(Ext.StoreManager.all, function (store) {
			if (store.getId() === 'customers-list-store') {
				store.destroy();
			}
		});
	}
});