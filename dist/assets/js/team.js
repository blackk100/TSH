$(document).ready(function () {
  $('.social-link').each(function () {
    $(this).children(':first').fadeTo(1, 0.5)
  })
  $('.social-link').hover(
    function () {
      $(this).children(':first').fadeTo('fast', 1)
    }, function () {
      $(this).children(':first').fadeTo('fast', 0.5)
    }
  )
})
