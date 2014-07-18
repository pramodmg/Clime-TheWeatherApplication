$(document).ready(function(){
	var loc = window.localStorage.getItem("location");
	$("#loc_name").text(loc);

	var d = new Date();
	var day = d.getDay();
	var mo = d.getMonth();
	var date = d.getDate();
	var week_day = ["Sunday", "Monday" , "Tuesday" , "Wednesday" , "Friday" , "Saturday" ];
    var month_week = ["january","february","march","april","may","june","july","august","september","october","november","december"];
	document.getElementById("day").innerHTML = week_day[day];
	document.getElementById("month").innerHTML = month_week[mo] +", "+ date;
	$(".page2").hide();
});

document.addEventListener("DOMContentLoaded", function() {
      var container = document.getElementById("demo");
      dragend = new Dragend(container, {
        afterInitialize: function() {
          container.style.visibility = "visible";
        }
      });
    }, false)

    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', 'UA-219062-10']);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();