var options = {
  //segmentShowStroke: false,
  percentageInnerCutout: 70,
  //animation: true,
  animationEasing: 'easeOutQuint',
  //animateRotate: false,
  animateScale: true
};
var data = {
  html_css: [
    { value: 95, color: "hsl(120, 39%, 54%)" },
    { value: 5, color: "hsl(120, 10%, 90%)" }
  ],
  sass: [
    { value: 90, color: "hsl(120, 39%, 54%)" },
    { value: 10, color: "hsl(120, 10%, 90%)" }
  ],
  jquery: [
    { value: 90, color: "hsl(120, 39%, 54%)" },
    { value: 10, color: "hsl(120, 10%, 90%)" }
  ],
  rails: [
    { value: 66, color: "hsl(120, 39%, 54%)" },
    { value: 34, color: "hsl(120, 10%, 90%)" }
  ],
  backbone: [
    { value: 75, color: "hsl(120, 39%, 54%)" },
    { value: 25, color: "hsl(120, 10%, 90%)" }
  ],
  photoshop: [
    { value: 66, color: "hsl(120, 39%, 54%)" },
    { value: 34, color: "hsl(120, 10%, 90%)" }
  ]
};

var offset = 0;
$.each(data, function(key, data) {
  var canvas = document.querySelector('#' + key);
  if(canvas) {
    offset += 250;
    setTimeout(function() {
      var ctx = canvas.getContext('2d');
      var chart = new Chart(ctx);
      chart.Doughnut(data, options);
    }, offset);
  }
});