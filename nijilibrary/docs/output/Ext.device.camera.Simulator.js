Ext.data.JsonP.Ext_device_camera_Simulator({"tagname":"class","name":"Ext.device.camera.Simulator","extends":"Ext.device.camera.Abstract","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"private":true},"private":true,"id":"class-Ext.device.camera.Simulator","code_type":"ext_define","members":{"cfg":[{"name":"samples","tagname":"cfg","owner":"Ext.device.camera.Simulator","meta":{"private":true},"id":"cfg-samples"}],"property":[{"name":"destination","tagname":"property","owner":"Ext.device.camera.Abstract","meta":{"private":true},"id":"property-destination"},{"name":"encoding","tagname":"property","owner":"Ext.device.camera.Abstract","meta":{"private":true},"id":"property-encoding"},{"name":"source","tagname":"property","owner":"Ext.device.camera.Abstract","meta":{"private":true},"id":"property-source"}],"method":[{"name":"constructor","tagname":"method","owner":"Ext.device.camera.Simulator","meta":{},"id":"method-constructor"},{"name":"capture","tagname":"method","owner":"Ext.device.camera.Simulator","meta":{},"id":"method-capture"},{"name":"getSamples","tagname":"method","owner":"Ext.device.camera.Simulator","meta":{},"id":"method-getSamples"},{"name":"setSamples","tagname":"method","owner":"Ext.device.camera.Simulator","meta":{},"id":"method-setSamples"},{"name":"updateSamples","tagname":"method","owner":"Ext.device.camera.Simulator","meta":{"private":true},"id":"method-updateSamples"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Simulator.js","href":"Simulator.html#Ext-device-camera-Simulator"}],"html_meta":{"private":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base","Ext.device.camera.Abstract"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.device.camera.Abstract' rel='Ext.device.camera.Abstract' class='docClass'>Ext.device.camera.Abstract</a><div class='subclass '><strong>Ext.device.camera.Simulator</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Simulator.html#Ext-device-camera-Simulator' target='_blank'>Simulator.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-samples' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.camera.Simulator'>Ext.device.camera.Simulator</span><br/><a href='source/Simulator.html#Ext-device-camera-Simulator-cfg-samples' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.camera.Simulator-cfg-samples' class='name expandable'>samples</a><span> : Array</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[{success: 'http://www.sencha.com/img/sencha-large.png'}]</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-destination' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.device.camera.Abstract' rel='Ext.device.camera.Abstract' class='defined-in docClass'>Ext.device.camera.Abstract</a><br/><a href='source/Abstract2.html#Ext-device-camera-Abstract-property-destination' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.camera.Abstract-property-destination' class='name expandable'>destination</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{data: 0, file: 1}</code></p></div></div></div><div id='property-encoding' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.device.camera.Abstract' rel='Ext.device.camera.Abstract' class='defined-in docClass'>Ext.device.camera.Abstract</a><br/><a href='source/Abstract2.html#Ext-device-camera-Abstract-property-encoding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.camera.Abstract-property-encoding' class='name expandable'>encoding</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{jpeg: 0, jpg: 0, png: 1}</code></p></div></div></div><div id='property-source' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.device.camera.Abstract' rel='Ext.device.camera.Abstract' class='defined-in docClass'>Ext.device.camera.Abstract</a><br/><a href='source/Abstract2.html#Ext-device-camera-Abstract-property-source' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.camera.Abstract-property-source' class='name expandable'>source</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{library: 0, camera: 1, album: 2}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.camera.Simulator'>Ext.device.camera.Simulator</span><br/><a href='source/Simulator.html#Ext-device-camera-Simulator-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.device.camera.Simulator-method-constructor' class='name expandable'>Ext.device.camera.Simulator</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.device.camera.Simulator\" rel=\"Ext.device.camera.Simulator\" class=\"docClass\">Ext.device.camera.Simulator</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.device.camera.Simulator\" rel=\"Ext.device.camera.Simulator\" class=\"docClass\">Ext.device.camera.Simulator</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-capture' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.camera.Simulator'>Ext.device.camera.Simulator</span><br/><a href='source/Simulator.html#Ext-device-camera-Simulator-method-capture' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.camera.Simulator-method-capture' class='name expandable'>capture</a>( <span class='pre'>options, scope, destination, encoding, width, height</span> )</div><div class='description'><div class='short'>Allows you to capture a photo. ...</div><div class='long'><p>Allows you to capture a photo.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>options</span> : Object<div class='sub-desc'><p>The options to use when taking a photo.</p>\n\n<ul><li><span class='pre'>success</span> : Function<div class='sub-desc'><p>The success callback which is called when the photo has been taken.</p>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>image</span> : String<div class='sub-desc'><p>The image which was just taken, either a base64 encoded string or a URI depending on which\noption you chose (destination).</p>\n\n</div></li></ul></div></li><li><span class='pre'>failure</span> : Function<div class='sub-desc'><p>The function which is called when something goes wrong.</p>\n\n</div></li><li><span class='pre'>quality</span> : Number<div class='sub-desc'><p>The quality of the image which is returned in the callback. This should be a percentage.</p>\n\n</div></li><li><span class='pre'>source</span> : String<div class='sub-desc'><p>The source of where the image should be taken. Available options are:</p>\n\n\n\n\n<ul>\n<li><strong>album</strong> - prompts the user to choose an image from an album</li>\n<li><strong>camera</strong> - prompts the user to take a new photo</li>\n<li><strong>library</strong> - prompts the user to choose an image from the library</li>\n</ul>\n\n\n\n</div></li></ul></div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope in which to call the <code>success</code> and <code>failure</code> functions, if specified.</p>\n\n</div></li><li><span class='pre'>destination</span> : String<div class='sub-desc'><p>The destination of the image which is returned. Available options are:</p>\n\n\n\n\n<ul>\n<li><strong>data</strong> - returns a base64 encoded string</li>\n<li><strong>file</strong> - returns the file's URI</li>\n</ul>\n\n\n\n</div></li><li><span class='pre'>encoding</span> : String<div class='sub-desc'><p>The encoding of the returned image. Available options are:</p>\n\n\n\n\n<ul>\n<li><strong>jpg</strong></li>\n<li><strong>png</strong></li>\n</ul>\n\n\n\n</div></li><li><span class='pre'>width</span> : Number<div class='sub-desc'><p>The width of the image to return</p>\n\n</div></li><li><span class='pre'>height</span> : Number<div class='sub-desc'><p>The height of the image to return</p>\n\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.device.camera.Abstract-method-capture' rel='Ext.device.camera.Abstract-method-capture' class='docClass'>Ext.device.camera.Abstract.capture</a></p></div></div></div><div id='method-getSamples' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.camera.Simulator'>Ext.device.camera.Simulator</span><br/><a href='source/Simulator.html#Ext-device-camera-Simulator-cfg-samples' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.camera.Simulator-method-getSamples' class='name expandable'>getSamples</a>( <span class='pre'></span> ) : Array</div><div class='description'><div class='short'>Returns the value of samples. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.device.camera.Simulator-cfg-samples\" rel=\"Ext.device.camera.Simulator-cfg-samples\" class=\"docClass\">samples</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setSamples' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.camera.Simulator'>Ext.device.camera.Simulator</span><br/><a href='source/Simulator.html#Ext-device-camera-Simulator-cfg-samples' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.camera.Simulator-method-setSamples' class='name expandable'>setSamples</a>( <span class='pre'>samples</span> )</div><div class='description'><div class='short'>Sets the value of samples. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.device.camera.Simulator-cfg-samples\" rel=\"Ext.device.camera.Simulator-cfg-samples\" class=\"docClass\">samples</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>samples</span> : Array<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateSamples' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.camera.Simulator'>Ext.device.camera.Simulator</span><br/><a href='source/Simulator.html#Ext-device-camera-Simulator-method-updateSamples' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.camera.Simulator-method-updateSamples' class='name expandable'>updateSamples</a>( <span class='pre'>samples</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>samples</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});