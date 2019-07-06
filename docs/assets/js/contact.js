// Script that is run for the contact form
$(document).ready(function () {
  // Colour fading for the buttons. More may be added later.
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

  vex.defaultOptions.className = 'vex-theme-default' // Initialises vex.js (for fancy alerts)

  emailjs.init('user_gWyGwhhTYkdkYmjhj52AZ') // Initialises the email.js client

  $('#contact-form > form').submit(function (event) { // What to do when the form is submitted
    event.preventDefault() // Prevent default click behaviour

    var userName = $('#user_name').val() === undefined ? '' : $('#user_name').val().trim()
    var userEmail = $('#user_email').val() === undefined ? '' : $('#user_email').val().trim()
    var message = $('#message').val() === undefined ? '' : $('#message').val().trim()
    var emailRegex = new RegExp('[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}', 'i')
    var templateParams = { 'user_name': userName, 'user_email': userEmail, 'message': message }

    if (userName === '') { // No name entered
      vex.dialog.alert('Please enter a name!')
    } else if (userEmail === '') { // No email entered
      vex.dialog.alert('Please enter an email!')
    } else if (userEmail.match(emailRegex) == null) { // Email isn't valid
      vex.dialog.alert({ unsafeMessage: 'The email you entered appears to be invalid.<br />If you believe this is a mistake, please manually email us.' })
    } else if (message === '') { // No message entered
      vex.dialog.alert('Please enter a message!')
    } else { // Form valid. Send the email.
      emailjs.send('default_service', 'contact_form', templateParams).then(function (response) { // Alert to show when submit was successful
        console.log('SUCCESS. status=%d, text=%s', response.status, response.text)
        vex.dialog.alert('Your message has been successfully delivered!')
      }, function (error) { // Alert to show when the submit failed successfully
        console.log('FAILED. error=', error)
        vex.dialog.alert({ unsafeMessage: 'An error occurred!<br />Kindly manually email us your message (and preferably this error as well) instead.<br /><br />ERROR CODE: ' + error.status + '<br />ERROR TEXT: ' + error.text })
      })
    }
  })
})
