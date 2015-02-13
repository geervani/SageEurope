/* global HermesJS,I18n */
/**
 * @author Layla ait laaraj <layla.aitllaraj@sage.com>
 *
 * @class SageCME.view.main.Info
 *
 * This view is the info page which is summary of application description + link to CGU
 */
Ext.define('SageCME.view.main.Info', {
    extend : 'Ext.Container',
    xtype  : 'info',

    requires : ['Ext.Panel'],
    config : {
        items : [
            {
                xtype  : 'container',
                itemId : 'infocontainer',
                html   : ''
            }
        ],
    },
    /* jshint -W101 */

    initialize :function() {
        //TODO: get version dynamically from somewhere (to define)
        //    : add description + link text to the manifest
        /* jshint -W109 */
        var htmlDataToAppend =  [ '<div class="customer-content-wrapper">',
                '<div class="info-content">',
                    '<h1 class="info-title">'+I18n.translate('charms.about.version')+'</h1>',
                    '<h2 class="info-text">' + HermesJS.getConfig('title') + ' 1.1.3-0 </h2>',
                    '<h1 class="info-title">'+I18n.translate('module.expense.form.description')+'</h1>',
                    /* jshint -W101 */
                    '<p class="info-text">'+I18n.translate('charms.about.aboutText')+'</p>',
                    '<p class="info-text"><a class="info-link" href="https://sagedatamanagerextra.sage.fr/doc/SageCustomerManagerExtra/fr/CGU_Sage.pdf"; onclick="window.open(this.href,\'_system\'); return false;">'+I18n.translate('charms.about.cguTitle')+'</a></p>',
                    /* jshint +W101 */
                '</div>',
            '</div>'
        ].join('');

        this.down('#infocontainer').setHtml(htmlDataToAppend);
    }
});

