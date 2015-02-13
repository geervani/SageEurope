Ext.data.JsonP.Ext_data_writer_Xml({"tagname":"class","name":"Ext.data.writer.Xml","extends":"Ext.data.writer.Writer","mixins":[],"alternateClassNames":["Ext.data.XmlWriter"],"aliases":{"writer":["xml"]},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"author":["Ed Spencer"]},"private":null,"id":"class-Ext.data.writer.Xml","code_type":"ext_define","members":{"cfg":[{"name":"defaultDocumentRoot","tagname":"cfg","owner":"Ext.data.writer.Xml","meta":{},"id":"cfg-defaultDocumentRoot"},{"name":"documentRoot","tagname":"cfg","owner":"Ext.data.writer.Xml","meta":{},"id":"cfg-documentRoot"},{"name":"header","tagname":"cfg","owner":"Ext.data.writer.Xml","meta":{},"id":"cfg-header"},{"name":"record","tagname":"cfg","owner":"Ext.data.writer.Xml","meta":{},"id":"cfg-record"}],"property":[],"method":[{"name":"getDefaultDocumentRoot","tagname":"method","owner":"Ext.data.writer.Xml","meta":{},"id":"method-getDefaultDocumentRoot"},{"name":"getDocumentRoot","tagname":"method","owner":"Ext.data.writer.Xml","meta":{},"id":"method-getDocumentRoot"},{"name":"getHeader","tagname":"method","owner":"Ext.data.writer.Xml","meta":{},"id":"method-getHeader"},{"name":"getRecord","tagname":"method","owner":"Ext.data.writer.Xml","meta":{},"id":"method-getRecord"},{"name":"setDefaultDocumentRoot","tagname":"method","owner":"Ext.data.writer.Xml","meta":{},"id":"method-setDefaultDocumentRoot"},{"name":"setDocumentRoot","tagname":"method","owner":"Ext.data.writer.Xml","meta":{},"id":"method-setDocumentRoot"},{"name":"setHeader","tagname":"method","owner":"Ext.data.writer.Xml","meta":{},"id":"method-setHeader"},{"name":"setRecord","tagname":"method","owner":"Ext.data.writer.Xml","meta":{},"id":"method-setRecord"},{"name":"writeRecords","tagname":"method","owner":"Ext.data.writer.Xml","meta":{},"id":"method-writeRecords"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Xml.js","href":"Xml2.html#Ext-data-writer-Xml"}],"html_meta":{"author":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.data.writer.Writer"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Alternate names</h4><div class='alternate-class-name'>Ext.data.XmlWriter</div><h4>Hierarchy</h4><div class='subclass first-child'>Ext.data.writer.Writer<div class='subclass '><strong>Ext.data.writer.Xml</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/Xml2.html#Ext-data-writer-Xml' target='_blank'>Xml.js</a></div></pre><div class='doc-contents'><p>This class is used to write <a href=\"#!/api/Ext.data.Model\" rel=\"Ext.data.Model\" class=\"docClass\">Ext.data.Model</a> data to the server in an XML format.\nThe <a href=\"#!/api/Ext.data.writer.Xml-cfg-documentRoot\" rel=\"Ext.data.writer.Xml-cfg-documentRoot\" class=\"docClass\">documentRoot</a> property is used to specify the root element in the XML document.\nThe <a href=\"#!/api/Ext.data.writer.Xml-cfg-record\" rel=\"Ext.data.writer.Xml-cfg-record\" class=\"docClass\">record</a> option is used to specify the element name for each record that will make\nup the XML document.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-defaultDocumentRoot' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Xml'>Ext.data.writer.Xml</span><br/><a href='source/Xml2.html#Ext-data-writer-Xml-cfg-defaultDocumentRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Xml-cfg-defaultDocumentRoot' class='name expandable'>defaultDocumentRoot</a><span> : String</span></div><div class='description'><div class='short'>The root to be used if documentRoot is empty and a root is required\nto form a valid XML document. ...</div><div class='long'><p>The root to be used if <a href=\"#!/api/Ext.data.writer.Xml-cfg-documentRoot\" rel=\"Ext.data.writer.Xml-cfg-documentRoot\" class=\"docClass\">documentRoot</a> is empty and a root is required\nto form a valid XML document.</p>\n<p>Defaults to: <code>'xmlData'</code></p></div></div></div><div id='cfg-documentRoot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Xml'>Ext.data.writer.Xml</span><br/><a href='source/Xml2.html#Ext-data-writer-Xml-cfg-documentRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Xml-cfg-documentRoot' class='name expandable'>documentRoot</a><span> : String</span></div><div class='description'><div class='short'>The name of the root element of the document. ...</div><div class='long'><p>The name of the root element of the document.\nIf there is more than 1 record and the root is not specified, the default document root will still be used\nto ensure a valid XML document is created.</p>\n<p>Defaults to: <code>'xmlData'</code></p></div></div></div><div id='cfg-header' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Xml'>Ext.data.writer.Xml</span><br/><a href='source/Xml2.html#Ext-data-writer-Xml-cfg-header' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Xml-cfg-header' class='name expandable'>header</a><span> : String</span></div><div class='description'><div class='short'>A header to use in the XML document (such as setting the encoding or version). ...</div><div class='long'><p>A header to use in the XML document (such as setting the encoding or version).</p>\n<p>Defaults to: <code>''</code></p></div></div></div><div id='cfg-record' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Xml'>Ext.data.writer.Xml</span><br/><a href='source/Xml2.html#Ext-data-writer-Xml-cfg-record' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Xml-cfg-record' class='name expandable'>record</a><span> : String</span></div><div class='description'><div class='short'>The name of the node to use for each record. ...</div><div class='long'><p>The name of the node to use for each record.</p>\n<p>Defaults to: <code>'record'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-getDefaultDocumentRoot' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Xml'>Ext.data.writer.Xml</span><br/><a href='source/Xml2.html#Ext-data-writer-Xml-cfg-defaultDocumentRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Xml-method-getDefaultDocumentRoot' class='name expandable'>getDefaultDocumentRoot</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of defaultDocumentRoot. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.writer.Xml-cfg-defaultDocumentRoot\" rel=\"Ext.data.writer.Xml-cfg-defaultDocumentRoot\" class=\"docClass\">defaultDocumentRoot</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDocumentRoot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Xml'>Ext.data.writer.Xml</span><br/><a href='source/Xml2.html#Ext-data-writer-Xml-cfg-documentRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Xml-method-getDocumentRoot' class='name expandable'>getDocumentRoot</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of documentRoot. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.writer.Xml-cfg-documentRoot\" rel=\"Ext.data.writer.Xml-cfg-documentRoot\" class=\"docClass\">documentRoot</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHeader' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Xml'>Ext.data.writer.Xml</span><br/><a href='source/Xml2.html#Ext-data-writer-Xml-cfg-header' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Xml-method-getHeader' class='name expandable'>getHeader</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of header. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.writer.Xml-cfg-header\" rel=\"Ext.data.writer.Xml-cfg-header\" class=\"docClass\">header</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getRecord' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Xml'>Ext.data.writer.Xml</span><br/><a href='source/Xml2.html#Ext-data-writer-Xml-cfg-record' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Xml-method-getRecord' class='name expandable'>getRecord</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of record. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.data.writer.Xml-cfg-record\" rel=\"Ext.data.writer.Xml-cfg-record\" class=\"docClass\">record</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setDefaultDocumentRoot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Xml'>Ext.data.writer.Xml</span><br/><a href='source/Xml2.html#Ext-data-writer-Xml-cfg-defaultDocumentRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Xml-method-setDefaultDocumentRoot' class='name expandable'>setDefaultDocumentRoot</a>( <span class='pre'>defaultDocumentRoot</span> )</div><div class='description'><div class='short'>Sets the value of defaultDocumentRoot. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.writer.Xml-cfg-defaultDocumentRoot\" rel=\"Ext.data.writer.Xml-cfg-defaultDocumentRoot\" class=\"docClass\">defaultDocumentRoot</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>defaultDocumentRoot</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setDocumentRoot' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Xml'>Ext.data.writer.Xml</span><br/><a href='source/Xml2.html#Ext-data-writer-Xml-cfg-documentRoot' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Xml-method-setDocumentRoot' class='name expandable'>setDocumentRoot</a>( <span class='pre'>documentRoot</span> )</div><div class='description'><div class='short'>Sets the value of documentRoot. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.writer.Xml-cfg-documentRoot\" rel=\"Ext.data.writer.Xml-cfg-documentRoot\" class=\"docClass\">documentRoot</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>documentRoot</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setHeader' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Xml'>Ext.data.writer.Xml</span><br/><a href='source/Xml2.html#Ext-data-writer-Xml-cfg-header' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Xml-method-setHeader' class='name expandable'>setHeader</a>( <span class='pre'>header</span> )</div><div class='description'><div class='short'>Sets the value of header. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.writer.Xml-cfg-header\" rel=\"Ext.data.writer.Xml-cfg-header\" class=\"docClass\">header</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>header</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setRecord' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Xml'>Ext.data.writer.Xml</span><br/><a href='source/Xml2.html#Ext-data-writer-Xml-cfg-record' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Xml-method-setRecord' class='name expandable'>setRecord</a>( <span class='pre'>record</span> )</div><div class='description'><div class='short'>Sets the value of record. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.data.writer.Xml-cfg-record\" rel=\"Ext.data.writer.Xml-cfg-record\" class=\"docClass\">record</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>record</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-writeRecords' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.data.writer.Xml'>Ext.data.writer.Xml</span><br/><a href='source/Xml2.html#Ext-data-writer-Xml-method-writeRecords' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.data.writer.Xml-method-writeRecords' class='name expandable'>writeRecords</a>( <span class='pre'>request, data</span> ) : Object</div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>request</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});