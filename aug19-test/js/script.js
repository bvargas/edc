/* put your javascript here */

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 45.520618, lng: -73.552457},
    scrollwheel: false,
    zoom: 17,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  });
}