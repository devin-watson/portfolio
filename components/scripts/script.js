$(function(){
    "use strict";

    var height = $(window).height();
    $(".full-height").css("height", height);
    $(window).resize(function(){
      var height = $(window).height();
      $(".full-height").css("height", height);
    });
});