Ext.data.JsonP.Ext_util_sizemonitor_Abstract({"tagname":"class","name":"Ext.util.sizemonitor.Abstract","extends":"Ext.Base","mixins":["Ext.mixin.Templatable"],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":["Ext.TaskQueue"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"private":true},"private":true,"id":"class-Ext.util.sizemonitor.Abstract","code_type":"ext_define","members":{"cfg":[{"name":"args","tagname":"cfg","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"cfg-args"},{"name":"callback","tagname":"cfg","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"cfg-callback"},{"name":"element","tagname":"cfg","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"cfg-element"},{"name":"scope","tagname":"cfg","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"cfg-scope"}],"property":[{"name":"contentHeight","tagname":"property","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"property-contentHeight"},{"name":"contentWidth","tagname":"property","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"property-contentWidth"},{"name":"height","tagname":"property","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"property-height"},{"name":"mixinConfig","tagname":"property","owner":"Ext.mixin.Templatable","meta":{"private":true},"id":"property-mixinConfig"},{"name":"referenceAttributeName","tagname":"property","owner":"Ext.mixin.Templatable","meta":{"private":true},"id":"property-referenceAttributeName"},{"name":"referenceSelector","tagname":"property","owner":"Ext.mixin.Templatable","meta":{"private":true},"id":"property-referenceSelector"},{"name":"width","tagname":"property","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"property-width"}],"method":[{"name":"constructor","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{},"id":"method-constructor"},{"name":"applyArgs","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"method-applyArgs"},{"name":"applyElement","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"method-applyElement"},{"name":"bindListeners","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"method-bindListeners"},{"name":"destroy","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"method-destroy"},{"name":"doInitElement","tagname":"method","owner":"Ext.mixin.Templatable","meta":{"private":true},"id":"method-doInitElement"},{"name":"forceRefresh","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"method-forceRefresh"},{"name":"getArgs","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{},"id":"method-getArgs"},{"name":"getCallback","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{},"id":"method-getCallback"},{"name":"getContentBounds","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"method-getContentBounds"},{"name":"getContentHeight","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"method-getContentHeight"},{"name":"getContentWidth","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"method-getContentWidth"},{"name":"getElement","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{},"id":"method-getElement"},{"name":"getElementConfig","tagname":"method","owner":"Ext.mixin.Templatable","meta":{"private":true},"id":"method-getElementConfig"},{"name":"getElementTemplate","tagname":"method","owner":"Ext.mixin.Templatable","meta":{"private":true},"id":"method-getElementTemplate"},{"name":"getScope","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{},"id":"method-getScope"},{"name":"initElement","tagname":"method","owner":"Ext.mixin.Templatable","meta":{"private":true},"id":"method-initElement"},{"name":"linkElement","tagname":"method","owner":"Ext.mixin.Templatable","meta":{"private":true},"id":"method-linkElement"},{"name":"refresh","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"method-refresh"},{"name":"refreshMonitors","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"method-refreshMonitors"},{"name":"refreshSize","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"method-refreshSize"},{"name":"setArgs","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{},"id":"method-setArgs"},{"name":"setCallback","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{},"id":"method-setCallback"},{"name":"setElement","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{},"id":"method-setElement"},{"name":"setScope","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{},"id":"method-setScope"},{"name":"updateElement","tagname":"method","owner":"Ext.util.sizemonitor.Abstract","meta":{"private":true},"id":"method-updateElement"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Abstract.js","href":"Abstract15.html#Ext-util-sizemonitor-Abstract"}],"html_meta":{"private":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base"],"subclasses":["Ext.util.sizemonitor.OverflowChange"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.util.sizemonitor.Abstract</strong></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/Ext.mixin.Templatable' rel='Ext.mixin.Templatable' class='docClass'>Ext.mixin.Templatable</a></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.TaskQueue' rel='Ext.TaskQueue' class='docClass'>Ext.TaskQueue</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.util.sizemonitor.OverflowChange' rel='Ext.util.sizemonitor.OverflowChange' class='docClass'>Ext.util.sizemonitor.OverflowChange</a></div><h4>Files</h4><div class='dependency'><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract' target='_blank'>Abstract.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-args' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-cfg-args' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-cfg-args' class='name expandable'>args</a><span> : Array</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='cfg-callback' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-cfg-callback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-cfg-callback' class='name not-expandable'>callback</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-element' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-cfg-element' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-cfg-element' class='name not-expandable'>element</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-scope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-cfg-scope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-cfg-scope' class='name not-expandable'>scope</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-contentHeight' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-property-contentHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-property-contentHeight' class='name expandable'>contentHeight</a><span> : Number</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-contentWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-property-contentWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-property-contentWidth' class='name expandable'>contentWidth</a><span> : Number</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-height' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-property-height' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-property-height' class='name expandable'>height</a><span> : Number</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-mixinConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.mixin.Templatable' rel='Ext.mixin.Templatable' class='defined-in docClass'>Ext.mixin.Templatable</a><br/><a href='source/Templatable.html#Ext-mixin-Templatable-property-mixinConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.mixin.Templatable-property-mixinConfig' class='name expandable'>mixinConfig</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{id: 'templatable'}</code></p></div></div></div><div id='property-referenceAttributeName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.mixin.Templatable' rel='Ext.mixin.Templatable' class='defined-in docClass'>Ext.mixin.Templatable</a><br/><a href='source/Templatable.html#Ext-mixin-Templatable-property-referenceAttributeName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.mixin.Templatable-property-referenceAttributeName' class='name expandable'>referenceAttributeName</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'reference'</code></p></div></div></div><div id='property-referenceSelector' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.mixin.Templatable' rel='Ext.mixin.Templatable' class='defined-in docClass'>Ext.mixin.Templatable</a><br/><a href='source/Templatable.html#Ext-mixin-Templatable-property-referenceSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.mixin.Templatable-property-referenceSelector' class='name expandable'>referenceSelector</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'[reference]'</code></p></div></div></div><div id='property-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-property-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-property-width' class='name expandable'>width</a><span> : Number</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.util.sizemonitor.Abstract-method-constructor' class='name expandable'>Ext.util.sizemonitor.Abstract</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.util.sizemonitor.Abstract\" rel=\"Ext.util.sizemonitor.Abstract\" class=\"docClass\">Ext.util.sizemonitor.Abstract</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.sizemonitor.Abstract\" rel=\"Ext.util.sizemonitor.Abstract\" class=\"docClass\">Ext.util.sizemonitor.Abstract</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyArgs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-method-applyArgs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-applyArgs' class='name expandable'>applyArgs</a>( <span class='pre'>args</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-method-applyElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-applyElement' class='name expandable'>applyElement</a>( <span class='pre'>element</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-bindListeners' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-method-bindListeners' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-bindListeners' class='name expandable'>bindListeners</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-doInitElement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.mixin.Templatable' rel='Ext.mixin.Templatable' class='defined-in docClass'>Ext.mixin.Templatable</a><br/><a href='source/Templatable.html#Ext-mixin-Templatable-method-doInitElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.mixin.Templatable-method-doInitElement' class='name expandable'>doInitElement</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-forceRefresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-method-forceRefresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-forceRefresh' class='name expandable'>forceRefresh</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getArgs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-cfg-args' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-getArgs' class='name expandable'>getArgs</a>( <span class='pre'></span> ) : Array</div><div class='description'><div class='short'>Returns the value of args. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.util.sizemonitor.Abstract-cfg-args\" rel=\"Ext.util.sizemonitor.Abstract-cfg-args\" class=\"docClass\">args</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCallback' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-cfg-callback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-getCallback' class='name expandable'>getCallback</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of callback. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.util.sizemonitor.Abstract-cfg-callback\" rel=\"Ext.util.sizemonitor.Abstract-cfg-callback\" class=\"docClass\">callback</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getContentBounds' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-method-getContentBounds' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-getContentBounds' class='name expandable'>getContentBounds</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getContentHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-method-getContentHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-getContentHeight' class='name expandable'>getContentHeight</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getContentWidth' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-method-getContentWidth' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-getContentWidth' class='name expandable'>getContentWidth</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-cfg-element' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-getElement' class='name expandable'>getElement</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of element. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.util.sizemonitor.Abstract-cfg-element\" rel=\"Ext.util.sizemonitor.Abstract-cfg-element\" class=\"docClass\">element</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getElementConfig' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.mixin.Templatable' rel='Ext.mixin.Templatable' class='defined-in docClass'>Ext.mixin.Templatable</a><br/><a href='source/Templatable.html#Ext-mixin-Templatable-method-getElementConfig' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.mixin.Templatable-method-getElementConfig' class='name expandable'>getElementConfig</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getElementTemplate' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.mixin.Templatable' rel='Ext.mixin.Templatable' class='defined-in docClass'>Ext.mixin.Templatable</a><br/><a href='source/Templatable.html#Ext-mixin-Templatable-method-getElementTemplate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.mixin.Templatable-method-getElementTemplate' class='name expandable'>getElementTemplate</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getScope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-cfg-scope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-getScope' class='name expandable'>getScope</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of scope. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.util.sizemonitor.Abstract-cfg-scope\" rel=\"Ext.util.sizemonitor.Abstract-cfg-scope\" class=\"docClass\">scope</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-initElement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.mixin.Templatable' rel='Ext.mixin.Templatable' class='defined-in docClass'>Ext.mixin.Templatable</a><br/><a href='source/Templatable.html#Ext-mixin-Templatable-method-initElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.mixin.Templatable-method-initElement' class='name expandable'>initElement</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-linkElement' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.mixin.Templatable' rel='Ext.mixin.Templatable' class='defined-in docClass'>Ext.mixin.Templatable</a><br/><a href='source/Templatable.html#Ext-mixin-Templatable-method-linkElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.mixin.Templatable-method-linkElement' class='name expandable'>linkElement</a>( <span class='pre'>reference, node</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>reference</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-refresh' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-method-refresh' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-refresh' class='name expandable'>refresh</a>( <span class='pre'>force</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>force</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-refreshMonitors' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-method-refreshMonitors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-refreshMonitors' class='name expandable'>refreshMonitors</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-refreshSize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-method-refreshSize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-refreshSize' class='name expandable'>refreshSize</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setArgs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-cfg-args' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-setArgs' class='name expandable'>setArgs</a>( <span class='pre'>args</span> )</div><div class='description'><div class='short'>Sets the value of args. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.util.sizemonitor.Abstract-cfg-args\" rel=\"Ext.util.sizemonitor.Abstract-cfg-args\" class=\"docClass\">args</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Array<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setCallback' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-cfg-callback' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-setCallback' class='name expandable'>setCallback</a>( <span class='pre'>callback</span> )</div><div class='description'><div class='short'>Sets the value of callback. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.util.sizemonitor.Abstract-cfg-callback\" rel=\"Ext.util.sizemonitor.Abstract-cfg-callback\" class=\"docClass\">callback</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callback</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-cfg-element' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-setElement' class='name expandable'>setElement</a>( <span class='pre'>element</span> )</div><div class='description'><div class='short'>Sets the value of element. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.util.sizemonitor.Abstract-cfg-element\" rel=\"Ext.util.sizemonitor.Abstract-cfg-element\" class=\"docClass\">element</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setScope' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-cfg-scope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-setScope' class='name expandable'>setScope</a>( <span class='pre'>scope</span> )</div><div class='description'><div class='short'>Sets the value of scope. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.util.sizemonitor.Abstract-cfg-scope\" rel=\"Ext.util.sizemonitor.Abstract-cfg-scope\" class=\"docClass\">scope</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.sizemonitor.Abstract'>Ext.util.sizemonitor.Abstract</span><br/><a href='source/Abstract15.html#Ext-util-sizemonitor-Abstract-method-updateElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.sizemonitor.Abstract-method-updateElement' class='name expandable'>updateElement</a>( <span class='pre'>element</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});