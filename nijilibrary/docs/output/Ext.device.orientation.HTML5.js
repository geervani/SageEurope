Ext.data.JsonP.Ext_device_orientation_HTML5({"tagname":"class","name":"Ext.device.orientation.HTML5","extends":"Ext.device.orientation.Abstract","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"private":true},"private":true,"id":"class-Ext.device.orientation.HTML5","code_type":"ext_define","members":{"cfg":[],"property":[],"method":[{"name":"initialize","tagname":"method","owner":"Ext.device.orientation.HTML5","meta":{"private":true},"id":"method-initialize"}],"event":[{"name":"orientationchange","tagname":"event","owner":"Ext.device.orientation.Abstract","meta":{},"id":"event-orientationchange"}],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"HTML5.js","href":"HTML5.html#Ext-device-orientation-HTML5"}],"html_meta":{"private":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base","Ext.device.orientation.Abstract"],"subclasses":[],"mixedInto":[],"parentMixins":["Ext.mixin.Observable"],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.device.orientation.Abstract' rel='Ext.device.orientation.Abstract' class='docClass'>Ext.device.orientation.Abstract</a><div class='subclass '><strong>Ext.device.orientation.HTML5</strong></div></div></div><h4>Inherited mixins</h4><div class='dependency'>Ext.mixin.Observable</div><h4>Files</h4><div class='dependency'><a href='source/HTML5.html#Ext-device-orientation-HTML5' target='_blank'>HTML5.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>Provides the HTML5 implementation for the orientation API.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-initialize' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.orientation.HTML5'>Ext.device.orientation.HTML5</span><br/><a href='source/HTML5.html#Ext-device-orientation-HTML5-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.orientation.HTML5-method-initialize' class='name expandable'>initialize</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-orientationchange' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.device.orientation.Abstract' rel='Ext.device.orientation.Abstract' class='defined-in docClass'>Ext.device.orientation.Abstract</a><br/><a href='source/Abstract8.html#Ext-device-orientation-Abstract-event-orientationchange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.orientation.Abstract-event-orientationchange' class='name expandable'>orientationchange</a>( <span class='pre'>event, eOpts</span> )</div><div class='description'><div class='short'>Fires when the orientation has been changed on this device. ...</div><div class='long'><p>Fires when the orientation has been changed on this device.</p>\n\n<pre><code>Ext.device.Orientation.on({\n    scope: this,\n    orientationchange: function(e) {\n        console.log('Alpha: ', e.alpha);\n        console.log('Beta: ', e.beta);\n        console.log('Gamma: ', e.gamma);\n    }\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'><p>The event object</p>\n<ul><li><span class='pre'>alpha</span> : Object<div class='sub-desc'><p>The alpha value of the orientation event</p>\n</div></li><li><span class='pre'>beta</span> : Object<div class='sub-desc'><p>The beta value of the orientation event</p>\n</div></li><li><span class='pre'>gamma</span> : Object<div class='sub-desc'><p>The gamma value of the orientation event</p>\n</div></li></ul></div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>"});