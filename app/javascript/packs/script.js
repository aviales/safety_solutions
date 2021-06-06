import jQuery from "jquery"
global.$ = global.jQuery = jQuery
window.$ = window.jQuery = jQuery



var city = "Santa Cruz";

$.getJSON(
    "https://api.openweathermap.org/data/2.5/weather?q=" + 
    city + 
    "&APPID=3873261c06ffc00808aa1406e8f633c0&units=metric", 

function(data) {
    console.log("FUNCIONA");
console.log(data); 

var icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";

var temp = Math.floor(data.main.temp);
var weather =  data.weather[0].main;

$(".icon").attr("src", icon);
$(".weather").append(weather);
$(".temp").append(temp);
}
);

