(function(window, document, $, Click, Scroll) {
  'use strict';

  //click events
  Click.scroller();
  Click.slides();
  Click.faq();

  //scroll events
  $(window).scroll(
    function () {
      Scroll.fadeIn();
    });

}(window, document, window.jQuery, Click(), Scroll() ));
