$(document).ready(function() {
  $(window).load(function() {
    $(window).on('load resize', function() {
      if ($(window).width() <= 768) {
        $('#audio').remove();
      }
    });
  });
});
