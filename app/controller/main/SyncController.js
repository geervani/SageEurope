/* global HermesJSManager */
/* global HermesJS */
/**
 * @author Labzar Othman <othman.labzar@sage.com>
 *
 * @class SageCME.controller.main.SyncController
 *
 * This controller handle the Synchronisation
 */

Ext.define('SageCME.controller.main.SyncController', {
    extend   : 'Ext.app.Controller',
    requires : [
    ],

    config : {
        refs    : {
        },
        control : {
            HermesJSManager:{
                ready: 'onHermesJSReady'
            },
        }
    },

    onHermesJSReady: function(){
        //////////////to sync all data//////////////
        this.loadData();
    },

    /* jshint -W101 */
    /**
     * @author Labzar Othman <othman.labzar@sage.com>
     * @this function allow you to load saleDocument from hermes.
     */
    loadData: function () {

        // TODO: Remove the count limit
        var query = [
                'salesDocument?',
                'where=type eq \'{{documentType}}\'',
                '&orderBy=date desc',
                '&select=type, totalGrossAmountwithoutVAT, currency, originalType, number, date, customer.name,customer.shortName'
            ].join(''),
            queryStringInvoice = query.replace('{{documentType}}', 'invoice'),
            queryStringOrder = query.replace('{{documentType}}', 'order'),
            queryStringDelivery = query.replace('{{documentType}}', 'delivery'),
            queryStringQuote = query.replace('{{documentType}}', 'quotation');

        HermesJSManager.data(queryStringInvoice);
        HermesJSManager.data(queryStringOrder);
        HermesJSManager.data(queryStringDelivery);
        HermesJSManager.data(queryStringQuote);
    }
    /* jshint +W101 */
});
