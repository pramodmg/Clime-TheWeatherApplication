/* jshint loopfunc: true, quotmark:false */
/* global jQuery:false, console */
(function($) {
    var location,temp_celcius,temp,farenheit;
    
    var array = { 200 : "P" , 201 : "Q", 202 : "R", 210 : "O", 211 : "P", 212 : "Q", 221 : "P" , 230 : "Q" , 231 : "Q" , 232 : "R" ,
                  300 : "Q" , 301 : "Q", 302 : "R", 310 : "Q" ,311 : "R", 312 : "R", 313 : "R" , 314 : "X" , 321 : "T" ,
                  500 : "Q" , 501 : "R", 502 : "6", 503 :"7" , 504 : "8", 511 : "\"", 520 : "7" , 521 : "$" , 522 : "8" ,531 : "9"};
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
            $(".icon1").attr("data-icon",array[data.weather[0].id]);
        });    
    }
} (jQuery));