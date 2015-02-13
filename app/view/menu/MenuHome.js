/* global I18n */
/**
 * Created by Niji.
 * User: Mickael GUESDON
 * Date: 30/09/13
 *
 * @author Mickael GUESDON <mickael.guesdon@niji.fr>
 *
 * @docauthor Mickael GUESDON <mickael.guesdon@niji.fr>
 *
 * @class MyClass
 *
 * Description
 */

Ext.define('SageCME.view.menu.MenuHome', {
    extend   : 'Ext.Container',
    xtype    : 'menu-home',
    requires : [
        'Ext.tab.Panel',
        'Ext.Video',
        'Ext.field.Search',
        'SageCME.view.UserInfo'
    ],
    config   : {

        height : '100%',
        width  : '100%',
        cls    : 'home-menu',
        layout : {
            type  : 'vbox',
            align : 'stretch'
        },

        items : [
            {
                xtype   : 'button',
                itemId  : 'accueil',
                name    : 'accueil',
                cls     : ['home-login-button', 'x-button-active'],
                ui      : 'plain',
                iconCls : 'ico-small-home'
            },
            {
                xtype   : 'button',
                name    : 'dashboard',
                itemId  :  'dashboard',
                cls     : ['home-login-button'],
                ui      : 'plain',
                iconCls : 'ico-small-dashboard'
            },
            {
                xtype   : 'button',
                name    : 'clients',
                itemId  : 'clients',
                cls     : 'home-login-button',
                ui      : 'plain',
                iconCls : 'ico-small-customers'
            },
            {
                xtype : 'button',
                name  : 'invoices',
                itemId: 'invoices',
                cls   : 'home-login-button',
                ui    : 'plain',
                iconCls: 'ico-small-documents'
            },
            {
                xtype : 'button',
                name  : 'orders',
                itemId: 'orders',
                cls   : 'home-login-button',
                ui    : 'plain',
                iconCls: 'ico-small-order'
            },
            {
                xtype : 'button',
                name  : 'deliveries',
                itemId: 'deliveries',
                cls   : 'home-login-button',
                ui    : 'plain',
                iconCls: 'ico-small-delivery'
            },
            {
                xtype : 'button',
                name  : 'devis',
                itemId: 'devis',
                cls   : 'home-login-button',
                ui    : 'plain',
                iconCls: 'ico-small-devis'

            },
            {
                xtype  : 'container',
                itemId : 'menuContainer',
                docked : 'bottom',
                cls    : 'menu-container',
                items  : [
                    {
                        xtype   : 'button',
                        name    : 'sync',
                        cls     : 'home-login-button-bottom',
                        ui      : 'plain',
                        id      : 'sync-button',
                        iconCls : 'sync'
                    },
                    {
                        xtype   : 'button',
                        name    : 'disconnect',
                        cls     : 'home-login-button-bottom',
                        ui      : 'plain',
                        iconCls : 'ico-small-logout'
                    },
                    {
                        xtype   : 'button',
                        name    : 'info',
                        cls     : 'home-login-button-bottom',
                        ui      : 'plain',
                        iconCls : 'ico-small-info'
                    },
                    {
                        xtype   : 'button',
                        name    : 'guide',
                        hidden  : 'true',
                        cls     : 'home-login-button-bottom',
                        ui      : 'plain',
                        iconCls : 'ico-small-guide'
                    }
                ]
            }

        ]
    },

    initialize: function () {
        this.down('#accueil').setText(I18n.translate('navbar.cmdGlobalMyDashboardButton'));
        this.down('#dashboard').setText(I18n.translate('modules.semanticZoomDashboardhome.title'));
        this.down('#clients').setText(I18n.translate('module.customer.title'));
        this.down('#invoices').setText(I18n.translate('modules.invoiceList.title'));
        this.down('#deliveries').setText(I18n.translate('modules.deliveryList.title'));
        this.down('#orders').setText(I18n.translate('modules.orderList.title'));
        this.down('#devis').setText(I18n.translate('modules.quoteList.title'));

    }


});