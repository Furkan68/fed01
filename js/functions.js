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
    let y = $('.col-md-8').width();
    
    let el = $('#map_canvas');

    $('#provinceList').css({'height': x + 'px'});
    el.css({'height': x + 'px'});
    el.css({'width': y + 'px'})
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