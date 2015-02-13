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

Ext.define('SageCME.view.menu.MenuHomeDocuments', {
    extend   : 'Ext.Container',
    xtype    : 'menu-home-documents',
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
                cls: 'home-document-list',
                itemTpl: '{title}',
                style :'color:#4F4F4F;background-color:#FFF;',
                flex:1,
                name:'home-document-list',
                data : [
                    {title: 'Tous les docs'},
                    {title: 'Factures'},
                    {title: 'Bons Commande'},
                    {title: 'Derniers docs'}
                ]
            }
        ]
    }


});