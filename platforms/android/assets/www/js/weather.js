// /* jshint loopfunc: true, quotmark:false */
// /* global jQuery:false, console */

(function($) {
    var weather_data;
    var location,temp_celcius = 25,temp,farenheit;
    var id;
    var isNotPresent = false;    
    var restoredSession;
    var flag1 = false;
    var id=1;
    var index = 0;
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth();
    var m = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var y = d.getFullYear();
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

    var color_codes ={ Haze : "rgba(128,128,128,0.6)", Clouds : "rgba(0,192,255,0.6)" , Clear : "rgba(255,176,0,0.6)" , Rain : "rgba(51,204,255,0.6)", Mist :"rgba(128,128,128,0.6)"};

    define_modal_events();

    if(restoredSession === null)
    {
        var restoredSession = 0;
    } else {
        var restoredSession = JSON.parse(localStorage.getItem('weather'));
        var disp = "<div class='list-group-item modal_but'>";
        var location =" No location";
        $("#loc_name").append(disp+location);
    }
    $('#location-modal').on('show.bs.modal', function () {      
    var restoredSession = JSON.parse(localStorage.getItem('weather'));
        if(restoredSession){
            $("#loc_name").empty();
            for(var i=1;i<restoredSession.weather.length;i++){
            var disp = "<div class='list-group-item modal_but' id="+i+">"+ restoredSession.weather[i].location_name + "<i class='fa fa-times close_icon'>";
                $("#loc_name").append(disp);
                console.log(restoredSession.weather[i].location_name);
            }

            $(".close_icon").click(function(ev){
                ev.stopPropagation();
                var divId = $(this).parent().attr("id");
                $('#location-modal').modal('hide');
                divId = parseInt(divId);
                var co = confirm("do you want to Delete?");
                if(co)
                {
                   modal_delete_data(divId);
                }
            });
            $(".modal_but").click(function(){
                // alert($(this).attr("id"));
                var divId = $(this).attr("id");
                $('#location-modal').modal('hide');
                console.log(restoredSession);
                divId = parseInt(divId);
                divId = divId + 1;
                console.log(divId);
                modal_location_data(divId);
                // AnimateRotate(360);
            });
        } 
    });

    function modal_delete_data(e)
    {
        var restSession = JSON.parse(localStorage.getItem('weather'));
        restSession.weather.splice(e,1);
        localStorage.setItem('weather', JSON.stringify(restSession));
        $('.iosSlider').iosSlider('removeSlide', parseInt(e)+1);
        console.log(restSession);
    }
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

    function modal_location_data(index)
    {  
        var restSession = JSON.parse(localStorage.getItem('weather'));
            var length = restSession.weather.length;
            // console.log(length);
            $('.iosSlider').iosSlider('goToSlide', index, 1000);
    }


    // $("#loc_name").on("click",function(){
    //     alert();
    // })

    // $(".cir2").on("click",function(){
    //     // alert(temp_celcius);
    //     toggle(this);
    // });

    function toggle(elm)
    {
        var temp_celcius = $(elm).data("temp");
        var flag = $(elm).data("flag");
        if(flag === "c")
        {
            farenheit = (temp_celcius * (9/5) + 32).toFixed(1);
            $(".temp", $(elm)).html(farenheit+"<sup>o</sup>F");
            $(elm).data("flag", "f");
        }
        else
        {
            $(elm).data("flag", "c");
            $(".temp", $(elm)).html(temp_celcius+"<sup>o</sup>C");
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
              alert("location not found");
                flag = true;
                // window.localStorage.setItem("flag",flag1);
            } else if(weather_data.cod === 200){
                store_weather();
                if(restoredSession === null){
                    count = 0;
                }
                else{
                var length = restoredSession.weather.length;
                count = length;
                }
            } else {
                alert("location not found");
            }
        });    
    }

    function checklocation_name()
    {
        restoredSession = JSON.parse(localStorage.getItem('weather'));
        console.log(restoredSession);
        var flag_re = false;
        for(var i=0;i<restoredSession.weather.length;i++)
        {
            var name = [];
            name = restoredSession.weather[i].location_name;
            console.log(name);
            if(name === weather_data.name){
                // isPresent = false;
                flag_re = true;
                console.log("Dont add this location");
                // alert("Location is present already");
                break;
            } 
        }

        if(!flag_re)
        {//data is not presents
          isNotPresent = true;
        } else  {
            isNotPresent = false;
        }
           
        console.log(isNotPresent);
    }

    // function create_page_dynamic()
    // {
    //     var restoredSession = JSON.parse(localStorage.getItem('weather'));
    //     console.log(restoredSession);
    //     var length = restoredSession.weather.length;
    //     var description = restoredSession.weather[length-1].description;
    //     var humidity = restoredSession.weather[length-1].humidity;
    //     var pressure = restoredSession.weather[length-1].pressure;
    //     var wind = restoredSession.weather[length-1].wind;
    //     var condition = restoredSession.weather[length-1].condition;
    //     var location = restoredSession.weather[length-1].location_name;
    //     var temp = restoredSession.weather[length-1].temp;
    //     var page = "<div class='item'><div class='circle1'><center><div class='pos' id='desc'>"+ description +" </div></center><div class='text-container'><div class='fa fa-tint left'></div><div class='fa fa-tachometer right'></div></div><div class='text-container'><div id='humidity' class='left'>"+humidity+"</div><div id='pressure' class='right'>"+pressure+"</div></div><div class='text-container'><div class='icon left1' data-icon='F'></div><div class='icon left1' id='wind'>"+wind+"</div></div><div class='fa fa-home home-icon'></div></div><center id='cen'><div id='circle'><div class='icon icon1' data-icon='H'></div><label class='condition'>"+condition+"</label></div><div id='cir1' data-toggle='modal' data-target='#location-modal'><i class='fa fa-map-marker geo'></i><div class='location'>"+location+"</div></div><div id='cir2'><span class='temp'>"+temp+"<sup class='degree'>o</sup>C</span></div> <div id='cir3'><span id='day' class='date-style'></span><span id='month' class='month'>September, 2014</span></div></center></div>";
    //     $("#container_page").append(page);
    //     $('.iosSlider').iosSlider({
    //                 snapToChildren: true,
    //                 desktopClickDrag: true
    //     });
    // }


    function store_weather()
    {
       var weather = {
            weather: [],
            state: false
        };
        var count = 0;
        restoredSession = JSON.parse(localStorage.getItem('weather'));

        // console.log(restoredSession);
        
        if(!$.isEmptyObject(restoredSession)) {
            id=1;
           for(var i = 0 ; i <restoredSession.weather.length;i++){
                var x=restoredSession.weather[i];
                x.id=id++;
                weather.weather.push(x);
            }
            count++;
            console.log(count);
            // Checks the name
            checklocation_name();
            // if isPresent is true then it ll add
            if(isNotPresent)
            {
            console.log(weather_data);
            weather.weather.push({"id":id,"color": weather_data.weather[0].main,"flag":flag1,"icon":weather_data.weather[0].id,"description":weather_description[weather_data.weather[0].id],"wind":weather_data.wind.speed,"pressure":weather_data.main.pressure,"humidity":weather_data.main.humidity,"temp":temp_celcius,"location_name":weather_data.name,"condition":weather_data.weather[0].description});
            localStorage.setItem('weather', JSON.stringify(weather));
            window.localStorage.setItem("location",weather_data.name);
            window.localStorage.setItem("id",id);
            // /////////////////////////////////////////////////////////////////////////////////////////////////
            // //////////////////////////////////////////////////////////////////////////////////////////////
            var description = weather_description[weather_data.weather[0].id];
            var loc_name = weather_data.name;
            var condition = weather_data.weather[0].description;
            var humidity = weather_data.main.humidity;
            var pressure = weather_data.main.pressure;
            temp = weather_data.main.temp - 273.15;
            temp_celcius = (temp).toFixed(1);
            var temp = temp_celcius;
            var wind = weather_data.wind.speed;
            var icon = weather_data.weather[0].id;
            var color = weather_data.weather[0].main;
            window.localStorage.setItem("location",loc_name);
            index = index + 1;
            var div_creation = "<div class = 'item page1' data-index='"+ id +"'><div class='circle1'><center><div class='pos' id='desc'> " + description + " </div></center><div class='text-container'><div class='fa fa-tint left'></div><div class='fa fa-tachometer right'></div></div><div class='text-container'><div class='humidity left'>" + humidity + "<span class='percentage'> %</span>" + "</div><div id='pressure' class='right'>" + pressure + "<span class='units'> hpa</span>" + "</div></div><div class='text-container'><div class='icon left1' data-icon='F'></div><div class='icon left1' id='wind'>" + wind + "<span class='units'> m/s</span>" + "</div></div><div class='fa fa-home home-icon'></div></div><center class='cen'><div class='circle' style = 'background: "+ color_codes[color] +"'><div class='icon icon1' data-icon='"+ array[icon] +"'></div>"+ " " + "<label class='condition'>" + condition + "</label></div><div class='cir1' data-toggle='modal' data-target='#location-modal' style = 'background: "+ color_codes[color] +"'><i class='fa fa-map-marker geo'></i><div class='location'>" + loc_name + "</div></div><div class='cir2' style = 'background: "+ color_codes[color] +"' data-temp = " + temp + " data-flag = 'c' ><span class='temp'>" + temp + "<sup>o</sup>C</span></div><div class='cir3' style = 'background: "+ color_codes[color] +"'><span id='day' class='date-style'>" + choose_day() + "</span><span id='month' class='month'>" + m[month] + "," + y + "</span></div></center></div></div>";
            function choose_day()
             {  
                 switch(day)
                 {
                     case 1 :
                        return day + "<sup>st</sup>";
                        break;
                     case 21 :
                         return day + "<sup>st</sup>";
                         break;
                     case 32 :
                         return day + "<sup>st</sup>";
                         break;
                     case 2 :
                         return day + "<sup>nd</sup>";
                         break;
                     case 22 :
                         return day + "<sup>nd</sup>";
                         break;
                     case 3:
                         return day + "<sup>rd</sup>";
                         break;
                     default :
                         return day + "<sup>th</sup>";
                         break;
                 }
             }
            $(".slider").append(div_creation);
            $(function() {
                all_function.a();
            });
            ready_events_load();
            $('.iosSlider').iosSlider('update');
            var restSession = JSON.parse(localStorage.getItem('weather'));
            var length = restSession.weather.length;
            console.log(length);
            $('.iosSlider').iosSlider('goToSlide', length, 1000);

            restoredSession = JSON.parse(localStorage.getItem('weather'));
            define_modal_events();
            // count++;
            }
        }else {
            console.log("push the new data");
            console.log(weather_data);
            id=1;
            weather.weather.push({"id":id,"color":weather_data.weather[0].main,"flag":flag1,"icon":weather_data.weather[0].id,"description":weather_description[weather_data.weather[0].id],"wind":weather_data.wind.speed,"pressure":weather_data.main.pressure,"humidity":weather_data.main.humidity,"temp":temp_celcius,"location_name":weather_data.name,"condition":weather_data.weather[0].description});
            localStorage.setItem('weather', JSON.stringify(weather));
            window.localStorage.setItem("location",weather_data.name);
            // create_div();
            var description = weather_description[weather_data.weather[0].id];
            var loc_name = weather_data.name;
            var condition = weather_data.weather[0].description;
            var humidity = weather_data.main.humidity;
            var pressure = weather_data.main.pressure;
            temp = weather_data.main.temp - 273.15;
            temp_celcius = (temp).toFixed(1);
            var temp = temp_celcius;
            var wind = weather_data.wind.speed;
            var icon = weather_data.weather[0].id;
            var color = weather_data.weather[0].main;
            window.localStorage.setItem("location",loc_name);
            window.localStorage.setItem("id",id);
            var div_creation = "<div class = 'item page1' data-index='"+ id +"'><div class='circle1'><center><div class='pos' id='desc'> " + description + " </div></center><div class='text-container'><div class='fa fa-tint left'></div><div class='fa fa-tachometer right'></div></div><div class='text-container'><div class='humidity left'>" + humidity + "<span class='percentage'> %</span>" + "</div><div id='pressure' class='right'>" + pressure + "<span class='units'> hpa</span>" + "</div></div><div class='text-container'><div class='icon left1' data-icon='F'></div><div class='icon left1' id='wind'>" + wind + "<span class='units'> m/s</span>" + "</div></div><div class='fa fa-home home-icon'></div></div><center class='cen'><div class='circle' style = 'background: "+ color_codes[restoredSession.weather[i].color] +"'><div class='icon icon1' data-icon='"+ array[restoredSession.weather[i].icon] +"'></div>"+ " " + "<label class='condition'>" + condition + "</label></div><div class='cir1' data-toggle='modal' data-target='#location-modal' style = 'background: "+ color_codes[restoredSession.weather[i].color] +"'><i class='fa fa-map-marker geo'></i><div class='location'>" + loc_name + "</div></div><div class='cir2' style = 'background: "+ color_codes[restoredSession.weather[i].color] +"' data-temp = " + temp + " data-flag = 'c' ><span class='temp'>" + temp + "<sup>o</sup>C</span></div><div class='cir3' style = 'background: "+ color_codes[restoredSession.weather[i].color] +"'><span id='day' class='date-style'>" + check_day() +"</span><span id='month' class='month'>" + m[month] + "," + y + "</span></div></center></div></div>";
            $(function() {
                all_function.a();
            });
            // ready_events_load();
            $(".slider").append(div_creation);
            $('.iosSlider').iosSlider('update');
            var restSession = JSON.parse(localStorage.getItem('weather'));
            var length = restSession.weather.length;
            console.log(length);
            $('iosSlider').iosSlider('goToSlide', length, 1000);
            define_modal_events();

        }
        

        var restSession = JSON.parse(localStorage.getItem('weather'));

        console.log(restSession);
    }
    function define_modal_events() {
        $(".cir1").on("click",function(){
            document.getElementById('input_location').value="";
            // document.input_location.focus();
            $("#but_submit").on("click",function(){
                $("#input_location").blur();
                location = document.getElementById('input_location').value;
                weather_get();
                $("#location-modal").modal("hide");
                $("#but_submit").off("click");
                
            });
            $("#but_clear_cache").on("click",function(){
                localStorage.clear();
                window.location.reload();
                $("#location-modal").modal("hide");
                $("#but_submit").off("click");
            });
        });
        $(".cir2").on("click",function(){
            // alert(temp_celcius);
            toggle(this);
        });
        $(".cir3").off("click");
        $(".cir3").on("click", function(evr) {

        var x = $(this).parent().parent().data("index");
        console.log(x);

        var restSession = JSON.parse(localStorage.getItem('weather'));
        var ses_data = restSession.weather[x-1];
        console.log(ses_data);
        localStorage.setItem("location",ses_data.location_name);
        window.location.href = "../www/Mobile_weather.html";
        });

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

} (jQuery));

