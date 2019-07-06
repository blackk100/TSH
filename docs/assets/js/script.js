/* Debugging function used to print highlightable DOM elements to the Chrome console.
 * May work on other browsers too.
 * Usage: $(...).log()
 */
$.fn.log = function () {
  console.log.apply(console, this)
  return this
}

/* onClick event handler for links pointing to the same page.
 * Called by #go-to-top (see below) and and by navbar/footer links (via 'onclick="scrollToTop(event);"' attribute).
 */
var scrollToTop = function (evt) {
  evt.preventDefault() // Prevent default anchor click behavior.

  $('html, body').animate({
    scrollTop: 0
  }, 'slow')

  return false
}

// Functions to run after the page has loaded.
$(document).ready(function () {
  // Scrolls to top of the window upon page load.
  $('html, body').scrollTop(0)
  $('html, body').scrollLeft(0)

  // Adds the top-level class to all 1st children of <body>.
  $('body').children().each(function () {
    $(this).addClass('top-level')
  })

  // Sets up Jarallax (parallax scrolling effect on images).
  $('.jarallax').jarallax({
    speed: 0.4
  })

  // Dropdowns open when hovered upon.
  $('.dropdown').each(function () {
    $(this).hover(function () {
      $(this).addClass('show')
      $(this).find('.dropdown-menu').addClass('show')
    }, function () {
      $(this).removeClass('show')
      $(this).find('.dropdown-menu').removeClass('show')
    })
  })

  /* All buttons/elements containing icons that are supposed to have a "fade" animation.
   * They have 50% opacity initially.
   * Opacity is increased to 100% when hovered upon.
   * Opacity is reduced to 50% when the pointer is removed.
   */
  $('.fadey-button').each(function () {
    $(this).find('i').each(function () {
      $(this).fadeTo(1, 0.5)

      $(this).hover(function () {
        $(this).fadeTo('fast', 1)
      }, function () {
        $(this).fadeTo('fast', 0.5)
      })
    })
  })

  // Colour fading for the buttons. More may be added later.
  $('.btn-main').each(function () {
    $(this).hover(function () {
      $(this).animate({
        backgroundColor: '#149DCC'
      }, 'fast')
    }, function () {
      $(this).animate({
        backgroundColor: 'rgba(0, 0, 0, 0)'
      }, 'fast')
    })
  })

  $('.btn-dark').each(function () {
    $(this).hover(function () {
      $(this).animate({
        color: '#FFFFFF',
        backgroundColor: '#149DCC'
      }, 'fast')
    }, function () {
      $(this).animate({
        color: '#149DCC',
        backgroundColor: 'rgba(0, 0, 0, 0)'
      }, 'fast')
    })
  })

  // Animated scrolling to the next "main" element.
  $('.scroll-below').click(function (event) {
    event.preventDefault() // Prevent default anchor click behavior.

    $('html, body').animate({
      // Subtracting the navbar's height cause otherwise the contents are covered by the navbar.
      scrollTop: $(this).parents('.top-level').next().offset().top - $('nav').height()
    }, 'slow')

    $()

    return false
  })

  // Hide the Scroll to Top button iitially.
  $('#scroll-to-top').hide()

  // Show the Scroll to Top button if the window isn't already at the top.
  $(window).scroll(function () {
    if ($(window).scrollTop() !== 0) {
      $('#scroll-to-top').show('fast')
    } else {
      $('#scroll-to-top').hide('fast')
    }
  })

  // Animated scrolling to the top of the page when the Scroll to Top button is clicked.
  $('#scroll-to-top').click(function (event) {
    scrollToTop(event)
  })
})
