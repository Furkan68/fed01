/**
 * Created by furka on 17-6-2016.
 */

$(document).ready(function () {
    let view1;
    let mcv;
    let map;
    let collectionProvince;
    let appView;

    /**
     * Instantiating appview to fill the window
     */
    appView = new AppView();

    /**
     * Instantiating collection for the provinces
     */
    collectionProvince = new ProvinceCollection();

    /**
     * Fetching data from API
     */
    collectionProvince.fetch({
        beforeSend: HEADER,
        success: function () {
            /**
             * Instantiating listview for the provinces from the provincecollection
             * @param : {object} ProvinceCollection
             */
            view1 = new ProvinceListView({collection: collectionProvince});
            view1.render();

            /**
             * Instantiating GoogleMaps map
             */
            map = new google.maps.Map($('#map_canvas')[0], {
                center: new google.maps.LatLng(39.450565, 36.893869),
                zoom: 6,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            /**
             * Instantiating MarkerCollectionView
             * MarkerCollectionView is the view of the LocationCollection
             */
            mcv = new Backbone.GoogleMaps.MarkerCollectionView({
                collection: PLACES,
                map: map
            });
            mcv.render();
            appView.render();

            /**
             * Resize GoogleMaps map to the window height
             */
            google.maps.event.trigger(map, "resize");
        }
    });

});
