/**
 * Created by furka on 21-6-2016.
 */

/**
 * Model for the GoogleMaps location with longitude and latitude 
 * @constructor
 */

let Location = Backbone.GoogleMaps.Location.extend({
    idAttribute: 'title',
    defaults: {
        lng: null,
        lat: null
    }
});

