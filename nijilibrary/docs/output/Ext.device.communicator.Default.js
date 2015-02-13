Ext.data.JsonP.Ext_device_communicator_Default({"tagname":"class","name":"Ext.device.communicator.Default","extends":"Ext.Base","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"private":true},"private":true,"id":"class-Ext.device.communicator.Default","code_type":"ext_define","members":{"cfg":[],"property":[{"name":"SERVER_URL","tagname":"property","owner":"Ext.device.communicator.Default","meta":{"private":true},"id":"property-SERVER_URL"},{"name":"callbackDataMap","tagname":"property","owner":"Ext.device.communicator.Default","meta":{"private":true},"id":"property-callbackDataMap"},{"name":"callbackIdMap","tagname":"property","owner":"Ext.device.communicator.Default","meta":{"private":true},"id":"property-callbackIdMap"},{"name":"globalScopeId","tagname":"property","owner":"Ext.device.communicator.Default","meta":{"private":true},"id":"property-globalScopeId"},{"name":"idSeed","tagname":"property","owner":"Ext.device.communicator.Default","meta":{"private":true},"id":"property-idSeed"}],"method":[{"name":"doSend","tagname":"method","owner":"Ext.device.communicator.Default","meta":{"private":true},"id":"method-doSend"},{"name":"generateId","tagname":"method","owner":"Ext.device.communicator.Default","meta":{"private":true},"id":"method-generateId"},{"name":"getCallbackData","tagname":"method","owner":"Ext.device.communicator.Default","meta":{"private":true},"id":"method-getCallbackData"},{"name":"getCallbackId","tagname":"method","owner":"Ext.device.communicator.Default","meta":{"private":true},"id":"method-getCallbackId"},{"name":"getId","tagname":"method","owner":"Ext.device.communicator.Default","meta":{"private":true},"id":"method-getId"},{"name":"invoke","tagname":"method","owner":"Ext.device.communicator.Default","meta":{"private":true},"id":"method-invoke"},{"name":"send","tagname":"method","owner":"Ext.device.communicator.Default","meta":{"private":true},"id":"method-send"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Default.js","href":"Default.html#Ext-device-communicator-Default"}],"html_meta":{"private":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.device.communicator.Default</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Default.html#Ext-device-communicator-Default' target='_blank'>Default.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>This object handles communication between the WebView and Sencha's native shell.\nCurrently it has two primary responsibilities:</p>\n\n<ol>\n<li>Maintaining unique string ids for callback functions, together with their scope objects</li>\n<li>Serializing given object data into HTTP GET request parameters</li>\n</ol>\n\n\n<p>As an example, to capture a photo from the device's camera, we use <code><a href=\"#!/api/Ext.device.Camera-method-capture\" rel=\"Ext.device.Camera-method-capture\" class=\"docClass\">Ext.device.Camera.capture</a>()</code> like:</p>\n\n<pre><code><a href=\"#!/api/Ext.device.Camera-method-capture\" rel=\"Ext.device.Camera-method-capture\" class=\"docClass\">Ext.device.Camera.capture</a>(\n    function(dataUri){\n        // Do something with the base64-encoded `dataUri` string\n    },\n    function(errorMessage) {\n\n    },\n    callbackScope,\n    {\n        quality: 75,\n        width: 500,\n        height: 500\n    }\n);\n</code></pre>\n\n<p>Internally, <code>Ext.device.Communicator.send()</code> will then be invoked with the following argument:</p>\n\n<pre><code>Ext.device.Communicator.send({\n    command: 'Camera#capture',\n    callbacks: {\n        onSuccess: function() {\n            // ...\n        },\n        onError: function() {\n            // ...\n        }\n    },\n    scope: callbackScope,\n    quality: 75,\n    width: 500,\n    height: 500\n});\n</code></pre>\n\n<p>Which will then be transformed into a HTTP GET request, sent to native shell's local\nHTTP server with the following parameters:</p>\n\n<pre><code>?quality=75&amp;width=500&amp;height=500&amp;command=Camera%23capture&amp;onSuccess=3&amp;onError=5\n</code></pre>\n\n<p>Notice that <code>onSuccess</code> and <code>onError</code> have been converted into string ids (<code>3</code> and <code>5</code>\nrespectively) and maintained by <code>Ext.device.Communicator</code>.</p>\n\n<p>Whenever the requested operation finishes, <code>Ext.device.Communicator.invoke()</code> simply needs\nto be executed from the native shell with the corresponding ids given before. For example:</p>\n\n<pre><code>Ext.device.Communicator.invoke('3', ['DATA_URI_OF_THE_CAPTURED_IMAGE_HERE']);\n</code></pre>\n\n<p>will invoke the original <code>onSuccess</code> callback under the given scope. (<code>callbackScope</code>), with\nthe first argument of 'DATA_URI_OF_THE_CAPTURED_IMAGE_HERE'</p>\n\n<p>Note that <code>Ext.device.Communicator</code> maintains the uniqueness of each function callback and\nits scope object. If subsequent calls to <code>Ext.device.Communicator.send()</code> have the same\ncallback references, the same old ids will simply be reused, which guarantee the best possible\nperformance for a large amount of repetitive calls.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-SERVER_URL' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.communicator.Default'>Ext.device.communicator.Default</span><br/><a href='source/Default.html#Ext-device-communicator-Default-property-SERVER_URL' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.communicator.Default-property-SERVER_URL' class='name expandable'>SERVER_URL</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'http://localhost:3000'</code></p></div></div></div><div id='property-callbackDataMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.communicator.Default'>Ext.device.communicator.Default</span><br/><a href='source/Default.html#Ext-device-communicator-Default-property-callbackDataMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.communicator.Default-property-callbackDataMap' class='name expandable'>callbackDataMap</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Change this to the correct server URL ...</div><div class='long'><p>Change this to the correct server URL</p>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-callbackIdMap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.communicator.Default'>Ext.device.communicator.Default</span><br/><a href='source/Default.html#Ext-device-communicator-Default-property-callbackIdMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.communicator.Default-property-callbackIdMap' class='name expandable'>callbackIdMap</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{}</code></p></div></div></div><div id='property-globalScopeId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.communicator.Default'>Ext.device.communicator.Default</span><br/><a href='source/Default.html#Ext-device-communicator-Default-property-globalScopeId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.communicator.Default-property-globalScopeId' class='name expandable'>globalScopeId</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'0'</code></p></div></div></div><div id='property-idSeed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.communicator.Default'>Ext.device.communicator.Default</span><br/><a href='source/Default.html#Ext-device-communicator-Default-property-idSeed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.communicator.Default-property-idSeed' class='name expandable'>idSeed</a><span> : Number</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-doSend' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.communicator.Default'>Ext.device.communicator.Default</span><br/><a href='source/Default.html#Ext-device-communicator-Default-method-doSend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.communicator.Default-method-doSend' class='name expandable'>doSend</a>( <span class='pre'>args</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-generateId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.communicator.Default'>Ext.device.communicator.Default</span><br/><a href='source/Default.html#Ext-device-communicator-Default-method-generateId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.communicator.Default-method-generateId' class='name expandable'>generateId</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getCallbackData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.communicator.Default'>Ext.device.communicator.Default</span><br/><a href='source/Default.html#Ext-device-communicator-Default-method-getCallbackData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.communicator.Default-method-getCallbackData' class='name expandable'>getCallbackData</a>( <span class='pre'>id</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCallbackId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.communicator.Default'>Ext.device.communicator.Default</span><br/><a href='source/Default.html#Ext-device-communicator-Default-method-getCallbackId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.communicator.Default-method-getCallbackId' class='name expandable'>getCallbackId</a>( <span class='pre'>callback, scope</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.communicator.Default'>Ext.device.communicator.Default</span><br/><a href='source/Default.html#Ext-device-communicator-Default-method-getId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.communicator.Default-method-getId' class='name expandable'>getId</a>( <span class='pre'>object</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-invoke' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.communicator.Default'>Ext.device.communicator.Default</span><br/><a href='source/Default.html#Ext-device-communicator-Default-method-invoke' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.communicator.Default-method-invoke' class='name expandable'>invoke</a>( <span class='pre'>id, args</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-send' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.communicator.Default'>Ext.device.communicator.Default</span><br/><a href='source/Default.html#Ext-device-communicator-Default-method-send' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.communicator.Default-method-send' class='name expandable'>send</a>( <span class='pre'>args</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});