/* jshint loopfunc: true, quotmark:false,devel:true */
/* global jQuery, console,all_function,menu,disp,location_input */

var weather_functions = (function(weather_functions,$) {
    // "use strict";
    var weather_data;
    var temp_celcius = 25,temp,farenheit;
    var id = 1;
    var isNotPresent = false;    
    var restoredSession;
    var flag1 = false;
    var index = 0;
    var description,loc_name,condition,humidity,pressure,wind,icon,color,div_creation;
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

    weather_functions.modal_delete_data = function (e)
    {
        var restSession = JSON.parse(localStorage.getItem("weather"));
        e = parseInt(e);
        console.log(e);
        restSession.weather.splice(e,1);
        localStorage.setItem("weather", JSON.stringify(restSession));
        $(".iosSlider").iosSlider("removeSlide", e+1);
        console.log(restSession);
    };

    weather_functions.AnimateRotate = function (d){
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
    };

    weather_functions.modal_location_data = function(index)
    {  
            $(".iosSlider").iosSlider("goToSlide", index, 1000);
    };

    weather_functions.toggle = function(elm)
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
    };

    weather_functions.weather_get = function(ab , callback)
    {
        var location = ab,count;
        var locationPromise = $.ajax({
            url: "http://api.openweathermap.org/data/2.5/weather",
            data: {q: location},
        });

        
        locationPromise.done(function(data) {
            weather_data = data;
            if(weather_data.cod === 200 && weather_data.name === ""){
              alert("location not found");
              weather_functions.addbutton();
                // window.localStorage.setItem("flag",flag1);
            } else if(weather_data.cod === 200){
                weather_functions.store_weather(function(msg){
                    callback(msg);
                });
                if(restoredSession === null){
                    count = 0;
                }
                else{
                var length = restoredSession.weather.length;
                count = length;
                }   
            }
            else{
                alert("location not found");
                weather_functions.addbutton();
            }

        });    

    };

    weather_functions.checklocation_name = function()
    {
        restoredSession = JSON.parse(localStorage.getItem("weather"));
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
                weather_functions.addbutton();
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
    };

    weather_functions.store_weather = function(re)
    {
       var weather = {
            weather: [],
            state: false
        };
        var count = 0;
        restoredSession = JSON.parse(localStorage.getItem("weather"));
        
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
            weather_functions.checklocation_name();
            // if isPresent is true then it ll add
            if(isNotPresent)
            {
            console.log(weather_data);
            weather.weather.push({"id":id,"color": weather_data.weather[0].main,"flag":flag1,"icon":weather_data.weather[0].id,"description":weather_description[weather_data.weather[0].id],"wind":weather_data.wind.speed,"pressure":weather_data.main.pressure,"humidity":weather_data.main.humidity,"temp":temp_celcius,"location_name":weather_data.name,"condition":weather_data.weather[0].description});
            localStorage.setItem("weather", JSON.stringify(weather));
            window.localStorage.setItem("location",weather_data.name);
            window.localStorage.setItem("id",id);
            // /////////////////////////////////////////////////////////////////////////////////////////////////
            // //////////////////////////////////////////////////////////////////////////////////////////////
            description = weather_description[weather_data.weather[0].id];
            loc_name = weather_data.name;
            condition = weather_data.weather[0].description;
            humidity = weather_data.main.humidity;
            pressure = weather_data.main.pressure;
            temp = weather_data.main.temp - 273.15;
            temp_celcius = (temp).toFixed(1);
            temp = temp_celcius;
            wind = weather_data.wind.speed;
            icon = weather_data.weather[0].id;
            color = weather_data.weather[0].main;
            window.localStorage.setItem("location",loc_name);
            index = index + 1;
            div_creation = "<div class = 'item page"+ id + "' data-index='"+ id +"'><div class='circle1'><center><div class='pos' id='desc'> " + description + " </div></center><div class='text-container'><div class='fa fa-tint left'></div><div class='fa fa-tachometer right'></div></div><div class='text-container'><div class='humidity left'>" + humidity + "<span class='percentage'> %</span>" + "</div><div id='pressure' class='right'>" + pressure + "<span class='units'> hpa</span>" + "</div></div><div class='text-container'><div class='icon left1' data-icon='F'></div><div class='icon left1' id='wind'>" + wind + "<span class='units'> m/s</span>" + "</div></div><div class='fa fa-home home-icon'></div></div><center class='cen'><div class='circle' style = 'background: "+ color_codes[color] +"'><div class='icon icon1' data-icon='"+ array[icon] +"'></div>"+ " " + "<label class='condition'>" + condition + "</label></div><div class='cir1' data-toggle='modal' data-target='#location-modal' style = 'background: "+ color_codes[color] +"'><i class='fa fa-map-marker geo'></i><div class='location'>" + loc_name + "</div></div><div class='cir2' style = 'background: "+ color_codes[color] +"' data-temp = " + temp + " data-flag = 'c' ><span class='temp'>" + temp + "<sup>o</sup>C</span></div><div class='cir3' style = 'background: "+ color_codes[color] +"'><span id='day' class='date-style'>" + weather_functions.choose_day() + "</span><span id='month' class='month'>" + m[month] + "," + y + "</span></div></center></div></div>";
            $(".slider").append(div_creation);
            $(function() {
                all_function.a();
            });
            // load_functions.close_icon();
            weather_functions.ready_events_load();
            $('.iosSlider').iosSlider('update');
            // $("#loc_name").html(disp);
            // menu.addItem({itemText: disp});
            // menu.render();
            var restSession = JSON.parse(localStorage.getItem('weather'));
            var length = restSession.weather.length;
            console.log(length);
            // localStorage.setItem('weather', JSON.stringify(restSession));
            $('.iosSlider').iosSlider('goToSlide', length, 1000);

            restoredSession = JSON.parse(localStorage.getItem('weather'));

            weather_functions.define_modal_events();
            weather_functions.load_from_localstorage();
            // count++;
            re(1);
            }
        }else {
            console.log("push the new data");
            console.log(weather_data);
            id=1;
            weather.weather.push({"id":id,"color":weather_data.weather[0].main,"flag":flag1,"icon":weather_data.weather[0].id,"description":weather_description[weather_data.weather[0].id],"wind":weather_data.wind.speed,"pressure":weather_data.main.pressure,"humidity":weather_data.main.humidity,"temp":temp_celcius,"location_name":weather_data.name,"condition":weather_data.weather[0].description});
            localStorage.setItem('weather', JSON.stringify(weather));
            window.localStorage.setItem("location",weather_data.name);
            // create_div();
            description = weather_description[weather_data.weather[0].id];
            loc_name = weather_data.name;
            condition = weather_data.weather[0].description;
            humidity = weather_data.main.humidity;
            pressure = weather_data.main.pressure;
            temp = weather_data.main.temp - 273.15;
            temp_celcius = (temp).toFixed(1);
            temp = temp_celcius;
            wind = weather_data.wind.speed;
            icon = weather_data.weather[0].id;
            color = weather_data.weather[0].main;
            window.localStorage.setItem("location",loc_name);
            window.localStorage.setItem("id",id);
            div_creation = "<div class = 'item page"+ id + "' data-index='"+ id +"'><div class='circle1'><center><div class='pos' id='desc'> " + description + " </div></center><div class='text-container'><div class='fa fa-tint left'></div><div class='fa fa-tachometer right'></div></div><div class='text-container'><div class='humidity left'>" + humidity + "<span class='percentage'> %</span>" + "</div><div id='pressure' class='right'>" + pressure + "<span class='units'> hpa</span>" + "</div></div><div class='text-container'><div class='icon left1' data-icon='F'></div><div class='icon left1' id='wind'>" + wind + "<span class='units'> m/s</span>" + "</div></div><div class='fa fa-home home-icon'></div></div><center class='cen'><div class='circle' style = 'background: "+ color_codes[color] +"'><div class='icon icon1' data-icon='"+ array[icon] +"'></div>"+ " " + "<label class='condition'>" + condition + "</label></div><div class='cir1' data-toggle='modal' data-target='#location-modal' style = 'background: "+ color_codes[color] +"'><i class='fa fa-map-marker geo'></i><div class='location'>" + loc_name + "</div></div><div class='cir2' style = 'background: "+ color_codes[color] +"' data-temp = " + temp + " data-flag = 'c' ><span class='temp'>" + temp + "<sup>o</sup>C</span></div><div class='cir3' style = 'background: "+ color_codes[color] +"'><span id='day' class='date-style'>" + weather_functions.choose_day() +"</span><span id='month' class='month'>" + m[month] + "," + y + "</span></div></center></div></div>";
            $(function() {
                all_function.a();
            });
            // ready_events_load();
            $(".slider").append(div_creation);
            $('.iosSlider').iosSlider('update');
            // $("#loc_name").html(disp);
            // menu.addItem({itemText: disp});
            // menu.render();
            var restSession = JSON.parse(localStorage.getItem('weather'));
            var length = restSession.weather.length;
            console.log(length);
            // localStorage.setItem('weather', JSON.stringify(restSession));
            $('iosSlider').iosSlider('goToSlide', length, 1000);
            weather_functions.define_modal_events();
            weather_functions.load_from_localstorage();
            
            re(2);
        }        
    };

    weather_functions.blackout_screen = function(){
        var index_value = $(".container_page").css("z-index");
        if(index_value == "0")
        {
            setTimeout(function(){
                $(".top_page").css({
                    background : "rgba(9,1,1,2.3)",
                    opacity : 0.6,
                    // "transition-duration": "1s"
                });

                $(".container_page").css({
                    "z-index": "-1"
                });
            }, 330);
        }
        else {
            setTimeout(function(){
                $(".top_page").css({
                    background : "rgba(9,1,1,2.3)",
                    opacity : 0.6,
                    // "transition-duration": "1s"
                });

                $(".container_page").css({
                    "z-index": "-1"
                });
            }, 330);
        }
    };
    weather_functions.define_modal_events = function () { 

    
    $(".cir1").click(function(elt) {
        elt.stopImmediatePropagation();
        var hi = $(window).height();
        $(".sidemenu").css({
            "height": hi
        });
        menu.toggle();
        // weather_functions.blackout_screen();
        return false;
    });
    
    menu.render();

    $("#smenu").off("click");
    $("#smenu").on("click",function(elt){
        elt.stopImmediatePropagation();
        // alert(1);
        menu.toggle();
        // $("body").addClass("remove_side_menu");
    });

    $(".close_icon").each(function() {
        $(this).on("click",function(elt){
            elt.stopImmediatePropagation();
            menu.toggle();
            var divId = $(this).parent().parent().index();
            console.log(divId);
            // $('#location-modal').modal('hide');
            divId = parseInt(divId);
            console.log("the div is :" + divId);
            var co = confirm("do you want to Delete?");
            if(co)
            {
               weather_functions.modal_delete_data(divId);
               $(this).closest('li').remove();
               // menu.removeItem({index: divId});
               var length = $('.sidemenu').children().length;
               if(length === 0)
               {
                    $('ul li:empty').remove();
                    localStorage.clear();
                    window.location.reload();
               }else {
                   $('ul li:empty').remove();
               }

               // window.location.reload();
            }
            else{
                
               console.log($('.sidemenu').size());
            }
        });
    });

    // $(".modal_but").off("click");
    // $(".modal_but").on("click",function(et){
    //     et.stopPropagation();
    //     var divId = $(this).parent().index();
    //     menu.toggle();
    //     divId = parseInt(divId);
    //     divId = divId + 1;
    //     console.log(divId);
    //     weather_functions.modal_location_data(divId);
    // });


    $(".modal_but").off("click");
    $(".modal_but").on("click",function(ewt){
        ewt.stopPropagation();
        console.log("click here");
        var links = $('.sidemenu').children();
        menu.toggle();
        for (var i = 0; i < links.length; i++) {
            var link = links[i];
            var divId = $(this).parent().index();
            divId = parseInt(divId);
            divId = divId + 1;
            console.log(divId);
            // <li> onclick, runAlert function
            link.onclick = weather_functions.load_data(divId);
        }
        // weather_functions.define_modal_events();
    });
    
    $(".clear_session").on("click",function(){
        // e.stopPropagation();
        var confirm_clear_session = confirm("do you want to Delete?");
        if(confirm_clear_session)
        {
            localStorage.clear();
            window.location.reload();
        }
    });

    $(".cir2").on("click",function(elt){
        // alert(temp_celcius);
        elt.stopImmediatePropagation();
        weather_functions.toggle(this);
    });
    
    $("#plus").on("click",function(evt){
        $("#plus").off("click");
        console.log("after dynamic create of the page");
        evt.stopPropagation();
        $(".heading").append(location_input);
        $(".heading").on("click",function(evnt){
            evnt.stopPropagation();
        });
        $("#but_submit").on("click",function(evnt){
            $("#but_submit").off("click");
            evnt.stopPropagation();
            var a = document.getElementById('input_location').value;
            menu.toggle();
            if(a === "")
            {
                alert("empty");
            }
            else{
                weather_functions.weather_get(a, function(){
                    weather_functions.generateclickevent();
                });
                // weather_functions.generateclickevent();
            }
        });
        return false;   
    });

    $(".cir3").off("click");
    $(".cir3").on("click", function() {
        var x = $(this).parent().parent().data("index");
        console.log(x);

        var restSession = JSON.parse(localStorage.getItem('weather'));
        var ses_data = restSession.weather[x-1];
        console.log(ses_data);
        localStorage.setItem("location",ses_data.location_name);
        window.location.href = "../www/Mobile_weather.html";
    });

    };

    weather_functions.load_from_localstorage = function(){
        var restoredSession = JSON.parse(localStorage.getItem('weather'));
        if(restoredSession){
            for(var i=0;i<restoredSession.weather.length;i++){
            window.disp = "<div class='list-group-item modal_but'>"+ restoredSession.weather[i].location_name + "<i class='fa fa-times close_icon'></i>";
                menu.addItem({itemText: disp});
                console.log(restoredSession.weather[i].location_name);
            }
        }
        // menu.render();
    };

    weather_functions.addbutton = function(){
         $("#but_submit").on("click",function(evnt){
            $("#but_submit").off("click");
            evnt.stopPropagation();
            var a = document.getElementById('input_location').value;
            menu.toggle();
            if(a === "")
            {
                alert("empty");
            }
            else{
                weather_functions.weather_get(a, function(){
                    weather_functions.generateclickevent();
                });
                // weather_functions.generateclickevent();
            }
        });
    };

    weather_functions.load_data = function(divId){
        weather_functions.modal_location_data(divId);
    };

    weather_functions.generateclickevent = function(){
        weather_functions.define_modal_events();
    };

   weather_functions.choose_day = function()
    {   var text_day = "";
        switch(day)
        {
            case 1 :
                text_day = day + "<sup>st</sup>";
                break;
            case 21 :
                text_day = day + "<sup>st</sup>";
                break;
            case 32 :
                text_day = day + "<sup>st</sup>";
                break;
            case 2 :
            text_day = day + "<sup>nd</sup>";
                break;
            case 22 :
                text_day =  day + "<sup>nd</sup>";
                break;
            case 3:
                text_day = day + "<sup>rd</sup>";
                break;
            default :
                text_day = day + "<sup>th</sup>";
                break;
        }
        return text_day;
     };

    weather_functions.ready_events_load = function()
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
    };

 return weather_functions;
} (weather_functions || {},jQuery || {}));

