
/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 25/09/13
 *
 * @class SageCME.model.Custommer
 *
 * This model contains Customer Hermes data
 */

Ext.define('SageCME.model.List', {
    extend : 'Ext.data.Model',


    config : {
        /**
         *
         */
        fields : [
            { name : '$key', type : 'string'   },
            { name : 'title', type : 'string'}
        ],

        /**
         *
         */
        idProperty : '$key'
    }
});