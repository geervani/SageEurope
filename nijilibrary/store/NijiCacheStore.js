/**
 * @author Francois Esnault <francois.esnault@niji.fr>
 * @docauthor Francois Esnault <francois.esnault@niji.fr>
 * @class NijiLibrary.store.NijiCacheStore
 *
 * NijiCacheStore
 */

Ext.define('NijiLibrary.store.NijiCacheStore', {
    extend   : 'Ext.data.Store',

    alias: 'widget.NijiCacheStore',

    config : {
        /**
         *  @cfg
         *  Temps de validité des données (en millisecondes). Temps pendant lequel les données
         *  du local storage seront chargées dans le store et non celles du flux,
         *  même s'il y a bien une connexion réseau
         */
        dureeAvantMaj: 0,

        internalProxy: {
            type: 'localstorage'
        }
    },

    /**
     * Set le proxy interne avec les valeurs de la config
     * @param proxy
     * @param currentProxy
     * @return {*}
     */
    applyInternalProxy: function(proxy, currentProxy){
        proxy = Ext.factory(proxy, Ext.data.Proxy, currentProxy, 'proxy');

        if (!proxy && this.getModel()) {
            proxy = this.getModel().getProxy();
        }

        if (!proxy) {
            proxy = new Ext.data.proxy.Memory({
                                                  model: this.getModel()
                                              });
        }

        if (proxy.isMemoryProxy) {
            this.setSyncRemovedRecords(false);
        }
        return proxy;
    },

    /**
     * Fonction de chargement des données. Charge les données du flux ou celles du local storage
     * selon la connexion à un réseau, le forcage et le temps de validité des données
     * @param options Idem fonction load() de Ext.data.Store
     * @param scope Idem fonction load() de Ext.data.Store
     * @param forcage {boolean} Sert à forcer la lecture du flux même si
     * le temps de validité des données n'est pas dépassé
     * @return Idem fonction load() de Ext.data.Store
     */
    load: function(options, scope, forcage){
        var me = this,
            operation,
            currentPage = me.currentPage,
            pageSize = me.getPageSize();

        options = options || {};

        if (Ext.isFunction(options)) {
            options = {
                callback: options,
                scope: scope || this
            };
        }

        if (me.getRemoteSort()) {
            options.sorters = options.sorters || this.getSorters();
        }

        if (me.getRemoteFilter()) {
            options.filters = options.filters || this.getFilters();
        }

        if (me.getRemoteGroup()) {
            options.grouper = options.grouper || this.getGrouper();
        }

        Ext.applyIf(options, {
            page: currentPage,
            start: (currentPage - 1) * pageSize,
            limit: pageSize,
            addRecords: false,
            action: 'read',
            model: this.getModel()
        });

        operation = Ext.create('Ext.data.Operation', options);

        //Ajout manuel du model au proxy interne, car il n'est pas setter dans l'option
        me.getInternalProxy().setModel(this.getModel());

        if (me.fireEvent('beforeload', me, operation) !== false) {
            me.loading = true;

            //durée récupérée de la config du store
            var dureeMAJ = me.getDureeAvantMaj(),
            //récupération de la date de dernière MAJ du local storage
                dateDerniereMAJ = localStorage.getItem('dateDerniereMAJ'),
            //vérification si présence d'une date de dernière MAJ du local storage
                dateMajPresente = (dateDerniereMAJ != null),
            //Calcul de la durée depuis la dernière MAJ du local storagepas
                dureeDepuisDerniereMAJ = new Date().getTime() - dateDerniereMAJ;

            //si présence d'une connexion réseau ou si le forcage est activé, on charge les données du flux
            if(Ext.device.Connection.isOnline() && ((!dateMajPresente || dureeDepuisDerniereMAJ > dureeMAJ)|| forcage)){
                //On vide le local Storage
                localStorage.clear();
                //On lit les données du flux
                me.getProxy().read(operation, me.onProxyLoad, me);
                //On met à jour la date de dernière MAJ du local storage
                localStorage.setItem('dateDerniereMAJ', new Date().getTime());
            }
            //si pas de réseau, ou le temps défini en config(duree_avant_maj) n'est pas dépassé,
            //on charge les données du local storage
            else{
                me.getInternalProxy().read(operation, me.onProxyLoad, me);
            }

        }
        return me;
    },

    /**
     * Synchonise le local storage avec les données du store
     * @return {Object} Idem fonction sync() de Ext.data.Store
     */
    cacheSync: function(){
        var me = this,
            operations = {},
            toCreate = me.getNewRecords(),
            toUpdate = me.getUpdatedRecords(),
            toDestroy = me.getRemovedRecords(),
            needsSync = false;

        if (toCreate.length > 0) {
            operations.create = toCreate;
            needsSync = true;
        }

        if (toUpdate.length > 0) {
            operations.update = toUpdate;
            needsSync = true;
        }

        if (toDestroy.length > 0) {
            operations.destroy = toDestroy;
            needsSync = true;
        }

        if (needsSync && me.fireEvent('beforesync', this, operations) !== false) {
            me.getInternalProxy().batch({
                                            operations: operations,
                                            listeners: me.getBatchListeners()
                                        });
        }

        return {
            added: toCreate,
            updated: toUpdate,
            removed: toDestroy
        };
    },

    /**
     * Execute la méthode insert() de Ext.data.Store, puis synchronise le local storage
     * avec les valeurs du store
     * @param index Idem fonction insert() de Ext.data.Store
     * @param records Idem fonction insert() de Ext.data.Store
     */
    insert: function(index, records) {
        this.callParent(arguments);
        //Appel de la méthode de synchronisation du local storage pour ajouter
        //éléments lus dans le flux
        this.cacheSync();
    },

    /**
     * Execute la méthode remove() de Ext.data.Store, puis synchronise le local storage
     * avec les valeurs du store
     * @param records Idem fonction remove() de Ext.data.Store
     */
    remove: function(records) {
        this.callParent(arguments);
        //Appel de la méthode de synchronisation du local storage pour supprimer
        //les élements supprimés
        this.cacheSync();
    }
});