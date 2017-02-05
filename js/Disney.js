/**
 * Created by zhaoangyouyou on 03/02/2017.
 */
$(function() {
    // $(".nav").headroom({
    //     tolerance: 5,
    //     offset: 100,
    //     classes: {
    //         initial: "animated",
    //         pinned: "slideDown",
    //         unpinned: "slideUp"
    //     }
    // });

//mobile adaptive
    $(".nav-on").click(function(){
        $(".nav>ul").toggle();
    });

    $("#head").height($(window).height());
    var lineHeight = $("#head").height()-200;
    var marginTop = lineHeight/2-100;
    $("#head").children("div").css("line-height",lineHeight+'px');
    $("#head").children("p").css("margin-top",'-'+marginTop+'px');

    $("#head1").height($(window).height());
    $("#head1").children("div").css("line-height",lineHeight+'px');
    $("#head1").children("p").css("margin-top",'-'+marginTop+'px');
    $("#head2").height($(window).height());
    $("#head2").children("div").css("line-height",lineHeight+'px');
    $("#head2").children("p").css("margin-top",'-'+marginTop+'px');

    new WOW().init();


})


$(window).resize(function() {
    $("#head").height($(window).height());
    var lineHeight = $("#head").height()-100;
    var marginTop = lineHeight/2-100;
    $("#head").children("div").css("line-height",lineHeight+'px');
    $("#head").children("p").css("margin-top",'-'+marginTop+'px');

    $("#head1").height($(window).height());
    $("#head1").children("div").css("line-height",lineHeight+'px');
    $("#head1").children("p").css("margin-top",'-'+marginTop+'px');

    $("#head2").height($(window).height());
    $("#head2").children("div").css("line-height",lineHeight+'px');
    $("#head2").children("p").css("margin-top",'-'+marginTop+'px');
});