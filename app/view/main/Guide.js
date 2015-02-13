/**
 * Created by Niji
 *
 * @class Guide
 *
 * Description
 */


Ext.define('SageCME.view.main.Guide', {
    extend   : 'Ext.Container',
    xtype    : 'guide',
    requires : [
        'Ext.tab.Panel',
        'Ext.carousel.Carousel',
        'Ext.TitleBar'
    ],
    config   : {

        layout : {
            type  : 'vbox',
            align : 'stretch'
        },
        items : [
            {
                xtype: 'titlebar',
                docked: 'top',
                title: 'Guide',
                items: [
                    {
                        iconCls: 'home',
                        align: 'left',
                        name :'close-button'
                    }
                ]

            },
            {
                xtype: 'carousel',
                cls: 'guide',
                defaults: {
                    styleHtmlContent: true
                },
                flex:1,
                items: [
                    {
                        html : '<img src="resources/img/image1.png"/>'

                    },
                    {
                    	html : '<img src="resources/img/image2.png"/>'
                    },
                    {
                    	html : '<img src="resources/img/image3.png"/>'
                    },
                    {
                    	html : '<img src="resources/img/image4.png"/>'
                    }
                ]
            }
        ]

    }
});