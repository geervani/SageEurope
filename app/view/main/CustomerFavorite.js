/* global Ext */
/**
 * Invoices Page
 * @author Othman LABZAR <othman.labzar@sage.com>
 * @class SageCME.view.main.CustomerFavorite
 * @extends Ext.dataview.List
 */
Ext.define('SageCME.view.main.CustomerFavorite', {
    extend: 'Ext.Container',
    xtype: 'customerFavorislist',
    requires: [
        'SageCME.model.Customer',
    ],

    config: {
        cls    : 'sales-document-list',
        items: [
            {
                xtype: 'dataview',
                scrollable:null,
                itemId:'list-customer',
                inline :true,
                // emptyText: '<div class="empty-text">Aucun client n\'existe dans la liste</div>',
                deferEmptyText : false,
                flex:1,
                store: {
                    storeId: 'sales-document-list-customer',
                    model: 'SageCME.model.Customer',
                },

                itemTpl:
                        '<div class="customer-favorite">'+
                            '<div class="name">{name}</div>'+
                            '<div class="shortName">{shortName}</div>'+
                        '</div>'
            }
        ],
    }
});
