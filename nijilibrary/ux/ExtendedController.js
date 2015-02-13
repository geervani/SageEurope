/*
 Important notice: This software is the sole property of Bouygues Telecom
 and can not be distributed and/or copied without the written permission of Bouygues Telecom.
 Copyright (c) 2012, Bouygues Telecom. All rights reserved.
 */

Ext.define('NijiLibrary.ux.ExtendedController', {
    override : 'Ext.app.Controller',

    /**
     * @cfg {Object} providers A collection of named {@link Core.engine.BaseProviderPlugin} that makes it
     * easy to get references to providers. Example usage:
     *
     *     providers: [
     *     'MyProviderName',
     *     'MyOtherProviderName'
     *     ]
     *
     * @accessor
     */

    /**
     * Called by the Controller's {@link #application} immediately after a scene transition if the controller
     * takes part of the current state, or immediately after the controller is ready : what happens the first
     * {@link Ext.app.Application#launch launch function} has been called. This is usually a good place to run any
     * logic that has to run after the app UI is initialized. See also {@link #ready} and {@link #deactivate}.
     * @param targetState the target state
     */
    activate : Ext.emptyFn,

    /**
     * Called by the Controller's {@link #application} immediately after a scene transition if the controller
     * was active but is not used in the new state.
     * This is usually a good place to run any
     * logic that has to run when the controller is not used in the new state. See also {@link #activate}.
     * @param targetState the target state
     */
    deactivate : Ext.emptyFn,

    /**
     * Called by the Controller's {@link #application} immediately after all the providers have been given to
     * the controller or immediately after the controller's {@link #launch}, what happens the last.
     *
     * This is usually a good place to run any logic which requires providers see also {@link #activate}.
     */
    ready : Ext.emptyFn,

    constructor : function () {
        // CONSTRUCT CONTROLLER INSTANCE
        var instance = this.callOverridden(arguments);

        // MANAGE CONTROLLERS (controls on controllers are registred in afterLaunch function)
        if (this.config.controllers) {
            // For each controller defined, we register it in the prototype.
            // We also generate accessors
            for (var i = 0; i < this.config.controllers.length; i++) {
                // Add getter : this.getMyController()
                var controllerName = this.config.controllers[i];

                var nameMap = Ext.Class.getConfigNameMap(controllerName);
                if (!this.__proto__[nameMap.get]) {
                    this.__proto__[nameMap.get] = this.generateControllerGetter(nameMap);
                }
            }
        }

        // MANAGE BRIDGE CONTROLS
        // We create listeners on bridge events

        if (this._control.HermesJSManager) {
            for (event in this._control.HermesJSManager) {
                var callback = this._control.HermesJSManager[event];
                if (typeof callback === 'string') {
                    callback = this[callback];
                }
                if (callback) {
                    HermesJSManager.on(event, callback, this);
                    //<feature logger>
                    Ext.Logger.info('The listener for event ' + event
                                        + ' of HermesJS has been regisered for the controller ' + this.$className);
                    //</feature>
                }
                //<feature logger>
                else {
                    Ext.Logger.error('The given callback for event ' + event
                                         + ' of HermesJS is not valid in the context of the controller ' + this.$className);
                }
                //</feature>
            }
        }

        return instance;
    },

    generateControllerGetter : function (nameMap) {
        var controllerName = nameMap.internal.substr(1);

        return function () {
            return this.getApplication().getController(controllerName);
        };
    }
});