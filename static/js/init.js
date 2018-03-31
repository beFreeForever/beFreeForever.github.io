$(document).ready(function () {
    let options = [
        {
            selector: '#master-title',
            offset: 300,
            callback: function (el) {
                Materialize.fadeInImage($(el));
            }
        },
        // {
        //     selector: '#subtext',
        //     offset: 300,
        //     callback: function (el) {
        //         Materialize.fadeInImage($(el));
        //     }
        // }
    ];

    Materialize.scrollFire(options);

    if ($('#navbar-desktop').css('display') === 'none') {
        $('.scrollspy').scrollSpy({ scrollOffset: 0 });         //mobile
    } else {
        $('.scrollspy').scrollSpy({ scrollOffset: 50 });        //desktop
    }

    $('.modal').modal();

    $(".button-collapse").sideNav({ closeOnClick: true });
});