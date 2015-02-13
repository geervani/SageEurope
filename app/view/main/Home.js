/* global I18n */
/**
 * @author Othman LABZAR <othman.labzar@sage.com>
 * @author Layla ait laaraj <layla.aitllaraj@sage.com>
 * 
 * @class SageCME.view.main.Home
 *
 * This view is the home page
 */
Ext.define('SageCME.view.main.Home', {
    extend : 'Ext.Container',
    xtype  : 'accueil',

    requires : [,
        'SageCME.view.main.InvoiceFavorite',
        'SageCME.view.main.DeliveryFavorite',
        'SageCME.view.main.OrderFavorite',
        'SageCME.view.main.QuotationFavorite',
        'SageCME.view.TemplateSaleDocumentFavorite',
        'SageCME.view.main.CustomerFavorite',
        'SageCME.model.SaleDocument',
        'SageCME.view.main.KpiFavorite'
    ],

    statics: {
        LAZY_LOADING_OFFSET: 300
    },

    config : {
        listeners : {
            painted : 'onPainted',
            scroll: 'onScroll'
        },
        scrollable: {
            direction:'vertical',
            directionLock: true,
        },
        cls    : 'home-style',
        lazySectionsCache: [],
        items : [
            {
                xtype: 'container',
                // scrollable:false,
                docked: 'top',
                items:[
                    {
                        xtype          : 'toolbar',
                        items          : [
                            {
                                xtype: 'button',
                                cls  : ['home-kpi-button'],
                                ui      : 'plain',
                                action:'goToKpi',
                                name: 'kpiId',
                                itemId: 'kpiId',
                                text: 'Indicateurs'
                            },
                            {
                                xtype: 'button',
                                cls  : ['home-client-button'],
                                ui      : 'plain',
                                action:'goToClient',
                                name: 'clientId',
                                itemId: 'clientId',
                                text: ''
                            },
                            {
                                xtype: 'button',
                                cls  : ['home-facture-button'],
                                ui      : 'plain',
                                action:'goToFacture',
                                name: 'factureId',
                                itemId: 'factureId',
                                text: ''
                            },
                            {
                                xtype: 'button',
                                cls  : ['home-order-button'],
                                ui      : 'plain',
                                action:'goToOrder',
                                name: 'orderId',
                                itemId: 'orderId',
                                text: ''
                            },
                            {
                                xtype: 'button',
                                cls  : ['home-delivery-button'],
                                ui      : 'plain',
                                action:'goToDelivery',
                                name: 'deliveryId',
                                itemId: 'deliveryId',
                                text: ''
                            },
                            {
                                xtype: 'button',
                                cls  : ['home-devis-button'],
                                ui      : 'plain',
                                action:'goToDevis',
                                name: 'devisId',
                                itemId: 'devisId',
                                text: ''
                            },
                        ]
                    },
                ]
            },
            {
                xtype: 'container',
                itemId:'containerFavoris',
                // scrollable:true,
                items:[

                    //////////////////////////////////////////////////////
                    {
                        xtype:'label',
                        cls : 'acceuil-label',
                        itemId:'acceuil-label',
                        html:'<div data-scrollspy-target="kpi">Indicateurs favoris</div>'
                    },
                    {
                        xtype: 'kpi-favorite',
                        itemId: 'kpiFavoris',
                        scrollable:null,
                    },
                    {
                        xtype:'button',
                        name: 'kpiSeeAllButton',
                        cls : 'seeAll-label',
                        html: '',
                        itemId:'allKpiId'
                    },
                    //////////////////////////////////////////////////////
                    {
                        xtype:'label',
                        cls : 'acceuil-label',
                        itemId : 'customerLabelId',

                        html:'<div data-scrollspy-target="customer"></div>'
                    },
                    {
                        xtype: 'customerFavorislist',
                        itemId:'customerFavoris',
                        lazy: true,
                        isLoaded: false
                    },
                    {
                        xtype:'button',
                        name: 'customerSeeAllButton',
                        cls : 'seeAll-label',
                        html: I18n.translate('home.allCustomers'),
                        itemId:'customerId'
                    },
                    //////////////////////////////////////////////////////
                    {
                        xtype:'label',
                        cls : 'acceuil-label',
                        itemId : 'invoiceLabelId',
                        html:'<div data-scrollspy-target="invoice"></div>'
                    },
                    {
                        xtype: 'invoiceFavorite',
                        itemId:'containerInvoice',
                        lazy: true,
                        isLoaded: false
                    },
                    {
                        xtype:'button',
                        name: 'invoiceSeeAllButton',
                        cls : 'seeAll-label',
                        html: I18n.translate('home.allInvoices'),
                        itemId: 'allInvoices'
                    },
                    //////////////////////////////////////////////////////
                    {
                        xtype:'label',
                        cls : 'acceuil-label',
                        itemId : 'orderLabelId',
                        html:'<div data-scrollspy-target="order"></div>'
                    },
                    {
                        xtype: 'orderFavorite',
                        itemId:'containerOrder',
                        lazy: true,
                        isLoaded: false
                    },
                    {
                        xtype:'button',
                        name: 'orderSeeAllButton',
                        cls : 'seeAll-label',
                        html: I18n.translate('home.allOrders'),
                        itemId: 'allOrders'
                    },
                    //////////////////////////////////////////////////////
                    {
                        xtype:'label',
                        cls : 'acceuil-label',
                        itemId : 'deliveryLabelId',
                        /*jshint -W101*/
                        html:'<div data-scrollspy-target="delivery"></div>'
                        /*jshint +W101*/
                    },
                    {
                        xtype: 'deliveryFavorite',
                        itemId:'containerDelivery',
                        lazy: true,
                        isLoaded: false
                    },
                    {
                        xtype:'button',
                        name: 'deliverySeeAllButton',
                        cls : 'seeAll-label',
                        html: I18n.translate('home.allDeliveries'),
                        itemId: 'allDeliveries'
                    },
                    //////////////////////////////////////////////////////
                    {
                        xtype:'label',
                        cls : 'acceuil-label',
                        itemId : 'quotationLabelId',
                        html:'<div data-scrollspy-target="devis"></div>'
                    },
                    {
                        xtype: 'quotationFavorite',
                        itemId:'containerQuotation',
                        lazy: true,
                        isLoaded: false
                    },
                    {
                        xtype:'button',
                        name: 'quotationSeeAllButton',
                        itemId:'quotationSeeAllButton',
                        cls : 'seeAll-label',
                        html: I18n.translate('home.allQuotations'),
                    },
                ]
            }
        ],
    },

    /* jshint -W101 */
    initialize : function() {
        this.callSuper();
        this.initConfig();

        // Workaround to bind scroll event to the view
        this.getScrollable().getScroller().on('scroll', this.onScroll.bind(this));

        this.down('#allKpiId').setText(I18n.translate('home.allKPI'));
        this.down('#customerId').setText(I18n.translate('home.allCustomers'));
        this.down('#allInvoices').setText(I18n.translate('home.allInvoices'));
        this.down('#allOrders').setText(I18n.translate('home.allOrders'));
        this.down('#allDeliveries').setText(I18n.translate('home.allDeliveries'));
        this.down('#quotationSeeAllButton').setText(I18n.translate('home.allQuotations'));

        
        this.down('#kpiId').setText(I18n.translate('modules.semanticZoomDashboardhome.title'));
        this.down('#clientId').setText(I18n.translate('modules.customerList.title'));
        this.down('#factureId').setText(I18n.translate('modules.semanticZoomInvoice.title'));
        this.down('#orderId').setText(I18n.translate('modules.semanticZoomOrder.title'));
        this.down('#deliveryId').setText(I18n.translate('modules.semanticZoomDelivery.title'));
        this.down('#devisId').setText(I18n.translate('modules.semanticZoomQuote.title'));

        this.down('#quotationLabelId').setHtml('<div data-scrollspy-target="devis">'+I18n.translate('modules.quoteList.title')+'</div>');
        this.down('#deliveryLabelId').setHtml('<div data-scrollspy-target="delivery">'+I18n.translate('modules.deliveryList.title')+'</div>');
        this.down('#orderLabelId').setHtml('<div data-scrollspy-target="order">'+I18n.translate('modules.orderList.title')+'</div>');
        this.down('#invoiceLabelId').setHtml('<div data-scrollspy-target="invoice">'+I18n.translate('modules.invoiceList.title')+'</div>');
        this.down('#customerLabelId').setHtml('<div data-scrollspy-target="customer">'+I18n.translate('module.customer.title')+'</div>');

        this.down('#acceuil-label').setHtml('<div data-scrollspy-target="kpi">'+I18n.translate('modules.semanticZoomDashboardhome.title')+'</div>');
        this.cacheLazySections();
    },

    onPainted : function () {
        this.fireEvent('painted', this);
    },

    onScroll: function (element, x, y) {
    // Je dois avoir un moyen de récupérer les éléments avec l'attribut "lazy"
        var sections = this.getLazySectionsCache(),
            me = this;

    // A chaque fois qu'un élément lazy rentre dans le viewport
        Ext.Array.each(sections, function (section) {
            if (
                me.isContainerVisible(section, y) &&
                !section.isLoaded
            ) {
                // Je déclenche un événement "x" dans cet élément
                section.fireEvent('lazy', me);
                section.isLoaded = true;
            }
        });
        
    },

    cacheLazySections: function () {
        this.setLazySectionsCache(this.query('[lazy=true]'));
    },

    isContainerVisible : function (elem, y) {
        var minOffset = elem.element.dom.offsetTop - this.self.LAZY_LOADING_OFFSET;
        
        return y + this.self.LAZY_LOADING_OFFSET >= minOffset;
    }
});