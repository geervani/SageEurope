/**
 * @author Quentin Decre <quentin.decre@niji.fr> 
 * @author layla ait laaraj <layla.aitllaraj@sage.com>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 25/09/13
 *
 * @class SageCME.controller.MainController 
 * This controller handle the Home view
 */

Ext.define('SageCME.controller.main.HomeController', {
    extend : 'Ext.app.Controller',

    requires : [
        'SageCME.view.main.Main',
        'SageCME.singleton.HermesJSManager',
        'SageCME.view.KPIPreview'
    ],

    config : {
        refs      : {
            dashboardView       : 'dashboard',
            shortcuts           : 'shortcut',
            userlogin           : '#user-login-txt'
        },
        control   : {
            HermesJSManager : {
                ready : 'onHermesJSready'
            }
        }

    },

    onHermesJSready : function () {
        this.getApplication().redirectTo('accueil');
    }
});