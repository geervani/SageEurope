/**
 * @author Alexis Martin <alexis.martin@niji.fr>
 * @docauthor Alexis Martin <pierre.despagne@niji.fr>
 * @class NijiLibrary.controller.LoadingController
 *
 *
 * This is a special controller designed to display custom loading message during ajax request.
 * It'll use the AjaxPatch, and display the loadingMessage you've put in the config of the AjaxRequest.
 * her is a part of an ajax request containing loadingMessage :
 * <pre><code>
 * Ext.Ajax.request(
 *  {
 *      loadingMessage : 'MyCustomMessage'
 *  }
 *  </code></pre>
 *
 *
 *
 * In order to use this component you have to declare a special controller in your app (for exemple a LoadingController) extend the NijiLoadingController
 * and add you LoadingController in your app.js.
 * here is an example :
 * <pre><code>
 * Ext.define("TDFCristal.controller.LoadingController", {
 *    extend: 'NijiLibrary.controller.NijiLoadingController',
 *    requires: [
 *          'NijiLibrary.controller.NijiLoadingController',
 *    ],
 *    config: {
 *          message: 'Loading...'
 *    },
 *
 *    setDefaultLoadingMessage: function(defaultLoadingMessage){
 *          this.setMessage(defaultLoadingMessage);
 *    }
 *  });
 *  </code></pre>
 *  You can directly edit the message in this file.
 *
 */

Ext.define('NijiLibrary.controller.NijiLoadingController', {
    extend: 'Ext.app.Controller',

    config: {
        mask: {
            xtype: 'loadmask',
            /**
             * Here you can add your custom message
             * @type {String}
             */
            message: ''
        },
        requestId: 0,
        requests: {}
    },

    launch: function() {
        var controller = this;
        Ext.Ajax.on('beforerequest', function(e, r) {
            controller.addRequest(r);
        });
        Ext.Ajax.on('requestcomplete', function(e, r) {
            controller.removeRequest(r);
        });
        Ext.Ajax.on('requestexception', function(e, r) {
            controller.removeRequest(r);
        });
    },
    /**
     * Get the req loading message and display it with the spinner
     * @param req
     */
    addRequest: function(req) {
        var msg = req.loadingMessage,
            id = ++this.config.requestId;
        this.config.requests[id] = msg;
        if (msg == undefined) {
            msg = this.getMessage();
        }
        this.showMask(msg);
    },
    /**
     * Hide the req loading message and the spinner.
     * @param req
     */
    removeRequest: function(req) {
        var id = req.requestId;
        delete this.config.requests[id];
        var keys = Object.keys(this.config.requests);
        if (keys.length) {
            var lastId = keys[keys.length - 1];
            this.showMask(this.config.requests[lastId]);
        }
        else {
            this.hideMask();
        }
    },

    /**
     * Show the spinner with msg
     * @param msg
     */
    showMask: function(msg) {
        var mask = this.getMask();
        mask.message = msg;
        Ext.Viewport.setMasked(mask);
    },
    /**
     * Hide the spinner
     */
    hideMask: function() {
        Ext.Viewport.setMasked(false);
    }
});