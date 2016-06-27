/**
 * Created by furka on 21-6-2016.
 */

/**
 * View for the single province to create link to place a marker on map
 * @function render - Rendering the view and return a element
 * @constructor
 */
let ProvinceView = Backbone.View.extend({
    model: Province,
    tagName: 'a',
    events: {
        'click': 'itemClicked'
    },
    itemClicked: function () {

    },
    render: function () {
        let temp = _.template('<a href="#/province/<%= id %>" class="list-group-item">' +
            '<div class="image"><img src="img/plate.png" alt="License Plate <%= name %>"/><h2 class="list-group-item-heading"><%= plate_code %> <%= name %></h2></div>' +
            '<p class="list-group-item-text"><span class="bold">Governer: </span> <%= governer %></p>' +
            '</a>');


        this.$el.html(temp(this.model.toJSON()));
        return this;
    }
});

