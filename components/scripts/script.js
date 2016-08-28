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
    var $social = $("#social-nav li img");
    var $landscape = $(".landscape");
    var $sidebar = $(".sidebar");

    if($wHeight > 600) {
      $toggleButton.css("display", "block");
      $toggleX.css("display", "block");
      $social.css("visibility", "visible");
      $landscape.css("display", "none");
      $sidebar.css("display", "block");
    } else {
      $toggleButton.css("display", "none");
      $toggleX.css("display", "none");
      $landscape.css("display", "block");
      $social.css("visibility", "hidden");
      $sidebar.css("display", "none");
    }//else

    $(window).resize(function(){
      var $wHeight = $(window).height();
      var $toggleButton = $(".toggle");
      var $toggleX = $(".toggleX");
      var $social = $("#social-nav li img");
      var $landscape = $(".landscape");
      var $sidebar = $(".sidebar");

      if($wHeight > 600) {
        $toggleButton.css("display", "block");
        $toggleX.css("display", "block");
        $social.css("visibility", "visible");
        $landscape.css("display", "none");
        $sidebar.css("display", "block");
      } else {
        $toggleButton.css("display", "none");
        $toggleX.css("display", "none");
        $landscape.css("display", "block");
        $social.css("visibility", "hidden");
        $sidebar.css("display", "none");
      }//else
    }); //landscape navigation

  });//document load
$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});
$(document).bind('scroll',function(e){
    $('section').each(function(){
        if (
           $(this).offset().top < window.pageYOffset + 10
//begins before top
        && $(this).offset().top + $(this).height() > window.pageYOffset + 10
//but ends in visible area
//+ 10 allows you to change hash before it hits the top border
        ) {
            window.location.hash = $(this).attr('id');
        }
    });
});
function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.sidebar a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('.sidebar ul li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}
