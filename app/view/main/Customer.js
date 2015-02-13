/* global HermesJSManager: true */
/* global HermesJS: true */
/* global SageCME,I18n */

/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 23/09/13
 *
 * @class SageCME.view.Home
 *
 * This view is the home page
 */
Ext.define('SageCME.view.main.Customer', {
    extend         : 'Ext.Container',
    xtype          : 'customer',
    requires       : [
        'Ext.tab.Panel',
        'SageCME.view.main.Dashboard',
        'SageCME.form.TemplateSaleDocument',
    ],
    statics : {
        currentCustomer:null

    },
    config         : {
        /**
         * @config {Object} customer, object which contains customer deatils
         */
        customer      : null,
        customerDivId : null,
        cls    : 'sales-document-list',
        items         : [
            {
                xtype          : 'tabpanel',
                height         : '100%',
                itemId         : 'tabpanelCustomer',
                tabBarPosition : 'bottom',
                items          : [
                    {
                        // tab info
                        title      : 'Informations',
                        cls        : 'customer-info',
                        iconCls    : 'ico-info',

                        // content info
                        xtype      : 'container',
                        scrollable : null,
                        height     : '100%',
                        width      : '100%',
                        html       : ''
                    },
                    {
                        // tab dashboard
                        title   : 'Indicateurs',
                        iconCls : 'ico-dashboard',
                        itemId  : 'dashboardCustomer',
                        xtype   : 'dashboard'
                    },
                    {
                        // tab documents
                        title   : '',
                        itemId  : 'documents',
                        iconCls : 'ico-documents',
                        xtype   : 'templateSaleDocument',
                    },
                ],
            }
        ]
    },
    /* jshint -W101 */

    initialize: function () {
        // setter titles of tabpanel
        this.down('#tabpanelCustomer').getTabBar().getAt(0).setTitle(I18n.translate('customerDetail'));
        this.down('#tabpanelCustomer').getTabBar().getAt(1).setTitle(I18n.translate('dashboardcustomer'));
        this.down('#tabpanelCustomer').getTabBar().getAt(2).setTitle(I18n.translate('modules.salesDocumentCustomer.title'));
        // setter emptyText so as to have message when there is no documents
        this.down('#tabpanelCustomer')._items.items[3].setEmptyText(I18n.translate('modules.documents.noDocument'));
    },
    /**
     * This function is called when a new Customer has been set even if it has been set in config.
     * This function renders the customer details.
     * @param customer
     */
    updateCustomer : function (customer) {
        var htmlDataToAppend = '',
            templateString,
            tabpanel = this.getItems().get(0),
            /* jshint -W101 */
            mapString = 'maps:q={{mainPostalAddress.address1}}+{{mainPostalAddress.address2}}+{{mainPostalAddress.zipCode}}+{{mainPostalAddress.town}}+{{mainPostalAddress.country}}',
            /* jshint +W101 */
            dashboard = tabpanel.getInnerItems()[1];

        // add customer title
        /* jshint -W109 */
        htmlDataToAppend += "<div class='customer-content-wrapper'>";
        htmlDataToAppend += "<div class='customer-title-wrapper'>";
        htmlDataToAppend += "<div class='contentTile'>";
        htmlDataToAppend += "<div class='customer-logo'></div>";
        if (customer) {
            htmlDataToAppend += "<h1 class='customer-name'>" + customer.get("name") + "</h1>";
            htmlDataToAppend += "<h1 class='customer-code'>" + customer.get("shortName") + "</h2>";
        }
        htmlDataToAppend += "</div>";
        htmlDataToAppend += "</div>";

        // add hermes html
        if (customer) {
            //get the template
            templateString = HermesJS.getConfig("$options.module.customerList.detail.template");
            templateString = templateString.replace(mapString,'#');

            //Fill the template
            htmlDataToAppend += "<div class='customer-info-wrapper'>";
            htmlDataToAppend += HermesJS.templateAsString(templateString, customer.getData());
            htmlDataToAppend += "</div>";
        }
        else {
            htmlDataToAppend += " <div class='customer-info-wrapper'>";
            htmlDataToAppend += " <div class='contentTile'>";
            htmlDataToAppend += " <h3 class='infoTitle'>Informations</h3>";
            /* jshint -W101 */
            htmlDataToAppend += " <h4 class='infoContent'>Les informations ne sont pas disponibles</h4>";
            /* jshint +W101 */
            htmlDataToAppend += " </div>";
            htmlDataToAppend += " </div>";
        }
        htmlDataToAppend += "</div>";
        /* jshint +W109 */


        tabpanel = this.getItems().get(0);
        tabpanel.getInnerItems()[0].setHtml(htmlDataToAppend);

        //Build dashboard
        dashboard = tabpanel.getInnerItems()[1];
        if (customer) {
            dashboard.setCustomer(customer);
            
        }

        dashboard.setDashboardName('dashboardcustomer');

        //build document list 
        
        if(customer)
        {
            this.self.currentCustomer=customer;
            // this.loadData(customer.get('$key'));
            this.groupData();
            this.fireEvent('favorite', customer);
        }
    },

    loadData: function (key) {
        var str = '$options.modules.salesDocumentCustomer.preview.query',
            queryString = HermesJS.getConfig(str),
            query = queryString.replace('{{$key}}', key);

        HermesJSManager.data(query, this, this.renderView,this.checkConnexion);
    },

    groupData: function (groupField) {
        var docList = this.down('#documents'),
            store = docList.getStore(),
            self = this;

        // default group is date
        if (! groupField) {
            groupField = 'date';
        }
        store.setGrouper({
            groupFn: function (record) {

                if (groupField === 'date') {
                    return self.converteDate(record.get('date'));
                } else if (groupField === 'originalType') {
                    return record.get('originalType');
                } else {
                    throw new Error('Invalid sales document grouping field: "' + groupField + '"');
                }
            },
            sortProperty: 'date',
            direction: 'DESC',
        });
    },

    checkConnexion : function () {
        var me = this;
        
        me.setMasked(false);
        /* jshint -W101 */
        Ext.Msg.alert(I18n.translate('message.alert'),
            I18n.translate('errorMessage.noConnectionAvailable'),
            function () {
                /* jshint -W101 */
                me.fireEvent('backToPreviousView');
            });
    },

    converteDate : function (d) {
        /* jshint -W101 */
        var monthname =  [  I18n.translate('month.Jan').substring(0,3),
                            I18n.translate('month.Feb').substring(0,3),
                            I18n.translate('month.Mar').substring(0,3),
                            I18n.translate('month.Apr').substring(0,3),
                            I18n.translate('month.May').substring(0,3),
                            I18n.translate('month.Jun').substring(0,3),
                            I18n.translate('month.Jul').substring(0,3),
                            I18n.translate('month.Aug').substring(0,3),
                            I18n.translate('month.Sep').substring(0,3),
                            I18n.translate('month.Oct').substring(0,3),
                            I18n.translate('month.Nov').substring(0,3),
                            I18n.translate('month.Dec').substring(0,3)];
        /* jshint +W101 */
        return monthname[d.getMonth()] + ' '+d.getFullYear();
    },

    renderView: function (data) {
        var docList = this.down('#documents'),
        customer = SageCME.currentCustomer,
        cmpTitle,
            store = docList.getStore(),
            queryString = '$options.modules.salesDocumentCustomer.preview.template-ios',
            templateString = HermesJS.getConfig(queryString),

            optionSalesDocsCustomer=[
                {
                    text: HermesJSManager.getI18nConfig('$options.modules.semanticZoomDelivery.sort.createDate.$title'),
                    value: 'date'
                },
                {
                    text: HermesJSManager.getI18nConfig('$options.modules.semanticZoomDelivery.sort.originalType.$title'),
                    value: 'originalType'
                }
            ],
            selectfield = docList.down('#selectfield'),
            selectForm = docList.down('#selectform');

        this.showLoader();
        data=data.$resources || data;
        store.setData(data);
 
        docList.setItemTpl(templateString);
        
        this.hideLoader();
        if(customer) {
            cmpTitle = Ext.getCmp('ext-title-1');
            cmpTitle.setTitle(customer.get('name'));
        }
       

        if (data.length === 0){
            selectForm.setHidden(true);
        }
        else {
            selectForm.setHidden(false);
            selectfield.setOptions(optionSalesDocsCustomer);
        }
    },

    showLoader: function () {
        var docList = this.down('#documents');

        docList.setMasked({
            xtype   : 'loadmask',
            message : I18n.translate('semanticZoom.processing')
        });
    },

    hideLoader: function () {
        var docList = this.down('#documents');

        docList.setMasked(false);
    }

});
