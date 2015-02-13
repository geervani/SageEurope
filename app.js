/* global navigator, window, I18n,STRINGS_EN,STRINGS_FR,STRINGS_ES, STRINGS_DE */
/*
 This file is generated and updated by Sencha Cmd. You can edit this file as
 needed for your application, but these edits will have to be merged by
 Sencha Cmd when it performs code generation tasks such as generating new
 models, controllers or views and when running "sencha app upgrade".

 Ideally changes to this file would be limited and most work would be done
 in other places (such as Controllers). If Sencha Cmd cannot merge your
 changes and its generated code, it will produce a "merge conflict" that you
 will need to resolve manually.
 */


// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

//<debug>
Ext.Loader.setPath({
    'Ext'         : 'touch/src',
    'NijiLibrary' : 'nijilibrary'
});
//</debug>

Ext.application(
    {
        name : 'SageCME',

        requires : [
            'SageCME.singleton.I18n',
            'Ext.MessageBox',
            'SageCME.singleton.I18n',
            //<feature logger>
            'NijiLibrary.ux.RichFormatter',
            //</feature>
            'NijiLibrary.ux.TouchGestureLimitToOneFinger',
            'NijiLibrary.ux.ExtendedController',
            'SageCME.controller.main.MainNavigationController',
            'SageCME.singleton.HermesJSManager',
            'SageCME.view.KPI',
            'SageCME.utils.Utils'
        ],

        controllers : [
            'SageCME.controller.main.MainNavigationController',
            'SageCME.controller.main.SettingsController',
            'SageCME.controller.main.HomeController',
            'SageCME.controller.main.LoginController',
            'SageCME.controller.main.GuideController',
            'SageCME.controller.main.KpiDetailController',
            'SageCME.controller.menu.MenuHomeController',
            'SageCME.controller.menu.MenuNavigationController',
            'SageCME.controller.menu.MenuHomeDocumentsController',
            'SageCME.controller.menu.MenuDocumentsListController',
            'SageCME.controller.menu.MenuCustomersListController',
            'SageCME.controller.main.CustomersCommentsController',
            'SageCME.controller.main.StateController',
            'SageCME.controller.main.FullScreenController',
            'SageCME.controller.main.DashboardMasonry',
            'SageCME.controller.main.SaleDocument',
            'SageCME.controller.UserInfo',
            'SageCME.controller.main.SalesDocumentDetails',
            'SageCME.controller.main.SyncController',
            'SageCME.controller.main.Customers',
            'SageCME.controller.main.Customer',
            'SageCME.controller.main.AccueilController'

        ],

        views : [
            'RootView'
        ],

        icon : {
            '57'  : 'resources/icons/Icon.png',
            '72'  : 'resources/icons/Icon~ipad.png',
            '114' : 'resources/icons/Icon@2x.png',
            '144' : 'resources/icons/Icon~ipad@2x.png'
        },

        isIconPrecomposed : true,

        startupImage : {
            '320x460'   : 'resources/startup/320x460.jpg',
            '640x920'   : 'resources/startup/640x920.png',
            '768x1004'  : 'resources/startup/768x1004.png',
            '748x1024'  : 'resources/startup/748x1024.png',
            '1536x2008' : 'resources/startup/1536x2008.png',
            '1496x2048' : 'resources/startup/1496x2048.png'
        },

        initConfig : function (local) {
            var config = {
                    'resources': {
                        'en-US' : STRINGS_EN,
                        'fr-FR' : STRINGS_FR,
                        'es-ES' : STRINGS_ES,
                        'de-DE' : STRINGS_DE
                    },
                    defaultLanguage : 'fr-FR',
                    localLanguage : local
                };

            // case os language not supported by the app we use default language
            if(!config.resources.hasOwnProperty(local)) {
                config.localLanguage = config.defaultLanguage;
            }

            return config;
        },
        mapLanguage : function (local) {
            var localArray = {
                    'en' : 'en-US',
                    'EN' : 'en-US',
                    'fr' : 'fr-FR',
                    'FR' : 'fr-FR',
                    'es' : 'es-ES',
                    'ES' : 'es-ES',
                    'pt' : 'pt-PT',
                    'PT' : 'pt-PT',
                    'de' : 'de-DE',
                    'DE' : 'de-DE'
                };

            return localArray[local] ? localArray[local] : local;
        },
        
        translateMessageBoxButton : function () {
            if(Ext.MessageBox) {
                var MB = Ext.MessageBox;
                Ext.apply(MB, {
                    YES: { text: I18n.translate('confirm.yes'), itemId: 'yes', ui: 'action' }
                });

                Ext.apply(MB, {
                    NO: { text: I18n.translate('confirm.no'), itemId: 'no' }
                });
                
                Ext.apply(MB, {
                    YESNO: [Ext.MessageBox.NO, Ext.MessageBox.YES]
                });
            }
        },

        formatLocalLanguage : function (local) {
            var locArray = local.split('-');
            if(!locArray[1]) {
                local = this.mapLanguage(local);
                locArray = local.split('-');
            }

            return locArray[0] + '-' + locArray[1].toUpperCase();
        },

        getPictureLoginPage : function (language) {
        var mapPicture = {
                'fr-FR':'resources/img/login-video-poster-fr.png',
                'en-US':'resources/img/login-video-poster-en.png',
                'es-ES':'resources/img/login-video-poster-es.png',
                'de-DE':'resources/img/login-video-poster-de.png'
            };

        return mapPicture[language];
    },

        launch : function () {
            /* get localLanguage from local storage case it exists
             * otherwise get device OS language & set it as localLanguage to use in the app 
             * */
            var local = localStorage.localLanguage || navigator.language || '',
                config;

            local = this.formatLocalLanguage(local);
            config = this.initConfig(local);


            //initializing I18n class config
            I18n.init(config);

            //initializing MessageBox Button class config
            this.translateMessageBoxButton();

            // redefining the date format
            Ext.util.Format.defaultDateFormat = 'd/m/Y';

            //<feature logger>
            // Set Logger min level to info
            Ext.Logger.setMinPriority('info');
            //</feature>

            // Destroy the #appLoadingIndicator element
            Ext.fly('appLoadingIndicator').destroy();

            // Initialize the main view
            Ext.Viewport.add(Ext.create('SageCME.view.RootView'));
           
             
            // hide splashscreen after 500ms
            setTimeout(function(){
                if(navigator && navigator.splashscreen && navigator.splashscreen.hide){
                    navigator.splashscreen.hide();


                }else{
                    //<feature logger>
                    Ext.Logger.info('No navigator.splashscreen detected...');
                    //</feature>
                }
            },500);

        },

        onUpdated : function () {
            Ext.Msg.confirm(
                'Application Update',
                /* jshint -W101 */
                'This application has just successfully been updated to the latest version. Reload now?',
                /* jshint +W101 */
                function (buttonId) {
                    if (buttonId === 'yes') {
                        window.location.reload();
                    }
                }
            );
        }
    }
);
