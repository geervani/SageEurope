/**
 * @author Quentin Decre <quentin.decre@niji.fr>
 * @docauthor Quentin Decre <quentin.decre@niji.fr>
 *
 * @class NijiLibrary.ux.LockedScroller
 *
 * The locked scroller is an override needed by the GridView (NijiLibrary.view.GridView).
 * It enables you to force the user to scroll one axis at a time.
 *
 * To do that, add the following conf in your scrollable view :
 *
 *        scrollable: {
 *            ...
 *            dragAxisLock: true,
 *            ...
 *        },
 */

Ext.define('NijiLibrary.ux.LockedScroller', {
    override: 'Ext.scroll.Scroller',
    /**
     * @config
     * [dragAxisLock = false] if true, the scroller will scroll on one axis at a time
     * (no more scrolling diagonally)
     *
     */
    onDragStart: function() {
        this.dragAxis = null;
        this.callParent(arguments);
    },
    onDrag: function(e) {
        if (this.config.dragAxisLock) {
            if (this.dragAxis === 'vertical' || (!this.dragAxis && Math.abs(e.deltaY) > Math.abs(e.deltaX))) {
                this.dragAxis = 'vertical';
                e.deltaX = 0;
            }
            if (this.dragAxis === 'horizontal' || (!this.dragAxis && Math.abs(e.deltaY) < Math.abs(e.deltaX))) {
                this.dragAxis = 'horizontal';
                e.deltaY = 0;
            }
        }
        this.callParent(arguments);
    }
});