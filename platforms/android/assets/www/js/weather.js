/* jshint loopfunc: true, quotmark:false */
/* global jQuery:false, console */
(function($) {

    $("#cir1").on("click",function(){

        var location = prompt("Enter the location:");

        var locationPromise = $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather",
            data: {q: location},
        });

        locationPromise.done(function(data) {
            console.log(data);
            console.log(data.weather[0].description);
            $(".lab").text(data.weather[0].description);
            $(".lab-loc").text(data.name);
            $(".temp").text(data.main.temp);
        });    
    });
} (jQuery));