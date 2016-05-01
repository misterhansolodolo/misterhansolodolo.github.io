$(document).ready(function() {
  $(window).load(function() {
    $('#loading-bar').animate({width: '30%'}, 3000, function() {
      $('#loading-bar').animate({width: '0px'}, 200, function() {
        window.location.replace('/about.html');
      });
    });
  });
});
