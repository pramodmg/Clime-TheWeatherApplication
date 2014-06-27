/* jshint loopfunc: true, quotmark:false */
/* global jQuery:false, console */
var loc = window.localStorage.getItem("location");
var week = { 0 : "Sunday", 1 : "Monday", 2 : "Tuesday", 3 : "Wednesday", 4 : "Thursday", 5 : "Friday", 6 : "Saturday"};
    $(document).ready(function(){
        $("#location").text(loc);
        $("#wel").text("Weekly Weather");
        weather_get();
    });

    function weather_get()
    {
        
        var locationPromise = $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast/daily",
            data: {q: loc},
        });

        
        locationPromise.done(function(data) {
            console.log(data);
            var len = data.list;
            console.log(len.length);
            var le = len.length;
            var myDate = new Date(data.list[0].dt *1000);
            console.log(myDate.toLocaleString());
            // console.log(myDate.getDay());
            var da = myDate.getDay();
            console.log(week[da]);
            var x = "#" + da;
            $(x).css("font-weight","bold");
            $("#mon").text(data.list[0].temp.day.toFixed(1));
            $("#tue").text(data.list[1].temp.day.toFixed(1));
            $("#wed").text(data.list[2].temp.day.toFixed(1));
            $("#thur").text(data.list[3].temp.day.toFixed(1));
            $("#fri").text(data.list[4].temp.day.toFixed(1));
            $("#sat").text(data.list[5].temp.day.toFixed(1));
            $("#sun").text(data.list[6].temp.day.toFixed(1));
        });    

        function day(data)
        {
            var da = myDate.getDay();
            console.log(week[da]);
            return da;
        }
        
    }
