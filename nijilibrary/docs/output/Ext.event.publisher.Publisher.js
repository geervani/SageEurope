Ext.data.JsonP.Ext_event_publisher_Publisher({"tagname":"class","name":"Ext.event.publisher.Publisher","extends":"Ext.Base","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"private":true},"private":true,"id":"class-Ext.event.publisher.Publisher","code_type":"ext_define","members":{"cfg":[],"property":[{"name":"idSelectorRegex","tagname":"property","owner":"Ext.event.publisher.Publisher","meta":{"private":true},"id":"property-idSelectorRegex"},{"name":"targetType","tagname":"property","owner":"Ext.event.publisher.Publisher","meta":{"private":true},"id":"property-targetType"}],"method":[{"name":"constructor","tagname":"method","owner":"Ext.event.publisher.Publisher","meta":{},"id":"method-constructor"},{"name":"dispatch","tagname":"method","owner":"Ext.event.publisher.Publisher","meta":{"private":true},"id":"method-dispatch"},{"name":"getHandledEvents","tagname":"method","owner":"Ext.event.publisher.Publisher","meta":{"private":true},"id":"method-getHandledEvents"},{"name":"getTargetType","tagname":"method","owner":"Ext.event.publisher.Publisher","meta":{"private":true},"id":"method-getTargetType"},{"name":"handles","tagname":"method","owner":"Ext.event.publisher.Publisher","meta":{"private":true},"id":"method-handles"},{"name":"notify","tagname":"method","owner":"Ext.event.publisher.Publisher","meta":{"private":true},"id":"method-notify"},{"name":"setDispatcher","tagname":"method","owner":"Ext.event.publisher.Publisher","meta":{"private":true},"id":"method-setDispatcher"},{"name":"subscribe","tagname":"method","owner":"Ext.event.publisher.Publisher","meta":{"private":true},"id":"method-subscribe"},{"name":"unsubscribe","tagname":"method","owner":"Ext.event.publisher.Publisher","meta":{"private":true},"id":"method-unsubscribe"},{"name":"unsubscribeAll","tagname":"method","owner":"Ext.event.publisher.Publisher","meta":{"chainable":true,"private":true},"id":"method-unsubscribeAll"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Publisher.js","href":"Publisher.html#Ext-event-publisher-Publisher"}],"html_meta":{"private":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base"],"subclasses":["Ext.chart.series.ItemPublisher","Ext.event.publisher.ComponentDelegation","Ext.event.publisher.ComponentPaint","Ext.event.publisher.ComponentSize","Ext.event.publisher.Dom"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.event.publisher.Publisher</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.chart.series.ItemPublisher' rel='Ext.chart.series.ItemPublisher' class='docClass'>Ext.chart.series.ItemPublisher</a></div><div class='dependency'><a href='#!/api/Ext.event.publisher.ComponentDelegation' rel='Ext.event.publisher.ComponentDelegation' class='docClass'>Ext.event.publisher.ComponentDelegation</a></div><div class='dependency'><a href='#!/api/Ext.event.publisher.ComponentPaint' rel='Ext.event.publisher.ComponentPaint' class='docClass'>Ext.event.publisher.ComponentPaint</a></div><div class='dependency'><a href='#!/api/Ext.event.publisher.ComponentSize' rel='Ext.event.publisher.ComponentSize' class='docClass'>Ext.event.publisher.ComponentSize</a></div><div class='dependency'><a href='#!/api/Ext.event.publisher.Dom' rel='Ext.event.publisher.Dom' class='docClass'>Ext.event.publisher.Dom</a></div><h4>Files</h4><div class='dependency'><a href='source/Publisher.html#Ext-event-publisher-Publisher' target='_blank'>Publisher.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-idSelectorRegex' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.Publisher'>Ext.event.publisher.Publisher</span><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-property-idSelectorRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.Publisher-property-idSelectorRegex' class='name expandable'>idSelectorRegex</a><span> : RegExp</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>/^#([\\w\\-]+)$/i</code></p></div></div></div><div id='property-targetType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.Publisher'>Ext.event.publisher.Publisher</span><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-property-targetType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.Publisher-property-targetType' class='name expandable'>targetType</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>''</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.Publisher'>Ext.event.publisher.Publisher</span><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.event.publisher.Publisher-method-constructor' class='name expandable'>Ext.event.publisher.Publisher</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.event.publisher.Publisher\" rel=\"Ext.event.publisher.Publisher\" class=\"docClass\">Ext.event.publisher.Publisher</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.event.publisher.Publisher\" rel=\"Ext.event.publisher.Publisher\" class=\"docClass\">Ext.event.publisher.Publisher</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-dispatch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.Publisher'>Ext.event.publisher.Publisher</span><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-method-dispatch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.Publisher-method-dispatch' class='name expandable'>dispatch</a>( <span class='pre'>target, eventName, args</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>eventName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHandledEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.Publisher'>Ext.event.publisher.Publisher</span><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-method-getHandledEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.Publisher-method-getHandledEvents' class='name expandable'>getHandledEvents</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getTargetType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.Publisher'>Ext.event.publisher.Publisher</span><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-method-getTargetType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.Publisher-method-getTargetType' class='name expandable'>getTargetType</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-handles' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.Publisher'>Ext.event.publisher.Publisher</span><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-method-handles' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.Publisher-method-handles' class='name expandable'>handles</a>( <span class='pre'>eventName</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-notify' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.Publisher'>Ext.event.publisher.Publisher</span><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-method-notify' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.Publisher-method-notify' class='name expandable'>notify</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-setDispatcher' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.Publisher'>Ext.event.publisher.Publisher</span><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-method-setDispatcher' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.Publisher-method-setDispatcher' class='name expandable'>setDispatcher</a>( <span class='pre'>dispatcher</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dispatcher</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-subscribe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.Publisher'>Ext.event.publisher.Publisher</span><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-method-subscribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.Publisher-method-subscribe' class='name expandable'>subscribe</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-unsubscribe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.Publisher'>Ext.event.publisher.Publisher</span><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-method-unsubscribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.Publisher-method-unsubscribe' class='name expandable'>unsubscribe</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-unsubscribeAll' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.Publisher'>Ext.event.publisher.Publisher</span><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-method-unsubscribeAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.Publisher-method-unsubscribeAll' class='name expandable'>unsubscribeAll</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.event.publisher.Publisher\" rel=\"Ext.event.publisher.Publisher\" class=\"docClass\">Ext.event.publisher.Publisher</a><strong class='chainable signature' >chainable</strong><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.event.publisher.Publisher\" rel=\"Ext.event.publisher.Publisher\" class=\"docClass\">Ext.event.publisher.Publisher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>"});