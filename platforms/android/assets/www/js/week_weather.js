/* jshint loopfunc: true, quotmark:false */
/* global jQuery:false, console */
var loc = window.localStorage.getItem("location");
var min = [],max = [];
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
            // $(x).css("font-style","italic");
            var y = "#day" + da;
            $(y).append("<sup>*</sup>");
            
            for(var i=0;i<=6;i++)
            {
                min[i]=(data.list[i].temp.min.toFixed(1)-273.15).toFixed(1);
                // alert(cel[i]);
                max[i]=(data.list[i].temp.max.toFixed(1)-273.15).toFixed(1);
            }
            $("#mon").text(min[0]).append("<sup>o</sup>C").append("<span> - </span>").append(max[0]).append("<sup>o</sup>C");
            $("#tue").text(min[1]).append("<sup>o</sup>C").append("<span> - </span>").append(max[1]).append("<sup>o</sup>C");
            $("#wed").text(min[2]).append("<sup>o</sup>C").append("<span> - </span>").append(max[2]).append("<sup>o</sup>C");
            $("#thur").text(min[3]).append("<sup>o</sup>C").append("<span> - </span>").append(max[3]).append("<sup>o</sup>C");
            $("#fri").text(min[4]).append("<sup>o</sup>C").append("<span> - </span>").append(max[4]).append("<sup>o</sup>C");
            $("#sat").text(min[5]).append("<sup>o</sup>C").append("<span> - </span>").append(max[5]).append("<sup>o</sup>C");
            $("#sun").text(min[6]).append("<sup>o</sup>C").append("<span> - </span>").append(max[6]).append("<sup>o</sup>C");
        });    

        function day(data)
        {
            var da = myDate.getDay();
            console.log(week[da]);
            return da;
        }       
        $("#home").on("click",function(){
            var home = "../www/index.html";    
            $(location).attr('href',home);
        });
    }