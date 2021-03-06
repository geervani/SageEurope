cordova.define('cordova/plugin_list', function(require, exports, module) {
    module.exports = [
        {
            'file': 'plugins/org.apache.cordova.splashscreen/www/splashscreen.js',
            'id': 'org.apache.cordova.splashscreen.SplashScreen',
            'clobbers': [
                'navigator.splashscreen'
            ]
        },
        {
            'file': 'plugins/org.apache.cordova.inappbrowser/www/InAppBrowser.js',
            'id': 'org.apache.cordova.inappbrowser.InAppBrowser',
            'clobbers': [
                'window.open'
            ]
        },
        {
            'file': 'plugins/org.apache.cordova.network-information/www/network.js',
            'id': 'org.apache.cordova.network-information.network',
            'clobbers': [
                'navigator.connection',
                'navigator.network.connection'
            ]
        },
        {
            'file': 'plugins/org.apache.cordova.network-information/www/Connection.js',
            'id': 'org.apache.cordova.network-information.Connection',
            'clobbers': [
                'Connection'
            ]
        },
        {
            'file': 'plugins/com.phonegap.plugins.sqlite/www/SQLitePlugin.js',
            'id': 'com.phonegap.plugins.sqlite.SQLitePlugin',
            'clobbers': [
                'SQLitePlugin'
            ]
        }
    ];
});
