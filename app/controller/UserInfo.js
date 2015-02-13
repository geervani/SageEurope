/* global Ext, I18n */
/* global HermesJS:true */
/**
* @author Said Ouarrich <said.ouarrich@sage.com>
* 
*/
Ext.define('SageCME.controller.UserInfo', {
	extend : 'Ext.app.Controller',
	requires : [
		'SageCME.view.UserInfo',
		'Ext.Date'
	],
	config : {
		refs    : {
			fullNameUser        : '#fullName',
			lastImportDate      : '#lastImportDate',
			connectionStatus    : '#connectionStatus',
			syncBtn : '#sync-button',
			kpiDetail: 'kpi-detail'
		},
		control : {
			HermesJSManager : {
				ready : 'onHermesJSready',
				networkavailable : 'onNetworkavailable',
				networkunavailable : 'onNetworkunavailable'
			}
		}
	},
	onHermesJSready : function (rootLinks, userDetails) {
		var fullNameUser = this.getFullNameUser(),
		lastImportDate   = this.getLastImportDate(),
		url              = rootLinks.tenantDataInfo.href,
		date,
		lastImportDateTpl;
		
		fullNameUser.setHtml(userDetails.fullName);

		HermesJS.ajax({
			type : 'GET',
			url  : url
		}).then(function(tenantDataInfo){
			date = new Date(tenantDataInfo.lastImportDateTime);
			date = Ext.Date.format(date, 'd/m/y');
			lastImportDateTpl = HermesJS.templateAsString(I18n.translate('sync.dataFreshness'), { s0: date });
			lastImportDate.setHtml(lastImportDateTpl);
		});
	},
	onNetworkavailable : function(){
		this.getConnectionStatus().setCls('connection-status-online');

		if(this.getKpiDetail())
		{
			this.getConnectionStatus().setCls('connection-status-online-minified');
		}

	},
	onNetworkunavailable : function(){
		this.getConnectionStatus().setCls('connection-status-offline');
		
		if(this.getKpiDetail())
		{
			this.getConnectionStatus().setCls('connection-status-offline-minified');
		}
	},
});