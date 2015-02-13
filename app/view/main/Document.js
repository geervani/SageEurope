/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 23/09/13
 *
 * @class SageCME.view.Home
 *
 * This view is the home page
 */
Ext.define('SageCME.view.main.Document', {
    extend   : 'Ext.Container',
    xtype    : 'document',
    requires : [
        'Ext.tab.Panel'
    ],
    config   : {

        flex:'2',
        layout : {
            type  : 'vbox',
            align : 'stretch'
        },

        cls:'document-container',

        items : [
            {
                layout : {
                    type  : 'hbox'
                },
                items: [
                    {
                        layout : {
                            type  : 'vbox'
                        },
                        cls:'period-container',
                        items:[
                            {
                                xtype:'label',
                                html:'Période de référence'
                            },
                            {
                                layout : {
                                    type  : 'vbox'
                                },
                                cls: 'date-container',
                                items:[
                                    {
                                        xtype:'label',
                                        cls:'top-text',
                                        html:'Du 31 aout 2013'
                                    },
                                    {
                                        xtype:'label',
                                        html:'Au 31 aout 2013'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        layout : {
                            type  : 'vbox'
                        },
                        cls:'period-container',
                        items:[
                            {
                                xtype:'label',
                                html:'Période de comparaison'
                            },
                            {
                                layout : {
                                    type  : 'vbox'
                                },
                                cls: 'date-container',
                                items:[
                                    {
                                        xtype:'label',
                                        cls:'top-text',
                                        html:'Du 31 aout 2013'
                                    },
                                    {
                                        xtype:'label',
                                        html:'Au 31 aout 2013'
                                    }
                                ]
                            }

                        ]
                    },
                    {
                        layout : {
                            type  : 'vbox'
                        },
                        items:[
                            {
                                xtype:'label',
                                html:'Prompts'
                            },
                            {
                                layout : {
                                    type  : 'hbox'
                                },
                                items:[
                                    {
                                        xtype:'button',
                                        text:'Clients'
                                    },
                                    {
                                        xtype:'button',
                                        text:'Departements'
                                    },
                                    {
                                        xtype:'button',
                                        text:'Autres'
                                    }
                                ]
                            }

                        ]
                    }
                ]
            },
            {
                flex:8,
                cls:'detail-view',
                layout : {
                    type  : 'hbox'
                },
                items: [

                ]
            }
        ]
    }
});
