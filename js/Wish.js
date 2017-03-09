/**
 * Created by zhaoangyouyou on 08/03/2017.
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

    // $("#head").height($(window).height());
    new WOW().init();


})
var flag = 0;
var audioList = [];
audioList = document.getElementsByTagName("audio");

function showWords(e) {
    if(!e){
        var e = window.event;
    }
    //获取事件点击元素
    var targ = e.target;
    var audio = audioList[0];
    var eName = targ.className;
    var insertText;
    if(eName == "toriel"){
        $("#words").css("font-family","Futura");
        $("#words").css("color","#eceff1");
        insertText = "May you be loved creamily and warmly by someone like Toriel(the sheep mom)";
        audio = audioList[1];
    }
    else if(eName == "sans"){
        $("#words").css("font-family","Comic Sans MS");
        $("#words").css("color","#eceff1");
        insertText = "May you be positive and passionate about life everytime like Sans";
        audio = audioList[2];
    }
    else if(eName == "papyrus"){
        $("#words").css("font-family","Papyrus");
        $("#words").css("color","#eceff1");
        insertText = "May you have an honest and simple mind, always fight for your dream like Papyrus";
        audio = audioList[3];
    }
    else if(eName == "undyne"){
        $("#words").css("font-family","Futura");
        $("#words").css("color","#eceff1");
        insertText = "May you develop a strong and healthy body as well as mind to crack hard nuts like Undyne";
        audio = audioList[4];
    }
    else if(eName == "alphys"){
        $("#words").css("font-family","Futura");
        $("#words").css("color","#eceff1");
        insertText = "May you continue to absorb knowledge to become wealthy for what you have learned, get higher degree like Alphys";
        audio = audioList[5];
    }
    else if(eName == "flowey"){
        $("#words").css("font-family","Futura");
        $("#words").css("color","#f06292");
        insertText = "Open your email box, write what you want to 806096961@qq.com whenever you have a wish:)";
        audio = audioList[0];
    }
    $("#words").typed({
        strings: [insertText],
        typeSpeed: 0,
        backDelay: 200,
        loop: false,
        contentType: 'html', // or text
        // defaults to false for infinite loop
        loopCount: false,

    });

    audio.volume = 0.3;
    for(var temp = 0; temp < audioList.length; temp++ ){
        if (!audioList[temp].paused) {
            if(audioList[temp] != audio){
                audioList[temp].pause();
                $("#sound-label").text("OFF");
                flag = 1;
            }
        }
    }
    if(audio.paused){
        flag = 0;
        $("#sound-label").text("ON");
        audio.play();
    }

}