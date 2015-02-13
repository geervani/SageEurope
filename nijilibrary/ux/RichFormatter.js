/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 03/10/13
 * @class NijiLibrary.ux.RichFormatter
 * improves message logging
 * @override
 */
//<feature logger>
Ext.define('NijiLibrary.ux.RichFormatter', {
    override : 'Ext.log.formatter.Formatter',

    config: {
        messageFormat: "[{humanTime}][{priorityName}][{callerDisplayName}] {message}"
    },

    format: function(event) {
        if (Ext.isArray(event.message)) {
            event.data = event.message;
            event.message = event.message[0];
            event.data.splice(0,1);
        }

        var date = new Date(event.time),
            e = Ext.merge({}, event, {
                priorityName: event.priorityName.toUpperCase(),
                humanTime: date.getHours()+":"+date.getMinutes()+":"+date.getSeconds()+","+date.getMilliseconds()
            });

        return this.callOverridden([e]);
    }
});
//</feature>