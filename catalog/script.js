directionsService = new google.maps.DirectionsService();
directionsDisplay = new google.maps.DirectionsRenderer();

var UK = new google.maps.LatLng(53.409532, -2.010498);
var IT = new google.maps.LatLng(42.745334, 12.738430);

var noStreetNames = [{
    featureType: "road",
    elementType: "labels",
    stylers: [{
        visibility: "on"}]}];

hideLabels = new google.maps.StyledMapType(noStreetNames, {
    name: "hideLabels"
});


var myOptions = {
    zoom: 1,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    center: UK
}

var showPosition = function(position) {
    var userLatLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

    var marker = new google.maps.Marker({
        position: userLatLng,
        title: 'Your Location',
        draggable: true,
        map: map
    });






function initialize() {
  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
  var mapOptions = {
    zoom: 4,
    center: myLatlng
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'Hello World!'
  });
}

google.maps.event.addDomListener(window, 'load', initialize)};