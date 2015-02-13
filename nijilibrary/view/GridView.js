/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 *
 * @class NijiLibrary.view.GridView
 *
 * The grid view is a customizable grid with infinite recycling.
 *
 * Remember to import _gridview.scss in your main scss, or to put this css rule :
 *
 * .x-gridview-item img.lazy-load{
 *    opacity: 0;
 * }
 *
 *
 * ## How to use it
 *
 * The grid need to know a few things :
 * -    {@link itemHeight} (the height of each cell of your grid)
 * -    {@link itemWidth} (the width of each cell of your grid)
 * -    {@link columnLength} (the number of items on each column)
 * -    {@link lineLength} (the number of items on each line)
 *
 * Remember that either {@link columnLength} or {@link lineLength} must be fixed to a number and the other one must
 * be set to auto.
 *
 * The grid does not support variable item size. So you must set both {@link itemHeight} and {@link itemWidth}.
 *
 *
 * ## How it works
 *
 * To easily understand this code, remember that :
 * -    grid is the full view
 * -    map is the visible part of the grid + cache
 *
 * 1.   First it computes the {@link #gridSize} which is the real size of the grid (in number of items), based on the number of items
 * in the store, {@link columnLength} and {@link lineLength}.
 * 2.   It also compute the {@link mapSize} which is the size (in number of items) of what you can see on your viewport + the cache
 * 3.   Then it resizes the scroller to the size of the grid (in px). At that moment, there is no item in the scroller
 * 4.   Then it fills {@link itemsMap}, which is an one-dimension array, containing enough items to fill your viewport + cache
 * (based on {@link mapSize})
 * 4.   Scroll to the initial position (0,0) and dynamically create items if needed. Note that an item is never destroyed
 * unless the {@link mapSize} changed (because the viewport size has changed for example). Every item is reused and the
 * template is reapplyed with another store record
 *
 */
Ext.define('NijiLibrary.view.GridView', {
    extend : 'Ext.dataview.DataView',
    xtype  : 'gridview',

    requires : [
        'NijiLibrary.ux.LockedScroller'
    ],

    config : {
        //Todo : remove this from default config
        store   : 'SampleStore',
        id      : 'test',
        itemTpl : "<div style='background-color: #{color}; height: 140px'>{id} - {firstName}</div>",

        /**
         * @cfg baseCls
         * @inheritdoc
         */
        baseCls : Ext.baseCSSPrefix + 'gridview',

        /**
         * @cfg {Number} itemHeight
         * This allows you to set the item height and is used to roughly calculate the amount
         * of items needed to fill the grid.
         */
        itemHeight : 210,

        /**
         * @cfg {Number} itemWidth
         * This allows you to set the item width and is used to roughly calculate the amount
         * of items needed to fill the grid.
         */
        itemWidth : 220,

        /**
         * @cfg {Number} columnLength
         * This maximum number of items per column. Set to 'auto' if you do not want a maximum.
         * Becarful, this will override lineLength !
         */
        columnLength : 'auto',

        /**
         * @cfg {Number} lineLength
         * This maximum number of items per line. Set to 'auto' if you do not want a maximum
         */
        lineLength : 'auto',


        /**
         * @cfg {Object} [startPosition={x:0, y:0}]
         * The inital position of the map on the grid
         */
        startPosition : {
            x : 0,
            y : 0
        },

        /**
         * @cfg scrollToTopOnRefresh
         * @inheritdoc
         */
        scrollable : true,

        /**
         * @cfg scrollToTopOnRefresh
         * @inheritdoc
         */
        scrollable : {
            direction     : 'both',
            directionLock : true,
            dragAxisLock  : true
        },

        // ## PERFORMANCE / USER EXPERIMENT BALANCING
        // In this section, you can tweak the config to have the more suitable
        // balancing between performance and user experiment.

        /**
         * @cfg {Number} [cacheSize=2]
         * The cacheSize is the number of items to add to each line/column of the map to
         * pre-render items before they become visible and make scrolling smooth.
         *
         * If your viewport can display 5 x 8 items, and if the cacheSize is 2, the the mapSize
         * will be 7 x 10.
         *
         * 2 is a good start.
         */
        cacheSize : 2,

        /**
         * @cfg {Object} [imageLazyLoading=false]
         * The config of image lazy loading. Set to false disable lazy loading.
         *
         * To enable lazy loading on an image,
         * set data-src instead of src on your image, and add lazy-load class to it.
         * To have a better result, set the size of your image in template or css.
         *
         * You can set a few options :
         * -    loadImagesAfter : The number of ms to wait before loading an image.
         * 0 means that images are instantly loaded
         * -    imageFadeInDuration: the duration in ms of the fadeIn animation.
         * 0 means that images are displayed without any transition
         *
         * If the item is rendered but is recycled before the image loading, the loading
         * is cancelled so that it has almost no impact on performance.
         */
        imageLazyLoading : false,


        /**
         * @cfg {Number} [minDelayBetweenTranslations=200]
         * This is the minimum number of ms to keep between two translations processing {@link onTranslate}.
         * Greater this number is, better the performances are, but if it's too important,
         * many items could be recycled at the same time which is not good for the user and CPU.
         */
        minDelayBetweenTranslations : 200,

        /**
         * @cfg {Number} [maxRecyclingVelocity=Infinity]
         * This is the maximum scroller velocity (in pixel per second), above which recycling is
         * suspended. Lower this number is, greater the performances are, but rendering will stop at a lower speed.
         *
         * By default, there is no maximum, so the value is Infinity.
         */
        maxRecyclingVelocity : Infinity,

        /**
         * @cfg {Boolean} use3dTranslations
         * If true, translate3d will be used instead of top/left. By default, it's false for Android and
         * true for other devices. But you can set another value dynamically on other criterias.
         */
        use3dTranslations : !Ext.os.is('Android')

    },

    /**
     * @property {Object} itemsMap
     * It is an one-dimension array, containing enough items to fill your viewport + cache
     * (based on {@link mapSize}).
     */
    itemsMap : null,


    /**
     * @property {Object} gridSize
     * It is the real size of the grid (in number of items), based on the number of items
     * in the store, {@link columnLength} and {@link lineLength}.
     */
    gridSize : {
        width  : 0,
        height : 0
    },

    /**
     * @property {Object} [mapPosition={x:0, y:0}]
     * It is the position of the map relative to the grid.
     *
     * If we have scrolled 3 items to the left and 2 to the bottom, mapPosition will be
     *
     * {
     *     x: 3
     *     y:2
     * }
     */
    mapPosition : {
        x : 0,
        y : 0
    },

    /**
     * @property {Object} mapSize
     * It is the size (in number of items) of what you can see on your viewport + the cache
     */
    mapSize : {
        width  : 0,
        height : 0
    },

    /**
     * When instanciated, the grid listen to its scroller event to enable recycling.
     * It also set its initialPosition
     */
    constructor : function (config) {
        // set default values if imageLazyLoading is activated with default options
        var mergedConf = Ext.Object.merge(config, this.config);
        if (this.config.imageLazyLoading === true) {
            this.config.imageLazyLoading = config.imageLazyLoading = {
                loadImagesAfter     : 500,
                imageFadeInDuration : 800
            }
        }
        if (!this.config.imageLazyLoading.loadImagesAfter) {
            this.config.imageLazyLoading.loadImagesAfter = config.imageLazyLoading.loadImagesAfter = 500;
        }
        if (!this.config.imageLazyLoading.imageFadeInDuration) {
            this.config.imageLazyLoading.imageFadeInDuration = config.imageLazyLoading.imageFadeInDuration = 800;
        }

        this.callParent(arguments);

        var scroller = this.getScrollable().getScroller(),
            startPosition = this.getStartPosition();
        scroller.on('refresh', this.doUpdateScrollerSize, this);
        scroller.on("scroll", 'onTranslate', this);
        scroller.setInitialOffset({
                                      x : startPosition.x * this.getItemWidth(),
                                      y : startPosition.y * this.getItemHeight()
                                  });
    },


    /**
     * Asks a refresh of the view by reloading the data from the store and re-rendering the template.
     * @param  {Boolean} doNotScrollToTop if true, the scroller position will remain the
     * same after the refresh
     */
    refresh : function (doNotScrollToTop) {
        var me = this,
            container = me.container;

        if (!me.getStore()) {
            if (!me.hasLoadedStore && !me.getDeferEmptyText()) {
                me.showEmptyText();
            }
            return;
        }
        if (container) {
            //check if grid is correctly displayed (width and height > 0)
            if (this.element.getWidth() <= 0 || this.element.getHeight() <= 0) {
                // if size is 0, wait until next repaint
                this.container.element.on({
                                              painted : 'refresh',
                                              scope   : this,
                                              single  : true
                                          });
            }
            else {
                me.fireAction('refresh', arguments, 'doRefresh');
            }
        }
    },

    /**
     * Do refresh the view by reloading the data from the store and re-rendering the template.
     * @param  {Boolean} doNotScrollToTop if true, the scroller position will remain the
     * same after the refresh
     */
    doRefresh : function (doNotScrollToTop) {
        // cancel any waiting operations (recycling)
        this.scheduledTasks = [];
        clearTimeout(this.intervalId);

        //refresh the grid en map dimensions
        var store = this.getStore();
        this.computeGridDimensions();
        this.computeMapDimensions();

        // refresh container size
        this.doUpdateScrollerSize();

        // ensure that there is the right number of items in the container
        this.populateItemsMap();

        //update scroll position
        var startPosition = this.getStartPosition(),
            scroller = this.getScrollable().getScroller();
        translatable = scroller.getTranslatable();
        if (this.getScrollToTopOnRefresh() && doNotScrollToTop !== true) {
            //scroll to start position
            var targetPositionX = startPosition.x * this.getItemWidth(),
                targetPositionY = startPosition.y * this.getItemHeight();
            this.mapPosition = {
                x : 0,
                y : -this.mapSize.height
            };
            this.onTranslate(scroller, targetPositionX, targetPositionY);
            scroller.scrollTo(targetPositionX, targetPositionY);
        }
        else {
            //stop scrolling
            this.mapPosition = {
                x : 0,
                y : -this.mapSize.height
            };
            this.onTranslate(scroller, scroller.position.x, scroller.position.y);
            scroller.scrollTo(scroller.position.x, scroller.position.y);
        }

        // No items, hide all the items from the collection.
        if (this.getStore().getCount() < 1) {
            this.showEmptyText();
            // hide every items
            this.onTranslate(scroller, -10000, -10000);
        }
        else {
            this.hideEmptyText();
        }
    },

    /**
     * Compute the grid size depending of the number of records, lineLength and columnLength
     */
    computeGridDimensions : function () {
        var store = this.getStore(),
            nbRecords = store.getCount(),
            columnLength = this.getColumnLength(),
            lineLength = this.getLineLength();

        if (columnLength > 0) {
            this.gridSize.width = Math.ceil(nbRecords / columnLength);
            this.gridSize.height = columnLength;
        }
        else if (lineLength > 0) {
            this.gridSize.width = lineLength;
            this.gridSize.height = Math.ceil(nbRecords / lineLength);
        }
    },

    /**
     * Compute the needed map dimension
     * precondition : grid dimension must have been computed.
     */
    computeMapDimensions : function () {
        var cacheSize = this.getCacheSize();
        this.mapSize.width = Math.min(this.gridSize.width, Math.ceil(this.element.getWidth() / this.getItemWidth()) + cacheSize);
        this.mapSize.height = Math.min(this.gridSize.height, Math.ceil(this.element.getHeight() / this.getItemHeight()) + cacheSize);

        // correct mapSize.x / column length
        if (this.gridSize.width < this.mapSize.width) {
            this.mapSize.width = this.gridSize.width;
        }
        if (this.gridSize.height < this.mapSize.height) {
            this.mapSize.height = this.gridSize.height;
        }
    },


    /**
     * Generate items in itemsMap. If the map is smaller than the last one, items will be moved to cache
     * The map must be outside of the grid to be replaced by translation.
     * The last line of the map is on the grid line -1
     */
    populateItemsMap : function () {

        if (!this.itemsMap) {
            this.itemsMap = [];
        }

        var nbRecords = this.getStore().getCount(),
            nbItems = this.mapSize.height * this.mapSize.width,
            currentLine = -this.mapSize.height,
            currentColumn = 0;

        // add/update items to map
        var indexInMap = 0;
        for (var index = 0; indexInMap < nbItems; currentColumn++, index++) {
            if (currentColumn >= this.mapSize.width) {
                // go to the next grid line
                index += this.gridSize.width - currentColumn;

                currentLine++;
                currentColumn = 0;

                if (currentLine >= 0) {
                    break;
                }
            }

            if (this.itemsMap[indexInMap]) {
                this.itemsMap[indexInMap].x = currentColumn;
                this.itemsMap[indexInMap].y = currentLine;
            }
            else {
                this.itemsMap.push({
                                       cell                     : null, // a reference to the DomElement
                                       x                        : currentColumn, // The x position of the item in the grid
                                       y                        : currentLine, // The y position of the item in the grid
                                       imageLazyLoadingCallback : null // A callback to handle lazy loading
                                   });
            }
            indexInMap++;
        }

        // remove unnecessary items from container
        var nbItemsInContainer = this.element.query(".x-gridview-item").length;
        if (nbItemsInContainer > nbItems) {
            this.container.moveItemsToCache(nbItems, nbItemsInContainer - 1);
            this.itemsMap = Ext.Array.slice(this.itemsMap, 0, nbItems);
        }
    },


    /**
     * This function register a task : which is updating (recycling) a grid item.
     * For performance reasons, we do not update a grid item instantly. Instead,
     * we queue recycling requests into {@link scheduledTasks}. By using a timeout
     * (Ext.defer), the task is put at the top of the execution stack.
     * @param  {Object} item an element of itemsMap
     */
    updateGridItem : function (item) {
        var translatable = this.getScrollable().getScroller().getTranslatable();

        var indexInItemsMap = this.itemsMap.indexOf(item);
        if (!this.scheduledTasks) {
            this.scheduledTasks = [];
        }

        // if the previous recycling for this item has not been made yet, remove it from 
        // the tasks queue, in order that if the user scrolls very fast, the performances
        // stays good
        var indexInScheduledTasks = this.scheduledTasks.indexOf(indexInItemsMap);
        if (indexInScheduledTasks >= 0) {
            delete this.scheduledTasks[indexInScheduledTasks];
        }

        this.scheduledTasks.push(indexInItemsMap);

        // if we have added the first task, start the Runner
        if (!this.intervalId) {
            this.intervalId = Ext.defer(Ext.Function.bind(this.taskRunner, this), 0);
        }
    },

    /**
     * This function updates (recycles) a grid item
     * @param  {Object} item an element of itemsMap
     * @private
     */
    doUpdateGridItem : function (item) {
        if (item.cell && !item.cell.dom) {
            return;
        }

        var itemWidth = this.getItemWidth(),
            itemHeight = this.getItemHeight(),
            imageLazyLoading = this.getImageLazyLoading();

        //retreiving record
        var record = this.getStore().getAt(item.y * this.gridSize.width + item.x);
        if (record) {
            // if the cell is not created yet, create one
            if (!item.cell) {
                var indexOfItemInMap = this.itemsMap.indexOf(item);
                this.container.addListItem(this.getViewItems().length, record);
                item.cell = Ext.get(this.getViewItems()[this.getViewItems().length - 1]);
                item.cell.setHeight(this.getItemHeight());
                item.cell.setWidth(this.getItemWidth());
                item.cell.setStyle({
                                       '-webkit-transform' : 'translate3d(0px,0px)',
                                       'position'          : 'absolute',
                                       'top'               : '0px',
                                       'left'              : '0px'
                                   });
            }
            else {
                //updating inner HTML
                item.cell.setHtml(this._itemTpl.apply(record.getData()));
            }

            //handle lazy loading if needed
            if (this.getImageLazyLoading() !== false) {
                clearTimeout(item.imageLazyLoadingCallback);
                item.imageLazyLoadingCallback = Ext.defer(this.lazyLoadImage, imageLazyLoading.loadImagesAfter, this, [
                    item.cell, imageLazyLoading.imageFadeInDuration]);
            }
            //moving item
            this.moveGridItem(item.cell, item.x * itemWidth, item.y * itemHeight);
        }
        else if (item.cell) {
            this.moveGridItem(item.cell, -10000, -10000);
        }
    },

    /**
     * This function move an item to a given position.
     * To have the best performances possible, we have to check
     * the browser possibilities and choose the best methode.
     *
     * This function redefine itself after the first check. That way,
     * the check is done only once !
     *
     * @param  {DomElement} cell a DomElement to move
     * @private
     */
    moveGridItem : function (cell, x, y) {
        if (this.getUse3dTranslations()) {
            this.moveGridItem = function (cell, x, y) {
                cell.setStyle({
                                  "top"  : y + 'px',
                                  "left" : x + 'px'
                              });
            }
        }
        else {
            this.moveGridItem = function (cell, x, y) {
                cell.setStyle({
                                  "-webkit-transform" : "translate3d(" + x + "px," + y + 'px, 0px)'
                              });
            }
        }

        this.moveGridItem = function (cell, x, y) {
            cell.setStyle({
                              "-webkit-transform" : "translate3d(" + x + "px," + y + 'px, 0px)'
                          });
        }
        // call the function now that it has been redefined
        this.moveGridItem.apply(this, arguments);
    },

    /**
     * An utility function used by {@link doUpdateGridItem} to
     * lazy load an image
     * @param  {DomElement} cell  the DomElement which contains images to lazy load
     * @param  {Number} fadeInDuration the duration of the fade in animation (in ms)
     * @private
     */
    lazyLoadImage : function (cell, fadeInDuration) {
        var images = cell.query('img');
        for (var i = 0, len = images.length; i < len; i++) {
            images[i].addEventListener('load', function (event) {
                event.srcElement.style.opacity = 1;
            });
            if (fadeInDuration > 0) {
                images[i].style.webkitTransition = 'all ' + fadeInDuration / 1000 + 's linear';
            }
            images[i].setAttribute('src', images[i].getAttribute('data-src'));
        }
    },


    /**
     * @property {Array} an array of cells index. Points to a cell from itemsMap.
     * This means that this cell must be recycled (and it's position updated)
     * @private
     */
    scheduledTasks : null,

    /**
     * Simply takes the first item index in the {@link scheduledTasks} queue,
     * load the item and give it to {@link doUpdateGridItem}. Then it registers the
     * next recycling
     * @return {[type]} [description]
     */
    taskRunner : function () {
        delete this.intervalId;
        for (var i = 0; i < 1; i++) {
            var index = this.scheduledTasks.shift();
            if (typeof index === 'undefined') {
                // get another one
                i--;
                continue;
            }
            else {
                this.doUpdateGridItem(this.itemsMap[index]);
            }
        }

        if (this.scheduledTasks.length > 0) {
            this.intervalId = Ext.defer(Ext.Function.bind(this.taskRunner, this), 0);
        }
    },

    lastScrollerPosition : {
        x : 0,
        y : 0
    },
    lastTranslateDate    : 0,
    onTranslate          : function (scroller, x, y) {
        // first filter : INTERVAL : we do not try to recycle more often than every 200ms
        var now = Date.now();
        if (now - this.lastTranslateDate < this.getMinDelayBetweenTranslations()) {
            return;
        }

        // second filter : VELOCITY : we do not try to recycle if the scroll speed is higher than 500px/s (aka 0.5px/ms)
        if (this.getMaxRecyclingVelocity() !== Infinity) {
            var verticalVelocity = Math.abs((y - this.lastScrollerPosition.y) / (now - this.lastTranslateDate)),
                horizontalVelocity = Math.abs((x - this.lastScrollerPosition.x) / (now - this.lastTranslateDate)),
                maxSpeed = this.getMaxRecyclingVelocity() / 1000;

            this.lastScrollerPosition = {
                x : x,
                y : y
            };
            this.lastTranslateDate = now;

            console.error(Math.round(horizontalVelocity * 1000), Math.round(verticalVelocity * 1000));
            if (horizontalVelocity > maxSpeed || verticalVelocity > maxSpeed) {
                return;
            }
        }

        // Then do some stuff
        var itemWidth = this.getItemWidth(),
            itemHeight = this.getItemHeight(),
            cacheSize = this.getCacheSize();

        var newMapPosition = {
            x : Math.floor(x / itemWidth - cacheSize / 2),
            y : Math.floor(y / itemHeight - cacheSize / 2)
        };

        // avoid translation outside of the grid
        newMapPosition.y = Math.max(0, newMapPosition.y);
        newMapPosition.x = Math.max(0, newMapPosition.x);

        //line/vertical translate
        if (newMapPosition.y > this.mapPosition.y) {
            // avoid translation outside of the grid
            newMapPosition.y = Math.min(this.gridSize.height - this.mapSize.height, newMapPosition.y);

            //update each new line
            for (var line = this.mapPosition.y + this.mapSize.height; line < newMapPosition.y + this.mapSize.height; line++) {
                //Because we do not move items in the itemsMap array, we have to keep a pointer on where is the
                //first line in the itemsMap. This is the line to show modulo the height of the grid
                var offset = (line % this.mapSize.height) * this.mapSize.width;
                //update each cell
                for (var i = 0; i < this.mapSize.width; i++) {
                    //setting new coords
                    this.itemsMap[i + offset].y += this.mapSize.height;
                    //refreshing item
                    this.updateGridItem(this.itemsMap[i + offset]);
                }
            }
            this.mapPosition.y = newMapPosition.y;
        }
        else if (newMapPosition.y < this.mapPosition.y) {
            //update each new line
            for (var line = this.mapPosition.y - 1; line >= newMapPosition.y; line--) {
                //Because we do not move items in the itemsMap array, we have to keep a pointer on where is the
                //first line in the itemsMap. This is the line to show modulo the height of the grid
                var offset = (line % this.mapSize.height) * this.mapSize.width;
                //update each cell
                for (var i = 0; i < this.mapSize.width; i++) {
                    //setting new coords
                    this.itemsMap[i + offset].y -= this.mapSize.height;
                    //refreshing item
                    this.updateGridItem(this.itemsMap[i + offset]);
                }
            }
            this.mapPosition.y = newMapPosition.y;
        }

        //column/horizontal translate
        if (newMapPosition.x > this.mapPosition.x) {
            newMapPosition.x = Math.min(this.gridSize.width - this.mapSize.width, newMapPosition.x);

            //update each new line
            for (var column = this.mapPosition.x + this.mapSize.width; column < newMapPosition.x + this.mapSize.width; column++) {
                //Because we do not move items in the itemsMap array, we have to keep a pointer on where is the
                //first column in the itemsMap. This is the line to show modulo the height of the grid
                var offset = column % this.mapSize.width;
                //update each cell
                for (var i = 0; i < this.mapSize.height; i++) {
                    //setting new coords
                    this.itemsMap[i * this.mapSize.width + offset].x += this.mapSize.width;
                    //refreshing item
                    this.updateGridItem(this.itemsMap[i * this.mapSize.width + offset]);
                }
            }
            this.mapPosition.x = newMapPosition.x;
        }
        else if (newMapPosition.x < this.mapPosition.x) {
            //update each new line
            for (var column = this.mapPosition.x - 1; column >= newMapPosition.x; column--) {
                //Because we do not move items in the itemsMap array, we have to keep a pointer on where is the
                //first line in the itemsMap. This is the line to show modulo the height of the grid
                var offset = column % this.mapSize.width;
                //update each cell
                for (var i = 0; i < this.mapSize.height; i++) {
                    //setting new coords
                    this.itemsMap[i * this.mapSize.width + offset].x -= this.mapSize.width;
                    //refreshing item
                    this.updateGridItem(this.itemsMap[i * this.mapSize.width + offset]);
                }
            }
            this.mapPosition.x = newMapPosition.x;
        }
    },


    isInitialized        : false,
    doUpdateScrollerSize : function () {
        var width = this.gridSize.width * this._itemWidth;
        var height = this.gridSize.height * this._itemHeight;
        var scroller = this.getScrollable().getScroller();
        // add one item width and one item height to be sure to see every item
        scroller.setSize({
                             x : width + this._itemWidth - 1,
                             y : height + this._itemHeight - 1
                         });
        //        scroller.setSize({x : width, y : height});
        if (this.getScrollToTopOnRefresh() || !this.isInitialized) {
            var startPosition = this.getStartPosition();
            scroller.scrollTo(startPosition.x * this._itemWidth, startPosition.y * this._itemHeight);
            this.isInitialized = true;
        }
    },

    onStoreClear : function () {
        this.showEmptyText();
    },


    onStoreClear : function () {
        this.showEmptyText();
        this.refresh();
    },

    /**
     * @private
     * @param store
     * @param records
     */
    onStoreAdd : function (store, records) {
        if (records) {
            this.hideEmptyText();
            this.refresh();
        }
    },

    /**
     * @private
     * @param store
     * @param records
     * @param indices
     */
    onStoreRemove : function (store, records, indices) {
        this.refresh();
    },

    /**
     * @private
     * @param store
     * @param record
     * @param {Number} newIndex
     * @param {Number} oldIndex
     */
    onStoreUpdate : function (store, record, newIndex, oldIndex) {
        this.refresh(true);
    },

    /**
     * Handle events
     */
    onItemTouchStart : function (container, target, index, e) {
        var cell = this.cellForElement(e);
        index = cell.y * this.mapSize.width + cell.x;
        return this.callParent(arguments);
    },

    onItemTouchEnd : function (container, target, index, e) {
        var cell = this.cellForElement(e);
        index = cell.y * this.mapSize.width + cell.x;
        return this.callParent(arguments);
    },

    onItemTouchMove : function (container, target, index, e) {
        var cell = this.cellForElement(e);
        index = cell.y * this.mapSize.width + cell.x;
        return this.callParent(arguments);
    },

    onItemTap : function (container, target, index, e) {
        var cell = this.cellForElement(e);
        index = cell.y * this.mapSize.width + cell.x;

        return this.callParent(arguments);
    },

    onItemTapHold : function (container, target, index, e) {
        var cell = this.cellForElement(e);
        index = cell.y * this.mapSize.width + cell.x;

        return this.callParent(arguments);
    },

    onItemSingleTap : function (container, target, index, e) {
        var cell = this.cellForElement(e);
        index = cell.y * this.mapSize.width + cell.x;

        return this.callParent(arguments);
    },

    onItemDoubleTap : function (container, target, index, e) {
        var cell = this.cellForElement(e);
        index = cell.y * this.mapSize.width + cell.x;

        return this.callParent(arguments);
    },

    onItemSwipe : function (container, target, index, e) {
        var cell = this.cellForElement(e);
        index = cell.y * this.mapSize.width + cell.x;

        return this.callParent(arguments);
    },

    cellForElement : function (e) {
        var target = e.getTarget();
        var index = this.element.query(".x-gridview-item").indexOf(target);
        var cell = this.itemsMap[index];
        return cell;
    }
});