Ext.data.JsonP.Ext_Decorator({"tagname":"class","name":"Ext.Decorator","extends":"Ext.Component","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ext.Decorator","code_type":"ext_define","members":{"cfg":[{"name":"component","tagname":"cfg","owner":"Ext.Decorator","meta":{},"id":"cfg-component"}],"property":[{"name":"isDecorator","tagname":"property","owner":"Ext.Decorator","meta":{"private":true},"id":"property-isDecorator"}],"method":[{"name":"applyComponent","tagname":"method","owner":"Ext.Decorator","meta":{"private":true},"id":"method-applyComponent"},{"name":"destroy","tagname":"method","owner":"Ext.Decorator","meta":{"private":true},"id":"method-destroy"},{"name":"doSetComponent","tagname":"method","owner":"Ext.Decorator","meta":{"private":true},"id":"method-doSetComponent"},{"name":"doUnsetComponent","tagname":"method","owner":"Ext.Decorator","meta":{"private":true},"id":"method-doUnsetComponent"},{"name":"getComponent","tagname":"method","owner":"Ext.Decorator","meta":{},"id":"method-getComponent"},{"name":"onClassExtended","tagname":"method","owner":"Ext.Decorator","meta":{"private":true},"id":"method-onClassExtended"},{"name":"setComponent","tagname":"method","owner":"Ext.Decorator","meta":{},"id":"method-setComponent"},{"name":"setDisabled","tagname":"method","owner":"Ext.Decorator","meta":{"private":true},"id":"method-setDisabled"},{"name":"setRendered","tagname":"method","owner":"Ext.Decorator","meta":{"private":true},"id":"method-setRendered"},{"name":"updateComponent","tagname":"method","owner":"Ext.Decorator","meta":{"private":true},"id":"method-updateComponent"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Decorator.js","href":"Decorator.html#Ext-Decorator"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[{"name":"generateProxyGetter","tagname":"method","owner":"Ext.Decorator","meta":{"private":true,"static":true},"id":"method-generateProxyGetter"},{"name":"generateProxySetter","tagname":"method","owner":"Ext.Decorator","meta":{"private":true,"static":true},"id":"method-generateProxySetter"}],"event":[],"css_var":[],"css_mixin":[]},"component":true,"superclasses":["Ext.Component"],"subclasses":["Ext.field.Field"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Component<div class='subclass '><strong>Ext.Decorator</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.field.Field' rel='Ext.field.Field' class='docClass'>Ext.field.Field</a></div><h4>Files</h4><div class='dependency'><a href='source/Decorator.html#Ext-Decorator' target='_blank'>Decorator.js</a></div></pre><div class='doc-contents'><p>In a few words, a Decorator is a Component that wraps around another Component. A typical example of a Decorator is a\n<a href=\"#!/api/Ext.field.Field\" rel=\"Ext.field.Field\" class=\"docClass\">Field</a>. A form field is nothing more than a decorator around another component, and gives the\ncomponent a label, as well as extra styling to make it look good in a form.</p>\n\n<p>A Decorator can be thought of as a lightweight Container that has only one child item, and no layout overhead.\nThe look and feel of decorators can be styled purely in CSS.</p>\n\n<p>Another powerful feature that Decorator provides is config proxying. For example: all config items of a\n<a href=\"#!/api/Ext.slider.Slider\" rel=\"Ext.slider.Slider\" class=\"docClass\">Slider</a> also exist in a <a href=\"#!/api/Ext.field.Slider\" rel=\"Ext.field.Slider\" class=\"docClass\">Slider Field</a> for API convenience.\nThe <a href=\"#!/api/Ext.field.Slider\" rel=\"Ext.field.Slider\" class=\"docClass\">Slider Field</a> simply proxies all corresponding getters and setters\nto the actual <a href=\"#!/api/Ext.slider.Slider\" rel=\"Ext.slider.Slider\" class=\"docClass\">Slider</a> instance. Writing out all the setters and getters to do that is a tedious task\nand a waste of code space. Instead, when you sub-class <a href=\"#!/api/Ext.Decorator\" rel=\"Ext.Decorator\" class=\"docClass\">Ext.Decorator</a>, all you need to do is to specify those config items\nthat you want to proxy to the Component using a special 'proxyConfig' class property. Here's how it may look like\nin a Slider Field class:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('My.field.Slider', {\n    extend: '<a href=\"#!/api/Ext.Decorator\" rel=\"Ext.Decorator\" class=\"docClass\">Ext.Decorator</a>',\n\n    config: {\n        component: {\n            xtype: 'slider'\n        }\n    },\n\n    proxyConfig: {\n        minValue: 0,\n        maxValue: 100,\n        increment: 1\n    }\n\n    // ...\n});\n</code></pre>\n\n<p>Once <code>My.field.Slider</code> class is created, it will have all setters and getters methods for all items listed in <code>proxyConfig</code>\nautomatically generated. These methods all proxy to the same method names that exist within the Component instance.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-component' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Decorator'>Ext.Decorator</span><br/><a href='source/Decorator.html#Ext-Decorator-cfg-component' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Decorator-cfg-component' class='name expandable'>component</a><span> : Object</span></div><div class='description'><div class='short'>The config object to factory the Component that this Decorator wraps around ...</div><div class='long'><p>The config object to factory the Component that this Decorator wraps around</p>\n<p>Defaults to: <code>{}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-isDecorator' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Decorator'>Ext.Decorator</span><br/><a href='source/Decorator.html#Ext-Decorator-property-isDecorator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Decorator-property-isDecorator' class='name expandable'>isDecorator</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Methods</h3><div id='method-applyComponent' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Decorator'>Ext.Decorator</span><br/><a href='source/Decorator.html#Ext-Decorator-method-applyComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Decorator-method-applyComponent' class='name expandable'>applyComponent</a>( <span class='pre'>config</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Decorator'>Ext.Decorator</span><br/><a href='source/Decorator.html#Ext-Decorator-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Decorator-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-doSetComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Decorator'>Ext.Decorator</span><br/><a href='source/Decorator.html#Ext-Decorator-method-doSetComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Decorator-method-doSetComponent' class='name expandable'>doSetComponent</a>( <span class='pre'>component</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-doUnsetComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Decorator'>Ext.Decorator</span><br/><a href='source/Decorator.html#Ext-Decorator-method-doUnsetComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Decorator-method-doUnsetComponent' class='name expandable'>doUnsetComponent</a>( <span class='pre'>component</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Decorator'>Ext.Decorator</span><br/><a href='source/Decorator.html#Ext-Decorator-cfg-component' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Decorator-method-getComponent' class='name expandable'>getComponent</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of component. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.Decorator-cfg-component\" rel=\"Ext.Decorator-cfg-component\" class=\"docClass\">component</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onClassExtended' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Decorator'>Ext.Decorator</span><br/><a href='source/Decorator.html#Ext-Decorator-method-onClassExtended' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Decorator-method-onClassExtended' class='name expandable'>onClassExtended</a>( <span class='pre'>Class, members</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>Class</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>members</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Decorator'>Ext.Decorator</span><br/><a href='source/Decorator.html#Ext-Decorator-cfg-component' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Decorator-method-setComponent' class='name expandable'>setComponent</a>( <span class='pre'>component</span> )</div><div class='description'><div class='short'>Sets the value of component. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.Decorator-cfg-component\" rel=\"Ext.Decorator-cfg-component\" class=\"docClass\">component</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setDisabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Decorator'>Ext.Decorator</span><br/><a href='source/Decorator.html#Ext-Decorator-method-setDisabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Decorator-method-setDisabled' class='name expandable'>setDisabled</a>( <span class='pre'>disabled</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>disabled</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setRendered' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Decorator'>Ext.Decorator</span><br/><a href='source/Decorator.html#Ext-Decorator-method-setRendered' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Decorator-method-setRendered' class='name expandable'>setRendered</a>( <span class='pre'>rendered</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rendered</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateComponent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Decorator'>Ext.Decorator</span><br/><a href='source/Decorator.html#Ext-Decorator-method-updateComponent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Decorator-method-updateComponent' class='name expandable'>updateComponent</a>( <span class='pre'>newComponent, oldComponent</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newComponent</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>oldComponent</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Methods</h3><div id='method-generateProxyGetter' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Decorator'>Ext.Decorator</span><br/><a href='source/Decorator.html#Ext-Decorator-method-generateProxyGetter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Decorator-method-generateProxyGetter' class='name expandable'>generateProxyGetter</a>( <span class='pre'>name</span> )<strong class='private signature' >private</strong><strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-generateProxySetter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Decorator'>Ext.Decorator</span><br/><a href='source/Decorator.html#Ext-Decorator-method-generateProxySetter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Decorator-method-generateProxySetter' class='name expandable'>generateProxySetter</a>( <span class='pre'>name</span> )<strong class='private signature' >private</strong><strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});