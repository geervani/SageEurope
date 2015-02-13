/*global HermesJS,HermesJSManager, I18n */
/**
 * Created by Niji
 * User: Mickael GUESDON
 * Date: 30/09/13
 *
 * @author Mickael GUESDON <mickael.guesdon@niji.fr>
 * @author othman LABZAR  <othman.labzar@sage.com>
 * @docauthor Mickael GUESDON <mickael.guesdon@niji.fr>
 *
 * @class SageCME.controller.KpiDetailController"
 *
 * Description
 */


Ext.define('SageCME.controller.main.KpiDetailController', {
	extend   : 'Ext.app.Controller',
	requires : [
		'SageCME.view.KPIDetail',
		'Ext.device.Connection',
		'SageCME.view.main.KpiFavorite'
	],

	config              : {
		userEmail: null,
		refs    : {
			kpiDetail   : 'kpi-detail',
			dashboard : 'dashboard',
			kpiFavorite : 'kpi-favorite',
			dataviz     : 'dataviz',
			closeButton : '#kpi-details-reset-button',
			favoriteButton : '#favorite-kpi-button',
			addPeriod : 'PanelPrompt #Prompt2',
			removePeriod: 'PanelPrompt #RemovePeriod2',
			validate: 'PanelPrompt button[itemId=ValiDate]',
			cancel: 'PanelPrompt button[itemId=Cancel]',
			panelPrompt:'PanelPrompt'
		},
		control : {
			favoriteButton :{
				tap : 'onFavoriteButtonTap'
			},
			closeButton : {
				tap : 'onResetButtonTap'
			},
			dataviz     : {
				itemtap : 'onDatavizItemTapped'
			},
			kpiDetail: {
				show: 'onShow',
				updateshortcut : 'onUpdateShortcut',
				goHome:'goHome'
			},
			HermesJSManager : {
				ready : 'onHermesJSready',
				executekpiqueryfailed: 'onKPIQueryFailed'
			},
			addPeriod :{
				tap : 'addSecondPeriod'
			},
			removePeriod :{
				tap: 'removeSecondPeriod'
			},
			validate :{
				tap:'validateName'
			},
			cancel :{
				tap:'cancelName'
			}
		}
	},
		/* jshint -W101 */


	goHome : function(){

		this.redirectTo('home');

	},
	/**
	 * Add second Period for KPI
	 *
	 * */
	addSecondPeriod:function(button) {
	    var kpiDetail = this.getKpiDetail(),
	    kpiDetailDefault = kpiDetail.self.kpiDetailDefault,
	    shortcut = kpiDetailDefault.getShortcut(),
	    panelDate = kpiDetailDefault.self.panel,
	    metadatamodelPeriods = HermesJSManager.metadatamodel.periods;

	    button.destroy();
	    shortcut.detail.def.periods.push(metadatamodelPeriods[0]);
	    kpiDetailDefault.createDateIntervalElement(panelDate,metadatamodelPeriods, shortcut.detail.def.periods[1],1,true);


	    kpiDetailDefault.updateDataviz();

	},
  /**
   * Remove second Period for KPI
   * @author youssef zine el abidine <youssef.zineelabidine@sage.com>
   * 
   */

	removeSecondPeriod:function(button) {

	    var kpiDetail = this.getKpiDetail(),
	    kpiDetailDefault = kpiDetail.self.kpiDetailDefault,

	    panelDate = kpiDetailDefault.self.panel,
	    shortcut = kpiDetailDefault.getShortcut();

	    shortcut.detail.def.periods.splice(1,1);
	    button.destroy();

	    panelDate.destroy();
	    kpiDetailDefault.self.Panel=null;
	    
	    kpiDetailDefault.updateDataviz();

	},

	/**
	 * to  decline the name of a shortcut 
	 * @author youssef zine el abidine <youssef.zineelabidine@sage.com>
	 * 
	 */
	cancelName :function() {
		var panelDate = this.recuperatePanelPrompt();
		panelDate.destroy();

	},
	recuperatePanelPrompt:function() {
		var kpiDetail = this.getKpiDetail(),
		kpiDetailDefault = kpiDetail.self.kpiDetailDefault;

		return kpiDetailDefault.self.panelPromptName;

	},
		
	/**
	 * to validate the name of  a customized shortcut 
	 * @author youssef zine el abidine <youssef.zineelabidine@sage.com>
	 * 
	 */
	validateName : function(){

		var kpiDetail = this.getKpiDetail(),config,
		panelPrompt = this.recuperatePanelPrompt(),
		kpiDetailDefault = kpiDetail.self.kpiDetailDefault,
		nameKPI = panelPrompt.down('#name').getValue(),
		shortcut = kpiDetailDefault.getShortcut(),
		dashboardKey;

		if (this.getDashboard()) {
			dashboardKey = this.getDashboard().getDashboardName();
		}else if (this.getKpiFavorite()) {
			dashboardKey = this.getKpiFavorite().self.DASHBOARD_NAME;
		}

		if(nameKPI.length===0) {
			Ext.Msg.alert( I18n.translate('message.alert') , I18n.translate('kpi.setName'));

		}
		else {

			panelPrompt.destroy();
			kpiDetailDefault.setMasked({
				xtype : 'loadmask',
				message : I18n.translate('semanticZoom.processing')
			});
			/* jshint -W101 */
			config = {
				'title':nameKPI,
				'detail' : {
					'prompts' : shortcut.detail.prompts,
					'def'     : {
						'periods' : shortcut.detail.def.periods,
					},
					
				}
			};

			HermesJS.duplicateShortCut(shortcut,config,true,dashboardKey,true).then(function(item){
				item.detail.periodSaved = shortcut.detail.def.periods;
				item.detail.promptSaved = shortcut.detail.prompts;
			/* jshint +W101 */
				kpiDetailDefault.setMasked(false);
				

			},function(){
				kpiDetailDefault.setMasked(false);
				Ext.Msg.alert(I18n.translate('message.alert') ,I18n.translate('expenses.errmess.cannotCreateUpdate'));
			});
		}


	},
	
	onShow : function () {

		var userEmail = this.getUserEmail(),
			btnsToHide,
			disable, demoEmails,
			kpiDetail = this.getKpiDetail(),
			i;

		demoEmails = HermesJS.getConfig('$options.modules.kpiDetails.disableActions.emails');
		disable = HermesJS.getConfig('$options.modules.kpiDetails.disableActions.disable');
		
		if (this.getDashboard()) {
			kpiDetail.self.dashboardKey = this.getDashboard().getDashboardName();
		}else if (this.getKpiFavorite()) {
			kpiDetail.self.dashboardKey = this.getKpiFavorite().self.DASHBOARD_NAME;
		}

		/* test on user email: case it match demo email it hide save, save as & delete KPI buttons */
		if( disable && Ext.Array.contains(demoEmails,userEmail) ){

			btnsToHide = Ext.ComponentQuery.query('button[data-hide-on-demo="yes"]');

			for (i = 0; i < btnsToHide.length ; i++){
				btnsToHide[i].hide();
			}
		}
	},

	onUpdateShortcut : function(shortcut){
		var favoriteButton = this.getFavoriteButton();

		if(shortcut.favorite){
			favoriteButton.setIconCls('kpi-detail-favoriButton');
		}else{
			favoriteButton.setIconCls('kpi-detail-NonfavoriButton');
		}
	},

	onFavoriteButtonTap : function(){
		var kpiDetail = this.getKpiDetail(),
		online = Ext.device.Connection.isOnline(),
		kpiDetailDefault = kpiDetail.self.kpiDetailDefault,
		shortcut = kpiDetailDefault.getShortcut(),
		dashboardKey,
		favoriteButton = this.getFavoriteButton();

		if (this.getDashboard()) {
			dashboardKey = this.getDashboard().getDashboardName();
		}else if (this.getKpiFavorite()) {
			dashboardKey = this.getKpiFavorite().self.DASHBOARD_NAME;
		}

		if(!online) {
			Ext.Msg.alert(HermesJS.i18nGet('favorite_add_offline_title'),HermesJS.i18nGet('favorite_add_offline_message'));
		} else {

			kpiDetailDefault.setMasked({
				xtype : 'loadmask',
				message : I18n.translate('semanticZoom.processing')
			});
			
			if (this.getDashboard()) {
				kpiDetail.self.dashboardKey = this.getDashboard().getDashboardName();
			}else if (this.getKpiFavorite()) {
				kpiDetail.self.dashboardKey = this.getKpiFavorite().self.DASHBOARD_NAME;
			}

			if(shortcut.favorite){
				HermesJS.updateShortcut(dashboardKey, shortcut.$key, {favorite:false})
				.then(function(){
					favoriteButton.setIconCls('kpi-detail-NonfavoriButton');
					kpiDetailDefault.setMasked(false);
				});
			}else{
				HermesJS.updateShortcut(dashboardKey, shortcut.$key, {favorite:true})
				.then(function(){
					favoriteButton.setIconCls('kpi-detail-favoriButton');
					kpiDetailDefault.setMasked(false);
				});
			}
		}
	},

	onResetButtonTap    : function () {
		this.getKpiDetail().didResetPrompts();
	},

	onDatavizItemTapped : function (dataviz, resourceKind, uid) {
		if (resourceKind === 'customer') {
			this.getApplication().redirectTo('customer-detail/' + uid);
		}
	},

	onKPIQueryFailed: function(kpi){
		kpi.showError();
	},

	onHermesJSready : function (rootLinks, userDetails) {
		if(this.getKpiDetail()){
			this.getKpiDetail().updateDataviz();
		}

		this.setUserEmail(userDetails.email);


	}
});