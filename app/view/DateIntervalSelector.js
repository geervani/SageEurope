/* global I18n */
/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 17/10/13
 *
 * @class SageCME.view.DateIntervalSelector
 *
 */

Ext.define('SageCME.view.DateIntervalSelector', {
    extend : 'Ext.form.FieldSet',
    xtype  : 'dateinterval-selector',

    requires : [
        'Ext.field.DatePicker'
    ],

    config : {
        /**
         * Default dates
         */
        value         : {},

        /* Default period */
        defaultPeriod : {},

        /**
         * Period id from HermesJS shortcut
         */
        periodId : -1,

        /**
         * Allow null value
         */
        allowNull : false,

        /**
         * Null text
         */
        nullText : 'Désactivé',

        /**
         * Pre defined date intervals
         */
        dateIntervals    : [],
        selectedInterval : -1,

        cls    : 'period-container',

        /**
         * Do not change
         */
        items : [
            {
                xtype   : 'selectfield',
                cls     : 'date-select-period',
                options : []
            },
            {
                layout : {
                    type : 'hbox'
                },
                cls    : 'date-container',
                items  : [
                    {
                        xtype      : 'datepickerfield',
                        itemId     : 'datepickerfield1',
                        name       : 'start',
                        label      : '',
                        labelWidth : '',
                        cls        : ['datepickerfield','start'],
                        picker     : {
                            slotOrder : ['day', 'month', 'year'],
                            doneButton: 'Valider',
                            cancelButton: 'Annuler'
                        }
                    },
                    {
                        xtype      : 'datepickerfield',
                        itemId     : 'datepickerfield2',
                        name       : 'end',
                        label      : '',
                        labelWidth : '',
                        cls        : ['datepickerfield','end'],
                        picker     : {
                            slotOrder : ['day', 'month', 'year'],
                            doneButton: 'Valider',
                            cancelButton: 'Annuler'
                        }
                    }
                ]
            }
        ]
    },

    /* jshint -W101 */

    /**
     * @event change
     * Fires when value (start or end date) has changed
     * @param {SageCME.view.DateIntervalSelector} this
     * @param {Object} newValue The new value
     * @param {Object} oldValue The old value
     */

    onInitialize : function () {
        this.down('#datepickerfield1').setPicker({
            slotOrder : ['day', 'month', 'year'],
            doneButton: I18n.translate('prompts.applyChanges'),
            cancelButton: I18n.translate('dialog.cancel')
        });
        this.down('#datepickerfield2').setPicker({
            slotOrder : ['day', 'month', 'year'],
            doneButton: I18n.translate('prompts.applyChanges'),
            cancelButton: I18n.translate('dialog.cancel')
        });
        this.down('#datepickerfield1').setLabel(I18n.translate('kpiDetail.fromText'));
        this.down('#datepickerfield2').setLabel(I18n.translate('kpiDetail.toText'));
        this.down('selectfield').on('change', this.onIntervalChange, this);
        this.down('datepickerfield[name=start]').on('change', this.onIntervalChange, this);
        this.down('datepickerfield[name=end]').on('change', this.onIntervalChange, this);

    },

    /**
     * @private
     * @returns {*}
     */
    constructor : function () {
        // redefining the date format
        Ext.Date.defaultFormat = 'd/m/Y';

        Ext.Date.dayNames = [
            'Dimanche',
            'Lundi',
            'Mardi',
            'Mercredi',
            'Jeudi',
            'Vendredi',
            'Samedi'
        ];
        Ext.Date.monthNames = [
            I18n.translate('month.Jan'),
            I18n.translate('month.Feb'),
            I18n.translate('month.Mar'),
            I18n.translate('month.Apr'),
            I18n.translate('month.May'),
            I18n.translate('month.Jun'),
            I18n.translate('month.Jul'),
            I18n.translate('month.Aug'),
            I18n.translate('month.Sep'),
            I18n.translate('month.Oct'),
            I18n.translate('month.Nov'),
            I18n.translate('month.Dec')
        ];

        var ret = this.callParent(arguments);

        this.onInitialize();

        return ret;
    },


    /**
     * @private
     * @param newValue
     * @param oldValue
     */
    updateValue : function (newValue, oldValue) {
        var start = this.getItems().getAt(1).getAt(0),
            end = this.getItems().getAt(1).getAt(1);

        if (newValue !== oldValue &&
            newValue.start !== undefined && newValue.end !== undefined) {
            if (newValue.start !== start.getValue()) {
                start.setValue(newValue.start);
            }
            if (newValue.end !== end.getValue()) {
                end.setValue(newValue.end);
            }
            this.fireEvent('change', this, newValue, oldValue);
        }
    },

    /**
     * @private
     * Triggered when any field change
     */
    onIntervalChange : function (target, newIntervalIndex) {
        var select = this.getItems().getAt(0),intervals,startValue,endValue,newInterval,options,i,
            start = this.getItems().getAt(1).getAt(0),
            len,j,
            me=this,
            end = this.getItems().getAt(1).getAt(1);

        // if the select has changed
        newInterval = this.getDateIntervals()[newIntervalIndex];
        if (target.$className === 'Ext.field.Select') {

            this.setSelectedInterval(newIntervalIndex);
            if (typeof newInterval === 'object' && newInterval && newInterval.start && newInterval.end) {
                start.suspendEvents();
                end.suspendEvents();
                this.setValue({
                    start : newInterval.start,
                    end   : newInterval.end
                });
                start.resumeEvents(true);
                end.resumeEvents(true);
            } else if (newIntervalIndex === null) {
                start.suspendEvents();
                end.suspendEvents();
                this.setValue({
                    start : null,
                    end   : null
                });
                start.resumeEvents(true);
                end.resumeEvents(true);
            }
        }
        // a date has changed
        else {
            //this.setSelectedInterval(-1);
            select.suspendEvents(false);
            intervals = this.getDateIntervals(),
                startValue = start.getValue(),
                endValue = end.getValue();

            if (startValue && endValue) {
                if (startValue > endValue) {
                    if (target === start) {
                        endValue = startValue;
                    } else {
                        startValue = endValue;
                    }
                }

                start.suspendEvents();
                end.suspendEvents();

                /* added by youssef zine el abidine 
                * adapting kpi dataviz period according to the customized date fields
                */
                me.setSelectedInterval(-1);

                this.setValue({
                    start : startValue,
                    end   : endValue
                });
                start.resumeEvents(true);
                end.resumeEvents(true);

                for (i = 0, len = intervals.length; i < len; i++) {
                    // check if it matches a date interval
                    if (intervals[i] && intervals[i].start.getDate() === startValue.getDate() && intervals[i].start.getMonth() === startValue.getMonth() && intervals[i].start.getFullYear() === startValue.getFullYear() &&
                             intervals[i].end.getDate() === endValue.getDate() && intervals[i].end.getMonth() === endValue.getMonth() && intervals[i].end.getFullYear() === endValue.getFullYear()
                        ) {
                        me.setSelectedInterval(j);
                        select.setValue(intervals[i].name);
                        select.resumeEvents(true);
                        return;
                    }
                }

                // if it has not matched any interval, set it to last option
                options = select.getOptions();
                select.setValue(options[options.length - 1].text);
                select.resumeEvents(true);
            }
        }
    },

    /**
     * @private
     * Triggered when dateIntervals config value is changed or initialized
     */
    updateDateIntervals : function () {
        var select = this.getItems().getAt(0),index,
            start = this.getItems().getAt(1).getAt(0),
            end = this.getItems().getAt(1).getAt(1),options,option,
            dateIntervals = this.getDateIntervals(),
            startValue = start.getValue().getTime(),
            endValue = end.getValue().getTime();

        // sets option according to new date intervals
        options = Ext.Array.map(dateIntervals, function (item, index) {
            return {text : item.name, value : index};
        });


        options.push({
            text  : I18n.translate('prompts.customPeriod'),
            value : -1
        });

        if (this.getAllowNull()) {

            options.push({
                text  : this.getNullText(),
                value : null
            });
        }

        select.setOptions(options);

        // select current value
        option = Ext.Array.filter(dateIntervals, function (item) {
            return (startValue === item.start.getTime() && endValue === item.end.getTime());
        });

        if (option.length > 0) {
            index = Ext.Array.indexOf(dateIntervals, option[0]);
            select.setValue(index);
        } else {
            select.setValue(-1);
        }
    },

    updateDefaultPeriod : function (defaultPeriod) {
        var period = this.formatPeriod(defaultPeriod);
        this.setValue(period);
    },

    /**
     * Use this methode to format period from metadatamodel to dateIntervalSelector period
     * @param period
     * @returns {{name: *, start: Date, end: Date, $key: (*|string|$key|$key|$key|$key|$key|hermes.getResourceLists.$key|hermes.getResourceLists.$key|hermes.getResourceLists.$key|.operator.$key|.operator.$key|.operator.$key|.operator.$key|.operator.$key|.operator.$key|.operator.$key|.operator.$key|.dataTypes.NumericVariation.$key|.dataTypes.PercentageVariation.$key|$key|.dataType.$key|.dataTypes.NumericVariation.$key|.dataTypes.PercentageVariation.$key|$key|.dataType.$key|.dataTypes.NumericVariation.$key|.dataTypes.PercentageVariation.$key|$key|.dataType.$key|.dataTypes.NumericVariation.$key|.dataTypes.PercentageVariation.$key|$key|.dataType.$key|$key|$key|$key|$key|$key|$key|shortcut.$key|$key|shortcut.$key|$key|shortcut.$key|$key|shortcut.$key|$key), period: *}}
     */
    formatPeriod : function (period) {
        var mydateStart = period.start.split('-'),
        theDateStart = new Date(mydateStart[0],mydateStart[1]-1,mydateStart[2]),
        mydateEnd = period.end.split('-'),datePeriod,
        theDateEnd = new Date(mydateEnd[0],mydateEnd[1]-1,mydateEnd[2]);

        datePeriod = {
            name   : period.name,
            start  : theDateStart,
            end    : theDateEnd,
            $key   : period.$key,
            period : period
        };

        return datePeriod;

    },

    getPeriod : function () {
        //Return the selected period
        var selectedIntervalIdx = this.getSelectedInterval(),tmpStartDate,tmpEndDate,
        tmpStartDateFormatted,tmpEndDateFormatted;
        if (selectedIntervalIdx >= 0) {
            return this.getDateIntervals()[selectedIntervalIdx].period;
        }
        else {
            tmpStartDate = this.getItems().getAt(1).getAt(0).getValue();
            tmpEndDate = this.getItems().getAt(1).getAt(1).getValue();

            if (!tmpStartDate || !tmpEndDate) {
                return null;
            }

            tmpStartDateFormatted = tmpStartDate.getFullYear() + '-' + (tmpStartDate.getMonth() + 1) + '-' + tmpStartDate.getDate();
            tmpEndDateFormatted = tmpEndDate.getFullYear() + '-' + (tmpEndDate.getMonth() + 1) + '-' + tmpEndDate.getDate();

            return {
                'start' : tmpStartDateFormatted,
                'end' : tmpEndDateFormatted,
                'name' : I18n.translate('prompts.customPeriod'),
                '$key' : 'custom'
            };
        }
    }
})
;
