// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets

function initMap() {

 // The location of Uluru
 var getlat = $("#Lat").text();
 var getlong = $("Long").text()
 // $("#Lat")
getlat = parseFloat($("#Lat").text());
getlong = parseFloat($("#Long").text());
// var getlong = -90.50

 var uluru = {lat: getlat, lng: getlong};
 
 // The map, centered at Uluru
 var map = new google.maps.Map(
     document.getElementById('map'), {zoom: 8, center: uluru});
 // The marker, positioned at Uluru
 var marker = new google.maps.Marker({position: uluru, map: map});

 var markerB = new google.maps.Marker({position: {lat:29.9521, lng: -90.0712}, map: map, title: 'MardiGrasMe'});
}
