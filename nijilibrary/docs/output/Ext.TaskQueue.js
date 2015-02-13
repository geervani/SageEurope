Ext.data.JsonP.Ext_TaskQueue({"tagname":"class","name":"Ext.TaskQueue","extends":"Ext.Base","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":true,"requires":["Ext.AnimationQueue"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"private":true},"private":true,"id":"class-Ext.TaskQueue","code_type":"ext_define","members":{"cfg":[],"property":[{"name":"mode","tagname":"property","owner":"Ext.TaskQueue","meta":{"private":true},"id":"property-mode"},{"name":"pending","tagname":"property","owner":"Ext.TaskQueue","meta":{"private":true},"id":"property-pending"}],"method":[{"name":"constructor","tagname":"method","owner":"Ext.TaskQueue","meta":{},"id":"method-constructor"},{"name":"request","tagname":"method","owner":"Ext.TaskQueue","meta":{"private":true},"id":"method-request"},{"name":"requestRead","tagname":"method","owner":"Ext.TaskQueue","meta":{"private":true},"id":"method-requestRead"},{"name":"requestWrite","tagname":"method","owner":"Ext.TaskQueue","meta":{"private":true},"id":"method-requestWrite"},{"name":"run","tagname":"method","owner":"Ext.TaskQueue","meta":{"private":true},"id":"method-run"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"TaskQueue.js","href":"TaskQueue.html#Ext-TaskQueue"}],"html_meta":{"private":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.TaskQueue</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.AnimationQueue</div><h4>Files</h4><div class='dependency'><a href='source/TaskQueue.html#Ext-TaskQueue' target='_blank'>TaskQueue.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>Handle batch read / write of DOMs, currently used in SizeMonitor + PaintMonitor</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-mode' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.TaskQueue'>Ext.TaskQueue</span><br/><a href='source/TaskQueue.html#Ext-TaskQueue-property-mode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.TaskQueue-property-mode' class='name expandable'>mode</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-pending' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.TaskQueue'>Ext.TaskQueue</span><br/><a href='source/TaskQueue.html#Ext-TaskQueue-property-pending' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.TaskQueue-property-pending' class='name expandable'>pending</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.TaskQueue'>Ext.TaskQueue</span><br/><a href='source/TaskQueue.html#Ext-TaskQueue-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.TaskQueue-method-constructor' class='name expandable'>Ext.TaskQueue</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.TaskQueue\" rel=\"Ext.TaskQueue\" class=\"docClass\">Ext.TaskQueue</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.TaskQueue\" rel=\"Ext.TaskQueue\" class=\"docClass\">Ext.TaskQueue</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-request' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.TaskQueue'>Ext.TaskQueue</span><br/><a href='source/TaskQueue.html#Ext-TaskQueue-method-request' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.TaskQueue-method-request' class='name expandable'>request</a>( <span class='pre'>mode</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>mode</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-requestRead' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.TaskQueue'>Ext.TaskQueue</span><br/><a href='source/TaskQueue.html#Ext-TaskQueue-method-requestRead' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.TaskQueue-method-requestRead' class='name expandable'>requestRead</a>( <span class='pre'>fn, scope, args</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-requestWrite' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.TaskQueue'>Ext.TaskQueue</span><br/><a href='source/TaskQueue.html#Ext-TaskQueue-method-requestWrite' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.TaskQueue-method-requestWrite' class='name expandable'>requestWrite</a>( <span class='pre'>fn, scope, args</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>args</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-run' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.TaskQueue'>Ext.TaskQueue</span><br/><a href='source/TaskQueue.html#Ext-TaskQueue-method-run' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.TaskQueue-method-run' class='name expandable'>run</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>"});