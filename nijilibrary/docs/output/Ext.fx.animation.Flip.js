Ext.data.JsonP.Ext_fx_animation_Flip({"tagname":"class","name":"Ext.fx.animation.Flip","extends":"Ext.fx.animation.Abstract","mixins":[],"alternateClassNames":[],"aliases":{"animation":["flip"]},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"private":true},"private":true,"id":"class-Ext.fx.animation.Flip","code_type":"ext_define","members":{"cfg":[{"name":"direction","tagname":"cfg","owner":"Ext.fx.animation.Flip","meta":{},"id":"cfg-direction"},{"name":"easing","tagname":"cfg","owner":"Ext.fx.animation.Flip","meta":{"private":true},"id":"cfg-easing"},{"name":"half","tagname":"cfg","owner":"Ext.fx.animation.Flip","meta":{"private":true},"id":"cfg-half"},{"name":"out","tagname":"cfg","owner":"Ext.fx.animation.Flip","meta":{"private":true},"id":"cfg-out"}],"property":[],"method":[{"name":"getData","tagname":"method","owner":"Ext.fx.animation.Flip","meta":{"private":true},"id":"method-getData"},{"name":"getDirection","tagname":"method","owner":"Ext.fx.animation.Flip","meta":{},"id":"method-getDirection"},{"name":"getEasing","tagname":"method","owner":"Ext.fx.animation.Flip","meta":{},"id":"method-getEasing"},{"name":"getHalf","tagname":"method","owner":"Ext.fx.animation.Flip","meta":{},"id":"method-getHalf"},{"name":"getOut","tagname":"method","owner":"Ext.fx.animation.Flip","meta":{},"id":"method-getOut"},{"name":"setDirection","tagname":"method","owner":"Ext.fx.animation.Flip","meta":{},"id":"method-setDirection"},{"name":"setEasing","tagname":"method","owner":"Ext.fx.animation.Flip","meta":{},"id":"method-setEasing"},{"name":"setHalf","tagname":"method","owner":"Ext.fx.animation.Flip","meta":{},"id":"method-setHalf"},{"name":"setOut","tagname":"method","owner":"Ext.fx.animation.Flip","meta":{},"id":"method-setOut"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Flip.js","href":"Flip.html#Ext-fx-animation-Flip"}],"html_meta":{"private":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.fx.animation.Abstract"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.fx.animation.Abstract<div class='subclass '><strong>Ext.fx.animation.Flip</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Flip.html#Ext-fx-animation-Flip' target='_blank'>Flip.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-direction' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Flip'>Ext.fx.animation.Flip</span><br/><a href='source/Flip.html#Ext-fx-animation-Flip-cfg-direction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Flip-cfg-direction' class='name expandable'>direction</a><span> : String</span></div><div class='description'><div class='short'>The direction of which the slide animates ...</div><div class='long'><p>The direction of which the slide animates</p>\n<p>Defaults to: <code>'right'</code></p></div></div></div><div id='cfg-easing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Flip'>Ext.fx.animation.Flip</span><br/><a href='source/Flip.html#Ext-fx-animation-Flip-cfg-easing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Flip-cfg-easing' class='name expandable'>easing</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'ease-in'</code></p></div></div></div><div id='cfg-half' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Flip'>Ext.fx.animation.Flip</span><br/><a href='source/Flip.html#Ext-fx-animation-Flip-cfg-half' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Flip-cfg-half' class='name expandable'>half</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-out' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Flip'>Ext.fx.animation.Flip</span><br/><a href='source/Flip.html#Ext-fx-animation-Flip-cfg-out' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Flip-cfg-out' class='name not-expandable'>out</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getData' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Flip'>Ext.fx.animation.Flip</span><br/><a href='source/Flip.html#Ext-fx-animation-Flip-method-getData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Flip-method-getData' class='name expandable'>getData</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Flip'>Ext.fx.animation.Flip</span><br/><a href='source/Flip.html#Ext-fx-animation-Flip-cfg-direction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Flip-method-getDirection' class='name expandable'>getDirection</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of direction. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.fx.animation.Flip-cfg-direction\" rel=\"Ext.fx.animation.Flip-cfg-direction\" class=\"docClass\">direction</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEasing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Flip'>Ext.fx.animation.Flip</span><br/><a href='source/Flip.html#Ext-fx-animation-Flip-cfg-easing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Flip-method-getEasing' class='name expandable'>getEasing</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of easing. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.fx.animation.Flip-cfg-easing\" rel=\"Ext.fx.animation.Flip-cfg-easing\" class=\"docClass\">easing</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHalf' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Flip'>Ext.fx.animation.Flip</span><br/><a href='source/Flip.html#Ext-fx-animation-Flip-cfg-half' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Flip-method-getHalf' class='name expandable'>getHalf</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of half. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.fx.animation.Flip-cfg-half\" rel=\"Ext.fx.animation.Flip-cfg-half\" class=\"docClass\">half</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOut' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Flip'>Ext.fx.animation.Flip</span><br/><a href='source/Flip.html#Ext-fx-animation-Flip-cfg-out' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Flip-method-getOut' class='name expandable'>getOut</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of out. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.fx.animation.Flip-cfg-out\" rel=\"Ext.fx.animation.Flip-cfg-out\" class=\"docClass\">out</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Flip'>Ext.fx.animation.Flip</span><br/><a href='source/Flip.html#Ext-fx-animation-Flip-cfg-direction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Flip-method-setDirection' class='name expandable'>setDirection</a>( <span class='pre'>direction</span> )</div><div class='description'><div class='short'>Sets the value of direction. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.fx.animation.Flip-cfg-direction\" rel=\"Ext.fx.animation.Flip-cfg-direction\" class=\"docClass\">direction</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>direction</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setEasing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Flip'>Ext.fx.animation.Flip</span><br/><a href='source/Flip.html#Ext-fx-animation-Flip-cfg-easing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Flip-method-setEasing' class='name expandable'>setEasing</a>( <span class='pre'>easing</span> )</div><div class='description'><div class='short'>Sets the value of easing. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.fx.animation.Flip-cfg-easing\" rel=\"Ext.fx.animation.Flip-cfg-easing\" class=\"docClass\">easing</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>easing</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setHalf' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Flip'>Ext.fx.animation.Flip</span><br/><a href='source/Flip.html#Ext-fx-animation-Flip-cfg-half' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Flip-method-setHalf' class='name expandable'>setHalf</a>( <span class='pre'>half</span> )</div><div class='description'><div class='short'>Sets the value of half. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.fx.animation.Flip-cfg-half\" rel=\"Ext.fx.animation.Flip-cfg-half\" class=\"docClass\">half</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>half</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setOut' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Flip'>Ext.fx.animation.Flip</span><br/><a href='source/Flip.html#Ext-fx-animation-Flip-cfg-out' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Flip-method-setOut' class='name expandable'>setOut</a>( <span class='pre'>out</span> )</div><div class='description'><div class='short'>Sets the value of out. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.fx.animation.Flip-cfg-out\" rel=\"Ext.fx.animation.Flip-cfg-out\" class=\"docClass\">out</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>out</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});