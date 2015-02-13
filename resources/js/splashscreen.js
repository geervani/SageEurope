/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 13/11/13
 *
 * @class MyClass
 *
 * Description
 */

// Wait for device API libraries to load
document.addEventListener("deviceready", onDeviceReady, false);

// device APIs are available
function onDeviceReady() {
    var show = function () {
        if (navigator && navigator.splashscreen && navigator.splashscreen.show) {
            navigator.splashscreen.show();
        }
        else
        //<feature logger>
        {
            Ext.Logger.warn("splashscreen show is not defined");
        }
        //</feature>
    }
    var hide = function () {
        if (navigator && navigator.splashscreen && navigator.splashscreen.hide) {
            navigator.splashscreen.hide();
        }
        else
        //<feature logger>
        {
            Ext.Logger.warn("splashscreen hide is not defined");
        }
        //</feature>
    }
    setTimeout(function () {
        hide();
    }, 4000);
    show();
}