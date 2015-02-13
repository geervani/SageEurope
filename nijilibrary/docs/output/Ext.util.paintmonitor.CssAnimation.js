Ext.data.JsonP.Ext_util_paintmonitor_CssAnimation({"tagname":"class","name":"Ext.util.paintmonitor.CssAnimation","extends":"Ext.util.paintmonitor.Abstract","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"private":true},"private":true,"id":"class-Ext.util.paintmonitor.CssAnimation","code_type":"ext_define","members":{"cfg":[{"name":"args","tagname":"cfg","owner":"Ext.util.paintmonitor.Abstract","meta":{"private":true},"id":"cfg-args"},{"name":"callback","tagname":"cfg","owner":"Ext.util.paintmonitor.Abstract","meta":{"private":true},"id":"cfg-callback"},{"name":"element","tagname":"cfg","owner":"Ext.util.paintmonitor.Abstract","meta":{"private":true},"id":"cfg-element"},{"name":"scope","tagname":"cfg","owner":"Ext.util.paintmonitor.Abstract","meta":{"private":true},"id":"cfg-scope"}],"property":[{"name":"eventName","tagname":"property","owner":"Ext.util.paintmonitor.CssAnimation","meta":{"private":true},"id":"property-eventName"},{"name":"monitorClass","tagname":"property","owner":"Ext.util.paintmonitor.CssAnimation","meta":{"private":true},"id":"property-monitorClass"}],"method":[{"name":"constructor","tagname":"method","owner":"Ext.util.paintmonitor.Abstract","meta":{},"id":"method-constructor"},{"name":"applyElement","tagname":"method","owner":"Ext.util.paintmonitor.Abstract","meta":{"private":true},"id":"method-applyElement"},{"name":"bindListeners","tagname":"method","owner":"Ext.util.paintmonitor.Abstract","meta":{"private":true},"id":"method-bindListeners"},{"name":"destroy","tagname":"method","owner":"Ext.util.paintmonitor.Abstract","meta":{"private":true},"id":"method-destroy"},{"name":"getArgs","tagname":"method","owner":"Ext.util.paintmonitor.Abstract","meta":{},"id":"method-getArgs"},{"name":"getCallback","tagname":"method","owner":"Ext.util.paintmonitor.Abstract","meta":{},"id":"method-getCallback"},{"name":"getElement","tagname":"method","owner":"Ext.util.paintmonitor.Abstract","meta":{},"id":"method-getElement"},{"name":"getScope","tagname":"method","owner":"Ext.util.paintmonitor.Abstract","meta":{},"id":"method-getScope"},{"name":"onElementPainted","tagname":"method","owner":"Ext.util.paintmonitor.CssAnimation","meta":{"private":true},"id":"method-onElementPainted"},{"name":"setArgs","tagname":"method","owner":"Ext.util.paintmonitor.Abstract","meta":{},"id":"method-setArgs"},{"name":"setCallback","tagname":"method","owner":"Ext.util.paintmonitor.Abstract","meta":{},"id":"method-setCallback"},{"name":"setElement","tagname":"method","owner":"Ext.util.paintmonitor.Abstract","meta":{},"id":"method-setElement"},{"name":"setScope","tagname":"method","owner":"Ext.util.paintmonitor.Abstract","meta":{},"id":"method-setScope"},{"name":"updateElement","tagname":"method","owner":"Ext.util.paintmonitor.Abstract","meta":{"private":true},"id":"method-updateElement"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"CssAnimation.js","href":"CssAnimation2.html#Ext-util-paintmonitor-CssAnimation"}],"html_meta":{"private":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base","Ext.util.paintmonitor.Abstract"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.util.paintmonitor.Abstract' rel='Ext.util.paintmonitor.Abstract' class='docClass'>Ext.util.paintmonitor.Abstract</a><div class='subclass '><strong>Ext.util.paintmonitor.CssAnimation</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/CssAnimation2.html#Ext-util-paintmonitor-CssAnimation' target='_blank'>CssAnimation.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-args' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.paintmonitor.Abstract' rel='Ext.util.paintmonitor.Abstract' class='defined-in docClass'>Ext.util.paintmonitor.Abstract</a><br/><a href='source/Abstract14.html#Ext-util-paintmonitor-Abstract-cfg-args' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.Abstract-cfg-args' class='name expandable'>args</a><span> : Array</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='cfg-callback' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.paintmonitor.Abstract' rel='Ext.util.paintmonitor.Abstract' class='defined-in docClass'>Ext.util.paintmonitor.Abstract</a><br/><a href='source/Abstract14.html#Ext-util-paintmonitor-Abstract-cfg-callback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.Abstract-cfg-callback' class='name not-expandable'>callback</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-element' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.paintmonitor.Abstract' rel='Ext.util.paintmonitor.Abstract' class='defined-in docClass'>Ext.util.paintmonitor.Abstract</a><br/><a href='source/Abstract14.html#Ext-util-paintmonitor-Abstract-cfg-element' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.Abstract-cfg-element' class='name not-expandable'>element</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-scope' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.paintmonitor.Abstract' rel='Ext.util.paintmonitor.Abstract' class='defined-in docClass'>Ext.util.paintmonitor.Abstract</a><br/><a href='source/Abstract14.html#Ext-util-paintmonitor-Abstract-cfg-scope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.Abstract-cfg-scope' class='name not-expandable'>scope</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-eventName' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.paintmonitor.CssAnimation'>Ext.util.paintmonitor.CssAnimation</span><br/><a href='source/CssAnimation2.html#Ext-util-paintmonitor-CssAnimation-property-eventName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.CssAnimation-property-eventName' class='name not-expandable'>eventName</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n<p>Overrides: <a href='#!/api/Ext.util.paintmonitor.Abstract-property-eventName' rel='Ext.util.paintmonitor.Abstract-property-eventName' class='docClass'>Ext.util.paintmonitor.Abstract.eventName</a></p></div></div></div><div id='property-monitorClass' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.paintmonitor.CssAnimation'>Ext.util.paintmonitor.CssAnimation</span><br/><a href='source/CssAnimation2.html#Ext-util-paintmonitor-CssAnimation-property-monitorClass' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.CssAnimation-property-monitorClass' class='name expandable'>monitorClass</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'cssanimation'</code></p><p>Overrides: <a href='#!/api/Ext.util.paintmonitor.Abstract-property-monitorClass' rel='Ext.util.paintmonitor.Abstract-property-monitorClass' class='docClass'>Ext.util.paintmonitor.Abstract.monitorClass</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.paintmonitor.Abstract' rel='Ext.util.paintmonitor.Abstract' class='defined-in docClass'>Ext.util.paintmonitor.Abstract</a><br/><a href='source/Abstract14.html#Ext-util-paintmonitor-Abstract-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.util.paintmonitor.Abstract-method-constructor' class='name expandable'>Ext.util.paintmonitor.CssAnimation</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.util.paintmonitor.Abstract\" rel=\"Ext.util.paintmonitor.Abstract\" class=\"docClass\">Ext.util.paintmonitor.Abstract</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.paintmonitor.Abstract\" rel=\"Ext.util.paintmonitor.Abstract\" class=\"docClass\">Ext.util.paintmonitor.Abstract</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyElement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.paintmonitor.Abstract' rel='Ext.util.paintmonitor.Abstract' class='defined-in docClass'>Ext.util.paintmonitor.Abstract</a><br/><a href='source/Abstract14.html#Ext-util-paintmonitor-Abstract-method-applyElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.Abstract-method-applyElement' class='name expandable'>applyElement</a>( <span class='pre'>element</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-bindListeners' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.paintmonitor.Abstract' rel='Ext.util.paintmonitor.Abstract' class='defined-in docClass'>Ext.util.paintmonitor.Abstract</a><br/><a href='source/Abstract14.html#Ext-util-paintmonitor-Abstract-method-bindListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.Abstract-method-bindListeners' class='name expandable'>bindListeners</a>( <span class='pre'>bind</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bind</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.paintmonitor.Abstract' rel='Ext.util.paintmonitor.Abstract' class='defined-in docClass'>Ext.util.paintmonitor.Abstract</a><br/><a href='source/Abstract14.html#Ext-util-paintmonitor-Abstract-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.Abstract-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getArgs' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.paintmonitor.Abstract' rel='Ext.util.paintmonitor.Abstract' class='defined-in docClass'>Ext.util.paintmonitor.Abstract</a><br/><a href='source/Abstract14.html#Ext-util-paintmonitor-Abstract-cfg-args' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.Abstract-method-getArgs' class='name expandable'>getArgs</a>( <span class='pre'></span> ) : Array</div><div class='description'><div class='short'>Returns the value of args. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.util.paintmonitor.Abstract-cfg-args\" rel=\"Ext.util.paintmonitor.Abstract-cfg-args\" class=\"docClass\">args</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCallback' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.paintmonitor.Abstract' rel='Ext.util.paintmonitor.Abstract' class='defined-in docClass'>Ext.util.paintmonitor.Abstract</a><br/><a href='source/Abstract14.html#Ext-util-paintmonitor-Abstract-cfg-callback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.Abstract-method-getCallback' class='name expandable'>getCallback</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of callback. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.util.paintmonitor.Abstract-cfg-callback\" rel=\"Ext.util.paintmonitor.Abstract-cfg-callback\" class=\"docClass\">callback</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getElement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.paintmonitor.Abstract' rel='Ext.util.paintmonitor.Abstract' class='defined-in docClass'>Ext.util.paintmonitor.Abstract</a><br/><a href='source/Abstract14.html#Ext-util-paintmonitor-Abstract-cfg-element' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.Abstract-method-getElement' class='name expandable'>getElement</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of element. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.util.paintmonitor.Abstract-cfg-element\" rel=\"Ext.util.paintmonitor.Abstract-cfg-element\" class=\"docClass\">element</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getScope' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.paintmonitor.Abstract' rel='Ext.util.paintmonitor.Abstract' class='defined-in docClass'>Ext.util.paintmonitor.Abstract</a><br/><a href='source/Abstract14.html#Ext-util-paintmonitor-Abstract-cfg-scope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.Abstract-method-getScope' class='name expandable'>getScope</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of scope. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.util.paintmonitor.Abstract-cfg-scope\" rel=\"Ext.util.paintmonitor.Abstract-cfg-scope\" class=\"docClass\">scope</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onElementPainted' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.paintmonitor.CssAnimation'>Ext.util.paintmonitor.CssAnimation</span><br/><a href='source/CssAnimation2.html#Ext-util-paintmonitor-CssAnimation-method-onElementPainted' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.CssAnimation-method-onElementPainted' class='name expandable'>onElementPainted</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.util.paintmonitor.Abstract-method-onElementPainted' rel='Ext.util.paintmonitor.Abstract-method-onElementPainted' class='docClass'>Ext.util.paintmonitor.Abstract.onElementPainted</a></p></div></div></div><div id='method-setArgs' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.paintmonitor.Abstract' rel='Ext.util.paintmonitor.Abstract' class='defined-in docClass'>Ext.util.paintmonitor.Abstract</a><br/><a href='source/Abstract14.html#Ext-util-paintmonitor-Abstract-cfg-args' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.Abstract-method-setArgs' class='name expandable'>setArgs</a>( <span class='pre'>args</span> )</div><div class='description'><div class='short'>Sets the value of args. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.util.paintmonitor.Abstract-cfg-args\" rel=\"Ext.util.paintmonitor.Abstract-cfg-args\" class=\"docClass\">args</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Array<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setCallback' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.paintmonitor.Abstract' rel='Ext.util.paintmonitor.Abstract' class='defined-in docClass'>Ext.util.paintmonitor.Abstract</a><br/><a href='source/Abstract14.html#Ext-util-paintmonitor-Abstract-cfg-callback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.Abstract-method-setCallback' class='name expandable'>setCallback</a>( <span class='pre'>callback</span> )</div><div class='description'><div class='short'>Sets the value of callback. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.util.paintmonitor.Abstract-cfg-callback\" rel=\"Ext.util.paintmonitor.Abstract-cfg-callback\" class=\"docClass\">callback</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setElement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.paintmonitor.Abstract' rel='Ext.util.paintmonitor.Abstract' class='defined-in docClass'>Ext.util.paintmonitor.Abstract</a><br/><a href='source/Abstract14.html#Ext-util-paintmonitor-Abstract-cfg-element' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.Abstract-method-setElement' class='name expandable'>setElement</a>( <span class='pre'>element</span> )</div><div class='description'><div class='short'>Sets the value of element. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.util.paintmonitor.Abstract-cfg-element\" rel=\"Ext.util.paintmonitor.Abstract-cfg-element\" class=\"docClass\">element</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setScope' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.paintmonitor.Abstract' rel='Ext.util.paintmonitor.Abstract' class='defined-in docClass'>Ext.util.paintmonitor.Abstract</a><br/><a href='source/Abstract14.html#Ext-util-paintmonitor-Abstract-cfg-scope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.Abstract-method-setScope' class='name expandable'>setScope</a>( <span class='pre'>scope</span> )</div><div class='description'><div class='short'>Sets the value of scope. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.util.paintmonitor.Abstract-cfg-scope\" rel=\"Ext.util.paintmonitor.Abstract-cfg-scope\" class=\"docClass\">scope</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateElement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.paintmonitor.Abstract' rel='Ext.util.paintmonitor.Abstract' class='defined-in docClass'>Ext.util.paintmonitor.Abstract</a><br/><a href='source/Abstract14.html#Ext-util-paintmonitor-Abstract-method-updateElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.paintmonitor.Abstract-method-updateElement' class='name expandable'>updateElement</a>( <span class='pre'>element</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});