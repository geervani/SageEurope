Ext.data.JsonP.Ext_data_DirectStore({"tagname":"class","name":"Ext.data.DirectStore","extends":"Ext.data.Store","mixins":[],"alternateClassNames":[],"aliases":{"store":["direct"]},"singleton":false,"requires":["Ext.data.proxy.Direct"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"aside":[{"type":"guide","name":"stores"}]},"private":null,"id":"class-Ext.data.DirectStore","code_type":"ext_define","members":{"cfg":[{"name":"proxy","tagname":"cfg","owner":"Ext.data.DirectStore","meta":{"private":true},"id":"cfg-proxy"}],"property":[],"method":[{"name":"getProxy","tagname":"method","owner":"Ext.data.DirectStore","meta":{},"id":"method-getProxy"},{"name":"setProxy","tagname":"method","owner":"Ext.data.DirectStore","meta":{},"id":"method-setProxy"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"DirectStore.js","href":"DirectStore.html#Ext-data-DirectStore"}],"html_meta":{"aside":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.data.Store"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Store<div class='subclass '><strong>Ext.data.DirectStore</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.data.proxy.Direct' rel='Ext.data.proxy.Direct' class='docClass'>Ext.data.proxy.Direct</a></div><h4>Files</h4><div class='dependency'><a href='source/DirectStore.html#Ext-data-DirectStore' target='_blank'>DirectStore.js</a></div></pre><div class='doc-contents'><p>Small helper class to create an Ext.data.Store configured with an <a href=\"#!/api/Ext.data.proxy.Direct\" rel=\"Ext.data.proxy.Direct\" class=\"docClass\">Ext.data.proxy.Direct</a>\nand <a href=\"#!/api/Ext.data.reader.Json\" rel=\"Ext.data.reader.Json\" class=\"docClass\">Ext.data.reader.Json</a> to make interacting with an Ext.direct.Manager server-side\n<a href=\"#!/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Provider</a> easier. To create a different proxy/reader combination create a basic\nExt.data.Store configured as needed.</p>\n\n<p>Since configurations are deeply merged with the standard configuration, you can override certain proxy and\nreader configurations like this:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.data.DirectStore\" rel=\"Ext.data.DirectStore\" class=\"docClass\">Ext.data.DirectStore</a>', {\n    proxy: {\n        paramsAsHash: true,\n        directFn: someDirectFn,\n        simpleSortMode: true,\n        reader: {\n            rootProperty: 'results',\n            idProperty: '_id'\n        }\n    }\n});\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-proxy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DirectStore'>Ext.data.DirectStore</span><br/><a href='source/DirectStore.html#Ext-data-DirectStore-cfg-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DirectStore-cfg-proxy' class='name expandable'>proxy</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{type: 'direct', reader: {type: 'json'}}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getProxy' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DirectStore'>Ext.data.DirectStore</span><br/><a href='source/DirectStore.html#Ext-data-DirectStore-cfg-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DirectStore-method-getProxy' class='name expandable'>getProxy</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of proxy. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.DirectStore-cfg-proxy\" rel=\"Ext.data.DirectStore-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.DirectStore'>Ext.data.DirectStore</span><br/><a href='source/DirectStore.html#Ext-data-DirectStore-cfg-proxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.DirectStore-method-setProxy' class='name expandable'>setProxy</a>( <span class='pre'>proxy</span> )</div><div class='description'><div class='short'>Sets the value of proxy. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.DirectStore-cfg-proxy\" rel=\"Ext.data.DirectStore-cfg-proxy\" class=\"docClass\">proxy</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>proxy</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});