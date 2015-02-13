Ext.data.JsonP.Ext_draw_sprite_Rect({"tagname":"class","name":"Ext.draw.sprite.Rect","extends":"Ext.draw.sprite.Path","mixins":[],"alternateClassNames":[],"aliases":{"sprite":["rect"]},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ext.draw.sprite.Rect","code_type":"ext_define","members":{"cfg":[{"name":"height","tagname":"cfg","owner":"Ext.draw.sprite.Rect","meta":{},"id":"cfg-height"},{"name":"radius","tagname":"cfg","owner":"Ext.draw.sprite.Rect","meta":{},"id":"cfg-radius"},{"name":"width","tagname":"cfg","owner":"Ext.draw.sprite.Rect","meta":{},"id":"cfg-width"},{"name":"x","tagname":"cfg","owner":"Ext.draw.sprite.Rect","meta":{},"id":"cfg-x"},{"name":"y","tagname":"cfg","owner":"Ext.draw.sprite.Rect","meta":{},"id":"cfg-y"}],"property":[{"name":"type","tagname":"property","owner":"Ext.draw.sprite.Rect","meta":{"private":true},"id":"property-type"}],"method":[{"name":"updatePath","tagname":"method","owner":"Ext.draw.sprite.Rect","meta":{"private":true},"id":"method-updatePath"},{"name":"updatePlainBBox","tagname":"method","owner":"Ext.draw.sprite.Rect","meta":{"private":true},"id":"method-updatePlainBBox"},{"name":"updateTransformedBBox","tagname":"method","owner":"Ext.draw.sprite.Rect","meta":{"private":true},"id":"method-updateTransformedBBox"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Rect.js","href":"Rect.html#Ext-draw-sprite-Rect"}],"html_meta":{},"statics":{"cfg":[],"property":[{"name":"def","tagname":"property","owner":"Ext.draw.sprite.Rect","meta":{"static":true,"private":true},"id":"property-def"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.draw.sprite.Path"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.draw.sprite.Path<div class='subclass '><strong>Ext.draw.sprite.Rect</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Rect.html#Ext-draw-sprite-Rect' target='_blank'>Rect.js</a></div></pre><div class='doc-contents'><p>A sprite that represents a rectangle.</p>\n\n<pre class='inline-example preview miniphone'><code>var component = new Ext.draw.Component({\n  items: [{\n    type: 'rect',\n    x: 50,\n    y: 50,\n    width: 50,\n    height: 50,\n    fillStyle: 'blue'\n  }]\n});\nExt.Viewport.setLayout('fit');\nExt.Viewport.add(component);\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-height' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Rect'>Ext.draw.sprite.Rect</span><br/><a href='source/Rect.html#Ext-draw-sprite-Rect-cfg-height' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Rect-cfg-height' class='name expandable'>height</a><span> : Number</span></div><div class='description'><div class='short'>The height of the sprite. ...</div><div class='long'><p>The height of the sprite.</p>\n<p>Defaults to: <code>1</code></p></div></div></div><div id='cfg-radius' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Rect'>Ext.draw.sprite.Rect</span><br/><a href='source/Rect.html#Ext-draw-sprite-Rect-cfg-radius' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Rect-cfg-radius' class='name expandable'>radius</a><span> : Number</span></div><div class='description'><div class='short'>The radius of the rounded corners. ...</div><div class='long'><p>The radius of the rounded corners.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-width' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Rect'>Ext.draw.sprite.Rect</span><br/><a href='source/Rect.html#Ext-draw-sprite-Rect-cfg-width' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Rect-cfg-width' class='name expandable'>width</a><span> : Number</span></div><div class='description'><div class='short'>The width of the sprite. ...</div><div class='long'><p>The width of the sprite.</p>\n<p>Defaults to: <code>1</code></p></div></div></div><div id='cfg-x' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Rect'>Ext.draw.sprite.Rect</span><br/><a href='source/Rect.html#Ext-draw-sprite-Rect-cfg-x' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Rect-cfg-x' class='name expandable'>x</a><span> : Number</span></div><div class='description'><div class='short'>The position of the sprite on the x-axis. ...</div><div class='long'><p>The position of the sprite on the x-axis.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-y' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Rect'>Ext.draw.sprite.Rect</span><br/><a href='source/Rect.html#Ext-draw-sprite-Rect-cfg-y' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Rect-cfg-y' class='name expandable'>y</a><span> : Number</span></div><div class='description'><div class='short'>The position of the sprite on the y-axis. ...</div><div class='long'><p>The position of the sprite on the y-axis.</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Properties</h3><div id='property-type' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Rect'>Ext.draw.sprite.Rect</span><br/><a href='source/Rect.html#Ext-draw-sprite-Rect-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Rect-property-type' class='name expandable'>type</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'rect'</code></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Properties</h3><div id='property-def' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Rect'>Ext.draw.sprite.Rect</span><br/><a href='source/Rect.html#Ext-draw-sprite-Rect-property-def' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Rect-property-def' class='name expandable'>def</a><span> : Object</span><strong class='private signature' >private</strong><strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{processors: {x: 'number', y: 'number', width: 'number', height: 'number', radius: 'number'}, aliases: {}, dirtyTriggers: {x: 'path', y: 'path', width: 'path', height: 'path', radius: 'path'}, defaults: {x: 0, y: 0, width: 1, height: 1, radius: 0}}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-updatePath' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Rect'>Ext.draw.sprite.Rect</span><br/><a href='source/Rect.html#Ext-draw-sprite-Rect-method-updatePath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Rect-method-updatePath' class='name expandable'>updatePath</a>( <span class='pre'>path, attr</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>attr</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updatePlainBBox' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Rect'>Ext.draw.sprite.Rect</span><br/><a href='source/Rect.html#Ext-draw-sprite-Rect-method-updatePlainBBox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Rect-method-updatePlainBBox' class='name expandable'>updatePlainBBox</a>( <span class='pre'>plain</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>plain</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateTransformedBBox' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Rect'>Ext.draw.sprite.Rect</span><br/><a href='source/Rect.html#Ext-draw-sprite-Rect-method-updateTransformedBBox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Rect-method-updateTransformedBBox' class='name expandable'>updateTransformedBBox</a>( <span class='pre'>transform, plain</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>transform</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>plain</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});