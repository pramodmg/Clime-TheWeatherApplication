$("#circle").on("click", function(evr) {
    // Your code for circle click
    evr.stopPropagation();
    highlight(this);
    toggle();
});

var flag = true;
function toggle()
{
	if(flag)
	{
		// alert("true");
		move_circle();
		flag = false;
	}
	else
	{
		// alert("false");
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
	$("#cir1").animate({right: "+230px"},"slow");
	$("#cir2").animate({left: "+180px"},"slow");
	$("#cir3").animate({left: "+180px"},"slow");
    $(".fa-tint").show();
    $(".fa-cog").show();
    $(".fa-tachometer").show();
    $(".pos").show();
    $(".home-icon").show();
    myFunction();
}

function move_circle_back()
{
	$("#cir1").show();
	$("#cir2").show();
	$("#cir3").show();
	$("#cir1").animate({right: "0px"},"slow");
	$("#cir2").animate({left: "0px"},"slow");
	$("#cir3").animate({left: "0px"},"slow");
    $(".fa-tint").hide();
    $(".fa-cog").hide();
    $(".fa-tachometer").hide();
    $(".pos").hide();
    $(".home-icon").hide();
}

$("#cir1").on("click", function(evr) {
    // Your code for circle click
    evr.stopPropagation();
    highlight(this);
});


$("#cir2").on("click", function(evr) {
    // Your code for circle click
    evr.stopPropagation();
    highlight(this);
});


$("#cir3").on("click", function(evr) {
    // Your code for circle click
    evr.stopPropagation();
    highlight(this);
    nextpage(this);
});

$("body").on("click", function() {
    highlight();
    $(".pos").hide();
});

function highlight(invokeElm) {
    var elms = $("center").children("div");

    $.each(elms, function(key, elm) {
        $(elm).removeClass("hover");
    });

    if(invokeElm) {
        $(invokeElm).addClass("hover");
        // $("#show").hide();
    }
}

$(".home-icon").on("click",function(){
	move_circle_back();
    $(".pos").hide();
    flag = true;
    $(".fa-tint").hide();
    $(".fa-cog").hide();
    $(".fa-tachometer").hide();
    $(".home-icon").hide();
});

$(document).ready(function(){
	// disp(this);
    $(".pos").hide();
    $(".fa-tint").hide();
    $(".fa-cog").hide();
    $(".fa-tachometer").hide();
    $(".home-icon").hide();
});

function nextpage(invokeElm)
{
	var url = "../www/weather_show.html";    
	$(location).attr('href',url);
}