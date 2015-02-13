/* global I18n */
/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 02/10/13
 *
 * @class MyClass
 *
 * ageCME.view.menu.CustomersList
 */

Ext.define('SageCME.view.menu.CustomersList', {
    extend : 'Ext.dataview.List',
    xtype  : 'customer-list',

    requires : [
        'SageCME.model.Customer',
        'SageCME.prox.HermesJSProxy'
    ],

    config      : {
        cls        : 'customer-list',
        itemTpl    : '<div class="name">{name}</div><div class="shortname">{shortName}</div><div class="city">{mainPostalAddress.town}</div>',
        infinite   : true,
        indexBar   : true,
        grouped    : true,
        emptyText  : '<div style="margin-top: 20px; text-align: center">Aucun résultat</div>',
        itemHeight : 75,
        store      : {
            model : 'SageCME.model.Customer',

            grouper : {
                groupFn : function (record) {
                    return record.get('name')[0].toUpperCase();
                }
            },
            sorters : [
                {
                    property  : 'name',
                    direction : 'ASC'
                }
            ],
            proxy   : {
                type         : 'hermesjs',
                resourceKind : 'customer',
                fetchList    : false,

                order : {
                    name : 'asc'
                },

                reader : {
                    type : 'json'
                }
            }
        },
        items      : [
            {
                xtype       : 'searchfield',
                placeHolder : 'Recherche',
                itemId      : 'search-field',
                docked      : 'top'
            }
        ],
        listeners  : {
            initialize : 'onInitialize'
        }
    },

    initialize : function () {
        this.down('#search-field').setPlaceHolder(I18n.translate('search'));
    },

    updateStore : function (store) {
        if (store) {
            store.on('beforeload', this.showLoader, this);
            store.on('addrecords', this.hideLoader, this);
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