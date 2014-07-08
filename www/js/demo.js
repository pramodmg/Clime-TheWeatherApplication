// $(document).on("click",function() {      
    var element = document.getElementById('test');
    alert("inside");
    var count= 0 ;
    Hammer(element).on("swipeleft", function(event) {
      count++;
        alert('hello! the count is ' + count);
        });
// });


