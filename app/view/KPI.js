/* global HermesJSManager, $, HermesJS */

/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 18/10/13
 *
 * @class SageCME.view.KPI
 *
 * A KPI. This class is not meant to be
 */
Ext.define('SageCME.view.KPI', {
	extend             : 'Ext.Container',
	alternateClassName : 'KPI',

	statics : {
		MODE_DETAIL  : 'detail',
		MODE_PREVIEW : 'preview',
		shortcutDefault :null,
		KeyShortcut:null
		
	},

	config : {
		/**
		 * @config {Object} customer It is a customer object that we use to to
		 * load specific query
		 */
		customer : null,

		/**
		 * @config {Object} shortcut It is an hermes Shortcut object
		 * (which enables you to get a KPI)
		 */
		shortcut : null,

		/**
		 * @config {string} describes the display mode : MODE_DETAIL ('detail") 
		 * or MODE_PREVIEW ("preview")
		 */
		mode     : null,
		items    : [],

		/**
		 * Resize listener for KPI
		 */
		listeners : [
			{
				event : 'resize',
				fn    : 'onResize'
			}
		]
	},

	/**
	 * This function must add a dataviz component in the KPI view and return it as a DomElement
	 * return {DomElement} the DomElement of the component added
	 */
	createDatavizElement : function (shortcutKey, options) {

			var dataviz = this.add({
				xtype       : 'dataviz',
				shortcutKey : shortcutKey,
				options     : options,
				customer    : this.getCustomer(),
				scrollable  : {
					direction     : 'vertical',
					directionLock : true
				}
			});

			return dataviz.element.dom;
		},


	/**
	 * This function is called when a new Shortcut has been set even if it has been set in config.
	 * This function renders the KPI an for each dataviz, it calls createDatavizElement.
	 * @param newShortcut
	 */
	updateShortcut : function (newShortcut) {
		var kpi,renderType,prompts,keys ;
		//<debug>
		if(newShortcut.detail && newShortcut.detail.prompts){
			keys = Ext.Array.pluck(newShortcut.detail.prompts, '$key');
			if(Ext.Array.unique(keys).length !== keys.length){
				//<feature logger>
				Ext.Logger.error('Duplicate keys in shorcut prompts');
				//</feature>
			}
		}
		//</debug>
		kpi = HermesJSManager.getKpi(newShortcut.$key);
		// newShortcut.detail.def.periods = kpi.detail.def.periods;
		// newShortcut.detail.prompts = kpi.detail.prompts;
		renderType = this.getMode();

		//set Default shortcut for the first time we enter to a KPI's detail 

		if(renderType==='detail' && !this.self.KeyShortcut)
		{
			this.self.shortcutDefault = Ext.clone(newShortcut);
			this.self.KeyShortcut = Ext.clone(newShortcut.$key);

		}
		// set Default shortcut after we enter to another KPI
		if (
			this.self.KeyShortcut!== newShortcut.$key &&
			this.self.KeyShortcut && renderType === 'detail'
		) {
			this.self.shortcutDefault = Ext.clone(newShortcut);
			this.self.KeyShortcut = Ext.clone(newShortcut.$key);

		}
		//destroy the old prompts
		this.destroyPrompts();

		//Display the prompts
		
		this.displayPrompts(newShortcut);
		//Display dates
		//
		this.displayDatesKPI(newShortcut);

		//Build the prompts params
		prompts = this.buildPromptsForQuery(newShortcut);
		this.buildDataviz(prompts);

	},

	/**
	 * to destroy prompts
	 * @author youssef zine el abidine <youssef.zineelabidine@sage.com>
	 * 
	 */
	destroyPrompts: function() {
		if (this.down('#kpi-container')) {
			if (
				this.down('#dateinterval-container') &&
				this.down('#dateinterval-container').length !== 0
			) {
				this.down('#dateinterval-container').removeAll(true);
			}
		}
	},

	/**
	 * Override this method if you need to build prompts and add them to the view
	 */
	displayPrompts : function () {

	},
	/**
	* Override this method if you need to build dates and add them to the view
	*/
	displayDates : function () {

	},
	displayDatesKPI : function () {

	},

	/**
	 * This method build the prompts for the query, return the build prompts
	 */
	buildPromptsForQuery : function (newShortcut) {

		var prompts,keys,customer,customerPrompt,tragingAccountPrompt;
		//<debug>
		if(newShortcut.detail && newShortcut.detail.prompts){
			keys = Ext.Array.pluck(newShortcut.detail.prompts, '$key');
			if(Ext.Array.unique(keys).length !== keys.length){
				//<feature logger>
				Ext.Logger.error('Duplicate keys in shorcut prompts');
				//</feature>
			}
		}
		//</debug>

		prompts = [];
//
//        if (newShortcut.detail && newShortcut.detail.prompts) {
//            prompts = newShortcut.detail.prompts;
//        }

		//If a customer is set with the kpi use it to fill the prompts
		customer = this.getCustomer();
		if (customer) {

			//add customer prompt
			customerPrompt = {};
			customerPrompt.key = 'customer';
			customerPrompt.value = customer.get('$key');
			prompts.push(customerPrompt);

			//add tradingAccount prompt
			tragingAccountPrompt = {};
			tragingAccountPrompt.key = 'tradingaccount';
			tragingAccountPrompt.value = customer.get('shortName');
			prompts.push(tragingAccountPrompt);
		}


		return {'prompts' : prompts};
	},

	/**
	 * Use this method to build the with h specific prompts in parameters
	 * @param prompts
	 */
	buildDataviz : function (prompts) {
		//Get the current shortcut associated to the dataviz
		var shortcut                  = this.getShortcut(),
			// load the kpi associated the the shorcut
			kpi                       = HermesJSManager.getKpi(shortcut.$key),
			renderType                = this.getMode(),
			datavizArray,
			datavizOptions,
			i,
			len;
		
		if(shortcut.detail.promptSaved) {
			shortcut.preview.prompts=shortcut.detail.promptSaved;
		}
		if(shortcut.detail.periodSaved) {
			shortcut.preview.def.periods=shortcut.detail.periodSaved;
		}
			
		
		//Execute the query
		HermesJSManager.executeKpiQuery(
			kpi,
			shortcut,
			renderType,
			prompts,
			this,
			function (kpiData) {
				// var $tmpDataviz = $('<div></div>', { id: 'tmpDataviz' }),
				// 	$tmpComparisonPeriodDataviz;

				//success
				if (typeof kpi[renderType].dataviz === 'string') {
					kpi[renderType].dataviz = JSON.parse(kpi[renderType].dataviz);
				}
				//Foreach dataviz children create a dataviz element
				datavizArray = kpi[renderType].dataviz.children;
				for (i = 0, len = datavizArray.length; i < len; i++) {
					datavizOptions = datavizArray[i];
					datavizOptions.rendertype = renderType;
					datavizOptions.queries = [kpiData[renderType]];
					datavizOptions.title = shortcut.title || kpi.title;

					this.setLimitNumber(datavizOptions);

					this.createDatavizElement(shortcut.$key, datavizOptions);
				}

				// TODO: Test also if it's a comparison type KPI
				if (
					renderType === HermesJS.datavizRenderType.detail &&
					(shortcut.detail.def.periods.length === 2) &&
					kpi.extras.type === 'podium'
				) {
					datavizOptions = Ext.Object.merge({}, datavizOptions, kpi.detail.dataviz, {
						queries: [kpiData.detail],
						rendertype: HermesJS.datavizRenderType.detail
					});

					this.createDatavizElement(shortcut.$key, datavizOptions, true);

				}
			},
			function () {
//                var errorMsg = HermesJS.i18nGet('shortcut.was.removed');
				var  errorMsg= 'L\'aperçu n\'est pas disponible';
				this.showError(errorMsg);
				return;
			}
		);
	},
	/**
	 * to set LimitNumber attribute of a kpi
	 * @author youssef zine el abidine <youssef.zineelabidine@sage.com>
	 * 
	 */

	setLimitNumber : function(datavizOptions) {
		// limit pie and donut charts to 3 items for preview
		if (
			datavizOptions.type === 'radpiechart_preview' ||
			datavizOptions.type === 'raddonutchart_preview'
		) {
			datavizOptions.limit = 3;
			datavizOptions.otherGroup = false;
		}
		if (datavizOptions.type === 'radcolumnchart' && Ext.isString(datavizOptions.limit) ) {
			 datavizOptions.limit = 25;
		}
	},

	showError: function(errorMsg){
				if(!errorMsg){
					errorMsg= 'L\'aperçu n\'est pas disponible';
				}
				this.add({html: '<div class="kpi-error-msg"><p>'+errorMsg+'</p></div>'});
			},
	onResize     : function (element, eOpts) {

		var domobjectChart,domobjectGauge,chart;

		if (element && element.dom) {
			domobjectChart = $(element.dom.getElementsByClassName('k-chart')[0]);
			domobjectGauge = $(element.dom.getElementsByClassName('k-gauge')[0]);

			chart = null;
			if (domobjectChart && (chart = domobjectChart.data('kendoChart'))) {
				$(element.dom.getElementsByClassName('k-chart'))
					.children(0)[0]
					.setAttribute('viewBox', '0 0 ' + eOpts.width + ' ' + eOpts.height);
				this.redrawChart(chart);
				return;
			}
			else if (domobjectGauge && (chart = domobjectGauge.getKendoRadialGauge())) {
				$(element.dom.getElementsByClassName('k-gauge'))
					.children(0)[0]
					.setAttribute('viewBox', '0 0 ' + eOpts.width + ' ' + eOpts.height);
				this.redrawChart(chart);
				return;
			}
		}

		// defer to try later if nothing has succeeded
		Ext.defer(this.onResize.bind(this, this.element, eOpts), 300, this);
	},

	redrawChart : function (chart) {
		chart.redraw();
	}
});