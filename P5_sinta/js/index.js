$(document).ready(function () {
    var scroll = $(window).scrollTop();
    if (scroll >= 100) {
        $("#navigation-section").removeClass("nav-transparent");
        $("#navigation-section").addClass("nav-solid");
    } else {
        $("#navigation-section").addClass("nav-transparent");
        $("#navigation-section").removeClass("nav-solid");
    }
})

$(window).scroll(function () {
    var scroll = $(window).scrollTop();

    //>=, not <=
    if (scroll >= 100) {
        //clearHeader, not clearheader - caps H
        $("#navigation-section").removeClass("nav-transparent");
        $("#navigation-section").addClass("nav-solid");
    } else {
        $("#navigation-section").addClass("nav-transparent");
        $("#navigation-section").removeClass("nav-solid");
    }
}); //missing );
