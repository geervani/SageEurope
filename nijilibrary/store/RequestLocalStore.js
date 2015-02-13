/**
 * @author Pierre Despagne <pierre.despagne@niji.fr>
 * @docauthor Pierre Despagne <pierre.despagne@niji.fr>
 * @class NijiLibrary.store.RequestLocalStore
 *
 */
Ext.define('NijiLibrary.store.RequestLocalStore', {
    extend: "Ext.data.Store",
    requires: [
        'Ext.data.proxy.LocalStorage',
        'NijiLibrary.model.Request'
    ],
    config: {
        storeId: 'RequestLocalStore',
        model: 'NijiLibrary.model.Request',
        proxy: {
            type: "localstorage",
            id: 'localStorageId'
        }
    }
});