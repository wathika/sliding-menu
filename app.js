var main = function() {
    $('.icon-menu').click(function() {
        $('.menu').animate({
            left: '0px'
            }, 200);
        });

    $('.body').animate({
        left: '285px'
        }, 200);

};


$(document).ready(main);
//    waits for the HTML document to load completely before running the main() function.
