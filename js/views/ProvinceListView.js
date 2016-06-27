/**
 * Created by furka on 21-6-2016.
 */


/**
 * View for the html element with id provinceList
 * @function render - Rendering the view and place single views in listview
 * @constructor
 */
let ProvinceListView = Backbone.View.extend({
    el: '#provinceList',
    tagName: 'div',
    className: 'list-group',
    model: ProvinceCollection,
    render: function () {
        this.$el.empty();
        let self = this;
        this.collection.each(function (province) {
            /**
             * Instantiate provinceview with model province
             */
            let provinceView = new ProvinceView({model: province});
            self.$el.append(provinceView.el);
            provinceView.render();
        });

        resizeDiv();
        return this;
    },
    initialize: function () {
        this.collection.on('reset', this.render, this);
    }
});

