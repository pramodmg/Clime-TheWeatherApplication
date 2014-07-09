// alert("hello");
var ele = document.getElementById('move');
var array = { 200 : "P" , 201 : "Q", 202 : "R", 210 : "O", 211 : "P", 212 : "Q", 221 : "P" , 230 : "Q" , 231 : "Q" , 232 : "R" ,
                  300 : "Q" , 301 : "Q", 302 : "R", 310 : "Q" ,311 : "R", 312 : "R", 313 : "R" , 314 : "X" , 321 : "T" ,
                  500 : "Q" , 501 : "R", 502 : "6", 503 : "7" ,504 : "8", 511 : "\"", 520 : "7" , 521 : "$" , 522 : "8" ,531 : "9",
                  701 : "M" , 711 : "M", 721 : "F", 731 : "M" ,741 : "F", 751 : "M" ,761 : "M" , 762 :"F" , 771 : "M" , 781 : "F",
                  800 : "B" , 801 : "H", 802 : "Y", 803 : "L" ,804 : "Y",
                  900 : "F" , 901 : "F", 902 : "F", 903 : "U" ,904 : "B", 905 : "L" , 906: "W",
                  950 : "G" , 951 : "L", 952 : "J", 953 : "J" ,954 : "E", 955 : "F", 956 : "F" , 957 : "S", 958: "U" , 959 : "F",
                  960 : "9" , 961 : "9", 962 : "!"};
var restoredSession = JSON.parse(localStorage.getItem('weather'));
var count = 0;
var length = restoredSession.weather.length;
console.log("total length : " +length);
console.log("count initailly : "+count);
AnimateRotate(360);
getdata(count);
Hammer(ele).on("swipeleft", function(event) {
	count++;
	console.log("count is " + count);
	if(count < length){
	AnimateRotate(360);
	// count++;
	console.log(count);
	getdata(count);
	// count++;
	}else{
		console.log("end of inputs");
		count=0;
		AnimateRotate(360);
		getdata(count);
	}
});

Hammer(ele).on("swiperight", function(event){
	console.log("count" + count);
	AnimateRotate(-360);
	if(count > 0 ){
		AnimateRotate(-360);
		count--;
		getdata(count);
 	}else{
 	  	console.log("you hav reached first element");
 	  	count = length-1;
 	  	console.log(count);
 	  	getdata(count);
 	}
});

function getdata(index)
{
	// index = index;
	// console.log(restoredSession.weather[index].condition);
    $(".condition").text(restoredSession.weather[index].condition);
    $(".location").text(restoredSession.weather[index].location_name);
    $(".temp").text(restoredSession.weather[index].temp).append("<sup>o</sup>C");
    $("#humidity").text(restoredSession.weather[index].humidity).append('<span class="percentage"> %</span>');
    $("#pressure").text(restoredSession.weather[index].pressure).append('<span class="units"> hpa</span>');
    $("#wind").text(restoredSession.weather[index].wind).append('<span class="units"> m/s</span');
    $("#desc").text(restoredSession.weather[index].description);
    $(".icon1").attr("data-icon",array[restoredSession.weather[index].icon]);
	console.log(restoredSession);
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
    $("#text").text("welcome");
}