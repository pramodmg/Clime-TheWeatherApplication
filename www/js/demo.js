// $(document).on("click",function() {
    var element = document.getElementById('test');
    alert("inside");
    alert(element);
    var count= 0 ;
    Hammer(element).on("swipeleft", function(event) {
      count++;
            $("#circle2").hide();
            $("#circle").show();
            AnimateRotate(360);
});
    Hammer(element).on("swiperight", function(event) {
      count++;
     
            $("#circle").hide();
            $("#circle2").show();
            AnimateRotate(360);
});
var flg = true;
$(document).ready(function(){
    // AnimateRotate(360);
     $("#cir2").hide();
})

$("#circle").on("click",function(){
    // $("#circle").hide();
    // $("#circle2").show();
    AnimateRotate(360);
});

$("#circle2").on("click",function(){
    // $("#circle2").hide();
    // $("#circle").show();
    AnimateRotate(360);
});


function AnimateRotate(d){
    // var elem = $("#circle");
    // var elem = $("#circle2");

    $({deg: 0}).animate({deg: d}, {
        duration: 400,
        step: function(now){
            $("#circle").css({
                 transform: "rotate(" + now + "deg)"
            });
            $("#circle2").css({
                 transform: "rotate(" + now + "deg)"
            });
        }
    });
    $("#text").text("welcome");
}

// function circle2_show()
// {
//     $("#circle2").show();
//     AnimateRotate(360);
// }
