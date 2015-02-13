/* global HermesJS,SageCME, I18n */
/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 23/09/13
 *
 * @class SageCME.controller.MainNavigationController
 *
 * This controller handle the main view navigation
 */

Ext.define('SageCME.controller.main.MainNavigationController', {
    extend : 'NijiLibrary.controller.NijiRoutingController',

    requires : [
        'SageCME.view.main.Dashboard',
        'SageCME.view.main.Settings',
        'SageCME.view.main.Guide',
        'SageCME.view.main.Info',
        'SageCME.view.main.Customer',
        'SageCME.view.KPIDetail',
        'SageCME.view.main.Home',
        'SageCME.view.main.Customers',
        'SageCME.singleton.HermesJSManager',
        'SageCME.view.components.KPI'
    ],

    config : {
        redirectToKpi: null,
        navigationViewRef : 'main',
        initialRoute      : 'home',
        forceInitialRoute : true,
        pages             : [

            {
                route   : 'accueil',
                view    : 'SageCME.view.main.Home',
                title   : 'Sage Customer View',
                after  : ['setOriginalMenuCls'],
                isRoot  : true
            },
            {
                route   : 'home',
                view    : 'SageCME.view.main.Dashboard',
                title   : '',
                after  : ['setOriginalMenuCls', 'setDashBoardViewTitle'],
                config  : {
                    dashboardName : 'dashboardhome'
                },
                buttons : [],
                isRoot  : true
            },
            {
                route : 'settings',
                view  : 'SageCME.view.main.Settings',
                after  : ['setOriginalMenuCls'],
                title : I18n.translate('appbar.cmdOpenCharms'),
            },
            {
                route          : 'customer-detail/:customerid',
                view           : 'SageCME.view.main.Customer',
                // title          : 'Informations',
                after          : ['afterGoingToCustomerDetail','setOriginalMenuCls'],
                buttons        : ['customers-comments','favorite-customer'],
            },
            {
                route   : 'kpi-detail/:shortcutkey',
                view    : 'SageCME.view.KPIDetail',
                after   : ['displayKpiDetail'],
                title   : I18n.translate('kpiDetail.secondSectionTitle'),
                buttons : ['favorite-kpi-button', 'shrink-button', 'fullscreen-button']
            },
            {
                route   : 'kpi-detail-customer/:shortcutkey/:customerKey',
                view    : 'SageCME.view.KPIDetail',
                after   : ['displayKpiDetailCustomer'],
                title   : '',
                buttons : ['shrink-button', 'fullscreen-button']
            },
            {
                route          : 'document-detail',
                view           : 'SageCME.view.main.Document',
                title          : 'Document',
                hideBackButton : true
            },
            {
                route  : 'guide',
                view   : 'SageCME.view.main.Guide',
                title  : 'Guide',
                isRoot : true,
            },
            {
                route  : 'info',
                view   : 'SageCME.view.main.Info',
                after  : ['setAboutViewTitle'],
                title  : '',
                isRoot : true
            },
            {
                route  : 'saleDocument/invoices',
                view   : 'SageCME.view.main.Invoices',
                title  : '',
                after  : ['setOriginalMenuCls'],
                isRoot : true
            },
            {
                route  : 'saleDocument/orders',
                view   : 'SageCME.view.main.Orders',
                title  : '',
                after  : ['setOriginalMenuCls'],
                isRoot : true
            },
            {
                route  : 'saleDocument/deliveries',
                view   : 'SageCME.view.main.Deliveries',
                title  : '',
                after  : ['setOriginalMenuCls'],
                isRoot : true
            },
            {
                route  : 'saleDocument/quotations',
                view   : 'SageCME.view.main.Quotations',
                title  : '',
                after  : ['setOriginalMenuCls'],
                isRoot : true
            },
            {
                route  : 'customers',
                view   : 'SageCME.view.main.Customers',
                title  : '',
                after  : ['setOriginalMenuCls'],
                isRoot : true
            }
        ],
        refs              : {
            settingsButton : '#settings-button',
            dataviz        : 'deffered-kpi',
            'kpi-preview-dataviz': 'kpi-preview dataviz',
            page: 'kpi-detail',
            dashboard : 'dashboard',
            groupingItem : '#selectfield-dashboard',
            main : 'main',
            customer : 'customer tabpanel',
            customerDetail : 'customer',
            menu :'menu',
            userInfo:'userInfo',
            menuHome : {
                selector : 'menu-home',
                xtype : 'menu-home',
                autoCreate : true
            },
            accueil:'accueil'
        },
        control           : {
            settingsButton : {
                tap : 'goToSettings'
            },
            dataviz        : {
                tap : 'onDatavizTap'
            },
            'kpi-preview-dataviz': {
                dataviztap : 'onDatavizTap'
            },
            dashboard    : {
                show:'show'
            },
            accueil :{
                show:'show'

            },
            page : {
                show:'showKpiDetail'
            },
            customerDetail: {
                show:'show'
            }
        }
    },

    setAboutViewTitle : function () {
        var cmp = Ext.getCmp('ext-title-1');

        cmp.setTitle(I18n.translate('titlebar.apropos'));
    },

    setDashBoardViewTitle : function () {
        var cmp = Ext.getCmp('ext-title-1');
        
        cmp.setTitle(I18n.translate('dashboardhome'));
    },

    /* jshint -W101 */
    /* jshint -W109 */
    show : function() {

        this.setRedirectToKpi(false);
        
        this.setOriginalMenuCls();
        if(this.getDashboard()) {
            this.getDashboard().doRefresh=null;
            this.getDashboard().scheduleRefresh();
        }

    },
    showKpiDetail:function() {
        this.setMinifiedMenu();
    },
    /**
     *  set Original Menu
     * @author youssef zine el abidine <youssef.zineelabidine@sage.com>
     * 
     */
    
    setOriginalMenuCls:function(){
        var   menu = this.getMenu(),
        userInfo = this.getUserInfo(),
        online = Ext.device.Connection.isOnline();


        if(menu._width!==240)
        {
            menu.setWidth(240);
            if(online)
            {
                userInfo.down('#connectionStatus').setCls('connection-status-online');
            }
            else {
                userInfo.down('#connectionStatus').setCls('connection-status-offline');

            }
        }

    },
 
    onDatavizTap : function (kpi) {
    /* jshint -W101 */
        var self = this;

        if (kpi.getCustomer !== undefined && kpi.getCustomer()) {
            this.getApplication().redirectTo('kpi-detail-customer/' + kpi.getShortcutKey() + '/' + kpi.getCustomer().get('$key'));
        } else {
            if (this.getRedirectToKpi() === false){
                self.goToKpidetail(kpi.getShortcutKey());
                this.setRedirectToKpi(true);
            }
        }
    },

    displayKpiDetail : function (shortcutKey) {
        var keys,
        nav,
        shorcut = HermesJS.getShortcut(shortcutKey);
        //<debug>
        if (shorcut.detail && shorcut.detail.prompts) {
            keys = Ext.Array.pluck(shorcut.detail.prompts, '$key');
            if (Ext.Array.unique(keys).length !== keys.length) {
                //<feature logger>
                Ext.Logger.error('Duplicate keys in shorcut prompts');
                //</feature>
            }
        }
        //</debug>
        nav = this.getNijiRoutingControllerNavigationViewReference();
        nav.getNavigationBar().setTitle(shorcut.title);
        this.setDefaultPeriodsPrompts(shorcut);
       

        nav.getActiveItem().setShortcut(shorcut);

        this.setMinifiedMenu();
    },

    /**
     * to set Saved & resored Periods and prompts
     * @author youssef zine el abidine <youssef.zineelabidine@sage.com>
     * 
     */

    setDefaultPeriodsPrompts: function(shorcut) {

        if(!shorcut.detail.periodSaved) {
            shorcut.detail.periodSaved = Ext.clone(shorcut.detail.def.periods);
        }
        if(!shorcut.detail.promptSaved) {
            shorcut.detail.promptSaved = Ext.clone(shorcut.detail.prompts);
        }

        if(shorcut.detail.periodSaved) {
            shorcut.detail.def.periods = Ext.clone(shorcut.detail.periodSaved);
        }
        if(shorcut.detail.promptSaved) {
            shorcut.detail.prompts = Ext.clone(shorcut.detail.promptSaved);
        }

    },
    /**
     *  set minified Menu
     * @author youssef zine el abidine <youssef.zineelabidine@sage.com>
     * 
     */

    setMinifiedMenu : function(){
        var menu = this.getMenu(),
        menuHome = this.getMenuHome(),
        online = Ext.device.Connection.isOnline(),
        userInfo = this.getUserInfo();

        menu.setWidth(64);
        menuHome.setCls('home-menu-minified');
        if(online)
        {
            userInfo.down('#connectionStatus').setCls('connection-status-online-minified');
        }
        else {
            userInfo.down('#connectionStatus').setCls('connection-status-offline-minified');

        }


    },

    displayKpiDetailCustomer   : function (shortcutKey, customerKey) {
        var shorcut = HermesJS.getShortcut(shortcutKey),keys,self,nav,
        customer = null;
        this.setMinifiedMenu();

        //<debug>
        if (shorcut.detail && shorcut.detail.prompts) {
            keys = Ext.Array.pluck(shorcut.detail.prompts, '$key');
            if (Ext.Array.unique(keys).length !== keys.length) {
                //<feature logger>
                Ext.Logger.error('Duplicate keys in shorcut prompts');
                //</feature>
            }
        }
        //</debug>
        /* jshint -W101 */
        nav = this.getNijiRoutingControllerNavigationViewReference();
        nav.getNavigationBar().setTitle(I18n.translate('kpiDetail.secondSectionTitle'));
        self = this;

        if (!customer && SageCME.currentCustomer && SageCME.currentCustomer.get && customerKey === SageCME.currentCustomer.get('$key')) {
            customer = SageCME.currentCustomer;
        }
        self.getNijiRoutingControllerNavigationViewReference().getActiveItem().setCustomer(customer);
        self.getNijiRoutingControllerNavigationViewReference().getActiveItem().setShortcut(shorcut);

        /* jshint -W109 */
        HermesJS.resource({
            'resourceKind' : 'customer',
            'where'        : "$key eq '" + customerKey + "'"
        }).done(function (matchedCustomers) {
            var newdata = matchedCustomers[0];
            if(customer && customer.isModel && customer.get('$key') === newdata.$key){
                customer.set(newdata);
                self.getNijiRoutingControllerNavigationViewReference().getActiveItem().updateCustomer(customer);
            }else{
                customer = Ext.create('SageCME.model.Customer', newdata);
                self.getNijiRoutingControllerNavigationViewReference().getActiveItem().setCustomer(customer);
                self.getNijiRoutingControllerNavigationViewReference().getActiveItem().setShortcut(shorcut);
            }
        });
        /* jshint +W109 */
        /* jshint +W101 */
    },
    /* jshint -W101 */
    afterGoingToCustomerDetail : function ($key) {
        var self = this,
        customer = null;
    
        if (!customer && SageCME.currentCustomer && SageCME.currentCustomer.get && $key === SageCME.currentCustomer.get('$key')) {
            customer = SageCME.currentCustomer;

            self.getNijiRoutingControllerNavigationViewReference().
            getNavigationBar().
            setTitle(customer.get('name'));
        }

        self.getNijiRoutingControllerNavigationViewReference().getActiveItem().setCustomer(customer);
        //ask for additionnal informations
        /* jshint -W109 */
        HermesJS.resource({
            'resourceKind' : 'customer',
            'where'        : "uuid eq '" + $key + "'"
        }).done(function (matchedCustomers) {
            if (matchedCustomers.length > 0) {
                // replace with
                var newdata = matchedCustomers[0];
                if(customer && customer.isModel && customer.get('$key') === newdata.$key){
                    customer.set(newdata);
                    self.getNijiRoutingControllerNavigationViewReference().getActiveItem().updateCustomer(customer);
                }else{
                    customer = Ext.create('SageCME.model.Customer', newdata);
                    self.getNijiRoutingControllerNavigationViewReference().getActiveItem().setCustomer(customer);

                    self.getNijiRoutingControllerNavigationViewReference().
                    getNavigationBar().
                    setTitle(customer.get('name'));
                }
            }
        });
        /* jshint +W109 */
        /* jshint +W101 */
    },
    
    showBackButton : function () {
        var button = this.getNijiRoutingControllerNavigationViewReference().down('button');
        if (button) {
            button.show();
        }
    },

    hideBackButton : function () {
        var button = this.getNijiRoutingControllerNavigationViewReference().down('button');
        if (button) {
            button.hide();
        }
    }
});