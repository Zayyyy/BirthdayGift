/**
 * Created by zhaoangyouyou on 27/02/2017.
 */
var loveValue = 1000;
var lastValue;
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
    $(".loveValue").text("真爱值 = "+loveValue);

    new WOW().init();

//键盘动画
    for(var temp = 0; temp < document.getElementsByClassName("strip").length; temp++ ){
        (function (idx) {
            setTimeout(function () {
                    $("#sound-"+idx).fadeIn(1000);
                }, 500 + (idx * 200));
        })(temp);
    }

})

$(document).ready(function(){
    $('input').iCheck({
        checkboxClass: 'icheckbox_square-pink',
        radioClass: 'iradio_square-pink',
        increaseArea: '20%' // optional
    });
});

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
                if(temp != audioList.length - 1){
                    audioList[temp].parentNode.setAttribute("class", "strip");
                }

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



function displayQuestion() {

    var timer = setInterval(function () {
        $("#begin").hide();
        $("#question1").fadeIn(1000);
        clearInterval(timer);
    },500);

}
function reStart() {
    var timer = setInterval(function () {
        $("#fail").hide();
        $(lastValue).fadeIn(1000);
        clearInterval(timer);
    },500);

}
function verifyAnswer(e) {

    var radioName = "q"+e.id;
    var nextID = parseInt(e.id)+1;
    var radio = document.getElementsByName(radioName);
    var anwser;
    for(var i=0;i<radio.length;i++)
    {
        if(radio[i].checked)
            anwser = radio[i].value;
    }
    if(anwser == "right"){
        $("#question"+e.id).hide();
        $("#question"+nextID).fadeIn(1000);
    }
    else{
        $("#question"+e.id).hide();
        lastValue = "#question"+e.id;
        $("#fail").show();
        loveValue -= 1000;
        $(".loveValue").text("真爱值 = "+loveValue);
    }
    console.log(anwser);
}

function endAnwser(e) {



    if(loveValue < 0){
        $("#question"+e.id).hide();
        $("#normal").fadeIn(1000);
    }
    else{
        $("#question"+e.id).hide();
        $("#success").fadeIn(1000);
    }
}
var CatFlag = 0;
function  playCat() {
    if(CatFlag){
        document.getElementById("GragonCat").pause();
        CatFlag = 0;
    }
    else{
        for(var temp = 0; temp < audioList.length; temp++ ){
            if (!audioList[temp].paused) {
                    audioList[temp].pause();
                audioList[temp].parentNode.setAttribute("class", "strip");
            }
        }
        document.getElementById("GragonCat").play();
        CatFlag = 1;
    }

}

function  easterEgg() {
    var timer = setInterval(function () {
        $("#success").hide();
        $("#xPlayer").fadeIn(500);
        clearInterval(timer);
    }, 500);

}
function  normal() {
    var timer = setInterval(function () {
        window.location = "Game.html";
        clearInterval(timer);
    },500);

}