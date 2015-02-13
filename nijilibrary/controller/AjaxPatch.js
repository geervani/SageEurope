/**
 * @class NijiLibrary.controller.AjaxPatch
 * This class contains the methods required for the Bridge component
 * 
 * AjaxPatch
 */
Ext.define('NijiLibrary.controller.AjaxPatch', {
     override: 'Ext.data.proxy.Ajax',
     
     /* Change AjaxProxy doRequest to add jsonData in request */
    doRequest: function(operation, callback, scope) {
        var me = this,
            writer  = me.getWriter(),
            request = me.buildRequest(operation);
        request.setConfig({
            headers  : me.getHeaders(),
            timeout  : me.getTimeout(),
            method   : me.getMethod(request),
            callback : me.createRequestCallback(request, operation, callback, scope),
            scope    : me,
            proxy    : me,
            loadingMessage: me.config.loadingMessage,
            nbRequestBeforeRefresh: me.config.nbRequestBeforeRefresh
        });
        if(me.config.jsonData) {
            request.setConfig({
                jsonData  : me.config.jsonData
            });
        }

        if (operation.getWithCredentials() || me.getWithCredentials()) {
            request.setWithCredentials(true);
            request.setUsername(me.getUsername());
            request.setPassword(me.getPassword());
        }

        // We now always have the writer prepare the request
        request = writer.write(request);
        var conf = request.getCurrentConfig();
        conf.loadingMessage = me.config.loadingMessage;
        conf.nbRequestBeforeRefresh = me.config.nbRequestBeforeRefresh;
        Ext.Ajax.request(conf);

        return request;
    }
 });
