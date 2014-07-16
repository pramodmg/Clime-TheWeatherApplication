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