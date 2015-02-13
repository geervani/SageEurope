NijiLibrary for Sencha Touch        
============================

Status
------
Version: 1.1
Supported version of Sencha Touch: 2.1+
Release Date: 24/07/2013

- - -

Description
-----------
This library contains various usefull Sencha Touch classes for your project.

### NijiRoutingController
this is a special controller designed to manage page transitions in a navigationview in a very simple way. Also enables android back button support with phonegap.

### NijiCacheStore
this component enables you to cache your store data in the local storage. The store will use data of the local storage when data of the web service are not available (no connexion,...), or when the store has been updated sooner than a given delay.

### NijiBridgeComponent
this component allows you to put requests in the localstorage to avoid doing the same request multiple times.

### NijiLoadingController
This is a special controller designed to display custom spinner with a loading message for each AJAX request. It'll display the loadingMessage you've put in the config of the AjaxRequest or store.

### GridView
The grid view is a customizable grid with infinite recycling. Scrolling is supported in both directions (x, y).

- - -

Installation
------------
Add the NijiLibrary folder as an external to your project root directory (on the same level as your app directory). When you will build your app with Sencha Cmd, only used classes will be kept, so don't worry about Niji Library components you will not use.
To use one of the library components, see above.

<strong>REMEMBER : dont't forget to read the given documentation in docs folder, or using this link : http://git.niji.fr/web-mobile/nijilibrary-sencha/raw/master/docs/index.html</strong>

### NijiRoutingController
Create your controller, extending NijiLibrary.controller.NijiRoutingController

### NijiCacheStore
Extends your store with the NijiLibrary.store.NijiCacheStore.

### NijiBridgeComponent
add the following line in your "app.js" in the "Ext.application" part. 

    requires : ['NijiLibrary.controller.connection.bridge'],

### NijiLoadingController
add the following line in your "app.js" in the "Ext.application" part. 
```requires : ['NijiLibrary.controller.NijiLoadingController'],```
You can change this file config to set your custom message :

    config: {
        mask: {
            xtype: 'loadmask',
            /**
             * Here you can add your custom message
             * @type {String}
             */
            message: ''
        },
        requestId: 0,
        requests: {}
    },

### GridView
Create a view which extends GridView. Use the documentation to know how to use it.

### LockedScroller
add the following line in your "app.js" in the "Ext.application" part. 

    requires : ['NijiLibrary.ux.LockedScroller'],

Then add the following conf in your scrollable view :

        scrollable: {
            ...
            dragAxisLock: true,
            ...
        },

- - -

Compatibility Issues
--------------------
There are no known compatibility issues.

- - -

Improvements Needed
--------------------
### NijiCacheStore
*	Change it as a mixin instead of a super class (easier to put in any component)

- - -

How to contribute
-----------------
### Faire une correction
1.	Faire la correction résolvant un ou plusieurs bugs. Penser à commenter votre code !
2. 	Commiter puis pusher un merge request

### Ajouter des fonctionnalités
1. 	Implémenter la nouvelle fonctionnalité
2. 	S'assurer de son bon fonctionnement
3. 	Commenter toutes les fonctions et classes en suivant la syntaxe JSDuck : https://github.com/senchalabs/jsduck
4. 	Générer la documentation avec JSDuck :
    ```jsduck path/to/sencha/touch/src path/to/nijiLibrary --output=path/to/docs```
5.	Faire la correction résolvant un ou plusieurs bugs. Penser à commenter votre code !
6. 	Commiter puis pusher un merge request

- - -

Change Log
----------
1.2.    Version 1.2:
*   Added the GridView
*   Added the LockedScroller

1.1.	Version 1.1:
*   Added a niji routing controller
*	Added a niji cache store
*	Added a niji bridge component
*	Added a Niji loading controller