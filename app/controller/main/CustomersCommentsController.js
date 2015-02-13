/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 12/11/2013
 *
 * @class SageCME.controller.CustomersCommentsController
 *
 * This controller handle the Home view
 */

Ext.define("SageCME.controller.main.CustomersCommentsController", {
    extend : 'Ext.app.Controller',

    requires : [
        'Ext.Panel',
        'Ext.dataview.List'
    ],

    config : {
        refs    : {
            button : 'customers-comments'
        },
        control : {
            button : {
//                tap : 'showPanel'
            }
        }
    }
//
//    getCommentsPanel : function () {
//        if (!this.listPanel) {
//            this.listPanel = Ext.create('Ext.Panel',
//                                        {
//                                            left          : 0,
//                                            top           : 0,
//                                            modal         : true,
//                                            cls           : Ext.baseCSSPrefix + 'select-overlay',
//                                            layout        : 'fit',
//                                            hideOnMaskTap : true,
//                                            width         : Ext.os.is.Phone ? '14em' : '18em',
//                                            height        : (Ext.os.is.BlackBerry && Ext.os.version.getMajor() === 10) ? '12em' : (Ext.os.is.Phone ? '12.5em' : '22em'),
//                                            items         : {
//                                                xtype     : 'list',
//                                                store     : {
//                                                    xclass : 'SageCME.store.CommentsStore'
//                                                },
//                                                itemTpl   : '<span class="x-list-label">{' + this.getDisplayField() + ':htmlEncode}</span>',
//                                                listeners : {
//                                                    select  : this.onListSelect,
//                                                    itemtap : this.onListTap,
//                                                    scope   : this
//                                                }
//                                            }
//                                        }
//            );
//        }
//
//        return this.listPanel;
//    },
//
//    showPanel : function () {
//        var panel = this.getCommentsPanel();
//            Ext.Viewport.add(panel);
//
//        panel.showBy(this.getButton().getComponent(), null);
//    }
});