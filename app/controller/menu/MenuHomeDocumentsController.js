/**
 * Created by Niji
 * User: Mickael GUESDON
 * Date: 30/09/13
 *
 * @author Mickael GUESDON <mickael.guesdon@niji.fr>
 *
 * @docauthor Mickael GUESDON <mickael.guesdon@niji.fr>
 *
 * @class SageCME.controller.menu.MenuDocumentsController"
 *
 * Description
 */


Ext.define("SageCME.controller.menu.MenuHomeDocumentsController", {
    extend : 'Ext.app.Controller',

    requires : [
        "SageCME.view.menu.MenuDocumentsList"
    ],

    config : {
        refs :{
            menulist: 'list[name=home-document-list]'
        },
        control: {
            'menulist': {
                itemsingletap : 'onListItemTap'
            }
        }
    },

    launch : function () {

    },
    /**
     *
     * @param context
     * @param index
     * @param target
     * @param record
     * @param e
     * @param eOpts
     */
    onListItemTap : function(context, index, target, record, e, eOpts )
    {
        //TODO: Implement action on click to passe parameters
        this.getApplication().redirectTo('menu-documents');
    }


});