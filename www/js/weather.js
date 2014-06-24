/* jshint loopfunc: true, quotmark:false */
/* global jQuery:false, console */
(function($) {
    var location,temp_celcius,temp,farenheit;
    
    $("#cir1").on("click",function(){
        location = prompt("Enter the location:");
        weather_get();
    });

    $("#cir2").on("click",function(){
        // alert(temp_celcius);
        farenheit = temp_celcius * (9/5) + 32;
        $(".temp").text(farenheit).append("<sup>o</sup>F");
        weather_get();
    });


    function weather_get()
    {

        var locationPromise = $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather",
            data: {q: location},
        });

        
        locationPromise.done(function(data) {
            console.log(data);
            console.log(data.weather[0].main);
            $(".lab").text(data.weather[0].description);
            $(".lab-loc").text(data.name);
            temp = data.main.temp - 273.15;
            temp_celcius = (temp).toFixed(2);
            $(".temp").text(temp_celcius).append("<sup>o</sup");
            $(".fa-tint").text(data.main.humidity).append(" %");
            $(".fa-cog").text(data.main.pressure).append(" mPa");
            $(".fa-tachometer").text(data.wind.speed).append(" mPs");
            $("#desc").text(data.weather[0].description);
        });    
    }
} (jQuery));