// Variables
var audio = $("#mysound")[0];
var hoverTimeout;
var hoverTimeout2;
var hoverTimeout3;


// Functions

// Play music when hovering over title
$("#festival_title").click(function() {
  audio.play();
});

// Fade on scroll
// $("body").scroll(function(){
//  	  $("#warp").addClass("darker");
// });

$("#about").hover(function() {
    clearTimeout(hoverTimeout);
    $(this).addClass("animate1");
}, function() {
    var $self = $(this);
    hoverTimeout = setTimeout(function() {
        $self.removeClass("animate1");
    }, 1000);
});

$("#schedule").hover(function() {
    clearTimeout(hoverTimeout2);
    $(this).addClass("animate2");
}, function() {
    var $self = $(this);
    hoverTimeout2 = setTimeout(function() {
        $self.removeClass("animate2");
    }, 1000);
});

$("#venues").hover(function() {
    clearTimeout(hoverTimeout3);
    $(this).addClass("animate2");
}, function() {
    var $self = $(this);
    hoverTimeout3 = setTimeout(function() {
        $self.removeClass("animate2");
    }, 1000);
});