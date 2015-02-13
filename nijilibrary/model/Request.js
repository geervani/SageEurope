/**
 * @author Pierre Despagne <pierre.despagne@niji.fr>
 * @docauthor Pierre Despagne <pierre.despagne@niji.fr>
 * @class NijiLibrary.model.Request
 * 
 * 
 */
Ext.define('NijiLibrary.model.Request', {
    extend: 'Ext.data.Model',


    config: {
        identifier:'uuid',
        idProperty : 'id',
        fields:[
            {
                name: 'request',
                type: 'string'
            },{
                name: 'answer',
                type: 'string'
            },{
                name: 'nbRequestBeforeRefresh',
                type: 'integer'
            }
        ]
    }
});