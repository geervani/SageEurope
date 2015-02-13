/* global I18n, SageCME*/
/**
 * Created by Niji
 * User: Mickael GUESDON
 * Date: 30/09/13
 *
 * @author Mickael GUESDON <mickael.guesdon@niji.fr>
 *
 *
 @docauthor Mickael GUESDON <mickael.guesdon@niji.fr>
 *
 * @class MyClass
 *
 * Description
 */


Ext.define('SageCME.view.main.Login', {
    extend   : 'Ext.Container',
    xtype    : 'login',
    requires : [
        'Ext.tab.Panel',
        'Ext.Img'
    ],
    config   : {
        /* jshint -W101 */
        contactUrl: 'https://hermes.sage.fr/webresources/services/public/forms/scv/contact/index.html',

        layout : {
            type  : 'vbox',
            align : 'stretch'
        },
        cls    : 'login-container',

        items : [
            {
                xtype : 'container',
                layout : {
                    type  : 'vbox',
                    align : 'stretch'
                },
                items : [
                    {
                        html   : 'Accélérez votre développement commercial !',
                        itemId : 'introduction-label',
                        cls    : 'introduction-label'
                    },
                    {
                        xtype  : 'container',
                        layout : {
                            type  : 'hbox',
                            align : 'stretch'
                        },
                        items  : [
                            {
                                xtype  : 'button',
                                itemId : 'has-account',
                                name   : 'has-account',
                                text   : '',
                                ui     : 'primary'
                            },
                            {
                                xtype  : 'button',
                                name   : 'test-app',
                                itemId : 'test-app',
                                text   : '',
                                ui     : 'primary'
                            }
                        ]
                    }
                ]
            },
            {
                xtype  : 'container',
                cls    : 'login-bottom-container',
                layout : {
                    type : 'vbox'
                },
                items  : [
                    {
                        xtype  : 'container',
                        width  : 410,
                        docked : 'left',
                        cls    : 'video-container',
                        layout : {
                            type : 'vbox'
                        },
                        items  : [
                            {
                                xtype : 'image',
                                cls   : 'scrennshot',
                                itemId : 'login-video-poster',
                                width : 410,
                                height: 231
                            },
                            {
                                /*jshint -W101*/
                                itemId : 'more-info-label',
                                html: '<p>{0}<a href="{1}"; onclick="window.open(this.href,\'_system\'); return false;"">{2}</a></p>',
                                /*jshint +W101*/
                                cls  : 'more-informations'
                            }
                        ]
                    },

                    {
                        itemId: 'new-experience-label',
                        html : '',
                        cls  : 'secondary-teaser'
                    },
                    {
                        xtype : 'button',
                        itemId: 'contact-us',
                        name  : 'contact-us',
                        text  : '',
                        ui    : 'secondary'
                    }
                ]
            }
        ]

    },

    initialize : function () {
        var moreInfoLabel = this.down('#more-info-label'),
            loginVideoPoster = this.down('#login-video-poster'),

            pictureSrc = SageCME.app.getPictureLoginPage(localStorage.localLanguage),

            tpl = new Ext.Template(moreInfoLabel._html),
            argsArray = [
                I18n.translate('welcome.doYouWantToKnowMoreInfo'),
                this.getContactUrl(),I18n.translate('welcome.clickHere')
            ];

        tpl = tpl.apply(argsArray);

        loginVideoPoster.setSrc(pictureSrc);
        moreInfoLabel.setHtml(tpl);

        /* jshint -W101 */
        this.down('#has-account').setText(I18n.translate('welcome.connectButton'));
        this.down('#test-app').setText(I18n.translate('welcome.testButton'));
        //this.down('#more-info-label').setHtml('<p>' + I18n.translate('welcome.doYouWantToKnowMore') + '</p>');
        this.down('#new-experience-label').setHtml('<p>' + I18n.translate('welcome.tryContentText') + '</p>');
        this.down('#contact-us').setHtml(I18n.translate('charms.about.contactus'));
        this.down('#introduction-label').setHtml(I18n.translate('welcome.videoTitle'));
        /* jshint +W101 */
    }

});