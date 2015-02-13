/**
 * Created by Niji.
 * User: Mickael GUESDON
 * Date: 30/09/13
 *
 * @author Mickael GUESDON <mickael.guesdon@niji.fr>
 *
 * @docauthor Mickael GUESDON <mickael.guesdon@niji.fr>
 *
 * @class MyClass
 *
 * Description
 */

Ext.define('Document', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['title', 'description','date']
    }
});

var store = Ext.create('Ext.data.Store', {
    model: 'Document',
    sorters: 'title',

    grouper: {
        groupFn: function(record) {
            return record.get('date');
        }
    },

    data: [
        { title: 'Facture 1',   description: 'Diamant Vert' , date:'Juin 2012'},
        { title: 'Facture 2',   description: 'Diamant Vert' , date:'Juin 2012'},
        { title: 'Facture 3',   description: 'Diamant Vert' , date:'Juin 2012'},
        { title: 'Facture 4',   description: 'Diamant Vert' , date:'Septembre 2012'},
        { title: 'Facture 5',   description: 'Diamant Vert' , date:'Septembre 2012'}
    ]
});


Ext.define('SageCME.view.menu.MenuDocumentsList', {
    extend   : 'Ext.Container',
    xtype    : 'menu-documents',
    requires : [
        'Ext.tab.Panel',
        'Ext.Video',
        'Ext.dataview.List'
    ],
    config   : {
        layout: 'vbox',

        items: [
            {
                xtype: 'toolbar',
                action: 'search',
                docked: 'top',
                scrollable: false,
                width:'100%',

                items: [
                    { xtype: 'spacer' },
                    {
                        xtype: 'searchfield',
                        width: '90%',
                        placeHolder: 'Keywords...'
                    },
                    { xtype: 'spacer' }
                ]
            },
            {
                height : '100%',
                xtype:'list',
                cls: 'document-list',
                itemTpl: '{title}',
                style :'color:#4F4F4F;background-color:#FFF;',
                flex:1,
                name:'document-list',
                store: store,
                grouped: true
            }
        ]
    }


});