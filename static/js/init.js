$(document).ready(function () {
    let options = [
        {
            selector: '#master-title',
            offset: 300,
            callback: function (el) {
                Materialize.fadeInImage($(el));
            }
        },
        {
            selector: '#subtext',
            offset: 300,
            callback: function (el) {
                Materialize.fadeInImage($(el));
            }
        }
    ];

    Materialize.scrollFire(options);
});

$(".button-collapse").sideNav({ closeOnClick: true });
$(document).ready(function () {
    if ($('#navbar-desktop').css('display') === 'none') {
        $('.scrollspy').scrollSpy({ scrollOffset: 0 });         //mobile
    } else {
        $('.scrollspy').scrollSpy({ scrollOffset: 50 });        //desktop
    }
});

$(document).ready(function () {
    // the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
});