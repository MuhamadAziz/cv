$(function(){
  var percent = 0.0
  
  var progress = new Ractive({
    el: 'output',
    template: '#progress',
    data: {
      percent: percent
    }
  });
  
  var interval = window.setInterval(function () {
    percent = percent + 0.01;
    if(percent >= 1.0) {
      window.clearInterval(interval);
    }
    // Set Progress Percentage
    progress.set('percent', percent);
  }, 30);
 
});