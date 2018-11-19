////////////////////
// Automate UI
////////////////////

(function() {

  var parallaxObj, scrollToThis, interval;

  parallaxObj = $('.parallax');
  scrollToThis = parallaxObj.height();

  function scroll() {

    parallaxObj.animate({
      scrollTop: scrollToThis
    }, 2000);
    
    if(scrollToThis === 0){
      scrollToThis = parallaxObj.height();
    }else{
      scrollToThis = 0;
    }
  }
  
  scroll();

  interval = setInterval(function() {
    scroll();
  }, 2000);
  
  $('body').on('mouseover', function(){
    clearInterval(interval);
  });

}());