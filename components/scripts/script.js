$(function() {
    Pace.on("hide", function(){
        $(".wrapper").fadeIn(1000);
    });
});

$(function(){

  "use strict";

    var height = $(window).height();
    $(".full-height").css("height", height);

    $(window).resize(function(){
      var height = $(window).height();
      $(".full-height").css("height", height);
    });
	

//Landscape navigation
    var $wHeight = $(window).height();
    var $toggleButton = $(".toggle");
    var $toggleX = $(".toggleX");
    var $sideSocial = $("#sidebar-social li img");
    var $social = $("#social-nav li img");
    var $landscape = $(".landscape");
    var $sidebar = $(".sidebar");

    if($wHeight < 600) {
      $toggleButton.css("display", "none");
      $toggleX.css("display", "none");
      $landscape.css("display", "block");
      $social.css("visibility", "hidden");
      $sidebar.css("display", "none");
      $sideSocial.css("visibility", "hidden");
    } else {
      $toggleButton.css("display", "block");
      $toggleX.css("display", "block");
      $social.css("visibility", "visible");
      $sideSocial.css("visibility", "visible");
      $landscape.css("display", "none");
      $sidebar.css("display", "block");
    }//else

    $(window).resize(function(){
      var $wHeight = $(window).height();
      var $toggleButton = $(".toggle");
      var $toggleX = $(".toggleX");
      var $sideSocial = $("#sidebar-social li img");
      var $social = $("#social-nav li img");
      var $landscape = $(".landscape");
      var $sidebar = $(".sidebar");

      if($wHeight < 600) {
        $toggleButton.css("display", "none");
        $toggleX.css("display", "none");
        $landscape.css("display", "block");
        $social.css("visibility", "hidden");
        $sidebar.css("display", "none");
        $sideSocial.css("visibility", "hidden");
      } else {
        $toggleButton.css("display", "block");
        $toggleX.css("display", "block");
        $social.css("visibility", "visible");
        $sideSocial.css("visibility", "visible");
        $landscape.css("display", "none");
        $sidebar.css("display", "block");
      }//else
    }); //landscape navigation
    
//smooth scroll
    $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
   
  });//document load
