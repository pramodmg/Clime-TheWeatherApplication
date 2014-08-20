var loc = window.localStorage.getItem("location");
var array = { 200 : "P" , 201 : "Q", 202 : "R", 210 : "O", 211 : "P", 212 : "Q", 221 : "P" , 230 : "Q" , 231 : "Q" , 232 : "R" ,
                  300 : "Q" , 301 : "Q", 302 : "R", 310 : "Q" ,311 : "R", 312 : "R", 313 : "R" , 314 : "X" , 321 : "T" ,
                  500 : "Q" , 501 : "R", 502 : "6", 503 : "7" ,504 : "8", 511 : "\"", 520 : "7" , 521 : "$" , 522 : "8" ,531 : "9",
                  600 : "U" , 601 : "V", 602 : "W", 611 : "X" ,612 : "7", 615 : "!" , 616 : "#" , 620 : "#" , 621 : "$" ,622 : "$",
                  701 : "M" , 711 : "M", 721 : "F", 731 : "M" ,741 : "F", 751 : "M" ,761 : "M" , 762 :"F" , 771 : "M" , 781 : "F",
                  800 : "B" , 801 : "H", 802 : "Y", 803 : "L" ,804 : "Y",
                  900 : "F" , 901 : "F", 902 : "F", 903 : "U" ,904 : "B", 905 : "L" , 906: "W",
                  950 : "G" , 951 : "L", 952 : "J", 953 : "J" ,954 : "E", 955 : "F", 956 : "F" , 957 : "S", 958: "U" , 959 : "F",
                  960 : "9" , 961 : "9", 962 : "!"};
var min = [],max = [];
var d = new Date();
var day = d.getDay();
var mo = d.getMonth();
var date = d.getDate();
var week_day = ["Sunday", "Monday" , "Tuesday" , "Wednesday" , "Thursday", "Friday" , "Saturday" ];
var week_day_three = ["Sun", "Mon" , "Tue" , "Wed" , "Thu", "Fri" , "Sat" ];
var month_week = ["January","February","March","April","May","June","July","August","September","October","November","December"];
$(document).ready(function(){
	$("#loc_name").text(loc);
	document.getElementById("day").innerHTML = week_day[day];
	document.getElementById("month").innerHTML = month_week[mo] +", "+ date;
	$(".page2").hide();
	weather_get();
});

$("#back").on("click",function(){
	var home = "../www/index.html";
	$(location).attr('href',home);
});

// document.addEventListener("DOMContentLoaded", function() {
//       var container = document.getElementById("demo");
//       dragend = new Dragend(container, {
//         afterInitialize: function() {
//           container.style.visibility = "visible";
//         }
//       });
//     }, false);

function weather_get()
    {
        
        var locationPromise = $.ajax({
            url: "http://api.openweathermap.org/data/2.5/forecast/daily",
            data: {q: loc},
        });

        
        locationPromise.done(function(data) {
            console.log(data);

            // var len = data.list;
            // console.log(len.length);
            // var le = len.length;
            // var myDate = new Date(data.list[0].dt *1000);
            // console.log(myDate.toLocaleString());
            // // console.log(myDate.getDay());
            // var da = myDate.getDay();
            // // console.log(week[da]);
            // var x = "#" + da;
            // // var y = "#day" + da;
            // console.log(x);
            // $(x).css("font-weight","bold");
            
            for(var i=0;i<=6;i++)
            {
                min[i]=(data.list[i].temp.min.toFixed(0)-273.15).toFixed(0);
                // alert(cel[i]);
                max[i]=(data.list[i].temp.max.toFixed(0)-273.15).toFixed(0);
            }
            $("#temp").text(min[0]).append("/").append(max[0]).append("<sup>o</sup>C");
            // $("#mon").text(min[0]).append("<sup>o</sup>C").append("<span> - </span>").append(max[0]).append("<sup>o</sup>C");
            // $("#tue").text(min[1]).append("<sup>o</sup>C").append("<span> - </span>").append(max[1]).append("<sup>o</sup>C");
            // $("#wed").text(min[2]).append("<sup>o</sup>C").append("<span> - </span>").append(max[2]).append("<sup>o</sup>C");
            // $("#thur").text(min[3]).append("<sup>o</sup>C").append("<span> - </span>").append(max[3]).append("<sup>o</sup>C");
            // $("#fri").text(min[4]).append("<sup>o</sup>C").append("<span> - </span>").append(max[4]).append("<sup>o</sup>C");
            // $("#sat").text(min[5]).append("<sup>o</sup>C").append("<span> - </span>").append(max[5]).append("<sup>o</sup>C");
            // $("#sun").text(min[6]).append("<sup>o</sup>C").append("<span> - </span>").append(max[6]).append("<sup>o</sup>C");
			$("#main_icon").attr("data-icon",array[data.list[0].weather[0].id]);
			$("#w1").attr("data-icon",array[data.list[1].weather[0].id]);
			$("#w2").attr("data-icon",array[data.list[2].weather[0].id]);
			$("#w3").attr("data-icon",array[data.list[3].weather[0].id]);
			$("#w4").attr("data-icon",array[data.list[4].weather[0].id]);
			$("#w5").attr("data-icon",array[data.list[5].weather[0].id]);
			$("#w6").attr("data-icon",array[data.list[6].weather[0].id]);
			check_day();
			$("#temp").text(min[0]).append("/").append(max[0]).append("<sup>o</sup>C");
			$("#day1_temp").text(min[1]).append("/").append(max[1]).append("<sup>o</sup>C");
			$("#day2_temp").text(min[2]).append("/").append(max[2]).append("<sup>o</sup>C");
			$("#day3_temp").text(min[3]).append("/").append(max[3]).append("<sup>o</sup>C");
			$("#day4_temp").text(min[4]).append("/").append(max[4]).append("<sup>o</sup>C");
			$("#day5_temp").text(min[5]).append("/").append(max[5]).append("<sup>o</sup>C");
			$("#day6_temp").text(min[6]).append("/").append(max[6]).append("<sup>o</sup>C");
    });
}

function check_day()
{
	if(day===0)
	{
		document.getElementById("day_1").innerHTML = week_day_three[day+1];
		document.getElementById("day_2").innerHTML = week_day_three[day+2];
		document.getElementById("day_3").innerHTML = week_day_three[day+3];
		document.getElementById("day_4").innerHTML = week_day_three[day+4];
		document.getElementById("day_5").innerHTML = week_day_three[day+5];
		document.getElementById("day_5").innerHTML = week_day_three[day+6];
	} else if(day === 1) {
		document.getElementById("day_1").innerHTML = week_day_three[day+1];
		document.getElementById("day_2").innerHTML = week_day_three[day+2];
		document.getElementById("day_3").innerHTML = week_day_three[day+3];
		document.getElementById("day_4").innerHTML = week_day_three[day+4];
		document.getElementById("day_5").innerHTML = week_day_three[day+5];
		document.getElementById("day_6").innerHTML = week_day_three[0];
	} else if(day === 2) {
		document.getElementById("day_1").innerHTML = week_day_three[day+1];
		document.getElementById("day_2").innerHTML = week_day_three[day+2];
		document.getElementById("day_3").innerHTML = week_day_three[day+3];
		document.getElementById("day_4").innerHTML = week_day_three[day+4];
		document.getElementById("day_5").innerHTML = week_day_three[0];
		document.getElementById("day_6").innerHTML = week_day_three[1];
	} else if (day === 3 ){
		document.getElementById("day_1").innerHTML = week_day_three[day+1];
		document.getElementById("day_2").innerHTML = week_day_three[day+2];
		document.getElementById("day_3").innerHTML = week_day_three[day+3];
		document.getElementById("day_4").innerHTML = week_day_three[0];
		document.getElementById("day_5").innerHTML = week_day_three[1];
		document.getElementById("day_6").innerHTML = week_day_three[2];
	}else if(day === 4) {
		document.getElementById("day_1").innerHTML = week_day_three[day+1];
		document.getElementById("day_2").innerHTML = week_day_three[day+2];
		document.getElementById("day_3").innerHTML = week_day_three[0];
		document.getElementById("day_4").innerHTML = week_day_three[1];
		document.getElementById("day_5").innerHTML = week_day_three[2];
		document.getElementById("day_6").innerHTML = week_day_three[3];
	}else if(day === 5) {
		document.getElementById("day_1").innerHTML = week_day_three[day+1];
		document.getElementById("day_2").innerHTML = week_day_three[0];
		document.getElementById("day_3").innerHTML = week_day_three[1];
		document.getElementById("day_4").innerHTML = week_day_three[2];
		document.getElementById("day_5").innerHTML = week_day_three[3];
		document.getElementById("day_6").innerHTML = week_day_three[4];
	} else if(day === 6) {
		document.getElementById("day_1").innerHTML = week_day_three[0];
		document.getElementById("day_2").innerHTML = week_day_three[1];
		document.getElementById("day_3").innerHTML = week_day_three[2];
		document.getElementById("day_4").innerHTML = week_day_three[3];
		document.getElementById("day_5").innerHTML = week_day_three[5];
		document.getElementById("day_6").innerHTML = week_day_three[6];
	}
}

