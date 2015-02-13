/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 01/10/13
 *
 * @class SageCME.prox.HermesJSProxy
 *
 * This proxy request data on HermesJS
 */

Ext.define('SageCME.prox.HermesJSProxy', {
    extend : 'Ext.data.proxy.Server',

    requires : [
        'Ext.util.MixedCollection',
        'SageCME.singleton.HermesJSManager'
    ],
    alias    : 'proxy.hermesjs',

    config : {
        /**
         * @config {Boolean} [dataType=false] set to true to retreive lists
         */
        fetchList : false,

        /**
         * @config {String} [resourceKind=''] the HermesJS resource. For
         * example : "customer" is a valid resource
         */
        resourceKind : '',

        /**
         * @config {String} [listId='ALL'] limit results to a given list
         */
        listId : "ALL",

        /**
         * @config {Object} [order={}] order properties. It's an object of object properties with asc/desc as value.
         * For example, this is a correct value :
         * {
         *      name: 'asc'
         * }
         */
        order : {},

        /**
         * Additionnal parameters
         */
        extraParams: {},

        /**
         * useless here
         */
        url : 'customer',

        startParam         : 'startIndex',
        limitParam         : 'count',
        noCache            : false,
        enablePagingParams : false
    },

    /**
     * Performs HermesJS data request.
     * @protected
     * @param operation
     * @param callback
     * @param scope
     * @return {Object}
     */
    doRequest : function (operation, callback, scope) {
        var me = this,
            request = me.buildRequest(operation);

        request.setConfig({
                              callback     : me.createSuccessRequestCallback(request, operation, callback, scope),
                              failCallback : me.createFailRequestCallback(request, operation, callback, scope)
                          });

        if (this.getFetchList()) {
            HermesJSManager.getResourceLists({resourceKind : this.getResourceKind()}, this, request.getCallback())
        } else {
            var options = {
                resourceKind : this.getResourceKind(),
                listId       : this.getListId()
            };
            options = Ext.Object.merge(options, request.getParams());

            var orderConfig = this.getOrder();
            if (typeof orderConfig === "object" && Ext.Object.getSize(orderConfig) > 0) {
                var orderBy = "";
                Ext.Object.each(orderConfig, function (property, value) {
                    orderBy += property + " " + value;
                });
                options["orderBy"] = orderBy;
            }

            //<feature logger>
            Ext.Logger.info("loading Hermes resources with options " + options);
            //</feature>

            HermesJSManager.resource(options, this, request.getCallback());
        }
        return request;
    },


    createSuccessRequestCallback : function (request, operation, callback, scope) {
        return this.createRequestCallback(request, operation, callback, scope).bind(scope, {}, true);
    },
    createFailRequestCallback    : function (request, operation, callback, scope) {
        return this.createRequestCallback(request, operation, callback, scope).bind(scope, {}, false);
    },

    /**
     * @private
     * @param {Ext.data.Request} request The Request object.
     * @param {Ext.data.Operation} operation The Operation being executed.
     * @param {Function} callback The callback function to be called when the request completes.
     * This is usually the callback passed to `doRequest`.
     * @param {Object} scope The scope in which to execute the callback function.
     * @return {Function} The callback function.
     */
    createRequestCallback : function (request, operation, callback, scope) {
        var me = this;

        return function (options, success, response) {
            me.processResponse(success, operation, request, response, callback, scope);
        };
    }
});