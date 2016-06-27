/**
 * Created by furka on 26-6-2016.
 */

/**
 * View for the html element with id app
 * @function render - Rendering the view
 * @constructor
 */
let AppView = Backbone.View.extend({
    el: '#app',
    tagName: 'div',
    className: 'row',
    render: function () {
        resizeAppDiv();
        return this;
    }
});