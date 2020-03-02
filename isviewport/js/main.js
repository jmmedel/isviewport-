
window.addEventListener('DOMContentLoaded', function(){
  /** jQueryの処理 */
  // Global variable counter
var count = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;


var ua = navigator.userAgent;
var ua_;
if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
     
      ua_ = "smarphone";

    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
      // Smartphone
      ua_ = "smarphone";

    } else {
      //Pc
      ua_ = "PC";
    }

  // isinviewport 
  $.fn.isInViewport = function() {
    var elementTop = $(this).offset().top;
    var elementBottom = elementTop + $(this).outerHeight();
    var viewportTop = $(window).scrollTop();
    var viewportBottom = viewportTop + $(window).height();
    return elementBottom > viewportTop && elementTop < viewportBottom;
  };
  


  //
  
  if (count == 0  )  {
    mainPage = "RED"
    PostAJax(mainPage,ua_);
    
    count=1;

  }



  $(window).on('resize scroll', function() {
    $('.color').each(function() {
      var activeColor = $(this).attr('id');
      if ($(this).isInViewport()) {
        $('#fixed-' + activeColor).addClass(activeColor + '-active');
        
        if (count2 == 0 && activeColor == "green" )  {
          mainPage = "GREEN"
          PostAJax(mainPage,ua_);
          count2 = 1;
        }

        if (count3 == 0 && activeColor == "blue" ) {
          mainPage = "BLUE"
          PostAJax(mainPage,ua_);
          count3 = 1;
        }

        if (count4 == 0 && activeColor == "yellow" ) {
          mainPage = "Yellow"
          PostAJax(mainPage,ua_);
          count4 = 1;
        }


      } else {
        $('#fixed-' + activeColor).removeClass(activeColor + '-active');
       
      }
    });

  });
  

 
  

  // ===========================================================================================

  

  
  
  // ===========================================================================================

  
  // Make CSV
  function PostAJax(flag,ua) {
    $.ajax({
      type: "POST",
      url: "http:/" + document.domain + "/log.php",
      data: {
        "mainpage": flag,
        "UA" :ua
      }
    });
  }

  // ================================================================================================
});

