/* global Ext:true */
/* global Q,HermesJS,HermesJSManager */
/**
 * SaleDocumentLine Model
 * @author Youssef Zine el abidine <youssef.zineelabidine@sage.com>
 * @class SageCME.model.SaleDocumentLine
 * @extends Ext.data.Model
 */

Ext.define('SageCME.model.SaleDocumentLine', {
	alternateClassName: 'SaleDocumentLineModel',
	extend: 'Ext.data.Model',

	config:{

		fields:[
			{
				name: '$key',
				type: 'string'
			},
			{
				name: '_commodity',
				type: 'object'
			},
			{
				name: 'amount',
				type: 'object'
			},
			{
				name: 'operatingCompanyReference',
				type: 'object'

			},
			{
				name: 'commodityReference',
				type: 'object'
			},
			{
				name: 'delivery',
				type: 'Array'
			},
			{
				name: 'employeeReference',
				type: 'object'
			},
			{
				name: 'extras',
				type : 'object'
			},
			{
				name: 'originalStatus',
				type: 'string'
			},
			{
				name: 'salesDocumentLineLinkDocument',
				type: 'object'
			},
			{
				name: 'salesDocumentReference',
				type: 'object'
			},
			{
				name: 'status',
				type: 'object'
			},
			{
				name: 'taxCode',
				type: 'Array'
			}

		],
	},
			/* jshint -W101 */
			/* jshint -W102 */

	statics: {
		/**
		 * Make a promise to deliver a sales document resource by number
		 * @param  {string} number A sales document number
		 * @return {makePromise}   A `makePromise` object
		 */
		findRecords: function (key,type) {
			var defer = Q.defer(),query,queryString,
			Queries = {
				'invoice':'$options.modules.quoteList.detail.documentLineQuery',
				'delivery':'$options.modules.deliveryList.detail.documentLineQuery',
				'order':'$options.modules.orderList.detail.documentLineQuery',
				'quotation':'$options.modules.quoteList.detail.documentLineQuery'
			};
	
			queryString = HermesJS.getConfig(Queries[type]);
			query = queryString.replace('{{$key}}', key);

			HermesJSManager.data(query, this, function(data){
				defer.resolve(data);
			});

			return defer.promise;
		}
	}


});