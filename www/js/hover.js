$("#circle").on("click", function(evr) {
    // Your code for circle click
    toggle();
});

var flag = true;
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

function myFunction() {
    setTimeout(function(){
		$("#cir1").fadeOut();
		$("#cir2").fadeOut();
		$("#cir3").fadeOut();
    }, 1);
}

function move_circle()
{
	$("#cir1").animate({right: "+230px"},"fast");
	$("#cir2").animate({left: "+180px"},"fast");
	$("#cir3").animate({left: "+180px"},"fast");
	$("#circle").animate({width :"+600px",height :"+600px",'margin-bottom':"0",left : "-20%"},"fast");
	$("#circle").css({position : "relative"});
	$("#cen").css({overflow :"hidden",position :"fixed"});
    $(".fa-tint").show();
    $("#wind").show();
    $(".fa-tachometer").show();
    $(".left1").show();
    $(".home-icon").show();
    $("#humidity").show();
    $("#pressure").show();
    $("#desc").show();
    myFunction();
}

function move_circle_back()
{
	$("#cir1").show();
	$("#cir2").show();
	$("#cir3").show();
	$("#cir1").animate({right: "0px"},"fast");
	$("#cir2").animate({left: "0px"},"fast");
	$("#cir3").animate({left: "0px"},"fast");
	$("#circle").animate({width :"240px",height :"240px",'margin-bottom':"-80px",left : "0%"},"fast");
	$("#circle").css({position : "visible"});
	$("#cen").css({overflow : "visible",position :"relative"});
    $(".fa-tint").hide();
    $("#wind").hide();
    $(".fa-tachometer").hide();
    $(".left1").hide();
    $(".home-icon").hide();
    $("#humidity").hide();
    $("#pressure").hide();
    $("#desc").hide();
}

$("#cir3").on("click", function(evr) {
    nextpage(this);
});

$(".home-icon").on("click",function(){
	move_circle_back();
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