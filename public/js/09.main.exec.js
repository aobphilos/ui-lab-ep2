(function ($) {
  'use strict'

  var _window = $(window)

  /* ----------------------------------|| Wow.js Initialization ||---------------------------------------------- */

  new WOW().init()

  /* ----------------------------------|| On Scroll Method ||---------------------------------------------- */
  _window.on('scroll', function () {
    var scroll_pos = _window.scrollTop()
    if (scroll_pos >= 30) {
      $('#navigation').addClass('color_navigation')
    } else {
      $('#navigation').removeClass('color_navigation')
    }
  })

})(jQuery)
