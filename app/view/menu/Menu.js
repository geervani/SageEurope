/**
 * Created by Niji
 * User: Mickael GUESDON
 * Date: 30/09/13
 *
 * @author Mickael GUESDON <mickael.guesdon@niji.fr>
 * @author Layla ait laaraj <layla.aitllaraj@sage.com>
 *
 @docauthor Mickael GUESDON <mickael.guesdon@niji.fr>
 *
 * @class MyClass
 *
 * Description
 */

Ext.define('SageCME.view.menu.Menu', {
    extend   : 'Ext.NavigationView',
    xtype    : 'menu',
    requires : ['SageCME.view.UserInfo'],
    config   : {
        cls: 'menu-view',
        defaultBackButtonText: 'Retour',
        useTitleForBackButtonText: true,
        height: '100%',
        navigationBar: {
            items: [
                {
                    xtype: 'userInfo',
                }
            ]
        }
    }
});