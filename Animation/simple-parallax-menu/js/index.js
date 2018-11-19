$(document).ready(function() {
  var h = $(window).height();
  var dh = (2 * h) + 'px';
  $('.container').css('height',dh);
  $('.container').css('margin-top',h+'px');

  $(window).scroll(function() {
    if($(window).scrollTop() >= (h - 80)) {
      $('.header').removeClass('fixed-bottom');
      $('.header').addClass('fixed-top');
    } else if ($(window).scrollTop() <= (h + 80)) {
      $('.header').removeClass('fixed-top');
      $('.header').addClass('fixed-bottom');
    }

  });
});