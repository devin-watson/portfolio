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
  
    var $quote = $(".skills-dots"),
    mySplitText = new SplitText($quote, {type:"words"}),
    splitTextTimeline = new TimelineLite();

TweenLite.set($quote, {perspective:400});

//kill any animations and set text back to its pre-split state
function kill(){
  splitTextTimeline.clear().time(0);
  mySplitText.revert();
}
$("#charsWordsLines").click(function() {
  kill();
  mySplitText.split({type:"chars, words, lines"}) 
  splitTextTimeline.staggerFrom(mySplitText.chars, 0.2, {autoAlpha:0, scale:4, force3D:true}, 0.01, 0.5)
    .staggerTo(mySplitText.words, 0.1, {color:"#8FE402", scale:0.9}, 0.1, "words")
    .staggerTo(mySplitText.words, 0.2, {color:"white", scale:1}, 0.1, "words+=0.1")
    .staggerTo(mySplitText.lines, 0.5, {x:100, autoAlpha:0}, 0.2) 
});
});//document load
