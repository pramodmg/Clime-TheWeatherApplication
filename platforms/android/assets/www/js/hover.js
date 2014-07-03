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
		$("#circle").animate({width :"500px",height :"500px",'margin-bottom':"0",left : "-17%"},"fast");
		$(".icon1").css({position:"relative",left:"-1%"})
		$(".condition").css({top : "21%"},"fast");
		$("#circle").css({position : "relative"});
		$("#cen").css({overflow :"hidden",position :"fixed"});
		// $("#cir1").hide();
		// $("#cir2").hide();
		// $("#cir3").hide();
	}
    else if (wi >= 350 && wi <= 450)
    {
		$("#circle").animate({width :"580px",height :"580px",'margin-bottom':"0",left : "-18%"},"fast");
		$("#circle").css({position : "relative"});
		$("#cen").css({overflow :"hidden",position :"fixed"});
		// $("#cir1").hide();
		// $("#cir2").hide();
		// $("#cir3").hide();
    }
    else if(wi === 480)
    {
    	$("#circle").animate({width :"790px",height :"790px",left : "-155px"},"fast");
		$(".icon1").css({position:"relative",left:"-1%"});
		$("#circle").css({position : "relative"});
		$("#cen").css({overflow : "hidden",position :"fixed"});	
		$("#cir1").hide();
		$("#cir2").hide();
		$("#cir3").hide();
    }

    else if(wi >=446 && wi<=570)
    {
    	$("#circle").animate({width :"830px",height :"830px",'margin-bottom' :"0",left : "-155px"},"fast");
		$(".icon1").css({position:"relative",left:"-1%"});
		$("#circle").css({position : "relative"});
		$("#cen").css({overflow : "hidden"});	
		$("#cir1").hide();
		$("#cir2").hide();
		$("#cir3").hide();
    }

  //   if (wi >= 451 && wi<=500)
  //   {
		// $("#circle").animate({width :"790px",height :"790px",left : "-155px"},"fast");
		// $("#circle").css({position : "relative"});
		// $("#cen").css({overflow : "hidden",position :"fixed"});
		// // $("#cir1").hide();
		// // $("#cir2").hide();
		// // $("#cir3").hide();
  //   }

    else {
        $("p.testp").text('Screen width is greater than 1200px. Width is currently: ' + wi + 'px.');
        }
}

function move_cicle_1_back()
{
	if(wi <= 320)
	{
		$("#circle").animate({width :"220px",height :"220px",'margin-bottom':"-80px",left :"0%"},"fast");
		$("#circle").css({position : "relative"});
		$(".icon1").css({position:"relative",left:"0%"})
		$(".condition").css({top : "39%"},"fast");
		$("#cen").css({overflow :"visible",position : "relative"});
		// alert("here");
	}

    else if (wi >= 350 && wi <= 450)
    {
		$("#circle").animate({width :"240px",height :"240px",'margin-bottom':"-80px",left : "0%"},"fast");
		// $("#circle").css({position : "visible"});
		$("#cen").css({overflow : "visible",position :"relative"});
    }

    else if(wi === 480)
    {
    	$("#circle").animate({width :"320px",height :"320px",'margin-bottom' :"0",left : "0px"},"fast");
		$(".icon1").css({position:"relative",left:"0%"});
		$("#circle").css({position : "relative"});
		$("#cen").css({overflow : "hidden"});	
		// $(".condition").css({top : "60%"},"fast");
    }

    else if(wi >=446 && wi<=570)
    {
    	$("#circle").animate({width :"320px",height :"320px",'margin-bottom' :"0",left : "0px"},"fast");
		$(".icon1").css({position:"relative",left:"-1%"});
		$("#circle").css({position : "relative"});
		$("#cen").css({overflow : "hidden"});	
    }

  //   if (wi >= 451 && wi <= 500)
  //   {
		// $("#circle").animate({width :"300px",height :"300px",left : "0%"},"fast");
		// // $("#circle").css({position : "visible"});
		// $("#cen").css({overflow : "visible",position :"relative"});
  //   }
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