/* global HermesJS,I18n */
/**
 * @author Layla ait laaraj <layla.aitllaraj@sage.com>
 *
 * @class SageCME.view.KPIDetail
 *
 * A KPI summary :  
 */

Ext.define('SageCME.view.KPISummary', {
	extend : 'Ext.Container',
	xtype  : 'kpi-summary',

	requires : [
	],

	config : {
		/**
		 * @config {Object} kpi It is an hermes kpi object (which enables you to get a KPI)
		 */
		shortcut      : null,
		
		height : 510,
		width : 218,
		scrollable : {
			direction     : 'vertical',
			directionLock : true
		},
 
		/* jshint -W015 */
		/* jshint -W101 */
		tpl    : [
			'<div class="kpi-summary">',
				'<h2 class="kpi-summary-recap">'+I18n.translate('modules.semanticZoomDashboardhome.title')+'</h2>',
				'<tpl for="periods">',
					'<section class="kpi-summary-section kpi-summary-periods">',
						'<h3>{name} (P{#})</h3>',
						'<dl>',
							'<dt class="Du"></dt>',
							'<dd>{start:date("d-m-Y")}</dd>',
							'<dt class="Au"></dt>',
							'<dd>{end:date("d-m-Y")}</dd>',
						'</dl>',
					'</section>',
				'</tpl>',
				//show 'Pametres' section just case we have prompts 
				//commented by youssef because of problem kpi
				//'<tpl if="prompts.length > 1 || (prompts.length == 1 && !prompts[0].contextual)">',
				'<tpl>',
					'<section class="kpi-summary-section">',
						'<h3 class="kpi-summary-section1">Paramètres</h3>',
						'<tpl for="prompts">',
						    '<tpl if="input">',
							    '<dl>',
									'<dt>{title} </dt>',
									'{[Utils.formatDefaultValue(values)]}',
								'</dl>',
						    '</tpl>',
						'</tpl>',
					'</section>',
				'</tpl>',
				'<tpl if="description">',
					'<section class="kpi-summary-section">',
						'<h3 class="kpi-summary-section2">Commentaire</h3>',
						'<p>{description}</p>',
					'</section>',
				'</tpl>',
			'</div>'
		].join('')
		/* jshint +W015 */
		
	
	},
	initialize:function(){
		var html = this.getTpl().html,
		tpl,
		wrapper= document.createElement('div');
		wrapper.innerHTML= html;
		wrapper.getElementsByClassName('kpi-summary-recap')[0].innerHTML = I18n.translate('kpiDetail.firstSectionTitle');
		wrapper.getElementsByClassName('kpi-summary-section1')[0].innerHTML = I18n.translate('kpiDetail.promptsTitleText');
		wrapper.getElementsByClassName('kpi-summary-section2')[0].innerHTML = I18n.translate('kpiDetail.descriptionTitleText');
		
		wrapper.getElementsByClassName('Du')[0].innerHTML = I18n.translate('kpiDetail.fromText');
		wrapper.getElementsByClassName('Au')[0].innerHTML = I18n.translate('kpiDetail.toText');

		tpl= new Ext.XTemplate(wrapper.innerHTML);
		this.setTpl(tpl);
	},
	 
	updateShortcut: function (shortcut){
		var data,
			kpi = HermesJS.getKpi(shortcut.$key);

		data = {
			'description' : kpi.description,
			'periods'     : shortcut.detail.def.periods,
			'prompts'     : shortcut.detail.prompts,
		};

		this.setData(data);
    },
 

	constructor: function() {
		return this.callParent([this.tpl]);
	},

});