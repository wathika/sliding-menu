var main = function() {
  $('.dropdown-toggle').click(function() {
    $('.dropdown-menu').toggle();
  });
}


$(document).ready(main);
//    waits for the HTML document to load completely before running the main() function.
