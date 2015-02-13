Ext.data.JsonP.Ext_chart_axis_layout_Continuous({"tagname":"class","name":"Ext.chart.axis.layout.Continuous","extends":"Ext.chart.axis.layout.Layout","mixins":[],"alternateClassNames":[],"aliases":{"axisLayout":["continuous"]},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ext.chart.axis.layout.Continuous","code_type":"ext_define","members":{"cfg":[{"name":"adjustMaximumByMajorUnit","tagname":"cfg","owner":"Ext.chart.axis.layout.Continuous","meta":{"private":true},"id":"cfg-adjustMaximumByMajorUnit"},{"name":"adjustMinimumByMajorUnit","tagname":"cfg","owner":"Ext.chart.axis.layout.Continuous","meta":{"private":true},"id":"cfg-adjustMinimumByMajorUnit"},{"name":"axis","tagname":"cfg","owner":"Ext.chart.axis.layout.Layout","meta":{},"id":"cfg-axis"}],"property":[],"method":[{"name":"constructor","tagname":"method","owner":"Ext.chart.axis.layout.Layout","meta":{},"id":"method-constructor"},{"name":"calculateLayout","tagname":"method","owner":"Ext.chart.axis.layout.Layout","meta":{},"id":"method-calculateLayout"},{"name":"calculateMajorTicks","tagname":"method","owner":"Ext.chart.axis.layout.Layout","meta":{},"id":"method-calculateMajorTicks"},{"name":"calculateMinorTicks","tagname":"method","owner":"Ext.chart.axis.layout.Layout","meta":{},"id":"method-calculateMinorTicks"},{"name":"getAdjustMaximumByMajorUnit","tagname":"method","owner":"Ext.chart.axis.layout.Continuous","meta":{},"id":"method-getAdjustMaximumByMajorUnit"},{"name":"getAdjustMinimumByMajorUnit","tagname":"method","owner":"Ext.chart.axis.layout.Continuous","meta":{},"id":"method-getAdjustMinimumByMajorUnit"},{"name":"getAxis","tagname":"method","owner":"Ext.chart.axis.layout.Layout","meta":{},"id":"method-getAxis"},{"name":"getCoordFor","tagname":"method","owner":"Ext.chart.axis.layout.Continuous","meta":{"private":true},"id":"method-getCoordFor"},{"name":"processData","tagname":"method","owner":"Ext.chart.axis.layout.Layout","meta":{},"id":"method-processData"},{"name":"setAdjustMaximumByMajorUnit","tagname":"method","owner":"Ext.chart.axis.layout.Continuous","meta":{},"id":"method-setAdjustMaximumByMajorUnit"},{"name":"setAdjustMinimumByMajorUnit","tagname":"method","owner":"Ext.chart.axis.layout.Continuous","meta":{},"id":"method-setAdjustMinimumByMajorUnit"},{"name":"setAxis","tagname":"method","owner":"Ext.chart.axis.layout.Layout","meta":{},"id":"method-setAxis"},{"name":"snapEnds","tagname":"method","owner":"Ext.chart.axis.layout.Continuous","meta":{},"id":"method-snapEnds"},{"name":"trimByRange","tagname":"method","owner":"Ext.chart.axis.layout.Layout","meta":{},"id":"method-trimByRange"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Continuous.js","href":"Continuous.html#Ext-chart-axis-layout-Continuous"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base","Ext.chart.axis.layout.Layout"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.chart.axis.layout.Layout' rel='Ext.chart.axis.layout.Layout' class='docClass'>Ext.chart.axis.layout.Layout</a><div class='subclass '><strong>Ext.chart.axis.layout.Continuous</strong></div></div></div><h4>Files</h4><div class='dependency'><a href='source/Continuous.html#Ext-chart-axis-layout-Continuous' target='_blank'>Continuous.js</a></div></pre><div class='doc-contents'><p>Processor for axis data that can be interpolated.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-adjustMaximumByMajorUnit' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.axis.layout.Continuous'>Ext.chart.axis.layout.Continuous</span><br/><a href='source/Continuous.html#Ext-chart-axis-layout-Continuous-cfg-adjustMaximumByMajorUnit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.layout.Continuous-cfg-adjustMaximumByMajorUnit' class='name expandable'>adjustMaximumByMajorUnit</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-adjustMinimumByMajorUnit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.axis.layout.Continuous'>Ext.chart.axis.layout.Continuous</span><br/><a href='source/Continuous.html#Ext-chart-axis-layout-Continuous-cfg-adjustMinimumByMajorUnit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.layout.Continuous-cfg-adjustMinimumByMajorUnit' class='name expandable'>adjustMinimumByMajorUnit</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-axis' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.layout.Layout' rel='Ext.chart.axis.layout.Layout' class='defined-in docClass'>Ext.chart.axis.layout.Layout</a><br/><a href='source/Layout.html#Ext-chart-axis-layout-Layout-cfg-axis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.layout.Layout-cfg-axis' class='name not-expandable'>axis</a><span> : Ext.chart.axis.Axis</span></div><div class='description'><div class='short'><p>The axis that the Layout is bound.</p>\n</div><div class='long'><p>The axis that the Layout is bound.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.layout.Layout' rel='Ext.chart.axis.layout.Layout' class='defined-in docClass'>Ext.chart.axis.layout.Layout</a><br/><a href='source/Layout.html#Ext-chart-axis-layout-Layout-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.chart.axis.layout.Layout-method-constructor' class='name expandable'>Ext.chart.axis.layout.Continuous</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.chart.axis.layout.Layout\" rel=\"Ext.chart.axis.layout.Layout\" class=\"docClass\">Ext.chart.axis.layout.Layout</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.chart.axis.layout.Layout\" rel=\"Ext.chart.axis.layout.Layout\" class=\"docClass\">Ext.chart.axis.layout.Layout</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-calculateLayout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.layout.Layout' rel='Ext.chart.axis.layout.Layout' class='defined-in docClass'>Ext.chart.axis.layout.Layout</a><br/><a href='source/Layout.html#Ext-chart-axis-layout-Layout-method-calculateLayout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.layout.Layout-method-calculateLayout' class='name expandable'>calculateLayout</a>( <span class='pre'>context</span> ) : *</div><div class='description'><div class='short'>Calculates the position of tick marks for the axis. ...</div><div class='long'><p>Calculates the position of tick marks for the axis.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>context</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>*</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-calculateMajorTicks' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.layout.Layout' rel='Ext.chart.axis.layout.Layout' class='defined-in docClass'>Ext.chart.axis.layout.Layout</a><br/><a href='source/Layout.html#Ext-chart-axis-layout-Layout-method-calculateMajorTicks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.layout.Layout-method-calculateMajorTicks' class='name expandable'>calculateMajorTicks</a>( <span class='pre'>context</span> )</div><div class='description'><div class='short'>Calculates the position of major ticks for the axis. ...</div><div class='long'><p>Calculates the position of major ticks for the axis.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>context</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-calculateMinorTicks' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.layout.Layout' rel='Ext.chart.axis.layout.Layout' class='defined-in docClass'>Ext.chart.axis.layout.Layout</a><br/><a href='source/Layout.html#Ext-chart-axis-layout-Layout-method-calculateMinorTicks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.layout.Layout-method-calculateMinorTicks' class='name expandable'>calculateMinorTicks</a>( <span class='pre'>context</span> )</div><div class='description'><div class='short'>Calculates the position of sub ticks for the axis. ...</div><div class='long'><p>Calculates the position of sub ticks for the axis.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>context</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAdjustMaximumByMajorUnit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.axis.layout.Continuous'>Ext.chart.axis.layout.Continuous</span><br/><a href='source/Continuous.html#Ext-chart-axis-layout-Continuous-cfg-adjustMaximumByMajorUnit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.layout.Continuous-method-getAdjustMaximumByMajorUnit' class='name expandable'>getAdjustMaximumByMajorUnit</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of adjustMaximumByMajorUnit. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.chart.axis.layout.Continuous-cfg-adjustMaximumByMajorUnit\" rel=\"Ext.chart.axis.layout.Continuous-cfg-adjustMaximumByMajorUnit\" class=\"docClass\">adjustMaximumByMajorUnit</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAdjustMinimumByMajorUnit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.axis.layout.Continuous'>Ext.chart.axis.layout.Continuous</span><br/><a href='source/Continuous.html#Ext-chart-axis-layout-Continuous-cfg-adjustMinimumByMajorUnit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.layout.Continuous-method-getAdjustMinimumByMajorUnit' class='name expandable'>getAdjustMinimumByMajorUnit</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of adjustMinimumByMajorUnit. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.chart.axis.layout.Continuous-cfg-adjustMinimumByMajorUnit\" rel=\"Ext.chart.axis.layout.Continuous-cfg-adjustMinimumByMajorUnit\" class=\"docClass\">adjustMinimumByMajorUnit</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getAxis' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.layout.Layout' rel='Ext.chart.axis.layout.Layout' class='defined-in docClass'>Ext.chart.axis.layout.Layout</a><br/><a href='source/Layout.html#Ext-chart-axis-layout-Layout-cfg-axis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.layout.Layout-method-getAxis' class='name expandable'>getAxis</a>( <span class='pre'></span> ) : Ext.chart.axis.Axis</div><div class='description'><div class='short'>Returns the value of axis. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.chart.axis.layout.Layout-cfg-axis\" rel=\"Ext.chart.axis.layout.Layout-cfg-axis\" class=\"docClass\">axis</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Ext.chart.axis.Axis</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getCoordFor' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.axis.layout.Continuous'>Ext.chart.axis.layout.Continuous</span><br/><a href='source/Continuous.html#Ext-chart-axis-layout-Continuous-method-getCoordFor' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.layout.Continuous-method-getCoordFor' class='name expandable'>getCoordFor</a>( <span class='pre'>value, field, idx, items</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>value</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>field</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>idx</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>items</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-processData' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.layout.Layout' rel='Ext.chart.axis.layout.Layout' class='defined-in docClass'>Ext.chart.axis.layout.Layout</a><br/><a href='source/Layout.html#Ext-chart-axis-layout-Layout-method-processData' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.layout.Layout-method-processData' class='name expandable'>processData</a>( <span class='pre'>series</span> )</div><div class='description'><div class='short'>Processes the data of the series bound to the axis. ...</div><div class='long'><p>Processes the data of the series bound to the axis.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>series</span> : Object<div class='sub-desc'><p>The bound series.</p>\n</div></li></ul></div></div></div><div id='method-setAdjustMaximumByMajorUnit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.axis.layout.Continuous'>Ext.chart.axis.layout.Continuous</span><br/><a href='source/Continuous.html#Ext-chart-axis-layout-Continuous-cfg-adjustMaximumByMajorUnit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.layout.Continuous-method-setAdjustMaximumByMajorUnit' class='name expandable'>setAdjustMaximumByMajorUnit</a>( <span class='pre'>adjustMaximumByMajorUnit</span> )</div><div class='description'><div class='short'>Sets the value of adjustMaximumByMajorUnit. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.chart.axis.layout.Continuous-cfg-adjustMaximumByMajorUnit\" rel=\"Ext.chart.axis.layout.Continuous-cfg-adjustMaximumByMajorUnit\" class=\"docClass\">adjustMaximumByMajorUnit</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>adjustMaximumByMajorUnit</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setAdjustMinimumByMajorUnit' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.axis.layout.Continuous'>Ext.chart.axis.layout.Continuous</span><br/><a href='source/Continuous.html#Ext-chart-axis-layout-Continuous-cfg-adjustMinimumByMajorUnit' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.layout.Continuous-method-setAdjustMinimumByMajorUnit' class='name expandable'>setAdjustMinimumByMajorUnit</a>( <span class='pre'>adjustMinimumByMajorUnit</span> )</div><div class='description'><div class='short'>Sets the value of adjustMinimumByMajorUnit. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.chart.axis.layout.Continuous-cfg-adjustMinimumByMajorUnit\" rel=\"Ext.chart.axis.layout.Continuous-cfg-adjustMinimumByMajorUnit\" class=\"docClass\">adjustMinimumByMajorUnit</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>adjustMinimumByMajorUnit</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setAxis' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.layout.Layout' rel='Ext.chart.axis.layout.Layout' class='defined-in docClass'>Ext.chart.axis.layout.Layout</a><br/><a href='source/Layout.html#Ext-chart-axis-layout-Layout-cfg-axis' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.layout.Layout-method-setAxis' class='name expandable'>setAxis</a>( <span class='pre'>axis</span> )</div><div class='description'><div class='short'>Sets the value of axis. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.chart.axis.layout.Layout-cfg-axis\" rel=\"Ext.chart.axis.layout.Layout-cfg-axis\" class=\"docClass\">axis</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>axis</span> : Ext.chart.axis.Axis<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-snapEnds' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.axis.layout.Continuous'>Ext.chart.axis.layout.Continuous</span><br/><a href='source/Continuous.html#Ext-chart-axis-layout-Continuous-method-snapEnds' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.layout.Continuous-method-snapEnds' class='name expandable'>snapEnds</a>( <span class='pre'>context, min, max, estStepSize</span> )</div><div class='description'><div class='short'>Snaps the data bound to the axis to meaningful tick marks. ...</div><div class='long'><p>Snaps the data bound to the axis to meaningful tick marks.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>context</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>min</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>max</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>estStepSize</span> : Object<div class='sub-desc'>\n</div></li></ul><p>Overrides: <a href='#!/api/Ext.chart.axis.layout.Layout-method-snapEnds' rel='Ext.chart.axis.layout.Layout-method-snapEnds' class='docClass'>Ext.chart.axis.layout.Layout.snapEnds</a></p></div></div></div><div id='method-trimByRange' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.axis.layout.Layout' rel='Ext.chart.axis.layout.Layout' class='defined-in docClass'>Ext.chart.axis.layout.Layout</a><br/><a href='source/Layout.html#Ext-chart-axis-layout-Layout-method-trimByRange' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.axis.layout.Layout-method-trimByRange' class='name expandable'>trimByRange</a>( <span class='pre'>context, out, trimMin, trimMax</span> )</div><div class='description'><div class='short'>Trims the layout of the axis by the defined minimum and maximum. ...</div><div class='long'><p>Trims the layout of the axis by the defined minimum and maximum.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>context</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>out</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>trimMin</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>trimMax</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});