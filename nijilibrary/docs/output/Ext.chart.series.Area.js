Ext.data.JsonP.Ext_chart_series_Area({"tagname":"class","name":"Ext.chart.series.Area","extends":"Ext.chart.series.StackedCartesian","mixins":[],"alternateClassNames":[],"aliases":{"series":["area"]},"singleton":false,"requires":["Ext.chart.series.sprite.Area"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ext.chart.series.Area","code_type":"ext_define","members":{"cfg":[{"name":"hidden","tagname":"cfg","owner":"Ext.chart.series.StackedCartesian","meta":{},"id":"cfg-hidden"},{"name":"stacked","tagname":"cfg","owner":"Ext.chart.series.StackedCartesian","meta":{},"id":"cfg-stacked"}],"property":[{"name":"animatingSprites","tagname":"property","owner":"Ext.chart.series.StackedCartesian","meta":{"private":true},"id":"property-animatingSprites"},{"name":"seriesType","tagname":"property","owner":"Ext.chart.series.Area","meta":{"private":true},"id":"property-seriesType"},{"name":"type","tagname":"property","owner":"Ext.chart.series.Area","meta":{"private":true},"id":"property-type"}],"method":[{"name":"coordinateY","tagname":"method","owner":"Ext.chart.series.StackedCartesian","meta":{"private":true},"id":"method-coordinateY"},{"name":"getFields","tagname":"method","owner":"Ext.chart.series.StackedCartesian","meta":{"private":true},"id":"method-getFields"},{"name":"getHidden","tagname":"method","owner":"Ext.chart.series.StackedCartesian","meta":{},"id":"method-getHidden"},{"name":"getItemForPoint","tagname":"method","owner":"Ext.chart.series.StackedCartesian","meta":{"private":true},"id":"method-getItemForPoint"},{"name":"getSprites","tagname":"method","owner":"Ext.chart.series.StackedCartesian","meta":{"private":true},"id":"method-getSprites"},{"name":"getStacked","tagname":"method","owner":"Ext.chart.series.StackedCartesian","meta":{},"id":"method-getStacked"},{"name":"onSpriteAnimationEnd","tagname":"method","owner":"Ext.chart.series.StackedCartesian","meta":{"private":true},"id":"method-onSpriteAnimationEnd"},{"name":"onSpriteAnimationStart","tagname":"method","owner":"Ext.chart.series.StackedCartesian","meta":{"private":true},"id":"method-onSpriteAnimationStart"},{"name":"provideLegendInfo","tagname":"method","owner":"Ext.chart.series.StackedCartesian","meta":{"private":true},"id":"method-provideLegendInfo"},{"name":"setHidden","tagname":"method","owner":"Ext.chart.series.StackedCartesian","meta":{},"id":"method-setHidden"},{"name":"setStacked","tagname":"method","owner":"Ext.chart.series.StackedCartesian","meta":{},"id":"method-setStacked"},{"name":"updateLabelOverflowPadding","tagname":"method","owner":"Ext.chart.series.StackedCartesian","meta":{"private":true},"id":"method-updateLabelOverflowPadding"},{"name":"updateStacked","tagname":"method","owner":"Ext.chart.series.StackedCartesian","meta":{"private":true},"id":"method-updateStacked"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Area.js","href":"Area.html#Ext-chart-series-Area"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.chart.series.Cartesian","Ext.chart.series.StackedCartesian"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.chart.series.Cartesian<div class='subclass '><a href='#!/api/Ext.chart.series.StackedCartesian' rel='Ext.chart.series.StackedCartesian' class='docClass'>Ext.chart.series.StackedCartesian</a><div class='subclass '><strong>Ext.chart.series.Area</strong></div></div></div><h4>Requires</h4><div class='dependency'>Ext.chart.series.sprite.Area</div><h4>Files</h4><div class='dependency'><a href='source/Area.html#Ext-chart-series-Area' target='_blank'>Area.js</a></div></pre><div class='doc-contents'><p>Creates an Area Chart.</p>\n\n<pre class='inline-example preview'><code>var chart = new Ext.chart.CartesianChart({\n    animate: true,\n    store: {\n      fields: ['name', 'data1', 'data2', 'data3', 'data4', 'data5'],\n      data: [\n          {'name':'metric one', 'data1':10, 'data2':12, 'data3':14, 'data4':8, 'data5':13},\n          {'name':'metric two', 'data1':7, 'data2':8, 'data3':16, 'data4':10, 'data5':3},\n          {'name':'metric three', 'data1':5, 'data2':2, 'data3':14, 'data4':12, 'data5':7},\n          {'name':'metric four', 'data1':2, 'data2':14, 'data3':6, 'data4':1, 'data5':23},\n          {'name':'metric five', 'data1':27, 'data2':38, 'data3':36, 'data4':13, 'data5':33}\n      ]\n    },\n    axes: [{\n        type: 'numeric',\n        position: 'left',\n        fields: ['data1'],\n        title: {\n            text: 'Sample Values',\n            fontSize: 15\n        },\n        grid: true,\n        minimum: 0\n    }, {\n        type: 'category',\n        position: 'bottom',\n        fields: ['name'],\n        title: {\n            text: 'Sample Values',\n            fontSize: 15\n        }\n    }],\n    series: [{\n        type: 'area',\n        subStyle: {\n            fill: ['blue', 'green', 'red']\n        },\n        xField: 'name',\n        yField: ['data1', 'data2', 'data3']\n\n    }]\n});\nExt.Viewport.setLayout('fit');\nExt.Viewport.add(chart);\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-hidden' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.series.StackedCartesian' rel='Ext.chart.series.StackedCartesian' class='defined-in docClass'>Ext.chart.series.StackedCartesian</a><br/><a href='source/StackedCartesian.html#Ext-chart-series-StackedCartesian-cfg-hidden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.series.StackedCartesian-cfg-hidden' class='name expandable'>hidden</a><span> : Array</span></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>[]</code></p></div></div></div><div id='cfg-stacked' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.series.StackedCartesian' rel='Ext.chart.series.StackedCartesian' class='defined-in docClass'>Ext.chart.series.StackedCartesian</a><br/><a href='source/StackedCartesian.html#Ext-chart-series-StackedCartesian-cfg-stacked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.series.StackedCartesian-cfg-stacked' class='name expandable'>stacked</a><span> : Boolean</span></div><div class='description'><div class='short'>'true' to display the series in its stacked configuration. ...</div><div class='long'><p>'true' to display the series in its stacked configuration.</p>\n<p>Defaults to: <code>true</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-animatingSprites' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.series.StackedCartesian' rel='Ext.chart.series.StackedCartesian' class='defined-in docClass'>Ext.chart.series.StackedCartesian</a><br/><a href='source/StackedCartesian.html#Ext-chart-series-StackedCartesian-property-animatingSprites' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.series.StackedCartesian-property-animatingSprites' class='name expandable'>animatingSprites</a><span> : Number</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>0</code></p></div></div></div><div id='property-seriesType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.series.Area'>Ext.chart.series.Area</span><br/><a href='source/Area.html#Ext-chart-series-Area-property-seriesType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.series.Area-property-seriesType' class='name expandable'>seriesType</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'areaSeries'</code></p></div></div></div><div id='property-type' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.series.Area'>Ext.chart.series.Area</span><br/><a href='source/Area.html#Ext-chart-series-Area-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.series.Area-property-type' class='name expandable'>type</a><span> : String</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>'area'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-coordinateY' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.series.StackedCartesian' rel='Ext.chart.series.StackedCartesian' class='defined-in docClass'>Ext.chart.series.StackedCartesian</a><br/><a href='source/StackedCartesian.html#Ext-chart-series-StackedCartesian-method-coordinateY' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.series.StackedCartesian-method-coordinateY' class='name expandable'>coordinateY</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getFields' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.series.StackedCartesian' rel='Ext.chart.series.StackedCartesian' class='defined-in docClass'>Ext.chart.series.StackedCartesian</a><br/><a href='source/StackedCartesian.html#Ext-chart-series-StackedCartesian-method-getFields' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.series.StackedCartesian-method-getFields' class='name expandable'>getFields</a>( <span class='pre'>fieldCategory</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>fieldCategory</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getHidden' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.series.StackedCartesian' rel='Ext.chart.series.StackedCartesian' class='defined-in docClass'>Ext.chart.series.StackedCartesian</a><br/><a href='source/StackedCartesian.html#Ext-chart-series-StackedCartesian-cfg-hidden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.series.StackedCartesian-method-getHidden' class='name expandable'>getHidden</a>( <span class='pre'></span> ) : Array</div><div class='description'><div class='short'>Returns the value of hidden. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.chart.series.StackedCartesian-cfg-hidden\" rel=\"Ext.chart.series.StackedCartesian-cfg-hidden\" class=\"docClass\">hidden</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getItemForPoint' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.series.StackedCartesian' rel='Ext.chart.series.StackedCartesian' class='defined-in docClass'>Ext.chart.series.StackedCartesian</a><br/><a href='source/StackedCartesian.html#Ext-chart-series-StackedCartesian-method-getItemForPoint' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.series.StackedCartesian-method-getItemForPoint' class='name expandable'>getItemForPoint</a>( <span class='pre'>x, y</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>x</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>y</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getSprites' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.series.StackedCartesian' rel='Ext.chart.series.StackedCartesian' class='defined-in docClass'>Ext.chart.series.StackedCartesian</a><br/><a href='source/StackedCartesian.html#Ext-chart-series-StackedCartesian-method-getSprites' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.series.StackedCartesian-method-getSprites' class='name expandable'>getSprites</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getStacked' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.series.StackedCartesian' rel='Ext.chart.series.StackedCartesian' class='defined-in docClass'>Ext.chart.series.StackedCartesian</a><br/><a href='source/StackedCartesian.html#Ext-chart-series-StackedCartesian-cfg-stacked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.series.StackedCartesian-method-getStacked' class='name expandable'>getStacked</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of stacked. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.chart.series.StackedCartesian-cfg-stacked\" rel=\"Ext.chart.series.StackedCartesian-cfg-stacked\" class=\"docClass\">stacked</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onSpriteAnimationEnd' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.series.StackedCartesian' rel='Ext.chart.series.StackedCartesian' class='defined-in docClass'>Ext.chart.series.StackedCartesian</a><br/><a href='source/StackedCartesian.html#Ext-chart-series-StackedCartesian-method-onSpriteAnimationEnd' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.series.StackedCartesian-method-onSpriteAnimationEnd' class='name expandable'>onSpriteAnimationEnd</a>( <span class='pre'>sprite</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sprite</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-onSpriteAnimationStart' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.series.StackedCartesian' rel='Ext.chart.series.StackedCartesian' class='defined-in docClass'>Ext.chart.series.StackedCartesian</a><br/><a href='source/StackedCartesian.html#Ext-chart-series-StackedCartesian-method-onSpriteAnimationStart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.series.StackedCartesian-method-onSpriteAnimationStart' class='name expandable'>onSpriteAnimationStart</a>( <span class='pre'>sprite</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>sprite</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-provideLegendInfo' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.series.StackedCartesian' rel='Ext.chart.series.StackedCartesian' class='defined-in docClass'>Ext.chart.series.StackedCartesian</a><br/><a href='source/StackedCartesian.html#Ext-chart-series-StackedCartesian-method-provideLegendInfo' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.series.StackedCartesian-method-provideLegendInfo' class='name expandable'>provideLegendInfo</a>( <span class='pre'>target</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>target</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setHidden' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.series.StackedCartesian' rel='Ext.chart.series.StackedCartesian' class='defined-in docClass'>Ext.chart.series.StackedCartesian</a><br/><a href='source/StackedCartesian.html#Ext-chart-series-StackedCartesian-cfg-hidden' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.series.StackedCartesian-method-setHidden' class='name expandable'>setHidden</a>( <span class='pre'>hidden</span> )</div><div class='description'><div class='short'>Sets the value of hidden. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.chart.series.StackedCartesian-cfg-hidden\" rel=\"Ext.chart.series.StackedCartesian-cfg-hidden\" class=\"docClass\">hidden</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>hidden</span> : Array<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setStacked' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.series.StackedCartesian' rel='Ext.chart.series.StackedCartesian' class='defined-in docClass'>Ext.chart.series.StackedCartesian</a><br/><a href='source/StackedCartesian.html#Ext-chart-series-StackedCartesian-cfg-stacked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.series.StackedCartesian-method-setStacked' class='name expandable'>setStacked</a>( <span class='pre'>stacked</span> )</div><div class='description'><div class='short'>Sets the value of stacked. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.chart.series.StackedCartesian-cfg-stacked\" rel=\"Ext.chart.series.StackedCartesian-cfg-stacked\" class=\"docClass\">stacked</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>stacked</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateLabelOverflowPadding' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.series.StackedCartesian' rel='Ext.chart.series.StackedCartesian' class='defined-in docClass'>Ext.chart.series.StackedCartesian</a><br/><a href='source/StackedCartesian.html#Ext-chart-series-StackedCartesian-method-updateLabelOverflowPadding' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.series.StackedCartesian-method-updateLabelOverflowPadding' class='name expandable'>updateLabelOverflowPadding</a>( <span class='pre'>labelOverflowPadding</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>labelOverflowPadding</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-updateStacked' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.chart.series.StackedCartesian' rel='Ext.chart.series.StackedCartesian' class='defined-in docClass'>Ext.chart.series.StackedCartesian</a><br/><a href='source/StackedCartesian.html#Ext-chart-series-StackedCartesian-method-updateStacked' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.series.StackedCartesian-method-updateStacked' class='name expandable'>updateStacked</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div></div></div></div></div>"});