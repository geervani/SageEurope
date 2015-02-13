/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 23/09/13
 *
 * @class SageCME.controller.MainNavigationController
 *
 * This controller handle the main view navigation
 */

Ext.define('SageCME.controller.menu.MenuNavigationController', {
    extend : 'NijiLibrary.controller.NijiRoutingController',

    requires : [
        'SageCME.view.menu.MenuHome',
        'SageCME.view.menu.MenuHomeDocuments',
        'SageCME.view.menu.CustomersListList'
    ],

    config : {
        navigationViewRef : 'menu',
        initialRoute      : 'menu-home',
        forceInitialRoute : true,
        refs              : {
            customerListList : 'customer-list-list',
            customerList     : 'customer-list',
            menu             : 'menu'
        },
        control           : {
            customerListList : {
                itemtap : 'onCustomerListTap'
            }
        },
        pages             : [
//            Page example
//            {
//                route   : 'your/routeurl/with/optional/:params/in/it',
//                view    : 'YourAppName.view.YourPageName',
//                title   : 'This is your page title',
//                buttons : ['buttons-id', 'that-you-want', 'to-have'],
//                before  : ['functionsThatYou', 'wantToExecuteBefore', 'showingThePage'],
//                after   : ['oherFunctionsThatYou', 'wantToExecuteAFTER', 'showingThePage'],
//                isRoot  : false
//            },
            {
                route   : 'menu-home',
                view    : 'SageCME.view.menu.MenuHome',
                isRoot  : true,
                buttons : ['sync-button']
            },
            {
                route   : 'menu-home-documents',
                view    : 'SageCME.view.menu.MenuHomeDocuments',
                title   : 'Documents',
                buttons : ['sync-button']
            },
            {
                route   : 'menu-documents',
                view    : 'SageCME.view.menu.MenuDocumentsList',
                title   : 'Documents',
                buttons : ['sync-button']
            },
            {
                route   : 'menu-customers',
                view    : 'SageCME.view.menu.CustomersList',
                title   : 'Clients',
                after   : ['afterGoingToMenuCustomers'],
                buttons : ['sync-button']
            },
            {
                route   : 'menu-customers/:key',
                view    : 'SageCME.view.menu.CustomersList',
                title   : 'Clients',
                after   : ['afterGoingToMenuCustomers', 'updateTitleMenu'],
                buttons : ['sync-button']
            },
            {
                route   : 'menu-customers-list',
                view    : 'SageCME.view.menu.CustomersListList',
                title   : 'Clients',
                buttons : ['sync-button']
            }

        ]
    },

    onCustomerListTap : function (list, index, target, record) {
        this.getApplication().redirectTo('menu-customers/' + record.get('$key'));
    },

    afterGoingToMenuCustomers : function ($key) {
        var store = this.getCustomerList().getStore();
        if ($key) {
            store.getProxy().setListId($key);
        }
        store.load();
    },

    updateTitleMenu : function ($key) {
        var title = this.getCustomerListList().getStore().getById($key).get('title');
        this.getMenu().getNavigationBar().setTitle(title);
    }
});