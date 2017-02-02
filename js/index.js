/**
 * Created by zhaoangyouyou on 01/02/2017.
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

})
$(window).resize(function() {
    $("#head").height($(window).height());
});

$(window).scroll(function(){
    //获取当前位置到窗口顶部的高度
    var h_num=$(window).scrollTop();
    if(h_num>$(window).height()){//当当前高度大于导航条到窗口顶部高度
        $('#nav').fadeIn();
    }else{
        $('#nav').fadeOut();
    }
});

$(document).ready(function(){
    // $('#nav').localScroll(800);

    $('#intro').parallax("50%", 0.1);
    $('#second').parallax("50%", 0.1);
    $('.bg').parallax("50%", 0.1);
    $('#third').parallax("20%", 0.5);

})
