Ext.data.JsonP.Ext_data_reader_Json({"tagname":"class","name":"Ext.data.reader.Json","extends":"Ext.data.reader.Reader","mixins":[],"alternateClassNames":["Ext.data.JsonReader"],"aliases":{"reader":["json"]},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ext.data.reader.Json","code_type":"ext_define","members":{"cfg":[{"name":"record","tagname":"cfg","owner":"Ext.data.reader.Json","meta":{},"id":"cfg-record"},{"name":"useSimpleAccessors","tagname":"cfg","owner":"Ext.data.reader.Json","meta":{},"id":"cfg-useSimpleAccessors"}],"property":[{"name":"createAccessor","tagname":"property","owner":"Ext.data.reader.Json","meta":{"private":true},"id":"property-createAccessor"},{"name":"objectRe","tagname":"property","owner":"Ext.data.reader.Json","meta":{"private":true},"id":"property-objectRe"}],"method":[{"name":"buildExtractors","tagname":"method","owner":"Ext.data.reader.Json","meta":{"private":true},"id":"method-buildExtractors"},{"name":"createFieldAccessExpression","tagname":"method","owner":"Ext.data.reader.Json","meta":{"private":true},"id":"method-createFieldAccessExpression"},{"name":"extractData","tagname":"method","owner":"Ext.data.reader.Json","meta":{"private":true},"id":"method-extractData"},{"name":"getRecord","tagname":"method","owner":"Ext.data.reader.Json","meta":{},"id":"method-getRecord"},{"name":"getResponseData","tagname":"method","owner":"Ext.data.reader.Json","meta":{"private":true},"id":"method-getResponseData"},{"name":"getRoot","tagname":"method","owner":"Ext.data.reader.Json","meta":{"private":true},"id":"method-getRoot"},{"name":"getUseSimpleAccessors","tagname":"method","owner":"Ext.data.reader.Json","meta":{},"id":"method-getUseSimpleAccessors"},{"name":"setRecord","tagname":"method","owner":"Ext.data.reader.Json","meta":{},"id":"method-setRecord"},{"name":"setUseSimpleAccessors","tagname":"method","owner":"Ext.data.reader.Json","meta":{},"id":"method-setUseSimpleAccessors"}],"event":[{"name":"exception","tagname":"event","owner":"Ext.data.reader.Json","meta":{},"id":"event-exception"}],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Json.js","href":"Json2.html#Ext-data-reader-Json"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.data.reader.Reader"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.data.JsonReader</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.reader.Reader<div class='subclass '><strong>Ext.data.reader.Json</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Json2.html#Ext-data-reader-Json' target='_blank'>Json.js</a></div></pre><div class='doc-contents'><p>The JSON Reader is used by a Proxy to read a server response that is sent back in JSON format. This usually happens\nas a result of loading a Store - for example we might create something like this:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-define\" rel=\"Ext-method-define\" class=\"docClass\">Ext.define</a>('User', {\n    extend: '<a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>',\n    config: {\n        fields: ['id', 'name', 'email']\n    }\n});\n\nvar store = <a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('Ext.data.Store', {\n    model: 'User',\n    proxy: {\n        type: 'ajax',\n        url : 'users.json',\n        reader: {\n            type: 'json'\n        }\n    }\n});\n</code></pre>\n\n<p>The example above creates a 'User' model. Models are explained in the <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Model</a> docs if you're not\nalready familiar with them.</p>\n\n<p>We created the simplest type of JSON Reader possible by simply telling our Store's Proxy that we want a JSON Reader. The Store automatically passes the configured model to the\nStore, so it is as if we passed this instead:</p>\n\n<pre><code>reader: {\n    type : 'json',\n    model: 'User'\n}\n</code></pre>\n\n<p>The reader we set up is ready to read data from our server - at the moment it will accept a response like this:</p>\n\n<pre><code>[\n    {\n        \"id\": 1,\n        \"name\": \"Ed Spencer\",\n        \"email\": \"ed@sencha.com\"\n    },\n    {\n        \"id\": 2,\n        \"name\": \"Abe Elias\",\n        \"email\": \"abe@sencha.com\"\n    }\n]\n</code></pre>\n\n<h2>Reading other JSON formats</h2>\n\n<p>If you already have your JSON format defined and it doesn't look quite like what we have above, you can usually pass\nJsonReader a couple of configuration options to make it parse your format. For example, we can use the\nrootProperty configuration to parse data that comes back like this:</p>\n\n<pre><code>{\n    \"users\": [\n       {\n           \"id\": 1,\n           \"name\": \"Ed Spencer\",\n           \"email\": \"ed@sencha.com\"\n       },\n       {\n           \"id\": 2,\n           \"name\": \"Abe Elias\",\n           \"email\": \"abe@sencha.com\"\n       }\n    ]\n}\n</code></pre>\n\n<p>To parse this we just pass in a rootProperty configuration that matches the 'users' above:</p>\n\n<pre><code>reader: {\n    type: 'json',\n    rootProperty: 'users'\n}\n</code></pre>\n\n<p>Sometimes the JSON structure is even more complicated. Document databases like CouchDB often provide metadata around\neach record inside a nested structure like this:</p>\n\n<pre><code>{\n    \"total\": 122,\n    \"offset\": 0,\n    \"users\": [\n        {\n            \"id\": \"ed-spencer-1\",\n            \"value\": 1,\n            \"user\": {\n                \"id\": 1,\n                \"name\": \"Ed Spencer\",\n                \"email\": \"ed@sencha.com\"\n            }\n        }\n    ]\n}\n</code></pre>\n\n<p>In the case above the record data is nested an additional level inside the \"users\" array as each \"user\" item has\nadditional metadata surrounding it ('id' and 'value' in this case). To parse data out of each \"user\" item in the JSON\nabove we need to specify the <a href=\"#!/api/Ext.data.reader.Json-cfg-record\" rel=\"Ext.data.reader.Json-cfg-record\" class=\"docClass\">record</a> configuration like this:</p>\n\n<pre><code>reader: {\n    type: 'json',\n    record: 'user',\n    rootProperty: 'users'\n}\n</code></pre>\n\n<h2>Response MetaData</h2>\n\n<p>The server can return metadata in its response, in addition to the record data, that describe attributes\nof the data set itself or are used to reconfigure the Reader. To pass metadata in the response you simply\nadd a <code>metaData</code> attribute to the root of the response data. The metaData attribute can contain anything,\nbut supports a specific set of properties that are handled by the Reader if they are present:</p>\n\n<ul>\n<li>idProperty: property name for the primary key field of the data</li>\n<li>rootProperty: the property name of the root response node containing the record data</li>\n<li>totalProperty: property name for the total number of records in the data</li>\n<li>successProperty: property name for the success status of the response</li>\n<li>messageProperty: property name for an optional response message</li>\n<li><a href=\"#!/api/Ext.data.Model-cfg-fields\" rel=\"Ext.data.Model-cfg-fields\" class=\"docClass\">fields</a>: Config used to reconfigure the Model's fields before converting the\nresponse data into records</li>\n</ul>\n\n\n<p>An initial Reader configuration containing all of these properties might look like this (\"fields\" would be\nincluded in the Model definition, not shown):</p>\n\n<pre><code>reader: {\n    type: 'json',\n    idProperty: 'id',\n    rootProperty: 'root',\n    totalProperty: 'total',\n    successProperty: 'success',\n    messageProperty: 'message'\n}\n</code></pre>\n\n<p>If you were to pass a response object containing attributes different from those initially defined above, you could\nuse the <code>metaData</code> attribute to reconfigure the Reader on the fly. For example:</p>\n\n<pre><code>{\n    \"count\": 1,\n    \"ok\": true,\n    \"msg\": \"Users found\",\n    \"users\": [{\n        \"userId\": 123,\n        \"name\": \"Ed Spencer\",\n        \"email\": \"ed@sencha.com\"\n    }],\n    \"metaData\": {\n        \"idProperty\": 'userId',\n        \"rootProperty\": \"users\",\n        \"totalProperty\": 'count',\n        \"successProperty\": 'ok',\n        \"messageProperty\": 'msg'\n    }\n}\n</code></pre>\n\n<p>You can also place any other arbitrary data you need into the <code>metaData</code> attribute which will be ignored by the Reader,\nbut will be accessible via the Reader's metaData property. Application code can then process the passed\nmetadata in any way it chooses.</p>\n\n<p>A simple example for how this can be used would be customizing the fields for a Model that is bound to a grid. By passing\nthe <code>fields</code> property the Model will be automatically updated by the Reader internally, but that change will not be\nreflected automatically in the grid unless you also update the column configuration. You could do this manually, or you\ncould simply pass a standard grid column config object as part of the <code>metaData</code> attribute\nand then pass that along to the grid. Here's a very simple example for how that could be accomplished:</p>\n\n<pre><code>// response format:\n{\n    ...\n    \"metaData\": {\n        \"fields\": [\n            { \"name\": \"userId\", \"type\": \"int\" },\n            { \"name\": \"name\", \"type\": \"string\" },\n            { \"name\": \"birthday\", \"type\": \"date\", \"dateFormat\": \"Y-j-m\" },\n        ],\n        \"columns\": [\n            { \"text\": \"User ID\", \"dataIndex\": \"userId\", \"width\": 40 },\n            { \"text\": \"User Name\", \"dataIndex\": \"name\", \"flex\": 1 },\n            { \"text\": \"Birthday\", \"dataIndex\": \"birthday\", \"flex\": 1, \"format\": 'Y-j-m', \"xtype\": \"datecolumn\" }\n        ]\n    }\n}\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-record' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.reader.Json'>Ext.data.reader.Json</span><br/><a href='source/Json2.html#Ext-data-reader-Json-cfg-record' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.reader.Json-cfg-record' class='name expandable'>record</a><span> : String</span></div><div class='description'><div class='short'>The optional location within the JSON response that the record data itself can be found at. ...</div><div class='long'><p>The optional location within the JSON response that the record data itself can be found at. See the\nJsonReader intro docs for more details. This is not often needed.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-useSimpleAccessors' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.reader.Json'>Ext.data.reader.Json</span><br/><a href='source/Json2.html#Ext-data-reader-Json-cfg-useSimpleAccessors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.reader.Json-cfg-useSimpleAccessors' class='name expandable'>useSimpleAccessors</a><span> : Boolean</span></div><div class='description'><div class='short'>true to ensure that field names/mappings are treated as literals when reading values. ...</div><div class='long'><p><code>true</code> to ensure that field names/mappings are treated as literals when reading values. For\nexample, by default, using the mapping \"foo.bar.baz\" will try and read a property foo from the root, then a\nproperty bar from foo, then a property baz from bar. Setting the simple accessors to <code>true</code> will read the\nproperty with the name \"foo.bar.baz\" direct from the root object.</p>\n<p>Defaults to: <code>false</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-createAccessor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.reader.Json'>Ext.data.reader.Json</span><br/><a href='source/Json2.html#Ext-data-reader-Json-property-createAccessor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.reader.Json-property-createAccessor' class='name expandable'>createAccessor</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>Returns an accessor function for the given property string. ...</div><div class='long'><p>Returns an accessor function for the given property string. Gives support for properties such as the following:\n'someProperty'\n'some.property'\n'some[\"property\"]'\nThis is used by buildExtractors to create optimized extractor functions when casting raw data into model instances.</p>\n</div></div></div><div id='property-objectRe' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.reader.Json'>Ext.data.reader.Json</span><br/><a href='source/Json2.html#Ext-data-reader-Json-property-objectRe' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.reader.Json-property-objectRe' class='name expandable'>objectRe</a><span> : RegExp</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>/[\\[\\.]/</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-buildExtractors' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.reader.Json'>Ext.data.reader.Json</span><br/><a href='source/Json2.html#Ext-data-reader-Json-method-buildExtractors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.reader.Json-method-buildExtractors' class='name expandable'>buildExtractors</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-createFieldAccessExpression' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.reader.Json'>Ext.data.reader.Json</span><br/><a href='source/Json2.html#Ext-data-reader-Json-method-createFieldAccessExpression' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.reader.Json-method-createFieldAccessExpression' class='name expandable'>createFieldAccessExpression</a>( <span class='pre'>field, fieldVarName, dataName</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Returns an accessor expression for the passed Field. ...</div><div class='long'><p>Returns an accessor expression for the passed Field. Gives support for properties such as the following:\n'someProperty'\n'some.property'\n'some[\"property\"]'\nThis is used by buildExtractors to create optimized on extractor function which converts raw data into model instances.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>field</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>fieldVarName</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>dataName</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-extractData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.reader.Json'>Ext.data.reader.Json</span><br/><a href='source/Json2.html#Ext-data-reader-Json-method-extractData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.reader.Json-method-extractData' class='name expandable'>extractData</a>( <span class='pre'>root</span> ) : <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>[]<strong class='private signature' >private</strong></div><div class='description'><div class='short'>We're just preparing the data for the superclass by pulling out the record objects we want. ...</div><div class='long'><p>We're just preparing the data for the superclass by pulling out the record objects we want. If a <a href=\"#!/api/Ext.data.reader.Json-cfg-record\" rel=\"Ext.data.reader.Json-cfg-record\" class=\"docClass\">record</a>\nwas specified we have to pull those out of the larger JSON object, which is most of what this function is doing</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>root</span> : Object<div class='sub-desc'><p>The JSON root node</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a>[]</span><div class='sub-desc'><p>The records</p>\n</div></li></ul></div></div></div><div id='method-getRecord' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.reader.Json'>Ext.data.reader.Json</span><br/><a href='source/Json2.html#Ext-data-reader-Json-cfg-record' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.reader.Json-method-getRecord' class='name expandable'>getRecord</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of record. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.reader.Json-cfg-record\" rel=\"Ext.data.reader.Json-cfg-record\" class=\"docClass\">record</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getResponseData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.reader.Json'>Ext.data.reader.Json</span><br/><a href='source/Json2.html#Ext-data-reader-Json-method-getResponseData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.reader.Json-method-getResponseData' class='name expandable'>getResponseData</a>( <span class='pre'>response</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>response</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRoot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.reader.Json'>Ext.data.reader.Json</span><br/><a href='source/Json2.html#Ext-data-reader-Json-method-getRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.reader.Json-method-getRoot' class='name expandable'>getRoot</a>( <span class='pre'>[data]</span> ) : String/Object<strong class='private signature' >private</strong></div><div class='description'><div class='short'>We create this method because root is now a config so getRoot is already defined, but in the old\ndata package getRoot...</div><div class='long'><p>We create this method because <code>root</code> is now a config so <code>getRoot</code> is already defined, but in the old\ndata package <code>getRoot</code> was passed a data argument and it would return the data inside of the <code>root</code>\nproperty. This method handles both cases.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object (optional)<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>String/Object</span><div class='sub-desc'><p>Returns the config root value if this method was called without passing\ndata. Else it returns the object in the data bound to the root.</p>\n</div></li></ul></div></div></div><div id='method-getUseSimpleAccessors' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.reader.Json'>Ext.data.reader.Json</span><br/><a href='source/Json2.html#Ext-data-reader-Json-cfg-useSimpleAccessors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.reader.Json-method-getUseSimpleAccessors' class='name expandable'>getUseSimpleAccessors</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of useSimpleAccessors. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.reader.Json-cfg-useSimpleAccessors\" rel=\"Ext.data.reader.Json-cfg-useSimpleAccessors\" class=\"docClass\">useSimpleAccessors</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setRecord' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.reader.Json'>Ext.data.reader.Json</span><br/><a href='source/Json2.html#Ext-data-reader-Json-cfg-record' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.reader.Json-method-setRecord' class='name expandable'>setRecord</a>( <span class='pre'>record</span> )</div><div class='description'><div class='short'>Sets the value of record. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.reader.Json-cfg-record\" rel=\"Ext.data.reader.Json-cfg-record\" class=\"docClass\">record</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setUseSimpleAccessors' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.reader.Json'>Ext.data.reader.Json</span><br/><a href='source/Json2.html#Ext-data-reader-Json-cfg-useSimpleAccessors' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.reader.Json-method-setUseSimpleAccessors' class='name expandable'>setUseSimpleAccessors</a>( <span class='pre'>useSimpleAccessors</span> )</div><div class='description'><div class='short'>Sets the value of useSimpleAccessors. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.reader.Json-cfg-useSimpleAccessors\" rel=\"Ext.data.reader.Json-cfg-useSimpleAccessors\" class=\"docClass\">useSimpleAccessors</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>useSimpleAccessors</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-exception' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.reader.Json'>Ext.data.reader.Json</span><br/><a href='source/Json2.html#Ext-data-reader-Json-event-exception' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.reader.Json-event-exception' class='name expandable'>exception</a>( <span class='pre'>reader, response, error, eOpts</span> )</div><div class='description'><div class='short'>Fires whenever the reader is unable to parse a response. ...</div><div class='long'><p>Fires whenever the reader is unable to parse a response.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>reader</span> : <a href=\"#!/api/Ext.data.reader.Xml\" rel=\"Ext.data.reader.Xml\" class=\"docClass\">Ext.data.reader.Xml</a><div class='sub-desc'><p>A reference to this reader.</p>\n</div></li><li><span class='pre'>response</span> : XMLHttpRequest<div class='sub-desc'><p>The XMLHttpRequest response object.</p>\n</div></li><li><span class='pre'>error</span> : String<div class='sub-desc'><p>The error message.</p>\n</div></li><li><span class='pre'>eOpts</span> : Object<div class='sub-desc'><p>The options object passed to Ext.util.Observable.addListener.</p>\n\n\n\n</div></li></ul></div></div></div></div></div></div></div>"});