Ext.data.JsonP.Ext_event_publisher_ComponentDelegation({"tagname":"class","name":"Ext.event.publisher.ComponentDelegation","extends":"Ext.event.publisher.Publisher","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":["Ext.Component","Ext.ComponentQuery"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"private":true},"private":true,"id":"class-Ext.event.publisher.ComponentDelegation","code_type":"ext_define","members":{"cfg":[],"property":[{"name":"handledEvents","tagname":"property","owner":"Ext.event.publisher.ComponentDelegation","meta":{"private":true},"id":"property-handledEvents"},{"name":"idSelectorRegex","tagname":"property","owner":"Ext.event.publisher.Publisher","meta":{"private":true},"id":"property-idSelectorRegex"},{"name":"optimizedSelectorRegex","tagname":"property","owner":"Ext.event.publisher.ComponentDelegation","meta":{"private":true},"id":"property-optimizedSelectorRegex"},{"name":"targetType","tagname":"property","owner":"Ext.event.publisher.ComponentDelegation","meta":{"private":true},"id":"property-targetType"}],"method":[{"name":"constructor","tagname":"method","owner":"Ext.event.publisher.Publisher","meta":{},"id":"method-constructor"},{"name":"dispatch","tagname":"method","owner":"Ext.event.publisher.ComponentDelegation","meta":{"private":true},"id":"method-dispatch"},{"name":"getHandledEvents","tagname":"method","owner":"Ext.event.publisher.Publisher","meta":{"private":true},"id":"method-getHandledEvents"},{"name":"getSubscribers","tagname":"method","owner":"Ext.event.publisher.ComponentDelegation","meta":{"private":true},"id":"method-getSubscribers"},{"name":"getTargetType","tagname":"method","owner":"Ext.event.publisher.Publisher","meta":{"private":true},"id":"method-getTargetType"},{"name":"handles","tagname":"method","owner":"Ext.event.publisher.Publisher","meta":{"private":true},"id":"method-handles"},{"name":"matchesSelector","tagname":"method","owner":"Ext.event.publisher.ComponentDelegation","meta":{"private":true},"id":"method-matchesSelector"},{"name":"notify","tagname":"method","owner":"Ext.event.publisher.ComponentDelegation","meta":{"private":true},"id":"method-notify"},{"name":"publish","tagname":"method","owner":"Ext.event.publisher.ComponentDelegation","meta":{"private":true},"id":"method-publish"},{"name":"setDispatcher","tagname":"method","owner":"Ext.event.publisher.Publisher","meta":{"private":true},"id":"method-setDispatcher"},{"name":"subscribe","tagname":"method","owner":"Ext.event.publisher.ComponentDelegation","meta":{"private":true},"id":"method-subscribe"},{"name":"unsubscribe","tagname":"method","owner":"Ext.event.publisher.ComponentDelegation","meta":{"private":true},"id":"method-unsubscribe"},{"name":"unsubscribeAll","tagname":"method","owner":"Ext.event.publisher.Publisher","meta":{"chainable":true,"private":true},"id":"method-unsubscribeAll"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"ComponentDelegation.js","href":"ComponentDelegation.html#Ext-event-publisher-ComponentDelegation"}],"html_meta":{"private":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base","Ext.event.publisher.Publisher"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.event.publisher.Publisher' rel='Ext.event.publisher.Publisher' class='docClass'>Ext.event.publisher.Publisher</a><div class='subclass '><strong>Ext.event.publisher.ComponentDelegation</strong></div></div></div><h4>Requires</h4><div class='dependency'>Ext.Component</div><div class='dependency'><a href='#!/api/Ext.ComponentQuery' rel='Ext.ComponentQuery' class='docClass'>Ext.ComponentQuery</a></div><h4>Files</h4><div class='dependency'><a href='source/ComponentDelegation.html#Ext-event-publisher-ComponentDelegation' target='_blank'>ComponentDelegation.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-handledEvents' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.ComponentDelegation'>Ext.event.publisher.ComponentDelegation</span><br/><a href='source/ComponentDelegation.html#Ext-event-publisher-ComponentDelegation-property-handledEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.ComponentDelegation-property-handledEvents' class='name expandable'>handledEvents</a><span> : Array</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>['*']</code></p></div></div></div><div id='property-idSelectorRegex' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.publisher.Publisher' rel='Ext.event.publisher.Publisher' class='defined-in docClass'>Ext.event.publisher.Publisher</a><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-property-idSelectorRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.Publisher-property-idSelectorRegex' class='name expandable'>idSelectorRegex</a><span> : RegExp</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>/^#([\\w\\-]+)$/i</code></p></div></div></div><div id='property-optimizedSelectorRegex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.ComponentDelegation'>Ext.event.publisher.ComponentDelegation</span><br/><a href='source/ComponentDelegation.html#Ext-event-publisher-ComponentDelegation-property-optimizedSelectorRegex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.ComponentDelegation-property-optimizedSelectorRegex' class='name expandable'>optimizedSelectorRegex</a><span> : RegExp</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>/^#([\\w\\-]+)((?:[\\s]*)&gt;(?:[\\s]*)|(?:\\s*))([\\w\\-]+)$/i</code></p></div></div></div><div id='property-targetType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.ComponentDelegation'>Ext.event.publisher.ComponentDelegation</span><br/><a href='source/ComponentDelegation.html#Ext-event-publisher-ComponentDelegation-property-targetType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.ComponentDelegation-property-targetType' class='name expandable'>targetType</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'component'</code></p><p>Overrides: <a href='#!/api/Ext.event.publisher.Publisher-property-targetType' rel='Ext.event.publisher.Publisher-property-targetType' class='docClass'>Ext.event.publisher.Publisher.targetType</a></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.publisher.Publisher' rel='Ext.event.publisher.Publisher' class='defined-in docClass'>Ext.event.publisher.Publisher</a><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.event.publisher.Publisher-method-constructor' class='name expandable'>Ext.event.publisher.ComponentDelegation</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.event.publisher.Publisher\" rel=\"Ext.event.publisher.Publisher\" class=\"docClass\">Ext.event.publisher.Publisher</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.event.publisher.Publisher\" rel=\"Ext.event.publisher.Publisher\" class=\"docClass\">Ext.event.publisher.Publisher</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-dispatch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.ComponentDelegation'>Ext.event.publisher.ComponentDelegation</span><br/><a href='source/ComponentDelegation.html#Ext-event-publisher-ComponentDelegation-method-dispatch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.ComponentDelegation-method-dispatch' class='name expandable'>dispatch</a>( <span class='pre'>target, eventName, args, connectedController</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>eventName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>connectedController</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.event.publisher.Publisher-method-dispatch' rel='Ext.event.publisher.Publisher-method-dispatch' class='docClass'>Ext.event.publisher.Publisher.dispatch</a></p></div></div></div><div id='method-getHandledEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.publisher.Publisher' rel='Ext.event.publisher.Publisher' class='defined-in docClass'>Ext.event.publisher.Publisher</a><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-method-getHandledEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.Publisher-method-getHandledEvents' class='name expandable'>getHandledEvents</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getSubscribers' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.ComponentDelegation'>Ext.event.publisher.ComponentDelegation</span><br/><a href='source/ComponentDelegation.html#Ext-event-publisher-ComponentDelegation-method-getSubscribers' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.ComponentDelegation-method-getSubscribers' class='name expandable'>getSubscribers</a>( <span class='pre'>eventName, createIfNotExist</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>createIfNotExist</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTargetType' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.publisher.Publisher' rel='Ext.event.publisher.Publisher' class='defined-in docClass'>Ext.event.publisher.Publisher</a><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-method-getTargetType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.Publisher-method-getTargetType' class='name expandable'>getTargetType</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-handles' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.publisher.Publisher' rel='Ext.event.publisher.Publisher' class='defined-in docClass'>Ext.event.publisher.Publisher</a><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-method-handles' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.Publisher-method-handles' class='name expandable'>handles</a>( <span class='pre'>eventName</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-matchesSelector' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.ComponentDelegation'>Ext.event.publisher.ComponentDelegation</span><br/><a href='source/ComponentDelegation.html#Ext-event-publisher-ComponentDelegation-method-matchesSelector' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.ComponentDelegation-method-matchesSelector' class='name expandable'>matchesSelector</a>( <span class='pre'>component, selector</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>component</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>selector</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-notify' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.ComponentDelegation'>Ext.event.publisher.ComponentDelegation</span><br/><a href='source/ComponentDelegation.html#Ext-event-publisher-ComponentDelegation-method-notify' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.ComponentDelegation-method-notify' class='name expandable'>notify</a>( <span class='pre'>target, eventName</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>eventName</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.event.publisher.Publisher-method-notify' rel='Ext.event.publisher.Publisher-method-notify' class='docClass'>Ext.event.publisher.Publisher.notify</a></p></div></div></div><div id='method-publish' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.ComponentDelegation'>Ext.event.publisher.ComponentDelegation</span><br/><a href='source/ComponentDelegation.html#Ext-event-publisher-ComponentDelegation-method-publish' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.ComponentDelegation-method-publish' class='name expandable'>publish</a>( <span class='pre'>eventName, component</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>eventName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>component</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setDispatcher' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.publisher.Publisher' rel='Ext.event.publisher.Publisher' class='defined-in docClass'>Ext.event.publisher.Publisher</a><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-method-setDispatcher' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.Publisher-method-setDispatcher' class='name expandable'>setDispatcher</a>( <span class='pre'>dispatcher</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>dispatcher</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-subscribe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.ComponentDelegation'>Ext.event.publisher.ComponentDelegation</span><br/><a href='source/ComponentDelegation.html#Ext-event-publisher-ComponentDelegation-method-subscribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.ComponentDelegation-method-subscribe' class='name expandable'>subscribe</a>( <span class='pre'>target, eventName</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>eventName</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.event.publisher.Publisher-method-subscribe' rel='Ext.event.publisher.Publisher-method-subscribe' class='docClass'>Ext.event.publisher.Publisher.subscribe</a></p></div></div></div><div id='method-unsubscribe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.event.publisher.ComponentDelegation'>Ext.event.publisher.ComponentDelegation</span><br/><a href='source/ComponentDelegation.html#Ext-event-publisher-ComponentDelegation-method-unsubscribe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.ComponentDelegation-method-unsubscribe' class='name expandable'>unsubscribe</a>( <span class='pre'>target, eventName, all</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>eventName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>all</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.event.publisher.Publisher-method-unsubscribe' rel='Ext.event.publisher.Publisher-method-unsubscribe' class='docClass'>Ext.event.publisher.Publisher.unsubscribe</a></p></div></div></div><div id='method-unsubscribeAll' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.event.publisher.Publisher' rel='Ext.event.publisher.Publisher' class='defined-in docClass'>Ext.event.publisher.Publisher</a><br/><a href='source/Publisher.html#Ext-event-publisher-Publisher-method-unsubscribeAll' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.event.publisher.Publisher-method-unsubscribeAll' class='name expandable'>unsubscribeAll</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.event.publisher.Publisher\" rel=\"Ext.event.publisher.Publisher\" class=\"docClass\">Ext.event.publisher.Publisher</a><strong class='chainable signature' >chainable</strong><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.event.publisher.Publisher\" rel=\"Ext.event.publisher.Publisher\" class=\"docClass\">Ext.event.publisher.Publisher</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div></div></div></div></div>"});