/* global HermesJSManager, I18n, SageCME */
/**
 * Created by Niji
 * User: Mickael GUESDON
 * Date: 30/09/13
 *
 * @author Mickael GUESDON <mickael.guesdon@niji.fr>
 * @author layla ait laaraj <layla.aitlaaraj@sage.com>
 *
 * @docauthor Mickael GUESDON <mickael.guesdon@niji.fr>
 *
 * @class SageCME.controller.menu.MenuHomeController"
 * 
 */


Ext.define('SageCME.controller.menu.MenuHomeController', {
    extend : 'Ext.app.Controller',

    requires : [
        'SageCME.view.menu.MenuHome',
        'SageCME.view.menu.CustomersList',
        'SageCME.view.main.Guide',
        'Ext.device.Connection'
    ],

    config : {
        refs    : {
            menuDisconnectButton : 'button[name=disconnect]',
            menuGuideButton      : 'menu-home button[name=guide]',
            settingsButton       : '#settings-button',
            menuDashboardButton  : 'menu-home button[name=dashboard]',
            menuConsumersButton  : 'menu-home button[name=clients]',
            menuDocumentsButton  : 'menu-home button[name=documents]',
            
            menuHomeButton  : 'menu-home button[name=accueil]',
            menuSyncButton  : 'menu-home button[name=sync]',
            menuInfoButton  : 'menu-home button[name=info]',

            menuInvoicesButton      : 'menu-home button[name=invoices]',
            menuOrdersButton        : 'menu-home button[name=orders]',
            menuDeliveriesButton    : 'menu-home button[name=deliveries]',
            menuDevisButton         : 'menu-home button[name=devis]',

            mainNavigationView   : 'main',
            kpiDetail:'kpi-detail',
            menu:'menu',
            menuHome:'menu-home',
            userInfo:'userInfo',
        },
        control : {
            menuSyncButton: {
                tap : 'onSyncTap'
            },
            menuInfoButton: {
                tap : 'onInfoTap'
            },
            menuHomeButton: {
                tap : 'onAccueilButtonTap'
            },
            menuDashboardButton  : {
                tap : 'onDashboardButtonTap'
            },
            menuConsumersButton  : {
                tap : 'onClientsButtonTap'
            },
            menuDisconnectButton : {
                tap : 'onDisconnectButtonTap'
            },
            menuGuideButton      : {
                tap : 'onGuideButtonTap'
            },
            menuInvoicesButton   : {
                tap: 'onInvoicesButtonTap'
            },
            menuOrdersButton     : {
                tap: 'onOrdersButtonTap'
            },
            menuDeliveriesButton : {
                tap: 'onDeliveriesButtonTap'
            },
            menuDevisButton      : {
                tap: 'onDevisButtonTap'
            },
            main                 : {
                activeitemchange : 'updateButtonActiveClass'
            }
        }
    },

    launch : function () {

    },

    onSyncTap : function () {
        
        if(Ext.device.Connection.isOnline()){
            HermesJSManager.sync(true);
        }else{
            /*jshint -W101*/
            Ext.Msg.alert( I18n.translate('message.alert') ,
                I18n.translate('errorMessage.noConnectionAvailable') );
            /*jshint +W101*/
        }
    },
    
    onInfoTap : function (){
        this.getApplication().redirectTo('info');
    },

    /**
     * Call when user click on dashboard
     */
    onAccueilButtonTap: function (){
        this.getApplication().redirectTo('accueil');
     
    },

    /**
     * Call when user click on dashboard
     */
    onDashboardButtonTap : function () {
        this.getApplication().redirectTo('home');
     
    },

    /**
     * Call when user click on Clients
     */
    onClientsButtonTap    : function () {
        this.redirectTo('customers');
     
    },
    /**
     * Call when user click on Documents
     */
    onDocumentsButtonTap  : function () {
        this.getApplication().redirectTo('menu-home-documents');
     
    },
    /**
     * Call when user click on disconnect
     */
    onDisconnectButtonTap : function () {
        Ext.Msg.confirm(
            I18n.translate('settings.deconnection.title'),
            I18n.translate('settings.deconnection.msg'),

            function (buttonId) {
                if (buttonId === 'yes') {
                    HermesJSManager.disconnect();
                    Ext.Viewport.add({
                        xtype      : 'login',
                        fullscreen : true
                    });
                 
                    Ext.Viewport.setActiveItem(1);
                }
            }
        );



    },
    /**
     * Call when user click on guide
     */
    onGuideButtonTap      : function () {
        Ext.Viewport.add({
            xtype      : 'guide',
            fullscreen : true
        });
        Ext.Viewport.setActiveItem(1);
    },

    updateButtonActiveClass : function (mainNavigationView, newActiveView) {
        // debugger;
        var xtype = newActiveView.xtype,
        // get references
            documentsButton = this.getMenuDocumentsButton(),
            consumersButton = this.getMenuConsumersButton(),
            guideButton = this.getMenuGuideButton(),
            dashboardButton = this.getMenuDashboardButton(),
            invoicesButton = this.getMenuInvoicesButton(),
            ordersButton = this.getMenuOrdersButton(),
            deliveriesButton = this.getMenuDeliveriesButton(),
            devisButton = this.getMenuDevisButton(),
            homeButton = this.getMenuHomeButton(),
            syncButton = this.getMenuSyncButton(),
            infoButton = this.getMenuInfoButton();

        // only do something if the view is linked to a main menu button
        if (
            xtype !== 'document' &&
            xtype !== 'guide' &&
            xtype !== 'dashboard' &&
            xtype !== 'home' &&
            xtype !== 'invoices' &&
            xtype !== 'orders' &&
            xtype !== 'deliveries'  &&
            xtype !== 'quotations' &&
            xtype !== 'accueil' &&
            xtype !== 'customersEvolution' &&
            xtype !== 'info'
            ) {
            return;
        }

        // remove all x-button-active class
        if (homeButton) {
            homeButton.removeCls('x-button-active');
        }
        if (documentsButton) {
            documentsButton.removeCls('x-button-active');
        }
        if (guideButton) {
            guideButton.removeCls('x-button-active');
        }
        if (consumersButton) {
            consumersButton.removeCls('x-button-active');
        }
        if (dashboardButton) {
            dashboardButton.removeCls('x-button-active');
        }
        if (invoicesButton) {
            invoicesButton.removeCls('x-button-active');
        }
        if (ordersButton) {
            ordersButton.removeCls('x-button-active');
        }
        if (deliveriesButton) {
            deliveriesButton.removeCls('x-button-active');
        }
        if (devisButton) {
            devisButton.removeCls('x-button-active');
        }
        if (syncButton) {
            syncButton.removeCls('x-button-active');
        }
        if (infoButton) {
            infoButton.removeCls('x-button-active');
        }

        // add x-button-active class on needed button only
        if (xtype) {
            switch (xtype) {
            case 'document':
                if (documentsButton) {
                    documentsButton.addCls('x-button-active');
                }
                break;
            case 'guide':
                if (guideButton) {
                    guideButton.addCls('x-button-active');
                }
                break;
            case 'customersEvolution':
                if (consumersButton) {
                    consumersButton.addCls('x-button-active');
                }
                break;
            case 'dashboard':
            case 'home':
                if (dashboardButton) {
                    dashboardButton.addCls('x-button-active');
                }
                break;
            case 'accueil':
                if (homeButton) {
                    homeButton.addCls('x-button-active');
                }
                break;
            case 'invoices':
                if (invoicesButton) {
                    invoicesButton.addCls('x-button-active');
                }
                break;
            case 'orders':
                if (ordersButton) {
                    ordersButton.addCls('x-button-active');
                }
                break;
            case 'deliveries':
                if (deliveriesButton) {
                    deliveriesButton.addCls('x-button-active');
                }
                break;
            case 'quotations':
                if (devisButton) {
                    devisButton.addCls('x-button-active');
                }
                break;
            case 'info':
                if (infoButton) {
                    infoButton.addCls('x-button-active');
                }
                break;
            }
        }
    },

    onInvoicesButtonTap: function () {
        this.redirectTo('saleDocument/invoices');
        
    },

    onOrdersButtonTap: function () {
        this.redirectTo('saleDocument/orders');
     
    },

    onDeliveriesButtonTap: function () {
        this.redirectTo('saleDocument/deliveries');
     
    },

    onDevisButtonTap: function () {
        this.redirectTo('saleDocument/quotations');
     
    },

});