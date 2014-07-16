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

$(".bottom_div").swipe({
		// count = count+1;
		swipeLeft:function(event, phase, direction, distance, duration, fingers, fingerData) {
				AnimateRotate(100);
				console.log("swipe Left");
				$(".page2").show();
				$(".page1").hide();
			},
		swipeRight:function(event, phase, direction, distance, duration, fingers, fingerData) {
				$(".page1").show();
				$(".page2").hide();
				$("#notdark").removeClass();
				$("#dark").addClass();
				console.log("swipe Right");
     		},
		threshold:0,
		fingers:1,
		allowPageScroll:"horizontal"
});


function AnimateRotate(d){
    // var elem = $("#circle");
    // var elem = $("#circle2");

    $({deg: 0}).animate({deg: d}, {
        duration: 4000,
        step: function(now){
            $("#page1").css({
               	transform: "translateX (" + now + "px)"
            });
            // $("#cir1").css({
            //      transform: "rotate(" + now + "deg)"
            // });
            // $("#cir2").css({
            //      transform: "rotate(" + now + "deg)"
            // });
            // $("#cir3").css({
            //      transform: "rotate(" + now + "deg)"
            // });
        }
    });
    // $("#text").text("welcome");
}