// Debugging function used to print highlightable DOM elements to the Chrome console.
// Usage: $(...).log()
$.fn.log = function () {
  console.log.apply(console, this)
  return this
}

// Functions to run after the page has loaded.
$(document).ready(function () {
  window.scrollTo(0, 0) // Scrolls to top of the window upon page load

  // All social media links are reduced to 50% opacity on page load
  $('.social-link').each(function () {
    $(this).children('a').fadeTo(1, 0.5)
  })

  // Dropdowns open when hovered upon.
  $('.dropdown').hover(function () {
    $(this).addClass('show')
    $(this).find('.dropdown-menu').addClass('show')
  }, function () {
    $(this).removeClass('show')
    $(this).find('.dropdown-menu').removeClass('show')
  })

  // Animated scrolling within the page
  $('a').click(function (event) {
    var hash = this.hash // The '#xyz' part of the href

    if (hash !== '') { // If hash has a value, scroll to that location
      event.preventDefault() // Prevent default anchor click behavior
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function () {
        window.location.hash = hash // Add hash (#) to URL when done scrolling (for emulating default click behavior)
      })
    } else if (this.attr('id') === 'scrollToTop') { // Else, scroll to Top if its the scrollToTop button
      event.preventDefault() // Prevent default anchor click behavior
      $('html, body').animate({
        scrollTop: 0
      }, 1000, function () {
        window.location.hash = hash // Add hash (#) to URL when done scrolling (for emulating default click behavior)
      })
    }
  })

  // All social media links are animated to have 100% opacity when hovered upon.
  // Opacity is reduced to 50% when the pointer is removed.
  $('.social-link').hover(
    function () {
      $(this).children('a').fadeTo('fast', 1)
    }, function () {
      $(this).children('a').fadeTo('fast', 0.5)
    }
  )
})
