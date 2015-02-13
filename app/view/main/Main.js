/* global I18n */
/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 23/09/13
 *
 * @class SageCME.view.Main
 *
 * This view is the main navigation view
 */
Ext.define('SageCME.view.main.Main', {
    extend   : 'Ext.NavigationView',
    xtype    : 'main',
    config   : {
        defaultBackButtonText: 'Retour',
        useTitleForBackButtonText: true,
        height: '100%',
        cls: 'main-view',
        navigationBar: {
            items: [
                {
                    xtype: 'button',
                    align: 'right',
                    id: 'settings-button',
                    iconCls: 'info',
                    iconMask: true
                },
                {
                    xtype: 'button',
                    align: 'left',
                    id: 'fullscreen-button',
                    text: '',
                    iconCls: 'fullscreen'
                },
                {
                    xtype: 'button',
                    align: 'left',
                    id: 'shrink-button',
                    text: '',
                    hidden: true,
                    iconCls: 'shrink'
                },
                {
                    type: 'html',
                    align: 'right',
                    id: 'customers-comments',
                    iconCls: 'comments'
                },
                {
                    xtype: 'button',
                    align: 'right',
                    id: 'kpi-details-reset-button',
                    text: 'Reinitialiser'
                },
                {
                    xtype: 'button',
                    align: 'right',
                    id: 'favorite-kpi-button',
                    iconCls : 'kpi-detail-NonfavoriButton',
                },
                {
                    xtype : 'button',
                    align: 'right',
                    id:'favorite-customer',
                    iconCls :'customer-non-favori-button'
                }
            ]
        }
    },

});
