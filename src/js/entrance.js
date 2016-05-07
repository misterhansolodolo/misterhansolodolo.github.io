$(document).ready(function() {
  $(window).load(function() {
    $('#loading-bar').animate({width: '30%'}, 3000, function() {
      $('#loading-bar').animate({width: '0px'}, 200, function() {
        function aboutMeToString() {

        }

        $('body').html(
          '<img src="./src/images/background.gif" id="gif" />' +
          '<div id="title">' +
            '<img src="./src/images/profile.jpg" id="profile" />' +
            '<div id="name">hello, i&#39;m hansol!</div>' +
            '<div id="description"> i just want to build cool stuff . . </div>' +
          '</div>' +

          '<div id="personal-title"> get to know me </div>' +
          '<div id="title-bar"> </div>' +
          '<div id="box-container">' +
            '<div class="entry-box">' +
              '<div class="entry-box-front">' +
                '<img class="front-img" src="./src/images/berkeley.png" />' +
              '</div>' +
              '<div class="entry-box-back">' +
                '<div class="back-title"> UC Berkeley - 2014 </div>' +
                '<div class="back-info"> B.A. in Cognitive Science </div>' +
              '</div>' +
            '</div>' +
            '<div class="entry-box">' +
              '<div class="entry-box-front">' +
                '<img class="front-img" src="./src/images/location.jpg" />' +
              '</div>' +
              '<div class="entry-box-back">' +
                '<div class="back-title"> Current Location - Denver, CO </div>' +
                '<div class="back-info"> Raised in San Diego, CA </div>' +
              '</div>' +
            '</div>' +
            '<div class="entry-box">' +
              '<div class="entry-box-front">' +

              '</div>' +
              '<div class="entry-box-back">' +

              '</div>' +
            '</div>' +
          '</div>' +

          '<div id="professional-title"> my work </div>' +
          '<div id="title-bar"> </div>' +
          '<div id="box-container">' +
            '<div class="entry-box">' +
              '<div class="entry-box-front">' +

              '</div>' +
              '<div class="entry-box-back">' +

              '</div>' +
            '</div>' +
            '<div class="entry-box">' +
              '<div class="entry-box-front">' +

              '</div>' +
              '<div class="entry-box-back">' +

              '</div>' +
            '</div>' +
            '<div class="entry-box">' +
              '<div class="entry-box-front">' +

              '</div>' +
              '<div class="entry-box-back">' +

              '</div>' +
            '</div>' +
          '</div>' +

          '<div id="contact-bar">' +
            '<a href="https://www.facebook.com/hansol.biggy?ref=bookmarks" target="_blank">' +
              '<img src=./src/images/fb-icon.png class="contact-icon" />' +
            '</a>' +
            '<a href="https://www.linkedin.com/in/hansol-yi-758946b9" target="_blank">' +
              '<img src=./src/images/linkedin-icon.png class="contact-icon" />' +
            '</a>' +
            '<a href="https://misterhansolodoloblog.wordpress.com" target="_blank">' +
              '<img src=./src/images/Wordpress-Icon.png class="contact-icon" />' +
            '</a>' +
          '</div>'
        );
      });
    });
  });
});
