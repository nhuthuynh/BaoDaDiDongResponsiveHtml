$(document).bind('ready', function () {
    $('[data-ride="carousel"]').each(function () {
        var $carousel = $(this);
        console.log($carousel.data());
        $carousel.carousel($carousel.data());
    });

});