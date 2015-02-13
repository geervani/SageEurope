Ext.data.JsonP.Ext_direct_RemotingMethod({"tagname":"class","name":"Ext.direct.RemotingMethod","extends":"Ext.Base","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"private":true},"private":true,"id":"class-Ext.direct.RemotingMethod","code_type":"ext_define","members":{"cfg":[{"name":"formHandler","tagname":"cfg","owner":"Ext.direct.RemotingMethod","meta":{"private":true},"id":"cfg-formHandler"},{"name":"len","tagname":"cfg","owner":"Ext.direct.RemotingMethod","meta":{"private":true},"id":"cfg-len"},{"name":"name","tagname":"cfg","owner":"Ext.direct.RemotingMethod","meta":{"private":true},"id":"cfg-name"},{"name":"ordered","tagname":"cfg","owner":"Ext.direct.RemotingMethod","meta":{"private":true},"id":"cfg-ordered"},{"name":"params","tagname":"cfg","owner":"Ext.direct.RemotingMethod","meta":{"private":true},"id":"cfg-params"}],"property":[],"method":[{"name":"constructor","tagname":"method","owner":"Ext.direct.RemotingMethod","meta":{},"id":"method-constructor"},{"name":"applyParams","tagname":"method","owner":"Ext.direct.RemotingMethod","meta":{"private":true},"id":"method-applyParams"},{"name":"getArgs","tagname":"method","owner":"Ext.direct.RemotingMethod","meta":{"private":true},"id":"method-getArgs"},{"name":"getCallData","tagname":"method","owner":"Ext.direct.RemotingMethod","meta":{},"id":"method-getCallData"},{"name":"getFormHandler","tagname":"method","owner":"Ext.direct.RemotingMethod","meta":{},"id":"method-getFormHandler"},{"name":"getLen","tagname":"method","owner":"Ext.direct.RemotingMethod","meta":{},"id":"method-getLen"},{"name":"getName","tagname":"method","owner":"Ext.direct.RemotingMethod","meta":{},"id":"method-getName"},{"name":"getOrdered","tagname":"method","owner":"Ext.direct.RemotingMethod","meta":{},"id":"method-getOrdered"},{"name":"getParams","tagname":"method","owner":"Ext.direct.RemotingMethod","meta":{},"id":"method-getParams"},{"name":"setFormHandler","tagname":"method","owner":"Ext.direct.RemotingMethod","meta":{},"id":"method-setFormHandler"},{"name":"setLen","tagname":"method","owner":"Ext.direct.RemotingMethod","meta":{},"id":"method-setLen"},{"name":"setName","tagname":"method","owner":"Ext.direct.RemotingMethod","meta":{},"id":"method-setName"},{"name":"setOrdered","tagname":"method","owner":"Ext.direct.RemotingMethod","meta":{},"id":"method-setOrdered"},{"name":"setParams","tagname":"method","owner":"Ext.direct.RemotingMethod","meta":{},"id":"method-setParams"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"RemotingMethod.js","href":"RemotingMethod.html#Ext-direct-RemotingMethod"}],"html_meta":{"private":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.direct.RemotingMethod</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod' target='_blank'>RemotingMethod.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p><p>Small utility class used internally to represent a Direct method.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-formHandler' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-cfg-formHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.RemotingMethod-cfg-formHandler' class='name not-expandable'>formHandler</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-len' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-cfg-len' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.RemotingMethod-cfg-len' class='name not-expandable'>len</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-name' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-cfg-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.RemotingMethod-cfg-name' class='name not-expandable'>name</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-ordered' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-cfg-ordered' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.RemotingMethod-cfg-ordered' class='name expandable'>ordered</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-params' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-cfg-params' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.RemotingMethod-cfg-params' class='name not-expandable'>params</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.direct.RemotingMethod-method-constructor' class='name expandable'>Ext.direct.RemotingMethod</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.direct.RemotingMethod\" rel=\"Ext.direct.RemotingMethod\" class=\"docClass\">Ext.direct.RemotingMethod</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.direct.RemotingMethod\" rel=\"Ext.direct.RemotingMethod\" class=\"docClass\">Ext.direct.RemotingMethod</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyParams' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-method-applyParams' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.RemotingMethod-method-applyParams' class='name expandable'>applyParams</a>( <span class='pre'>params</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getArgs' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-method-getArgs' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.RemotingMethod-method-getArgs' class='name expandable'>getArgs</a>( <span class='pre'>params, paramOrder, paramsAsHash</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>paramOrder</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>paramsAsHash</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCallData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-method-getCallData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.RemotingMethod-method-getCallData' class='name expandable'>getCallData</a>( <span class='pre'>args</span> ) : Object</div><div class='description'><div class='short'>Takes the arguments for the Direct function and splits the arguments\nfrom the scope and the callback. ...</div><div class='long'><p>Takes the arguments for the Direct function and splits the arguments\nfrom the scope and the callback.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>args</span> : Array<div class='sub-desc'><p>The arguments passed to the direct call</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>An object with 3 properties, args, callback &amp; scope.</p>\n</div></li></ul></div></div></div><div id='method-getFormHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-cfg-formHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.RemotingMethod-method-getFormHandler' class='name expandable'>getFormHandler</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of formHandler. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.direct.RemotingMethod-cfg-formHandler\" rel=\"Ext.direct.RemotingMethod-cfg-formHandler\" class=\"docClass\">formHandler</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-cfg-len' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.RemotingMethod-method-getLen' class='name expandable'>getLen</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of len. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.direct.RemotingMethod-cfg-len\" rel=\"Ext.direct.RemotingMethod-cfg-len\" class=\"docClass\">len</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-cfg-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.RemotingMethod-method-getName' class='name expandable'>getName</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of name. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.direct.RemotingMethod-cfg-name\" rel=\"Ext.direct.RemotingMethod-cfg-name\" class=\"docClass\">name</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getOrdered' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-cfg-ordered' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.RemotingMethod-method-getOrdered' class='name expandable'>getOrdered</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of ordered. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.direct.RemotingMethod-cfg-ordered\" rel=\"Ext.direct.RemotingMethod-cfg-ordered\" class=\"docClass\">ordered</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getParams' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-cfg-params' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.RemotingMethod-method-getParams' class='name expandable'>getParams</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of params. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.direct.RemotingMethod-cfg-params\" rel=\"Ext.direct.RemotingMethod-cfg-params\" class=\"docClass\">params</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setFormHandler' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-cfg-formHandler' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.RemotingMethod-method-setFormHandler' class='name expandable'>setFormHandler</a>( <span class='pre'>formHandler</span> )</div><div class='description'><div class='short'>Sets the value of formHandler. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.direct.RemotingMethod-cfg-formHandler\" rel=\"Ext.direct.RemotingMethod-cfg-formHandler\" class=\"docClass\">formHandler</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>formHandler</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setLen' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-cfg-len' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.RemotingMethod-method-setLen' class='name expandable'>setLen</a>( <span class='pre'>len</span> )</div><div class='description'><div class='short'>Sets the value of len. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.direct.RemotingMethod-cfg-len\" rel=\"Ext.direct.RemotingMethod-cfg-len\" class=\"docClass\">len</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>len</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-cfg-name' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.RemotingMethod-method-setName' class='name expandable'>setName</a>( <span class='pre'>name</span> )</div><div class='description'><div class='short'>Sets the value of name. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.direct.RemotingMethod-cfg-name\" rel=\"Ext.direct.RemotingMethod-cfg-name\" class=\"docClass\">name</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setOrdered' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-cfg-ordered' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.RemotingMethod-method-setOrdered' class='name expandable'>setOrdered</a>( <span class='pre'>ordered</span> )</div><div class='description'><div class='short'>Sets the value of ordered. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.direct.RemotingMethod-cfg-ordered\" rel=\"Ext.direct.RemotingMethod-cfg-ordered\" class=\"docClass\">ordered</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ordered</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setParams' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.direct.RemotingMethod'>Ext.direct.RemotingMethod</span><br/><a href='source/RemotingMethod.html#Ext-direct-RemotingMethod-cfg-params' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.direct.RemotingMethod-method-setParams' class='name expandable'>setParams</a>( <span class='pre'>params</span> )</div><div class='description'><div class='short'>Sets the value of params. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.direct.RemotingMethod-cfg-params\" rel=\"Ext.direct.RemotingMethod-cfg-params\" class=\"docClass\">params</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>params</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});