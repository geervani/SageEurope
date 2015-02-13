/* global Ext */
/**
* @author Said Ouarrich <said.ouarrich@sage.com>
* This class contains currents informations user.
*/
Ext.define('SageCME.view.UserInfo',{
	extend:'Ext.Container',
	xtype:'userInfo',
	requires:['Ext.Label'],
	config:{
		docked : 'bottom',
		width  : '100%',
		cls:'userInfo',
		items  : [
			{
	            xtype : 'label',
	            id    : 'connectionStatus',
	            cls   : '',
	            html  : ''
			},
	        {
	            xtype : 'label',
	            id    : 'fullName',
	            cls   : 'full-name',
	            html  : ''
	        },
	        {
	            xtype : 'label',
	            id    : 'lastImportDate',
	            cls   : 'last-import',
	            html  : ''
	        }
		]
	}
});