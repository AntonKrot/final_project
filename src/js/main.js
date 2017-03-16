/// ------------------------- BXSLIDER --------------------------------
$(document).ready(function(){
    $('.bxslider').bxSlider({
        slideWidth: 300,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 3,
        slideMargin: 10
    });
});
/// -------------------------/BXSLIDER--------------------------------

/// ------------------------- SEARCH-FORM --------------------------------

new UISearch( document.getElementById( 'sb-search' ) );

/// -------------------------/SEARCH-FORM--------------------------------

/// ------------------------- MASONRY --------------------------------



var $container = $('.grid');

$container.masonry({
    columnWidth: 200,
    itemSelector: '.grid-item'
});
/// -------------------------/MASONRY--------------------------------
/// ------------------------- BUTTON UP -----------------------------
jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('.back-to-top').fadeIn(duration);
        } else {
            jQuery('.back-to-top').fadeOut(duration);
        }
    });

    jQuery('.back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({scrollTop: 0}, duration);
        return false;
    })
});
/// ------------------------- /BUTTON UP -----------------------------


