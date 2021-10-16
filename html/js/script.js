$(document).ready(function() {


    // Intro
    // $(function() {
    //     $("body, html").css({ 'overflow': "hidden", height: '100%' })
    //     setTimeout(function() {
    //         $("body, html").css({ overflow: 'auto', 'overflow-x': 'hidden', height: 'auto' })
    //     }, 8500)

    //     $("#catch")
    //     .css({"background-image": "linear-gradient(to bottom, rgb(255, 255, 255), rgb(0, 0, 255, 0.2))"})
    //     .delay(6500)
    //     .fadeOut(1500)

    //     $("#line1")
    //     .delay(1000)
    //     .css({opacity: 0, "display": "block"})
    //     .animate({opacity:1}, 1500);

    //     $("#line2")
    //     .delay(2500)
    //     .css({opacity: 0, "display": "block"})
    //     .animate({opacity:1}, 1500);

    //     $("#line3")
    //     .delay(4500)
    //     .css({opacity: 0, "display": "block"})
    //     .animate({opacity:1}, 1500);

    //     $("#main")
    //     .delay(8500)
    //     .css({ opacity: 0.0, visibility: "visible" })
    //     .animate({ opacity: 1.0 }, 1000)
    // });

    // background change
    $(window).scroll(function() {
        // selectors
        var $window = $(window),
            $body = $('body'),
            $panel = $('.panel');
        // Change 33% earlier than scroll position so colour is there when you arrive.
        var scroll = $window.scrollTop() + ($window.height() / 3);
        $panel.each(function () {
          var $this = $(this);
          if ($this.position().top <= scroll) {
            // Remove all classes on body with color-
            $body.removeClass(function (index, css) {
              return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
            });
            // Add class of currently active div
            $body.addClass('color-' + $(this).data('color'));
          }
        });    
        
      }).scroll();
    
      // member pop up
      $popup = $('.popup');
      $(document).mousemove(function(){
        $popup.each(function() {
          var $this = $(this)
          var to_pop = "#" + $this.data('name');
          var $to_pop = $(to_pop)
          $this.hover(function(){
            $to_pop.fadeIn(300);
          }, function() {
            $to_pop.fadeOut(300)
          })
        })
      })
      // setInterval(function(){
        
      // }, 200)
      
});