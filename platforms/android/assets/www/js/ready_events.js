$(document).ready(function(){
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth();
    var flag = false;
    var index = 0;
    var temp_celcius;
    var m = ["January","February","March","April","May","June","July","August","September","October","November","December"];
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

var color_codes ={ Haze : "rgba(128,128,128,0.6)", Mist : "rgba(128,128,128,0.6)" , Clouds : "rgba(0,192,255,0.6)" , Clear : "rgba(255,176,0,0.6)" , Rain : "rgba(51,204,255,0.6)" , Drizzle : "rgba(51,204,255,0.6)"};
    var y = d.getFullYear();

    switch(day)
    {
    	case 1 :
            $(".date-style").html(day + "<sup>st</sup>");
    		break;
    	case 21 :
            $(".date-style").html(day + "<sup>st</sup>"); 
            break;
    	case 32 :
            $(".date-style").html(day + "<sup>st</sup>");
    		break;
    	case 2 :
            $(".date-style").html(day + "<sup>nd</sup>");
    		break;
    	case 22 :
            $(".date-style").html(day + "<sup>nd</sup>");
    		break;
    	case 3:
            $(".date-style").html(day + "<sup>rd</sup>");
    		break;
    	default :
            $(".date-style").html(day + "<sup>th</sup>");
            break;
    }
    
    document.getElementById("month").innerHTML = m[month] + ", " + y;

    // Wait for device API libraries to load
    //

    $('.iosSlider').iosSlider({
        snapToChildren: true,
        desktopClickDrag: true
    });

    $(".left1").hide();
    $(".fa-tint").hide();
    $("#wind").hide();
    $(".fa-tachometer").hide();
    $(".home-icon").hide();
    $("#humidity").hide();
    $("#pressure").hide();
    $("#desc").hide();
});

  // var weather = {
  //       weather: [],
  //       state: false
  //   };


document.addEventListener("deviceready", onDeviceReady, false);

    // device APIs are available
    //
    function onDeviceReady() {
        navigator.geolocation.getCurrentPosition(onSuccess, onError);
        document.addEventListener("backbutton", function(){if(confirm("want to exit ?")){navigator.app.exitApp();} }, false);
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
        var id=1;
        var restoredSession = JSON.parse(localStorage.getItem('weather'));
        if($.isEmptyObject(restoredSession)) {
            var weather = {
                weather: [],
                state: false
            };
       
            weather_data = data;
            if(data.cod === 200)
            {
                flag=true;
                window.localStorage.setItem("flag",flag);
                $(".circle").css("background",color_codes[weather_data.weather[0].main]);
                $(".cir1").css("background",color_codes[weather_data.weather[0].main]);
                $(".cir2").css("background",color_codes[weather_data.weather[0].main]);
                $(".cir3").css("background",color_codes[weather_data.weather[0].main]);
                $(".condition").text(weather_data.weather[0].description);
                $(".location").text(weather_data.name);
                temp = weather_data.main.temp - 273.15;
                temp_celcius = (temp).toFixed(1);
                window.localStorage.setItem("temp",temp_celcius);
                window.localStorage.setItem("location",weather_data.name);
                $(".temp").text(temp_celcius).append("<sup>o</sup>C");
                $(".temp").parent().data("temp",temp_celcius);
                $(".temp").parent().data("flag","C");
                $("#humidity").text(weather_data.main.humidity).append('<span class="percentage"> %</span>');
                $("#pressure").text(weather_data.main.pressure).append('<span class="units"> hpa</span>');
                $("#wind").text(weather_data.wind.speed).append('<span class="units"> m/s</span');
                $("#desc").text(weather_description[weather_data.weather[0].id]);
                $(".icon1").attr("data-icon",array[weather_data.weather[0].id]);
                var id = 0;
                var flag1 =  false;
                $(function() {
                    all_function.a();
                });
                weather.weather.push({"id":id,"color": weather_data.weather[0].main,"flag":flag1,"icon":weather_data.weather[0].id,"description":weather_description[weather_data.weather[0].id],"wind":weather_data.wind.speed,"pressure":weather_data.main.pressure,"humidity":weather_data.main.humidity,"temp":temp_celcius,"location_name":weather_data.name,"condition":weather_data.weather[0].description});
                localStorage.setItem('weather', JSON.stringify(weather));
                var restSession = JSON.parse(localStorage.getItem('weather'));
                console.log(restSession);
            } else {
                alert("No location found");
            }
        } else {

        }
    });    
    }

  

    
    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }