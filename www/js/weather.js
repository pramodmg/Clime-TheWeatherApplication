/* jshint loopfunc: true, quotmark:false */
/* global jQuery:false, console */
(function($) {
    var location,temp_celcius = 25,temp,farenheit;
    var flag = true;
    var array = { 200 : "P" , 201 : "Q", 202 : "R", 210 : "O", 211 : "P", 212 : "Q", 221 : "P" , 230 : "Q" , 231 : "Q" , 232 : "R" ,
                  300 : "Q" , 301 : "Q", 302 : "R", 310 : "Q" ,311 : "R", 312 : "R", 313 : "R" , 314 : "X" , 321 : "T" ,
                  500 : "Q" , 501 : "R", 502 : "6", 503 : "7" ,504 : "8", 511 : "\"", 520 : "7" , 521 : "$" , 522 : "8" ,531 : "9",
                  701 : "M" , 711 : "M", 721 : "F", 731 : "M" ,741 : "F", 751 : "M" ,761 : "M" , 762 :"F" , 771 : "M" , 781 : "F",
                  800 : "B" , 801 : "H", 802 : "Y", 803 : "L" ,804 : "Y",
                  900 : "F" , 901 : "F", 902 : "F", 903 : "U" ,904 : "B", 905 : "L" , 906: "W",
                  950 : "G" , 951 : "L", 952 : "J", 953 : "J" ,954 : "E", 955 : "F", 956 : "F" , 957 : "S", 958: "U" , 959 : "F",
                  960 : "9" , 961 : "9", 962 : "!"};
    $("#cir1").on("click",function(){
        location = prompt("Enter the location:");
        weather_get();
    });

    $("#cir2").on("click",function(){
        // alert(temp_celcius);
        toggle();
    });

    function toggle()
    {
        if(flag)
        {
            farenheit = (temp_celcius * (9/5) + 32).toFixed(1);
            $(".temp").html(farenheit+"<sup>o</sup>F");
            flag = false;
        }
        else
        {
            flag = true;
            $(".temp").html(temp_celcius+"<sup>o</sup>C");
        }
    }
    function weather_get()
    {

        var locationPromise = $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather",
            data: {q: location},
        });

        
        locationPromise.done(function(data) {
            console.log(data);
            console.log(data.weather[0].main);
            window.localStorage.setItem("location",data.name);
            $(".lab").text(data.weather[0].description);
            $(".lab-loc").text(data.name);
            temp = data.main.temp - 273.15;
            temp_celcius = (temp).toFixed(1);
            $(".temp").text(temp_celcius).append("<sup>o</sup>C");
            $(".fa-tint").text(data.main.humidity).append(" %");
            $(".fa-cog").text(data.main.pressure).append(" mPa");
            $(".fa-tachometer").text(data.wind.speed).append(" mPs");
            $("#desc").text(data.weather[0].description);
            $(".icon1").attr("data-icon",array[data.weather[0].id]);
        });    
    }
} (jQuery));