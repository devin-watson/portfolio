$(function(){

  "use strict";

    var topoffset = 50;
    var isTouch = 'ontouchstart' in document.documentElement;   
      

    var height = $(window).height();
    $(".full-height").css("height", height);

    $(window).resize(function(){
      var height = $(window).height();
      $(".full-height").css("height", height);
    });
 

 //Sidebar Links   
    var sbHeight = $(".sidebar").height();

    if(sbHeight < 500) {
		$(".sidebar .social").css("display", "none");
    }
    $(window).resize(function(){
      var sbHeight = $(".sidebar").height();
      if(sbHeight < 500) {
		$(".sidebar .social").css("display", "none");
    } else{
    	$(".sidebar .social").css("display", "table-cell");
    }
    });

    //Canvas
    var headName =  $(".text-group h1");
   headName.one("mouseenter", function(){

    var ctx = document.getElementById("handwriting").getContext("2d"),
    dashLen = 220, dashOffset = dashLen, speed = 5,
    txt = "ME", x = 50, i = 0;

ctx.font = "40px Comic Sans MS, cursive, TSCu_Comic, sans-serif"; 
ctx.lineWidth = 5; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
ctx.strokeStyle = ctx.fillStyle = "#B60059";
ctx.textBaseline = "top";

(function loop() {
  ctx.clearRect(x, 0, 60, 150);
  ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
  dashOffset -= speed;                                         // reduce dash length
  ctx.strokeText(txt[i], x, 90);                               // stroke letter

  if (dashOffset > 0) requestAnimationFrame(loop);             // animate
  else {
    ctx.fillText(txt[i], x, 90);                               // fill final letter
    dashOffset = dashLen;                                      // prep next char
    x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
    ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
    ctx.rotate(Math.random() * 0.01);                         // random rotation
    if (i < txt.length) requestAnimationFrame(loop);
  }
})();
    });//headname
   headName.one("mouseenter", function(){

    var ctx = document.getElementById("arrow").getContext("2d"),
    dashLen = 220, dashOffset = dashLen, speed = 2,
    txt = "⤵", x = 150, i = 0;

ctx.font = "50px Comic Sans MS, cursive, TSCu_Comic, sans-serif"; 
ctx.lineWidth = 4; ctx.lineJoin = "round"; ctx.globalAlpha = 2/3;
ctx.strokeStyle = ctx.fillStyle = "#B60059";
ctx.textBaseline = "top";

(function loop() {
  ctx.clearRect(x, 0, 60, 150);
  ctx.setLineDash([dashLen - dashOffset, dashOffset - speed]); // create a long dash mask
  dashOffset -= speed;                                         // reduce dash length
  ctx.strokeText(txt[i], x, 90);                               // stroke letter

  if (dashOffset > 0) requestAnimationFrame(loop);             // animate
  else {
    ctx.fillText(txt[i], x, 90);                               // fill final letter
    dashOffset = dashLen;                                      // prep next char
    x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
    ctx.setTransform(1, 0, 0, 1, 0, 3 * Math.random());        // random y-delta
    ctx.rotate(Math.random() * 0.005);                         // random rotation
    if (i < txt.length) requestAnimationFrame(loop);
  }
})();
    });//headname

// Animated Scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 1000);
        return false;
      } // target.length
    } //location hostname
  }); //on click

//menu highlight
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop() + topoffset;
    $('nav li a').removeClass('active');

    if (windowpos > $('#about').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#about"]').addClass('active');
    } //windowpos

    if (windowpos > $('#previous-work').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#previous-work"]').addClass('active');
    } //windowpos

    if (windowpos > $('#skills').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#skills"]').addClass('active');
    } //windowpos

    if (windowpos > $('#contact').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#contact"]').addClass('active');
    } //windowpos

  }); //window scroll


});//document load
