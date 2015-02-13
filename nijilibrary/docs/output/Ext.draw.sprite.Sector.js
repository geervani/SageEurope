Ext.data.JsonP.Ext_draw_sprite_Sector({"tagname":"class","name":"Ext.draw.sprite.Sector","extends":"Ext.draw.sprite.Path","mixins":[],"alternateClassNames":[],"aliases":{"sprite":["sector"]},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ext.draw.sprite.Sector","code_type":"ext_define","members":{"cfg":[{"name":"centerX","tagname":"cfg","owner":"Ext.draw.sprite.Sector","meta":{},"id":"cfg-centerX"},{"name":"centerY","tagname":"cfg","owner":"Ext.draw.sprite.Sector","meta":{},"id":"cfg-centerY"},{"name":"endAngle","tagname":"cfg","owner":"Ext.draw.sprite.Sector","meta":{},"id":"cfg-endAngle"},{"name":"endRho","tagname":"cfg","owner":"Ext.draw.sprite.Sector","meta":{},"id":"cfg-endRho"},{"name":"margin","tagname":"cfg","owner":"Ext.draw.sprite.Sector","meta":{},"id":"cfg-margin"},{"name":"startAngle","tagname":"cfg","owner":"Ext.draw.sprite.Sector","meta":{},"id":"cfg-startAngle"},{"name":"startRho","tagname":"cfg","owner":"Ext.draw.sprite.Sector","meta":{},"id":"cfg-startRho"}],"property":[{"name":"type","tagname":"property","owner":"Ext.draw.sprite.Sector","meta":{"private":true},"id":"property-type"}],"method":[{"name":"updatePath","tagname":"method","owner":"Ext.draw.sprite.Sector","meta":{"private":true},"id":"method-updatePath"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Sector.js","href":"Sector.html#Ext-draw-sprite-Sector"}],"html_meta":{},"statics":{"cfg":[],"property":[{"name":"def","tagname":"property","owner":"Ext.draw.sprite.Sector","meta":{"static":true,"private":true},"id":"property-def"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.draw.sprite.Path"],"subclasses":["Ext.chart.series.sprite.PieSlice"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.draw.sprite.Path<div class='subclass '><strong>Ext.draw.sprite.Sector</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.chart.series.sprite.PieSlice' rel='Ext.chart.series.sprite.PieSlice' class='docClass'>Ext.chart.series.sprite.PieSlice</a></div><h4>Files</h4><div class='dependency'><a href='source/Sector.html#Ext-draw-sprite-Sector' target='_blank'>Sector.js</a></div></pre><div class='doc-contents'><p>A sprite representing a pie slice.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-centerX' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Sector'>Ext.draw.sprite.Sector</span><br/><a href='source/Sector.html#Ext-draw-sprite-Sector-cfg-centerX' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Sector-cfg-centerX' class='name expandable'>centerX</a><span> : Number</span></div><div class='description'><div class='short'>The center coordinate of the sprite on the x-axis. ...</div><div class='long'><p>The center coordinate of the sprite on the x-axis.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-centerY' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Sector'>Ext.draw.sprite.Sector</span><br/><a href='source/Sector.html#Ext-draw-sprite-Sector-cfg-centerY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Sector-cfg-centerY' class='name expandable'>centerY</a><span> : Number</span></div><div class='description'><div class='short'>The center coordinate of the sprite on the y-axis. ...</div><div class='long'><p>The center coordinate of the sprite on the y-axis.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-endAngle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Sector'>Ext.draw.sprite.Sector</span><br/><a href='source/Sector.html#Ext-draw-sprite-Sector-cfg-endAngle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Sector-cfg-endAngle' class='name expandable'>endAngle</a><span> : Number</span></div><div class='description'><div class='short'>The ending angle of the sprite. ...</div><div class='long'><p>The ending angle of the sprite.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-endRho' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Sector'>Ext.draw.sprite.Sector</span><br/><a href='source/Sector.html#Ext-draw-sprite-Sector-cfg-endRho' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Sector-cfg-endRho' class='name expandable'>endRho</a><span> : Number</span></div><div class='description'><div class='short'>The ending point of the radius of the sprite. ...</div><div class='long'><p>The ending point of the radius of the sprite.</p>\n<p>Defaults to: <code>150</code></p></div></div></div><div id='cfg-margin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Sector'>Ext.draw.sprite.Sector</span><br/><a href='source/Sector.html#Ext-draw-sprite-Sector-cfg-margin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Sector-cfg-margin' class='name expandable'>margin</a><span> : Number</span></div><div class='description'><div class='short'>The margin of the sprite from the center of pie. ...</div><div class='long'><p>The margin of the sprite from the center of pie.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-startAngle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Sector'>Ext.draw.sprite.Sector</span><br/><a href='source/Sector.html#Ext-draw-sprite-Sector-cfg-startAngle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Sector-cfg-startAngle' class='name expandable'>startAngle</a><span> : Number</span></div><div class='description'><div class='short'>The starting angle of the sprite. ...</div><div class='long'><p>The starting angle of the sprite.</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-startRho' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Sector'>Ext.draw.sprite.Sector</span><br/><a href='source/Sector.html#Ext-draw-sprite-Sector-cfg-startRho' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Sector-cfg-startRho' class='name expandable'>startRho</a><span> : Number</span></div><div class='description'><div class='short'>The starting point of the radius of the sprite. ...</div><div class='long'><p>The starting point of the radius of the sprite.</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Properties</h3><div id='property-type' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Sector'>Ext.draw.sprite.Sector</span><br/><a href='source/Sector.html#Ext-draw-sprite-Sector-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Sector-property-type' class='name expandable'>type</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'sector'</code></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Properties</h3><div id='property-def' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Sector'>Ext.draw.sprite.Sector</span><br/><a href='source/Sector.html#Ext-draw-sprite-Sector-property-def' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Sector-property-def' class='name expandable'>def</a><span> : Object</span><strong class='private signature' >private</strong><strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{processors: {centerX: &quot;number&quot;, centerY: &quot;number&quot;, startAngle: &quot;number&quot;, endAngle: &quot;number&quot;, startRho: &quot;number&quot;, endRho: &quot;number&quot;, margin: &quot;number&quot;}, aliases: {rho: 'endRho'}, dirtyTriggers: {centerX: &quot;path,bbox&quot;, centerY: &quot;path,bbox&quot;, startAngle: &quot;path,bbox&quot;, endAngle: &quot;path,bbox&quot;, startRho: &quot;path,bbox&quot;, endRho: &quot;path,bbox&quot;, margin: &quot;path,bbox&quot;}, defaults: {centerX: 0, centerY: 0, startAngle: 0, endAngle: 0, startRho: 0, endRho: 150, margin: 0, path: 'M 0,0'}}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-updatePath' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.draw.sprite.Sector'>Ext.draw.sprite.Sector</span><br/><a href='source/Sector.html#Ext-draw-sprite-Sector-method-updatePath' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.draw.sprite.Sector-method-updatePath' class='name expandable'>updatePath</a>( <span class='pre'>path, attr</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>path</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>attr</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});