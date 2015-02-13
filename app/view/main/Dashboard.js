/* global HermesJSManager,I18n, SageCME */
/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 23/09/13
 *
 * @class SageCME.view.Home
 *
 * This view is the home page
 */
Ext.define('SageCME.view.main.Dashboard', {
	extend : 'Ext.Container',
	xtype  : 'dashboard',

	requires            : [
		'SageCME.view.KPIPreview',
		'SageCME.view.DateIntervalSelector',
		'SageCME.view.Prompt'
	],
	config              : {
		heightDashboard : false,
        layout: 'auto',
		/**
		 * @config {Object} customer It is a customer object that we use to to load specific query
		 */
		customer : null,
		groupement:'type',
		kpiFavoris:null,
		dashboardName : null,
		cls           : ['dashboard','sales-document-list'],
		scrollable    : {
			direction : 'vertical'
		},

		items : [
			{
				xtype: 'selectfield',
				itemId: 'selectfield',
				docked:'top',
				options: [
					// { text: 'Univers', value: 'univers' },
					// { text: 'Type d\'indicateurs', value: 'type' },
					// { text: 'Catégorie de données', value: 'category' }
				]
			},
			{
				xtype : 'toolbar',
				itemId:'scrollSpyToolbarId',
				cls    : 'scrollspy',
				docked : 'top',
				items : [
                ]
            },
		],

		listeners : {
			show : 'refresh'
		}
	},
	isLoaded            : false,

	/* jshint -W101 */
	initialize     : function () {
		this.down('#selectfield').setOptions([
            {
                text: HermesJSManager.getI18nConfig('$options.modules.semanticZoomDashboardhome.sort.type.$title'),
                value: 'type'
            },
            {
                text: HermesJSManager.getI18nConfig('$options.modules.semanticZoomDashboardhome.sort.univers.$title'),
                value: 'univers'
            },
            {
                text: HermesJSManager.getI18nConfig('$options.modules.semanticZoomDashboardhome.sort.category.$title'),
                value: 'category'
            }
        ]);
	},

	setScrollSpyElement: function (type) {
		var toolbar = this.down('#scrollSpyToolbarId'),
		/*jshint -W101*/
			scrollSpyElement = {
			'univers': [
				{
					xtype: 'button',
					cls  : ['scrollspy-dashboard'],
					id : 'goToComtabId',
					ui      : 'plain',
					name: 'goToComtab',
					text: '<div data-scrollspy-dashboard-target-button = "buttonScrollSpyActive">'+I18n.translate('semanticZoom.kpi.sort.univers.compta')+'</div>'
				},
				{
					xtype: 'button',
					cls  : ['scrollspy-dashboard'],
					id: 'goToGesComm',
					ui      : 'plain',
					name: 'goToGesComm',
					text: '<div data-scrollspy-dashboard-target-button = "buttonScrollSpyActive">'+I18n.translate('semanticZoom.kpi.sort.univers.gescom')+'</div>'
				},
			],
			'type': [
				{
					xtype: 'button',
					cls  : ['scrollspy-dashboard'],
					id : 'goToCompaId',
					ui      : 'plain',
					name: 'goToCompa',
					text: '<div data-scrollspy-dashboard-target-button = "buttonScrollSpyActive">'+I18n.translate('semanticZoom.kpi.sort.type.compare')+'</div>'
				},
				{
					xtype: 'button',
					cls  : ['scrollspy-dashboard'],
					ui      : 'plain',
					id : 'goToEvo',
					name: 'goToEvo',
					text: '<div data-scrollspy-dashboard-target-button = "buttonScrollSpyActive">'+I18n.translate('semanticZoom.kpi.sort.type.evolution')+'</div>'
				},
				{
					xtype: 'button',
					cls  : ['scrollspy-dashboard'],
					ui      : 'plain',
					id : 'goToNomb',
					name: 'goToNomb',
					text: '<div data-scrollspy-dashboard-target-button = "buttonScrollSpyActive">'+I18n.translate('semanticZoom.kpi.sort.type.number')+'</div>'
				},
				{
					xtype: 'button',
					cls  : ['scrollspy-dashboard'],
					id : 'goToClass',
					ui      : 'plain',
					name: 'goToClass',
					text: '<div data-scrollspy-dashboard-target-button = "buttonScrollSpyActive">'+I18n.translate('semanticZoom.kpi.sort.type.podium')+'</div>'
				},
				{
					xtype: 'button',
					cls  : ['scrollspy-dashboard'],
					ui      : 'plain',
					id : 'goToSynth',
					name: 'goToSynth',
					text: '<div data-scrollspy-dashboard-target-button = "buttonScrollSpyActive">'+I18n.translate('semanticZoom.kpi.sort.type.synthesis')+'</div>'
				},

			],
			'category':[
				{
					xtype: 'button',
					cls  : ['scrollspy-dashboard'],
					itemId : 'goToClientId',
					ui      : 'plain',
					name: 'goToClient',
					text: '<div data-scrollspy-dashboard-target-button = "buttonScrollSpyActive">'+I18n.translate('semanticZoom.kpi.sort.category.clients')+'</div>'
				},
				{
					xtype: 'button',
					cls  : ['scrollspy-dashboard'],
					ui      : 'plain',
					name: 'goToCommandes',
					id : 'goToCommandes',
					text: '<div data-scrollspy-dashboard-target-button = "buttonScrollSpyActive">'+I18n.translate('semanticZoom.kpi.sort.category.order')+'</div>'
				},
				{
					xtype: 'button',
					cls  : ['scrollspy-dashboard'],
					ui      : 'plain',
					name: 'goToPtoduit',
					id : 'goToPtoduit',
					text: '<div data-scrollspy-dashboard-target-button = "buttonScrollSpyActive">'+I18n.translate('semanticZoom.kpi.sort.category.product')+'</div>'
				},
				{
					xtype: 'button',
					cls  : ['scrollspy-dashboard'],
					ui      : 'plain',
					name: 'goToDevis',
					id : 'goToDevis',
					text: '<div data-scrollspy-dashboard-target-button = "buttonScrollSpyActive">'+I18n.translate('semanticZoom.kpi.sort.category.quotes')+'</div>'
				},
				{
					xtype: 'button',
					cls  : ['scrollspy-dashboard'],
					ui      : 'plain',
					name: 'goToRepresentant',
					id : 'goToRepresentant',
					text: '<div data-scrollspy-dashboard-target-button = "buttonScrollSpyActive">'+I18n.translate('semanticZoom.kpi.sort.category.salesrep')+'</div>'
				},
				{
					xtype: 'button',
					cls  : ['scrollspy-dashboard'],
					ui      : 'plain',
					name: 'goToCAHT',
					id : 'goToCAHT',
					text: '<div data-scrollspy-dashboard-target-button = "buttonScrollSpyActive">'+I18n.translate('semanticZoom.kpi.sort.category.total_turnover')+'</div>'
				},
				{
					xtype: 'button',
					cls  : ['scrollspy-dashboard'],
					ui   : 'plain',
					name: 'goToCAHTGlobal',
					id : 'goToCAHTGlobal',
					text: '<div data-scrollspy-dashboard-target-button = "buttonScrollSpyActive">'+I18n.translate('semanticZoom.kpi.sort.category.glb_total_turnover')+'</div>'
				}
			]
		};
		/*jshint +W101*/
		if (scrollSpyElement[type]) {
			return toolbar.setItems(scrollSpyElement[type]);
		}
		else{
			throw new Error('Invalid type');
		}
	},
	/**
	 * [grouperKpi function allow you to group KPIs]
	 * @param  {[type]} liste [all kpis]
	 * @return {[type]}       [description]
	 */
	grouperKpi : function (shortcuts) {
		var tabCompta=[],tabGesCom=[],
			tabCompare=[],tabEvolution=[],tabNumber=[],tabPodium=[],tabSynthesis=[],
			tabClients=[], tabOrder=[], tabProduct=[], tabQuotes=[],
			tabSalesrep=[], tabTotal_turnover=[], tabDelivery=[];
			

		if (this.getGroupement()==='univers') {

			this.setScrollSpyElement('univers');
			this.down('#goToComtabId').setCls('scrollspy-dashboard-active');
			tabCompta=Ext.Array.filter(shortcuts,function (shortcut) {
				return shortcut.extras.univers==='compta';
			});
			tabGesCom=Ext.Array.filter(shortcuts,function (shortcut) {
				return shortcut.extras.univers==='gescom';
			});

			this.doGroup(tabCompta,I18n.translate('semanticZoom.kpi.sort.univers.compta'));
			this.doGroup(tabGesCom,I18n.translate('semanticZoom.kpi.sort.univers.gescom'));

		}else if(this.getGroupement()==='type'){
			this.setScrollSpyElement('type');
			this.down('#goToCompaId').setCls('scrollspy-dashboard-active');

			tabCompare=Ext.Array.filter(shortcuts,function (shortcut) {
				return shortcut.extras.type==='compare';
			});
			tabEvolution=Ext.Array.filter(shortcuts,function (shortcut) {
				return shortcut.extras.type==='evolution';
			});
			tabNumber=Ext.Array.filter(shortcuts,function (shortcut) {
				return shortcut.extras.type==='number';
			});
			tabPodium=Ext.Array.filter(shortcuts,function (shortcut) {
				return shortcut.extras.type==='podium';
			});
			tabSynthesis=Ext.Array.filter(shortcuts,function (shortcut) {
				return shortcut.extras.type==='synthesis';
			});
 
			this.doGroup(tabCompare,I18n.translate('semanticZoom.kpi.sort.type.compare'));
			this.doGroup(tabEvolution,I18n.translate('semanticZoom.kpi.sort.type.evolution'));
			this.doGroup(tabNumber,I18n.translate('semanticZoom.kpi.sort.type.number'));
			this.doGroup(tabPodium,I18n.translate('semanticZoom.kpi.sort.type.podium'));
			this.doGroup(tabSynthesis,I18n.translate('semanticZoom.kpi.sort.type.synthesis'));

			this.getScrollable().getScroller().scrollTo(0, 1, true);

		}else if(this.getGroupement()==='category'){
			this.setScrollSpyElement('category');
			this.down('#goToClientId').setCls('scrollspy-dashboard-active');

			tabClients=Ext.Array.filter(shortcuts,function (shortcut) {
				return shortcut.extras.category==='clients';
			});
			tabOrder=Ext.Array.filter(shortcuts,function (shortcut) {
				return shortcut.extras.category==='order';
			});
			tabProduct=Ext.Array.filter(shortcuts,function (shortcut) {
				return shortcut.extras.category==='product';
			});
			tabQuotes=Ext.Array.filter(shortcuts,function (shortcut) {
				return shortcut.extras.category==='quotes';
			});
			tabSalesrep=Ext.Array.filter(shortcuts,function (shortcut) {
				return shortcut.extras.category==='salesrep';
			});
			tabTotal_turnover=Ext.Array.filter(shortcuts,function (shortcut) {
				return shortcut.extras.category==='total_turnover';
			});
			tabDelivery=Ext.Array.filter(shortcuts,function (shortcut) {
				return shortcut.extras.category==='delivery';
			});
			tabSynthesis=Ext.Array.filter(shortcuts,function (shortcut) {
				return shortcut.extras.category==='glb_total_turnover';
			});

			this.doGroup(tabClients,I18n.translate('semanticZoom.kpi.sort.category.clients'));
			this.doGroup(tabOrder,I18n.translate('semanticZoom.kpi.sort.category.order'));
			this.doGroup(tabProduct,I18n.translate('semanticZoom.kpi.sort.category.product'));
			this.doGroup(tabQuotes,I18n.translate('semanticZoom.kpi.sort.category.quotes'));
			this.doGroup(tabSalesrep,I18n.translate('semanticZoom.kpi.sort.category.salesrep'));
			this.doGroup(tabTotal_turnover,I18n.translate('semanticZoom.kpi.sort.category.total_turnover'));
			this.doGroup(tabDelivery,I18n.translate('semanticZoom.kpi.sort.category.delivery'));
			this.doGroup(tabSynthesis,I18n.translate('semanticZoom.kpi.sort.category.glb_total_turnover'));
			
			this.getScrollable().getScroller().scrollTo(0, 1, true);

		} else {
			throw new Error('Invalid groupement key: ');
		}
	},

	doGroup: function ( tab, categoryName ) {
		var self = this,
			i = 0,
            len = tab.length,
            masonryContainer = Ext.create('Ext.Container', {
                cls: 'masonry-container',
                height: 0 // this is just aproximative height, it will be refined later
            });

        for ( ; i < len; i++ ) {
            if ( i===0 ) {
                this.add({
                    xtype:  'label',
                    cls:    ['preview-label-categorie'],
                    html:   '<div data-scrollspy-dashboard-target="'+categoryName+'">'+categoryName+'</div>'
                });
            }
            
            masonryContainer.add({
                xtype    : 'kpi-preview',
                shortcut : tab[i],
                customer : self.getCustomer()
            });
        }

        this.add(masonryContainer);
	},

	updateDashboardName : function () {
		if (!this.isHidden()) {
			this.refresh();
		} else {
			this.isLoaded = false;
		}
	},

	initScroller : function () {
		if(this.getScrollable()){
			this.getScrollable().getScroller().scrollToTop();
		}
	},

	scheduleRefresh : function () {
		this.initScroller();
		this.isLoaded = false;
		this.refresh();
	},

	doRefresh : null, // automatically generated

	bindScrollEvent : function  () {
		var self = this;
		if(this.getScrollable()){
			this.getScrollable().getScroller().addListener('scroll',function (scroller,x,y) {
				self.onDashboardScroll(scroller,x,y);
			});
			// this.getScrollable().getScroller().on('scrollend',function (scroller,x,y) {
			// 	// console.log('xxxxxxxxxxxxxxxxxxxxxx');
			// });
		}
	},

	refresh   : function () {
		var self,
			that=this,
			shortcuts;
		
		if (!this.doRefresh) {
			this.doRefresh = Ext.Function.createBuffered(function () {

				that.bindScrollEvent();
				if (!this.isHidden() && !this.isLoaded) {
					var dashboardName = this.getDashboardName();
					//<feature logger>
					Ext.Logger.info('retreiving shortcuts for dashboard ' + dashboardName);
					//</feature>

					self = this;
					shortcuts = HermesJSManager.getShortcutsByDashboard(dashboardName);
					// console.log('shortcuts',shortcuts);
					if (shortcuts && shortcuts.length > 0) {
						this.fireEvent('beforerefresh', this);

						this.removeAll(true);
						if (this.getKpiFavoris()==='kpiFavoris') {
							this.showFavoriteKpi(shortcuts);
							this.setHeight(this.getHeightDashBoardKpi(this));
						} else{
							that.grouperKpi(shortcuts);
						}

						this.isLoaded = true;

						this.fireEvent('refresh', this);
					}
				}
			}, 1000, this);
		}
		this.doRefresh();

	},

	getFavoriteKpi:function (shortcuts) {
		var tabKpiFavorite = Ext.Array.filter(shortcuts,function (shortcut) {
			return shortcut.favorite===true;
		});
		return tabKpiFavorite;
	},

	showFavoriteKpi: function (shortcuts) {
		var self = this,
            i,
            len,
            tab = this.getFavoriteKpi(shortcuts);

		if ( tab.length === 0 ) {
			this.setMasked(false);
			this.setHeight(0);
		} else {
			for (i = 0, len = tab.length; i < len; i++) {
				this.add({
					xtype    : 'kpi-preview',
					shortcut : tab[i],
					customer : self.getCustomer()
				});
			}
		}
	},

	getHeightDashBoardKpi : function (view) {
		// dashboard height = last item (position + height + margin + security)
		var offsetTop = view.innerItems[view.innerItems.length-1].element.dom.offsetTop;
		if (view.innerItems[view.innerItems.length-1]<200) {
			return offsetTop + view.innerItems[view.innerItems.length-1]._height +25 +30 +15 ;
		} else{
			return offsetTop + view.innerItems[view.innerItems.length-1]._height +25;
		}

	},

	onDashboardScroll : function (scroller, x, y){
		var targetLabelTab = Ext.select('[data-scrollspy-dashboard-target]').elements,
			targetButtonTab2 =  Ext.select('[data-scrollspy-dashboard-target-button]').elements,
			self=this,
			currentButton,
			id,
			i,
			margin=14;

		for (i = 0; i < targetLabelTab.length-1; i++) {
			if ((y+margin >= targetLabelTab[i].offsetTop)&&(y<targetLabelTab[i+1].offsetTop)) {

				id = targetButtonTab2[i].offsetParent.id;
				currentButton = this.down('#'+id);
				self.onInitButton(targetButtonTab2);
				currentButton.setCls('scrollspy-dashboard-active');

			} else if (y>=targetLabelTab[targetLabelTab.length-1].offsetTop) {
				
				id = targetButtonTab2[targetButtonTab2.length-1].offsetParent.id;
				currentButton = this.down('#'+id);
				self.onInitButton(targetButtonTab2);
				currentButton.setCls('scrollspy-dashboard-active');
			}
		}

	},

	onInitButton: function (tab) {
		var i , id , currentButton;

		for (i = 0; i < tab.length; i++) {
			id = tab[i].offsetParent.id;
			currentButton = this.down('#'+id);
			currentButton.setCls('scrollspy-dashboard');
        }
	}

});
