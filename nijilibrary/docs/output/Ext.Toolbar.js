Ext.data.JsonP.Ext_Toolbar({"tagname":"class","name":"Ext.Toolbar","extends":"Ext.Container","mixins":[],"alternateClassNames":[],"aliases":{"widget":["toolbar"]},"singleton":false,"requires":["Ext.Button","Ext.Spacer","Ext.Title","Ext.layout.HBox"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"aside":[{"type":"video","name":"tabs-toolbars"}]},"private":null,"id":"class-Ext.Toolbar","code_type":"ext_define","members":{"cfg":[{"name":"baseCls","tagname":"cfg","owner":"Ext.Toolbar","meta":{},"id":"cfg-baseCls"},{"name":"defaultType","tagname":"cfg","owner":"Ext.Toolbar","meta":{},"id":"cfg-defaultType"},{"name":"docked","tagname":"cfg","owner":"Ext.Toolbar","meta":{},"id":"cfg-docked"},{"name":"layout","tagname":"cfg","owner":"Ext.Toolbar","meta":{},"id":"cfg-layout"},{"name":"minHeight","tagname":"cfg","owner":"Ext.Toolbar","meta":{},"id":"cfg-minHeight"},{"name":"title","tagname":"cfg","owner":"Ext.Toolbar","meta":{},"id":"cfg-title"},{"name":"titleCls","tagname":"cfg","owner":"Ext.Toolbar","meta":{"removed":{"version":"2.0.0","text":"Title class is now a config option of the title"}},"id":"cfg-titleCls"},{"name":"ui","tagname":"cfg","owner":"Ext.Toolbar","meta":{},"id":"cfg-ui"}],"property":[{"name":"hasCSSMinHeight","tagname":"property","owner":"Ext.Toolbar","meta":{"private":true},"id":"property-hasCSSMinHeight"},{"name":"isToolbar","tagname":"property","owner":"Ext.Toolbar","meta":{"private":true},"id":"property-isToolbar"}],"method":[{"name":"constructor","tagname":"method","owner":"Ext.Toolbar","meta":{},"id":"method-constructor"},{"name":"applyTitle","tagname":"method","owner":"Ext.Toolbar","meta":{"private":true},"id":"method-applyTitle"},{"name":"getBaseCls","tagname":"method","owner":"Ext.Toolbar","meta":{},"id":"method-getBaseCls"},{"name":"getDefaultType","tagname":"method","owner":"Ext.Toolbar","meta":{},"id":"method-getDefaultType"},{"name":"getDocked","tagname":"method","owner":"Ext.Toolbar","meta":{},"id":"method-getDocked"},{"name":"getLayout","tagname":"method","owner":"Ext.Toolbar","meta":{},"id":"method-getLayout"},{"name":"getMinHeight","tagname":"method","owner":"Ext.Toolbar","meta":{},"id":"method-getMinHeight"},{"name":"getTitle","tagname":"method","owner":"Ext.Toolbar","meta":{},"id":"method-getTitle"},{"name":"getUi","tagname":"method","owner":"Ext.Toolbar","meta":{},"id":"method-getUi"},{"name":"hideTitle","tagname":"method","owner":"Ext.Toolbar","meta":{},"id":"method-hideTitle"},{"name":"setBaseCls","tagname":"method","owner":"Ext.Toolbar","meta":{},"id":"method-setBaseCls"},{"name":"setDefaultType","tagname":"method","owner":"Ext.Toolbar","meta":{},"id":"method-setDefaultType"},{"name":"setDocked","tagname":"method","owner":"Ext.Toolbar","meta":{},"id":"method-setDocked"},{"name":"setLayout","tagname":"method","owner":"Ext.Toolbar","meta":{},"id":"method-setLayout"},{"name":"setMinHeight","tagname":"method","owner":"Ext.Toolbar","meta":{},"id":"method-setMinHeight"},{"name":"setTitle","tagname":"method","owner":"Ext.Toolbar","meta":{},"id":"method-setTitle"},{"name":"setUi","tagname":"method","owner":"Ext.Toolbar","meta":{},"id":"method-setUi"},{"name":"showTitle","tagname":"method","owner":"Ext.Toolbar","meta":{},"id":"method-showTitle"},{"name":"updateTitle","tagname":"method","owner":"Ext.Toolbar","meta":{"private":true},"id":"method-updateTitle"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Toolbar.js","href":"Toolbar.html#Ext-Toolbar"}],"html_meta":{"aside":[]},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Container"],"subclasses":["Ext.tab.Bar"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Container<div class='subclass '><strong>Ext.Toolbar</strong></div></div><h4>Requires</h4><div class='dependency'>Ext.Button</div><div class='dependency'><a href='#!/api/Ext.Spacer' rel='Ext.Spacer' class='docClass'>Ext.Spacer</a></div><div class='dependency'><a href='#!/api/Ext.Title' rel='Ext.Title' class='docClass'>Ext.Title</a></div><div class='dependency'><a href='#!/api/Ext.layout.HBox' rel='Ext.layout.HBox' class='docClass'>Ext.layout.HBox</a></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.tab.Bar' rel='Ext.tab.Bar' class='docClass'>Ext.tab.Bar</a></div><h4>Files</h4><div class='dependency'><a href='source/Toolbar.html#Ext-Toolbar' target='_blank'>Toolbar.js</a></div></pre><div class='doc-contents'><p><a href=\"#!/api/Ext.Toolbar\" rel=\"Ext.Toolbar\" class=\"docClass\">Ext.Toolbar</a>s are most commonly used as docked items as within a Ext.Container. They can be docked either <code>top</code> or <code>bottom</code> using the <a href=\"#!/api/Ext.Toolbar-cfg-docked\" rel=\"Ext.Toolbar-cfg-docked\" class=\"docClass\">docked</a> configuration.</p>\n\n<p>They allow you to insert items (normally buttons) and also add a <a href=\"#!/api/Ext.Toolbar-cfg-title\" rel=\"Ext.Toolbar-cfg-title\" class=\"docClass\">title</a>.</p>\n\n<p>The <a href=\"#!/api/Ext.Toolbar-cfg-defaultType\" rel=\"Ext.Toolbar-cfg-defaultType\" class=\"docClass\">defaultType</a> of <a href=\"#!/api/Ext.Toolbar\" rel=\"Ext.Toolbar\" class=\"docClass\">Ext.Toolbar</a> is Ext.Button.</p>\n\n<p>You can alternatively use Ext.TitleBar if you want the title to automatically adjust the size of its items.</p>\n\n<h2>Examples</h2>\n\n<pre class='inline-example miniphone preview'><code><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('Ext.Container', {\n    fullscreen: true,\n    layout: {\n        type: 'vbox',\n        pack: 'center'\n    },\n    items: [\n        {\n            xtype : 'toolbar',\n            docked: 'top',\n            title: 'My Toolbar'\n        },\n        {\n            xtype: 'container',\n            defaults: {\n                xtype: 'button',\n                margin: '10 10 0 10'\n            },\n            items: [\n                {\n                    text: 'Toggle docked',\n                    handler: function() {\n                        var toolbar = <a href=\"#!/api/Ext.ComponentQuery-method-query\" rel=\"Ext.ComponentQuery-method-query\" class=\"docClass\">Ext.ComponentQuery.query</a>('toolbar')[0],\n                            newDocked = (toolbar.getDocked() === 'top') ? 'bottom' : 'top';\n\n                        toolbar.setDocked(newDocked);\n                    }\n                },\n                {\n                    text: 'Toggle UI',\n                    handler: function() {\n                        var toolbar = <a href=\"#!/api/Ext.ComponentQuery-method-query\" rel=\"Ext.ComponentQuery-method-query\" class=\"docClass\">Ext.ComponentQuery.query</a>('toolbar')[0],\n                            newUi = (toolbar.getUi() === 'light') ? 'dark' : 'light';\n\n                        toolbar.setUi(newUi);\n                    }\n                },\n                {\n                    text: 'Change title',\n                    handler: function() {\n                        var toolbar = <a href=\"#!/api/Ext.ComponentQuery-method-query\" rel=\"Ext.ComponentQuery-method-query\" class=\"docClass\">Ext.ComponentQuery.query</a>('toolbar')[0],\n                            titles = ['My Toolbar', '<a href=\"#!/api/Ext.Toolbar\" rel=\"Ext.Toolbar\" class=\"docClass\">Ext.Toolbar</a>', 'Configurations are awesome!', 'Beautiful.'],\n                               //internally, the title configuration gets converted into a <a href=\"#!/api/Ext.Title\" rel=\"Ext.Title\" class=\"docClass\">Ext.Title</a> component,\n                               //so you must get the title configuration of that component\n                            title = toolbar.getTitle().getTitle(),\n                            newTitle = titles[titles.indexOf(title) + 1] || titles[0];\n\n                        toolbar.setTitle(newTitle);\n                    }\n                }\n            ]\n        }\n    ]\n});\n</code></pre>\n\n<h2>Notes</h2>\n\n<p>You must use a HTML5 doctype for <a href=\"#!/api/Ext.Toolbar-cfg-docked\" rel=\"Ext.Toolbar-cfg-docked\" class=\"docClass\">docked</a> <code>bottom</code> to work. To do this, simply add the following code to the HTML file:</p>\n\n<pre><code>&lt;!doctype html&gt;\n</code></pre>\n\n<p>So your index.html file should look a little like this:</p>\n\n<pre><code>&lt;!doctype html&gt;\n&lt;html&gt;\n    &lt;head&gt;\n        &lt;title&gt;MY application title&lt;/title&gt;\n        ...\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-baseCls' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-baseCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-cfg-baseCls' class='name expandable'>baseCls</a><span> : String</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>Ext.baseCSSPrefix + 'toolbar'</code></p></div></div></div><div id='cfg-defaultType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-defaultType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-cfg-defaultType' class='name expandable'>defaultType</a><span> : String</span></div><div class='description'><div class='short'>The default xtype to create. ...</div><div class='long'><p>The default xtype to create.</p>\n<p>Defaults to: <code>'button'</code></p></div></div></div><div id='cfg-docked' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-docked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-cfg-docked' class='name expandable'>docked</a><span> : String</span></div><div class='description'><div class='short'>The docked position for this Ext.Toolbar. ...</div><div class='long'><p>The docked position for this <a href=\"#!/api/Ext.Toolbar\" rel=\"Ext.Toolbar\" class=\"docClass\">Ext.Toolbar</a>.\nIf you specify <code>left</code> or <code>right</code>, the <a href=\"#!/api/Ext.Toolbar-cfg-layout\" rel=\"Ext.Toolbar-cfg-layout\" class=\"docClass\">layout</a> configuration will automatically change to a <code>vbox</code>. It's also\nrecommended to adjust the width of the toolbar if you do this.</p>\n</div></div></div><div id='cfg-layout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-cfg-layout' class='name expandable'>layout</a><span> : Object/String</span></div><div class='description'><div class='short'>Configuration for this Container's layout. ...</div><div class='long'><p>Configuration for this Container's layout. Example:</p>\n\n<pre><code><a href=\"#!/api/Ext-method-create\" rel=\"Ext-method-create\" class=\"docClass\">Ext.create</a>('Ext.Container', {\n    layout: {\n        type: 'hbox',\n        align: 'middle'\n    },\n    items: [\n        {\n            xtype: 'panel',\n            flex: 1,\n            style: 'background-color: red;'\n        },\n        {\n            xtype: 'panel',\n            flex: 2,\n            style: 'background-color: green'\n        }\n    ]\n});\n</code></pre>\n\n<p>See the <a href=\"#!/guides/layouts\">layouts guide</a> for more information</p>\n\n<p><strong>Note:</strong> If you set the <a href=\"#!/api/Ext.Toolbar-cfg-docked\" rel=\"Ext.Toolbar-cfg-docked\" class=\"docClass\">docked</a> configuration to <code>left</code> or <code>right</code>, the default layout will change from the\n<code>hbox</code> to a <code>vbox</code>.</p>\n<p>Defaults to: <code>{type: 'hbox', align: 'center'}</code></p></div></div></div><div id='cfg-minHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-minHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-cfg-minHeight' class='name not-expandable'>minHeight</a><span> : String</span></div><div class='description'><div class='short'><p>The minimum height height of the Toolbar.</p>\n</div><div class='long'><p>The minimum height height of the Toolbar.</p>\n</div></div></div><div id='cfg-title' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-title' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-cfg-title' class='name not-expandable'>title</a><span> : String/<a href=\"#!/api/Ext.Title\" rel=\"Ext.Title\" class=\"docClass\">Ext.Title</a></span></div><div class='description'><div class='short'><p>The title of the toolbar.</p>\n</div><div class='long'><p>The title of the toolbar.</p>\n</div></div></div><div id='cfg-titleCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-titleCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-cfg-titleCls' class='name not-expandable'>titleCls</a><span> : Boolean</span><strong class='removed signature' >removed</strong></div><div class='description'><div class='short'><p>The CSS class to apply to the <code>titleEl</code>.</p>\n</div><div class='long'><p>The CSS class to apply to the <code>titleEl</code>.</p>\n        <div class='signature-box removed'>\n        <p>This cfg has been <strong>removed</strong> since 2.0.0</p>\n        <p>Title class is now a config option of the title</p>\n\n        </div>\n</div></div></div><div id='cfg-ui' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-ui' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-cfg-ui' class='name expandable'>ui</a><span> : String</span></div><div class='description'><div class='short'>The ui for this Ext.Toolbar. ...</div><div class='long'><p>The ui for this <a href=\"#!/api/Ext.Toolbar\" rel=\"Ext.Toolbar\" class=\"docClass\">Ext.Toolbar</a>. Either 'light' or 'dark'. You can create more UIs by using using the CSS Mixin sencha-toolbar-ui</p>\n<p>Defaults to: <code>'dark'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-hasCSSMinHeight' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-property-hasCSSMinHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-property-hasCSSMinHeight' class='name expandable'>hasCSSMinHeight</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='property-isToolbar' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-property-isToolbar' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-property-isToolbar' class='name expandable'>isToolbar</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.Toolbar-method-constructor' class='name expandable'>Ext.Toolbar</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.Toolbar\" rel=\"Ext.Toolbar\" class=\"docClass\">Ext.Toolbar</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Toolbar\" rel=\"Ext.Toolbar\" class=\"docClass\">Ext.Toolbar</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-applyTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-method-applyTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-method-applyTitle' class='name expandable'>applyTitle</a>( <span class='pre'>title</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getBaseCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-baseCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-method-getBaseCls' class='name expandable'>getBaseCls</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of baseCls. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.Toolbar-cfg-baseCls\" rel=\"Ext.Toolbar-cfg-baseCls\" class=\"docClass\">baseCls</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDefaultType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-defaultType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-method-getDefaultType' class='name expandable'>getDefaultType</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of defaultType. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.Toolbar-cfg-defaultType\" rel=\"Ext.Toolbar-cfg-defaultType\" class=\"docClass\">defaultType</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getDocked' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-docked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-method-getDocked' class='name expandable'>getDocked</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of docked. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.Toolbar-cfg-docked\" rel=\"Ext.Toolbar-cfg-docked\" class=\"docClass\">docked</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getLayout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-method-getLayout' class='name expandable'>getLayout</a>( <span class='pre'></span> ) : Object/String</div><div class='description'><div class='short'>Returns the value of layout. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.Toolbar-cfg-layout\" rel=\"Ext.Toolbar-cfg-layout\" class=\"docClass\">layout</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object/String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getMinHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-minHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-method-getMinHeight' class='name expandable'>getMinHeight</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of minHeight. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.Toolbar-cfg-minHeight\" rel=\"Ext.Toolbar-cfg-minHeight\" class=\"docClass\">minHeight</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-method-getTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-method-getTitle' class='name expandable'>getTitle</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Title\" rel=\"Ext.Title\" class=\"docClass\">Ext.Title</a></div><div class='description'><div class='short'>Returns an Ext.Title component. ...</div><div class='long'><p>Returns an <a href=\"#!/api/Ext.Title\" rel=\"Ext.Title\" class=\"docClass\">Ext.Title</a> component.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Title\" rel=\"Ext.Title\" class=\"docClass\">Ext.Title</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getUi' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-ui' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-method-getUi' class='name expandable'>getUi</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of ui. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.Toolbar-cfg-ui\" rel=\"Ext.Toolbar-cfg-ui\" class=\"docClass\">ui</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-hideTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-method-hideTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-method-hideTitle' class='name expandable'>hideTitle</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Hides the title, if it exists. ...</div><div class='long'><p>Hides the title, if it exists.</p>\n</div></div></div><div id='method-setBaseCls' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-baseCls' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-method-setBaseCls' class='name expandable'>setBaseCls</a>( <span class='pre'>baseCls</span> )</div><div class='description'><div class='short'>Sets the value of baseCls. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.Toolbar-cfg-baseCls\" rel=\"Ext.Toolbar-cfg-baseCls\" class=\"docClass\">baseCls</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>baseCls</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setDefaultType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-defaultType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-method-setDefaultType' class='name expandable'>setDefaultType</a>( <span class='pre'>defaultType</span> )</div><div class='description'><div class='short'>Sets the value of defaultType. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.Toolbar-cfg-defaultType\" rel=\"Ext.Toolbar-cfg-defaultType\" class=\"docClass\">defaultType</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>defaultType</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setDocked' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-docked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-method-setDocked' class='name expandable'>setDocked</a>( <span class='pre'>docked</span> )</div><div class='description'><div class='short'>Sets the value of docked. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.Toolbar-cfg-docked\" rel=\"Ext.Toolbar-cfg-docked\" class=\"docClass\">docked</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>docked</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setLayout' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-layout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-method-setLayout' class='name expandable'>setLayout</a>( <span class='pre'>layout</span> )</div><div class='description'><div class='short'>Sets the value of layout. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.Toolbar-cfg-layout\" rel=\"Ext.Toolbar-cfg-layout\" class=\"docClass\">layout</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>layout</span> : Object/String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setMinHeight' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-minHeight' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-method-setMinHeight' class='name expandable'>setMinHeight</a>( <span class='pre'>minHeight</span> )</div><div class='description'><div class='short'>Sets the value of minHeight. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.Toolbar-cfg-minHeight\" rel=\"Ext.Toolbar-cfg-minHeight\" class=\"docClass\">minHeight</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>minHeight</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-method-setTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-method-setTitle' class='name expandable'>setTitle</a>( <span class='pre'>title</span> )</div><div class='description'><div class='short'>Use this to update the title configuration. ...</div><div class='long'><p>Use this to update the <a href=\"#!/api/Ext.Toolbar-cfg-title\" rel=\"Ext.Toolbar-cfg-title\" class=\"docClass\">title</a> configuration.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>title</span> : String/<a href=\"#!/api/Ext.Title\" rel=\"Ext.Title\" class=\"docClass\">Ext.Title</a><div class='sub-desc'><p>You can either pass a String, or a config/instance of <a href=\"#!/api/Ext.Title\" rel=\"Ext.Title\" class=\"docClass\">Ext.Title</a>.</p>\n</div></li></ul></div></div></div><div id='method-setUi' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-cfg-ui' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-method-setUi' class='name expandable'>setUi</a>( <span class='pre'>ui</span> )</div><div class='description'><div class='short'>Sets the value of ui. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.Toolbar-cfg-ui\" rel=\"Ext.Toolbar-cfg-ui\" class=\"docClass\">ui</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>ui</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-showTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-method-showTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-method-showTitle' class='name expandable'>showTitle</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Shows the title, if it exists. ...</div><div class='long'><p>Shows the title, if it exists.</p>\n</div></div></div><div id='method-updateTitle' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.Toolbar'>Ext.Toolbar</span><br/><a href='source/Toolbar.html#Ext-Toolbar-method-updateTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.Toolbar-method-updateTitle' class='name expandable'>updateTitle</a>( <span class='pre'>newTitle, oldTitle</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newTitle</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>oldTitle</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});