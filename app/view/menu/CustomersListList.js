/* global I18n */
/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 02/10/13
 *
 * @class MyClass
 *
 * ageCME.view.menu.CustomersListList
 */

Ext.define('SageCME.view.menu.CustomersListList', {
    extend : 'Ext.dataview.List',
    xtype      : 'customer-list-list',

    requires : [
        'SageCME.model.List',
        'SageCME.prox.HermesJSProxy'
    ],

    config      : {
        cls      : 'customer-list-list',
        itemTpl   : '{title} <span style="float:right;"><img src="resources/img/ico-arrow-list.png" alt="arrow" width="20"/></span>',
        infinite  : true,
        indexBar  : false,
        emptyText : '<div style="margin-top: 20px; text-align: center">Aucun résultat</div>',
        store     : {
            model : 'SageCME.model.List',

            proxy   : {
                type  : 'hermesjs',
                resourceKind   : 'customer',
                fetchList: true,

                reader : {
                    type : 'json'
                }
            }
        },
        items     : [
        ],
        listeners : {
            initialize : 'onInitialize'
        }
    },
    updateStore : function (store) {
        if (store) {
            store.on('beforeload', this.showLoader, this);
            store.on('addrecords', this.hideLoader, this);
            store.load();
        }
    },
    showLoader  : function () {
        this.setMasked({
                xtype   : 'loadmask',
                message : I18n.translate('semanticZoom.processing')
            });
    },
    hideLoader  : function () {
        this.setMasked(false);
    }
})
;