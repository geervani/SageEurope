/* global  $, HermesJSManager */

/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 18/10/13
 *
 * @class SageCME.view.Dataviz
 *
 */
Ext.define('SageCME.view.Dataviz', {
    extend : 'Ext.Container',
    xtype  : 'dataviz',

    config : {
        cls         : 'dataviz',
        /**
         * @config {Object} shortcut It is an hermes Shortcut object 
         *                  (which enables you to get a KPI)
         */
        options     : null,
        isComparisonPeriod: false,

        /**
         * @config {string} describes the display mode :
         *                  MODE_DETAIL ("detail") or MODE_PREVIEW ("preview")
         */
        shortcutKey : null,
        customer    : null,
        listeners   : {
            tap: {
                element: 'element',
                event: 'tap',
                fn: 'onDatavizTapped'
            },
            painted: 'onPainted'
        }
    },

    onPainted: function ( element ) {
        HermesJSManager.dataviz(this.getOptions());
        
        // Keep only the comparizon period chart
        if (this.getIsComparisonPeriod()) {
            $('#main_divpivot1', element.dom).remove();
            $('#main_divraddonutchart2', element.dom).remove();
            $('#main_divradpiechart2', element.dom).remove();
        }

        this.addDatavizEventsListeners();
    },

    onDatavizTapped : function (event, dom) {
        this.fireEvent('dataviztap', this, dom, event);
    },

    onDetail : function (resourceObject) {
        var resourceKind, uid;
        if (
            typeof resourceObject.dataItem === 'object' &&
            resourceObject.dataItem.CategoryForValue
        ) {
            return;
        } else if (resourceObject.resourceKey) {
            uid = resourceObject.resourceKey;
            resourceKind = resourceObject.resourceKind;
            this.fireEvent('itemtap', this, resourceKind, uid);
        }
    },

    refreshScroller : function () {
        var scroller = this.getScrollable().getScroller(),
            $pivotContainer = $('.pivot_container', this.element.dom),
            $pivotContainerHeight = $pivotContainer ? $pivotContainer.outerHeight() : 0,
            isScrollable = $pivotContainerHeight > this.element.getHeight();

        if (isScrollable) {
            this.setScrollable(true);

            scroller.setSize($pivotContainerHeight);
            //scroller.setSize(840);
        }
    },

    /**
     * Triggered when option config value is changed or initialized
     * @param newOptions
     */
    updateOptions : function (newOptions) {
        //change type if preview is a figure only
        if (newOptions.type === 'figure_preview') {
            newOptions.type = 'figurecustom';
        }

        // make pivot details scrollable
        if (newOptions.type === 'pivot' && newOptions.rendertype === 'detail') {
            this.addCls('dataviz-pivot');
            //<feature logger>
            Ext.Logger.info('Activating vertical scroll for pivot dataviz ' + this.getId());
            //</feature>
            this.setScrollable({
                direction     : 'vertical',
                directionLock : true
            });
        }


        if (newOptions.type === 'pivot' && newOptions.rendertype === 'detail') {
            newOptions.el = $('.x-inner', this.element.dom);

            this.element.on('painted', this.refreshScroller, this);
            // refresh scroller height on tap (pivot line expand);
            newOptions.el.on('resize', this.refreshScroller.bind(this));
        } else {
            newOptions.el = $(this.element.dom);
        }

        newOptions.onDetail = this.onDetail.bind(this);
    },

    addDatavizEventsListenersTriesCount : 0,
    addDatavizEventsListeners: function () {
        var options,
            dataviz,
            kChart,
            kGauge;

        if (
            (this.element === null) ||
            (this._options && this._options.rendertype === 'preview') ||
            (this._options && this._options.type === 'pivot') ||
            (this.addDatavizEventsListenersTriesCount >= 20)
        ) {
            return;
        }


        this.addDatavizEventsListenersTriesCount++;

        options = {
            seriesClick : this.onDetail.bind(this),
            limit       : 3
        };

        dataviz = null;
        kChart = $('.k-chart', $(this.element.dom)).last();
        if (kChart.length) {
            dataviz = kChart.data('kendoChart');
        } else {
            kGauge = $('.k-gauge', $(this.element.dom)).last();
            if (kGauge.length) {
                dataviz = kGauge.getKendoRadialGauge();
            }
        }

        if (dataviz) {
            //<feature logger>
            Ext.Logger.info('listeners added to dataviz ' + this.getId());
            //</feature>
            Ext.defer(function(){
                dataviz.refresh();
            }, 1, this);
            dataviz.setOptions(options);
        } else {
            // try to add listeners later
            Ext.defer(this.addDatavizEventsListeners, 500, this);
        }
    }
});