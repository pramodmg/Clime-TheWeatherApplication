$(document).ready(function(){
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth();
    var flag = false;
    var m = ["january","february","march","april","may","june","july","august","september","october","november","december"];

    var array = { 200 : "P" , 201 : "Q", 202 : "R", 210 : "O", 211 : "P", 212 : "Q", 221 : "P" , 230 : "Q" , 231 : "Q" , 232 : "R" ,
                  300 : "Q" , 301 : "Q", 302 : "R", 310 : "Q" ,311 : "R", 312 : "R", 313 : "R" , 314 : "X" , 321 : "T" ,
                  500 : "Q" , 501 : "R", 502 : "6", 503 : "7" ,504 : "8", 511 : "\"", 520 : "7" , 521 : "$" , 522 : "8" ,531 : "9",
                  701 : "M" , 711 : "M", 721 : "F", 731 : "M" ,741 : "F", 751 : "M" ,761 : "M" , 762 :"F" , 771 : "M" , 781 : "F",
                  800 : "B" , 801 : "H", 802 : "Y", 803 : "L" ,804 : "Y",
                  900 : "F" , 901 : "F", 902 : "F", 903 : "U" ,904 : "B", 905 : "L" , 906: "W",
                  950 : "G" , 951 : "L", 952 : "J", 953 : "J" ,954 : "E", 955 : "F", 956 : "F" , 957 : "S", 958: "U" , 959 : "F",
                  960 : "9" , 961 : "9", 962 : "!"};

var weather_description = { 200 : "Enjoy the Drizzingling Rain with music" , 201 : "Carry an umbrella for Saftey", 202 : "Umbrella will hav holes on it due to heavy rain", 210 : "Thunder + storm is very bad", 211 : "Photography mode", 212 : "Find a place to cover yourself", 221 : "Bad Weather" , 230 : "No going Out Today" , 231 : "Try to find a good shelter" , 232 : "Find a safe place nearby" ,
                  300 : "Q" , 301 : "Q", 302 : "Enjoy taking Outdoor Shower", 310 : "Enjoy taking Outdoor Shower" ,311 : "Enjoy taking Outdoor Shower", 312 : "Enjoy taking Outdoor Shower", 313 : "Enjoy taking Outdoor Shower" , 314 : "Enjoy taking Outdoor Shower" , 321 : "Enjoy taking Outdoor Shower" ,
                  500 : "U will get slightly Wet Today" , 501 : "U may need an Umbrella", 502 : "U definitely need an umbrella", 503 : "dont forget Umbrella" ,504 : "Carry an umbrella with you", 511 : "Thick frabric + umbrella is very necessary", 520 : "Enjoy Drizzingling Rain" , 521 : "U will Enjoy the shower" , 522 : "Hot Snaks + Rain is awesome now" ,531 : "Intensity of the shower is high",
                  600 : "Enjoy the Snow" , 601 : "Its Snowing", 602 : "U can try making snowman today", 611 : "Sleet Environment" ,612 : "U will be getting ICE today", 615 : "Ice and snow is a great combination" , 616 : "great Environment" , 620 : "Enjoy the shower Outdoor" , 621 : "Try taking snowy shower" ,622 : "It would be better if u stay at home",
                  701 : "U might get lost today" , 711 : "Changes of getting lost is high", 721 : "Dont forget the path to home", 731 : "Wearing sunglass would be a better Idea" ,741 : "U might get Lost", 751 : "Sunglass is cumpulsory" ,761 : "Do wear Sunglass" , 762 :"Don't get Burnt up" , 771 : "Its a complicated weather" , 781 : "Weather is violent today",
                  800 : "Its a bright and sunny day" , 801 : "Darkness is very little", 802 : "Changes of raining", 803 : "It will rain today" ,804 : "Clouds are in romance",
                  900 : "Weather is Upset" , 901 : "weather is taking revange", 902 : "Fight mode activated", 903 : "Thick frabric is cumpulsory" ,904 : "Weather is Hot", 905 : "Fly with the wind" , 906: "Protect your head with a cap",
                  950 : "Weather is plesent" , 951 : "Feel relaxed", 952 : "Enjoy the wind", 953 : "You will enjoy the Wind flow" ,954 : "Windy Weather", 955 : "Try to store this fresh breeze", 956 : "Dont fly away" , 957 : "Dont fly away", 958: "Protect your head" , 959 : "Wear a helmet",
                  960 : "Storm comming up" , 961 : "Revenge mode activated", 962 : "Round Round Round"};


    var y = d.getFullYear();
    var flag = window.localStorage.getItem("flag");
    if(flag === "false")
	{
		var loc = window.localStorage.getItem("location");
		var condition = window.localStorage.getItem("condition");
		var location = window.localStorage.getItem("location");
		var temp = window.localStorage.getItem("temp");
		var humidity = window.localStorage.getItem("humidity");
		var pressure = window.localStorage.getItem("pressure");
		var wind = window.localStorage.getItem("wind");
		var desc = window.localStorage.getItem("description");
		var icon = window.localStorage.getItem("icon");
		$(".location").text(location);
		$(".condition").text(condition);
		$(".temp").text(temp).append("<sup>o</sup>C");
		$("#humidity").text(humidity).append('<span class="percentage"> %</span>');
		$("#pressure").text(pressure).append('<span class="units"> hpa</span>');
		$("#wind").text(wind).append('<span class="units"> m/s</span');
		$("#desc").text(desc);
		$(".loc").text(array[loc]);
		$(".icon1").attr("data-icon",array[icon]);
	}
    switch(day)
    {
    	case 1 :
    		document.getElementById("day").innerHTML = day + "<sup>st</sup>";
    		break;
    	case 21 :
    		document.getElementById("day").innerHTML = day + "<sup>st</sup>";
    		break;
    	case 32 :
    		document.getElementById("day").innerHTML = day + "<sup>st</sup>";
    		break;
    	case 2 :
    		document.getElementById("day").innerHTML = day + "<sup>nd</sup>";
    		break;
    	case 22 :
    		document.getElementById("day").innerHTML = day + "<sup>nd</sup>";
    		break;
    	case 3:
    		document.getElementById("day").innerHTML = day + "<sup>rd</sup>";
    		break;
    	default :
    		document.getElementById("day").innerHTML = day + "<sup>th</sup>";
    		break;
    }
    
    document.getElementById("month").innerHTML = m[month] + ", " + y;

    // Wait for device API libraries to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
    }

    // onSuccess Geolocation
    //
    function onSuccess(position) {
        var locationPromise = $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather",
            data: {lat : position.coords.latitude,lon : position.coords.longitude},
        });

        
        locationPromise.done(function(data) {
            console.log(data);
            if(data.cod === 200)
            {
	            $(".location").text(data.name);
	            $(".location").text(data.weather[0].description);
	            temp = data.main.temp - 273.15;
	            temp_celcius = (temp).toFixed(1);
	            $(".temp").text(temp_celcius).append("<sup>o</sup>C");
	            $("#humidity").text(data.main.humidity).append('<span class="percentage"> %</span>');
	            $("#pressure").text(data.main.pressure).append('<span class="units"> hpa</span>');
	            $("#wind").text(data.wind.speed).append('<span class="units"> m/s</span');
	            $("#desc").text(data.weather[0].description);
	            $(".icon1").attr("data-icon",array[data.weather[0].id]);
	            flag=true;
	            window.localStorage.setItem("flag",flag);
	        } else {
	        	alert("No location found");
	        }
        });    
    }


    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }
// function antiGrav(ele, interval) { 
//     var distance = 4;
// 	$(ele).animate({
// 		'position' : 'relative',
//         'right' : "+=" + distance + "px",
//         'left' : "+=" + distance + "px"
// 	},interval,"linear",function(){
// 		$(ele).animate({				
            
//             'right' : "-=" + distance + "px",
//             'left' : "-=" + distance + "px"
// 		},interval,"linear",function(){
// 			antiGrav(ele, interval);
//         });
// 	});
// }

// 	// $('#circle').click(function(){
// 	    antiGrav('#circle', 1000); 
// 	    antiGrav('#cir1', 1200); 
// 	    antiGrav('#cir2', 1300); 
// 	    antiGrav('#cir3', 1500); 
// 	// });
});