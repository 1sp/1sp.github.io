(function($) {
  "use strict"; // Start of use strict

  $('#pageHeading').flowtype({
    minimum: 700,
    fontRatio: 10
  });

  $('#pageSubheading').flowtype({
    minimum: 700,
    fontRatio: 25
  });

  $('#postHeading').flowtype({
    minimum: 700,
    fontRatio: 15
  });

  $('#postSubheading').flowtype({
    minimum: 900,
    fontRatio: 40
  });

  // Start midnight
  $(document).ready(function() {
    // Change this to the correct selector for your nav.
    $('.nav-toggler').midnight();
  });

  $(".hamburger").click(function(e) {
    e.preventDefault();
    $(".hamburger").toggleClass("is-active");
    $(".nav-menu").toggleClass("show");
    $("body").toggleClass("nav-open");
    // Other Stuff
  });

})(jQuery); // End of use strict
