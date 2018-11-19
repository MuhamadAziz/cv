//I am still playing around with this so if you have any suggestions/improvements please let me know

$(".menu-icon").click(function() {
  $(this).toggleClass("active");
  $(".offCanvasMenu").toggleClass("open");
});