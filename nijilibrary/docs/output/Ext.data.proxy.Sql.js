Ext.data.JsonP.Ext_data_proxy_Sql({"tagname":"class","name":"Ext.data.proxy.Sql","extends":"Ext.data.proxy.Client","mixins":[],"alternateClassNames":["Ext.data.proxy.SQL"],"aliases":{"proxy":["sql"]},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ext.data.proxy.Sql","code_type":"ext_define","members":{"cfg":[{"name":"columns","tagname":"cfg","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"cfg-columns"},{"name":"database","tagname":"cfg","owner":"Ext.data.proxy.Sql","meta":{},"id":"cfg-database"},{"name":"defaultDateFormat","tagname":"cfg","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"cfg-defaultDateFormat"},{"name":"table","tagname":"cfg","owner":"Ext.data.proxy.Sql","meta":{},"id":"cfg-table"},{"name":"tableExists","tagname":"cfg","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"cfg-tableExists"},{"name":"uniqueIdStrategy","tagname":"cfg","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"cfg-uniqueIdStrategy"}],"property":[{"name":"isSQLProxy","tagname":"property","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"property-isSQLProxy"}],"method":[{"name":"clear","tagname":"method","owner":"Ext.data.proxy.Client","meta":{},"id":"method-clear"},{"name":"convertToSqlType","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"method-convertToSqlType"},{"name":"create","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"method-create"},{"name":"createTable","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"method-createTable"},{"name":"destroy","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"method-destroy"},{"name":"destroyRecords","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"method-destroyRecords"},{"name":"dropTable","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"method-dropTable"},{"name":"getColumnValues","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"method-getColumnValues"},{"name":"getColumns","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{},"id":"method-getColumns"},{"name":"getDatabase","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{},"id":"method-getDatabase"},{"name":"getDatabaseObject","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"method-getDatabaseObject"},{"name":"getDefaultDateFormat","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{},"id":"method-getDefaultDateFormat"},{"name":"getPersistedModelColumns","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"method-getPersistedModelColumns"},{"name":"getRecordData","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{},"id":"method-getRecordData"},{"name":"getSchemaString","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"method-getSchemaString"},{"name":"getTable","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{},"id":"method-getTable"},{"name":"getTableExists","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{},"id":"method-getTableExists"},{"name":"getUniqueIdStrategy","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{},"id":"method-getUniqueIdStrategy"},{"name":"insertRecords","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"method-insertRecords"},{"name":"read","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"method-read"},{"name":"selectRecords","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"method-selectRecords"},{"name":"setColumns","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{},"id":"method-setColumns"},{"name":"setDatabase","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{},"id":"method-setDatabase"},{"name":"setDefaultDateFormat","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{},"id":"method-setDefaultDateFormat"},{"name":"setTable","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{},"id":"method-setTable"},{"name":"setTableExists","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{},"id":"method-setTableExists"},{"name":"setUniqueIdStrategy","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{},"id":"method-setUniqueIdStrategy"},{"name":"update","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"method-update"},{"name":"updateModel","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"method-updateModel"},{"name":"updateRecords","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"method-updateRecords"},{"name":"writeDate","tagname":"method","owner":"Ext.data.proxy.Sql","meta":{"private":true},"id":"method-writeDate"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Sql.js","href":"Sql.html#Ext-data-proxy-Sql"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.data.proxy.Proxy","Ext.data.proxy.Client"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.data.proxy.SQL</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.proxy.Proxy<div class='subclass '><a href='#!/api/Ext.data.proxy.Client' rel='Ext.data.proxy.Client' class='docClass'>Ext.data.proxy.Client</a><div class='subclass '><strong>Ext.data.proxy.Sql</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Sql.html#Ext-data-proxy-Sql' target='_blank'>Sql.js</a></div></pre><div class='doc-contents'><p>SQL proxy.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-columns' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-cfg-columns' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-cfg-columns' class='name expandable'>columns</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='cfg-database' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-cfg-database' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-cfg-database' class='name expandable'>database</a><span> : String</span></div><div class='description'><div class='short'>Database name to access tables from ...</div><div class='long'><p>Database name to access tables from</p>\n<p>Defaults to: <code>'Sencha'</code></p></div></div></div><div id='cfg-defaultDateFormat' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-cfg-defaultDateFormat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-cfg-defaultDateFormat' class='name expandable'>defaultDateFormat</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'Y-m-d H:i:s.u'</code></p></div></div></div><div id='cfg-table' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-cfg-table' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-cfg-table' class='name not-expandable'>table</a><span> : String</span></div><div class='description'><div class='short'><p>Optional Table name to use if not provided ModelName will be used</p>\n</div><div class='long'><p>Optional Table name to use if not provided ModelName will be used</p>\n</div></div></div><div id='cfg-tableExists' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-cfg-tableExists' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-cfg-tableExists' class='name expandable'>tableExists</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-uniqueIdStrategy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-cfg-uniqueIdStrategy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-cfg-uniqueIdStrategy' class='name expandable'>uniqueIdStrategy</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-isSQLProxy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-property-isSQLProxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-property-isSQLProxy' class='name expandable'>isSQLProxy</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-clear' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.data.proxy.Client' rel='Ext.data.proxy.Client' class='defined-in docClass'>Ext.data.proxy.Client</a><br/><a href='source/Client.html#Ext-data-proxy-Client-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Client-method-clear' class='name expandable'>clear</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract function that must be implemented by each ClientProxy subclass. ...</div><div class='long'><p>Abstract function that must be implemented by each ClientProxy subclass. This should purge all record data\nfrom the client side storage, as well as removing any supporting data (such as lists of record IDs)</p>\n</div></div></div><div id='method-convertToSqlType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-method-convertToSqlType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-convertToSqlType' class='name expandable'>convertToSqlType</a>( <span class='pre'>type</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-create' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-create' class='name expandable'>create</a>( <span class='pre'>operation, callback, scope</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>operation</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createTable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-method-createTable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-createTable' class='name expandable'>createTable</a>( <span class='pre'>transaction</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>transaction</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-destroy' class='name expandable'>destroy</a>( <span class='pre'>operation, callback, scope</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>operation</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroyRecords' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-method-destroyRecords' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-destroyRecords' class='name expandable'>destroyRecords</a>( <span class='pre'>transaction, records, callback, scope</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>transaction</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>records</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-dropTable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-method-dropTable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-dropTable' class='name expandable'>dropTable</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getColumnValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-method-getColumnValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-getColumnValues' class='name expandable'>getColumnValues</a>( <span class='pre'>columns, data</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>columns</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getColumns' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-cfg-columns' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-getColumns' class='name expandable'>getColumns</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of columns. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.proxy.Sql-cfg-columns\" rel=\"Ext.data.proxy.Sql-cfg-columns\" class=\"docClass\">columns</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDatabase' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-cfg-database' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-getDatabase' class='name expandable'>getDatabase</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of database. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.proxy.Sql-cfg-database\" rel=\"Ext.data.proxy.Sql-cfg-database\" class=\"docClass\">database</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDatabaseObject' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-method-getDatabaseObject' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-getDatabaseObject' class='name expandable'>getDatabaseObject</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getDefaultDateFormat' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-cfg-defaultDateFormat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-getDefaultDateFormat' class='name expandable'>getDefaultDateFormat</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of defaultDateFormat. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.proxy.Sql-cfg-defaultDateFormat\" rel=\"Ext.data.proxy.Sql-cfg-defaultDateFormat\" class=\"docClass\">defaultDateFormat</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPersistedModelColumns' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-method-getPersistedModelColumns' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-getPersistedModelColumns' class='name expandable'>getPersistedModelColumns</a>( <span class='pre'>model</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRecordData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-method-getRecordData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-getRecordData' class='name expandable'>getRecordData</a>( <span class='pre'>record</span> ) : Object</div><div class='description'><div class='short'>Formats the data for each record before sending it to the server. ...</div><div class='long'><p>Formats the data for each record before sending it to the server. This\nmethod should be overridden to format the data in a way that differs from the default.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'><p>The record that we are writing to the server.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object literal of name/value keys to be written to the server.\nBy default this method returns the data property on the record.</p>\n</div></li></ul></div></div></div><div id='method-getSchemaString' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-method-getSchemaString' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-getSchemaString' class='name expandable'>getSchemaString</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getTable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-cfg-table' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-getTable' class='name expandable'>getTable</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of table. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.proxy.Sql-cfg-table\" rel=\"Ext.data.proxy.Sql-cfg-table\" class=\"docClass\">table</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTableExists' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-cfg-tableExists' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-getTableExists' class='name expandable'>getTableExists</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of tableExists. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.proxy.Sql-cfg-tableExists\" rel=\"Ext.data.proxy.Sql-cfg-tableExists\" class=\"docClass\">tableExists</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getUniqueIdStrategy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-cfg-uniqueIdStrategy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-getUniqueIdStrategy' class='name expandable'>getUniqueIdStrategy</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of uniqueIdStrategy. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.proxy.Sql-cfg-uniqueIdStrategy\" rel=\"Ext.data.proxy.Sql-cfg-uniqueIdStrategy\" class=\"docClass\">uniqueIdStrategy</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-insertRecords' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-method-insertRecords' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-insertRecords' class='name expandable'>insertRecords</a>( <span class='pre'>records, transaction, callback, scope</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>records</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>transaction</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-read' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-method-read' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-read' class='name expandable'>read</a>( <span class='pre'>operation, callback, scope</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>operation</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-selectRecords' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-method-selectRecords' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-selectRecords' class='name expandable'>selectRecords</a>( <span class='pre'>transaction, params, callback, scope</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>transaction</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>params</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setColumns' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-cfg-columns' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-setColumns' class='name expandable'>setColumns</a>( <span class='pre'>columns</span> )</div><div class='description'><div class='short'>Sets the value of columns. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.proxy.Sql-cfg-columns\" rel=\"Ext.data.proxy.Sql-cfg-columns\" class=\"docClass\">columns</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>columns</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setDatabase' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-cfg-database' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-setDatabase' class='name expandable'>setDatabase</a>( <span class='pre'>database</span> )</div><div class='description'><div class='short'>Sets the value of database. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.proxy.Sql-cfg-database\" rel=\"Ext.data.proxy.Sql-cfg-database\" class=\"docClass\">database</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>database</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setDefaultDateFormat' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-cfg-defaultDateFormat' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-setDefaultDateFormat' class='name expandable'>setDefaultDateFormat</a>( <span class='pre'>defaultDateFormat</span> )</div><div class='description'><div class='short'>Sets the value of defaultDateFormat. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.proxy.Sql-cfg-defaultDateFormat\" rel=\"Ext.data.proxy.Sql-cfg-defaultDateFormat\" class=\"docClass\">defaultDateFormat</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>defaultDateFormat</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setTable' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-cfg-table' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-setTable' class='name expandable'>setTable</a>( <span class='pre'>table</span> )</div><div class='description'><div class='short'>Sets the value of table. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.proxy.Sql-cfg-table\" rel=\"Ext.data.proxy.Sql-cfg-table\" class=\"docClass\">table</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>table</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setTableExists' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-cfg-tableExists' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-setTableExists' class='name expandable'>setTableExists</a>( <span class='pre'>tableExists</span> )</div><div class='description'><div class='short'>Sets the value of tableExists. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.proxy.Sql-cfg-tableExists\" rel=\"Ext.data.proxy.Sql-cfg-tableExists\" class=\"docClass\">tableExists</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>tableExists</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setUniqueIdStrategy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-cfg-uniqueIdStrategy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-setUniqueIdStrategy' class='name expandable'>setUniqueIdStrategy</a>( <span class='pre'>uniqueIdStrategy</span> )</div><div class='description'><div class='short'>Sets the value of uniqueIdStrategy. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.proxy.Sql-cfg-uniqueIdStrategy\" rel=\"Ext.data.proxy.Sql-cfg-uniqueIdStrategy\" class=\"docClass\">uniqueIdStrategy</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>uniqueIdStrategy</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-update' class='name expandable'>update</a>( <span class='pre'>operation, callback, scope</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>operation</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-method-updateModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-updateModel' class='name expandable'>updateModel</a>( <span class='pre'>model</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>model</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateRecords' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-method-updateRecords' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-updateRecords' class='name expandable'>updateRecords</a>( <span class='pre'>transaction, records, callback, scope</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>transaction</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>records</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-writeDate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.proxy.Sql'>Ext.data.proxy.Sql</span><br/><a href='source/Sql.html#Ext-data-proxy-Sql-method-writeDate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.proxy.Sql-method-writeDate' class='name expandable'>writeDate</a>( <span class='pre'>field, date</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>field</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>date</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});