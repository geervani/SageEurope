Ext.data.JsonP.Ext_chart_interactions_Abstract({"tagname":"class","name":"Ext.chart.interactions.Abstract","extends":"Ext.Base","mixins":["Ext.mixin.Observable"],"alternateClassNames":[],"aliases":{"widget":["interaction"]},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{},"private":null,"id":"class-Ext.chart.interactions.Abstract","code_type":"ext_define","members":{"cfg":[{"name":"chart","tagname":"cfg","owner":"Ext.chart.interactions.Abstract","meta":{},"id":"cfg-chart"},{"name":"enabled","tagname":"cfg","owner":"Ext.chart.interactions.Abstract","meta":{},"id":"cfg-enabled"},{"name":"gesture","tagname":"cfg","owner":"Ext.chart.interactions.Abstract","meta":{},"id":"cfg-gesture"}],"property":[{"name":"stopAnimationBeforeSync","tagname":"property","owner":"Ext.chart.interactions.Abstract","meta":{"private":true},"id":"property-stopAnimationBeforeSync"},{"name":"throttleGap","tagname":"property","owner":"Ext.chart.interactions.Abstract","meta":{},"id":"property-throttleGap"}],"method":[{"name":"constructor","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{},"id":"method-constructor"},{"name":"addChartListener","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{"private":true},"id":"method-addChartListener"},{"name":"destroy","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{"private":true},"id":"method-destroy"},{"name":"doSync","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{"private":true},"id":"method-doSync"},{"name":"getChart","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{},"id":"method-getChart"},{"name":"getEnabled","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{},"id":"method-getEnabled"},{"name":"getGesture","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{},"id":"method-getGesture"},{"name":"getGestures","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{"private":true},"id":"method-getGestures"},{"name":"getItemForEvent","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{"protected":true},"id":"method-getItemForEvent"},{"name":"getItemId","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{"private":true},"id":"method-getItemId"},{"name":"getItemsForEvent","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{"protected":true},"id":"method-getItemsForEvent"},{"name":"getLocks","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{"private":true},"id":"method-getLocks"},{"name":"initialize","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{"protected":true},"id":"method-initialize"},{"name":"initializeDefaults","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{"private":true},"id":"method-initializeDefaults"},{"name":"isMultiTouch","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{"private":true},"id":"method-isMultiTouch"},{"name":"isXType","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{"private":true},"id":"method-isXType"},{"name":"lockEvents","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{"private":true},"id":"method-lockEvents"},{"name":"onGesture","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{"protected":true},"id":"method-onGesture"},{"name":"removeChartListener","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{"private":true},"id":"method-removeChartListener"},{"name":"setChart","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{},"id":"method-setChart"},{"name":"setEnabled","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{},"id":"method-setEnabled"},{"name":"setGesture","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{},"id":"method-setGesture"},{"name":"sync","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{"private":true},"id":"method-sync"},{"name":"unlockEvents","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{"private":true},"id":"method-unlockEvents"},{"name":"updateChart","tagname":"method","owner":"Ext.chart.interactions.Abstract","meta":{"private":true},"id":"method-updateChart"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"Abstract.js","href":"Abstract.html#Ext-chart-interactions-Abstract"}],"html_meta":{},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base"],"subclasses":["Ext.chart.interactions.CrossZoom","Ext.chart.interactions.ItemInfo"],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><strong>Ext.chart.interactions.Abstract</strong></div></div><h4>Mixins</h4><div class='dependency'>Ext.mixin.Observable</div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.chart.interactions.CrossZoom' rel='Ext.chart.interactions.CrossZoom' class='docClass'>Ext.chart.interactions.CrossZoom</a></div><div class='dependency'><a href='#!/api/Ext.chart.interactions.ItemInfo' rel='Ext.chart.interactions.ItemInfo' class='docClass'>Ext.chart.interactions.ItemInfo</a></div><h4>Files</h4><div class='dependency'><a href='source/Abstract.html#Ext-chart-interactions-Abstract' target='_blank'>Abstract.js</a></div></pre><div class='doc-contents'><p>Defines a common abstract parent class for all interactions.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-chart' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-cfg-chart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-cfg-chart' class='name not-expandable'>chart</a><span> : <a href=\"#!/api/Ext.chart.AbstractChart\" rel=\"Ext.chart.AbstractChart\" class=\"docClass\">Ext.chart.AbstractChart</a></span></div><div class='description'><div class='short'><p>The chart that the interaction is bound.</p>\n</div><div class='long'><p>The chart that the interaction is bound.</p>\n</div></div></div><div id='cfg-enabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-cfg-enabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-cfg-enabled' class='name expandable'>enabled</a><span> : Boolean</span></div><div class='description'><div class='short'>'true' if the interaction is enabled. ...</div><div class='long'><p>'true' if the interaction is enabled.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-gesture' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-cfg-gesture' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-cfg-gesture' class='name expandable'>gesture</a><span> : String</span></div><div class='description'><div class='short'>Specifies which gesture type should be used for starting the interaction. ...</div><div class='long'><p>Specifies which gesture type should be used for starting the interaction.</p>\n<p>Defaults to: <code>'tap'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-stopAnimationBeforeSync' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-property-stopAnimationBeforeSync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-property-stopAnimationBeforeSync' class='name expandable'>stopAnimationBeforeSync</a><span> : Boolean</span><strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='property-throttleGap' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-property-throttleGap' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-property-throttleGap' class='name expandable'>throttleGap</a><span> : Number</span></div><div class='description'><div class='short'>Android device is emerging too many events so if we re-render every frame it will take for-ever to finish a frame. ...</div><div class='long'><p>Android device is emerging too many events so if we re-render every frame it will take for-ever to finish a frame.\nThis throttle technique will limit the timespan between two frames.</p>\n<p>Defaults to: <code>0</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.chart.interactions.Abstract-method-constructor' class='name expandable'>Ext.chart.interactions.Abstract</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.chart.interactions.Abstract\" rel=\"Ext.chart.interactions.Abstract\" class=\"docClass\">Ext.chart.interactions.Abstract</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.chart.interactions.Abstract\" rel=\"Ext.chart.interactions.Abstract\" class=\"docClass\">Ext.chart.interactions.Abstract</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addChartListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-addChartListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-addChartListener' class='name expandable'>addChartListener</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-destroy' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-destroy' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-destroy' class='name expandable'>destroy</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-doSync' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-doSync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-doSync' class='name expandable'>doSync</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getChart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-cfg-chart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-getChart' class='name expandable'>getChart</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.chart.AbstractChart\" rel=\"Ext.chart.AbstractChart\" class=\"docClass\">Ext.chart.AbstractChart</a></div><div class='description'><div class='short'>Returns the value of chart. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.chart.interactions.Abstract-cfg-chart\" rel=\"Ext.chart.interactions.Abstract-cfg-chart\" class=\"docClass\">chart</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.chart.AbstractChart\" rel=\"Ext.chart.AbstractChart\" class=\"docClass\">Ext.chart.AbstractChart</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEnabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-cfg-enabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-getEnabled' class='name expandable'>getEnabled</a>( <span class='pre'></span> ) : Boolean</div><div class='description'><div class='short'>Returns the value of enabled. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.chart.interactions.Abstract-cfg-enabled\" rel=\"Ext.chart.interactions.Abstract-cfg-enabled\" class=\"docClass\">enabled</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>Boolean</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getGesture' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-cfg-gesture' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-getGesture' class='name expandable'>getGesture</a>( <span class='pre'></span> ) : String</div><div class='description'><div class='short'>Returns the value of gesture. ...</div><div class='long'><p>Returns the value of <a href=\"#!/api/Ext.chart.interactions.Abstract-cfg-gesture\" rel=\"Ext.chart.interactions.Abstract-cfg-gesture\" class=\"docClass\">gesture</a>.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'>String</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getGestures' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-getGestures' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-getGestures' class='name expandable'>getGestures</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getItemForEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-getItemForEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-getItemForEvent' class='name expandable'>getItemForEvent</a>( <span class='pre'>e</span> ) : Object<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Find and return a single series item corresponding to the given event,\nor null if no matching item is found. ...</div><div class='long'><p>Find and return a single series item corresponding to the given event,\nor null if no matching item is found.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'><p>the item object or null if none found.</p>\n</div></li></ul></div></div></div><div id='method-getItemId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-getItemId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-getItemId' class='name expandable'>getItemId</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-getItemsForEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-getItemsForEvent' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-getItemsForEvent' class='name expandable'>getItemsForEvent</a>( <span class='pre'>e</span> ) : Array<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Find and return all series items corresponding to the given event. ...</div><div class='long'><p>Find and return all series items corresponding to the given event.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>e</span> : Event<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Array</span><div class='sub-desc'><p>array of matching item objects</p>\n</div></li></ul></div></div></div><div id='method-getLocks' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-getLocks' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-getLocks' class='name expandable'>getLocks</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-initialize' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-initialize' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-initialize' class='name expandable'>initialize</a>( <span class='pre'></span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>A method to be implemented by subclasses where all event attachment should occur. ...</div><div class='long'><p>A method to be implemented by subclasses where all event attachment should occur.</p>\n</div></div></div><div id='method-initializeDefaults' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-initializeDefaults' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-initializeDefaults' class='name expandable'>initializeDefaults</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-isMultiTouch' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-isMultiTouch' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-isMultiTouch' class='name expandable'>isMultiTouch</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-isXType' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-isXType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-isXType' class='name expandable'>isXType</a>( <span class='pre'>xtype</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>xtype</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-lockEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-lockEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-lockEvents' class='name expandable'>lockEvents</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-onGesture' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-onGesture' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-onGesture' class='name expandable'>onGesture</a>( <span class='pre'></span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'>Placeholder method. ...</div><div class='long'><p>Placeholder method.</p>\n</div></div></div><div id='method-removeChartListener' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-removeChartListener' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-removeChartListener' class='name expandable'>removeChartListener</a>( <span class='pre'>chart</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>chart</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setChart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-cfg-chart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-setChart' class='name expandable'>setChart</a>( <span class='pre'>chart</span> )</div><div class='description'><div class='short'>Sets the value of chart. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.chart.interactions.Abstract-cfg-chart\" rel=\"Ext.chart.interactions.Abstract-cfg-chart\" class=\"docClass\">chart</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>chart</span> : <a href=\"#!/api/Ext.chart.AbstractChart\" rel=\"Ext.chart.AbstractChart\" class=\"docClass\">Ext.chart.AbstractChart</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setEnabled' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-cfg-enabled' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-setEnabled' class='name expandable'>setEnabled</a>( <span class='pre'>enabled</span> )</div><div class='description'><div class='short'>Sets the value of enabled. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.chart.interactions.Abstract-cfg-enabled\" rel=\"Ext.chart.interactions.Abstract-cfg-enabled\" class=\"docClass\">enabled</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>enabled</span> : Boolean<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-setGesture' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-cfg-gesture' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-setGesture' class='name expandable'>setGesture</a>( <span class='pre'>gesture</span> )</div><div class='description'><div class='short'>Sets the value of gesture. ...</div><div class='long'><p>Sets the value of <a href=\"#!/api/Ext.chart.interactions.Abstract-cfg-gesture\" rel=\"Ext.chart.interactions.Abstract-cfg-gesture\" class=\"docClass\">gesture</a>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>gesture</span> : String<div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-sync' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-sync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-sync' class='name expandable'>sync</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-unlockEvents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-unlockEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-unlockEvents' class='name expandable'>unlockEvents</a>( <span class='pre'></span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-updateChart' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.chart.interactions.Abstract'>Ext.chart.interactions.Abstract</span><br/><a href='source/Abstract.html#Ext-chart-interactions-Abstract-method-updateChart' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.chart.interactions.Abstract-method-updateChart' class='name expandable'>updateChart</a>( <span class='pre'>newChart, oldChart</span> )<strong class='private signature' >private</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>newChart</span> : Object<div class='sub-desc'>\n</div></li><li><span class='pre'>oldChart</span> : Object<div class='sub-desc'>\n</div></li></ul></div></div></div></div></div></div></div>"});