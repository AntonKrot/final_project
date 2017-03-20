//===================
//  BXSLIDER
//  do not touch
//===================

$(document).ready(function(){
    $('.bxslider').bxSlider({
        slideWidth: 300,
        minSlides: 3,
        maxSlides: 3,
        moveSlides: 3,
        slideMargin: 10,
        auto: true,
        controls: false
    });
});

//===================
//  FLICKITY
//  do not touch
//===================

$('.main-carousel').flickity({
    contain: true,
    freeScroll: true,
    wrapAround: true,
    autoPlay: 2500,
    initialIndex: 2,
    prevNextButtons: false
});

//===================
//  SEARCH-FORM
//  do not touch
//===================



new UISearch( document.getElementById( 'sb-search' ) );

//===================
//  MASONRY
//  do not touch
//===================


$(function(){

    var m = new Masonry($('.grid').get()[0], {
        columnWidth: ".element-item",
        itemSelector: ".element-item"
    });

});
//===================
//  BUTTON UP
//  do not touch
//===================

jQuery(document).ready(function() {
    var offset = 800;
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

//===================
//  WOW
//  do not touch
//===================

new WOW().init();


//===================
//  VALIDATION
//  do not touch
//===================

$(function() {
    $("form[name='validForm']").validate({

        rules: {

            fullName:{
                required: true,
                minlength: 4,
                maxlength: 16
            },

            email: {
                required: true,
                email: true
            },

            telephone: {
                required: true,
                number: true
            },

            date: {
                required: true
            },

            bugdet: {
                required: true,
                number: true
            },

            message: {
                required: true,
                minlength: 4
            }

        },

        messages: {

            fullName:{
                required: "This field is required",
                minlength: "Name must be at least 4 characters",
                maxlength: "The maximum number of characters is 16"
            },

            email: {
                required: "This field is required",
                email: "Please enter a valid email address"
            },

            telephone: {
                required: "This field is required",
                number: "Please enter a valid number"
            },

            date: {
                required: "This field is required",
                date: "Please enter a valid date"
            },

            bugdet: {
                required: "This field is required",
                number: "Please enter a valid number"
            },

            message: {
                required: "This field is required",
                minlength: "Name must be at least 4 characters"
            }
        },

        submitHandler: function() {
            toastr.success('Your information are accepted');
            $('.validForm').get(0).reset();
        }
    });
});

//===================
// DATETIMEPICKER
//  do not touch
//===================

$(function () {
    $('#date').datetimepicker();
});

//===================
// DATATABLE
//  do not touch
//===================

$(document).ready(function(){
    $('#data-table').DataTable({
        "ajax": "/json/data.json",
        "cols": [
            {"data": "fullName"},
            {"data": "company"},
            {"data": "phone"},
            {"data": "address"},
            {"data": "email"}
        ]
    });
});

//===================
// CAROUSEL FIRST SECTION SERVICES
//  do not touch
//===================

$(document).ready(function() {
    $('.carousel').carousel({
        interval: 6000
    })
});
