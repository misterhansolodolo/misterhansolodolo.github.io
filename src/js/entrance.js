$(document).ready(function() {
  $(window).load(function() {
    $('#loading-bar').animate({width: '30%'}, 3000, function() {
      $('#loading-bar').animate({width: '0px'}, 200, function() {
        function aboutMeToString() {

        }

        $('body').html(
          '<div id="section-0">' +
            '<div id="title">' +
              '<div id="title-pic">' +
                '<img src="./src/images/profile.jpg" id="profile" />' +
              '</div>' +
              '<div id="title-text">' +
                '<div id="name">Hello, I&#39;m Hansol!</div>' +
                '<div id="description"> I just want to build cool stuff . . </div>' +
              '</div>' +
            '</div>' +
          '</div>' +


          '<div id="section-1">' +
            '<div id="about-title"> ABOUT ME </div>' +
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
                  '<img class="front-img" src="./src/images/soccer.jpg" />' +
                '</div>' +
                '<div class="entry-box-back">' +
                  '<div class="back-title"> Soccer Player </div>' +
                  '<div class="back-info"> 100% Field Fairy </div>' +
                '</div>' +
              '</div>' +
              '<div class="entry-box">' +
                '<div class="entry-box-front">' +
                  '<img class="front-img" src="./src/images/snowboarding.jpg" />' +
                '</div>' +
                '<div class="entry-box-back">' +
                  '<div class="back-title"> Snowboarding </div>' +
                  '<div class="back-info"> Loves Going on a sky raid </div>' +
                '</div>' +
              '</div>' +
              '<div class="entry-box">' +
                '<div class="entry-box-front">' +
                  '<img class="front-img" src="./src/images/beer.jpg" />' +
                '</div>' +
                '<div class="entry-box-back">' +
                  '<div class="back-title"> Beer Enthusiast </div>' +
                  '<div class="back-info"> Let&#39;s grab one </div>' +
                '</div>' +
              '</div>' +
              '<div class="entry-box">' +
                '<div class="entry-box-front">' +
                  '<img class="front-img" src="./src/images/lightbulb.jpg" />' +
                '</div>' +
                '<div class="entry-box-back">' +
                  '<div class="back-title"> Ideas </div>' +
                  '<div class="back-info"> Always trying to think of the next big one </div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</div>' +


          '<div id="section-2">' +
            '<div id="about-title"> MY WORK </div>' +
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
          '</div>' +

          '<div id="section-3">' +
            '<div id="about-title"> CONTACT </div>' +
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
