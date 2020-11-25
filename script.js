$(document).ready(function () {
    var $link = $("a");
    var $click = $('.click');
    
    $link.click(function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var target = $(id).offset().top - 90;
        $('html,body').animate({
            scrollTop: target
        }, 500);
    });
 
    $(window).scroll(function () {
        var scroll = $(this).scrollTop();
        $link.each(function () {
            var attr = $(this).attr('href');
            var selector =$(attr).offset().top - 100;
            if(scroll >=selector) {
                $link.removeClass("turnon");
                $(this).addClass('turnon');
            };
        });
    });
    
     $('.prog').on('click',function () {
        $(this).next().addClass('active');
        $('.fa-times-circle').on('click',function () {
            $($click).removeClass('active');
        });
    }); 
    
    let options = {
        startAngle: -1.55,
        size: 210,
        value: 0.80,
        fill: {gradient: ['#AF8CDD', '#72D2E3']}
      }
      $(".circle .bar").circleProgress(options).on('circle-animation-progress',
      function(event, progress, stepValue){
        $(this).parent().find("span").text(String(stepValue.toFixed(2).substr(2)) + "%");
      });
      $(".dc .bar").circleProgress({
        value: 0.80
      });
      $(".copywritting .bar").circleProgress({
        value: 0.01
      });
      $(".education .bar").circleProgress({
        value: 0.20
      });
      $(".vm .bar").circleProgress({
        value: 0.01
      });
      $(".uu .bar").circleProgress({
        value: 0.30
      });
      $(".smm .bar").circleProgress({
        value: 0.01
      });
      
});
