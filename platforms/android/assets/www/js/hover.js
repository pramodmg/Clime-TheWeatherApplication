$("#circle").on("click", function(evr) {
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
	move_circle_1();
    $(".fa-tint").show();
    $("#wind").show();
    $(".fa-tachometer").show();
    $(".left1").show();
    $(".home-icon").show();
    $("#humidity").show();
    $("#pressure").show();
    $("#desc").show();
}

function move_circle_1() {

	if(wi == 320)
	{
		$("#circle").animate({width :"570px",height :"570px",'margin-bottom':"0",left : "-23%"},"fast");
		$(".condition").animate({top : "90px"},"fast");
		$("#circle").css({position : "relative"});
		$("#cen").css({overflow :"hidden",position :"fixed"});
	}
    if (wi >= 350 && wi <= 480)
    {
		$("#circle").animate({width :"580px",height :"580px",'margin-bottom':"0",left : "-18%"},"fast");
		$("#circle").css({position : "relative"});
		$("#cen").css({overflow :"hidden",position :"fixed"});
    }

    if (wi = 1280)
    {
		$("#circle").animate({width :"880px",height :"880px",'margin-bottom':"0",left : "30%"},"fast");
		$("#circle").css({position : "relative"});
		$("#cen").css({position :"fixed"});
    }
    else {
        $("p.testp").text('Screen width is greater than 1200px. Width is currently: ' + wi + 'px.');
        }
}

function move_cicle_1_back()
{
	if(wi == 320)
	{
		$("#circle").animate({width :"210px",height :"210px",'margin-bottom':"-80px",left :"0%"},"fast");
		$(".condition").animate({top : "70px"},"fast");
		$("#circle").css({position : "relative"});
		$("#cen").css({overflow :"visible",position:"fixed"});
	}
    if (wi >= 350 && wi <= 480){
		$("#circle").animate({width :"240px",height :"240px",'margin-bottom':"-80px",left : "0%"},"fast");
		// $("#circle").css({position : "visible"});
		$("#cen").css({overflow : "visible",position :"relative"});
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

    document.addEventListener("backbutton", onback , false);
    function onback()
    {
    	alert("hello");
    }
});

function nextpage(invokeElm)
{
	var url = "../www/weather_show.html";    
	$(location).attr('href',url);
}