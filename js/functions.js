/**
 * Created by furka on 20-6-2016.
 */

/**
 * Set http request header.
 * @param {object} xhr - xmlhttprequest.
 */
let HEADER = (xhr) => xhr.setRequestHeader('Accept', 'application/json');


/**
 * Resize div heights to window height.
 * vph - window height
 */
let resizeDiv = () => {
    let x = $(window).height();

    $('#provinceList').css({'height': x + 'px'});
    $('#map_canvas').css({'height': x + 'px'});
};


/**
 * Resize div heights to window height.
 * vph - window height
 * vpw - window width
 */
let resizeAppDiv = () => {
    let e = $('#app');

    let x = $(window).width();
    let y = $(window).height();

    e.css({'height': y + 'px'});
    e.css({'width': x + 'px'});
};

/**
 * Place marker.
 * @param {int} id - id of province in rest API.
 */
let PlaceMarker = (id) => {
    let geo = new GeoLocation({
        id: id
    });
    geo.fetch({
        success: function () {
            let json = geo.toJSON();
            console.log(json.title);
            let province = new Location({
                title: json.title,
                lat: json.lat,
                lng: json.lng
            });
            PLACES.reset();
            PLACES.add(province);
        }
    });
};