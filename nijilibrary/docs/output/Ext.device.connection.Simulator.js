Ext.data.JsonP.Ext_device_connection_Simulator({"tagname":"class","name":"Ext.device.connection.Simulator","extends":"Ext.device.connection.Abstract","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"private":true},"private":true,"id":"class-Ext.device.connection.Simulator","code_type":"ext_define","members":{"cfg":[{"name":"online","tagname":"cfg","owner":"Ext.device.connection.Abstract","meta":{"private":true},"id":"cfg-online"},{"name":"type","tagname":"cfg","owner":"Ext.device.connection.Abstract","meta":{"private":true},"id":"cfg-type"}],"property":[{"name":"CELL_2G","tagname":"property","owner":"Ext.device.connection.Abstract","meta":{},"id":"property-CELL_2G"},{"name":"CELL_3G","tagname":"property","owner":"Ext.device.connection.Abstract","meta":{},"id":"property-CELL_3G"},{"name":"CELL_4G","tagname":"property","owner":"Ext.device.connection.Abstract","meta":{},"id":"property-CELL_4G"},{"name":"ETHERNET","tagname":"property","owner":"Ext.device.connection.Abstract","meta":{},"id":"property-ETHERNET"},{"name":"NONE","tagname":"property","owner":"Ext.device.connection.Abstract","meta":{},"id":"property-NONE"},{"name":"UNKNOWN","tagname":"property","owner":"Ext.device.connection.Abstract","meta":{},"id":"property-UNKNOWN"},{"name":"WIFI","tagname":"property","owner":"Ext.device.connection.Abstract","meta":{},"id":"property-WIFI"}],"method":[{"name":"getOnline","tagname":"method","owner":"Ext.device.connection.Simulator","meta":{},"id":"method-getOnline"},{"name":"getType","tagname":"method","owner":"Ext.device.connection.Abstract","meta":{},"id":"method-getType"},{"name":"isOnline","tagname":"method","owner":"Ext.device.connection.Abstract","meta":{},"id":"method-isOnline"},{"name":"setOnline","tagname":"method","owner":"Ext.device.connection.Abstract","meta":{},"id":"method-setOnline"},{"name":"setType","tagname":"method","owner":"Ext.device.connection.Abstract","meta":{},"id":"method-setType"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Simulator.js","href":"Simulator2.html#Ext-device-connection-Simulator"}],"html_meta":{"private":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base","Ext.device.connection.Abstract"],"subclasses":[],"mixedInto":[],"parentMixins":["Ext.mixin.Observable"],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.device.connection.Abstract' rel='Ext.device.connection.Abstract' class='docClass'>Ext.device.connection.Abstract</a><div class='subclass '><strong>Ext.device.connection.Simulator</strong></div></div></div><h4>Inherited mixins</h4><div class='dependency'>Ext.mixin.Observable</div><h4>Files</h4><div class='dependency'><a href='source/Simulator2.html#Ext-device-connection-Simulator' target='_blank'>Simulator.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-online' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.device.connection.Abstract' rel='Ext.device.connection.Abstract' class='defined-in docClass'>Ext.device.connection.Abstract</a><br/><a href='source/Abstract3.html#Ext-device-connection-Abstract-cfg-online' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.connection.Abstract-cfg-online' class='name expandable'>online</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-type' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.device.connection.Abstract' rel='Ext.device.connection.Abstract' class='defined-in docClass'>Ext.device.connection.Abstract</a><br/><a href='source/Abstract3.html#Ext-device-connection-Abstract-cfg-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.connection.Abstract-cfg-type' class='name not-expandable'>type</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-CELL_2G' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.device.connection.Abstract' rel='Ext.device.connection.Abstract' class='defined-in docClass'>Ext.device.connection.Abstract</a><br/><a href='source/Abstract3.html#Ext-device-connection-Abstract-property-CELL_2G' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.connection.Abstract-property-CELL_2G' class='name expandable'>CELL_2G</a><span> : String</span></div><div class='description'><div class='short'>Text label for a connection type. ...</div><div class='long'><p>Text label for a connection type.</p>\n<p>Defaults to: <code>'Cell 2G connection'</code></p></div></div></div><div id='property-CELL_3G' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.device.connection.Abstract' rel='Ext.device.connection.Abstract' class='defined-in docClass'>Ext.device.connection.Abstract</a><br/><a href='source/Abstract3.html#Ext-device-connection-Abstract-property-CELL_3G' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.connection.Abstract-property-CELL_3G' class='name expandable'>CELL_3G</a><span> : String</span></div><div class='description'><div class='short'>Text label for a connection type. ...</div><div class='long'><p>Text label for a connection type.</p>\n<p>Defaults to: <code>'Cell 3G connection'</code></p></div></div></div><div id='property-CELL_4G' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.device.connection.Abstract' rel='Ext.device.connection.Abstract' class='defined-in docClass'>Ext.device.connection.Abstract</a><br/><a href='source/Abstract3.html#Ext-device-connection-Abstract-property-CELL_4G' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.connection.Abstract-property-CELL_4G' class='name expandable'>CELL_4G</a><span> : String</span></div><div class='description'><div class='short'>Text label for a connection type. ...</div><div class='long'><p>Text label for a connection type.</p>\n<p>Defaults to: <code>'Cell 4G connection'</code></p></div></div></div><div id='property-ETHERNET' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.device.connection.Abstract' rel='Ext.device.connection.Abstract' class='defined-in docClass'>Ext.device.connection.Abstract</a><br/><a href='source/Abstract3.html#Ext-device-connection-Abstract-property-ETHERNET' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.connection.Abstract-property-ETHERNET' class='name expandable'>ETHERNET</a><span> : String</span></div><div class='description'><div class='short'>Text label for a connection type. ...</div><div class='long'><p>Text label for a connection type.</p>\n<p>Defaults to: <code>'Ethernet connection'</code></p></div></div></div><div id='property-NONE' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.device.connection.Abstract' rel='Ext.device.connection.Abstract' class='defined-in docClass'>Ext.device.connection.Abstract</a><br/><a href='source/Abstract3.html#Ext-device-connection-Abstract-property-NONE' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.connection.Abstract-property-NONE' class='name expandable'>NONE</a><span> : String</span></div><div class='description'><div class='short'>Text label for a connection type. ...</div><div class='long'><p>Text label for a connection type.</p>\n<p>Defaults to: <code>'No network connection'</code></p></div></div></div><div id='property-UNKNOWN' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.device.connection.Abstract' rel='Ext.device.connection.Abstract' class='defined-in docClass'>Ext.device.connection.Abstract</a><br/><a href='source/Abstract3.html#Ext-device-connection-Abstract-property-UNKNOWN' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.connection.Abstract-property-UNKNOWN' class='name expandable'>UNKNOWN</a><span> : String</span></div><div class='description'><div class='short'>Text label for a connection type. ...</div><div class='long'><p>Text label for a connection type.</p>\n<p>Defaults to: <code>'Unknown connection'</code></p></div></div></div><div id='property-WIFI' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.device.connection.Abstract' rel='Ext.device.connection.Abstract' class='defined-in docClass'>Ext.device.connection.Abstract</a><br/><a href='source/Abstract3.html#Ext-device-connection-Abstract-property-WIFI' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.connection.Abstract-property-WIFI' class='name expandable'>WIFI</a><span> : String</span></div><div class='description'><div class='short'>Text label for a connection type. ...</div><div class='long'><p>Text label for a connection type.</p>\n<p>Defaults to: <code>'WiFi connection'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getOnline' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.connection.Simulator'>Ext.device.connection.Simulator</span><br/><a href='source/Simulator2.html#Ext-device-connection-Simulator-method-getOnline' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.connection.Simulator-method-getOnline' class='name expandable'>getOnline</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of online. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.device.connection.Simulator-cfg-online\" rel=\"Ext.device.connection.Simulator-cfg-online\" class=\"docClass\">online</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.device.connection.Abstract-method-getOnline' rel='Ext.device.connection.Abstract-method-getOnline' class='docClass'>Ext.device.connection.Abstract.getOnline</a></p></div></div></div><div id='method-getType' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.device.connection.Abstract' rel='Ext.device.connection.Abstract' class='defined-in docClass'>Ext.device.connection.Abstract</a><br/><a href='source/Abstract3.html#Ext-device-connection-Abstract-method-getType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.connection.Abstract-method-getType' class='name expandable'>getType</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the current connection type. ...</div><div class='long'><p>Returns the current connection type.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>type</p>\n\n</div></li></ul></div></div></div><div id='method-isOnline' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.device.connection.Abstract' rel='Ext.device.connection.Abstract' class='defined-in docClass'>Ext.device.connection.Abstract</a><br/><a href='source/Abstract3.html#Ext-device-connection-Abstract-method-isOnline' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.connection.Abstract-method-isOnline' class='name expandable'>isOnline</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>True if the device is currently online ...</div><div class='long'><p>True if the device is currently online</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>online</p>\n</div></li></ul></div></div></div><div id='method-setOnline' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.device.connection.Abstract' rel='Ext.device.connection.Abstract' class='defined-in docClass'>Ext.device.connection.Abstract</a><br/><a href='source/Abstract3.html#Ext-device-connection-Abstract-cfg-online' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.connection.Abstract-method-setOnline' class='name expandable'>setOnline</a>( <span class='pre'>online</span> )</div><div class='description'><div class='short'>Sets the value of online. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.device.connection.Abstract-cfg-online\" rel=\"Ext.device.connection.Abstract-cfg-online\" class=\"docClass\">online</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>online</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setType' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.device.connection.Abstract' rel='Ext.device.connection.Abstract' class='defined-in docClass'>Ext.device.connection.Abstract</a><br/><a href='source/Abstract3.html#Ext-device-connection-Abstract-cfg-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.connection.Abstract-method-setType' class='name expandable'>setType</a>( <span class='pre'>type</span> )</div><div class='description'><div class='short'>Sets the value of type. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.device.connection.Abstract-cfg-type\" rel=\"Ext.device.connection.Abstract-cfg-type\" class=\"docClass\">type</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});