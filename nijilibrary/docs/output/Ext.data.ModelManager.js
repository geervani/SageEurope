Ext.data.JsonP.Ext_data_ModelManager({"tagname":"class","name":"Ext.data.ModelManager","extends":"Ext.AbstractManager","mixins":[],"alternateClassNames":["Ext.ModelManager","Ext.ModelMgr"],"aliases":{},"singleton":true,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"author":["Ed Spencer"]},"private":null,"id":"class-Ext.data.ModelManager","code_type":"ext_define","members":{"cfg":[],"property":[{"name":"all","tagname":"property","owner":"Ext.AbstractManager","meta":{},"id":"property-all"},{"name":"associationStack","tagname":"property","owner":"Ext.data.ModelManager","meta":{"removed":{"version":"2.0.0","text":""}},"id":"property-associationStack"},{"name":"defaultProxyType","tagname":"property","owner":"Ext.data.ModelManager","meta":{"removed":{"version":"2.0.0","text":""}},"id":"property-defaultProxyType"},{"name":"typeName","tagname":"property","owner":"Ext.AbstractManager","meta":{"private":true},"id":"property-typeName"}],"method":[{"name":"constructor","tagname":"method","owner":"Ext.AbstractManager","meta":{},"id":"method-constructor"},{"name":"create","tagname":"method","owner":"Ext.data.ModelManager","meta":{},"id":"method-create"},{"name":"each","tagname":"method","owner":"Ext.AbstractManager","meta":{},"id":"method-each"},{"name":"get","tagname":"method","owner":"Ext.AbstractManager","meta":{},"id":"method-get"},{"name":"getCount","tagname":"method","owner":"Ext.AbstractManager","meta":{},"id":"method-getCount"},{"name":"getModel","tagname":"method","owner":"Ext.data.ModelManager","meta":{},"id":"method-getModel"},{"name":"isRegistered","tagname":"method","owner":"Ext.AbstractManager","meta":{},"id":"method-isRegistered"},{"name":"onAvailable","tagname":"method","owner":"Ext.AbstractManager","meta":{},"id":"method-onAvailable"},{"name":"onModelDefined","tagname":"method","owner":"Ext.data.ModelManager","meta":{"private":true},"id":"method-onModelDefined"},{"name":"register","tagname":"method","owner":"Ext.AbstractManager","meta":{},"id":"method-register"},{"name":"registerType","tagname":"method","owner":"Ext.data.ModelManager","meta":{},"id":"method-registerType"},{"name":"unregister","tagname":"method","owner":"Ext.AbstractManager","meta":{},"id":"method-unregister"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"ModelManager.js","href":"ModelManager.html#Ext-data-ModelManager"}],"html_meta":{"author":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base","Ext.AbstractManager"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.ModelManager</div><div class='alternate-class-name'>Ext.ModelMgr</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='docClass'>Ext.AbstractManager</a><div class='subclass '><strong>Ext.data.ModelManager</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/ModelManager.html#Ext-data-ModelManager' target='_blank'>ModelManager.js</a></div></pre><div class='doc-contents'><p>The ModelManager keeps track of all <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> types defined in your application.</p>\n\n<h2>Creating Model Instances</h2>\n\n<p>Model instances can be created by using the <a href=\"#!/api/Ext.ClassManager-method-create\" rel=\"Ext.ClassManager-method-create\" class=\"docClass\">Ext.create</a> method. <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a> replaces\nthe deprecated <a href=\"#!/api/Ext.data.ModelManager-method-create\" rel=\"Ext.data.ModelManager-method-create\" class=\"docClass\">Ext.ModelManager.create</a> method. It is also possible to create a model instance\nthis by using the Model type directly. The following 3 snippets are equivalent:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('User', {\n    extend: '<a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>',\n    config: {\n        fields: ['first', 'last']\n    }\n});\n\n// method 1, create using <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a> (recommended)\n<a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('User', {\n    first: 'Ed',\n    last: 'Spencer'\n});\n\n// method 2, create on the type directly\nnew User({\n    first: 'Ed',\n    last: 'Spencer'\n});\n\n// method 3, create through the manager (deprecated)\n<a href=\"#!/api/Ext.data.ModelManager-method-create\" rel=\"Ext.data.ModelManager-method-create\" class=\"docClass\">Ext.ModelManager.create</a>({\n    first: 'Ed',\n    last: 'Spencer'\n}, 'User');\n</code></pre>\n\n<h2>Accessing Model Types</h2>\n\n<p>A reference to a Model type can be obtained by using the <a href=\"#!/api/Ext.data.ModelManager-method-getModel\" rel=\"Ext.data.ModelManager-method-getModel\" class=\"docClass\">getModel</a> function. Since models types\nare normal classes, you can access the type directly. The following snippets are equivalent:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('User', {\n    extend: '<a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>',\n    config: {\n        fields: ['first', 'last']\n    }\n});\n\n// method 1, access model type through the manager\nvar UserType = <a href=\"#!/api/Ext.data.ModelManager-method-getModel\" rel=\"Ext.data.ModelManager-method-getModel\" class=\"docClass\">Ext.ModelManager.getModel</a>('User');\n\n// method 2, reference the type directly\nvar UserType = User;\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-all' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='defined-in docClass'>Ext.AbstractManager</a><br/><a href='source/AbstractManager.html#Ext-AbstractManager-property-all' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.AbstractManager-property-all' class='name not-expandable'>all</a><span> : <a href=\"#!/api/Ext.util.HashMap\" rel=\"Ext.util.HashMap\" class=\"docClass\">Ext.util.HashMap</a></span></div><div class='description'><div class='short'><p>Contains all of the items currently managed</p>\n</div><div class='long'><p>Contains all of the items currently managed</p>\n</div></div></div><div id='property-associationStack' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.ModelManager'>Ext.data.ModelManager</span><br/><a href='source/ModelManager.html#Ext-data-ModelManager-property-associationStack' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.ModelManager-property-associationStack' class='name not-expandable'>associationStack</a><span> : Object</span><strong class='removed signature' >removed</strong></div><div class='description'><div class='short'><p>Private stack of associations that must be created once their associated model has been defined.</p>\n</div><div class='long'><p>Private stack of associations that must be created once their associated model has been defined.</p>\n        <div class='signature-box removed'>\n        <p>This property has been <strong>removed</strong> since 2.0.0</p>\n        \n\n        </div>\n</div></div></div><div id='property-defaultProxyType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.ModelManager'>Ext.data.ModelManager</span><br/><a href='source/ModelManager.html#Ext-data-ModelManager-property-defaultProxyType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.ModelManager-property-defaultProxyType' class='name not-expandable'>defaultProxyType</a><span> : Object</span><strong class='removed signature' >removed</strong></div><div class='description'><div class='short'><p>The string type of the default Model Proxy.</p>\n</div><div class='long'><p>The string type of the default Model Proxy.</p>\n        <div class='signature-box removed'>\n        <p>This property has been <strong>removed</strong> since 2.0.0</p>\n        \n\n        </div>\n</div></div></div><div id='property-typeName' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='defined-in docClass'>Ext.AbstractManager</a><br/><a href='source/AbstractManager.html#Ext-AbstractManager-property-typeName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.AbstractManager-property-typeName' class='name expandable'>typeName</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>End Definitions ...</div><div class='long'><p>End Definitions</p>\n<p>Defaults to: <code>'type'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='defined-in docClass'>Ext.AbstractManager</a><br/><a href='source/AbstractManager.html#Ext-AbstractManager-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.AbstractManager-method-constructor' class='name expandable'>Ext.data.ModelManager</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.AbstractManager\" rel=\"Ext.AbstractManager\" class=\"docClass\">Ext.AbstractManager</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.AbstractManager\" rel=\"Ext.AbstractManager\" class=\"docClass\">Ext.AbstractManager</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-create' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.ModelManager'>Ext.data.ModelManager</span><br/><a href='source/ModelManager.html#Ext-data-ModelManager-method-create' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.ModelManager-method-create' class='name expandable'>create</a>( <span class='pre'>data, name, [id]</span> ) : Object</div><div class='description'><div class='short'>Creates a new instance of a Model using the given data. ...</div><div class='long'><p>Creates a new instance of a Model using the given data.</p>\n\n<p><strong>Note:</strong> This method is deprecated. Use <a href=\"#!/api/Ext.ClassManager-method-create\" rel=\"Ext.ClassManager-method-create\" class=\"docClass\">Ext.create</a> instead. For example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('User', {\n    first: 'Ed',\n    last: 'Spencer'\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>Data to initialize the Model's fields with.</p>\n</div></li><li><span class='pre'>name</span> : String<div class='sub-desc'><p>The name of the model to create.</p>\n</div></li><li><span class='pre'>id</span> : Number (optional)<div class='sub-desc'><p>Unique id of the Model instance (see <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>).</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.AbstractManager-method-create' rel='Ext.AbstractManager-method-create' class='docClass'>Ext.AbstractManager.create</a></p></div></div></div><div id='method-each' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='defined-in docClass'>Ext.AbstractManager</a><br/><a href='source/AbstractManager.html#Ext-AbstractManager-method-each' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.AbstractManager-method-each' class='name expandable'>each</a>( <span class='pre'>fn, [scope]</span> )</div><div class='description'><div class='short'>Executes the specified function once for each item in the collection. ...</div><div class='long'><p>Executes the specified function once for each item in the collection.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The function to execute.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The key of the item</p>\n</div></li><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>The value of the item</p>\n</div></li><li><span class='pre'>length</span> : Number<div class='sub-desc'><p>The total number of items in the collection</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>False to cease iteration.</p>\n</div></li></ul></div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope to execute in.</p>\n<p>Defaults to: <code>this</code></p></div></li></ul></div></div></div><div id='method-get' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='defined-in docClass'>Ext.AbstractManager</a><br/><a href='source/AbstractManager.html#Ext-AbstractManager-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.AbstractManager-method-get' class='name expandable'>get</a>( <span class='pre'>id</span> ) : Object</div><div class='description'><div class='short'>Returns an item by id. ...</div><div class='long'><p>Returns an item by id.\nFor additional details see <a href=\"#!/api/Ext.util.HashMap-method-get\" rel=\"Ext.util.HashMap-method-get\" class=\"docClass\">Ext.util.HashMap.get</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>The <code>id</code> of the item.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The item, <code>undefined</code> if not found.</p>\n</div></li></ul></div></div></div><div id='method-getCount' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='defined-in docClass'>Ext.AbstractManager</a><br/><a href='source/AbstractManager.html#Ext-AbstractManager-method-getCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.AbstractManager-method-getCount' class='name expandable'>getCount</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the number of items in the collection. ...</div><div class='long'><p>Gets the number of items in the collection.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The number of items in the collection.</p>\n</div></li></ul></div></div></div><div id='method-getModel' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.ModelManager'>Ext.data.ModelManager</span><br/><a href='source/ModelManager.html#Ext-data-ModelManager-method-getModel' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.ModelManager-method-getModel' class='name expandable'>getModel</a>( <span class='pre'>id</span> ) : <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a></div><div class='description'><div class='short'>Returns the Ext.data.Model for a given model name. ...</div><div class='long'><p>Returns the <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> for a given model name.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String/Object<div class='sub-desc'><p>The <code>id</code> of the model or the model instance.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a></span><div class='sub-desc'><p>A model class.</p>\n</div></li></ul></div></div></div><div id='method-isRegistered' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='defined-in docClass'>Ext.AbstractManager</a><br/><a href='source/AbstractManager.html#Ext-AbstractManager-method-isRegistered' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.AbstractManager-method-isRegistered' class='name expandable'>isRegistered</a>( <span class='pre'>type</span> ) : Boolean</div><div class='description'><div class='short'>Checks if an item type is registered. ...</div><div class='long'><p>Checks if an item type is registered.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>type</span> : String<div class='sub-desc'><p>The mnemonic string by which the class may be looked up.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Whether the type is registered.</p>\n</div></li></ul></div></div></div><div id='method-onAvailable' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='defined-in docClass'>Ext.AbstractManager</a><br/><a href='source/AbstractManager.html#Ext-AbstractManager-method-onAvailable' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.AbstractManager-method-onAvailable' class='name expandable'>onAvailable</a>( <span class='pre'>id, fn, scope</span> )</div><div class='description'><div class='short'>Registers a function that will be called when an item with the specified id is added to the manager. ...</div><div class='long'><p>Registers a function that will be called when an item with the specified id is added to the manager.\nThis will happen on instantiation.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>id</span> : String<div class='sub-desc'><p>The item <code>id</code>.</p>\n</div></li><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The callback function. Called with a single parameter, the item.</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope (<code>this</code> reference) in which the callback is executed.\nDefaults to the item.</p>\n</div></li></ul></div></div></div><div id='method-onModelDefined' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.ModelManager'>Ext.data.ModelManager</span><br/><a href='source/ModelManager.html#Ext-data-ModelManager-method-onModelDefined' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.ModelManager-method-onModelDefined' class='name expandable'>onModelDefined</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-register' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='defined-in docClass'>Ext.AbstractManager</a><br/><a href='source/AbstractManager.html#Ext-AbstractManager-method-register' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.AbstractManager-method-register' class='name expandable'>register</a>( <span class='pre'>item</span> )</div><div class='description'><div class='short'>Registers an item to be managed. ...</div><div class='long'><p>Registers an item to be managed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object<div class='sub-desc'><p>The item to register.</p>\n</div></li></ul></div></div></div><div id='method-registerType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.ModelManager'>Ext.data.ModelManager</span><br/><a href='source/ModelManager.html#Ext-data-ModelManager-method-registerType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.ModelManager-method-registerType' class='name expandable'>registerType</a>( <span class='pre'>name, config</span> ) : Object</div><div class='description'><div class='short'>Registers a model definition. ...</div><div class='long'><p>Registers a model definition. All model plugins marked with <code>isDefault: true</code> are bootstrapped\nimmediately, as are any addition plugins defined in the model config.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>name</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.AbstractManager-method-registerType' rel='Ext.AbstractManager-method-registerType' class='docClass'>Ext.AbstractManager.registerType</a></p></div></div></div><div id='method-unregister' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.AbstractManager' rel='Ext.AbstractManager' class='defined-in docClass'>Ext.AbstractManager</a><br/><a href='source/AbstractManager.html#Ext-AbstractManager-method-unregister' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.AbstractManager-method-unregister' class='name expandable'>unregister</a>( <span class='pre'>item</span> )</div><div class='description'><div class='short'>Unregisters an item by removing it from this manager. ...</div><div class='long'><p>Unregisters an item by removing it from this manager.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>item</span> : Object<div class='sub-desc'><p>The item to unregister.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});