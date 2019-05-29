// Debugging function used to print highlightable DOM elements to the Chrome console. Usage: $(...).log()
$.fn.log = function () {
  console.log.apply(console, this)
  return this
}

$(document).ready(function () {
  window.scrollTo(0, 0)

  /* This section isn't being used cause it conflicts with animate.min.css functionality for the social icons in the footers.
  $('.soc-item').each(function () {
    $(this).children('a').fadeTo(1, 0.5)
  })

  $('.soc-item').hover(
    function () {
      $(this).children('a').fadeTo('fast', 1)
    }, function () {
      $(this).children('a').fadeTo('fast', 0.5)
    }
  )
  */
})
