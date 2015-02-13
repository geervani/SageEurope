/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 23/09/13
 *
 * @class SageCME.view.main.Settings
 *
 * This view shows the app settings (for dev only)
 */
Ext.define('SageCME.view.main.Settings', {
    extend : 'Ext.form.FormPanel',
    xtype  : 'settings',
    requires:[
        'Ext.form.FieldSet',
        'Ext.field.Select'
    ],
    config : {
        items : [
            {
                xtype : 'fieldset',
                title : 'Application - '+ window.sageCmeVersion,
//                instructions : 'Tell us all about yourself',
                items : [
                    {
                        xtype   : 'selectfield',
                        name    : 'env',
                        label   : 'Environnement',
                        options : [
                            {text : 'Pré-Production', value : 'preprod'},
                            {text : 'Développement', value : 'dev'}
                        ]
                    }
                ]
            },
            {
                xtype : 'fieldset',
                title : 'Utilisateur',
                items : [
                    {
                        xtype : 'textfield',
                        name  : 'authToken',
                        label : 'Token'
                    }
                ]
            },
            {
                xtype : 'button',
                name  : 'login-button',
                text  : 'Login',
                ui    : 'confirm'
            },
            {
                xtype : 'button',
                name  : 'submit-button',
                text  : 'Sauvegarder',
                ui    : 'confirm'
            },
            {
                xtype : 'fieldset',
                title : 'Etat de la connexion',
                instructions : 'Affiche des informations sur la connexion avec le SDK Hermes',
                items : [
                    {
                        xtype : 'checkboxfield',
                        name  : 'online',
                        label : 'Est en ligne',
                        value: false,
                        disabled: true
                    },
                    {
                        xtype : 'checkboxfield',
                        name  : 'connected',
                        label : 'Est connecté',
                        value: false,
                        disabled: true
                    }
                ]
            },
            {
                xtype : 'button',
                name  : 'refresh-connection-button',
                text  : 'Rafraichir (Sync)',
                ui    : 'action'
            }
        ]
    }
});