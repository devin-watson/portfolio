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


// //intro image resize

//     var window_height = $(window).height();
//     var window_width = $(window).width();
//     var divided = window_height / window_width;
//     var skew_value = divided.val();

//     $(".intro-image").css({
//       "transform": "skewX(-" + skew_value + ")",
//       "-webkit-transform" : "skewX(-" + skew_value + ")", 
//       "-ms-transform":"skewX(-" + skew_value + ")"
//     });
//       $(".intro-image img").css({
//       "transform": "skewX(" + skew_value + ")",
//       "-webkit-transform" : "skewX(" + skew_value + ")", 
//       "-ms-transform":"skewX(" + skew_value + ")"
//     });

//     $(window).resize(function(){
//       var window_height = $(window).height();
//       var window_width = $(window).width();
//       var divided = window_height / window_width;
//       var skew_value = divided.val();

//       $(".intro-image").css({
//       "transform": "skewX(-" + skew_value + ")",
//       "-webkit-transform" : "skewX(-" + skew_value + ")", 
//       "-ms-transform":"skewX(-" + skew_value + ")"
//     });

//       $(".intro-image img").css({
//       "transform": "skewX(" + skew_value + ")",
//       "-webkit-transform" : "skewX(" + skew_value + ")", 
//       "-ms-transform":"skewX(" + skew_value + ")"
//     });


});//document load
