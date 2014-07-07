    $(function() {      
      //Keep track of how many swipes
      var count=0;
      //Enable swiping...
      $("#test").swipe( {
        //Generic swipe handler for all directions
        swipeLeft:function(event, direction, distance, duration, fingerCount) {
          $(this).text("You swiped " + direction + " times " );  
        },
        //Default is 75px, set to 0 for demo so any distance triggers swipe
        threshold:0
      });
    });