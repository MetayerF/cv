$(function(){
    $('.list li:first-child').click(function(){
       window.setTimeout(function() {
           $('.profil').slideToggle();
                }, 300);
    });
    $('.list li:nth-child(2)').click(function(){
       window.setTimeout(function(){
      $('.expro').slideToggle();
          },300);
    });
    $('.list li:nth-child(3)').click(function(){
       window.setTimeout(function(){
      $('.formation').slideToggle();
          },300);
    });
    $('.list li:nth-child(4)').click(function(){
       window.setTimeout(function(){
      $('.competence').slideToggle();
        }, 300);
    });
    $('.list li:nth-child(5)').click(function(){
       window.setTimeout(function(){
      $('.outils').slideToggle();
        }, 300);
    });
    $('.list li:nth-child(6)').click(function(){
       window.setTimeout(function(){
      $('.interet').slideToggle();
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

// STAT CIRCLE //////////////////////////////////////////////

// ===================
// ===================
// Tooltip display:
// ===================
// ===================
var tooltiptext;
$(".tooltip").mouseenter(function(){
  // Get elements:
  var thisStat = $(this);
  var thisTooltip = thisStat.find(".tooltiptext");
  var thisTooltipInner = thisTooltip.find("span");
  // Get data attributes:
  var dataPercentage = thisStat.attr("data-stat");
  var dataSoftware = thisStat.attr("data-soft");
  var dataColor = thisStat.attr("data-color");
  // Rewrite tooltip:
  thisTooltipInner.text(dataSoftware + " " + dataPercentage + "%");
  thisTooltip.css({"background":dataColor, "color":dataColor});
});


// ===================
// ===================
// Stat Trigger:
// ===================
// ===================
//Get Stroke Path length:
var path = document.querySelector('.stat-path');
var dashLength = path.getTotalLength();
//Set Stat Path: Initial styles:
$('.stat-path').css({
  "stroke-dasharray": dashLength,
  "stroke-dashoffset": dashLength
});

//Stats Handler:
$(document).mouseenter(function(){
  triggerStats();
});

function triggerStats(){
  //Add transition:
  $(".stat-path").css({"transition": "ease 2s"});
  //Loop items:
  $(".stat-item").each(function(){
    //This item select:
    var thisStat = $(this);
    var thisPath = $(this).find("svg .stat-path");
    //Get this Stat Item data percentage attribute:
    var dataPercentage = thisStat.attr("data-stat");
    //Convert "dataPercentage" to absolute length:
    var statLength = (dataPercentage/100) * dashLength;
    //Set Stat Path (new styles):
    thisPath.css({
      "stroke-dasharray": dashLength,
      "stroke-dashoffset": (dashLength - statLength)
    });
  });
};

//  TEXT ANIMATION //////////////////////////////////////////////////:


