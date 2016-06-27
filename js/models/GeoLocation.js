/**
 * Created by furka on 21-6-2016.
 */

/**
 * Model to get the Geolocation of the province from the url
 * @constructor
 */

let GeoLocation = Backbone.Model.extend({
    defaults: {
        'id': null,
        'title' : null,
        'lng': null,
        'lat': null
    },
    idAttribute: 'id',
    urlRoot: 'http://furkancetin.nl/geo/province/'
});

