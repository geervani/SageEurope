/* global Q, HermesJS,Ext,SaleDocumentModel, HermesJSManager*/

/**
 * SaleDocument Model
 * @author Youssef Boubdir <youssef.boubdir@sage.com>
 * @class SageCME.model.SaleDocument
 * @extends Ext.data.Model
 */
Ext.define('SageCME.model.SaleDocument', {
	alternateClassName: 'SaleDocumentModel',
	extend: 'Ext.data.Model',
	requires: [
		'SageCME.singleton.HermesJSManager'
	],

	config: {
		/*
		_customer.shortName
		totalGrossAmountwithoutVAT
		totalAmountAfterDiscount
		totalTaxAmount
		totalGrossAmount
		settlementDiscountAmountDocument
		amountTermDocument
		expenseChargedAmount
		dueDateTermDocument
		customerGroupReference1
		payingAuthorityFinancialAccount
		originalDeliveryTypeTermDocument
		PaymentMethod
		*/
		fields: [
			{
				name: '$key',
				type: 'string'
			},
			{
				name: 'type',
				type: 'object'
			},
			{
				name: '_customer',
				type: 'object'
			},
			{
				name: 'number',
				type: 'string'
			},
			{
				name: 'date',
				type: 'date',
				dateFormat: 'Y-m-d'
			},
			{
				name: 'totalGrossAmountwithoutVAT',//
				type: 'float',
				convert: function(v){
					return SaleDocumentModel.formatNumber(v);

				}
			},
			{
				name: 'totalAmountAfterDiscount',
				type: 'float',
			
				convert: function(v) {
					return  SaleDocumentModel.formatNumber(v);
				}
			},
			{
				name: 'totalTaxAmount',
				type: 'float',
				convert: function(v) {
					return SaleDocumentModel.formatNumber(v);
				}
			},
			{
				name: 'totalGrossAmount',//
				type: 'float',
				convert: function(v) {
					return SaleDocumentModel.formatNumber(v);
				}

			},
			{
				name: 'settlementDiscountAmountDocument',
				type: 'float',
				convert: function(v) {
					return SaleDocumentModel.formatNumber(v);
				}
			},
			{
				name: 'amountTermDocument',//
				type: 'float',
				convert: function(v) {
					return SaleDocumentModel.formatNumber(v);
				}
			},
			{
				name: 'expenseChargedAmount',
				type: 'float',
				convert: function(v) {
					return SaleDocumentModel.formatNumber(v);
				}
			},
			{
				name: 'dueDateTermDocument',
				type: 'date',
				dateFormat: 'Y-m-d'
			},
			{
				name: 'payingAuthorityFinancialAccount',
				type: 'string'
			},
			{
				name: 'originalDeliveryTypeTermDocument',
				type: 'string'
			},
			{
				name: 'paymentMethod',
				type: 'string'
			},
			{
				name: 'originalType',
				type: 'string'
			},
			{
				name: 'currency',
				type: 'string'
			}
		]
	},

	statics: {
		/**
		 * Make a promise to deliver a sales document resource by number
		 * @param  {string} number A sales document number
		 * @return {makePromise}   A `makePromise` object
		 */
		findOneByNumber: function (key) {
			var defer = Q.defer(),
				record,queryString,query,customerKey;

			queryString='salesDocument/key';
			query = queryString.replace('key', key);

			HermesJSManager.data(query, this, function(saleDocument){
				

				customerKey = saleDocument.customerReference.$key;

				HermesJSManager.paginatedData('customer?').then(function(customers){
					
					customers=customers.value.$resources;
					customers = Ext.Array.filter(customers, function (customer) {
						return customer.$key === customerKey;
					});

					if (customers.length > 0) {
						saleDocument._customer = customers[0];
					}

					record = new Ext.create('SageCME.model.SaleDocument', saleDocument);

					defer.resolve(record);
				});

			}, defer.reject);

			return defer.promise;
		},

		formatNumber:function(v){
			var value = HermesJS.Utils.formatNumber(v, {
				formatType : 'float',
				decimalPlace : 0,
				decimalPoint : '.'
			});
			return value;

		}
	},

});
