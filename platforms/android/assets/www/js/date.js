$(document).ready(function(){
    var d = new Date();
    var day = d.getDate();
    var month = d.getMonth();
    var m = ["january","february","march","april","may","june","july","august","september","october","november","december"];
    var y = d.getFullYear();
    document.getElementById("day").innerHTML = day + "th";
    document.getElementById("month").innerHTML = m[month] + ", " + y;
});