Ext.data.JsonP.Ext_fx_animation_Slide({"tagname":"class","name":"Ext.fx.animation.Slide","extends":"Ext.fx.animation.Abstract","mixins":[],"alternateClassNames":["Ext.fx.animation.SlideIn"],"aliases":{"animation":["slide","slideIn"]},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"private":true},"private":true,"id":"class-Ext.fx.animation.Slide","code_type":"ext_define","members":{"cfg":[{"name":"containerBox","tagname":"cfg","owner":"Ext.fx.animation.Slide","meta":{"private":true},"id":"cfg-containerBox"},{"name":"direction","tagname":"cfg","owner":"Ext.fx.animation.Slide","meta":{},"id":"cfg-direction"},{"name":"easing","tagname":"cfg","owner":"Ext.fx.animation.Slide","meta":{},"id":"cfg-easing"},{"name":"elementBox","tagname":"cfg","owner":"Ext.fx.animation.Slide","meta":{"private":true},"id":"cfg-elementBox"},{"name":"isElementBoxFit","tagname":"cfg","owner":"Ext.fx.animation.Slide","meta":{"private":true},"id":"cfg-isElementBoxFit"},{"name":"offset","tagname":"cfg","owner":"Ext.fx.animation.Slide","meta":{},"id":"cfg-offset"},{"name":"out","tagname":"cfg","owner":"Ext.fx.animation.Slide","meta":{},"id":"cfg-out"},{"name":"useCssTransform","tagname":"cfg","owner":"Ext.fx.animation.Slide","meta":{"private":true},"id":"cfg-useCssTransform"}],"property":[{"name":"reverseDirectionMap","tagname":"property","owner":"Ext.fx.animation.Slide","meta":{"private":true},"id":"property-reverseDirectionMap"}],"method":[{"name":"applyEasing","tagname":"method","owner":"Ext.fx.animation.Slide","meta":{"private":true},"id":"method-applyEasing"},{"name":"getContainerBox","tagname":"method","owner":"Ext.fx.animation.Slide","meta":{"private":true},"id":"method-getContainerBox"},{"name":"getData","tagname":"method","owner":"Ext.fx.animation.Slide","meta":{"private":true},"id":"method-getData"},{"name":"getDirection","tagname":"method","owner":"Ext.fx.animation.Slide","meta":{},"id":"method-getDirection"},{"name":"getEasing","tagname":"method","owner":"Ext.fx.animation.Slide","meta":{},"id":"method-getEasing"},{"name":"getElementBox","tagname":"method","owner":"Ext.fx.animation.Slide","meta":{"private":true},"id":"method-getElementBox"},{"name":"getIsElementBoxFit","tagname":"method","owner":"Ext.fx.animation.Slide","meta":{},"id":"method-getIsElementBoxFit"},{"name":"getOffset","tagname":"method","owner":"Ext.fx.animation.Slide","meta":{},"id":"method-getOffset"},{"name":"getOut","tagname":"method","owner":"Ext.fx.animation.Slide","meta":{},"id":"method-getOut"},{"name":"getUseCssTransform","tagname":"method","owner":"Ext.fx.animation.Slide","meta":{},"id":"method-getUseCssTransform"},{"name":"setContainerBox","tagname":"method","owner":"Ext.fx.animation.Slide","meta":{},"id":"method-setContainerBox"},{"name":"setDirection","tagname":"method","owner":"Ext.fx.animation.Slide","meta":{},"id":"method-setDirection"},{"name":"setEasing","tagname":"method","owner":"Ext.fx.animation.Slide","meta":{},"id":"method-setEasing"},{"name":"setElementBox","tagname":"method","owner":"Ext.fx.animation.Slide","meta":{},"id":"method-setElementBox"},{"name":"setIsElementBoxFit","tagname":"method","owner":"Ext.fx.animation.Slide","meta":{},"id":"method-setIsElementBoxFit"},{"name":"setOffset","tagname":"method","owner":"Ext.fx.animation.Slide","meta":{},"id":"method-setOffset"},{"name":"setOut","tagname":"method","owner":"Ext.fx.animation.Slide","meta":{},"id":"method-setOut"},{"name":"setUseCssTransform","tagname":"method","owner":"Ext.fx.animation.Slide","meta":{},"id":"method-setUseCssTransform"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Slide.js","href":"Slide.html#Ext-fx-animation-Slide"}],"html_meta":{"private":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.fx.animation.Abstract"],"subclasses":["Ext.fx.animation.SlideOut"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.fx.animation.SlideIn</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.fx.animation.Abstract<div class='subclass '><strong>Ext.fx.animation.Slide</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.fx.animation.SlideOut' rel='Ext.fx.animation.SlideOut' class='docClass'>Ext.fx.animation.SlideOut</a></div><h4>Files</h4><div class='dependency'><a href='source/Slide.html#Ext-fx-animation-Slide' target='_blank'>Slide.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-containerBox' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-containerBox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-cfg-containerBox' class='name expandable'>containerBox</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'auto'</code></p></div></div></div><div id='cfg-direction' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-direction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-cfg-direction' class='name expandable'>direction</a><span> : String</span></div><div class='description'><div class='short'>The direction of which the slide animates ...</div><div class='long'><p>The direction of which the slide animates</p>\n<p>Defaults to: <code>'left'</code></p></div></div></div><div id='cfg-easing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-easing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-cfg-easing' class='name expandable'>easing</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'auto'</code></p></div></div></div><div id='cfg-elementBox' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-elementBox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-cfg-elementBox' class='name expandable'>elementBox</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'auto'</code></p></div></div></div><div id='cfg-isElementBoxFit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-isElementBoxFit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-cfg-isElementBoxFit' class='name expandable'>isElementBoxFit</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-offset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-offset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-cfg-offset' class='name expandable'>offset</a><span> : Number</span></div><div class='description'><div class='short'>The offset that the animation should go offscreen before entering (or when exiting) ...</div><div class='long'><p>The offset that the animation should go offscreen before entering (or when exiting)</p>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='cfg-out' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-out' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-cfg-out' class='name expandable'>out</a><span> : Boolean</span></div><div class='description'><div class='short'>True if you want to make this animation slide out, instead of slide in. ...</div><div class='long'><p>True if you want to make this animation slide out, instead of slide in.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-useCssTransform' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-useCssTransform' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-cfg-useCssTransform' class='name expandable'>useCssTransform</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-reverseDirectionMap' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-property-reverseDirectionMap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-property-reverseDirectionMap' class='name expandable'>reverseDirectionMap</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>{up: 'down', down: 'up', left: 'right', right: 'left'}</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-applyEasing' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-method-applyEasing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-applyEasing' class='name expandable'>applyEasing</a>( <span class='pre'>easing</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>easing</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getContainerBox' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-method-getContainerBox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-getContainerBox' class='name expandable'>getContainerBox</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-method-getData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-getData' class='name expandable'>getData</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-direction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-getDirection' class='name expandable'>getDirection</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of direction. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-direction\" rel=\"Ext.fx.animation.Slide-cfg-direction\" class=\"docClass\">direction</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEasing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-easing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-getEasing' class='name expandable'>getEasing</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of easing. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-easing\" rel=\"Ext.fx.animation.Slide-cfg-easing\" class=\"docClass\">easing</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getElementBox' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-method-getElementBox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-getElementBox' class='name expandable'>getElementBox</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getIsElementBoxFit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-isElementBoxFit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-getIsElementBoxFit' class='name expandable'>getIsElementBoxFit</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of isElementBoxFit. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-isElementBoxFit\" rel=\"Ext.fx.animation.Slide-cfg-isElementBoxFit\" class=\"docClass\">isElementBoxFit</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-offset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-getOffset' class='name expandable'>getOffset</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Returns the value of offset. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-offset\" rel=\"Ext.fx.animation.Slide-cfg-offset\" class=\"docClass\">offset</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOut' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-out' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-getOut' class='name expandable'>getOut</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of out. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-out\" rel=\"Ext.fx.animation.Slide-cfg-out\" class=\"docClass\">out</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getUseCssTransform' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-useCssTransform' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-getUseCssTransform' class='name expandable'>getUseCssTransform</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of useCssTransform. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-useCssTransform\" rel=\"Ext.fx.animation.Slide-cfg-useCssTransform\" class=\"docClass\">useCssTransform</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setContainerBox' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-containerBox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-setContainerBox' class='name expandable'>setContainerBox</a>( <span class='pre'>containerBox</span> )</div><div class='description'><div class='short'>Sets the value of containerBox. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-containerBox\" rel=\"Ext.fx.animation.Slide-cfg-containerBox\" class=\"docClass\">containerBox</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>containerBox</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setDirection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-direction' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-setDirection' class='name expandable'>setDirection</a>( <span class='pre'>direction</span> )</div><div class='description'><div class='short'>Sets the value of direction. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-direction\" rel=\"Ext.fx.animation.Slide-cfg-direction\" class=\"docClass\">direction</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>direction</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setEasing' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-easing' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-setEasing' class='name expandable'>setEasing</a>( <span class='pre'>easing</span> )</div><div class='description'><div class='short'>Sets the value of easing. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-easing\" rel=\"Ext.fx.animation.Slide-cfg-easing\" class=\"docClass\">easing</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>easing</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setElementBox' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-elementBox' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-setElementBox' class='name expandable'>setElementBox</a>( <span class='pre'>elementBox</span> )</div><div class='description'><div class='short'>Sets the value of elementBox. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-elementBox\" rel=\"Ext.fx.animation.Slide-cfg-elementBox\" class=\"docClass\">elementBox</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>elementBox</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setIsElementBoxFit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-isElementBoxFit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-setIsElementBoxFit' class='name expandable'>setIsElementBoxFit</a>( <span class='pre'>isElementBoxFit</span> )</div><div class='description'><div class='short'>Sets the value of isElementBoxFit. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-isElementBoxFit\" rel=\"Ext.fx.animation.Slide-cfg-isElementBoxFit\" class=\"docClass\">isElementBoxFit</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>isElementBoxFit</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setOffset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-offset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-setOffset' class='name expandable'>setOffset</a>( <span class='pre'>offset</span> )</div><div class='description'><div class='short'>Sets the value of offset. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-offset\" rel=\"Ext.fx.animation.Slide-cfg-offset\" class=\"docClass\">offset</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>offset</span> : Number<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setOut' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-out' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-setOut' class='name expandable'>setOut</a>( <span class='pre'>out</span> )</div><div class='description'><div class='short'>Sets the value of out. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-out\" rel=\"Ext.fx.animation.Slide-cfg-out\" class=\"docClass\">out</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>out</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setUseCssTransform' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.fx.animation.Slide'>Ext.fx.animation.Slide</span><br/><a href='source/Slide.html#Ext-fx-animation-Slide-cfg-useCssTransform' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.fx.animation.Slide-method-setUseCssTransform' class='name expandable'>setUseCssTransform</a>( <span class='pre'>useCssTransform</span> )</div><div class='description'><div class='short'>Sets the value of useCssTransform. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.fx.animation.Slide-cfg-useCssTransform\" rel=\"Ext.fx.animation.Slide-cfg-useCssTransform\" class=\"docClass\">useCssTransform</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>useCssTransform</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});