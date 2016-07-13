$(function(){

  "use strict";

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
  
});//document load
