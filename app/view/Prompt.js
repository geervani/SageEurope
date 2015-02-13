/* global HermesJS,HermesJSManager, I18n */

/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 18/10/13
 *
 * @class SageCME.view.Dataviz
 *
 */

Ext.define('SageCME.view.Prompt', {
	extend : 'Ext.field.Select',
	xtype  : 'prompt',

	requires : [
		'Ext.Mask',
		'Ext.device.Connection'
	],
	/* jshint -W101 */
	/* jshint -W109 */

	config : {
		// cls : ['x-button', 'prompt-button'],

		/**
		 * @config {Object} prompt It is an hermes prompt object
		 * It will automatically set the prompt config
		 */
		prompt : null,

		/**
		 * MODE can be SINGLE or MULTI
		 */
		mode : 'SINGLE',

		/**
		 * Default values
		 * Set to null (with autoSelect to true (default)) to select all data automatically
		 */
		values : null,

		/**
		 * Set to false to use a tooltip instead
		 */
		usePicker : false,

		/**
		 * Title
		 */
		label      : '',
		labelWidth : '100%',

		options : [],

		displayField : 'label',

		listeners : [{
				element : 'element',
				event   : 'tap',
				fn      : 'onTap'
			}
		]
		},

		showBy:function(){
			this.callParent(arguments);
		},

		updateMode : function (newMode) {
			if (this.listPanel && this.listPanel.down('list')) {
				this.listPanel.down('list').setMode(newMode);
			}
		},

		onTap : function () {
			var online = Ext.device.Connection.isOnline();
			if(!online) {
				Ext.Msg.alert( I18n.translate('message.alert') , I18n.translate('errorMessage.noConnectionAvailable'));
			}
			else {
				this.fireEvent('tap', this);
				this.showPicker();
				
			}
		},

		/**
		 * Called when the internal {@link #store}'s data has changed.
		 */
		onStoreDataChanged : function (store) {
			var initialConfig = this.getInitialConfig(),
				values = this.getValues();

			if (values || values === 0) {
				this.updateValues(this.applyValues(values));
			}

			if (this.getValues() === null) {
				if (initialConfig.hasOwnProperty('values')) {
					this.setValues(initialConfig.values);
				}

				if (this.getValues() === null && this.getAutoSelect()) {
					if (store.getCount() > 0) {
						this.setValues(store.getData().all);
					}
				}
			}
		},

		originalValues : null,

		/**
		 * Resets the Select field to the initial value
		 * @return {Ext.field.Select} this
		 * @chainable
		 */
		reset : function () {

			if (this.originalValues !== null) {
				this.setValues(this.originalValues);
			}

			return this;
		},

		applyPrompt : function (newPrompt) {
			if (/*!newPrompts.values && */!newPrompt.input.options.$values) {
				this.setLabel('Chargement');
				this.disable();
				HermesJSManager.loadPromptsValues([newPrompt], this,
					function (promptsValues) {
						if (promptsValues.length > 0) {
							newPrompt.input.options.$values = promptsValues[0];
							this.setPrompt(newPrompt);
						}
					});
					// stop value set
				return null;
			} else {
				this.enable();
				return newPrompt;
			}
		},

		/**
		 * Triggered when option config value is changed or initialized
		 * @param newOptions
		 */
		updatePrompt : function (newPrompt) {
			this.setLabel(newPrompt.title);
			if (newPrompt.input.options.$values) {
				this.setOptions(newPrompt.input.options.$values);
			}
			if (newPrompt.input.type === 'multiSelect') {
				this.setMode('MULTI');
			} else {
				this.setMode('SINGLE');
			}
			this.setValues(newPrompt.input['default']);
			this.originalValues = this.getValues();
		},

		/**
		 * Function that check if an option is an object. If not, the value and text
		 * of the option are the same
		 * @param options {Array}
		 */
		applyOptions : function (options) {
			var i, obj;
			for ( i = 0; i < options.length; i++) {
				obj = options[i];
				if (!obj || typeof obj[this.getDisplayField()] === 'undefined' || typeof obj[this.getValueField()] === 'undefined') {
					options[i] = {};
					options[i][this.getDisplayField()] = obj;
					options[i][this.getValueField()] = obj;
				}
				if (!options[i][this.getDisplayField()]) {
					// remove this incorrect value
					options.splice(i, 1);
					i--;
				}
				if(typeof obj === 'object'){
					options[i][this.getDisplayField()] = HermesJS.i18nGet(obj.label);
				}
			}
			return options;
		},

		/**
		 * @private
		 */
		applyValue : function () {
				//removed
		},

		/**
		 * @private
		 */
		applyValues : function (values) {
			if (!Array.isArray(values)) {
				values = [values];
			}

			var records = values,value,index,record,i,
				store = this.getStore();


			if (values.length > 0 && values[0] === '{{$all}}') {
				// select all
				return this.getStore().getData().all;
			}

			for (i = 0; i < values.length; i++) {
				value = values[i],
				index, record;

				//we call this so that the options configruation gets intiailized, so that a store exists, and we can
				//find the correct value
				this.getOptions();


				if ((value !== undefined && !value.isModel) && store) {
					index = store.find(this.getValueField(), value, null, null, null, true);

					if (index === -1) {
						index = store.find(this.getDisplayField(), value, null, null, null, true);
					}

					record = store.getAt(index);
					records[i] = record;
				} else if (value === undefined || value == null) {
					records.splice(i, 1);
					i--;
				}
			}

			return records;
		},

		updateValue : function () {
				//removed
		},

		updateValues : function (newValues, oldValues) {
			this.records = this.applyValues(newValues);

			newValues = this.getValues();
			if (newValues !== oldValues) {
				this.fireEvent('change', this, this.getValues(), oldValues);
			}
			if (this.originalValues === null) {
				this.originalValues = newValues;
			}
		},

		/**
		 * @deprecated
		 * @returns {*}
		 */
		getValue : function () {
				//removed
		},

		getValues : function () {
			var records = this.records || [],i,length,
			values = [];
			for (i = 0, length = records.length; i < length; i++) {
				values.push((records[i] && records[i].isModel) ? records[i].get(this.getValueField()) : null);
			}
			return values;
		},

		/**
		 * Returns the current selected {@link Ext.data.Model record} instance selected in this field.
		 * @return {Ext.data.Model} the record.
		 * @removed
		 */
		getRecord : function () {
				//removed
		},

		/**
		 * Returns the current selected {@link Ext.data.Model record} instance selected in this field.
		 * @return {Ext.data.Model} the record.
		 */
		getRecords      : function () {
				return this.records;
			},
		getTabletPicker : function () {
			var config = this.getDefaultTabletPickerConfig();

			if (!this.listPanel) {
				this.listPanel = Ext.create('Ext.Panel', Ext.apply({
						left          : 0,
						top           : 0,
						modal         : true,
						cls           : [
							Ext.baseCSSPrefix + 'select-overlay',
							this.getMode().toLowerCase(),
							'prompt-panel'
						],
						layout        : 'fit',
						hideOnMaskTap : true,
						width         : Ext.os.is.Phone ? '14em' : '18em',
						height        : (Ext.os.is.BlackBerry && Ext.os.version.getMajor() === 10) ? '12em' : (Ext.os.is.Phone ? '12.5em' : '22em'),
						items         : [
							{
								xtype  : 'titlebar',
								docked : 'bottom',
								cls: ['select-bar'],
								items  : [
									{
										text      : 'Tous',
										itemId    : 'Tous',
										align     : 'left',
										listeners : {
											tap   : this.onSelectAllButtonTap,
											scope : this
										}
									},
									{
										text      : 'Aucun',
										itemId    : 'Aucun',
										align     : 'right',
										listeners : {
											tap   : this.onUnselectButtonTap,
											scope : this
										}
									}
								]
							},
							{
								xtype     : 'list',
								store     : this.getStore(),
								mode      : this.getMode(),
								itemTpl   : "<span class='x-list-label'>{" + this.getDisplayField() + ":htmlEncode}</span>",
								listeners : {
									select  : this.onListSelect,
									itemtap : this.onListTap,
									hide    : this.onListPanelHide,
									scope   : this
								}
							},
							{
								xtype  : 'titlebar',
								docked : 'top',
								items  : [
									{
										text      : 'Annuler',
										itemId    : 'cancelPrompt',
										align     : 'left',
										listeners : {
											tap   : this.onCancelButtonTap,
											scope : this
										}
									},
									{
										text      : 'Valider',
										itemId      : 'validatePrompt',
										align     : 'right',
										listeners : {
											tap   : this.onDoneButtonTap,
											scope : this
										}
									}
								],
							}
						]
					}, config));
				this.listPanel.down('#Tous').setText(I18n.translate('search.filter.all'));
				this.listPanel.down('#Aucun').setText(I18n.translate('prompts.emptyValue'));
				this.listPanel.down('#cancelPrompt').setText(I18n.translate('dialog.cancel'));
				this.listPanel.down('#validatePrompt').setText(I18n.translate('prompts.applyChanges'));
			}

//        var list = this.listPanel.getItems().getAt(0);
//        list.setMode(this.getMode());
//        this.listPanel.on("hide", this.onListPanelHide, this);
			return this.listPanel;
		},

		onListPanelHide : function () {
//        var list = panel.getItems().first();
//        if (list) {
//            var oldValues = this.getValues();
//            var values = list.getSelection();
//            this.setValues(values);
//            var newValues = this.getValues();
//            if (newValues !== oldValues) {
//                this.fireEvent('userchange', this, newValues, oldValues);
//            }
//        }
//        else {
//            this.setValues([]);
//        }
		},

		showPicker : function () {
			if (this.isDisabled()) {
				return;
			}

			var me = this,picker,name,pickerValue,listPanel,list,index,record,records,
				store = me.getStore(),
				value = me.getValue();

			//check if the store is empty, if it is, return
			if (!store || store.getCount() === 0) {
				return;
			}

			if (me.getReadOnly()) {
				return;
			}

			me.isFocused = true;

			if (me.getUsePicker()) {
				picker = me.getPhonePicker(),
				name = me.getName(),
				pickerValue = {};

				pickerValue[name] = value;
				picker.setValue(pickerValue);

				if (!picker.getParent()) {
					Ext.Viewport.add(picker);
				}

				picker.show();
			} else {
				listPanel = me.getTabletPicker(),
					list = listPanel.down('list'),
					index, record;

				if (!listPanel.getParent()) {
					Ext.Viewport.add(listPanel);
				}

				listPanel.showBy(this.element, null);


				records = this.getRecords();
				if (records) {
					this.listPanel.down('list').select(records, null, true);
				}
			}
		},

		onSelectAllButtonTap : function () {
			this.listPanel.down('list').selectAll();
		},
		onUnselectButtonTap  : function () {
			this.listPanel.down('list').deselectAll();
		},
		onCancelButtonTap    : function () {
			this.listPanel.hide();
		},
		onDoneButtonTap      : function () {
			var oldValues,values,newValues,
				list = this.listPanel.down('list'),
				countStoreList = list.getStore().getCount();

			if (list) {
				oldValues = this.getValues();
				values = list.getSelection();
				this.setValues(values);
				newValues = this.getValues();
				if(countStoreList === values.length){
					newValues = '{{$all}}';
				}
				if (newValues !== oldValues) {
					this.fireEvent('userchange', this, newValues, oldValues);
				}
			}
			else {
				this.setValues([]);
			}
			this.listPanel.hide();
		},


		onListTap : function () {
			// We only close the list on tap if the selection mode is SINGLE
			return;
		},

		onListSelect : function () {
			//removed
		},

	});