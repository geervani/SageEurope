/* global localStorage,Requester,_ */
/* global HermesJS, I18n,Q, cordova */
/* global setTimeout */
/* global HermesJSManager */
/* global myFailCallback */
/* global myFailCallback */





/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @author athman LABZAR  <othman.labzar@sage.com>
 * @date: 25/09/13
 *
 * @class SSageCME.singleton.HermesJSManager
 *
 * Kind of a wrapper tool for Hermes JS to make it sencha compliant
 */

Ext.define('SageCME.singleton.HermesJSManager', {
	alternateClassName : ['HermesJSManager'],
	singleton          : true,

	mixins : ['Ext.mixin.Observable'],

	requires : [
	],
	// statics :{
	// 	linkResource:null
	// },

	/**
	 * @event networkavailable
	 * Fires whenever the network is available
	 */

	/**
	 * @event networkunavailable
	 * Fires whenever the network is not available anymore
	 */

	/**
	 * @event syncstart
	 * Fires whenever Hermes sync started
	 */

	/**
	 * @event ready
	 * Fires whenever Hermes is ready to respond to your requests
	 */

	/**
	 * @event quit
	 * Fires whenever Hermes has been disconnected
	 */
	/*jshint -W101*/

	constructor : function () {
		this.callParent(arguments);
		this.initialize();
	},

	getI18nConfig:function(key){

		if (typeof HermesJS !== 'undefined'){
			var value = HermesJS.getConfig(key),
			local = I18n.localLanguage.split('-');
			if(local[0] && value && value.hasOwnProperty(local[0])){

				return value[local[0]];
			}
			else if( value && value.fr){
				return value.fr;
			}
			
		}
		else {
			return '';
		}

	},

	initialize : function () {
		var me=this;
		// avoid launch crash if HermesJSManager is not instanciated yet
		if (typeof HermesJS === 'undefined') {
			Ext.defer(this.initialize, 100, this);
			return;
		}
		// HermesJS.on('ready',function(res){
		// 	me.self.linkResource = res.resource.href;
		// });

		// HermesJS events listening
//        HermesJS.on("connexionFail", this.fireHermesEvent.bind(this, "authenticationfail"));
//        HermesJS.on("connexionWin", this.fireHermesEvent.bind(this, "authenticationwin"));
//        HermesJS.on("becameOnline", this.fireHermesEvent.bind(this, "becameonline"));
		HermesJS.on('networkChanged', function (status) {
			if (status.connectionStatus >= 6) {
				this.fireEvent('networkavailable', status.connectionStatus);
			} else {
//            	Ext.Msg.alert(HermesJS.i18nGet('connectionStatusTitle'+status.connectionStatus), HermesJS.i18nGet('connectionStatusMessage'+status.connectionStatus));
				this.fireEvent('networkunavailable', status.connectionStatus);
			}
		}.bind(this));
		HermesJS.on('ready', this.fireEvent.bind(this, 'ready'));
		HermesJS.on('quit', this.fireEvent.bind(this, 'quit'));

		document.addEventListener('online', this.checkIfOnline);
		document.addEventListener('offline', this.checkIfOnline);

		// check connectivity every 5 seconds to avoid any detection failure
		setInterval(this.checkIfOnline.bind(this), 20000);

		// only keep HermesJS logs in debug mode
		//<feature logger>
		//var hermesLogger = function () {Ext.Logger.info(arguments);};
		var hermesLogger = function () {};
		HermesJS.on('log', hermesLogger);
		//</feature>


		this.on('ready', function (one, userDetails, three, metaDataModel) {
			this.metadatamodel = metaDataModel;
			this.userdetails = userDetails;
			clearTimeout(this.connectTimeout);
			Ext.Viewport.setMasked(false);

		}, this);
		
		this.on('quit', function () {
			Ext.Viewport.setMasked(false);
		}, this);
	},

	paginatedData : function(queryString) {
		var itemsPerPage = 1000;

		Requester.getConnectionStatus();
		
		// add select parameter
		queryString = queryString+'&count=' + itemsPerPage;
				
		return Requester.getCachedQuery('DATA',queryString,{expires:300000000}).then(function(res){
			var startIndex = parseInt(res.$startIndex,10),
			obj2Return = { 'key': queryString, 'value': res };
			 //perform the pagination for the given resource
			if (parseInt(res.$totalResults,10) > itemsPerPage ) {
				startIndex = startIndex + itemsPerPage;
				return HermesJSManager.queryResourceWithPagination(queryString, itemsPerPage, startIndex, res.$totalResults)
				.then(function (data) {
								// add the data recuperated during the first request 
					Ext.Array.forEach(res.$resources,function(item){
						data.push(item);
					});
					obj2Return.value.$resources = data;
					return obj2Return;
				},function(){
					Ext.Msg.alert(I18n.translate('message.alert'),I18n.translate('expenses.errmess.loadError'));
				});
			} else {
				return obj2Return;
			}
		});

	},
	queryResourceWithPagination : function (queryString, pageSize, indexFrom, total) {
		var pages = [],i,
			pagesCount = Math.round(total / pageSize),
			results = [];
			
			

		if (pagesCount * pageSize < total) {
			pagesCount++;
		}
		// concatenate all queries in the array pages & use the queryResourcePage
		// to make all requests. 
		for ( i = 0; i < pagesCount-1 ; i++) {
			pages = pages.concat([HermesJSManager.queryResourcePage(queryString, pageSize, indexFrom)]);
			indexFrom += pageSize;
		}
		
		
		// iterate on all promises and return their data in results array
		if (queryString.indexOf('count') > 0) {
			return Q.all(pages).then(function (r) {
				_.each(r, function (slot) {
					results = results.concat(slot);
				});
				return results;
			});
		}   else {
			return [];
		}
	},
	// this method make a request using pageQuery
	queryResourcePage :function (pageQuery, pageSize, startIndex) {
		var url;
		url = pageQuery + '&order=$updated&startIndex=' + startIndex;
		
		return Requester.getCachedQuery('DATA',url,{expires:300000000}).then(function (res) {
			return res.$resources;
		});
	},

	sync : function (force) {
		if (typeof HermesJS !== 'undefined') {
			this.fireEvent('syncstart');
			HermesJS.sync(force);
		} else {
			setTimeout(this.sync.bind(this, force), 500);
		}
	},

	fireHermesEvent : function (event) {
		//<feature logger>
		Ext.Logger.info('Firing HermesJSManager event ' + event);
		//</feature>

		this.fireEvent(event.toLowerCase(), arguments, this);
	},

	connectTimeout         : null,
	connect                : function () {
		//<feature logger>
		Ext.Logger.deprecate('Connect is deprecated, use doConnect instead');
		//</feature>
		return this.doConnect.apply(this, arguments);
	},
	doConnect              : function () {
		if (this.isConnected()) {
			Ext.Msg.alert('Connexion déjà en place', 'Vous êtes déjà connecté.', Ext.emptyFn);
			this.fireEvent('ready', null, this.userdetails, null, this.metadatamodel);
		}
		else if (!this.isConnected() && (localStorage.getItem('authToken'))) {
			Ext.Viewport.setMasked(
				{
					xtype : 'loadmask',
				    message : I18n.translate('login.loading.fromRetry'),
				});
			this.sync(false);
		} else {
			Ext.Viewport.setMasked(
				{
					xtype : 'loadmask',
					message : I18n.translate('login.loading.fromRetry')
				});
			//Supprime le timeout
//            this.connectTimeout = Ext.defer(this.connectTimeoutCallback, 30000, this);
			this.sync(true);
		}
	},
	connectTimeoutCallback : function () {
		Ext.Viewport.setMasked(false);
		//Ext.Msg.alert(I18n.translate('message.alert') , I18n.translate('message.connectionFailed') , Ext.emptyFn);
	},

	disconnect : function () {
		//<feature logger>
		Ext.Logger.deprecate('disconnect is deprecated, use doQuit instead');
		//</feature>
		return this.doQuit.apply(this, arguments);
	},
	doQuit     : function () {
		var defer = Q.defer();

		HermesJS.on('quit', function () {
			defer.resolve();
		});

		if (typeof HermesJS !== 'undefined') {
			if (window.cordova !== undefined) {
				//Send disconnect to native
				cordova.exec(
					function () {
						HermesJS.disconnect();
					},
					defer.reject,
					'SageOauth',
					'logout',
					[]
				);
			} else {
				HermesJS.disconnect();
			}
		} else {
			setTimeout(this.doQuit.bind(this), 500);
		}
		
		return defer.promise;
	},

	isConnected : function () {
		if (typeof HermesJS !== 'undefined') {
			return HermesJS.isConnected();
		}
		else {
			return false;
		}
	},

	isOnline : function () {
		if (typeof HermesJS !== 'undefined') {
			return HermesJS.isOnline();
		}
		else {
			return false;
		}
	},

	executeKpiQuery : function (kpi, shortcut, mode, prompts, scope, successCallback, failCallback) {
		if (typeof HermesJS !== 'undefined') {
			var query = HermesJS.executeKpiQuery(kpi, shortcut, mode, prompts);

			// test to check if hermes has not returned data directly (if it is in cache)
			if (Ext.isArray(query)) {
				successCallback.call(scope, query);
			} else {
				if (!successCallback) {
					successCallback = function () {};
				}
				myFailCallback = function () {
					if (!failCallback) {
						failCallback.apply(scope, arguments);
					}
					HermesJSManager.fireEvent('executekpiqueryfailed', this, kpi, shortcut, mode, prompts, scope);
				};
				query.done(successCallback.bind(scope), myFailCallback.bind(scope));
			}
		} else {
			/* jshint -W101 */
			setTimeout(this.executeKpiQuery.bind(this, kpi, shortcut, mode, prompts, scope, successCallback, failCallback), 500);
			/* jshint +W101 */
		}
	},

	data : function (url, scope, successCallback, failCallback) {
		if (typeof HermesJS !== 'undefined') {
			var query = HermesJS.data(url);
			// test to check if hermes has not returned data directly (if it is in cache)
			if (Ext.isArray(query)) {
				successCallback.call(scope, query);
			} else {
				if (successCallback) {
					query.done(successCallback.bind(scope));
				}
				if (failCallback) {
					query.fail(failCallback.bind(scope));
				}
			}
		} else {
			setTimeout(this.data.bind(this, url, scope, successCallback, failCallback), 500);
		}
	},

	getResourceLists : function (options, scope, successCallback, failCallback) {
		if (typeof HermesJS !== 'undefined') {
			var query = HermesJS.getResourceLists(options);
			// test to check if hermes has not returned data directly (if it is in cache)
			if (Ext.isArray(query)) {
				successCallback.call(scope, query);
			} else {
				if (successCallback) {
					query.done(successCallback.bind(scope));
				}
				if (failCallback) {
					query.fail(failCallback.bind(scope));
				}
			}
		}
		else {
			/* jshint -W101 */
			setTimeout(this.getResourceLists.bind(this, options, scope, successCallback, failCallback), 500);
			/* jshint +W101 */
		}
	},
	resource         : function (options, scope, successCallback, failCallback) {
		if (typeof HermesJS !== 'undefined') {
			var query = HermesJS.resource(options);
			// test to check if hermes has not returned data directly (if it is in cache)
			if (Ext.isArray(query)) {
				successCallback.call(scope, query);
			} else {
				if (successCallback) {
					query.done(successCallback.bind(scope));
				}
				if (failCallback) {
					query.fail(failCallback.bind(scope));
				}
			}
		}
		else {
			/* jshint -W101 */
			setTimeout(this.getResourceLists.bind(this, options, scope, successCallback, failCallback), 500);
			/* jshint +W101 */
		}
	},

	loadPromptsValues : function (prompts, scope, successCallback, failCallback) {
		if (typeof HermesJS !== 'undefined') {
			var query = HermesJS.loadPromptsValues(prompts);
			// test to check if hermes has not returned data directly (if it is in cache)
			if (Ext.isArray(query)) {
				successCallback.call(scope, query);
			} else {
				if (successCallback) {
					query.done(successCallback.bind(scope));
				}
				if (failCallback) {
					query.fail(failCallback.bind(scope));
				}
			}
		}
		else {
			/* jshint -W101 */
			setTimeout(this.getResourceLists.bind(this, prompts, scope, successCallback, failCallback), 500);
			/* jshint +W101 */
		}
	},

	dataviz : function (options) {
		var result = [];

		if (typeof HermesJS !== 'undefined') {
			result = HermesJS.dataviz(options);
		}
		return result;
	},

	getKpi : function (shortcutKey) {
		var result = [];

		if (typeof HermesJS !== 'undefined') {
			result = HermesJS.getKpi(shortcutKey);
		}
		return result;
	},

	getShortcutsByDashboard : function (dashboardName) {

		var result = [];

		if (typeof HermesJS !== 'undefined') {
			result = HermesJS.getShortcutsByDashboard(dashboardName);
		}
		return result;
	},

	updateShortcut : function (dashboardKey, shortcutKey, changeSet) {
		if (typeof HermesJS !== 'undefined') {
			HermesJS.updateShortcut(dashboardKey, shortcutKey, changeSet);
		}
	},
	checkIfOnline  : function () {
		if (typeof HermesJS !== 'undefined') {
			//<feature logger>
			Ext.Logger.info('Checking Connectivity');
			//</feature>
			return HermesJS.checkIfOnline();
		}
	},

	isResourceFavorite : function (resourceKind, resourceKey) {
		if (typeof HermesJS !== 'undefined') {
			return HermesJS.isResourceFavorite(resourceKind, resourceKey);
		}
	}

});