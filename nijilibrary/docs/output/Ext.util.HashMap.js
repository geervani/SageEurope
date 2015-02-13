Ext.data.JsonP.Ext_util_HashMap({"tagname":"class","name":"Ext.util.HashMap","extends":"Ext.Base","mixins":["Ext.mixin.Observable"],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ext.util.HashMap","code_type":"ext_define","members":{"cfg":[{"name":"keyFn","tagname":"cfg","owner":"Ext.util.HashMap","meta":{},"id":"cfg-keyFn"}],"property":[],"method":[{"name":"constructor","tagname":"method","owner":"Ext.util.HashMap","meta":{},"id":"method-constructor"},{"name":"add","tagname":"method","owner":"Ext.util.HashMap","meta":{},"id":"method-add"},{"name":"clear","tagname":"method","owner":"Ext.util.HashMap","meta":{"chainable":true},"id":"method-clear"},{"name":"clone","tagname":"method","owner":"Ext.util.HashMap","meta":{},"id":"method-clone"},{"name":"contains","tagname":"method","owner":"Ext.util.HashMap","meta":{},"id":"method-contains"},{"name":"containsKey","tagname":"method","owner":"Ext.util.HashMap","meta":{},"id":"method-containsKey"},{"name":"each","tagname":"method","owner":"Ext.util.HashMap","meta":{"chainable":true},"id":"method-each"},{"name":"findKey","tagname":"method","owner":"Ext.util.HashMap","meta":{"private":true},"id":"method-findKey"},{"name":"get","tagname":"method","owner":"Ext.util.HashMap","meta":{},"id":"method-get"},{"name":"getArray","tagname":"method","owner":"Ext.util.HashMap","meta":{"private":true},"id":"method-getArray"},{"name":"getCount","tagname":"method","owner":"Ext.util.HashMap","meta":{},"id":"method-getCount"},{"name":"getData","tagname":"method","owner":"Ext.util.HashMap","meta":{"private":true},"id":"method-getData"},{"name":"getKey","tagname":"method","owner":"Ext.util.HashMap","meta":{"private":true},"id":"method-getKey"},{"name":"getKeys","tagname":"method","owner":"Ext.util.HashMap","meta":{},"id":"method-getKeys"},{"name":"getValues","tagname":"method","owner":"Ext.util.HashMap","meta":{},"id":"method-getValues"},{"name":"remove","tagname":"method","owner":"Ext.util.HashMap","meta":{},"id":"method-remove"},{"name":"removeByKey","tagname":"method","owner":"Ext.util.HashMap","meta":{},"id":"method-removeByKey"},{"name":"replace","tagname":"method","owner":"Ext.util.HashMap","meta":{},"id":"method-replace"}],"event":[{"name":"add","tagname":"event","owner":"Ext.util.HashMap","meta":{},"id":"event-add"},{"name":"clear","tagname":"event","owner":"Ext.util.HashMap","meta":{},"id":"event-clear"},{"name":"remove","tagname":"event","owner":"Ext.util.HashMap","meta":{},"id":"event-remove"},{"name":"replace","tagname":"event","owner":"Ext.util.HashMap","meta":{},"id":"event-replace"}],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"HashMap.js","href":"HashMap.html#Ext-util-HashMap"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.util.HashMap</strong></div></div><h4>Mixins</h4><div class='dependency'>Ext.mixin.Observable</div><h4>Files</h4><div class='dependency'><a href='source/HashMap.html#Ext-util-HashMap' target='_blank'>HashMap.js</a></div></pre><div class='doc-contents'><p>Represents a collection of a set of key and value pairs. Each key in the HashMap must be unique, the same\nkey cannot exist twice. Access to items is provided via the key only. Sample usage:</p>\n\n<pre><code>var map = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('<a href=\"#!/api/Ext.util.HashMap\" rel=\"Ext.util.HashMap\" class=\"docClass\">Ext.util.HashMap</a>');\nmap.add('key1', 1);\nmap.add('key2', 2);\nmap.add('key3', 3);\n\nmap.each(function(key, value, length){\n    console.log(key, value, length);\n});\n</code></pre>\n\n<p>The HashMap is an unordered class, there is no guarantee when iterating over the items that they will be in\nany particular order. If this is required, then use a Ext.util.MixedCollection.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-keyFn' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-cfg-keyFn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-cfg-keyFn' class='name expandable'>keyFn</a><span> : Function</span></div><div class='description'><div class='short'>A function that is used to retrieve a default key for a passed object. ...</div><div class='long'><p>A function that is used to retrieve a default key for a passed object.\nA default is provided that returns the <strong>id</strong> property on the object.\nThis function is only used if the add method is called with a single argument.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.util.HashMap-method-constructor' class='name expandable'>Ext.util.HashMap</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.util.HashMap\" rel=\"Ext.util.HashMap\" class=\"docClass\">Ext.util.HashMap</a></div><div class='description'><div class='short'>Creates new HashMap. ...</div><div class='long'><p>Creates new HashMap.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>The configuration options</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.HashMap\" rel=\"Ext.util.HashMap\" class=\"docClass\">Ext.util.HashMap</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-add' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-method-add' class='name expandable'>add</a>( <span class='pre'>key, value</span> ) : Object</div><div class='description'><div class='short'>Add a new item to the hash. ...</div><div class='long'><p>Add a new item to the hash. An exception will be thrown if the key already exists.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The key of the new item.</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The value of the new item.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The value of the new item added.</p>\n</div></li></ul></div></div></div><div id='method-clear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-method-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-method-clear' class='name expandable'>clear</a>( <span class='pre'>initial</span> ) : <a href=\"#!/api/Ext.util.HashMap\" rel=\"Ext.util.HashMap\" class=\"docClass\">Ext.util.HashMap</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Removes all items from the hash. ...</div><div class='long'><p>Removes all items from the hash.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>initial</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.HashMap\" rel=\"Ext.util.HashMap\" class=\"docClass\">Ext.util.HashMap</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-clone' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-method-clone' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-method-clone' class='name expandable'>clone</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.util.HashMap\" rel=\"Ext.util.HashMap\" class=\"docClass\">Ext.util.HashMap</a></div><div class='description'><div class='short'>Performs a shallow copy on this hash. ...</div><div class='long'><p>Performs a shallow copy on this hash.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.HashMap\" rel=\"Ext.util.HashMap\" class=\"docClass\">Ext.util.HashMap</a></span><div class='sub-desc'><p>The new hash object.</p>\n</div></li></ul></div></div></div><div id='method-contains' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-method-contains' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-method-contains' class='name expandable'>contains</a>( <span class='pre'>value</span> ) : Boolean</div><div class='description'><div class='short'>Checks whether a value exists in the hash. ...</div><div class='long'><p>Checks whether a value exists in the hash.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The value to check for.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if the value exists in the dictionary.</p>\n</div></li></ul></div></div></div><div id='method-containsKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-method-containsKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-method-containsKey' class='name expandable'>containsKey</a>( <span class='pre'>key</span> ) : Boolean</div><div class='description'><div class='short'>Checks whether a key exists in the hash. ...</div><div class='long'><p>Checks whether a key exists in the hash.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The key to check for.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if they key exists in the hash.</p>\n</div></li></ul></div></div></div><div id='method-each' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-method-each' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-method-each' class='name expandable'>each</a>( <span class='pre'>fn, [scope]</span> ) : <a href=\"#!/api/Ext.util.HashMap\" rel=\"Ext.util.HashMap\" class=\"docClass\">Ext.util.HashMap</a><strong class='chainable signature' >chainable</strong></div><div class='description'><div class='short'>Executes the specified function once for each item in the hash. ...</div><div class='long'><p>Executes the specified function once for each item in the hash.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fn</span> : Function<div class='sub-desc'><p>The function to execute.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The key of the item.</p>\n</div></li><li><span class='pre'>value</span> : Number<div class='sub-desc'><p>The value of the item.</p>\n</div></li><li><span class='pre'>length</span> : Number<div class='sub-desc'><p>The total number of items in the hash.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p>Returning <code>false</code> from the function will cease the iteration.</p>\n</div></li></ul></div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope to execute in.</p>\n<p>Defaults to: <code>this</code></p></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.util.HashMap\" rel=\"Ext.util.HashMap\" class=\"docClass\">Ext.util.HashMap</a></span><div class='sub-desc'><p>this</p>\n</div></li></ul></div></div></div><div id='method-findKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-method-findKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-method-findKey' class='name expandable'>findKey</a>( <span class='pre'>value</span> ) : Object<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Find the key for a value. ...</div><div class='long'><p>Find the key for a value.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The value to find.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The value of the item. Returns <code>undefined</code> if not found.</p>\n</div></li></ul></div></div></div><div id='method-get' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-method-get' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-method-get' class='name expandable'>get</a>( <span class='pre'>key</span> ) : Object</div><div class='description'><div class='short'>Retrieves an item with a particular key. ...</div><div class='long'><p>Retrieves an item with a particular key.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The key to lookup.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The value at that key. If it doesn't exist, <code>undefined</code> is returned.</p>\n</div></li></ul></div></div></div><div id='method-getArray' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-method-getArray' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-method-getArray' class='name expandable'>getArray</a>( <span class='pre'>isKey</span> ) : Array<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Gets either the keys/values in an array from the hash. ...</div><div class='long'><p>Gets either the keys/values in an array from the hash.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>isKey</span> : Boolean<div class='sub-desc'><p><code>true</code> to extract the keys, otherwise, the value.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>An array of either keys/values from the hash.</p>\n</div></li></ul></div></div></div><div id='method-getCount' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-method-getCount' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-method-getCount' class='name expandable'>getCount</a>( <span class='pre'></span> ) : Number</div><div class='description'><div class='short'>Gets the number of items in the hash. ...</div><div class='long'><p>Gets the number of items in the hash.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'><p>The number of items in the hash.</p>\n</div></li></ul></div></div></div><div id='method-getData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-method-getData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-method-getData' class='name expandable'>getData</a>( <span class='pre'>key, value</span> ) : Array<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Implementation for being able to extract the key from an object if only\na single argument is passed. ...</div><div class='long'><p>Implementation for being able to extract the key from an object if only\na single argument is passed.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The key</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The value</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>[key, value]</p>\n</div></li></ul></div></div></div><div id='method-getKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-method-getKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-method-getKey' class='name expandable'>getKey</a>( <span class='pre'>o</span> ) : String<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Extracts the key from an object. ...</div><div class='long'><p>Extracts the key from an object. This is a default implementation, it may be overridden.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>The object to get the key from.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'><p>The key to use.</p>\n</div></li></ul></div></div></div><div id='method-getKeys' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-method-getKeys' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-method-getKeys' class='name expandable'>getKeys</a>( <span class='pre'></span> ) : Array</div><div class='description'><div class='short'>Return all of the keys in the hash. ...</div><div class='long'><p>Return all of the keys in the hash.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>An array of keys.</p>\n</div></li></ul></div></div></div><div id='method-getValues' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-method-getValues' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-method-getValues' class='name expandable'>getValues</a>( <span class='pre'></span> ) : Array</div><div class='description'><div class='short'>Return all of the values in the hash. ...</div><div class='long'><p>Return all of the values in the hash.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>An array of values.</p>\n</div></li></ul></div></div></div><div id='method-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-method-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-method-remove' class='name expandable'>remove</a>( <span class='pre'>o</span> ) : Boolean</div><div class='description'><div class='short'>Remove an item from the hash. ...</div><div class='long'><p>Remove an item from the hash.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>The value of the item to remove.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if the item was successfully removed.</p>\n</div></li></ul></div></div></div><div id='method-removeByKey' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-method-removeByKey' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-method-removeByKey' class='name expandable'>removeByKey</a>( <span class='pre'>key</span> ) : Boolean</div><div class='description'><div class='short'>Remove an item from the hash. ...</div><div class='long'><p>Remove an item from the hash.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The key to remove.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'><p><code>true</code> if the item was successfully removed.</p>\n</div></li></ul></div></div></div><div id='method-replace' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-method-replace' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-method-replace' class='name expandable'>replace</a>( <span class='pre'>key, value</span> ) : Object</div><div class='description'><div class='short'>Replaces an item in the hash. ...</div><div class='long'><p>Replaces an item in the hash. If the key doesn't exist, the\n<code><a href=\"#!/api/Ext.util.HashMap-method-add\" rel=\"Ext.util.HashMap-method-add\" class=\"docClass\">add</a></code> method will be used.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The key of the item.</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The new value for the item.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>The new value of the item.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-add' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-event-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-event-add' class='name expandable'>add</a>( <span class='pre'>this, key, value, eOpts</span> )</div><div class='description'><div class='short'>Fires when a new item is added to the hash. ...</div><div class='long'><p>Fires when a new item is added to the hash.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.util.HashMap\" rel=\"Ext.util.HashMap\" class=\"docClass\">Ext.util.HashMap</a><div class='sub-desc'>\n</div></li><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The key of the added item.</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The value of the added item.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-clear' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-event-clear' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-event-clear' class='name expandable'>clear</a>( <span class='pre'>this, eOpts</span> )</div><div class='description'><div class='short'>Fires when the hash is cleared. ...</div><div class='long'><p>Fires when the hash is cleared.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.util.HashMap\" rel=\"Ext.util.HashMap\" class=\"docClass\">Ext.util.HashMap</a><div class='sub-desc'>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-remove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-event-remove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-event-remove' class='name expandable'>remove</a>( <span class='pre'>this, key, value, eOpts</span> )</div><div class='description'><div class='short'>Fires when an item is removed from the hash. ...</div><div class='long'><p>Fires when an item is removed from the hash.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.util.HashMap\" rel=\"Ext.util.HashMap\" class=\"docClass\">Ext.util.HashMap</a><div class='sub-desc'>\n</div></li><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The key of the removed item.</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The value of the removed item.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div><div id='event-replace' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.util.HashMap'>Ext.util.HashMap</span><br/><a href='source/HashMap.html#Ext-util-HashMap-event-replace' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.HashMap-event-replace' class='name expandable'>replace</a>( <span class='pre'>this, key, value, old, eOpts</span> )</div><div class='description'><div class='short'>Fires when an item is replaced in the hash. ...</div><div class='long'><p>Fires when an item is replaced in the hash.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>this</span> : <a href=\"#!/api/Ext.util.HashMap\" rel=\"Ext.util.HashMap\" class=\"docClass\">Ext.util.HashMap</a><div class='sub-desc'>\n</div></li><li><span class='pre'>key</span> : String<div class='sub-desc'><p>The key of the replaced item.</p>\n</div></li><li><span class='pre'>value</span> : Object<div class='sub-desc'><p>The new value for the item.</p>\n</div></li><li><span class='pre'>old</span> : Object<div class='sub-desc'><p>The old value for the item.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>"});