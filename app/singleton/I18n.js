/**
 * @author youssef zine el abidine <youssef.zineelabidine@sage.com>
 * @class SageCME.singleton.I18n
 *
 * I18n is class that ensure translation to SageCME
 */

Ext.define('SageCME.singleton.I18n', {
	alternateClassName : ['I18n'],

	config : {},

	statics: {
		/**
		 * set default language of this class 
		 * @type {string}
		 */
		defaultLanguage: 'fr-FR',

		/**
		 * currently used language 
		 * @type {string}
		 */
		localLanguage: '',
		
		/**
		 * dictionary object
		 * @type {object}
		 */
		dictionary: {},

		/**
		 * initialize the I18n class with a config
		 *    {
		 *        "ressources": {
		 *            "en-US": {...},
		 *            "fr-FR": {...}
		 *        },
		 *        "defaultLanguage": "en-US",
		 *        "localLanguage": "en-US"
		 *    }
		 * @param  {object} config A configuration object
		 */
		init: function (config) {
			// test if config.defaultLanguage exist we set the defaultlanguage of I18n
			config.defaultLanguage = config.defaultLanguage || this.defaultLanguage;

			// test if config.localLanguage doesnot belong to our resources files we set 
			// config.defaultLanguage
			if (
				config.localLanguage &&
				config.resources &&
				!config.resources.hasOwnProperty(config.localLanguage)
			) {
	            config.localLanguage = config.defaultLanguage;
	        }

	        // test if config.localLanguage is empty string
	        if (config.localLanguage && config.localLanguage.length!==0) {
				this.localLanguage = config.localLanguage;
			} else {
				this.localLanguage = this.defaultLanguage;
			}

			localStorage.localLanguage = this.localLanguage;

			// to set the whole data resources to dictionary
			if(config.resources) {
				this.dictionary = config.resources;
			}
		},
	
		/**
		 * translate for special Key and lanaguage
		 * @param  {string} key      
		 * @param  {string} language 
		 * @return {string}
		 */
		translate: function (key, language) {
			var me=this;
			// test if language exist 
			if(!language && this.localLanguage){
				language = this.localLanguage;
			}
			
			// test if language exist and it does not belong to dictionary of I18n we return key 


			// return the key corresponding to special key and special language
			if(
				this.dictionary &&
				this.dictionary[language]
			)
			{
				if(this.dictionary[language].hasOwnProperty(key)) {
					return this.dictionary[language][key];
				}

				else if (this.dictionary[me.defaultLanguage].hasOwnProperty(key)){
					return this.dictionary[me.defaultLanguage][key];
				}
			
				else {
					return key;
				}
			}
			else {
				return key;
			}
			
		}

	},

	constructor: function(config) {
		this.initConfig(config);
		this.callParent([config]);
	}

});