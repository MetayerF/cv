$(function(){
    $('.list li:first-child').click(function(){
       window.setTimeout(function() {
           $('.profile').slideToggle();
                }, 300);
    });
    $('.list li:nth-child(2)').click(function(){
       window.setTimeout(function(){
      $('.trivia').slideToggle();
          },300);
    });
    $('.list li:nth-child(3)').click(function(){
       window.setTimeout(function(){
      $('.movies').slideToggle();
          },300);
    });
    $('.list li:nth-child(4)').click(function(){
       window.setTimeout(function(){
      $('.awards').slideToggle();
        }, 300);
    });
    $('.list li:nth-child(5)').click(function(){
       window.setTimeout(function(){
      $('.quotes').slideToggle();
        }, 300);
    });
    $('.btn-close').click(function(){
      $('.list-content').hide(300);
    });
  });

// Produces width of .barChart
$(document).ready(function() {
  $('.graph-bar').each(function() {
     var dataWidth = $(this).data('value');
     $(this).css("width", dataWidth + "%");
  });
});

// Positioning of .bubbleChart
$(document).ready(function() {
  $('.chart-bubble').each(function() {
    // Bubble Size
    var bubbleSize = $(this).data('value');
    $(this).css("width", function() {
      return (bubbleSize * 10) + "px"
    });
    $(this).css("height", function() {
      return (bubbleSize * 10) + "px"
    });

    // Bubble Position
    var posX = $(this).data('x');
    var posY = $(this).data('y');
    $(this).css("left", function() {
      return posX - (bubbleSize * 0.5) + "%"
    });
    $(this).css("bottom", function() {
      return posY - (bubbleSize * 0.5) + "%"
    });
  });
});
