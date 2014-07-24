var all_function = (function($, all_function) {
all_function.a = function() {
$(".circle").on("click", function(evr) {
    toggle();
});

var flag = true;
var wi = $(window).width();
var hi = $(window).height();
console.log(wi);
console.log(hi);

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
};

function move_circle()
{
	move_circle_1();
    $(".fa-tint").show();
    $(".wind").show();
    $(".fa-tachometer").show();
    $(".left1").show();
    $(".home-icon").show();
    $("#humidity").show();
    $("#pressure").show();
    $("#desc").show();
    $(".pos").show();
    $(".left").show();
    $(".right").show();
};

function move_circle_1() {
	
	if(wi == 320)
	{
		$(".circle").animate({width :"500px",height :"500px",'margin-bottom':"0",left : "-17%"},"fast");
		$(".icon1").css({position:"relative",left:"-1%"})
		$(".condition").css({top : "18%"},"fast");
		$(".circle").css({position : "relative"});
		$(".cen").css({overflow :"hidden",position :"fixed"});
		// $(".cir1").hide();
		// $(".cir2").hide();
		// $(".cir3").hide();
	}
    else if (wi >= 350 && wi <= 450)
    {
		$(".circle").css({position : "relative"});
		$(".circle").animate({width :"580px",height :"580px",'margin-bottom':"0",left : "-18%"},"fast");
		$(".cen").css({overflow :"hidden",position :"fixed"});
		// $(".cir1").hide();
		// $(".cir2").hide();
		// $(".cir3").hide();
    }
    else if(wi === 480)
    {
    	$(".circle").animate({width :"730px",height :"730px",left : "-115px"},"fast");
		$(".icon1").css({position:"relative",left:"-1%"});
		$(".circle").css({position : "relative"});
		$(".cen").css({overflow : "hidden",position :"fixed"});	
		$(".cir1").hide();
		$(".cir2").hide();
		$(".cir3").hide();
    }

    else if(wi >=446 && wi<=570)
    {
    	$(".circle").animate({width :"830px",height :"830px",'margin-bottom' :"0",left : "-155px"},"fast");
		$(".icon1").css({position:"relative",left:"-1%"});
		$(".circle").css({position : "relative"});
		$(".cen").css({overflow : "hidden"});	
		$(".cir1").hide();
		$(".cir2").hide();
		$(".cir3").hide();
    }


    else if(wi >=571 && wi <=650)
    {
    	$(".circle").animate({top :"170px"});
    	$(".circle").animate({width :"600px",height :"600px",'margin-bottom' :"0"},"fast");
		$(".circle").css({position : "relative"});
		$(".cir1").hide();
		$(".cir2").hide();
		$(".cir3").hide();
    }

    else if(wi >=651 && wi <=900)
    {
    	$(".circle").animate({top :"170px"});
    	$(".circle").animate({width :"650px",height :"650px",'margin-bottom' :"0",left : "0px"},"fast");
		$(".circle").css({position : "relative"});
		$(".cir1").hide();
		$(".cir2").hide();
		$(".cir3").hide();
    }

    else if(wi === 1024)
    {
    	$(".circle").animate({width :"650px",height :"650px",'margin-bottom' :"0",left : "0px"},"fast");
    	$(".cir1").fadeOut();
    	$(".cir2").fadeOut();
    	$(".cir3").fadeOut();
    }

  //   if (wi >= 451 && wi<=500)
  //   {
		// $(".circle").animate({width :"790px",height :"790px",left : "-155px"},"fast");
		// $(".circle").css({position : "relative"});
		// $(".cen").css({overflow : "hidden",position :"fixed"});
		// // $(".cir1").hide();
		// // $(".cir2").hide();
		// // $(".cir3").hide();
  //   }

    else {
    	$(".circle").animate({width :"650px",height :"650px",'margin-bottom' :"0",left : "0px"},"fast");

        }
};

function move_cicle_1_back()
{
	if(wi <= 320)
	{
		$(".circle").animate({width :"220px",height :"220px",'margin-bottom':"-80px",left :"0%"},"fast");
		$(".circle").css({position : "relative"});
		$(".icon1").css({position:"relative",left:"0%"})
		$(".condition").css({top : "32%"},"fast");
		$(".cen").css({overflow :"visible",position : "relative"});
		// alert("here");
	}

    else if (wi >= 350 && wi <= 450)
    {
		$(".circle").animate({width :"240px",height :"240px",'margin-bottom':"-80px",left : "0%"},"fast");
		// $(".circle").css({position : "visible"});
		$(".cen").css({overflow : "visible",position :"relative"});
    }

    else if(wi === 480)
    {
    	$(".circle").animate({width :"320px",height :"320px",'margin-bottom' :"0",left : "0px"},"fast",function(){
    							$(".cir1").show();
								$(".cir2").show();
								$(".cir3").show();
    	});
		// $(".icon1").css({position:"relative",left:"0%"});
		$(".circle").css({position : "relative"});
		$(".cen").css({overflow : "visible"});	
		// $(".condition").css({top : "60%"},"fast");
    }
	// else if(wi >=540 && hi <=960){
 //    	$(".circle").animate({width :"370px",height :"370px",'margin-bottom' :"0",left : "0px"},"fast",function(){
 //    		$(".cir1").show();
	// 		$(".cir2").show();
	// 		$(".cir3").show();
 //    	});
 //    }
    else if(wi >=446 && wi<=570)
    {
    	$(".circle").animate({width :"320px",height :"320px",'margin-bottom' :"0",left : "0px"},"fast",function(){
    		$(".cir1").show();
			$(".cir2").show();
			$(".cir3").show();
    	});
		// $(".icon1").css({position:"relative",left:"-1%"});
		// $(".circle").css({position : "relative"});
		// $(".cen").css({overflow : "hidden"});	
    }

    
    else if(wi >=571 && wi <=650)
    {
    	$(".circle").animate({width :"420px",height :"420px",'margin-bottom' :"0"},"fast");
		$(".circle").css({position : "relative"});
    	$(".circle").animate({top :"0px"},"fast",function(){
    							$(".cir1").show();
								$(".cir2").show();
								$(".cir3").show();
							});
    }

    else if(wi >=571 && wi <=900)
    {
    	$(".circle").animate({width :"300px",height :"300px",'margin-bottom' :"0",left : "0px"},"fast");
    	$(".cir1").fadeIn();
    	$(".cir2").fadeIn();
    	$(".cir3").fadeIn();
    	$(".circle").animate({top :"0px"},"fast",function(){
    							$(".cir1").fadeIn();
								$(".cir2").fadeIn();
								$(".cir3").fadeIn();
							});

    }

    else if(wi === 1024)
    {
    	$(".circle").animate({width :"300px",height :"300px",'margin-bottom' :"0",left : "0px"},"fast");
    	$(".cir1").fadeIn();
    	$(".cir2").fadeIn();
    	$(".cir3").fadeIn();
    }

    else if(wi <= 1025)
    {
    	$(".circle").animate({width :"300px",height :"300px",'margin-bottom' :"0",left : "0px"},"fast");
    }
  //   if (wi >= 451 && wi <= 500)
  //   {
		// $(".circle").animate({width :"300px",height :"300px",left : "0%"},"fast");
		// // $(".circle").css({position : "visible"});
		// $(".cen").css({overflow : "visible",position :"relative"});
  //   }
    else {
        $("p.testp").text('Screen width is greater than 1200px. Width is currently: ' + wi + 'px.');
        }

};

function move_circle_back()
{
    move_cicle_1_back();
	// $(".cir1").show();
	// $(".cir2").show();
	// $(".cir3").show();
    $(".fa-tint").hide();
    $("#wind").hide();
    $(".fa-tachometer").hide();
    $(".left1").hide();
    $(".home-icon").hide();
    $("#humidity").hide();
    $("#pressure").hide();
    $("#desc").hide();
    $(".pos").hide();
    $(".left").hide();
    $(".right").hide();
};


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


$(".cir3").on("click", function(evr) {

    var x = $(this).parent().parent().data("index");
    console.log(x);

    var restSession = JSON.parse(localStorage.getItem('weather'));
    var ses_data = restSession.weather[x-1];
    console.log(ses_data);
    localStorage.setItem("location",ses_data.location_name);
    nextpage(this);
});

function nextpage(invokeElm)
{
    var url = "../www/Mobile_weather.html";    
    $(location).attr('href',url);
}
};
return all_function;
}(jQuery, all_function || {}));