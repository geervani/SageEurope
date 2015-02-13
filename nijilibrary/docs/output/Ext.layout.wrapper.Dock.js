Ext.data.JsonP.Ext_layout_wrapper_Dock({"tagname":"class","name":"Ext.layout.wrapper.Dock","extends":"Ext.Base","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":["Ext.util.Wrapper"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ext.layout.wrapper.Dock","code_type":"ext_define","members":{"cfg":[{"name":"bodyElement","tagname":"cfg","owner":"Ext.layout.wrapper.Dock","meta":{"private":true},"id":"cfg-bodyElement"},{"name":"container","tagname":"cfg","owner":"Ext.layout.wrapper.Dock","meta":{"private":true},"id":"cfg-container"},{"name":"direction","tagname":"cfg","owner":"Ext.layout.wrapper.Dock","meta":{"private":true},"id":"cfg-direction"},{"name":"element","tagname":"cfg","owner":"Ext.layout.wrapper.Dock","meta":{"private":true},"id":"cfg-element"},{"name":"innerWrapper","tagname":"cfg","owner":"Ext.layout.wrapper.Dock","meta":{"private":true},"id":"cfg-innerWrapper"},{"name":"sizeState","tagname":"cfg","owner":"Ext.layout.wrapper.Dock","meta":{"private":true},"id":"cfg-sizeState"}],"property":[{"name":"positionMap","tagname":"property","owner":"Ext.layout.wrapper.Dock","meta":{"private":true},"id":"property-positionMap"}],"method":[{"name":"constructor","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{},"id":"method-constructor"},{"name":"addItem","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{"private":true},"id":"method-addItem"},{"name":"addItems","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{"private":true},"id":"method-addItems"},{"name":"applyBodyElement","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{"private":true},"id":"method-applyBodyElement"},{"name":"applyElement","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{"private":true},"id":"method-applyElement"},{"name":"destroy","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{"private":true},"id":"method-destroy"},{"name":"getBodyElement","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{},"id":"method-getBodyElement"},{"name":"getContainer","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{},"id":"method-getContainer"},{"name":"getDirection","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{},"id":"method-getDirection"},{"name":"getElement","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{},"id":"method-getElement"},{"name":"getInnerWrapper","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{},"id":"method-getInnerWrapper"},{"name":"getItemsSlice","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{"private":true},"id":"method-getItemsSlice"},{"name":"getSizeState","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{},"id":"method-getSizeState"},{"name":"removeItem","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{"private":true},"id":"method-removeItem"},{"name":"setBodyElement","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{},"id":"method-setBodyElement"},{"name":"setContainer","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{},"id":"method-setContainer"},{"name":"setDirection","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{},"id":"method-setDirection"},{"name":"setElement","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{},"id":"method-setElement"},{"name":"setInnerWrapper","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{},"id":"method-setInnerWrapper"},{"name":"setSizeState","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{},"id":"method-setSizeState"},{"name":"updateBodyElement","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{"private":true},"id":"method-updateBodyElement"},{"name":"updateElement","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{"private":true},"id":"method-updateElement"},{"name":"updateInnerWrapper","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{"private":true},"id":"method-updateInnerWrapper"},{"name":"updateSizeState","tagname":"method","owner":"Ext.layout.wrapper.Dock","meta":{"private":true},"id":"method-updateSizeState"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Dock.js","href":"Dock.html#Ext-layout-wrapper-Dock"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.layout.wrapper.Dock</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.util.Wrapper</div><h4>Files</h4><div class='dependency'><a href='source/Dock.html#Ext-layout-wrapper-Dock' target='_blank'>Dock.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-bodyElement' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-cfg-bodyElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-cfg-bodyElement' class='name expandable'>bodyElement</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{className: 'x-dock-body'}</code></p></div></div></div><div id='cfg-container' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-cfg-container' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-cfg-container' class='name not-expandable'>container</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-direction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-cfg-direction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-cfg-direction' class='name expandable'>direction</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'horizontal'</code></p></div></div></div><div id='cfg-element' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-cfg-element' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-cfg-element' class='name expandable'>element</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{className: 'x-dock'}</code></p></div></div></div><div id='cfg-innerWrapper' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-cfg-innerWrapper' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-cfg-innerWrapper' class='name not-expandable'>innerWrapper</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-sizeState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-cfg-sizeState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-cfg-sizeState' class='name expandable'>sizeState</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-positionMap' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-property-positionMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-property-positionMap' class='name expandable'>positionMap</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{top: 'start', left: 'start', bottom: 'end', right: 'end'}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.layout.wrapper.Dock-method-constructor' class='name expandable'>Ext.layout.wrapper.Dock</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.layout.wrapper.Dock\" rel=\"Ext.layout.wrapper.Dock\" class=\"docClass\">Ext.layout.wrapper.Dock</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.layout.wrapper.Dock\" rel=\"Ext.layout.wrapper.Dock\" class=\"docClass\">Ext.layout.wrapper.Dock</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-method-addItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-addItem' class='name expandable'>addItem</a>( <span class='pre'>item</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addItems' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-method-addItems' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-addItems' class='name expandable'>addItems</a>( <span class='pre'>items</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>items</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyBodyElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-method-applyBodyElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-applyBodyElement' class='name expandable'>applyBodyElement</a>( <span class='pre'>bodyElement</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bodyElement</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-method-applyElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-applyElement' class='name expandable'>applyElement</a>( <span class='pre'>element</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getBodyElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-cfg-bodyElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-getBodyElement' class='name expandable'>getBodyElement</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of bodyElement. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.layout.wrapper.Dock-cfg-bodyElement\" rel=\"Ext.layout.wrapper.Dock-cfg-bodyElement\" class=\"docClass\">bodyElement</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getContainer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-cfg-container' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-getContainer' class='name expandable'>getContainer</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of container. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.layout.wrapper.Dock-cfg-container\" rel=\"Ext.layout.wrapper.Dock-cfg-container\" class=\"docClass\">container</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-cfg-direction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-getDirection' class='name expandable'>getDirection</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of direction. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.layout.wrapper.Dock-cfg-direction\" rel=\"Ext.layout.wrapper.Dock-cfg-direction\" class=\"docClass\">direction</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-cfg-element' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-getElement' class='name expandable'>getElement</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of element. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.layout.wrapper.Dock-cfg-element\" rel=\"Ext.layout.wrapper.Dock-cfg-element\" class=\"docClass\">element</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getInnerWrapper' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-cfg-innerWrapper' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-getInnerWrapper' class='name expandable'>getInnerWrapper</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of innerWrapper. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.layout.wrapper.Dock-cfg-innerWrapper\" rel=\"Ext.layout.wrapper.Dock-cfg-innerWrapper\" class=\"docClass\">innerWrapper</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getItemsSlice' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-method-getItemsSlice' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-getItemsSlice' class='name expandable'>getItemsSlice</a>( <span class='pre'>index</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>index</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSizeState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-cfg-sizeState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-getSizeState' class='name expandable'>getSizeState</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of sizeState. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.layout.wrapper.Dock-cfg-sizeState\" rel=\"Ext.layout.wrapper.Dock-cfg-sizeState\" class=\"docClass\">sizeState</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-removeItem' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-method-removeItem' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-removeItem' class='name expandable'>removeItem</a>( <span class='pre'>item</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setBodyElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-cfg-bodyElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-setBodyElement' class='name expandable'>setBodyElement</a>( <span class='pre'>bodyElement</span> )</div><div class='description'><div class='short'>Sets the value of bodyElement. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.layout.wrapper.Dock-cfg-bodyElement\" rel=\"Ext.layout.wrapper.Dock-cfg-bodyElement\" class=\"docClass\">bodyElement</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bodyElement</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setContainer' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-cfg-container' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-setContainer' class='name expandable'>setContainer</a>( <span class='pre'>container</span> )</div><div class='description'><div class='short'>Sets the value of container. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.layout.wrapper.Dock-cfg-container\" rel=\"Ext.layout.wrapper.Dock-cfg-container\" class=\"docClass\">container</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>container</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-cfg-direction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-setDirection' class='name expandable'>setDirection</a>( <span class='pre'>direction</span> )</div><div class='description'><div class='short'>Sets the value of direction. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.layout.wrapper.Dock-cfg-direction\" rel=\"Ext.layout.wrapper.Dock-cfg-direction\" class=\"docClass\">direction</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>direction</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-cfg-element' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-setElement' class='name expandable'>setElement</a>( <span class='pre'>element</span> )</div><div class='description'><div class='short'>Sets the value of element. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.layout.wrapper.Dock-cfg-element\" rel=\"Ext.layout.wrapper.Dock-cfg-element\" class=\"docClass\">element</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setInnerWrapper' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-cfg-innerWrapper' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-setInnerWrapper' class='name expandable'>setInnerWrapper</a>( <span class='pre'>innerWrapper</span> )</div><div class='description'><div class='short'>Sets the value of innerWrapper. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.layout.wrapper.Dock-cfg-innerWrapper\" rel=\"Ext.layout.wrapper.Dock-cfg-innerWrapper\" class=\"docClass\">innerWrapper</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>innerWrapper</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setSizeState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-cfg-sizeState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-setSizeState' class='name expandable'>setSizeState</a>( <span class='pre'>sizeState</span> )</div><div class='description'><div class='short'>Sets the value of sizeState. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.layout.wrapper.Dock-cfg-sizeState\" rel=\"Ext.layout.wrapper.Dock-cfg-sizeState\" class=\"docClass\">sizeState</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sizeState</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateBodyElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-method-updateBodyElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-updateBodyElement' class='name expandable'>updateBodyElement</a>( <span class='pre'>bodyElement</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>bodyElement</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateElement' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-method-updateElement' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-updateElement' class='name expandable'>updateElement</a>( <span class='pre'>element</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>element</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateInnerWrapper' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-method-updateInnerWrapper' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-updateInnerWrapper' class='name expandable'>updateInnerWrapper</a>( <span class='pre'>innerWrapper, oldInnerWrapper</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>innerWrapper</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>oldInnerWrapper</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateSizeState' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.layout.wrapper.Dock'>Ext.layout.wrapper.Dock</span><br/><a href='source/Dock.html#Ext-layout-wrapper-Dock-method-updateSizeState' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.layout.wrapper.Dock-method-updateSizeState' class='name expandable'>updateSizeState</a>( <span class='pre'>state</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>state</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});