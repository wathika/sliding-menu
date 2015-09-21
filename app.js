var main = function() {
//    push the body to the left 285px from the left margin when the menu icon is clicked
    $('.icon-menu').click(function() {
        $('.menu').animate({
            left: '0px'
            }, 200);


        $('.body').animate({
            left: '285px'
            }, 200);
    });

    /* Then push them back */
    $('.icon-close').click(function() {
        $('.menu').animate({
          left: "-285px"
        }, 200);

        $('body').animate({
          left: "0px"
        }, 200);
    });

};


$(document).ready(main);
//    waits for the HTML document to load completely before running the main() function.
