Ext.data.JsonP.Ext_draw_modifier_Target({"tagname":"class","name":"Ext.draw.modifier.Target","extends":"Ext.draw.modifier.Modifier","mixins":[],"alternateClassNames":[],"aliases":{"modifier":["target"]},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ext.draw.modifier.Target","code_type":"ext_define","members":{"cfg":[{"name":"next","tagname":"cfg","owner":"Ext.draw.modifier.Modifier","meta":{},"id":"cfg-next"},{"name":"previous","tagname":"cfg","owner":"Ext.draw.modifier.Modifier","meta":{},"id":"cfg-previous"},{"name":"sprite","tagname":"cfg","owner":"Ext.draw.modifier.Modifier","meta":{},"id":"cfg-sprite"}],"property":[],"method":[{"name":"constructor","tagname":"method","owner":"Ext.draw.modifier.Modifier","meta":{},"id":"method-constructor"},{"name":"getNext","tagname":"method","owner":"Ext.draw.modifier.Modifier","meta":{},"id":"method-getNext"},{"name":"getPrevious","tagname":"method","owner":"Ext.draw.modifier.Modifier","meta":{},"id":"method-getPrevious"},{"name":"getSprite","tagname":"method","owner":"Ext.draw.modifier.Modifier","meta":{},"id":"method-getSprite"},{"name":"popUp","tagname":"method","owner":"Ext.draw.modifier.Target","meta":{},"id":"method-popUp"},{"name":"prepareAttributes","tagname":"method","owner":"Ext.draw.modifier.Target","meta":{},"id":"method-prepareAttributes"},{"name":"pushDown","tagname":"method","owner":"Ext.draw.modifier.Target","meta":{},"id":"method-pushDown"},{"name":"setDirtyFlags","tagname":"method","owner":"Ext.draw.modifier.Target","meta":{"private":true},"id":"method-setDirtyFlags"},{"name":"setNext","tagname":"method","owner":"Ext.draw.modifier.Modifier","meta":{},"id":"method-setNext"},{"name":"setPrevious","tagname":"method","owner":"Ext.draw.modifier.Modifier","meta":{},"id":"method-setPrevious"},{"name":"setSprite","tagname":"method","owner":"Ext.draw.modifier.Modifier","meta":{},"id":"method-setSprite"},{"name":"updateNext","tagname":"method","owner":"Ext.draw.modifier.Modifier","meta":{"private":true},"id":"method-updateNext"},{"name":"updatePrev","tagname":"method","owner":"Ext.draw.modifier.Modifier","meta":{"private":true},"id":"method-updatePrev"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Target.js","href":"Target.html#Ext-draw-modifier-Target"}],"html_meta":{},"statics":{"cfg":[],"property":[{"name":"uniqueId","tagname":"property","owner":"Ext.draw.modifier.Target","meta":{"private":true,"static":true},"id":"property-uniqueId"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base","Ext.draw.modifier.Modifier"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.draw.modifier.Modifier' rel='Ext.draw.modifier.Modifier' class='docClass'>Ext.draw.modifier.Modifier</a><div class='subclass '><strong>Ext.draw.modifier.Target</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Target.html#Ext-draw-modifier-Target' target='_blank'>Target.js</a></div></pre><div class='doc-contents'><p>This is the destination modifier that has to be put at\nthe top of the modifier stack.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-next' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.draw.modifier.Modifier' rel='Ext.draw.modifier.Modifier' class='defined-in docClass'>Ext.draw.modifier.Modifier</a><br/><a href='source/Modifier.html#Ext-draw-modifier-Modifier-cfg-next' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.modifier.Modifier-cfg-next' class='name not-expandable'>next</a><span> : <a href=\"#!/api/Ext.draw.modifier.Modifier\" rel=\"Ext.draw.modifier.Modifier\" class=\"docClass\">Ext.draw.modifier.Modifier</a></span></div><div class='description'><div class='short'><p>Next modifier that receives the\npop-up changes.</p>\n</div><div class='long'><p>Next modifier that receives the\npop-up changes.</p>\n</div></div></div><div id='cfg-previous' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.draw.modifier.Modifier' rel='Ext.draw.modifier.Modifier' class='defined-in docClass'>Ext.draw.modifier.Modifier</a><br/><a href='source/Modifier.html#Ext-draw-modifier-Modifier-cfg-previous' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.modifier.Modifier-cfg-previous' class='name not-expandable'>previous</a><span> : <a href=\"#!/api/Ext.draw.modifier.Modifier\" rel=\"Ext.draw.modifier.Modifier\" class=\"docClass\">Ext.draw.modifier.Modifier</a></span></div><div class='description'><div class='short'><p>Previous modifier that receives\nthe push-down changes.</p>\n</div><div class='long'><p>Previous modifier that receives\nthe push-down changes.</p>\n</div></div></div><div id='cfg-sprite' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.draw.modifier.Modifier' rel='Ext.draw.modifier.Modifier' class='defined-in docClass'>Ext.draw.modifier.Modifier</a><br/><a href='source/Modifier.html#Ext-draw-modifier-Modifier-cfg-sprite' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.modifier.Modifier-cfg-sprite' class='name not-expandable'>sprite</a><span> : <a href=\"#!/api/Ext.draw.sprite.Sprite\" rel=\"Ext.draw.sprite.Sprite\" class=\"docClass\">Ext.draw.sprite.Sprite</a></span></div><div class='description'><div class='short'><p>The sprite that the modifier is bound.</p>\n</div><div class='long'><p>The sprite that the modifier is bound.</p>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Properties</h3><div id='property-uniqueId' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.modifier.Target'>Ext.draw.modifier.Target</span><br/><a href='source/Target.html#Ext-draw-modifier-Target-property-uniqueId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.modifier.Target-property-uniqueId' class='name expandable'>uniqueId</a><span> : Number</span><strong class='private signature' >private</strong><strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.draw.modifier.Modifier' rel='Ext.draw.modifier.Modifier' class='defined-in docClass'>Ext.draw.modifier.Modifier</a><br/><a href='source/Modifier.html#Ext-draw-modifier-Modifier-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.draw.modifier.Modifier-method-constructor' class='name expandable'>Ext.draw.modifier.Target</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.draw.modifier.Modifier\" rel=\"Ext.draw.modifier.Modifier\" class=\"docClass\">Ext.draw.modifier.Modifier</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.draw.modifier.Modifier\" rel=\"Ext.draw.modifier.Modifier\" class=\"docClass\">Ext.draw.modifier.Modifier</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getNext' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.draw.modifier.Modifier' rel='Ext.draw.modifier.Modifier' class='defined-in docClass'>Ext.draw.modifier.Modifier</a><br/><a href='source/Modifier.html#Ext-draw-modifier-Modifier-cfg-next' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.modifier.Modifier-method-getNext' class='name expandable'>getNext</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.draw.modifier.Modifier\" rel=\"Ext.draw.modifier.Modifier\" class=\"docClass\">Ext.draw.modifier.Modifier</a></div><div class='description'><div class='short'>Returns the value of next. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.draw.modifier.Modifier-cfg-next\" rel=\"Ext.draw.modifier.Modifier-cfg-next\" class=\"docClass\">next</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.draw.modifier.Modifier\" rel=\"Ext.draw.modifier.Modifier\" class=\"docClass\">Ext.draw.modifier.Modifier</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getPrevious' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.draw.modifier.Modifier' rel='Ext.draw.modifier.Modifier' class='defined-in docClass'>Ext.draw.modifier.Modifier</a><br/><a href='source/Modifier.html#Ext-draw-modifier-Modifier-cfg-previous' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.modifier.Modifier-method-getPrevious' class='name expandable'>getPrevious</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.draw.modifier.Modifier\" rel=\"Ext.draw.modifier.Modifier\" class=\"docClass\">Ext.draw.modifier.Modifier</a></div><div class='description'><div class='short'>Returns the value of previous. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.draw.modifier.Modifier-cfg-previous\" rel=\"Ext.draw.modifier.Modifier-cfg-previous\" class=\"docClass\">previous</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.draw.modifier.Modifier\" rel=\"Ext.draw.modifier.Modifier\" class=\"docClass\">Ext.draw.modifier.Modifier</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSprite' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.draw.modifier.Modifier' rel='Ext.draw.modifier.Modifier' class='defined-in docClass'>Ext.draw.modifier.Modifier</a><br/><a href='source/Modifier.html#Ext-draw-modifier-Modifier-cfg-sprite' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.modifier.Modifier-method-getSprite' class='name expandable'>getSprite</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.draw.sprite.Sprite\" rel=\"Ext.draw.sprite.Sprite\" class=\"docClass\">Ext.draw.sprite.Sprite</a></div><div class='description'><div class='short'>Returns the value of sprite. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.draw.modifier.Modifier-cfg-sprite\" rel=\"Ext.draw.modifier.Modifier-cfg-sprite\" class=\"docClass\">sprite</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.draw.sprite.Sprite\" rel=\"Ext.draw.sprite.Sprite\" class=\"docClass\">Ext.draw.sprite.Sprite</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-popUp' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.modifier.Target'>Ext.draw.modifier.Target</span><br/><a href='source/Target.html#Ext-draw-modifier-Target-method-popUp' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.modifier.Target-method-popUp' class='name expandable'>popUp</a>( <span class='pre'>attributes, changes</span> )</div><div class='description'><div class='short'>Invoked when changes need to be popped up to the top. ...</div><div class='long'><p>Invoked when changes need to be popped up to the top.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attributes</span> : Object<div class='sub-desc'><p>The source attributes.</p>\n\n\n\n</div></li><li><span class='pre'>changes</span> : Object<div class='sub-desc'><p>The changes to be popped up.</p>\n\n\n\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.draw.modifier.Modifier-method-popUp' rel='Ext.draw.modifier.Modifier-method-popUp' class='docClass'>Ext.draw.modifier.Modifier.popUp</a></p></div></div></div><div id='method-prepareAttributes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.modifier.Target'>Ext.draw.modifier.Target</span><br/><a href='source/Target.html#Ext-draw-modifier-Target-method-prepareAttributes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.modifier.Target-method-prepareAttributes' class='name expandable'>prepareAttributes</a>( <span class='pre'>attr</span> )</div><div class='description'><div class='short'>Validate attribute set before use. ...</div><div class='long'><p>Validate attribute set before use.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attr</span> : Object<div class='sub-desc'><p>The attribute to be validated. Note that it may be already initialized, so do\nnot override properties that has already be used.</p>\n\n\n\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.draw.modifier.Modifier-method-prepareAttributes' rel='Ext.draw.modifier.Modifier-method-prepareAttributes' class='docClass'>Ext.draw.modifier.Modifier.prepareAttributes</a></p></div></div></div><div id='method-pushDown' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.modifier.Target'>Ext.draw.modifier.Target</span><br/><a href='source/Target.html#Ext-draw-modifier-Target-method-pushDown' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.modifier.Target-method-pushDown' class='name expandable'>pushDown</a>( <span class='pre'>attr, changes</span> ) : Mixed</div><div class='description'><div class='short'>Invoked when changes need to pushed down to the sprite. ...</div><div class='long'><p>Invoked when changes need to pushed down to the sprite.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attr</span> : Object<div class='sub-desc'><p>The source attributes.</p>\n\n\n\n</div></li><li><span class='pre'>changes</span> : Object<div class='sub-desc'><p>The changes to make. This object might be changed unexpectedly inside the method.</p>\n\n\n\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Mixed</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.draw.modifier.Modifier-method-pushDown' rel='Ext.draw.modifier.Modifier-method-pushDown' class='docClass'>Ext.draw.modifier.Modifier.pushDown</a></p></div></div></div><div id='method-setDirtyFlags' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.modifier.Target'>Ext.draw.modifier.Target</span><br/><a href='source/Target.html#Ext-draw-modifier-Target-method-setDirtyFlags' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.modifier.Target-method-setDirtyFlags' class='name expandable'>setDirtyFlags</a>( <span class='pre'>attr, changes</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Applies the appropriate dirty flags from the modifier changes. ...</div><div class='long'><p>Applies the appropriate dirty flags from the modifier changes.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>attr</span> : Object<div class='sub-desc'><p>The source attributes.</p>\n</div></li><li><span class='pre'>changes</span> : Object<div class='sub-desc'><p>The modifier changes.</p>\n</div></li></ul></div></div></div><div id='method-setNext' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.draw.modifier.Modifier' rel='Ext.draw.modifier.Modifier' class='defined-in docClass'>Ext.draw.modifier.Modifier</a><br/><a href='source/Modifier.html#Ext-draw-modifier-Modifier-cfg-next' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.modifier.Modifier-method-setNext' class='name expandable'>setNext</a>( <span class='pre'>next</span> )</div><div class='description'><div class='short'>Sets the value of next. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.draw.modifier.Modifier-cfg-next\" rel=\"Ext.draw.modifier.Modifier-cfg-next\" class=\"docClass\">next</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>next</span> : <a href=\"#!/api/Ext.draw.modifier.Modifier\" rel=\"Ext.draw.modifier.Modifier\" class=\"docClass\">Ext.draw.modifier.Modifier</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setPrevious' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.draw.modifier.Modifier' rel='Ext.draw.modifier.Modifier' class='defined-in docClass'>Ext.draw.modifier.Modifier</a><br/><a href='source/Modifier.html#Ext-draw-modifier-Modifier-cfg-previous' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.modifier.Modifier-method-setPrevious' class='name expandable'>setPrevious</a>( <span class='pre'>previous</span> )</div><div class='description'><div class='short'>Sets the value of previous. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.draw.modifier.Modifier-cfg-previous\" rel=\"Ext.draw.modifier.Modifier-cfg-previous\" class=\"docClass\">previous</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>previous</span> : <a href=\"#!/api/Ext.draw.modifier.Modifier\" rel=\"Ext.draw.modifier.Modifier\" class=\"docClass\">Ext.draw.modifier.Modifier</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setSprite' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.draw.modifier.Modifier' rel='Ext.draw.modifier.Modifier' class='defined-in docClass'>Ext.draw.modifier.Modifier</a><br/><a href='source/Modifier.html#Ext-draw-modifier-Modifier-cfg-sprite' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.modifier.Modifier-method-setSprite' class='name expandable'>setSprite</a>( <span class='pre'>sprite</span> )</div><div class='description'><div class='short'>Sets the value of sprite. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.draw.modifier.Modifier-cfg-sprite\" rel=\"Ext.draw.modifier.Modifier-cfg-sprite\" class=\"docClass\">sprite</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sprite</span> : <a href=\"#!/api/Ext.draw.sprite.Sprite\" rel=\"Ext.draw.sprite.Sprite\" class=\"docClass\">Ext.draw.sprite.Sprite</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateNext' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.draw.modifier.Modifier' rel='Ext.draw.modifier.Modifier' class='defined-in docClass'>Ext.draw.modifier.Modifier</a><br/><a href='source/Modifier.html#Ext-draw-modifier-Modifier-method-updateNext' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.modifier.Modifier-method-updateNext' class='name expandable'>updateNext</a>( <span class='pre'>next</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>next</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updatePrev' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.draw.modifier.Modifier' rel='Ext.draw.modifier.Modifier' class='defined-in docClass'>Ext.draw.modifier.Modifier</a><br/><a href='source/Modifier.html#Ext-draw-modifier-Modifier-method-updatePrev' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.modifier.Modifier-method-updatePrev' class='name expandable'>updatePrev</a>( <span class='pre'>prev</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>prev</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});