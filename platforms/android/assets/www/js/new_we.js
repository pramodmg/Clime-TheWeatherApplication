
$("#back").on("click",function(){
	alert("hello");
	var home = "../www/index.html";
	$(location).attr('href',home);
});