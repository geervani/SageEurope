/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 18/11/13
 *
 * @class SageCME.controller.main.FullScreenController
 *
 * This controller allow you to set a main screen to full size
 */


Ext.define('SageCME.controller.main.FullScreenController', {
    extend : 'Ext.app.Controller',

    requires : [
    ],

    config : {
        refs    : {
            menu             : 'menu',
            backButton             : 'x-button-back',
            shrinkButton     : '#shrink-button',
            fullScreenButton : '#fullscreen-button',
            menuHome:'menu-home',
            userInfo:'userInfo',
        },
        control : {
            shrinkButton : {
                tap : function () {
                    this.setFullScreen(false);
                }
            },
            fullScreenButton : {
                tap : function () {
                    this.setFullScreen(true);
                }
            }
        }
    },

    launch : function () {
        Ext.Viewport.addCls('not-fullscreen');
    },

    setFullScreen : function (value) {
        var menu = this.getMenu();
        if (value) {
            menu.setWidth(0);
            Ext.Viewport.addCls('fullscreen');
            Ext.Viewport.removeCls('not-fullscreen');

        } else {
            menu.setWidth(240);
            Ext.Viewport.removeCls('fullscreen');
            Ext.Viewport.addCls('not-fullscreen');
            this.setMinifiedMenuCls();

        }
    },
    setMinifiedMenuCls:function(){
        var   menu = this.getMenu(),
        userInfo = this.getUserInfo(),
        online = Ext.device.Connection.isOnline(),
        menuHome = this.getMenuHome();

        menu.setWidth(55);
        menuHome.setCls('home-menu-minified');
        if(online)
        {
            userInfo.down('#connectionStatus').setCls('connection-status-online-minified');
        }
        else {
            userInfo.down('#connectionStatus').setCls('connection-status-offline-minified');

        }

    }
});