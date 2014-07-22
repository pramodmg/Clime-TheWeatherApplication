// alert("hello");


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
                  300 : "Q" , 301 : "Q", 302 : "Enjoy taking Outdoor Shower", 310 : "Enjoy taking Outdoor Shower" ,311 : "Enjoy taking Outdoor Shower", 312 : "Enjoy taking Outdoor Shower", 313 : "Enjoy taking Outdoor Shower" , 314 : "Enjoy taking Outdoor Shower" , 321 : "Enjoy taking Outdoor Shower" ,
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

// Hammer(ele).on("swipeleft", function(event) {
// 	count++;
// 	console.log("count is " + count);
// 	if(count < length){
// 	AnimateRotate(360);
// 	// count++;
// 	console.log(count);
// 	getdata(count);
// 	// count++;
// 	}else{
// 		console.log("end of inputs");
// 		count=0;
// 		AnimateRotate(360);
// 		getdata(count);
// 	}
// });

// Hammer(ele).on("swiperight", function(event){
// 	console.log("count" + count);
// 	AnimateRotate(-360);
// 	if(count > 0 ){
// 		AnimateRotate(-360);
// 		count--;
// 		getdata(count);
//  	}else{
//  	  	console.log("you hav reached first element");
//  	  	count = length-1;
//  	  	console.log(count);
//  	  	getdata(count);
//  	}
// });

// $(document).on("click",function(){
	$("body").swipe( {
		// count = count+1;
		swipeLeft:function(event, phase, direction, distance, duration, fingers, fingerData) {
					count++;
				console.log("count is " + count);
				if(count < length){
				AnimateRotate(360);
				// count++;
				console.log(count);
				localStorage.setItem("count",count);
				getdata(count);
				// count++;
				}
					else{
					console.log("end of inputs");
					count=length-1;
					// AnimateRotate(360);
					// getdata(count);
					localStorage.setItem("count",count);
					alert("end");
				}
			},
		swipeRight:function(event, phase, direction, distance, duration, fingers, fingerData) {

				console.log("count" + count);
				AnimateRotate(-360);
				if(count > 0 ){
					AnimateRotate(-360);
					count--;
					localStorage.setItem("count",count);
					getdata(count);
			 	}else if(count === length)
			 	{
			 		count = count-1;
			 		console.log("count is : "+count);
					localStorage.setItem("count",count);
			 	} else{
			 	  	console.log("you hav reached first element");
			 	  	// count = length-1;
			 	  	// console.log(count);
			 	  	// getdata(count);
			 	  	alert("start");
				}
     		},
		threshold:0,
		fingers:1
	});

// function stop(target)
// {
// 	target.preventDefault();
// 	$("#cir1").click(function() {
//                console.log("yahooooo");
//     });
// }


    


function getdata(index)
{
var restoredSession = JSON.parse(localStorage.getItem('weather'));
	if (restoredSession) {
		$(".condition").text(restoredSession.weather[index].condition);
	    $(".location").text(restoredSession.weather[index].location_name);
	    localStorage.setItem("location",restoredSession.weather[index].location_name);
	    $(".temp").text(restoredSession.weather[index].temp).append("<sup>o</sup>C");
	    $("#humidity").text(restoredSession.weather[index].humidity).append('<span class="percentage"> %</span>');
	    $("#pressure").text(restoredSession.weather[index].pressure).append('<span class="units"> hpa</span>');
	    $("#wind").text(restoredSession.weather[index].wind).append('<span class="units"> m/s</span');
	    $("#desc").text(restoredSession.weather[index].description);
	    $(".icon1").attr("data-icon",array[restoredSession.weather[index].icon]);
	    console.log(restoredSession.weather[index].main);
	    console.log(restoredSession.weather[index].color);
	    $("#circle").css("background",color_codes[restoredSession.weather[index].color]);
	    $("#cir1").css("background",color_codes[restoredSession.weather[index].color]);
	    $("#cir2").css("background",color_codes[restoredSession.weather[index].color]);
	    $("#cir3").css("background",color_codes[restoredSession.weather[index].color]);
		console.log(restoredSession);
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
	    
}

function AnimateRotate(d){
    // var elem = $("#circle");
    // var elem = $("#circle2");

    $({deg: 0}).animate({deg: d}, {
        duration: 400,
        step: function(now){
            $("#circle").css({
                 transform: "rotate(" + now + "deg)"
            });
            $("#cir1").css({
                 transform: "rotate(" + now + "deg)"
            });
            $("#cir2").css({
                 transform: "rotate(" + now + "deg)"
            });
            $("#cir3").css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
    // $("#text").text("welcome");
}


