/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 18/10/13
 *
 * @class SageCME.view.KPIPreview
 *
 * A KPI Detail : a carousel which is filled up with dataviz created from a KPI
 */

Ext.define('SageCME.view.KPIPreview', {
    extend : 'SageCME.view.KPI',
    xtype  : 'kpi-preview',

    requires : [
        'SageCME.view.Dataviz'
    ],

    config       : {
        /**
         * @config {Object} shortcut It is an hermes Shortcut object (which enables you to get a KPI)
         */
        shortcut  : null,
        /**
         * @config {string} describes the display mode : MODE_DETAIL ("detail") or MODE_PREVIEW ("preview")
         */
        mode      : KPI.MODE_PREVIEW,
        cls       : ['kpi', 'shortcut', 'preview'],
        items     : [],
        height    : 262
    }
})
;