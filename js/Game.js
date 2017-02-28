/**
 * Created by zhaoangyouyou on 27/02/2017.
 */
$(function() {
    $('#nav').show();
    $(".nav").headroom({
        tolerance: 5,
        offset: 200,
        classes: {
            initial: "animated",
            "pinned": "slideDown",
            "unpinned": "slideUp"
        }
    });

//mobile adaptive
    $(".nav-on").click(function(){
        $(".nav>ul").toggle();
    });

    $("#head").height($(window).height());


    new WOW().init();



})

$(window).resize(function() {
    $("#head").height($(window).height());

});

var audioList = [];
audioList = document.getElementsByTagName("audio");

function playMusic(e) {
    if(!e){
        var e = window.event;
    }
    //获取事件点击元素
    var targ = e.target;


    var audio = targ.getElementsByTagName('audio')[0];
    audio.volume = 0.3;

    for(var temp = 0; temp < audioList.length; temp++ ){

        if (!audioList[temp].paused) {
            if(audioList[temp] != audio){
                audioList[temp].pause();
                audioList[temp].parentNode.setAttribute("class", "strip");
            }
        }
    }
    if(audio.paused){
        audio.play();
        targ.setAttribute("class", "strip active");

    }
    else{
        audio.pause();
        targ.setAttribute("class", "strip");
    }

}

function reloadMusic() {
    for(var temp = 0; temp < audioList.length; temp++ ){
        audioList[temp].load();
    }
}