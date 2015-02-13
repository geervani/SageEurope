Ext.data.JsonP.Ext_direct_JsonProvider({"tagname":"class","name":"Ext.direct.JsonProvider","extends":"Ext.direct.Provider","mixins":[],"alternateClassNames":[],"aliases":{"direct":["jsonprovider"]},"singleton":false,"requires":[],"uses":["Ext.direct.ExceptionEvent"],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"abstract":true},"private":null,"id":"class-Ext.direct.JsonProvider","code_type":"ext_define","members":{"cfg":[{"name":"id","tagname":"cfg","owner":"Ext.direct.Provider","meta":{},"id":"cfg-id"}],"property":[],"method":[{"name":"applyId","tagname":"method","owner":"Ext.direct.Provider","meta":{"private":true},"id":"method-applyId"},{"name":"connect","tagname":"method","owner":"Ext.direct.Provider","meta":{},"id":"method-connect"},{"name":"createEvent","tagname":"method","owner":"Ext.direct.JsonProvider","meta":{},"id":"method-createEvent"},{"name":"createEvents","tagname":"method","owner":"Ext.direct.JsonProvider","meta":{"private":true},"id":"method-createEvents"},{"name":"disconnect","tagname":"method","owner":"Ext.direct.Provider","meta":{},"id":"method-disconnect"},{"name":"getId","tagname":"method","owner":"Ext.direct.Provider","meta":{},"id":"method-getId"},{"name":"isConnected","tagname":"method","owner":"Ext.direct.Provider","meta":{},"id":"method-isConnected"},{"name":"parseResponse","tagname":"method","owner":"Ext.direct.JsonProvider","meta":{"private":true},"id":"method-parseResponse"},{"name":"setId","tagname":"method","owner":"Ext.direct.Provider","meta":{},"id":"method-setId"}],"event":[{"name":"connect","tagname":"event","owner":"Ext.direct.Provider","meta":{},"id":"event-connect"},{"name":"data","tagname":"event","owner":"Ext.direct.Provider","meta":{},"id":"event-data"},{"name":"disconnect","tagname":"event","owner":"Ext.direct.Provider","meta":{},"id":"event-disconnect"},{"name":"exception","tagname":"event","owner":"Ext.direct.Provider","meta":{},"id":"event-exception"}],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"JsonProvider.js","href":"JsonProvider.html#Ext-direct-JsonProvider"}],"html_meta":{"abstract":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base","Ext.direct.Provider"],"subclasses":[],"mixedInto":[],"parentMixins":["Ext.mixin.Observable"],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.direct.Provider' rel='Ext.direct.Provider' class='docClass'>Ext.direct.Provider</a><div class='subclass '><strong>Ext.direct.JsonProvider</strong></div></div></div><h4>Inherited mixins</h4><div class='dependency'>Ext.mixin.Observable</div><h4>Uses</h4><div class='dependency'><a href='#!/api/Ext.direct.ExceptionEvent' rel='Ext.direct.ExceptionEvent' class='docClass'>Ext.direct.ExceptionEvent</a></div><h4>Files</h4><div class='dependency'><a href='source/JsonProvider.html#Ext-direct-JsonProvider' target='_blank'>JsonProvider.js</a></div></pre><div class='doc-contents'><p>A base provider for communicating using JSON. This is an abstract class\nand should not be instanced directly.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-id' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.direct.Provider' rel='Ext.direct.Provider' class='defined-in docClass'>Ext.direct.Provider</a><br/><a href='source/Provider.html#Ext-direct-Provider-cfg-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-cfg-id' class='name expandable'>id</a><span> : String</span></div><div class='description'><div class='short'>The unique id of the provider (defaults to an auto-assigned id). ...</div><div class='long'><p>The unique id of the provider (defaults to an auto-assigned id).\nYou should assign an id if you need to be able to access the provider later and you do\nnot have an object reference available, for example:</p>\n\n<pre><code>Ext.direct.Manager.addProvider({\n    type: 'polling',\n    url:  'php/poll.php',\n    id:   'poll-provider'\n});\nvar p = Ext.direct.Manager.getProvider('poll-provider');\np.disconnect();\n</code></pre>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-applyId' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.direct.Provider' rel='Ext.direct.Provider' class='defined-in docClass'>Ext.direct.Provider</a><br/><a href='source/Provider.html#Ext-direct-Provider-method-applyId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-method-applyId' class='name expandable'>applyId</a>( <span class='pre'>id</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-connect' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.direct.Provider' rel='Ext.direct.Provider' class='defined-in docClass'>Ext.direct.Provider</a><br/><a href='source/Provider.html#Ext-direct-Provider-method-connect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-method-connect' class='name expandable'>connect</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract methods for subclasses to implement. ...</div><div class='long'><p>Abstract methods for subclasses to implement.</p>\n</div></div></div><div id='method-createEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.JsonProvider'>Ext.direct.JsonProvider</span><br/><a href='source/JsonProvider.html#Ext-direct-JsonProvider-method-createEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.JsonProvider-method-createEvent' class='name expandable'>createEvent</a>( <span class='pre'>response</span> ) : Ext.direct.Event</div><div class='description'><div class='short'>Create an event from a response object. ...</div><div class='long'><p>Create an event from a response object.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>response</span> : Object<div class='sub-desc'><p>The XHR response object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.direct.Event</span><div class='sub-desc'><p>The event.</p>\n</div></li></ul></div></div></div><div id='method-createEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.JsonProvider'>Ext.direct.JsonProvider</span><br/><a href='source/JsonProvider.html#Ext-direct-JsonProvider-method-createEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.JsonProvider-method-createEvents' class='name expandable'>createEvents</a>( <span class='pre'>response</span> ) : Ext.direct.Event[]<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Creates a set of events based on the XHR response. ...</div><div class='long'><p>Creates a set of events based on the XHR response.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>response</span> : Object<div class='sub-desc'><p>The XHR response.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.direct.Event[]</span><div class='sub-desc'><p>An array of Ext.direct.Event objects.</p>\n</div></li></ul></div></div></div><div id='method-disconnect' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.direct.Provider' rel='Ext.direct.Provider' class='defined-in docClass'>Ext.direct.Provider</a><br/><a href='source/Provider.html#Ext-direct-Provider-method-disconnect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-method-disconnect' class='name expandable'>disconnect</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Abstract methods for subclasses to implement. ...</div><div class='long'><p>Abstract methods for subclasses to implement.</p>\n</div></div></div><div id='method-getId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.direct.Provider' rel='Ext.direct.Provider' class='defined-in docClass'>Ext.direct.Provider</a><br/><a href='source/Provider.html#Ext-direct-Provider-cfg-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-method-getId' class='name expandable'>getId</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of id. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.direct.Provider-cfg-id\" rel=\"Ext.direct.Provider-cfg-id\" class=\"docClass\">id</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isConnected' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.direct.Provider' rel='Ext.direct.Provider' class='defined-in docClass'>Ext.direct.Provider</a><br/><a href='source/Provider.html#Ext-direct-Provider-method-isConnected' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-method-isConnected' class='name expandable'>isConnected</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns whether or not the server-side is currently connected. ...</div><div class='long'><p>Returns whether or not the server-side is currently connected.\nAbstract method for subclasses to implement.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-parseResponse' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.JsonProvider'>Ext.direct.JsonProvider</span><br/><a href='source/JsonProvider.html#Ext-direct-JsonProvider-method-parseResponse' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.JsonProvider-method-parseResponse' class='name expandable'>parseResponse</a>( <span class='pre'>response</span> ) : Object<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Parse the JSON response. ...</div><div class='long'><p>Parse the JSON response.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>response</span> : Object<div class='sub-desc'><p>The XHR response object.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The data in the response.</p>\n</div></li></ul></div></div></div><div id='method-setId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.direct.Provider' rel='Ext.direct.Provider' class='defined-in docClass'>Ext.direct.Provider</a><br/><a href='source/Provider.html#Ext-direct-Provider-cfg-id' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-method-setId' class='name expandable'>setId</a>( <span class='pre'>id</span> )</div><div class='description'><div class='short'>Sets the value of id. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.direct.Provider-cfg-id\" rel=\"Ext.direct.Provider-cfg-id\" class=\"docClass\">id</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-connect' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.direct.Provider' rel='Ext.direct.Provider' class='defined-in docClass'>Ext.direct.Provider</a><br/><a href='source/Provider.html#Ext-direct-Provider-event-connect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-event-connect' class='name expandable'>connect</a>( <span class='pre'>provider, eOpts</span> )</div><div class='description'><div class='short'>Fires when the Provider connects to the server-side ...</div><div class='long'><p>Fires when the Provider connects to the server-side</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>provider</span> : <a href=\"#!/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Ext.direct.Provider</a><div class='sub-desc'><p>The <a href=\"#!/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Provider</a>.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-data' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.direct.Provider' rel='Ext.direct.Provider' class='defined-in docClass'>Ext.direct.Provider</a><br/><a href='source/Provider.html#Ext-direct-Provider-event-data' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-event-data' class='name expandable'>data</a>( <span class='pre'>provider, e, eOpts</span> )</div><div class='description'><div class='short'>Fires when the Provider receives data from the server-side ...</div><div class='long'><p>Fires when the Provider receives data from the server-side</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>provider</span> : <a href=\"#!/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Ext.direct.Provider</a><div class='sub-desc'><p>The <a href=\"#!/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Provider</a>.</p>\n</div></li><li><span class='pre'>e</span> : Ext.direct.Event<div class='sub-desc'><p>The Ext.direct.Event type that occurred.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-disconnect' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.direct.Provider' rel='Ext.direct.Provider' class='defined-in docClass'>Ext.direct.Provider</a><br/><a href='source/Provider.html#Ext-direct-Provider-event-disconnect' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-event-disconnect' class='name expandable'>disconnect</a>( <span class='pre'>provider, eOpts</span> )</div><div class='description'><div class='short'>Fires when the Provider disconnects from the server-side ...</div><div class='long'><p>Fires when the Provider disconnects from the server-side</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>provider</span> : <a href=\"#!/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Ext.direct.Provider</a><div class='sub-desc'><p>The <a href=\"#!/api/Ext.direct.Provider\" rel=\"Ext.direct.Provider\" class=\"docClass\">Provider</a>.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-exception' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.direct.Provider' rel='Ext.direct.Provider' class='defined-in docClass'>Ext.direct.Provider</a><br/><a href='source/Provider.html#Ext-direct-Provider-event-exception' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.Provider-event-exception' class='name expandable'>exception</a>( <span class='pre'>eOpts</span> )</div><div class='description'><div class='short'>Fires when the Provider receives an exception from the server-side ...</div><div class='long'><p>Fires when the Provider receives an exception from the server-side</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>"});