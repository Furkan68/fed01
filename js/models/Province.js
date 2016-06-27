/**
 * Created by furka on 21-6-2016.
 */

/**
 * Model for the province with default setup and url to get the province object
 * @constructor
 */
let Province = Backbone.Model.extend({
    defaults: {
        'id': null,
        'name': null,
        'plate_code': null,
        'governer': null
    },
    urlRoot: 'http://furkancetin.nl/rest/provinces/',
    idAttribute: 'id'
});

