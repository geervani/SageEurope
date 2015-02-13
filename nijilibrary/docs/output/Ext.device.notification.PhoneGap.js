Ext.data.JsonP.Ext_device_notification_PhoneGap({"tagname":"class","name":"Ext.device.notification.PhoneGap","extends":"Ext.device.notification.Abstract","mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":["Ext.device.Communicator"],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"private":true},"private":true,"id":"class-Ext.device.notification.PhoneGap","code_type":"ext_define","members":{"cfg":[],"property":[],"method":[{"name":"show","tagname":"method","owner":"Ext.device.notification.PhoneGap","meta":{},"id":"method-show"},{"name":"vibrate","tagname":"method","owner":"Ext.device.notification.PhoneGap","meta":{},"id":"method-vibrate"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":1,"files":[{"filename":"PhoneGap.js","href":"PhoneGap2.html#Ext-device-notification-PhoneGap"}],"html_meta":{"private":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":["Ext.Base","Ext.device.notification.Abstract"],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'>Ext.Base<div class='subclass '><a href='#!/api/Ext.device.notification.Abstract' rel='Ext.device.notification.Abstract' class='docClass'>Ext.device.notification.Abstract</a><div class='subclass '><strong>Ext.device.notification.PhoneGap</strong></div></div></div><h4>Requires</h4><div class='dependency'>Ext.device.Communicator</div><h4>Files</h4><div class='dependency'><a href='source/PhoneGap2.html#Ext-device-notification-PhoneGap' target='_blank'>PhoneGap.js</a></div></pre><div class='doc-contents'><p class='private'><strong>NOTE</strong> This is a private utility class for internal use by the framework. Don't rely on its existence.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-show' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.notification.PhoneGap'>Ext.device.notification.PhoneGap</span><br/><a href='source/PhoneGap2.html#Ext-device-notification-PhoneGap-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.notification.PhoneGap-method-show' class='name expandable'>show</a>( <span class='pre'>config</span> )</div><div class='description'><div class='short'>A simple way to show a notification. ...</div><div class='long'><p>A simple way to show a notification.</p>\n\n<pre><code>Ext.device.Notification.show({\n   title: 'Verification',\n   message: 'Is your email address is: test@sencha.com',\n   buttons: Ext.MessageBox.OKCANCEL,\n   callback: function(button) {\n       if (button == \"ok\") {\n           console.log('Verified');\n       } else {\n           console.log('Nope.');\n       }\n   }\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'><p>An object which contains the following config options:</p>\n\n\n\n<ul><li><span class='pre'>title</span> : String<div class='sub-desc'><p>The title of the notification</p>\n\n\n\n</div></li><li><span class='pre'>message</span> : String<div class='sub-desc'><p>The message to be displayed on the notification</p>\n\n\n\n</div></li><li><span class='pre'>buttons</span> : String/String[] (optional)<div class='sub-desc'><p>The buttons to be displayed on the notification. It can be a string, which is the title of the button, or an array of multiple strings.\nPlease not that you should not use more than 2 buttons, as they may not be displayed correct on all devices.</p>\n\n\n\n<p>Defaults to: <code>&quot;OK&quot;</code></p></div></li><li><span class='pre'>callback</span> : Function<div class='sub-desc'><p>A callback function which is called when the notification is dismissed by clicking on the configured buttons.</p>\n\n\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>buttonId</span> : String<div class='sub-desc'><p>The id of the button pressed, one of: 'ok', 'yes', 'no', 'cancel'.</p>\n\n\n\n</div></li></ul></div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope of the callback function</p>\n\n\n\n</div></li></ul></div></li></ul><p>Overrides: <a href='#!/api/Ext.device.notification.Abstract-method-show' rel='Ext.device.notification.Abstract-method-show' class='docClass'>Ext.device.notification.Abstract.show</a></p></div></div></div><div id='method-vibrate' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.device.notification.PhoneGap'>Ext.device.notification.PhoneGap</span><br/><a href='source/PhoneGap2.html#Ext-device-notification-PhoneGap-method-vibrate' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.device.notification.PhoneGap-method-vibrate' class='name expandable'>vibrate</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Vibrates the device. ...</div><div class='long'><p>Vibrates the device.</p>\n<p>Overrides: <a href='#!/api/Ext.device.notification.Abstract-method-vibrate' rel='Ext.device.notification.Abstract-method-vibrate' class='docClass'>Ext.device.notification.Abstract.vibrate</a></p></div></div></div></div></div></div></div>"});