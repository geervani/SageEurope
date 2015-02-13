/**
 * @author Pierre Despagne <pierre.despagne@niji.fr>
 * @docauthor Pierre Despagne <pierre.despagne@niji.fr>
 * @class NijiLibrary.controller.NijiBridgeComponentUtils
 * This class contains the methods required for the Bridge component
 * 
 * NijiBridgeComponentUtils
 */
Ext.define("NijiLibrary.controller.NijiBridgeComponentUtils", {
    singleton: true,
    requires: ['NijiLibrary.store.RequestLocalStore'],

	/**
	*	Putting the mock.js as script in the current document
	*/
    constructor: function() {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.src = 'NijiLibrary/controller/connection/mock.js';
        document.body.appendChild(script);
    },

    /**
     * Remove the timestamp of the request
     * @param request
     * @returns {String}
     */
    removeTimestamp: function(request) {
        var currentRequest = null;
        var debutDC = request.indexOf("_dc");
        var finDC = request.indexOf("&");
        if (finDC == -1) {
            currentRequest = request.substring(0, debutDC - 1);
        } else {
            var requestWithoutDCLeft = request.substr(0, debutDC);
            var requestWithoutDCRight = request.substring(finDC + 1, request.length);
            currentRequest = requestWithoutDCLeft + requestWithoutDCRight;
        }
        return currentRequest;
    },

    /**
     * Getting the NijiLibrary.store.RequestLocalStore
     * @returns {Object}
     */
    getLocalStore: function() {
        var myLocalStore = Ext.getStore('RequestLocalStore');
        if (myLocalStore == null) {
            myLocalStore = Ext.create('NijiLibrary.store.RequestLocalStore');
        }
        myLocalStore.load();
        return myLocalStore;
    }

});