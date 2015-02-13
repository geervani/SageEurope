/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 01/10/13
 *
 * @class SageCME.view.RootView
 *
 * This view is a split view (root of the application)
 */

Ext.define('SageCME.view.RootView', {
    extend   : 'Ext.Container',
    xtype    : 'rootview',
    requires : [
        'Ext.tab.Panel',
        'SageCME.view.main.Main',
        'SageCME.view.menu.Menu'
    ],
    config   : {
        fullscreen : true,
        cls: "root-view",

        items : [
            {
                xtype : 'main'
            },
            {
                xtype  : 'menu',
                docked : 'left',
                width  : 240
            }
        ]
    }
});