/* global window, document */
/**
 * Patching navigation view to fire event before popping
 */


Ext.define('NijiLibrary.controller.NijiViewPatch', {
    override : 'Ext.navigation.View',
    pop      : function (count) {
        this.fireEvent('beforePop');
        if (this.beforePop(count)) {
            return this.doPop();
        }
    }
});

/**
 * @author Quentin Decré <quentin.decre@niji.fr>
 * @docauthor Quentin Decré <quentin.decre@niji.fr>
 * @class NijiLibrary.controller.NijiRoutingController
 *
 * This is a special controller designed to manage page transitions in a navigationview.
 * Basically, a navigation view enables you to push and pop pages inside it. But to have a
 * real app-like navigation, you have to :
 * - use site/app maps (with urls)
 * - have button in the navbar which change depending of the current page
 * - handling android backbutton (on phonegap)
 *
 * It also simplifies your life by enabling you to :
 * - do checks before going to a page (check authentification, do some operations).
 * - do some operations after displaying the page
 *
 */

Ext.define('NijiLibrary.controller.NijiRoutingController', {
    extend : 'Ext.app.Controller',

    config : {
        /* jshint -W101 */
        /**
         * @cfg {string} [navigationViewRef=''] The ID of the navigation view to manage.
         *
         * Note : it will automatically create a reference called nijiRoutingControllerNavigationViewReference,
         * which is long enough to avoid collision with one of yours.
         *  @accessor
         */
        navigationViewRef : '',

        /**
         * @cfg {string} [initialRoute=null] The route of the inital page to show
         *  @accessor
         */
        initialRoute : null,

        /**
         * @cfg {boolean} [forceInitialRoute=false] Force the display of this initialRoute page, even if the app is loaded with another hash
         *  @accessor
         */
        forceInitialRoute : false,

        /**
         * @cfg {Array} [pages=[]]this config is an array of the pages of your application, where each page is an object like
         * below :
         *
         *   {
         *        route   : 'your/routeurl/with/optional/:params/in/it',
         *        view    : 'YourAppName.view.YourPageName',
         *        config  : {cls: 'my-cls', width: 300},
         *        title   : 'This is your page title',
         *        buttons : ['buttons-id', 'that-you-want', 'to-have'],
         *        before  : ['functionsThatYou', 'wantToExecuteBefore', 'showingThePage'],
         *        after  : ['oherFunctionsThatYou', 'wantToExecuteAFTER', 'showingThePage'],
         *        isRoot: false
         *    }
         *
         * This is what each page property correspond to :
         *
         * *    route : whenever this  url is matched in the address bar, before function are executed.
         * If all before functions have resumed the action, the specified page is loaded, then after functions
         * are called.
         * *    view : the fully qualified class name of your view
         * *    title : the title of your page
         * *    buttons : an array containing the id of the buttons you want to show on this page
         * *    before : an array containing the name of the functions to execute before showing the page
         * These are usually used to run pre-processing functions like authentication before a certain
         * function is executed. You will get action as a first parameter, which let you the choice to
         * resume the action or doing something else :
         *          //this is run before showing a page for which you must be logged in
         *         authenticate: function(action) {
         *             NijiMobile.authenticate({
         *                 success: function() {
         *                     action.resume();
         *                 },
         *                 failure: function() {
         *                     Ext.Msg.alert('Not Logged In', "You can't do that, you're not logged in");
         *                 }
         *             });
         *         }
         * *    after : an array of functions (like before) to execute after the page has been shown. You will get
         * you url parameters as arguments of these functions :         *
         *          //this is run after showing a page /model/:id where id is the id of the model to display.
         *         refreshContent: function(modelID) {
         *             Ext.getCmp("modelContainer").setData(Ext.getStore("ModelStore").getById(modelID));         *
         *         }
         * *    isRoot : (false by default) means that your page MUST be a first page of the navigation view. So all pages
         *  will be removed before adding this one. It will become your first page. Set isRoot to all pages if you want to
         *  keep only one page at a time in your view (no more a navigation view).
         *
         *  For each page, a function to display this page will be generated.
         *  When your route is "my/route/with/:id/inside" the function will be "goToMyRouteWithIdInside(123)". You can add
         *  as many params as there is in your Url. But you can also do this.getApplication().redirectTo("my/route/with/123/inside");
         * @accessor
         */
        pages : [],

        control : {
            nijiRoutingControllerNavigationViewReference : {
                pop       : 'onMainViewPop',
                push      : 'onMainviewPush',
                beforePop : 'onMainViewBeforePop'
            }
        }
    /* jshint +W101 */
    },

    /**
     * Constructs a new Controller instance
     */
    constructor : function () {
        // creating a reference to the navigation view
        /* jshint -W101 */
        this.config.refs.nijiRoutingControllerNavigationViewReference = this.config.navigationViewRef;

        var pages = this.config.pages;
        this.hashes = [];

        // The callback generator for the function which shows a page
        var generateShowFunction = function (view, title, isRoot, config, buttonsToShow, afterFunctions, hideBackButton) {
            // dont't know why, but arguments variable doesn't work without any parameters here
            return function (arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9) {
                // if root is undefined, set it to false
                isRoot = (typeof(isRoot) === 'boolean') ? isRoot : false;
                // if the page is root, we set it as a unique item, if not, we push it as the main item
                var nijiRoutingControllerNavigationViewReference = this.getNijiRoutingControllerNavigationViewReference(),
                    execAfter = false,

                // We have to apply a transition only if the last pushed hash is different from the window location hash
                newHash = window.location.hash.substr(1),
                indexOfViewInNav,
                numberOfViewsToRemove,
                buttonCmpToShow,
                buttonCmpToHide,
                button;

                if (this.hashes[this.hashes.length - 1] !== newHash) {
                    //push the new view
                    config = Ext.Object.merge({
                        title : title
                    }, config);

                    // we check if the view is already in the navigation view to avoid deleting it and then
                    // create it again
                    // It's just like clicking on back button
                    indexOfViewInNav = Ext.Array.indexOf(this.hashes, newHash);
                    if (indexOfViewInNav >= 0) {
                        numberOfViewsToRemove = this.hashes.length - indexOfViewInNav - 1;
                        // remove unused views
                        nijiRoutingControllerNavigationViewReference.pop(numberOfViewsToRemove);
//                        for (; numberOfViewsToRemove > 0; numberOfViewsToRemove--) {
//                            nijiRoutingControllerNavigationViewReference.onBackButtonTap();
//                        }
                        execAfter = false;
                    } else if (isRoot) {
                        //removing back button
                        nijiRoutingControllerNavigationViewReference.getNavigationBar().backButtonStack = [];
                        // removing every hash
                        this.hashes = [];
                        // deleting old views
                        nijiRoutingControllerNavigationViewReference.removeAll(true);
                        // adding the new one
                        nijiRoutingControllerNavigationViewReference.setActiveItem(Ext.create(view, config));
                        execAfter = true;
                    }
                    else {
                        nijiRoutingControllerNavigationViewReference.push(Ext.create(view, config));
                        execAfter = true;
                    }
                }

                //<feature logger>
                Ext.Logger.info(this.getNavigationViewRef() + 'navigation view now displays view ' + view);
                //</feature>
                //retreiving buttons to show
                buttonsToShow = buttonsToShow || [];
                buttonCmpToShow = Ext.Array.map(buttonsToShow, function (button) {
                    return Ext.getCmp(button.replace('#', ''));
                });
                //retreiving buttons to hide (all buttons in the nav bar minus those to show)
                buttonCmpToHide = Ext.Array.difference(nijiRoutingControllerNavigationViewReference.query('titlebar button'), buttonCmpToShow);
                //hiding buttons to hide
                Ext.Array.each(buttonCmpToHide, function (button) {
                    // we do not hide the back button, unless the new view is root
                    if (isRoot || !Ext.Array.contains(button.element.classList, 'x-button-back')) {
                        button.hide();
                    }
                });
                //showing buttons to show
                Ext.Array.each(buttonCmpToShow, function (button) {
                    button.show();
                });

                if (hideBackButton) {
                    //<feature logger>
                    Ext.Logger.info('Hiding back button');
                    //</feature>
                    button = this.getNijiRoutingControllerNavigationViewReference().down('button');
                    if (button) {
                        button.hide();
                    }
                }
                if (execAfter) {
                    //execute after functions
                    Ext.Array.each(afterFunctions, function (fnName) {
                        if (typeof(this[fnName]) === 'function') {
                            //passing arguments to give url params
                            this[fnName](arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9);
                        }
                    }, this);
                }
            };
        };

// The callback generator for the function which is used to go to a given page.
// it only change the current URL
        var generateGoToFunction = function (route) {
            return function () {
                var urlParts = route.split('/'),
                // you can add as much params as there is in the url
                    urlParams = arguments,
                    replacedParams = 0,
                    i;
                for ( i = 0; i < urlParts.length; i++) {
                    // starts with :, and has enough params given to the method
                    // and is convertable to a string
                    if (urlParts[i][0] === ':' && urlParams.length >= replacedParams + 1 && typeof(urlParams[replacedParams].toString) === 'function') {
                        urlParts[i] = urlParams[replacedParams].toString();
                        replacedParams++;
                    }
                }
                this.getApplication().redirectTo(urlParts.join('/'));
            };
        },
        me = this;

        Ext.Array.each(pages, function (page) {
            // The accessor name is the route where "my/route/with/:id" become "MyRouteWith"
            var accessorName = Ext.Array.map(page.route.split('/'),function (str) {
                if (str[0] === ':') {
                    return '';
                }
                str = str.replace('-', '');
                return str.charAt(0).toUpperCase() + str.slice(1);
            }).join(''),
                showFunctionName = 'show' + accessorName,
                routeToFunctionName = 'goTo' + accessorName;

            if (typeof(page.route) === 'string') {
                this.config.routes[page.route] = showFunctionName;
            }
            this[showFunctionName] = generateShowFunction(page.view, page.title, page.isRoot, page.config, page.buttons, page.after, page.hideBackButton);
            this[routeToFunctionName] = generateGoToFunction(page.route);

            if (typeof(page.before) === 'string' || Array.isArray(page.before)) {
                this.config.before[showFunctionName] = page.before;
            }
        }, this);

        this.callParent(arguments);

// register the android backbutton event
         
        document.addEventListener('backbutton', function () {
            me.androidBackCallback(arguments);
        }, false);
    },

    /**
     * @property {Array} the history of window.location.hash to restore it when going back
     * @private
     */
// instanciation put in constructor to allow multiple instance of NijiRoutingController
//    hashes : [],

    /**
     * Remove the poped page hash from array and restore the hash of the new active page
     */
    /* jshint -W101 */
    onMainViewPop : function () {
        this.hashes.pop();
        //<feature logger>
        Ext.Logger.info(this.getNavigationViewRef() + ' navigation view POPED hash ' + window.location.hash);
        //</feature>
        // redirect to top stack hash if needed
        if (window.location.hash.substr(1) !== this.hashes[this.hashes.length - 1]) {
            this.getApplication().redirectTo(this.hashes[this.hashes.length - 1]);
        }
    },

    /**
     * Remove the buttons
     */
    onMainViewBeforePop : function () {
        var nijiRoutingControllerNavigationViewReference = this.getNijiRoutingControllerNavigationViewReference(),
            buttonCmpToHide = nijiRoutingControllerNavigationViewReference.query('titlebar button');
        //hiding buttons to hide
        Ext.Array.each(buttonCmpToHide, function (button) {
            // we do not hide the back button
            if (!Ext.Array.contains(button.element.classList, 'x-button-back')) {
                button.hide();
            }
        });

    },

    /**
     * Saves the new active page hash in array
     */
    onMainviewPush : function () {
        //<feature logger>
        Ext.Logger.info(this.getNavigationViewRef() + ' navigation view PUSHED hash ' + window.location.hash);
        //</feature>
        //added by Layla ait laaraj
        //empty hashes array in order to avoid conflicts between views: at any moment hashes contains the current view 
        if (this.hashes.length > 0){
            this.hashes = [];
        }
        this.hashes.push(window.location.hash.substr(1));
    },

    /**
     * A callback which is called by phonegap when the user tap on the android back button
     */
    androidBackCallback : function () {
        var mainView = this.getNijiRoutingControllerNavigationViewReference();
        if (mainView.getItems().length > 1) {
            mainView.pop();
        }
    },

    launch : function () {
        if (typeof(this.getInitialRoute()) === 'string' && (this.getForceInitialRoute() || window.location.hash === '')) {
            this.getApplication().redirectTo(this.getInitialRoute());
        }
    }
})
;