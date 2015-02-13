/* globals HermesJSManager, Masonry */

/**
 * [description]
 */
Ext.define('SageCME.view.main.KpiFavorite',{
	extend: 'Ext.Container',
	
	xtype: 'kpi-favorite',

	requires: [
		'SageCME.view.KPIPreview',
		'SageCME.view.components.KPI'
	],

	statics: {
		DASHBOARD_NAME: 'dashboardhome'
	},

	config: {
		cls: 'kpi-favorite',

		shortcuts: null,

		listeners : {
			painted : 'onPainted'
		}
	},

	initialize: function () {
		this.callSuper();

		this.shortcuts = HermesJSManager.getShortcutsByDashboard(this.self.DASHBOARD_NAME);
	},

	onPainted: function (element) {
		var kpis,
			container,
			masonry;

		kpis = Ext.Array.map(this.getFavoriteShorcuts(), function (shortcut) {
			return {
				xtype: 'deffered-kpi',
				shortcut: shortcut
			};
		});
		
		this.removeAll(true);
		this.add(kpis);

		container = element.down('.x-inner');

		masonry = new Masonry(container.dom, {
            isInitLayout: false,
            itemSelector: '.kpi--preview',
            gutter: 20
        });

		masonry.on('layoutComplete', function (masonryInstance) {
	        var position = Math.max.apply(this, masonryInstance.colYs),
	            bottomMargin = 20;

	        element.setHeight(position + bottomMargin);
	        container.setHeight(position + bottomMargin);
	    });

        masonry.layout();
	},

	getFavoriteShorcuts: function () {
		return Ext.Array.filter(this.shortcuts, function (shortcut) {
			return shortcut.favorite === true;
		});
	}
});
