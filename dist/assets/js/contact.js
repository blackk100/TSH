(function() {
  emailjs.init("user_gWyGwhhTYkdkYmjhj52AZ");
})();
window.onload = function() {
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    emailjs.sendForm("default_service", "contact_form", this)
      .then(function(response) {
        console.log("SUCCESS. status=%d, text=%s", response.status, response.text);
        alert("Your message has been successfully delivered!")
      }, function(err) {
        console.log("FAILED. error=", err);
        alert("An error occurred!\r\nKindly manually email us your message (and preferably this error as well) instead.\r\n\r\nERROR: " + err.name + "\r\nERROR MESSAGE: " + err.message)
      });
  });
}
