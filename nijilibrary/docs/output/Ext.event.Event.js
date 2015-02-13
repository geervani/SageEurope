Ext.data.JsonP.Ext_event_Event({"tagname":"class","name":"Ext.event.Event","extends":"Ext.Base","mixins":["Ext.event.Touch"],"alternateClassNames":["Ext.EventObject"],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ext.event.Event","code_type":"ext_define","members":{"cfg":[],"property":[{"name":"angle","tagname":"property","owner":"Ext.event.Event","meta":{},"id":"property-angle"},{"name":"isStopped","tagname":"property","owner":"Ext.event.Event","meta":{"private":true},"id":"property-isStopped"},{"name":"rotation","tagname":"property","owner":"Ext.event.Event","meta":{},"id":"property-rotation"},{"name":"scale","tagname":"property","owner":"Ext.event.Event","meta":{},"id":"property-scale"}],"method":[{"name":"constructor","tagname":"method","owner":"Ext.event.Touch","meta":{},"id":"method-constructor"},{"name":"cloneTouches","tagname":"method","owner":"Ext.event.Touch","meta":{"private":true},"id":"method-cloneTouches"},{"name":"set","tagname":"method","owner":"Ext.event.Event","meta":{"private":true},"id":"method-set"},{"name":"stopEvent","tagname":"method","owner":"Ext.event.Event","meta":{"chainable":true},"id":"method-stopEvent"},{"name":"stopPropagation","tagname":"method","owner":"Ext.event.Event","meta":{"chainable":true},"id":"method-stopPropagation"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":3,"files":[{"filename":"Event.js","href":"Event.html#Ext-event-Event"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.EventObject</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.event.Event</strong></div></div><h4>Mixins</h4><div class='dependency'><a href='#!/api/Ext.event.Touch' rel='Ext.event.Touch' class='docClass'>Ext.event.Touch</a></div><h4>Files</h4><div class='dependency'><a href='source/Event.html#Ext-event-Event' target='_blank'>Event.js</a></div></pre><div class='doc-contents'><p>Just as <a href=\"#!/api/Ext.dom.Element\" rel=\"Ext.dom.Element\" class=\"docClass\">Ext.dom.Element</a> wraps around a native DOM node, <a href=\"#!/api/Ext.event.Event\" rel=\"Ext.event.Event\" class=\"docClass\">Ext.event.Event</a> wraps the browser's native\nevent-object normalizing cross-browser differences such as mechanisms to stop event-propagation along with a method\nto prevent default actions from taking place.</p>\n\n<p>Here is a simple example of how you use it:</p>\n\n<pre class='inline-example preview'><code>Ext.Viewport.add({\n    layout: 'fit',\n    items: [\n        {\n            docked: 'top',\n            xtype: 'toolbar',\n            title: '<a href=\"#!/api/Ext.event.Event\" rel=\"Ext.event.Event\" class=\"docClass\">Ext.event.Event</a> example!'\n        },\n        {\n            id: 'logger',\n            styleHtmlContent: true,\n            html: 'Tap somewhere!',\n            padding: 5\n        }\n    ]\n});\n\nExt.Viewport.element.on({\n    tap: function(e, node) {\n        var string = '';\n\n        string += 'You tapped at: &lt;strong&gt;{ x: ' + e.pageX + ', y: ' + e.pageY + ' }&lt;/strong&gt; &lt;i&gt;(e.pageX &amp; e.pageY)&lt;/i&gt;';\n        string += '&lt;hr /&gt;';\n        string += 'The HTMLElement you tapped has the className of: &lt;strong&gt;' + e.target.className + '&lt;/strong&gt; &lt;i&gt;(e.target)&lt;/i&gt;';\n        string += '&lt;hr /&gt;';\n        string += 'The HTMLElement which has the listener has a className of: &lt;strong&gt;' + e.getTarget().className + '&lt;/strong&gt; &lt;i&gt;(e.getTarget())&lt;/i&gt;';\n\n        Ext.getCmp('logger').setHtml(string);\n    }\n});\n</code></pre>\n\n<h2>Recognizers</h2>\n\n<p>Sencha Touch includes a bunch of default event recognizers to know when a user taps, swipes, etc.</p>\n\n<p>For a full list of default recognizers, and more information, please view the <a href=\"#!/api/Ext.event.recognizer.Recognizer\" rel=\"Ext.event.recognizer.Recognizer\" class=\"docClass\">Ext.event.recognizer.Recognizer</a> documentation.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-angle' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.Event'>Ext.event.Event</span><br/><a href='source/Rotate.html#Ext-event-Event-property-angle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.Event-property-angle' class='name expandable'>angle</a><span> : Number</span></div><div class='description'><div class='short'>The angle of the rotation. ...</div><div class='long'><p>The angle of the rotation.</p>\n\n<p><strong>This is only available when the event type is <code>rotate</code></strong></p>\n</div></div></div><div id='property-isStopped' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.Event'>Ext.event.Event</span><br/><a href='source/Event.html#Ext-event-Event-property-isStopped' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.Event-property-isStopped' class='name expandable'>isStopped</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-rotation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.Event'>Ext.event.Event</span><br/><a href='source/Rotate.html#Ext-event-Event-property-rotation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.Event-property-rotation' class='name expandable'>rotation</a><span> : Number</span></div><div class='description'><div class='short'>A amount of rotation, since the start of the event. ...</div><div class='long'><p>A amount of rotation, since the start of the event.</p>\n\n<p><strong>This is only available when the event type is <code>rotate</code></strong></p>\n</div></div></div><div id='property-scale' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.Event'>Ext.event.Event</span><br/><a href='source/Pinch.html#Ext-event-Event-property-scale' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.Event-property-scale' class='name expandable'>scale</a><span> : Number</span></div><div class='description'><div class='short'>The scape of a pinch event. ...</div><div class='long'><p>The scape of a pinch event.</p>\n\n<p><strong>This is only available when the event type is <code>pinch</code></strong></p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.Touch' rel='Ext.event.Touch' class='defined-in docClass'>Ext.event.Touch</a><br/><a href='source/Touch2.html#Ext-event-Touch-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.event.Touch-method-constructor' class='name expandable'>Ext.event.Event</a>( <span class='pre'>event, info, map, list</span> ) : <a href=\"#!/api/Ext.event.Touch\" rel=\"Ext.event.Touch\" class=\"docClass\">Ext.event.Touch</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>event</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>info</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>map</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>list</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.event.Touch\" rel=\"Ext.event.Touch\" class=\"docClass\">Ext.event.Touch</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-cloneTouches' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.Touch' rel='Ext.event.Touch' class='defined-in docClass'>Ext.event.Touch</a><br/><a href='source/Touch2.html#Ext-event-Touch-method-cloneTouches' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.Touch-method-cloneTouches' class='name expandable'>cloneTouches</a>( <span class='pre'>touches, map</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>touches</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>map</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-set' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.Event'>Ext.event.Event</span><br/><a href='source/Event.html#Ext-event-Event-method-set' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.Event-method-set' class='name expandable'>set</a>( <span class='pre'>name, value</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-stopEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.Event'>Ext.event.Event</span><br/><a href='source/Event.html#Ext-event-Event-method-stopEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.Event-method-stopEvent' class='name expandable'>stopEvent</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.event.Event\" rel=\"Ext.event.Event\" class=\"docClass\">Ext.event.Event</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Stop the event (preventDefault and stopPropagation). ...</div><div class='long'><p>Stop the event (<code>preventDefault</code> and <code><a href=\"#!/api/Ext.event.Event-method-stopPropagation\" rel=\"Ext.event.Event-method-stopPropagation\" class=\"docClass\">stopPropagation</a></code>).</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.event.Event\" rel=\"Ext.event.Event\" class=\"docClass\">Ext.event.Event</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-stopPropagation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.Event'>Ext.event.Event</span><br/><a href='source/Event.html#Ext-event-Event-method-stopPropagation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.Event-method-stopPropagation' class='name expandable'>stopPropagation</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.event.Event\" rel=\"Ext.event.Event\" class=\"docClass\">Ext.event.Event</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Cancels bubbling of the event. ...</div><div class='long'><p>Cancels bubbling of the event.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.event.Event\" rel=\"Ext.event.Event\" class=\"docClass\">Ext.event.Event</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>"});