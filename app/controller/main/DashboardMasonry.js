/* global Masonry, I18n */
/* global clearTimeout */

/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @author labzar othman <othman.labzar@sage.com>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 07/11/2013
 *
 * @class SageCME.controller.DashboardMasonry
 *
 * This controller handle the Home view
 */
Ext.define('SageCME.controller.main.DashboardMasonry', {
    extend   : 'Ext.app.Controller',
    requires : [
        'SageCME.view.KPIDetail'
    ],

    config : {
        refs    : {
            kpiPreview : 'kpi-preview',
            dashboard  : 'dashboard',
            customerDashboard : 'customer tabpanel dashboard',
            customerDashboardKpi:'customer tabpanel dashboard ',
            dataviz    : 'dataviz',
            selectFieldDashboard:'dashboard #selectfield',

            goToComtab           :'button[name=goToComtab]',
            goToGesComm           :'button[name=goToGesComm]',
            goToCompa           :'button[name=goToCompa]',
            goToEvo           :'button[name=goToEvo]',
            goToNomb           :'button[name=goToNomb]',
            goToClass           :'button[name=goToClass]',
            goToSynth           :'button[name=goToSynth]',
            goToClient           :'button[name=goToClient]',
            goToCommandes           :'button[name=goToCommandes]',
            goToPtoduit           :'button[name=goToPtoduit]',
            goToDevis           :'button[name=goToDevis]',
            goToRepresentant           :'button[name=goToRepresentant]',
            goToCAHT           :'button[name=goToCAHT]',
            goToCAHTGlobal           :'button[name=goToCAHTGlobal]',
        },
        control : {
            HermesJSManager : {
                ready                 : 'onHermesJSReady',
                executekpiqueryfailed : 'showDashboard'
            },
            dashboard       : {
                show          : 'updateLayout',
                destroy       : 'onDestroy',
                beforerefresh : 'beforeRefresh'
            },
            selectFieldDashboard:{
                change:'onGroupSelectFieldChange'
            },
            dataviz         : {
                initialize : 'onDatavizInitialize'
            },

            goToCommandes : {
                tap : 'ScrollToElement'
            },
            goToComtab : {
                tap : 'ScrollToElement'
            },
            goToGesComm : {
                tap : 'ScrollToElement'
            },
            goToCompa : {
                tap : 'ScrollToElement'
            },
            goToEvo : {
                tap : 'ScrollToElement'
            },
            goToNomb : {
                tap : 'ScrollToElement'
            },
            goToClass : {
                tap : 'ScrollToElement'
            },
            goToSynth : {
                tap : 'ScrollToElement'
            },
            goToClient : {
                tap : 'ScrollToElement'
            },
            goToPtoduit : {
                tap : 'ScrollToElement'
            },
            goToDevis : {
                tap : 'ScrollToElement'
            },
            goToRepresentant : {
                tap : 'ScrollToElement'
            },
            goToCAHT : {
                tap : 'ScrollToElement'
            },
            goToCAHTGlobal : {
                tap : 'ScrollToElement'
            },
        }
    },

    initClsButtons: function  () {

        var i=0,tabButtonDash = {

            '0': this.getGoToComtab(),

            '1': this.getGoToGesComm(),

            '2': this.getGoToCompa(),

            '3': this.getGoToEvo(),

            '4': this.getGoToNomb(),

            '5': this.getGoToClass(),

            '6': this.getGoToSynth(),

            '7': this.getGoToClient(),

            '8': this.getGoToCommandes(),

            '9':this.getGoToPtoduit(),

            '10':this.getGoToDevis(),

            '11':this.getGoToRepresentant(),

            '12':this.getGoToCAHT(),

            '13':this.getGoToCAHTGlobal(),
                
        };
        for (i = 0; i < 14; i++) {
            if (tabButtonDash[i]!== undefined) {
                tabButtonDash[i].setCls('scrollspy-dashboard');
            }
        }
    },

    ScrollToElement : function(context){
        var TargetLabelTab = Ext.select('[data-scrollspy-dashboard-target]').elements,
            i,
            self = this,
            dashboardScrol;

        for (i = 0; i < TargetLabelTab.length; i++) {
            if (TargetLabelTab[i].textContent===context.element.dom.innerText.trim()) {
                self.setClsButtonActive(context);
                /*jshint -W101*/
                if (this.getDashboard().getScrollable()){
                    dashboardScrol = this.getDashboard().getScrollable()
                } else if (this.getCustomerDashboard().getScrollable()){
                    dashboardScrol = this.getCustomerDashboard().getScrollable()
                }
                dashboardScrol.getScroller().scrollTo(0, TargetLabelTab[i].offsetTop, true);
                /*jshint +W101*/
            }
        }
    },

    setClsButtonActive : function (context) {
        var self = this,
            dashboardScrol;

        if (this.getDashboard().getScrollable()){
            dashboardScrol = this.getDashboard().getScrollable();
        }else if (this.getCustomerDashboard().getScrollable()){
            dashboardScrol = this.getCustomerDashboard().getScrollable();
        }

        dashboardScrol.getScroller().addListener('scrollend',function () {
                if (context!==null) {
                    self.initClsButtons();
                    context.setCls('scrollspy-dashboard-active');
                    context=null;
                }
            });
        
    },

    /**
     * @author labzar othman <othman.labzar@sage.com>
     * onGroupSelectFieldChange recuperate the selectField's value and scheduleRefresh 
     */
    onGroupSelectFieldChange : function (field, newValue) {
        var dashboard = this.getDashboard();
        if (this.getCustomerDashboardKpi()) {
            this.getCustomerDashboardKpi().setGroupement(newValue);
            this.getCustomerDashboardKpi().scheduleRefresh();
        } else{
            dashboard.setGroupement(newValue);
            dashboard.scheduleRefresh();
        }
        
    },

    onHermesJSReady : function () {
        var dashboards = Ext.ComponentQuery.query('dashboard');
        Ext.Array.every(dashboards, function (dashboard) {
            dashboard.scheduleRefresh();
        });
    },

    doUpdateLayout : null, // automatically generated  
    updateLayout   : function (dashboard) {
        var masonryContainers;

        dashboard.setHeightDashboard(false);
        
        if (!this.doUpdateLayout) {
            this.doUpdateLayout = Ext.Function.createBuffered(function () {
                if (this.getDashboard().query('container[cls=masonry-container]').length > 0) {
                    masonryContainers = this.getDashboard()
                        .query('container[cls=masonry-container]');
                } else {
                    masonryContainers = [this.getDashboard()];
                }
                    
                Ext.Array.each(masonryContainers, function (item) {
                    var masonryContainer,
                        masonry;

                    // Gets the masonryContainer
                    if (this.element.down('.x-dock-body > .x-body > .x-inner')) {
                        masonryContainer = this.element.down('.x-dock-body > .x-body > .x-inner');
                    } else if (item.element.down('.x-inner')) {
                        masonryContainer = item.element.down('.x-inner');
                    }

                    // Tests if the masonryContainer contains kpi previews
                    if (masonryContainer.query('.kpi.preview').length > 0) {
                        masonry = new Masonry(masonryContainer.dom, {
                            isInitLayout: false,
                            itemSelector: '.kpi.preview'
                        });

                        masonry.on('layoutComplete', function (masonryInstance) {
                            var position = Math.max.apply(this, masonryInstance.colYs),
                                bottomMargin = 20;

                            item.setHeight(position + bottomMargin);
                            masonryContainer.setHeight(position + bottomMargin);
                        });

                        masonry.layout();
                    }
                });
            }, 10, this);
        }
        this.doUpdateLayout();
    },

    onDatavizInitialize : function (dataviz) {
        /* jshint -W101*/
        dataviz.element.timeoutCallback = Ext.defer(this.onDatavizResize, 1000, this, [dataviz.element]);
        /* jshint +W101*/
        dataviz.on('resize', this.onDatavizResize, this, {element : 'element', delay : 1000});
    },

    beforeRefresh : function (dashboard) {
        dashboard.setMasked(
            {
                xtype   : 'loadmask',
                message : I18n.translate('semanticZoom.processing'),
            }
        );
    },

    onDatavizResize : function (datavizElement) {
        var dashboard,kpi;
        if (datavizElement.timeoutCallback) {
            clearTimeout(datavizElement.timeoutCallback);
        }

        kpi = Ext.getCmp(datavizElement.id).up('kpi-preview');
        // avoid using masonry on kpi details
        if (kpi) {
            // set final size
            kpi.setHeight(datavizElement.getHeight());

            this.showDashboard(kpi);

            dashboard = kpi.up('dashboard');
            this.updateLayout(dashboard);
        }
    },

    showDashboard : function (kpi) {
        var dashboard = kpi.up('dashboard');
        if (dashboard) {
            Ext.defer(function () {
                dashboard.innerElement.setStyle('visibility', 'visible');
                dashboard.setMasked(false);
            }, 1000, this);
        }
    },

    onDestroy : function () {
        if (this.masonry) {
            this.masonry.destroy();
        }
    }
});
