$(document).ready(function() {
      
        $('.iosSlider').iosSlider({
          scrollbar: true,
          snapToChildren: true,
          desktopClickDrag: true,
          scrollbarLocation: 'top',
          scrollbarMargin: '10px 10px 0 10px',
          scrollbarBorderRadius: '0',
          responsiveSlideWidth: true,
          navSlideSelector: $('.iosSliderButtons .button'),
          infiniteSlider: true,
          startAtSlide: '1',
          onSlideChange: slideContentChange,
          onSlideComplete: slideContentComplete,
          onSliderLoaded: slideContentLoaded
        });
        
        function slideContentChange(args) {

          $("#sr").removeClass("fa-circle");
          $("#sr").addClass("fa-circle-o");
          $("#sl").removeClass("fa-circle-o");
          $("#sl").addClass("fa-circle");
          
        }
        
        function slideContentComplete(args) {
          
          if(!args.slideChanged) return false;
          
        }
        
        function slideContentLoaded(args) {
      
          $("#sr").removeClass("fa-circle-o");
          $("#sr").addClass("fa-circle");
          $("#sl").removeClass("fa-circle");
          $("#sl").addClass("fa-circle-o");
        }
        
      });