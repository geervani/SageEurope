Ext.data.JsonP.Ext_data_NodeStore({"tagname":"class","name":"Ext.data.NodeStore","extends":"Ext.data.Store","mixins":[],"alternateClassNames":[],"aliases":{"store":["node"]},"singleton":false,"requires":["Ext.data.NodeInterface"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"private":true},"private":true,"id":"class-Ext.data.NodeStore","code_type":"ext_define","members":{"cfg":[{"name":"filters","tagname":"cfg","owner":"Ext.data.NodeStore","meta":{"private":true},"id":"cfg-filters"},{"name":"folderSort","tagname":"cfg","owner":"Ext.data.NodeStore","meta":{},"id":"cfg-folderSort"},{"name":"node","tagname":"cfg","owner":"Ext.data.NodeStore","meta":{},"id":"cfg-node"},{"name":"recursive","tagname":"cfg","owner":"Ext.data.NodeStore","meta":{},"id":"cfg-recursive"},{"name":"rootVisible","tagname":"cfg","owner":"Ext.data.NodeStore","meta":{},"id":"cfg-rootVisible"},{"name":"sorters","tagname":"cfg","owner":"Ext.data.NodeStore","meta":{"private":true},"id":"cfg-sorters"}],"property":[],"method":[{"name":"afterEdit","tagname":"method","owner":"Ext.data.NodeStore","meta":{"private":true},"id":"method-afterEdit"},{"name":"applyFilters","tagname":"method","owner":"Ext.data.NodeStore","meta":{"private":true},"id":"method-applyFilters"},{"name":"applyNode","tagname":"method","owner":"Ext.data.NodeStore","meta":{"private":true},"id":"method-applyNode"},{"name":"applyProxy","tagname":"method","owner":"Ext.data.NodeStore","meta":{"private":true},"id":"method-applyProxy"},{"name":"createDataCollection","tagname":"method","owner":"Ext.data.NodeStore","meta":{"private":true},"id":"method-createDataCollection"},{"name":"getFilters","tagname":"method","owner":"Ext.data.NodeStore","meta":{},"id":"method-getFilters"},{"name":"getFolderSort","tagname":"method","owner":"Ext.data.NodeStore","meta":{},"id":"method-getFolderSort"},{"name":"getNode","tagname":"method","owner":"Ext.data.NodeStore","meta":{},"id":"method-getNode"},{"name":"getRecursive","tagname":"method","owner":"Ext.data.NodeStore","meta":{},"id":"method-getRecursive"},{"name":"getRootVisible","tagname":"method","owner":"Ext.data.NodeStore","meta":{},"id":"method-getRootVisible"},{"name":"getSorters","tagname":"method","owner":"Ext.data.NodeStore","meta":{},"id":"method-getSorters"},{"name":"handleTreeInsertionIndex","tagname":"method","owner":"Ext.data.NodeStore","meta":{"private":true},"id":"method-handleTreeInsertionIndex"},{"name":"handleTreeSort","tagname":"method","owner":"Ext.data.NodeStore","meta":{"private":true},"id":"method-handleTreeSort"},{"name":"isVisible","tagname":"method","owner":"Ext.data.NodeStore","meta":{},"id":"method-isVisible"},{"name":"onNodeAppend","tagname":"method","owner":"Ext.data.NodeStore","meta":{"private":true},"id":"method-onNodeAppend"},{"name":"onNodeInsert","tagname":"method","owner":"Ext.data.NodeStore","meta":{"private":true},"id":"method-onNodeInsert"},{"name":"onNodeRemove","tagname":"method","owner":"Ext.data.NodeStore","meta":{"private":true},"id":"method-onNodeRemove"},{"name":"onNodeSort","tagname":"method","owner":"Ext.data.NodeStore","meta":{"private":true},"id":"method-onNodeSort"},{"name":"retrieveChildNodes","tagname":"method","owner":"Ext.data.NodeStore","meta":{"private":true},"id":"method-retrieveChildNodes"},{"name":"setFilters","tagname":"method","owner":"Ext.data.NodeStore","meta":{},"id":"method-setFilters"},{"name":"setFolderSort","tagname":"method","owner":"Ext.data.NodeStore","meta":{},"id":"method-setFolderSort"},{"name":"setNode","tagname":"method","owner":"Ext.data.NodeStore","meta":{},"id":"method-setNode"},{"name":"setRecursive","tagname":"method","owner":"Ext.data.NodeStore","meta":{},"id":"method-setRecursive"},{"name":"setRootVisible","tagname":"method","owner":"Ext.data.NodeStore","meta":{},"id":"method-setRootVisible"},{"name":"setSorters","tagname":"method","owner":"Ext.data.NodeStore","meta":{},"id":"method-setSorters"},{"name":"treeSortFn","tagname":"method","owner":"Ext.data.NodeStore","meta":{"private":true},"id":"method-treeSortFn"},{"name":"updateFolderSort","tagname":"method","owner":"Ext.data.NodeStore","meta":{"private":true},"id":"method-updateFolderSort"},{"name":"updateNode","tagname":"method","owner":"Ext.data.NodeStore","meta":{"private":true},"id":"method-updateNode"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"NodeStore.js","href":"NodeStore.html#Ext-data-NodeStore"}],"html_meta":{"private":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.data.Store"],"subclasses":["Ext.data.TreeStore"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.Store<div class='subclass '><strong>Ext.data.NodeStore</strong></div></div><h4>Requires</h4><div class='dependency'><a href='#!/api/Ext.data.NodeInterface' rel='Ext.data.NodeInterface' class='docClass'>Ext.data.NodeInterface</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.data.TreeStore' rel='Ext.data.TreeStore' class='docClass'>Ext.data.TreeStore</a></div><h4>Files</h4><div class='dependency'><a href='source/NodeStore.html#Ext-data-NodeStore' target='_blank'>NodeStore.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-filters' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-cfg-filters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-cfg-filters' class='name not-expandable'>filters</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div><div id='cfg-folderSort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-cfg-folderSort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-cfg-folderSort' class='name expandable'>folderSort</a><span> : Boolean</span></div><div class='description'><div class='short'>Set to true to automatically prepend a leaf sorter. ...</div><div class='long'><p>Set to <code>true</code> to automatically prepend a leaf sorter.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-node' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-cfg-node' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-cfg-node' class='name expandable'>node</a><span> : <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a></span></div><div class='description'><div class='short'>The Record you want to bind this Store to. ...</div><div class='long'><p>The Record you want to bind this Store to. Note that\nthis record will be decorated with the <a href=\"#!/api/Ext.data.NodeInterface\" rel=\"Ext.data.NodeInterface\" class=\"docClass\">Ext.data.NodeInterface</a> if this is not the\ncase yet.</p>\n</div></div></div><div id='cfg-recursive' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-cfg-recursive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-cfg-recursive' class='name expandable'>recursive</a><span> : Boolean</span></div><div class='description'><div class='short'>Set this to true if you want this NodeStore to represent\nall the descendants of the node in its flat data collection. ...</div><div class='long'><p>Set this to <code>true</code> if you want this NodeStore to represent\nall the descendants of the node in its flat data collection. This is useful for\nrendering a tree structure to a DataView and is being used internally by\nthe TreeView. Any records that are moved, removed, inserted or appended to the\nnode at any depth below the node this store is bound to will be automatically\nupdated in this Store's internal flat data structure.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-rootVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-cfg-rootVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-cfg-rootVisible' class='name expandable'>rootVisible</a><span> : Boolean</span></div><div class='description'><div class='short'>false to not include the root node in this Stores collection. ...</div><div class='long'><p><code>false</code> to not include the root node in this Stores collection.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-sorters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-cfg-sorters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-cfg-sorters' class='name not-expandable'>sorters</a><span> : Object</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-afterEdit' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-method-afterEdit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-afterEdit' class='name expandable'>afterEdit</a>( <span class='pre'>record, modifiedFields</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>modifiedFields</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyFilters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-method-applyFilters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-applyFilters' class='name expandable'>applyFilters</a>( <span class='pre'>filters</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filters</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-method-applyNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-applyNode' class='name expandable'>applyNode</a>( <span class='pre'>node</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyProxy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-method-applyProxy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-applyProxy' class='name expandable'>applyProxy</a>( <span class='pre'>proxy</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>proxy</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-createDataCollection' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-method-createDataCollection' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-createDataCollection' class='name expandable'>createDataCollection</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getFilters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-cfg-filters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-getFilters' class='name expandable'>getFilters</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of filters. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.NodeStore-cfg-filters\" rel=\"Ext.data.NodeStore-cfg-filters\" class=\"docClass\">filters</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getFolderSort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-cfg-folderSort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-getFolderSort' class='name expandable'>getFolderSort</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of folderSort. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.NodeStore-cfg-folderSort\" rel=\"Ext.data.NodeStore-cfg-folderSort\" class=\"docClass\">folderSort</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-cfg-node' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-getNode' class='name expandable'>getNode</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a></div><div class='description'><div class='short'>Returns the value of node. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.NodeStore-cfg-node\" rel=\"Ext.data.NodeStore-cfg-node\" class=\"docClass\">node</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRecursive' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-cfg-recursive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-getRecursive' class='name expandable'>getRecursive</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of recursive. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.NodeStore-cfg-recursive\" rel=\"Ext.data.NodeStore-cfg-recursive\" class=\"docClass\">recursive</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRootVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-cfg-rootVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-getRootVisible' class='name expandable'>getRootVisible</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of rootVisible. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.NodeStore-cfg-rootVisible\" rel=\"Ext.data.NodeStore-cfg-rootVisible\" class=\"docClass\">rootVisible</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSorters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-cfg-sorters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-getSorters' class='name expandable'>getSorters</a>( <span class='pre'></span> ) : Object</div><div class='description'><div class='short'>Returns the value of sorters. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.NodeStore-cfg-sorters\" rel=\"Ext.data.NodeStore-cfg-sorters\" class=\"docClass\">sorters</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-handleTreeInsertionIndex' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-method-handleTreeInsertionIndex' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-handleTreeInsertionIndex' class='name expandable'>handleTreeInsertionIndex</a>( <span class='pre'>items, item, collection, originalFn</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>items</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>item</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>collection</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>originalFn</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-handleTreeSort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-method-handleTreeSort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-handleTreeSort' class='name expandable'>handleTreeSort</a>( <span class='pre'>data</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-isVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-method-isVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-isVisible' class='name expandable'>isVisible</a>( <span class='pre'>node</span> ) : Boolean</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onNodeAppend' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-method-onNodeAppend' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-onNodeAppend' class='name expandable'>onNodeAppend</a>( <span class='pre'>parent, node</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parent</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onNodeInsert' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-method-onNodeInsert' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-onNodeInsert' class='name expandable'>onNodeInsert</a>( <span class='pre'>parent, node</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parent</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onNodeRemove' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-method-onNodeRemove' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-onNodeRemove' class='name expandable'>onNodeRemove</a>( <span class='pre'>parent, node</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>parent</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onNodeSort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-method-onNodeSort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-onNodeSort' class='name expandable'>onNodeSort</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-retrieveChildNodes' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-method-retrieveChildNodes' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-retrieveChildNodes' class='name expandable'>retrieveChildNodes</a>( <span class='pre'>root</span> ) : Array<strong class='private signature' >private</strong></div><div class='description'><div class='short'>Private method used to deeply retrieve the children of a record without recursion. ...</div><div class='long'><p>Private method used to deeply retrieve the children of a record without recursion.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>root</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setFilters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-cfg-filters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-setFilters' class='name expandable'>setFilters</a>( <span class='pre'>filters</span> )</div><div class='description'><div class='short'>Sets the value of filters. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.NodeStore-cfg-filters\" rel=\"Ext.data.NodeStore-cfg-filters\" class=\"docClass\">filters</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>filters</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setFolderSort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-cfg-folderSort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-setFolderSort' class='name expandable'>setFolderSort</a>( <span class='pre'>folderSort</span> )</div><div class='description'><div class='short'>Sets the value of folderSort. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.NodeStore-cfg-folderSort\" rel=\"Ext.data.NodeStore-cfg-folderSort\" class=\"docClass\">folderSort</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>folderSort</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-cfg-node' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-setNode' class='name expandable'>setNode</a>( <span class='pre'>node</span> )</div><div class='description'><div class='short'>Sets the value of node. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.NodeStore-cfg-node\" rel=\"Ext.data.NodeStore-cfg-node\" class=\"docClass\">node</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setRecursive' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-cfg-recursive' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-setRecursive' class='name expandable'>setRecursive</a>( <span class='pre'>recursive</span> )</div><div class='description'><div class='short'>Sets the value of recursive. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.NodeStore-cfg-recursive\" rel=\"Ext.data.NodeStore-cfg-recursive\" class=\"docClass\">recursive</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>recursive</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setRootVisible' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-cfg-rootVisible' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-setRootVisible' class='name expandable'>setRootVisible</a>( <span class='pre'>rootVisible</span> )</div><div class='description'><div class='short'>Sets the value of rootVisible. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.NodeStore-cfg-rootVisible\" rel=\"Ext.data.NodeStore-cfg-rootVisible\" class=\"docClass\">rootVisible</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>rootVisible</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setSorters' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-cfg-sorters' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-setSorters' class='name expandable'>setSorters</a>( <span class='pre'>sorters</span> )</div><div class='description'><div class='short'>Sets the value of sorters. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.NodeStore-cfg-sorters\" rel=\"Ext.data.NodeStore-cfg-sorters\" class=\"docClass\">sorters</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sorters</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-treeSortFn' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-method-treeSortFn' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-treeSortFn' class='name expandable'>treeSortFn</a>( <span class='pre'>node1, node2</span> ) : Number<strong class='private signature' >private</strong></div><div class='description'><div class='short'>This is a custom tree sorting algorithm. ...</div><div class='long'><p>This is a custom tree sorting algorithm. It uses the index property on each node to determine\nhow to sort siblings. It uses the depth property plus the index to create a weight for each node.\nThis weight algorithm has the limitation of not being able to go more then 80 levels in depth, or\nmore then 10k nodes per parent. The end result is a flat collection being correctly sorted based\non this one single sort function.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node1</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>node2</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Number</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateFolderSort' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-method-updateFolderSort' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-updateFolderSort' class='name expandable'>updateFolderSort</a>( <span class='pre'>folderSort</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>folderSort</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateNode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.NodeStore'>Ext.data.NodeStore</span><br/><a href='source/NodeStore.html#Ext-data-NodeStore-method-updateNode' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.NodeStore-method-updateNode' class='name expandable'>updateNode</a>( <span class='pre'>node, oldNode</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>node</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>oldNode</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});