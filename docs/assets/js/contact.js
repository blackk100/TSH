// Script that is run for the contact form
$(document).ready(function () {
  vex.defaultOptions.className = 'vex-theme-default' // Initialises vex.js (for fancy alerts)

  emailjs.init('user_gWyGwhhTYkdkYmjhj52AZ') // Initialises the email.js client

  $('#contact-form').submit(function (event) { // What to do when the form is submitted
    event.preventDefault() // Prevent default click behaviour

    // Send the form data to email.js servers
    emailjs.sendForm('default_service', 'contact_form', {
      'user_name': $('#user_name').val(),
      'user_email': $('#user_email').val(),
      'message': $('#message').val()
    }).then(function (response) { // Alert to show when submit was successful
      console.log('SUCCESS. status=%d, text=%s', response.status, response.text)
      vex.dialog.alert('Your message has been successfully delivered!')
    }, function (err) { // Alert to show when the submit failed successfully
      console.log('FAILED. error=', err)
      vex.dialog.alert('An error occurred!\r\nKindly manually email us your message (and preferably this error as well) instead.\r\n\r\nERROR: ' + err.name + '\r\nERROR MESSAGE: ' + err.message)
    })
  })
})
