/**
 * Created by furka on 19-6-2016.
 */

/**
 * Defining router.
 * @constructor
 */
let AppRouter = Backbone.Router.extend({
    routes: {
        "province/:id": "showProvince"
    }
});

/**
 * Instantiate router.
 */
let app_router = new AppRouter;

/**
 * setting router.
 */
app_router.on('route:showProvince', function (id) {
    PlaceMarker(id);
});

Backbone.history.start();