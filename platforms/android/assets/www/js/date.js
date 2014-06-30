$(document).ready(function(){
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth();
    var m = ["january","february","march","april","may","june","july","august","september","october","november","december"];
    var y = d.getFullYear();
    document.getElementById("day").innerHTML = day + "th";
    document.getElementById("month").innerHTML = m[month] + ", " + y;

    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    // onSuccess Geolocation
    //
    function onSuccess(position) {
        var locationPromise = $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather",
            data: {lat : position.coords.latitude,lon : position.coords.longitude},
        });

        
        locationPromise.done(function(data) {
            console.log(data);
            $(".lab-loc").text(data.name);
            $(".lab").text(data.weather[0].description);
            temp = data.main.temp - 273.15;
            temp_celcius = (temp).toFixed(1);
            $(".temp").text(temp_celcius).append("<sup>o</sup>C");
            $("#humidity").text(data.main.humidity).append('<span class="percentage"> %</span>');
            $("#pressure").text(data.main.pressure).append('<span class="units"> hpa</span>');
            $("#wind").text(data.wind.speed).append('<span class="units"> m/s</span');
            $("#desc").text(data.weather[0].description);
            $(".icon1").attr("data-icon",array[data.weather[0].id]);
        });    
    }

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    
});