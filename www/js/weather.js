/* jshint loopfunc: true, quotmark:false */
/* global jQuery:false, console */
(function($) {
    var weather_data;
    var location,temp_celcius = 25,temp,farenheit;
    var flag = true;
    var flag1 = false;
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

    var color_codes ={ Haze : "rgba(128,128,128,0.6)", Clouds : "rgba(0,192,255,0.6)" , Clear : "rgba(255,176,0,0.6)" , Rain : "rgba(51,204,255,0.6)"};

    $("#cir1").on("click",function(){
        document.getElementById('input_location').value="";
        // document.input_location.focus();
        $("#but_submit").on("click",function(){
            location = document.getElementById('input_location').value;
            weather_get();
            $("#location-modal").modal("hide");
            $("#but_submit").off("click");
        })
    });
    

    $("#cir2").on("click",function(){
        // alert(temp_celcius);
        toggle();
    });

    function toggle()
    {
        if(flag)
        {
            farenheit = (temp_celcius * (9/5) + 32).toFixed(1);
            $(".temp").html(farenheit+"<sup>o</sup>F");
            flag = false;
        }
        else
        {
            flag = true;
            $(".temp").html(temp_celcius+"<sup>o</sup>C");
        }
    }
    function weather_get()
    {

        var locationPromise = $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather",
            data: {q: location},
        });

        
        locationPromise.done(function(data) {
            weather_data = data;
            if(weather_data.cod === 200 && weather_data.name === ""){
                console.log(weather_data.weather[0].main);
                console.log(weather_data.name);
                store_weather();
                $("#circle").css("background",color_codes[weather_data.weather[0].main]);
                $("#cir1").css("background",color_codes[weather_data.weather[0].main]);
                $("#cir2").css("background",color_codes[weather_data.weather[0].main]);
                $("#cir3").css("background",color_codes[weather_data.weather[0].main]);
                window.localStorage.setItem("location",weather_data.name);
                $(".condition").text(weather_data.weather[0].description);
                window.localStorage.setItem("condition",weather_data.weather[0].description);
                $(".location").text(weather_data.name).append('<span>N/A</span>');
                var weather_data_name = "N/A";
                window.localStorage.setItem("location",weather_data_name);
                temp = weather_data.main.temp - 273.15;
                temp_celcius = (temp).toFixed(1);
                $(".temp").text(temp_celcius).append("<sup>o</sup>C");
                window.localStorage.setItem("temp",temp_celcius);
                $("#humidity").text(weather_data.main.humidity).append('<span class="percentage"> %</span>');
                window.localStorage.setItem("humidity",weather_data.main.humidity);
                $("#pressure").text(weather_data.main.pressure).append('<span class="units"> hpa</span>');
                window.localStorage.setItem("pressure",weather_data.main.pressure);
                $("#wind").text(weather_data.wind.speed).append('<span class="units"> m/s</span');
                window.localStorage.setItem("wind",weather_data.wind.speed);
                $("#desc").text(weather_description[weather_data.weather[0].id]);
                window.localStorage.setItem("description",weather_description[weather_data.weather[0].id]);
                $(".icon1").attr("data-icon",array[weather_data.weather[0].id]);
                window.localStorage.setItem("icon",weather_data.weather[0].id);
                flag = true;
                window.localStorage.setItem("flag",flag1);
            } else if(weather_data.cod === 200){
                store_weather();
                $("#circle").css("background",color_codes[weather_data.weather[0].main]);
                $("#cir1").css("background",color_codes[weather_data.weather[0].main]);
                $("#cir2").css("background",color_codes[weather_data.weather[0].main]);
                $("#cir3").css("background",color_codes[weather_data.weather[0].main]);
                $(".condition").text(weather_data.weather[0].description);
                $(".location").text(weather_data.name);
                temp = weather_data.main.temp - 273.15;
                temp_celcius = (temp).toFixed(1);
                $(".temp").text(temp_celcius).append("<sup>o</sup>C");
                $("#humidity").text(weather_data.main.humidity).append('<span class="percentage"> %</span>');
                $("#pressure").text(weather_data.main.pressure).append('<span class="units"> hpa</span>');
                $("#wind").text(weather_data.wind.speed).append('<span class="units"> m/s</span');
                $("#desc").text(weather_description[weather_data.weather[0].id]);
                $(".icon1").attr("data-icon",array[weather_data.weather[0].id]);
                flag = true;
            } else {
                alert("location not found");
            }
        });    
    }
    function store_weather()
    {
        var weather = {
            weather: [],
            state: false
        };
        var count = 0;
        var restoredSession = JSON.parse(localStorage.getItem('weather'));

        // console.log(restoredSession);
        
        if(!$.isEmptyObject(restoredSession)) {
            var id=0;
           for(var i = 0 ; i <restoredSession.weather.length;i++){
                var x=restoredSession.weather[i];
                x.id=id++;
                weather.weather.push(x);
            }
            count++;
            console.log(count);

            weather.weather.push({"id":id,"flag":flag1,"icon":weather_data.weather[0].id,"description":weather_description[weather_data.weather[0].id],"wind":weather_data.wind.speed,"pressure":weather_data.main.pressure,"humidity":weather_data.main.humidity,"temp":temp_celcius,"location_name":weather_data.name,"condition":weather_data.weather[0].description});
            localStorage.setItem('weather', JSON.stringify(weather));
            window.localStorage.setItem("location",weather_data.name);
        }else {
            console.log("push the new data");
            var id=0;

            weather.weather.push({"id":id,"flag":flag1,"icon":weather_data.weather[0].id,"description":weather_description[weather_data.weather[0].id],"wind":weather_data.wind.speed,"pressure":weather_data.main.pressure,"humidity":weather_data.main.humidity,"temp":temp_celcius,"location_name":weather_data.name,"condition":weather_data.weather[0].description});
            localStorage.setItem('weather', JSON.stringify(weather));
            window.localStorage.setItem("location",weather_data.name);
        }

        var restSession = JSON.parse(localStorage.getItem('weather'));
        
        console.log(restSession);
    }

} (jQuery));

