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
    $('#head').parallax("100%", 0.1);
    $('#first-head').parallax("100%", 0.1);
    $('#second-head').parallax("100%", 0.1);
    $('#first').parallax("100%", 0);
    $('#second').parallax("100%", 0);
    $('#third').parallax("100%", 0);
    $('#fourth').parallax("100%", 0);
    $('#fifth').parallax("100%", 0);
    $('#sixth').parallax("100%", 0);
    $('#seventh').parallax("100%", 0);
    // $('#second').parallax("100%", 0);
    // $('#third').parallax("100%", 0);
    new WOW().init();

})
window.onload = function () {
    // console.log("9");
    var html1 = '<div class="velas">'+
    '<div class="fuego"></div>'+
        '<div class="fuego"></div>'+
        '<div class="fuego"></div>'+
        '<div class="fuego"></div>'+
        '<div class="fuego"></div>'+
        '</div>';
    $("#cake").before(html1);
    var html2 = ' <div class="line1"></div>'+
        '<div class="line2"></div>';
    $(".title-happy").before(html2);
    var html3 = '<div class="line3"></div>';
    $(".title-happy").after(html3);
}
var canvas = document.getElementById('star'),
    ctx = canvas.getContext('2d');
    w = canvas.width = window.innerWidth,
    h = canvas.height = window.innerHeight,

    hue = 220,
    stars = [],
    count = 0,
    maxStars = 1200;

var canvas2 = document.createElement('canvas'),
    ctx2 = canvas2.getContext('2d');
canvas2.width = 100;
canvas2.height = 100;
var half = canvas2.width / 2,
    gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
gradient2.addColorStop(0.025, '#fff');
gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
gradient2.addColorStop(1, 'transparent');

ctx2.fillStyle = gradient2;
ctx2.beginPath();
ctx2.arc(half, half, half, 0, Math.PI * 2);
ctx2.fill();

// End cache

function random(min, max) {
    if (arguments.length < 2) {
        max = min;
        min = 0;
    }

    if (min > max) {
        var hold = max;
        max = min;
        min = hold;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function maxOrbit(x, y) {
    var max = Math.max(x, y),
        diameter = Math.round(Math.sqrt(max * max + max * max));
    return diameter / 2;
}

var Star = function() {

    this.orbitRadius = random(maxOrbit(w, h));
    this.radius = random(60, this.orbitRadius) / 12;
    this.orbitX = w / 2;
    this.orbitY = h / 2;
    this.timePassed = random(0, maxStars);
    this.speed = random(this.orbitRadius) / 900000;
    this.alpha = random(2, 10) / 10;

    count++;
    stars[count] = this;
}

Star.prototype.draw = function() {
    var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
        y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
        twinkle = random(10);

    if (twinkle === 1 && this.alpha > 0) {
        this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
        this.alpha += 0.05;
    }

    ctx.globalAlpha = this.alpha;
    ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
    this.timePassed += this.speed;
}

for (var i = 0; i < maxStars; i++) {
    new Star();
}

function animation() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = 0.8;
    ctx.fillStyle = 'hsla(' + hue + ', 64%, 2%, 1)';
    ctx.fillRect(0, 0, w, h)

    ctx.globalCompositeOperation = 'lighter';
    for (var i = 1, l = stars.length; i < l; i++) {
        stars[i].draw();
    };

    window.requestAnimationFrame(animation);
}

animation();

$(window).resize(function() {
    $("#head").height($(window).height());
    w = canvas.width = $(window).width();
    h = canvas.height = $(window).height();
});

var flagStar1 = 0;
var flagStar2 = 0;
var flagStar3 = 0;
function clickStar() {
    if(flagStar1){
        $("#star1").addClass("fa-star-o");
        $("#star1").removeClass("fa-star");
        flagStar1 = 0;
    }
    else{
        $("#star1").removeClass("fa-star-o");
        $("#star1").addClass("fa-star");
        flagStar1 = 1;
    }
    if(flagStar2){
        $("#star2").addClass("fa-star-o");
        $("#star2").removeClass("fa-star");
        flagStar2 = 0;
    }
    else{
        $("#star2").removeClass("fa-star-o");
        $("#star2").addClass("fa-star");
        flagStar2 = 1;
    }
    if(flagStar3){
        $("#star3").addClass("fa-star-o");
        $("#star3").removeClass("fa-star");
        flagStar3 = 0;
    }
    else{
        $("#star3").removeClass("fa-star-o");
        $("#star3").addClass("fa-star");
        flagStar3 = 1;
    }
}

function jumpToDisney() {
    setInterval(function () {
        window.location = "Disney.html#head";
    }, 1000);
}
function jumpToBear() {
    setInterval(function () {
        window.location = "Disney.html#head2";
    }, 1000);
}
function jumpToLine() {
    setInterval(function () {
        window.location = "Disney.html#head1";
    }, 1000);
}