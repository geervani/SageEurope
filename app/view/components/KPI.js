/* globals HermesJSManager, HermesJS, $ */

/**
 * A Sencha Touch custom component who encapsulate HermesJS KPI Preview
 * 
 * @author Youssef Boubdir <youssef.boubdir@sage.com>
 */
Ext.define('SageCME.view.components.KPI', {
    extend: 'Ext.Component',
    xtype:  'deffered-kpi',

    config: {
        shortcut: null,
        shortcutKey: null,
        _kpi: null,
        cls: 'kpi kpi--preview',

        listeners: {
            painted: 'onPainted'
        }
    },

    initialize: function () {
        this.callParent();
        this.initConfig();

        this.element.on({
            tap: 'onTap',
            scope: this
        });

        this._kpi = HermesJSManager.getKpi(this.getShortcut().$key);
        this.setShortcutKey(this.getShortcut().$key);

        this.addCls(this._kpi.preview.dataviz.children[0].type);
        this.titleElement.setHtml(this._kpi.title);
    },

    onTap: function (e) {
        this.fireEvent('tap', this, e);
    },

    onPainted: function () {
        // Get the data, and draw the graph
        HermesJS
            .executeKpiQuery(this._kpi, this.getShortcut(), 'preview')
            .done(this.drawChart.bind(this));
    },

    drawChart: function (data) {
        // Gets the chart preview configuration
        var datavizOptions = this._kpi.preview.dataviz.children[0];

        if (datavizOptions.type === 'figure_preview') {
            datavizOptions.type = 'figurecustom';
        }

        // Configure and ovveride the chart options
        datavizOptions.el         = $(this.figureElement.dom);
        datavizOptions.queries    = [data.preview];
        datavizOptions.rendertype = 'preview';
        datavizOptions.title      = '';
        datavizOptions.chartArea  = {
            height: 206,
            width: 322
        };


        // At least draw the graph
        HermesJS.dataviz(datavizOptions);

        // Hide the indicator element
        this.indicatorElement.addCls('kpi-indicator--hidden');
    },

    getTemplate: function () {
        var prefix = Ext.baseCSSPrefix;

        return [
            {
                reference: 'indicatorElement',
                cls: 'kpi-indicator',
                children: [
                    {
                        // reference: 'indicatorElement',
                        cls: prefix + 'loading-spinner',
                        children: [
                            { tag: 'span', cls: prefix + 'loading-top' },
                            { tag: 'span', cls: prefix + 'loading-right' },
                            { tag: 'span', cls: prefix + 'loading-bottom' },
                            { tag: 'span', cls: prefix + 'loading-left' }
                        ]
                    }
                ]
            },
            {
                reference: 'figureElement',
                cls: 'kpi-figure'
            },
            {
                reference: 'titleElement',
                cls: 'kpi-title'
            }
        ];
    }
});