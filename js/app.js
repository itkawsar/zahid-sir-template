$(function() {
    'use strict'
    //sticky

    //pre-lodar
    $(window).on("load", function() {
        $('#loding').fadeOut(1000);
    })

    $(window).on('scroll', function() {
        var menuheight = $('#header').height();
        var scrollSize = $(window).scrollTop();
        if (scrollSize > menuheight) {
            $('#header').addClass('animate')
        } else {
            $('#header').removeClass('animate')
        }
    })

    //navication bar
    $('a').on('click', function(e) {
        e.preventDefault()

        var hash = this.hash

        if (this.hash !== '') {
            $("html, body").animate({
                    scrollTop: $(hash).offset().top
                },
                500
            )
        }
    })

    //arrow 
    $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();

        if (scrollTop > 600) {
            $('#top').fadeIn(300)
        } else {
            $('#top').fadeOut(300)
        }
    })

    $('#top').on('click', function() {
        $("html, body").animate({
            scrollTop: 0
        }, 1000)
    })
    $('.baner_slider').slick();

})