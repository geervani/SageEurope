/* global I18n */
/**
 * @author Layla AIT LAARAJ <layla.aitllaraj@sage.com>
 * @class "SageCME.utils.Utils"  
 * 
 */
Ext.define('SageCME.utils.Utils', {
	alternateClassName: ['Utils'],

	singleton: true,

	config: {

	},

	constructor : function(config){
		this.initConfig(config);
	},

	/**
	 * 
	 * @param  {Array} inputs Array containing current prompt options
	 * @return {String} formated string to display as data definition of the current kpi parameter
	 */
	formatDefaultValue: function (inValue) {
		//TODO: case no option selected
		var inputs = inValue.input['default'];


		if (inValue.input['default'] === '{{$all}}' || inValue.input['default'][0] === '{{$all}}'){
			return '<dd> - ' + I18n.translate('prompts.allValues') + '</dd>';
		}else if (inputs.length > 0){
			return this.formatInputsTable(inputs);
		}else if (inputs.length === 0){
			return '<dd> -' + I18n.translate('prompts.emptyValue') + '</dd>';
		}else {
			return '<dd> - ' + inValue.input['default'] +'</dd>';
		}
		
	},

	/**
	 * 
	 * @param  {Array} inputs Array containing current prompt options
	 * @return {String} formated string to display as data definition of the current kpi parameter
	 */
	formatInputsTable : function (inputs) {
		var i,
			string = '';

		if (inputs.length > 0 && inputs.length < 4) {
			for ( i = 0 ; i < inputs.length; i++) {
				if (inputs[i]) {
					string += '<dd> - ' + inputs[i] + '</dd>';
				}
			}
			return string;
		}else {
			string = '<dd> - ' + inputs[0] + '</dd>';
			string += '<dd> - ' + inputs[1] + '</dd>';
			string += '<dd> - ' + inputs[2] + '</dd>';
			string += '<dd> - ...</dd>';
			return string;
		}
	}
 
});
