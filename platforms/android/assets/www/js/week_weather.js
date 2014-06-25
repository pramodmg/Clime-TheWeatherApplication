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
            // for(int i=0;i<=len-1;i++){
            //     var da = day(data.list[i].dt);
            // }
            // $("#day1").text(week[da]);
            // $("#day2").text(week[da]);
            // $("#day3").text(week[da]);
            // $("#day4").text(week[da]);
            // $("#day5").text(week[da]);
            // $("#day6").text(week[da]);
            // $("#day7").text(week[da]);
            $("#mon").text(data.list[0].temp.day);
            $("#tue").text(data.list[1].temp.day);
            $("#wed").text(data.list[2].temp.day);
            $("#thur").text(data.list[3].temp.day);
            $("#fri").text(data.list[4].temp.day);
            $("#sat").text(data.list[5].temp.day);
            $("#sun").text(data.list[6].temp.day);
        });    

        function day(data)
        {
            // var myDate = new Date(data.list[i].dt *1000);
            // console.log(myDate.toLocaleString());
            // console.log(myDate.getDay());
            var da = myDate.getDay();
            console.log(week[da]);
            return da;
        }
        
    }
