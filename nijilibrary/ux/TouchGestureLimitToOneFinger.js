

/**
 * Fix which avoid SVG interaction to block app touches
 * note: may prevent more than one simultaneous touch
 */
Ext.define('NijiLibrary.ux.TouchGestureLimitToOneFinger', {
    override : 'Ext.event.publisher.TouchGesture',

    constructor: function() {
        //<feature logger>
        Ext.Logger.info("NijiLibrary.ux.TouchGestureLimitToOneFinger is restricting touch to one finger");
        //</feature>
        return this.callOverridden(arguments);
    },
    updateTouch : function (touch) {
        var ret = this.callOverridden(arguments);
        //limit interaction to one finger
        if (this.currentIdentifiers.length > 1) {
            this.currentIdentifiers.splice(0, this.currentIdentifiers.length - 1);
        }
        return ret;
    }
});
