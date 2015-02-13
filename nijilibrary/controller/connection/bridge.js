/**
 * @author Pierre Despagne <pierre.despagne@niji.fr>
 * @docauthor Pierre Despagne <pierre.despagne@niji.fr>
 * @class NijiLibrary.controller.connection.bridge
 *
 *
 * In order to use this component you have to add in your app.js file:
 *           <code><pre>requires : ['NijiLibrary.controller.connection.bridge'],</code></pre>
 *
 *
 * This component allows you to put request/answer in the local storage and avoid
 * reloading datas if you're doing the same request multiple times.
 * You have to specify a number of times a request can be called before refreshing it :
 *          -in your Ext.ajax.request add : <code><pre> nbRequestBeforeRefresh : int, </code></pre>  int => number of request
 *
 */

Ext.define('NijiLibrary.controller.connection.bridge', {
    override: 'Ext.data.Connection',
    requires: ['NijiLibrary.controller.NijiBridgeComponentUtils',
        'NijiLibrary.controller.AjaxPatch'],

    /**
     * When a request is sent, we retrieve her answer from the localstore and simulate a real answer.
     * @param request
     */
    handleRequestCustom: function(request) {
        var myLocalStore = NijiLibrary.controller.NijiBridgeComponentUtils.getLocalStore();
        var currentRequest = NijiLibrary.controller.NijiBridgeComponentUtils.removeTimestamp(request.url);
        if (request.method == "POST") {
            currentRequest = currentRequest + "|" + request.requestText;
        }
        var index = myLocalStore.find('request', currentRequest);
        if (index != -1) {
            request.receive(200, myLocalStore.getAt(index).data.answer);
        }
    },
    /**
     *
     * @param options
     * @return {*}
     */
    request: function(options) {
        options = options || {};
        var me = this,
                scope = options.scope || window,
                username = options.username || me.getUsername(),
                password = options.password || me.getPassword() || '',
                async, requestOptions, request, headers, xhr;

        if (me.fireEvent('beforerequest', me, options) !== false) {
            requestOptions = me.setOptions(options, scope);

            if (this.isFormUpload(options) === true) {
                this.upload(options.form, requestOptions.url, requestOptions.data, options);
                return null;
            }

            // if autoabort is set, cancel the current transactions
            if (options.autoAbort === true || me.getAutoAbort()) {
                me.abort();
            }

            //If the number of request isn't specified, we simply use the standard way to handle a request
            if (typeof (options.nbRequestBeforeRefresh) == 'undefined') {
                xhr = this.getXhrInstance();
            } else {
                //Getting the currentRequest without timesteam
                var currentRequest = NijiLibrary.controller.NijiBridgeComponentUtils.removeTimestamp(requestOptions.url);

                // If the request is using the post method, we have to create a custom request slightly different
                if (requestOptions.method == "POST") {
                    currentRequest = currentRequest + "|" + requestOptions.data;
                }

                //Getting the store using the localstorage
                var myLocalStore = NijiLibrary.controller.NijiBridgeComponentUtils.getLocalStore();
                var indexRequest = myLocalStore.find('request', currentRequest);

                //Creating boolean depending on the presence of the currentRequest in store
                var isRequestInStore = (indexRequest != -1) ? true : false;

                //Creating a variable containing how many request we have to do before refreshing datas
                var nbRequestBeforeRefresh;
                if (isRequestInStore) {
                    nbRequestBeforeRefresh = myLocalStore.getAt(indexRequest).data.nbRequestBeforeRefresh;
                } else {
                    nbRequestBeforeRefresh = options.nbRequestBeforeRefresh;
                }

                //Updating nbRequestBeforeRefresh or refreshing the results of the request
                var hasToRefresh = false;
                if (nbRequestBeforeRefresh == 0) {
                    hasToRefresh = true;
                    nbRequestBeforeRefresh = options.nbRequestBeforeRefresh;
                } else {
                    hasToRefresh = false;
                    nbRequestBeforeRefresh = nbRequestBeforeRefresh - 1;
                }

                //Eventually if the request is in store, we update his datas.
                if (isRequestInStore) {
                    var record = myLocalStore.getAt(indexRequest);
                    record.set({nbRequestBeforeRefresh: nbRequestBeforeRefresh});
                    myLocalStore.sync();
                }

                //Test if the request is already in store or not.
                //If not, we use the standard way to handle request
                if (!isRequestInStore || hasToRefresh) {
                    xhr = this.getXhrInstance();
                    //Adding a listener to get the request's answer in order to store it
                    xhr.onload = Ext.Function.bind(me.requestListener, xhr, [currentRequest, nbRequestBeforeRefresh]);
                } else {
                    //If it's already in store, we use the customXhrInstance, which will handle the request
                    //and put the answer in the localstorage.
                    xhr = this.getXhrInstanceCustom();
                }
            }

            async = options.async !== false ? (options.async || me.getAsync()) : false;

            // open the request
            if (username) {
                xhr.open(requestOptions.method, requestOptions.url, async, username, password);
            } else {
                xhr.open(requestOptions.method, requestOptions.url, async);
            }

            headers = me.setupHeaders(xhr, options, requestOptions.data, requestOptions.params);

            // create the transaction object
            request = {
                id: ++Ext.data.Connection.requestId,
                xhr: xhr,
                headers: headers,
                options: options,
                async: async,
                timeout: setTimeout(function() {
                    request.timedout = true;
                    me.abort(request);
                }, options.timeout || me.getTimeout())
            };
            me.requests[request.id] = request;

            // bind our statechange listener
            if (async) {
                xhr.onreadystatechange = Ext.Function.bind(me.onStateChange, me, [request]);
            }

            // start the request!
            xhr.send(requestOptions.data);
            if (!async) {
                return this.onComplete(request);
            }
            return request;
        } else {
            Ext.callback(options.callback, options.scope, [options, undefined, undefined]);
            return null;
        }
    },

    /**
     * Put the request, her answer and number of request before refresh in the local storage.
     * @param request
     * @param nbRequestBeforeRefresh
     */
    requestListener: function(request, nbRequestBeforeRefresh) {
        var myLocalStore = NijiLibrary.controller.NijiBridgeComponentUtils.getLocalStore();
        var index = myLocalStore.find('request', request);
        //Test if the request is already stored, if not, store it with his answer
        if (index == -1 && this.status == 200) {
            myLocalStore.add({request: request, answer: this.responseText, nbRequestBeforeRefresh: nbRequestBeforeRefresh});
            myLocalStore.sync();
        }
    },
    abort: function(request) {
        var me = this,
                requests = me.requests,
                id;

        if (request && me.isLoading(request)) {
            /*
             * Clear out the onreadystatechange here, this allows us
             * greater control, the browser may/may not fire the function
             * depending on a series of conditions.
             */
            // Modification to not clearout onreadystatechange in order to fix MockHttpRequest failling
            //request.xhr.onreadystatechange = null;
            request.xhr.abort();
            me.clearTimeout(request);
            if (!request.timedout) {
                request.aborted = true;
            }
            me.onComplete(request);
            me.cleanup(request);
        } else if (!request) {
            for (id in requests) {
                if (requests.hasOwnProperty(id)) {
                    me.abort(requests[id]);
                }
            }
        }
    },

    /**
     * call handleRequestCustom whenever a request is sent
     * @return {*}
     */
    getXhrInstanceCustom: (function() {
        var options = [function() {
                var server = new MockHttpServer(this.handleRequestCustom);
                server.start();
                var CustomHttpRequest = XMLHttpRequest;
                server.stop();
                return new CustomHttpRequest();
            }], i = 0,
                len = options.length,
                xhr;

        for (; i < len; ++i) {
            try {
                xhr = options[i];
                xhr();
                break;
            } catch (e) {
            }
        }
        return xhr;
    })()
});