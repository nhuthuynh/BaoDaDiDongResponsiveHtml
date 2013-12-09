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

});