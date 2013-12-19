$(document).bind('ready', function () {
    $('[data-ride="carousel"]').each(function () {
        var $carousel = $(this);
        $carousel.carousel($carousel.data());
    });

    $('.pro-img-link').bind('click', function () {
        var href = $(this).attr('href');
        if ($(href).length == 0) return;
        else $(href).css('opacity', 1).siblings().css('opacity', 0);

        return false;
    });

    // hide #back-top first
    $("#scrollUp").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#scrollUp').fadeIn();
            } else {
                $('#scrollUp').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('#scrollUp').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    });
});