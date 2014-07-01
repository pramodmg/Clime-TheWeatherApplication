$("#circle").on("click", function(evr) {
    // Your code for circle click
    toggle();
});

var flag = true;
var wi = $(window).width();

function toggle()
{
	if(flag)
	{
		move_circle();
		flag = false;
	} else	{
		move_circle_back();
		flag = true;
	}
}

function move_circle()
{
	$("#cir1").fadeOut();
	$("#cir2").fadeOut();
	$("#cir3").fadeOut();
    $(".fa-tint").show();
    $("#wind").show();
    $(".fa-tachometer").show();
    $(".left1").show();
    $(".home-icon").show();
    $("#humidity").show();
    $("#pressure").show();
    $("#desc").show();
    move_circle_1();
}

function move_circle_1() {
    if (wi <= 480){
        // $("p.testp").text('Screen width is less than or equal to 480px. Width is currently: ' + wi + 'px.');
		$("#circle").animate({width :"+580px",height :"+580px",'margin-bottom':"0",left : "-18%"},"fast");
		$("#circle").css({position : "relative"});
		$("#cen").css({overflow :"hidden",position :"fixed"});
        }
    else if (wi <= 767){
        $("p.testp").text('Screen width is between 481px and 767px. Width is currently: ' + wi + 'px.');
        }
    else if (wi <= 980){
        $("p.testp").text('Screen width is between 768px and 980px. Width is currently: ' + wi + 'px.');
        }
    else if (wi <= 1200){
        $("p.testp").text('Screen width is between 981px and 1199px. Width is currently: ' + wi + 'px.');
        }
    else {
        $("p.testp").text('Screen width is greater than 1200px. Width is currently: ' + wi + 'px.');
        }
}

function move_cicle_1_back()
{
    if (wi <= 480){
		$("#circle").animate({width :"240px",height :"240px",'margin-bottom':"-80px",left : "0%"},"fast");
		$("#circle").css({position : "visible"});
		$("#cen").css({overflow : "visible",position :"relative"});
        }
    else if (wi <= 767){
        $("p.testp").text('Screen width is between 481px and 767px. Width is currently: ' + wi + 'px.');
        }
    else if (wi <= 980){
        $("p.testp").text('Screen width is between 768px and 980px. Width is currently: ' + wi + 'px.');
        }
    else if (wi <= 1200){
        $("p.testp").text('Screen width is between 981px and 1199px. Width is currently: ' + wi + 'px.');
        }
    else {
        $("p.testp").text('Screen width is greater than 1200px. Width is currently: ' + wi + 'px.');
        }

}
function move_circle_back()
{
	$("#cir1").show();
	$("#cir2").show();
	$("#cir3").show();
    $(".fa-tint").hide();
    $("#wind").hide();
    $(".fa-tachometer").hide();
    $(".left1").hide();
    $(".home-icon").hide();
    $("#humidity").hide();
    $("#pressure").hide();
    $("#desc").hide();
    move_cicle_1_back();
}

$("#cir3").on("click", function(evr) {
    nextpage(this);
});

$(".home-icon").on("click",function(){
	move_circle_back();
	move_cicle_1_back();
    $(".left1").hide();
    flag = true;
    $(".fa-tint").hide();
    $("#wind").hide();
    $(".fa-tachometer").hide();
    $(".home-icon").hide();
    $("#humidity").hide();
    $("#pressure").hide();
    $("#desc").hide();
});

$(document).ready(function(){
    $(".left1").hide();
    $(".fa-tint").hide();
    $("#wind").hide();
    $(".fa-tachometer").hide();
    $(".home-icon").hide();
    $("#humidity").hide();
    $("#pressure").hide();
    $("#desc").hide();
});

function nextpage(invokeElm)
{
	var url = "../www/weather_show.html";    
	$(location).attr('href',url);
}