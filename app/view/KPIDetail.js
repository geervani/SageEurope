/* global HermesJS,HermesJSManager, I18n, KPI, _*/

/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @author youssef zine el abidine <youssef.zineelabidine@sage.com>
 * @author layla ait laaraj <layla.aitllaraj@sage.com>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 18/10/13
 *
 * @class SageCME.view.KPIDetail
 *
 * A KPI Detail : a carousel which is filled up with dataviz created from a KPI
 */

Ext.define('SageCME.view.KPIDetail', {
	extend : 'SageCME.view.KPI',
	xtype  : 'kpi-detail',

	requires : [
		'Ext.carousel.Carousel',
		'SageCME.view.Dataviz',
		'SageCME.view.Prompt',
		'Ext.Button',
		'Ext.Spacer',
		'SageCME.singleton.HermesJSManager',
		'SageCME.view.KPISummary'
	],
	/* jshint -W101 */


	statics: {
		MODE_DETAIL  : 'detail',
		MODE_PREVIEW : 'preview',
		count :'preview',
		shortcutDefault :null,
		panel:null,
		saveAsShortcut:null,
		restore:null,
		dashboardKey : null,
		kpiDetailDefault:null,
		panelPromptName:null
	},

	config : {
		/**
		 * @config {Object} shortcut It is an hermes Shortcut object (which enables you to get a KPI)
		 */
		shortcut      : null,
		
		ClsButton :{
			'operatingCompanyNameForSalesCompanyName':'prompt-departements-button',
			'salesSalesSynthesisDocumentType':'prompt-docs-button',
			'salesSalesDocumentsDetailsSalesperson':'prompt-commerciaux-button',
			'companyForAccountingCompanyName':'prompt-departements-button',
			'itemsItemsGroupsItemGroupIdDescription':'prompt-departements-button',
			'tradingAccountTradingAccountAddressStateCode':'prompt-departements-button',
			'customerCustomersCommunicationCustomersAddressStateCode': 'prompt-commerciaux-button',
			'customerCustomersCommunicationCustomersAddressArea' : 'prompt-departements-button',
			'customerCustomerSynthesisCustomerPriceList':'prompt-commerciaux-button',
		},
		
		/**
		 * @config {string} describes the display mode : MODE_DETAIL ("detail") or MODE_PREVIEW ("preview")
		 */
		mode          : KPI.MODE_DETAIL,
		selectedIndex : null,
		cls           : ['kpi', 'detail',],

		listeners : [
			{
				event : 'resize',
				fn    : 'onResize'
			},
			{
				event : 'initialize',
				fn    : 'onInitialize'
			},
			{
				event:'tap',
				fn:'didResetPrompts',
				delegate:'#kpi-details-reset-button'

			},
			{
				event:'tap',
				fn:'saveShortcut',
				delegate:'#SaveButton'

			},
			{
				event:'tap',
				fn:'saveAsShortcut',
				delegate:'#SaveAsButton'

			},
			{
				event:'tap',
				fn:'restoreShortcut',
				delegate:'#RestoreButton'

			},
			{
				event:'tap',
				fn:'createDates',
				delegate:'#Prompt1'
			},
			{
				event:'tap',
				fn:'removeShrotcut',
				delegate:'#RemoveShrotcut'
			},
		],

		items : [
			{
				xtype : 'carousel',
				itemId : 'carousel',
				cls   : 'kpi-detail-carousel',

			},
			{
				xtype   : 'container',
				cls        : 'kpi-container',
				itemId     :  'kpi-container',
				layout     : {
					type : 'hbox'
				},
				docked     : 'bottom',
				scrollable : {
					direction     : 'horizontal',
					directionLock : true
				},
				/* to add a button to not be shown to the user demo.app@sage.com 
				 * add the property 'data-data-hide-on-demo' to its config
				 * & set this property to 'yes'
				 */
				items      : [
					{
						xtype:  'button',
						text:   'Rénitialiser',
						id:     'kpi-details-reset-button',
						cls:    'kpi-detail-Edit-reset'
					},
					{
						xtype:                      'button',
						text:                       'Enregistrer',
						'data-hide-on-demo':        'yes',
						itemId:                     'SaveButton',
						cls:                        'kpi-detail-Edit-save'
					},
					{
						xtype:                      'button',
						text:                       'Enregistrer Sous',
						'data-hide-on-demo':        'yes',
						itemId:                     'SaveAsButton',
						cls:                        'kpi-detail-Edit-save',
						// hidden:true
					},
					{

						xtype:                      'button',
						'data-hide-on-demo':        'yes',
						text:                       'Restaurer',
						itemId:                     'RestoreButton',
						cls:                        'kpi-detail-Edit-restore',
					},
					{
						xtype:  'button',
						itemId: 'Prompt1',
						text:   'Période d\'analyse',
						cls:    'kpi-detail-Edit-periods',
						hidden: true

					},
					{
						xtype:'button',
						itemId:'RemoveShrotcut',
						text: 'Supprimer l\'indicateur',

						cls: 'kpi-detail-Edit-removeShortcut',
						hidden:true

					},
					{
						xtype   : 'container',
						cls    : 'dateinterval-container',
						itemId :'dateinterval-container',
						layout : {
							type : 'hbox'
						},
						items:      [
						]
					},
					{
						xtype:  'spacer',
						width:  800
					}
				]
			},
			
		]
	},
	initialize : function () {
		
		this.down('#kpi-details-reset-button').setText(I18n.translate('appbar.cmdRefresh'));
		this.down('#SaveButton').setText(I18n.translate('appbar.flyout.save'));
		this.down('#SaveAsButton').setText(I18n.translate('appbar.flyout.saveAs'));
		this.down('#RestoreButton').setText(I18n.translate('appbar.cmdRestore'));
		this.down('#Prompt1').setText(I18n.translate('appbar.cmdPeriod1Only'));
		this.down('#RemoveShrotcut').setText(I18n.translate('appbar.cmdRemove'));

	},

	/**
	 * to remove a customized shortcut in back-office
	 * @author youssef zine el abidine <youssef.zineelabidine@sage.com>
	 * 
	 */
	removeShrotcut : function(){

		var shortcut = this.getShortcut(),
		dashboardKey = this.self.dashboardKey,
		online = Ext.device.Connection.isOnline(),
		me = this;

		if(!online) {
			this.alertMessage();

		} else {

			this.setMasked({
					xtype : 'loadmask',
					message : I18n.translate('semanticZoom.processing')
				});

			HermesJS.removeShortcut(dashboardKey,shortcut.$key).then(function(){

				me.setMasked(false);
				me.fireEvent('goHome');
				
			},function(){
					me.setMasked(false);
					Ext.Msg.alert( I18n.translate('message.alert') , I18n.translate('expenses.errmess.cannotCreateUpdate'));
				});
		}


	},
	/**
	 * Save as a customized shortcut in back-office
	 * @author youssef zine el abidine <youssef.zineelabidine@sage.com>
	 * 
	 */

	saveAsShortcut : function(buttonSave) {
		var panelDate = Ext.create('SageCME.view.PanelPrompt'),
		online = Ext.device.Connection.isOnline();

		if(!online) {
			this.alertMessage();

		} else {
			this.self.panelPromptName = panelDate;
			panelDate.setWidth(200);
			panelDate.setHeight(120);

			panelDate.showBy(buttonSave);
		}



	},
		/**
		 * to restore a shortcut in back-office
		 * @author youssef zine el abidine <youssef.zineelabidine@sage.com>
		 * 
		 */

	restoreShortcut: function(){
			var shortcut = this.getShortcut(),
			kpi = HermesJSManager.getKpi(shortcut.$key),
			online = Ext.device.Connection.isOnline(),
			carousel = this.down('carousel');



			//Get the current index and save it
			this.setSelectedIndex(carousel.getActiveIndex());
			if(!online) {

				this.alertMessage();

			} else {
				// update the property periods and prompts with the restored ones

				if (shortcut.detail.def.periods) {

					shortcut.detail.def.periods = Ext.clone(kpi.detail.def.periods);
				}
				if(shortcut.detail.prompts) {
					shortcut.detail.prompts = Ext.clone(kpi.detail.prompts);
				}
				this.self.restore=true;
				this.updatePrompts(kpi);

				//Update the view
				carousel.removeAll(true);
				this.saveShortcut();


				this.updateDataviz();
				// this.updateKPISummary();
			}
			
		},
	/**
	 * Alert message during the offline
	 * @author youssef zine el abidine <youssef.zineelabidine@sage.com>
	 * 
	 */
	alertMessage:function() {

			Ext.Msg.alert(I18n.translate('message.alert'), I18n.translate('errorMessage.noConnectionAvailable'));

		},
	/**
	 * to update prompts of a kpi
	 * @author youssef zine el abidine <youssef.zineelabidine@sage.com>
	 * 
	 */

	updatePrompts :function(kpi) {
		var i;

		if(this.down('#dateinterval-container').innerItems.length!==0) {
			for ( i = 0; i < this.down('#dateinterval-container').innerItems.length; i++) {

				this.down('#dateinterval-container').innerItems[i].updatePrompt(kpi.detail.prompts[i]);
			}
		}
	},
		/**
		 * to save a shortcut in back-office
		 * @author youssef zine el abidine <youssef.zineelabidine@sage.com>
		 * 
		 */

	saveShortcut : function() {
			var shortcut = this.getShortcut(),
			dashboardKey = this.self.dashboardKey,
			online = Ext.device.Connection.isOnline(),
			me=this,
			kpi = HermesJS.getKpi(shortcut.$key),
			kpiSummary,
			changeSet = {
				'detail' : {
					'prompts' : shortcut.detail.prompts,
					'def'     : {
						'periods' : shortcut.detail.def.periods
					},
				}
			},

		// configPrompt object add the restored prompt and period to the property shortcut.detail

			configPrompt = {
				'promptSaved': shortcut.detail.prompts,
				'periodSaved':shortcut.detail.def.periods,
			};
			if(!online) {

				this.alertMessage();

			} else {


				Ext.apply(shortcut.detail,configPrompt);
				if(this.self.restore)
				{
					this.setMasked({
						xtype : 'loadmask',
						message : I18n.translate('semanticZoom.processing')
					});
				} else {

					this.setMasked({
						xtype : 'loadmask',
						message : I18n.translate('semanticZoom.processing')
					});
				}
				this.self.restore=false;
				


				HermesJS.updateShortcut(dashboardKey, shortcut.$key, changeSet).then(function(){
					me.setMasked(false);


					kpiSummary = me.down('carousel').down('kpi-summary');

					kpiSummary.setKpi(kpi);
					kpiSummary.setShortcut(shortcut);

				}, function(){
					me.setMasked(false);
					Ext.Msg.alert( I18n.translate('message.alert') , I18n.translate('expenses.errmess.cannotCreateUpdate'));
				});
			}


		},


	


	updateShortcut : function () {
		var shortcut = this.getShortcut();

		if(shortcut.isRemovable)
		{
			this.down('#RemoveShrotcut').show();
		}
		
		this.self.kpiDetailDefault = this;
		
		this.callParent(arguments);
		this.fireEvent('updateshortcut', shortcut);
	},

	/**
	 * Call this method when you need yo refresh the kpi summary display for the first time or after edit prompt or date or.
	 */
	updateKPISummary: function (){
		var shortcut = this.getShortcut(),
			carousel = this.down('carousel'),
			sum = carousel.down('kpi-summary');

		sum.setShortcut(shortcut);
	},

	/**
	 * Call this method when you need yo refresh the dataviz display for exemple after edit prompt or date.
	 */
	updateDataviz : function () {
			
			// Save new shortcut
			var carousel = this.down('carousel');
			//Get the current index and save it
			this.setSelectedIndex(carousel.getActiveIndex());
			//Update the view
			carousel.removeAll(true);
			this.buildDataviz(this.buildPromptsForQuery(this.getShortcut()));
		},

	/**
	 * Method call when the user want to reset the prompts, it only resets prompt not the dates
	 * @private
	 */
	didResetPrompts : function () {
			//load the kpi to get default values
			var shortcut = this.getShortcut(),i,
			kpi = HermesJSManager.getKpi(shortcut.$key),prompt,promptFromKpi,promptView,value,
			prompts = shortcut.detail.prompts,
			online = Ext.device.Connection.isOnline(),
			nbPrompt = prompts.length;

			if(!online) {
				this.alertMessage();

			} else {

				for (i = 0; i < nbPrompt; i++) {
					prompt = prompts[i];
					// we take the defaut value from the prompt in the kpi
					promptFromKpi = _.find(kpi.detail.prompts, function (p) {
						return p.$key === prompt.$key;
					});
					value = promptFromKpi.input['default'];
					prompt.input['default'] = value;

					// reset the prompt
					promptView = this.getPromptByKey(prompt.$key);
					if (promptView) {
						promptView.setPrompt(prompt);
					}
				}
				this.updateDataviz();
				this.updateKPISummary();
			}

		},


	getPromptByKey : function (key) {
			var prompts = this.query('prompt'),i,promptView,prompt,length;
			
			for (i = 0, length = prompts.length; i < length; i++) {
				promptView = prompts[i],
					prompt = promptView.getPrompt();
				if (prompt.$key === key) {
					return promptView;
				}
			}
			return null;
		},

	/**
	 * This function must add a component in the KPI view and return it as a
	 * DomElement
	 * return {DomElement} the DomElement of the component added
	 */
	createDatavizElement: function (shortcutKey, options, isComparisonPeriod) {
		// TODO: Refactorer cette fonction pour plus de lisibilité
		// TODO: Prendre en considération le cas ou iSComparizonPeriod === true
		var carousel = this.down('carousel'),
			newDatavizElement,
			dataviz;

		isComparisonPeriod = (typeof isComparisonPeriod === 'undefined') ? false : isComparisonPeriod;

		//add kpi summary to the first item of the carousel
		if (carousel.innerItems.length < 1) {
			newDatavizElement = {
				layout: {
					type: 'hbox',
					pack: 'center',
					align: 'center'
				},
				scrollable: null,
				items: [
					{
						xtype: 'kpi-summary',
						docked: 'left',
					},
					{
						xtype: 'dataviz',
						shortcutKey: shortcutKey,
						options: options,
						customer: this.getCustomer(),
						isComparisonPeriod: isComparisonPeriod,
						flex: 1
					}
				]
			};
		} else {
			newDatavizElement = {
				items: [{
					xtype: 'dataviz',
					shortcutKey: shortcutKey,
					options: options,
					customer: this.getCustomer(),
					isComparisonPeriod: isComparisonPeriod
				}]
			};
		}

		dataviz = carousel.add(newDatavizElement);
		
		//select first item or selected
		if (this.getSelectedIndex()) {
			carousel.setActiveItem(this.getSelectedIndex());
		} else {
			carousel.setActiveItem(0);
		}

		this.updateKPISummary();

		return dataviz.element.dom;
	},

	showError: function(errorMsg){
			if(!errorMsg){
				errorMsg= 'L\'aperçu n\'est pas disponible';
			}
			var carousel = this.down('carousel');
			carousel.add({html: '<div class="kpi-error-msg"><p>'+errorMsg+'</p></div>'});
		},


	/**
	 * This method init and display the prompts for a specific shortcut
	 * @param newShortcut
	 */
		
	displayPrompts : function (newShortcut) {
		//Builds the prompts as HTML
		//check if shortcut has detail and the detail has prompts
			var prompts,nbPrompts,prompt,i;
			if (newShortcut.detail && newShortcut.detail.prompts && newShortcut.detail.prompts.length > 0) {

				prompts = newShortcut.detail.prompts;
				nbPrompts = prompts.length;

				for (i = 0; i < nbPrompts; i++) {
					prompt = prompts[i];
					this.createPromptElement(prompt);
				}
			}
		},


		/**
		 * This function must add a prompt in the view and return it as a DomElement
		 * return {DomElement} the DomElement of the component added
		 */
	createPromptElement : function (promptData) {


			if (typeof promptData.contextual === 'undefined') {
				var newPromptConfig = {
					xtype  : 'prompt',
					prompt : promptData
				},Clsprompt,prompt,
				//Palmarés  Limitation du palmarés "Limitation des commerciaux"
				clsButton = this.getClsButton();
				if(promptData.input.options.$query && promptData.input.options.$query.def) {
					Clsprompt = promptData.input.options.$query.def.elements[0];
					
					newPromptConfig.cls = ['x-button', clsButton[Clsprompt]];
				}
				else {
					newPromptConfig.cls = ['x-button', 'prompt-departements-button'];
				}

				prompt = this.down('#dateinterval-container').add(newPromptConfig);
				prompt.on('userchange', this.didChangePromptValue, this);
			}
		},

		/**
		 * Method use when a prompt change of value
		 * @param prompt
		 * @param value
		 * @param eOpts
		 * @private
		 */
	didChangePromptValue : function (promptView, values) {
			//load the shorcut to edit
			var shortcut = this.getShortcut(),i,prompt,length,
			online = Ext.device.Connection.isOnline(),
				key = promptView.getPrompt().$key;
			if(!online) {
				Ext.Msg.alert(I18n.translate('message.alert'), I18n.translate('errorMessage.noConnectionAvailable'));
			}
			else {

				for (i = 0, length = shortcut.detail.prompts.length; i < length; i++) {
					prompt = shortcut.detail.prompts[i];

					if (prompt.$key === key ) {
						prompt.input['default'] = values;
					}
				}

				this.updateDataviz();
				// this.updateKPISummary();
			}

		},



	/**
	 * create dates for a period id
	 * @author youssef zine el abidine <youssef.zineelabidine@sage.com>
	 * 
	 */
	createDates:function() {


		var PanelDate = Ext.create('SageCME.view.PanelPrompt'),i,

		newShortcut = this.getShortcut(),
		metadatamodelPeriods = HermesJSManager.metadatamodel.periods,nbDateInterval,displayP1P2,
		online = Ext.device.Connection.isOnline(),
		defaultPeriods = [];
		if(!online) {
			this.alertMessage();

		} else {
			if (newShortcut.detail && newShortcut.detail.def && newShortcut.detail.def.periods) {
				defaultPeriods = newShortcut.detail.def.periods;
			}
			PanelDate.removeAll(true);
			nbDateInterval = defaultPeriods.length;
			displayP1P2 = nbDateInterval>1;
			for ( i = 0; i <= nbDateInterval-1; i++) {
				this.createDateIntervalElement(PanelDate,metadatamodelPeriods, defaultPeriods[i],i,displayP1P2);
			}
		}

	},
	/**
	 * This method init and display the date for a specific shortcut
	 * @param newShortcut
	 */

	displayDatesKPI : function (newShortcut) {

			var nbDateInterval,displayP1P2,
			defaultPeriods = [];
			if (newShortcut.detail && newShortcut.detail.def && newShortcut.detail.def.periods) {
				defaultPeriods = newShortcut.detail.def.periods;
			}
			nbDateInterval = defaultPeriods.length;
			displayP1P2 = nbDateInterval>1;

			if(nbDateInterval!==0) {
			
				this.down('#Prompt1').show();

			}

		},


	/**
	 * This function must add a dateIntervals in the view and return it as a DomElement
	 * @param dateIntervals
	 * @param defaultPeriod
	 * @param periodId
	 */
	createDateIntervalElement : function (PanelDate,dateIntervals, defaultPeriod, periodId, displayP1P2) {
		var nbIntervals = dateIntervals.length,dateIntervals_i,newDateDom,
		
		prompt1 = this.down('#Prompt1'),

		newDateIntervalsObject = [],
		tmpDateIntervals;
		for (dateIntervals_i = 0; dateIntervals_i < nbIntervals; dateIntervals_i++) {
			tmpDateIntervals = dateIntervals[dateIntervals_i];
			newDateIntervalsObject[dateIntervals_i] = {
				name   : (displayP1P2)?'(P'+(periodId+1)+') '+tmpDateIntervals.name:tmpDateIntervals.name,
				start  : new Date(tmpDateIntervals.start),
				end    : new Date(tmpDateIntervals.end),
				$key   : tmpDateIntervals.$key,
				period : tmpDateIntervals
			};
		}
		
		if(defaultPeriod===undefined)
		{
			defaultPeriod = dateIntervals[0];
		}

		newDateDom = {
			xtype         : 'dateinterval-selector',
			dateIntervals : newDateIntervalsObject,
			defaultPeriod : defaultPeriod,
			periodId      : periodId,
			cls:'dateinterval-selector',
			listeners     : {
				change : 'didChangeDateValue',
				scope  : this
			}
		};

		PanelDate.setHeight(250);
		PanelDate.setWidth(475);

		this.self.panel = Ext.clone(PanelDate);
		PanelDate.showBy(prompt1);
		this.addNewDateDom(PanelDate,periodId,newDateDom,displayP1P2);

	},

	/**
	 * add NewDateDom via PanelDate
	 * @author youssef zine el abidine <youssef.zineelabidine@sage.com>
	 * 
	 */

	addNewDateDom : function(PanelDate,periodId,newDateDom,displayP1P2) {

		var shortcut = this.getShortcut(),
		kpi = HermesJSManager.getKpi(shortcut.$key);

		if(periodId === 1) {
			PanelDate.add({
				xtype: 'spacer',
				height: 80
			});
		}

		PanelDate.add(newDateDom);
		

 
		if(!displayP1P2) {
			PanelDate.add({
				xtype:'button',
				itemId:'Prompt2',
				text: I18n.translate('prompts.period2'),
				cls: 'kpi-detail-Edit-AddPeriod'
			});

		}
		if((shortcut.detail.def.periods.length===2) && (kpi.detail.def.periods) &&
			// (kpi.detail.def.periods.length===1) &&
			(periodId === 1 ))
		{
			PanelDate.setWidth(525);
			PanelDate.add({
				xtype:'button',
				itemId:'RemovePeriod2',
				text: '',
				cls: 'kpi-detail-Edit-RemovePeriod'

			});
		}

	},


		/**
		 * Method call when the user change the date
		 * @param dateIntervalSelector
		 * @param newValue
		 * @param oldValue
		 * @private
		 */
	didChangeDateValue : function (dateIntervalSelector) {
		
			var period = dateIntervalSelector.getPeriod(),shortcut,
				panelDate = this.self.panel;
			if (period !== undefined) {
				//load the shorcut to edit
				shortcut = this.getShortcut();
				// shortcut.detail.def.periods = [period];
				shortcut.detail.def.periods[dateIntervalSelector.getPeriodId()] = period;

				if (dateIntervalSelector.initialized) {
					this.updateDataviz();
					panelDate.destroy();
				}
			}
		}
});