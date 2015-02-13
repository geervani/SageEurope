/**
 * Created by Niji
 * User: Mickael GUESDON
 * Date: 30/09/13
 *
 * @author Mickael GUESDON <mickael.guesdon@niji.fr>
 *
 * @docauthor Mickael GUESDON <mickael.guesdon@niji.fr>
 *
 * @class SageCME.controller.GuideController"
 *
 * Description
 */


Ext.define("SageCME.controller.main.GuideController", {
    extend : 'Ext.app.Controller',

    requires : [
        "SageCME.view.main.Guide"
    ],

    config : {
        refs    : {
            guideView             :'guide',
            closeButton           :'button[name=close-button]'
        },
        control : {
            closeButton    : {
                tap : 'onCloseButtonTap'
            }
        }
    },

    /**
     * Call when user click on home button
     */
    onCloseButtonTap : function () {

        var self = this;
        Ext.Viewport.remove(self.getGuideView(), true);
    }


});