/* global HermesJSManager */
/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 25/09/13
 *
 * @class SageCME.controller.main.StateController
 *
 * This controller add classes to the viewport to indicates
 * the HermesJS current state
 */


Ext.define('SageCME.controller.main.StateController', {
    extend : 'Ext.app.Controller',

    requires : [
        'SageCME.singleton.HermesJSManager'
    ],

    config : {
        control : {
            HermesJSManager : {
                ready              : function () {
                    Ext.Viewport.removeCls('syncing');
                    Ext.Viewport.addCls('authenticated');
                    if(localStorage.authToken){
                        Ext.Viewport.addCls('has-token');
                    }
                },
                quit               : function () {
                    Ext.Viewport.removeCls('syncing');
                    Ext.Viewport.removeCls('authenticated');
                    Ext.Viewport.removeCls('has-token');
                },
                networkunavailable : function () {
                    Ext.Viewport.removeCls('syncing');
                    Ext.Viewport.removeCls('online');
                    Ext.Viewport.addCls('offline');
                },
                networkavailable   : function () {
                    Ext.Viewport.addCls('online');
                    Ext.Viewport.removeCls('offline');
                },
                syncstart          : function () {
                    Ext.Viewport.addCls('syncing');
                    if(localStorage.authToken){
                        Ext.Viewport.addCls('has-token');
                    }
                }
            }
        }
    },

    launch: function(){
        HermesJSManager.checkIfOnline();
        if(HermesJSManager.isOnline()){
            Ext.Viewport.addCls('online');
            Ext.Viewport.removeCls('offline');
        }else{
            Ext.Viewport.removeCls('online');
            Ext.Viewport.addCls('offline');
        }
        if(localStorage.authToken){
            Ext.Viewport.addCls('has-token');
        }else{
            Ext.Viewport.removeCls('has-token');
        }
    }
});