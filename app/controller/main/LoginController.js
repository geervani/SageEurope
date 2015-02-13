/* global HermesJSManager, SageCME, I18n*/
/**
 * Created by Niji
 * User: Mickael GUESDON
 * Date: 30/09/13
 *
 * @author Mickael GUESDON <mickael.guesdon@niji.fr>
 *
 * @docauthor Mickael GUESDON <mickael.guesdon@niji.fr>
 *
 * @class SageCME.controller.LoginController"
 *
 * Description
 */

Ext.define('SageCME.controller.main.LoginController', {
    extend : 'Ext.app.Controller',

    requires : [
        'SageCME.view.main.Login',
        'SageCME.view.menu.MenuHome',
        'Ext.MessageBox'
    ],

    config : {
        testAppUrl: 'https://hermes.sage.fr/webresources/services/public/forms/scv/demo/index.html',
        /*jshint -W101*/
        contactUrl: 'https://hermes.sage.fr/webresources/services/public/forms/scv/contact/index.html',
        refs    : {
            accueilView         : 'accueil',
            menuHome            : 'menu-home',
            mainView            : 'main',
            loginView           : 'login',
            hasAccountButton    : 'button[name=has-account]',
            testAppButton       : 'button[name=test-app]',
            contactUsButton     : 'button[name=contact-us]'
        },
        control : {
            HermesJSManager  : {
                ready : 'hideLoginScreen',
                quit  : 'loginHasFailed',
                networkunavailable : 'onTokenUnauthorized'
            },
            hasAccountButton : {
                tap : 'onHasAccountButtonTap'
            },
            testAppButton : {
                tap : 'onTestAppButtonTap'
            },
            contactUsButton : {
                tap : 'onContactUsButtonTap'
            }
        }
    },

    launch : function () {

        Ext.Viewport.add({
                xtype      : 'login',
                fullscreen : true
            });
        Ext.Viewport.setActiveItem(1);
    },

    /**
     * Call when user click on Has account
     */
    tryConnect            : false,
    onHasAccountButtonTap : function () {
        this.tryConnect = true;
        HermesJSManager.doConnect();
    },

    hideLoginScreen : function (rootLinks, userDetails) {
        // {userLanguage} get user language and set it as locallanguage to use in app pages
        var userLanguage = userDetails.locale || '',
            local = SageCME.app.mapLanguage(userLanguage),
            config = SageCME.app.initConfig(local);

        //calling init method in order to apply the new localLanguage
        I18n.init(config);

        this.getMenuHome().initialize();
        this.getAccueilView().initialize();
        this.getMainView().down('#fullscreen-button').setText(I18n.translate('titlebar.agrandir'));
        this.getMainView().down('#shrink-button').setText(I18n.translate('titlebar.reduire'));

        this.tryConnect = false;

        Ext.Viewport.remove(this.getLoginView(), true);
    },

    /**
     * map BO language symbol to the universal one we use throughout the app 
     * @param  {String} local the language geted from the Backoffice
     * @return {String}       mapped language Exple: fr => fr-FR
     */
    

    loginHasFailed : function (){
        if (this.getLoginView() &&
            this.tryConnect) {
            Ext.Viewport.setMasked(false);
            if (!HermesJSManager.isOnline()) {
                Ext.Msg.alert( I18n.translate('message.alert') , I18n.translate('errorMessage.serverNotReachable'));
            } else {
            }
            this.tryConnect = false;
        }
    },

    onTestAppButtonTap : function(){
        var url = this.getTestAppUrl();
        
        window.open(url,'_system');
    },

    onContactUsButtonTap : function(){
        var url =this.getContactUrl();
        
        window.open(url,'_system');
    },

    onTokenUnauthorized : function (status) {
        if (
            (localStorage.getItem('authToken')) &&
            (localStorage.getItem('authToken') !== '') &&
            (status === 5)
        ) {
            HermesJSManager
                .disconnect()
                .then(function () {
                    /*jshint -W101*/
                    Ext.Msg.alert(I18n.translate('message.alert') , I18n.translate('message.expiredSession') ,function () {
                    /*jshint +W101*/
                        Ext.Viewport.add({
                            xtype      : 'login',
                            fullscreen : true
                        });
                        Ext.Viewport.setActiveItem(1);
                    });
                });
        }
    }


});