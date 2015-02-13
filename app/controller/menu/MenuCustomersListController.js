/**
 * Created by Niji
 * User: Mickael GUESDON
 * Date: 30/09/13
 *
 * @author Mickael GUESDON <mickael.guesdon@niji.fr>
 *
 * @docauthor Mickael GUESDON <mickael.guesdon@niji.fr>
 *
 * @class SageCME.controller.menu.MenuCustomersListController"
 *
 * Description
 */


Ext.define("SageCME.controller.menu.MenuCustomersListController", {
    extend : 'Ext.app.Controller',

    requires : [
        "SageCME.view.menu.CustomersList"
    ],

    config : {
        refs    : {
            menuList   : 'customer-list',
            menuSearch : 'customer-list searchfield'
        },
        control : {
            menuList   : {
                itemsingletap : 'onListItemTap'
            },
            menuSearch : {
                clearicontap : 'onSearchClearIconTap',
                keyup        : 'onSearchKeyUp',
                focus        : 'scrollToTop'
            }
        }
    },

    launch        : function () {

    },
    /**
     *
     * @param context
     * @param index
     * @param target
     * @param record
     * @param e
     * @param eOpts
     */
    onListItemTap : function (context, index, target, record, e, eOpts) {
        // change view only if we will go to a new customer
        if (!SageCME.currentCustomer || !SageCME.currentCustomer.isModel || SageCME.currentCustomer.get("$key") != record.get("$key")) {
            var url = 'customer-detail/' + record.get("$key");
            // trick to keep customer informations when offline
            SageCME.currentCustomer = record;

            this.getApplication().redirectTo(url);
        }
    },

    scrollToTop: function(){
        this.getMenuList().getScrollable().getScroller().scrollTo(0, 1, true);
    },

    onSearchKeyUp : function (field) {
        //get the store and the value of the field
        var value = field.getValue(),
            store = this.getMenuList().getStore();

        //first clear any current filters on the store. If there is a new value, then suppress the refresh event
        store.clearFilter(!!value);

        //check if a value is set first, as if it isnt we dont have to do anything
        if (value) {
            //the user could have entered spaces, so we must split them so we can loop through them all
            var searches = value.split(','),
                regexps = [],
                i, regex;

            //loop them all
            for (i = 0; i < searches.length; i++) {
                //if it is nothing, continue
                if (!searches[i]) {
                    continue;
                }

                regex = searches[i].trim();
                regex = regex.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");

                //if found, create a new regular expression which is case insenstive
                regexps.push(new RegExp(regex.trim(), 'i'));
            }

            //now filter the store by passing a method
            //the passed method will be called for each record in the store
            store.filter(function (record) {
                var matched = [];

                //loop through each of the regular expressions
                for (i = 0; i < regexps.length; i++) {
                    var search = regexps[i],
                        didMatch = search.test(record.get('name'));

                    //if it matched the first or last name, push it into the matches array
                    matched.push(didMatch);
                }

                return (regexps.length && matched.indexOf(true) !== -1);
            });
        }
        this.scrollToTop();
    },

    /**
     * Called when the user taps on the clear icon in the search field.
     * It simply removes the filter form the store
     */
    onSearchClearIconTap : function () {
        //call the clearFilter method on the store instance
        this.getMenuList().getStore().clearFilter();
    }


});