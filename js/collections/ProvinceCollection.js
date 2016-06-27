/**
 * Created by furka on 21-6-2016.
 */

/**
 * Collection of the model Province
 * @constructor
 */
let ProvinceCollection = Backbone.Collection.extend({
    model: Province,
    url: 'http://furkancetin.nl/rest/provinces/'
});

