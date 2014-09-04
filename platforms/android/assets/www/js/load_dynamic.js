/* global jquery*/
(function($) {
	"use stict";

	$(document).ready(function(){
	$(".cir1").off("click");
    $(".cir1").on("click",function(evt) {
        evt.stopPropagation();
        console.log("inside a new file");
        menu.toggle();
        return false;
    });
});
}(jQuery));