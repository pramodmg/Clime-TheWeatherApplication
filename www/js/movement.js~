var d = new Date();
var day = d.getDate();
var month = d.getMonth();
var m = ["January","February","March","April","May","June","July","August","September","October","November","December"];
var y = d.getFullYear();



var ele = document.getElementById('move');
var array = { 200 : "P" , 201 : "Q", 202 : "R", 210 : "O", 211 : "P", 212 : "Q", 221 : "P" , 230 : "Q" , 231 : "Q" , 232 : "R" ,
                  300 : "Q" , 301 : "Q", 302 : "R", 310 : "Q" ,311 : "R", 312 : "R", 313 : "R" , 314 : "X" , 321 : "T" ,
                  500 : "Q" , 501 : "R", 502 : "6", 503 : "7" ,504 : "8", 511 : "\"", 520 : "7" , 521 : "$" , 522 : "8" ,531 : "9",
                  600 : "U" , 601 : "V", 602 : "W", 611 : "X" ,612 : "7", 615 : "!" , 616 : "#" , 620 : "#" , 621 : "$" ,622 : "$",
                  701 : "M" , 711 : "M", 721 : "F", 731 : "M" ,741 : "F", 751 : "M" ,761 : "M" , 762 :"F" , 771 : "M" , 781 : "F",
                  800 : "B" , 801 : "H", 802 : "Y", 803 : "L" ,804 : "Y",
                  900 : "F" , 901 : "F", 902 : "F", 903 : "U" ,904 : "B", 905 : "L" , 906: "W",
                  950 : "G" , 951 : "L", 952 : "J", 953 : "J" ,954 : "E", 955 : "F", 956 : "F" , 957 : "S", 958: "U" , 959 : "F",
                  960 : "9" , 961 : "9", 962 : "!"};

var weather_description = { 200 : "Enjoy the Drizzingling Rain with music" , 201 : "Carry an umbrella for Saftey", 202 : "Umbrella will hav holes on it due to heavy rain", 210 : "Thunder + storm is very bad", 211 : "Photography mode", 212 : "Find a place to cover yourself", 221 : "Bad Weather" , 230 : "No going Out Today" , 231 : "Try to find a good shelter" , 232 : "Find a safe place nearby" ,
                  300 : "U will get slightly Wet Today" , 301 : "U will get slightly Wet Today", 302 : "Enjoy taking Outdoor Shower", 310 : "Enjoy taking Outdoor Shower" ,311 : "Enjoy taking Outdoor Shower", 312 : "Enjoy taking Outdoor Shower", 313 : "Enjoy taking Outdoor Shower" , 314 : "Enjoy taking Outdoor Shower" , 321 : "Enjoy taking Outdoor Shower" ,
                  500 : "U will get slightly Wet Today" , 501 : "U may need an Umbrella", 502 : "U definitely need an umbrella", 503 : "dont forget Umbrella" ,504 : "Carry an umbrella with you", 511 : "Thick frabric + umbrella is very necessary", 520 : "Enjoy Drizzingling Rain" , 521 : "U will Enjoy the shower" , 522 : "Hot Snaks + Rain is awesome now" ,531 : "Intensity of the shower is high",
                  600 : "Enjoy the Snow" , 601 : "Its Snowing", 602 : "U can try making snowman today", 611 : "Sleet Environment" ,612 : "U will be getting ICE today", 615 : "Ice and snow is a great combination" , 616 : "great Environment" , 620 : "Enjoy the shower Outdoor" , 621 : "Try taking snowy shower" ,622 : "It would be better if u stay at home",
                  701 : "U might get lost today" , 711 : "Chances of getting lost is high", 721 : "Dont forget the path to home", 731 : "Wearing sunglasses would be a better Idea" ,741 : "U might get Lost", 751 : "Sunglass is cumpulsory" ,761 : "Do wear Sunglasses" , 762 :"Don't get Burnt up" , 771 : "Its a complicated weather" , 781 : "Weather is violent today",
                  800 : "Its a bright and sunny day" , 801 : "Darkness is very little", 802 : "Chances of raining is very much", 803 : "It will rain today" ,804 : "Clouds are in romance",
                  900 : "Weather is Upset" , 901 : "weather is taking revange", 902 : "Fight mode activated", 903 : "Thick frabric is cumpulsory" ,904 : "Weather is Hot", 905 : "Fly with the wind" , 906: "Protect your head with a cap",
                  950 : "Weather is plesent" , 951 : "Feel relaxed", 952 : "Enjoy the wind", 953 : "You will enjoy the Wind flow" ,954 : "Windy Weather", 955 : "Try to store this fresh breeze", 956 : "Dont fly away" , 957 : "Dont fly away", 958: "Protect your head" , 959 : "Wear a helmet",
                  960 : "Storm comming up" , 961 : "Revenge mode activated", 962 : "Round Round Round"};

var color_codes ={ Haze : "rgba(128,128,128,0.6)", Mist : "rgba(128,128,128,0.6)" , Clouds : "rgba(0,192,255,0.6)" , Clear : "rgba(255,176,0,0.6)" , Rain : "rgba(51,204,255,0.6)" , Drizzle : "rgba(51,204,255,0.6)"};
var restoredSession = JSON.parse(localStorage.getItem('weather'));
if(restoredSession === null)
{
	var count=0;
}
else{
var count = (restoredSession.weather.length)-1;
var length = restoredSession.weather.length;
}
console.log("total length : " +length);
console.log("count initailly : "+count);
AnimateRotate(360);
getdata(count);
  


function getdata(index)
{
var restoredSession = JSON.parse(localStorage.getItem('weather'));
	if (restoredSession) 
	{
		// $(".condition").text(restoredSession.weather[index].condition);
	 //    $(".location").text(restoredSession.weather[index].location_name);
	 //    localStorage.setItem("location",restoredSession.weather[index].location_name);
	 //    $(".temp").text(restoredSession.weather[index].temp).append("<sup>o</sup>C");
	 //    $("#humidity").text(restoredSession.weather[index].humidity).append('<span class="percentage"> %</span>');
	 //    $("#pressure").text(restoredSession.weather[index].pressure).append('<span class="units"> hpa</span>');
	 //    $("#wind").text(restoredSession.weather[index].wind).append('<span class="units"> m/s</span');
	 //    $("#desc").text(restoredSession.weather[index].description);
	 //    $(".icon1").attr("data-icon",array[restoredSession.weather[index].icon]);
	 //    console.log(restoredSession.weather[index].main);
	 //    console.log(restoredSession.weather[index].color);
	 //    $(".circle").css("background",color_codes[restoredSession.weather[index].color]);
	 //    $(".cir1").css("background",color_codes[restoredSession.weather[index].color]);
	 //    $(".cir2").css("background",color_codes[restoredSession.weather[index].color]);
	 //    $(".cir3").css("background",color_codes[restoredSession.weather[index].color]);
		console.log(restoredSession);
   		create_div();
	}
	else 
	{
		create_div_nodata();
	}
}



    function create_div()
    {
		var restoredSession = JSON.parse(localStorage.getItem('weather'));
		console.log(restoredSession);
		console.log(restoredSession.weather[0].description);
		var description = restoredSession.weather[0].description;
		var length = restoredSession.weather.length;
    	console.log(length);
		for(var i =0;i<length;i++)
		{
			var description = restoredSession.weather[i].description;
			var loc_name = restoredSession.weather[i].location_name;
			var condition = restoredSession.weather[i].condition;
			var humidity = restoredSession.weather[i].humidity;
			var pressure = restoredSession.weather[i].pressure;
			var temp = restoredSession.weather[i].temp;
			var wind = restoredSession.weather[i].wind;
			var icon = restoredSession.weather[i].icon;
			var color = restoredSession.weather[i].color;
            window.localStorage.setItem("temp",temp);
            window.localStorage.setItem("location",restoredSession.weather[i].location_name);
        	
	        var div_creation = "<div class = 'item page1' data-index='"+ parseInt(i+1) +"'><div class='circle1'><center><div class='pos' id='desc'> " + description + " </div></center><div class='text-container'><div class='fa fa-tint left'></div><div class='fa fa-tachometer right'></div></div><div class='text-container'><div class='humidity left'>" + humidity + "<span class='percentage'> %</span>" + "</div><div id='pressure' class='right'>" + pressure + "<span class='units'> hpa</span>" + "</div></div><div class='text-container'><div class='icon left1' data-icon='F'></div><div class='icon left1' id='wind'>" + wind + "<span class='units'> m/s</span>" + "</div></div><div class='fa fa-home home-icon'></div></div><center class='cen'><div class='circle' style = 'background: "+ color_codes[restoredSession.weather[i].color] +"'><div class='icon icon1' data-icon='"+ array[restoredSession.weather[i].icon] +"'></div>"+ " " + "<label class='condition'>" + condition + "</label></div><div class='cir1' data-toggle='modal' data-target='#location-modal' style = 'background: "+ color_codes[restoredSession.weather[i].color] +"'><i class='fa fa-map-marker geo'></i><div class='location'>" + loc_name + "</div></div><div class='cir2' style = 'background: "+ color_codes[restoredSession.weather[i].color] +"' data-temp = " + temp + " data-flag = 'c' ><span class='temp'>" + temp + "<sup>o</sup>C</span></div><div class='cir3' style = 'background: "+ color_codes[restoredSession.weather[i].color] +"'><span id='day' class='date-style'> 235 </span><span id='month' class='month'>" + m[month] + "," + y + "</span></div></center></div></div>";
	        $(function() {
                all_function.a();
            });
	        $(".slider").append(div_creation);
    	}
            ready_events_load();
            $('.iosSlider').iosSlider('update');
    }

    function create_div_nodata()
    {
    	var index = 1;
        var d = new Date();
        var day = d.getDate();
        var month = d.getMonth();
        var y = d.getFullYear();
        var m = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    	var div_creation = "<div class = 'item page1' data-index='"+ index +"'><div class='circle1'><center><div class='pos' id='desc'> -- </div></center><div class='text-container'><div class='fa fa-tint left'></div><div class='fa fa-tachometer right'></div></div><div class='text-container'><div id='humidity' class='left'>he</div><div id='pressure' class='right'>pr</div></div><div class='text-container'><div class='icon left1' data-icon='F'></div><div class='icon left1' id='wind'>wi</div></div><div class='fa fa-home home-icon'></div></div><center class='cen'><div class='circle'><div class='icon icon1' data-icon='H'></div><label class='condition'>Cloudy</label></div><div class='cir1' data-toggle='modal' data-target='#location-modal'><i class='fa fa-map-marker geo'></i><div class='location'>India</div></div><div class='cir2'><span class='temp'> 25<sup class='degree'>o</sup>C</span></div><div class='cir3'><span id='day' class='date-style'>255555</span><span id='month' class='month'>September, 2014</span></div></center></div>";
    		$(".slider").append(div_creation);
    		ready_events_load();
	        $('.iosSlider').iosSlider('update');
    }
    function ready_events_load()
    {
		$(".left1").hide();
		$(".fa-tint").hide();
		$("#wind").hide();
		$(".fa-tachometer").hide();
		$(".home-icon").hide();
		$("#humidity").hide();
		$("#pressure").hide();
		$(".pos").hide();
		$(".left").hide();
		$(".right").hide();
    }
	// else{
	// 	$(".condition").text(restoredSession.weather[index].condition);
	//     $(".location").text(restoredSession.weather[index].location_name);
	//     $(".temp").text(restoredSession.weather[index].temp).append("<sup>o</sup>C");
	//     $("#humidity").text(restoredSession.weather[index].humidity).append('<span class="percentage"> %</span>');
	//     $("#pressure").text(restoredSession.weather[index].pressure).append('<span class="units"> hpa</span>');
	//     $("#wind").text(restoredSession.weather[index].wind).append('<span class="units"> m/s</span');
	//     $("#desc").text(restoredSession.weather[index].description);
	//     $(".icon1").attr("data-icon",array[restoredSession.weather[index].icon]);
	//     console.log(restoredSession.weather[index].main);
	//     console.log(restoredSession.weather[index].color);
	//     $("#circle").css("background",color_codes[restoredSession.weather[index].color]);
	//     $("#cir1").css("background",color_codes[restoredSession.weather[index].color]);
	//     $("#cir2").css("background",color_codes[restoredSession.weather[index].color]);
	//     $("#cir3").css("background",color_codes[restoredSession.weather[index].color]);
	// 	console.log(restoredSession);	
	// }
	// index = index;
	// console.log(restoredSession.weather[index].condition);
	    

function AnimateRotate(d){
    // var elem = $("#circle");
    // var elem = $("#circle2");

    $({deg: 0}).animate({deg: d}, {
        duration: 400,
        step: function(now){
            $(".circle").css({
                 transform: "rotate(" + now + "deg)"
            });
            $(".cir1").css({
                 transform: "rotate(" + now + "deg)"
            });
            $(".cir2").css({
                 transform: "rotate(" + now + "deg)"
            });
            $(".cir3").css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
    // $("#text").text("welcome");
}


