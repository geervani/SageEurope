Ext.data.JsonP.Ext_event_recognizer_SingleTouch({"tagname":"class","name":"Ext.event.recognizer.SingleTouch","extends":"Ext.event.recognizer.Touch","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"private":true},"private":true,"id":"class-Ext.event.recognizer.SingleTouch","code_type":"ext_define","members":{"cfg":[{"name":"callbackScope","tagname":"cfg","owner":"Ext.event.recognizer.Recognizer","meta":{"private":true},"id":"cfg-callbackScope"},{"name":"onFailed","tagname":"cfg","owner":"Ext.event.recognizer.Recognizer","meta":{"private":true},"id":"cfg-onFailed"},{"name":"onRecognized","tagname":"cfg","owner":"Ext.event.recognizer.Recognizer","meta":{"private":true},"id":"cfg-onRecognized"}],"property":[{"name":"defaultIdPrefix","tagname":"property","owner":"Ext.mixin.Identifiable","meta":{"private":true},"id":"property-defaultIdPrefix"},{"name":"defaultIdSeparator","tagname":"property","owner":"Ext.mixin.Identifiable","meta":{"private":true},"id":"property-defaultIdSeparator"},{"name":"handledEvents","tagname":"property","owner":"Ext.event.recognizer.Recognizer","meta":{"private":true},"id":"property-handledEvents"},{"name":"idCleanRegex","tagname":"property","owner":"Ext.mixin.Identifiable","meta":{"private":true},"id":"property-idCleanRegex"},{"name":"isIdentifiable","tagname":"property","owner":"Ext.mixin.Identifiable","meta":{"private":true},"id":"property-isIdentifiable"},{"name":"mixinId","tagname":"property","owner":"Ext.mixin.Identifiable","meta":{"private":true},"id":"property-mixinId"}],"method":[{"name":"constructor","tagname":"method","owner":"Ext.event.recognizer.Recognizer","meta":{},"id":"method-constructor"},{"name":"fail","tagname":"method","owner":"Ext.event.recognizer.Recognizer","meta":{"private":true},"id":"method-fail"},{"name":"fire","tagname":"method","owner":"Ext.event.recognizer.Recognizer","meta":{"private":true},"id":"method-fire"},{"name":"getCallbackScope","tagname":"method","owner":"Ext.event.recognizer.Recognizer","meta":{},"id":"method-getCallbackScope"},{"name":"getHandledEvents","tagname":"method","owner":"Ext.event.recognizer.Recognizer","meta":{"private":true},"id":"method-getHandledEvents"},{"name":"getId","tagname":"method","owner":"Ext.mixin.Identifiable","meta":{},"id":"method-getId"},{"name":"getOnFailed","tagname":"method","owner":"Ext.event.recognizer.Recognizer","meta":{},"id":"method-getOnFailed"},{"name":"getOnRecognized","tagname":"method","owner":"Ext.event.recognizer.Recognizer","meta":{},"id":"method-getOnRecognized"},{"name":"getOptimizedId","tagname":"method","owner":"Ext.mixin.Identifiable","meta":{"private":true},"id":"method-getOptimizedId"},{"name":"getUniqueId","tagname":"method","owner":"Ext.mixin.Identifiable","meta":{"private":true},"id":"method-getUniqueId"},{"name":"onEnd","tagname":"method","owner":"Ext.event.recognizer.Recognizer","meta":{"private":true},"id":"method-onEnd"},{"name":"onStart","tagname":"method","owner":"Ext.event.recognizer.Recognizer","meta":{"private":true},"id":"method-onStart"},{"name":"onTouchEnd","tagname":"method","owner":"Ext.event.recognizer.Touch","meta":{"private":true},"id":"method-onTouchEnd"},{"name":"onTouchMove","tagname":"method","owner":"Ext.event.recognizer.Touch","meta":{"private":true},"id":"method-onTouchMove"},{"name":"onTouchStart","tagname":"method","owner":"Ext.event.recognizer.SingleTouch","meta":{"private":true},"id":"method-onTouchStart"},{"name":"setCallbackScope","tagname":"method","owner":"Ext.event.recognizer.Recognizer","meta":{},"id":"method-setCallbackScope"},{"name":"setId","tagname":"method","owner":"Ext.mixin.Identifiable","meta":{"private":true},"id":"method-setId"},{"name":"setOnFailed","tagname":"method","owner":"Ext.event.recognizer.Recognizer","meta":{},"id":"method-setOnFailed"},{"name":"setOnRecognized","tagname":"method","owner":"Ext.event.recognizer.Recognizer","meta":{},"id":"method-setOnRecognized"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"SingleTouch.js","href":"SingleTouch.html#Ext-event-recognizer-SingleTouch"}],"html_meta":{"private":null},"statics":{"cfg":[],"property":[{"name":"NOT_SINGLE_TOUCH","tagname":"property","owner":"Ext.event.recognizer.SingleTouch","meta":{"static":true,"private":true},"id":"property-NOT_SINGLE_TOUCH"},{"name":"TOUCH_MOVED","tagname":"property","owner":"Ext.event.recognizer.SingleTouch","meta":{"static":true,"private":true},"id":"property-TOUCH_MOVED"}],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base","Ext.event.recognizer.Recognizer","Ext.event.recognizer.Touch"],"subclasses":["Ext.event.recognizer.Drag","Ext.event.recognizer.Tap"],"mixedInto":[],"parentMixins":["Ext.mixin.Identifiable"],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.event.recognizer.Recognizer' rel='Ext.event.recognizer.Recognizer' class='docClass'>Ext.event.recognizer.Recognizer</a><div class='subclass '><a href='#!/api/Ext.event.recognizer.Touch' rel='Ext.event.recognizer.Touch' class='docClass'>Ext.event.recognizer.Touch</a><div class='subclass '><strong>Ext.event.recognizer.SingleTouch</strong></div></div></div></div><h4>Inherited mixins</h4><div class='dependency'><a href='#!/api/Ext.mixin.Identifiable' rel='Ext.mixin.Identifiable' class='docClass'>Ext.mixin.Identifiable</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.event.recognizer.Drag' rel='Ext.event.recognizer.Drag' class='docClass'>Ext.event.recognizer.Drag</a></div><div class='dependency'><a href='#!/api/Ext.event.recognizer.Tap' rel='Ext.event.recognizer.Tap' class='docClass'>Ext.event.recognizer.Tap</a></div><h4>Files</h4><div class='dependency'><a href='source/SingleTouch.html#Ext-event-recognizer-SingleTouch' target='_blank'>SingleTouch.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-callbackScope' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.recognizer.Recognizer' rel='Ext.event.recognizer.Recognizer' class='defined-in docClass'>Ext.event.recognizer.Recognizer</a><br/><a href='source/Recognizer.html#Ext-event-recognizer-Recognizer-cfg-callbackScope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.Recognizer-cfg-callbackScope' class='name not-expandable'>callbackScope</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-onFailed' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.recognizer.Recognizer' rel='Ext.event.recognizer.Recognizer' class='defined-in docClass'>Ext.event.recognizer.Recognizer</a><br/><a href='source/Recognizer.html#Ext-event-recognizer-Recognizer-cfg-onFailed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.Recognizer-cfg-onFailed' class='name not-expandable'>onFailed</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-onRecognized' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.recognizer.Recognizer' rel='Ext.event.recognizer.Recognizer' class='defined-in docClass'>Ext.event.recognizer.Recognizer</a><br/><a href='source/Recognizer.html#Ext-event-recognizer-Recognizer-cfg-onRecognized' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.Recognizer-cfg-onRecognized' class='name not-expandable'>onRecognized</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Instance Properties</h3><div id='property-defaultIdPrefix' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.mixin.Identifiable' rel='Ext.mixin.Identifiable' class='defined-in docClass'>Ext.mixin.Identifiable</a><br/><a href='source/Identifiable.html#Ext-mixin-Identifiable-property-defaultIdPrefix' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.mixin.Identifiable-property-defaultIdPrefix' class='name expandable'>defaultIdPrefix</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'ext-'</code></p></div></div></div><div id='property-defaultIdSeparator' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.mixin.Identifiable' rel='Ext.mixin.Identifiable' class='defined-in docClass'>Ext.mixin.Identifiable</a><br/><a href='source/Identifiable.html#Ext-mixin-Identifiable-property-defaultIdSeparator' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.mixin.Identifiable-property-defaultIdSeparator' class='name expandable'>defaultIdSeparator</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'-'</code></p></div></div></div><div id='property-handledEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.recognizer.Recognizer' rel='Ext.event.recognizer.Recognizer' class='defined-in docClass'>Ext.event.recognizer.Recognizer</a><br/><a href='source/Recognizer.html#Ext-event-recognizer-Recognizer-property-handledEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.Recognizer-property-handledEvents' class='name expandable'>handledEvents</a><span> : Array</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='property-idCleanRegex' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.mixin.Identifiable' rel='Ext.mixin.Identifiable' class='defined-in docClass'>Ext.mixin.Identifiable</a><br/><a href='source/Identifiable.html#Ext-mixin-Identifiable-property-idCleanRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.mixin.Identifiable-property-idCleanRegex' class='name expandable'>idCleanRegex</a><span> : RegExp</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>/\\.|[^\\w\\-]/g</code></p></div></div></div><div id='property-isIdentifiable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.mixin.Identifiable' rel='Ext.mixin.Identifiable' class='defined-in docClass'>Ext.mixin.Identifiable</a><br/><a href='source/Identifiable.html#Ext-mixin-Identifiable-property-isIdentifiable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.mixin.Identifiable-property-isIdentifiable' class='name expandable'>isIdentifiable</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-mixinId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.mixin.Identifiable' rel='Ext.mixin.Identifiable' class='defined-in docClass'>Ext.mixin.Identifiable</a><br/><a href='source/Identifiable.html#Ext-mixin-Identifiable-property-mixinId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.mixin.Identifiable-property-mixinId' class='name expandable'>mixinId</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'identifiable'</code></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Static Properties</h3><div id='property-NOT_SINGLE_TOUCH' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.recognizer.SingleTouch'>Ext.event.recognizer.SingleTouch</span><br/><a href='source/SingleTouch.html#Ext-event-recognizer-SingleTouch-property-NOT_SINGLE_TOUCH' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.SingleTouch-property-NOT_SINGLE_TOUCH' class='name expandable'>NOT_SINGLE_TOUCH</a><span> : Number</span><strong class='private signature' >private</strong><strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0x01</code></p></div></div></div><div id='property-TOUCH_MOVED' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.recognizer.SingleTouch'>Ext.event.recognizer.SingleTouch</span><br/><a href='source/SingleTouch.html#Ext-event-recognizer-SingleTouch-property-TOUCH_MOVED' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.SingleTouch-property-TOUCH_MOVED' class='name expandable'>TOUCH_MOVED</a><span> : Number</span><strong class='private signature' >private</strong><strong class='static signature' >static</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0x02</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.recognizer.Recognizer' rel='Ext.event.recognizer.Recognizer' class='defined-in docClass'>Ext.event.recognizer.Recognizer</a><br/><a href='source/Recognizer.html#Ext-event-recognizer-Recognizer-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.event.recognizer.Recognizer-method-constructor' class='name expandable'>Ext.event.recognizer.SingleTouch</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.event.recognizer.Recognizer\" rel=\"Ext.event.recognizer.Recognizer\" class=\"docClass\">Ext.event.recognizer.Recognizer</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.event.recognizer.Recognizer\" rel=\"Ext.event.recognizer.Recognizer\" class=\"docClass\">Ext.event.recognizer.Recognizer</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-fail' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.recognizer.Recognizer' rel='Ext.event.recognizer.Recognizer' class='defined-in docClass'>Ext.event.recognizer.Recognizer</a><br/><a href='source/Recognizer.html#Ext-event-recognizer-Recognizer-method-fail' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.Recognizer-method-fail' class='name expandable'>fail</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-fire' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.recognizer.Recognizer' rel='Ext.event.recognizer.Recognizer' class='defined-in docClass'>Ext.event.recognizer.Recognizer</a><br/><a href='source/Recognizer.html#Ext-event-recognizer-Recognizer-method-fire' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.Recognizer-method-fire' class='name expandable'>fire</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getCallbackScope' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.recognizer.Recognizer' rel='Ext.event.recognizer.Recognizer' class='defined-in docClass'>Ext.event.recognizer.Recognizer</a><br/><a href='source/Recognizer.html#Ext-event-recognizer-Recognizer-cfg-callbackScope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.Recognizer-method-getCallbackScope' class='name expandable'>getCallbackScope</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of callbackScope. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.event.recognizer.Recognizer-cfg-callbackScope\" rel=\"Ext.event.recognizer.Recognizer-cfg-callbackScope\" class=\"docClass\">callbackScope</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHandledEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.recognizer.Recognizer' rel='Ext.event.recognizer.Recognizer' class='defined-in docClass'>Ext.event.recognizer.Recognizer</a><br/><a href='source/Recognizer.html#Ext-event-recognizer-Recognizer-method-getHandledEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.Recognizer-method-getHandledEvents' class='name expandable'>getHandledEvents</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.mixin.Identifiable' rel='Ext.mixin.Identifiable' class='defined-in docClass'>Ext.mixin.Identifiable</a><br/><a href='source/Identifiable.html#Ext-mixin-Identifiable-method-getId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.mixin.Identifiable-method-getId' class='name expandable'>getId</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Retrieves the id of this component. ...</div><div class='long'><p>Retrieves the id of this component. Will autogenerate an id if one has not already been set.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>id</p>\n</div></li></ul></div></div></div><div id='method-getOnFailed' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.recognizer.Recognizer' rel='Ext.event.recognizer.Recognizer' class='defined-in docClass'>Ext.event.recognizer.Recognizer</a><br/><a href='source/Recognizer.html#Ext-event-recognizer-Recognizer-cfg-onFailed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.Recognizer-method-getOnFailed' class='name expandable'>getOnFailed</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of onFailed. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.event.recognizer.Recognizer-cfg-onFailed\" rel=\"Ext.event.recognizer.Recognizer-cfg-onFailed\" class=\"docClass\">onFailed</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOnRecognized' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.recognizer.Recognizer' rel='Ext.event.recognizer.Recognizer' class='defined-in docClass'>Ext.event.recognizer.Recognizer</a><br/><a href='source/Recognizer.html#Ext-event-recognizer-Recognizer-cfg-onRecognized' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.Recognizer-method-getOnRecognized' class='name expandable'>getOnRecognized</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of onRecognized. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.event.recognizer.Recognizer-cfg-onRecognized\" rel=\"Ext.event.recognizer.Recognizer-cfg-onRecognized\" class=\"docClass\">onRecognized</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOptimizedId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.mixin.Identifiable' rel='Ext.mixin.Identifiable' class='defined-in docClass'>Ext.mixin.Identifiable</a><br/><a href='source/Identifiable.html#Ext-mixin-Identifiable-method-getOptimizedId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.mixin.Identifiable-method-getOptimizedId' class='name expandable'>getOptimizedId</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getUniqueId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.mixin.Identifiable' rel='Ext.mixin.Identifiable' class='defined-in docClass'>Ext.mixin.Identifiable</a><br/><a href='source/Identifiable.html#Ext-mixin-Identifiable-method-getUniqueId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.mixin.Identifiable-method-getUniqueId' class='name expandable'>getUniqueId</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onEnd' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.recognizer.Recognizer' rel='Ext.event.recognizer.Recognizer' class='defined-in docClass'>Ext.event.recognizer.Recognizer</a><br/><a href='source/Recognizer.html#Ext-event-recognizer-Recognizer-method-onEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.Recognizer-method-onEnd' class='name expandable'>onEnd</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onStart' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.recognizer.Recognizer' rel='Ext.event.recognizer.Recognizer' class='defined-in docClass'>Ext.event.recognizer.Recognizer</a><br/><a href='source/Recognizer.html#Ext-event-recognizer-Recognizer-method-onStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.Recognizer-method-onStart' class='name expandable'>onStart</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onTouchEnd' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.recognizer.Touch' rel='Ext.event.recognizer.Touch' class='defined-in docClass'>Ext.event.recognizer.Touch</a><br/><a href='source/Touch.html#Ext-event-recognizer-Touch-method-onTouchEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.Touch-method-onTouchEnd' class='name expandable'>onTouchEnd</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onTouchMove' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.recognizer.Touch' rel='Ext.event.recognizer.Touch' class='defined-in docClass'>Ext.event.recognizer.Touch</a><br/><a href='source/Touch.html#Ext-event-recognizer-Touch-method-onTouchMove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.Touch-method-onTouchMove' class='name expandable'>onTouchMove</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onTouchStart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.recognizer.SingleTouch'>Ext.event.recognizer.SingleTouch</span><br/><a href='source/SingleTouch.html#Ext-event-recognizer-SingleTouch-method-onTouchStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.SingleTouch-method-onTouchStart' class='name expandable'>onTouchStart</a>( <span class='pre'>e</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.event.recognizer.Touch-method-onTouchStart' rel='Ext.event.recognizer.Touch-method-onTouchStart' class='docClass'>Ext.event.recognizer.Touch.onTouchStart</a></p></div></div></div><div id='method-setCallbackScope' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.recognizer.Recognizer' rel='Ext.event.recognizer.Recognizer' class='defined-in docClass'>Ext.event.recognizer.Recognizer</a><br/><a href='source/Recognizer.html#Ext-event-recognizer-Recognizer-cfg-callbackScope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.Recognizer-method-setCallbackScope' class='name expandable'>setCallbackScope</a>( <span class='pre'>callbackScope</span> )</div><div class='description'><div class='short'>Sets the value of callbackScope. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.event.recognizer.Recognizer-cfg-callbackScope\" rel=\"Ext.event.recognizer.Recognizer-cfg-callbackScope\" class=\"docClass\">callbackScope</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>callbackScope</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setId' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.mixin.Identifiable' rel='Ext.mixin.Identifiable' class='defined-in docClass'>Ext.mixin.Identifiable</a><br/><a href='source/Identifiable.html#Ext-mixin-Identifiable-method-setId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.mixin.Identifiable-method-setId' class='name expandable'>setId</a>( <span class='pre'>id</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setOnFailed' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.recognizer.Recognizer' rel='Ext.event.recognizer.Recognizer' class='defined-in docClass'>Ext.event.recognizer.Recognizer</a><br/><a href='source/Recognizer.html#Ext-event-recognizer-Recognizer-cfg-onFailed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.Recognizer-method-setOnFailed' class='name expandable'>setOnFailed</a>( <span class='pre'>onFailed</span> )</div><div class='description'><div class='short'>Sets the value of onFailed. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.event.recognizer.Recognizer-cfg-onFailed\" rel=\"Ext.event.recognizer.Recognizer-cfg-onFailed\" class=\"docClass\">onFailed</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onFailed</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setOnRecognized' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.recognizer.Recognizer' rel='Ext.event.recognizer.Recognizer' class='defined-in docClass'>Ext.event.recognizer.Recognizer</a><br/><a href='source/Recognizer.html#Ext-event-recognizer-Recognizer-cfg-onRecognized' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.recognizer.Recognizer-method-setOnRecognized' class='name expandable'>setOnRecognized</a>( <span class='pre'>onRecognized</span> )</div><div class='description'><div class='short'>Sets the value of onRecognized. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.event.recognizer.Recognizer-cfg-onRecognized\" rel=\"Ext.event.recognizer.Recognizer-cfg-onRecognized\" class=\"docClass\">onRecognized</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onRecognized</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});