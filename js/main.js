 function myMap() {
 var mapProp = {
    center : new google.maps.LatLng(38.1458392,24.4813),
    zoom : 5,
};

google.maps.event.addDomListener(window, 'load', myMap);
 
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}



