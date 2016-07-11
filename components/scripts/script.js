$(function(){

  "use strict";

    var topoffset = 50;      

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
//h1 disappear
    var wHeight = $(window).height();

    if(wHeight < 500) {
    $(".content-wrapper h1").text(" ");
    }
    $(window).resize(function(){
      var wHeight = $(window).height();
      if(wHeight < 500) {
    $(".content-wrapper h1").text(" ");

    } else{
      $(".content-wrapper h1").text("devin watson");

    }
    });

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
