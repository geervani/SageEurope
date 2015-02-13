/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 * @date: 25/09/13
 *
 * @class SageCME.controller.SettingsController
 *
 * This controller handle the settings view
 */

Ext.define("SageCME.controller.main.SettingsController", {
    extend : 'Ext.app.Controller',

    requires : [
        "SageCME.view.main.Settings"
    ],

    config : {
        refs    : {
            loginButton            : "button[name=login-button]",
            submitButton            : "button[name=submit-button]",
            refreshConnectionButton : "button[name=refresh-connection-button]",
            settingsForm            : 'settings'
        },
        control : {
            HermesJSManager                : {
                connectionwin  : 'refreshConnectionStatus',
                connectionfail : 'refreshConnectionStatus',
                becameonline   : 'refreshConnectionStatus',
                ready          : 'refreshConnectionStatus'
            },
            loginButton            : {
                tap : 'onLoginButtonTap'
            },
            submitButton            : {
                tap : 'onSubmitButtonTap'
            },
            refreshConnectionButton : {
                tap : 'onRefreshConnectionButtonTap'
            },
            settingsForm            : {
                initialize : 'onFormInitialize'
            }
        }
    },

    /**
     * Called on controller startup.
     *
     * Sets default values in localStorage
     */
    launch : function () {
        localStorage["env"] = localStorage["env"] || "dev";
    },

    /**
     * Call native function to call native
     */
    onLoginButtonTap : function () {

        HermesJSManager.on("connexionWin","onFormInitialize");
        HermesJSManager.connect();

    },

    /**
     * Saves form values in localStorage
     */
    onSubmitButtonTap : function () {
        var value,
            values = this.getSettingsForm().getValues();
        for (value in values) {
            localStorage[value] = values[value];
        }
        Ext.Msg.alert('Enregistrement', 'Les nouveaux paramètres ont été sauvegardés.', Ext.emptyFn);
    },

    /**
     * Loads form values from localStorage and refresh connexion status
     */
    onFormInitialize : function () {
        var settingsForm = this.getSettingsForm(),
            value,
            values = settingsForm.getValues();
        for (value in values) {
            values[value] = localStorage[value];
        }
        settingsForm.setValues(values);

        this.refreshConnectionStatus();
    },

    /**
     * Saves form values in localStorage
     */
    onRefreshConnectionButtonTap : function () {
        HermesJSManager.connect();
    },

    refreshConnectionStatus : function () {
        var settingsForm = this.getSettingsForm();
        if (settingsForm) {
            settingsForm.setValues(
                {
                    connected : HermesJSManager.isConnected(),
                    online    : HermesJSManager.isOnline()
                }
            )
        }
    }
});