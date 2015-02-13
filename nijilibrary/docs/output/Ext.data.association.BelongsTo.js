Ext.data.JsonP.Ext_data_association_BelongsTo({"tagname":"class","name":"Ext.data.association.BelongsTo","extends":"Ext.data.association.Association","mixins":[],"alternateClassNames":["Ext.data.BelongsToAssociation"],"aliases":{"association":["belongsto"]},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"author":["Ed Spencer"],"aside":[{"type":"guide","name":"models"}]},"private":null,"id":"class-Ext.data.association.BelongsTo","code_type":"ext_define","members":{"cfg":[{"name":"foreignKey","tagname":"cfg","owner":"Ext.data.association.BelongsTo","meta":{},"id":"cfg-foreignKey"},{"name":"getterName","tagname":"cfg","owner":"Ext.data.association.BelongsTo","meta":{},"id":"cfg-getterName"},{"name":"instanceName","tagname":"cfg","owner":"Ext.data.association.BelongsTo","meta":{"private":true},"id":"cfg-instanceName"},{"name":"setterName","tagname":"cfg","owner":"Ext.data.association.BelongsTo","meta":{},"id":"cfg-setterName"}],"property":[],"method":[{"name":"applyAssociationKey","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{"private":true},"id":"method-applyAssociationKey"},{"name":"applyForeignKey","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{"private":true},"id":"method-applyForeignKey"},{"name":"applyGetterName","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{"private":true},"id":"method-applyGetterName"},{"name":"applyInstanceName","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{"private":true},"id":"method-applyInstanceName"},{"name":"applySetterName","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{"private":true},"id":"method-applySetterName"},{"name":"createGetter","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{"private":true},"id":"method-createGetter"},{"name":"createSetter","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{"private":true},"id":"method-createSetter"},{"name":"getForeignKey","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{},"id":"method-getForeignKey"},{"name":"getGetterName","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{},"id":"method-getGetterName"},{"name":"getInstanceName","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{},"id":"method-getInstanceName"},{"name":"getInverseAssociation","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{"private":true},"id":"method-getInverseAssociation"},{"name":"getSetterName","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{},"id":"method-getSetterName"},{"name":"read","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{"private":true},"id":"method-read"},{"name":"setForeignKey","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{},"id":"method-setForeignKey"},{"name":"setGetterName","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{},"id":"method-setGetterName"},{"name":"setInstanceName","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{},"id":"method-setInstanceName"},{"name":"setSetterName","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{},"id":"method-setSetterName"},{"name":"updateForeignKey","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{"private":true},"id":"method-updateForeignKey"},{"name":"updateGetterName","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{"private":true},"id":"method-updateGetterName"},{"name":"updateSetterName","tagname":"method","owner":"Ext.data.association.BelongsTo","meta":{"private":true},"id":"method-updateSetterName"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"BelongsTo.js","href":"BelongsTo.html#Ext-data-association-BelongsTo"}],"html_meta":{"author":null,"aside":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.data.association.Association"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.data.BelongsToAssociation</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.association.Association<div class='subclass '><strong>Ext.data.association.BelongsTo</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/BelongsTo.html#Ext-data-association-BelongsTo' target='_blank'>BelongsTo.js</a></div></pre><div class='doc-contents'><p>Represents a many to one association with another model. The owner model is expected to have\na foreign key which references the primary key of the associated model:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Category', {\n    extend: '<a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>',\n    config: {\n        fields: [\n            { name: 'id',   type: 'int' },\n            { name: 'name', type: 'string' }\n        ]\n    }\n});\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Product', {\n    extend: '<a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>',\n    config: {\n        fields: [\n            { name: 'id',          type: 'int' },\n            { name: 'category_id', type: 'int' },\n            { name: 'name',        type: 'string' }\n        ],\n        // we can use the belongsTo shortcut on the model to create a belongsTo association\n        associations: { type: 'belongsTo', model: 'Category' }\n    }\n});\n</code></pre>\n\n<p>In the example above we have created models for Products and Categories, and linked them together\nby saying that each Product belongs to a Category. This automatically links each Product to a Category\nbased on the Product's category_id, and provides new functions on the Product model:</p>\n\n<h2>Generated getter function</h2>\n\n<p>The first function that is added to the owner model is a getter function:</p>\n\n<pre><code>var product = new Product({\n    id: 100,\n    category_id: 20,\n    name: 'Sneakers'\n});\n\nproduct.getCategory(function(category, operation) {\n    // do something with the category object\n    alert(category.get('id')); // alerts 20\n}, this);\n</code></pre>\n\n<p>The getCategory function was created on the Product model when we defined the association. This uses the\nCategory's configured proxy to load the Category asynchronously, calling the provided\ncallback when it has loaded.</p>\n\n<p>The new getCategory function will also accept an object containing success, failure and callback properties\n- callback will always be called, success will only be called if the associated model was loaded successfully\nand failure will only be called if the associated model could not be loaded:</p>\n\n<pre><code>product.getCategory({\n    reload: true, // force a reload if the owner model is already cached\n    callback: function(category, operation) {}, // a function that will always be called\n    success : function(category, operation) {}, // a function that will only be called if the load succeeded\n    failure : function(category, operation) {}, // a function that will only be called if the load did not succeed\n    scope   : this // optionally pass in a scope object to execute the callbacks in\n});\n</code></pre>\n\n<p>In each case above the callbacks are called with two arguments - the associated model instance and the\n<a href=\"#!/api/Ext.data.Operation\" rel=\"Ext.data.Operation\" class=\"docClass\">operation</a> object that was executed to load that instance. The Operation object is\nuseful when the instance could not be loaded.</p>\n\n<p>Once the getter has been called on the model, it will be cached if the getter is called a second time. To\nforce the model to reload, specify reload: true in the options object.</p>\n\n<h2>Generated setter function</h2>\n\n<p>The second generated function sets the associated model instance - if only a single argument is passed to\nthe setter then the following two calls are identical:</p>\n\n<pre><code>// this call...\nproduct.setCategory(10);\n\n// is equivalent to this call:\nproduct.set('category_id', 10);\n</code></pre>\n\n<p>An instance of the owner model can also be passed as a parameter.</p>\n\n<p>If we pass in a second argument, the model will be automatically saved and the second argument passed to\nthe owner model's <a href=\"#!/api/Ext.data.Model-method-save\" rel=\"Ext.data.Model-method-save\" class=\"docClass\">save</a> method:</p>\n\n<pre><code>product.setCategory(10, function(product, operation) {\n    // the product has been saved\n    alert(product.get('category_id')); //now alerts 10\n});\n\n//alternative syntax:\nproduct.setCategory(10, {\n    callback: function(product, operation) {}, // a function that will always be called\n    success : function(product, operation) {}, // a function that will only be called if the load succeeded\n    failure : function(product, operation) {}, // a function that will only be called if the load did not succeed\n    scope   : this //optionally pass in a scope object to execute the callbacks in\n});\n</code></pre>\n\n<h2>Customization</h2>\n\n<p>Associations reflect on the models they are linking to automatically set up properties such as the\nprimaryKey and <a href=\"#!/api/Ext.data.association.BelongsTo-cfg-foreignKey\" rel=\"Ext.data.association.BelongsTo-cfg-foreignKey\" class=\"docClass\">foreignKey</a>. These can alternatively be specified:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Product', {\n    extend: '<a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>',\n    config: {\n        fields: [\n            // ...\n        ],\n\n        associations: [\n            { type: 'belongsTo', model: 'Category', primaryKey: 'unique_id', foreignKey: 'cat_id' }\n        ]\n    }\n});\n</code></pre>\n\n<p>Here we replaced the default primary key (defaults to 'id') and foreign key (calculated as 'category_id')\nwith our own settings. Usually this will not be needed.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-foreignKey' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-cfg-foreignKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-cfg-foreignKey' class='name expandable'>foreignKey</a><span> : String</span></div><div class='description'><div class='short'>The name of the foreign key on the owner model that links it to the associated\nmodel. ...</div><div class='long'><p>The name of the foreign key on the owner model that links it to the associated\nmodel. Defaults to the lowercased name of the associated model plus \"_id\", e.g. an association with a\nmodel called Product would set up a product_id foreign key.</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Order', {\n    extend: '<a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>',\n    fields: ['id', 'date'],\n    hasMany: 'Product'\n});\n\n<a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('Product', {\n    extend: '<a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>',\n    fields: ['id', 'name', 'order_id'], // refers to the id of the order that this product belongs to\n    belongsTo: 'Group'\n});\nvar product = new Product({\n    id: 1,\n    name: 'Product 1',\n    order_id: 22\n}, 1);\nproduct.getOrder(); // Will make a call to the server asking for order_id 22\n</code></pre>\n</div></div></div><div id='cfg-getterName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-cfg-getterName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-cfg-getterName' class='name expandable'>getterName</a><span> : String</span></div><div class='description'><div class='short'>The name of the getter function that will be added to the local model's prototype. ...</div><div class='long'><p>The name of the getter function that will be added to the local model's prototype.\nDefaults to 'get' + the name of the foreign model, e.g. getCategory</p>\n</div></div></div><div id='cfg-instanceName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-cfg-instanceName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-cfg-instanceName' class='name not-expandable'>instanceName</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-setterName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-cfg-setterName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-cfg-setterName' class='name expandable'>setterName</a><span> : String</span></div><div class='description'><div class='short'>The name of the setter function that will be added to the local model's prototype. ...</div><div class='long'><p>The name of the setter function that will be added to the local model's prototype.\nDefaults to 'set' + the name of the foreign model, e.g. setCategory</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-applyAssociationKey' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-method-applyAssociationKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-applyAssociationKey' class='name expandable'>applyAssociationKey</a>( <span class='pre'>associationKey</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>associationKey</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyForeignKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-method-applyForeignKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-applyForeignKey' class='name expandable'>applyForeignKey</a>( <span class='pre'>foreignKey</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>foreignKey</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyGetterName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-method-applyGetterName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-applyGetterName' class='name expandable'>applyGetterName</a>( <span class='pre'>getterName</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>getterName</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyInstanceName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-method-applyInstanceName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-applyInstanceName' class='name expandable'>applyInstanceName</a>( <span class='pre'>instanceName</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>instanceName</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applySetterName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-method-applySetterName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-applySetterName' class='name expandable'>applySetterName</a>( <span class='pre'>setterName</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>setterName</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createGetter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-method-createGetter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-createGetter' class='name expandable'>createGetter</a>( <span class='pre'></span> ) : Function<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Returns a getter function to be placed on the owner model's prototype. ...</div><div class='long'><p>Returns a getter function to be placed on the owner model's prototype. We cache the loaded instance\nthe first time it is loaded so that subsequent calls to the getter always receive the same reference.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p>The getter function</p>\n</div></li></ul></div></div></div><div id='method-createSetter' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-method-createSetter' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-createSetter' class='name expandable'>createSetter</a>( <span class='pre'></span> ) : Function<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Returns a setter function to be placed on the owner model's prototype ...</div><div class='long'><p>Returns a setter function to be placed on the owner model's prototype</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Function</span><div class='sub-desc'><p>The setter function</p>\n</div></li></ul></div></div></div><div id='method-getForeignKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-cfg-foreignKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-getForeignKey' class='name expandable'>getForeignKey</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of foreignKey. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.association.BelongsTo-cfg-foreignKey\" rel=\"Ext.data.association.BelongsTo-cfg-foreignKey\" class=\"docClass\">foreignKey</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getGetterName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-cfg-getterName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-getGetterName' class='name expandable'>getGetterName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of getterName. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.association.BelongsTo-cfg-getterName\" rel=\"Ext.data.association.BelongsTo-cfg-getterName\" class=\"docClass\">getterName</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getInstanceName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-cfg-instanceName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-getInstanceName' class='name expandable'>getInstanceName</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of instanceName. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.association.BelongsTo-cfg-instanceName\" rel=\"Ext.data.association.BelongsTo-cfg-instanceName\" class=\"docClass\">instanceName</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getInverseAssociation' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-method-getInverseAssociation' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-getInverseAssociation' class='name expandable'>getInverseAssociation</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getSetterName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-cfg-setterName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-getSetterName' class='name expandable'>getSetterName</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of setterName. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.association.BelongsTo-cfg-setterName\" rel=\"Ext.data.association.BelongsTo-cfg-setterName\" class=\"docClass\">setterName</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-read' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-method-read' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-read' class='name expandable'>read</a>( <span class='pre'>record, reader, associationData</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Read associated data ...</div><div class='long'><p>Read associated data</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a><div class='sub-desc'><p>The record we're writing to</p>\n</div></li><li><span class='pre'>reader</span> : Ext.data.reader.Reader<div class='sub-desc'><p>The reader for the associated model</p>\n</div></li><li><span class='pre'>associationData</span> : Object<div class='sub-desc'><p>The raw associated data</p>\n</div></li></ul></div></div></div><div id='method-setForeignKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-cfg-foreignKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-setForeignKey' class='name expandable'>setForeignKey</a>( <span class='pre'>foreignKey</span> )</div><div class='description'><div class='short'>Sets the value of foreignKey. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.association.BelongsTo-cfg-foreignKey\" rel=\"Ext.data.association.BelongsTo-cfg-foreignKey\" class=\"docClass\">foreignKey</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>foreignKey</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setGetterName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-cfg-getterName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-setGetterName' class='name expandable'>setGetterName</a>( <span class='pre'>getterName</span> )</div><div class='description'><div class='short'>Sets the value of getterName. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.association.BelongsTo-cfg-getterName\" rel=\"Ext.data.association.BelongsTo-cfg-getterName\" class=\"docClass\">getterName</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>getterName</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setInstanceName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-cfg-instanceName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-setInstanceName' class='name expandable'>setInstanceName</a>( <span class='pre'>instanceName</span> )</div><div class='description'><div class='short'>Sets the value of instanceName. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.association.BelongsTo-cfg-instanceName\" rel=\"Ext.data.association.BelongsTo-cfg-instanceName\" class=\"docClass\">instanceName</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>instanceName</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setSetterName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-cfg-setterName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-setSetterName' class='name expandable'>setSetterName</a>( <span class='pre'>setterName</span> )</div><div class='description'><div class='short'>Sets the value of setterName. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.association.BelongsTo-cfg-setterName\" rel=\"Ext.data.association.BelongsTo-cfg-setterName\" class=\"docClass\">setterName</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>setterName</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateForeignKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-method-updateForeignKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-updateForeignKey' class='name expandable'>updateForeignKey</a>( <span class='pre'>foreignKey, oldForeignKey</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>foreignKey</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>oldForeignKey</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateGetterName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-method-updateGetterName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-updateGetterName' class='name expandable'>updateGetterName</a>( <span class='pre'>getterName, oldGetterName</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>getterName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>oldGetterName</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateSetterName' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.association.BelongsTo'>Ext.data.association.BelongsTo</span><br/><a href='source/BelongsTo.html#Ext-data-association-BelongsTo-method-updateSetterName' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.association.BelongsTo-method-updateSetterName' class='name expandable'>updateSetterName</a>( <span class='pre'>setterName, oldSetterName</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>setterName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>oldSetterName</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});