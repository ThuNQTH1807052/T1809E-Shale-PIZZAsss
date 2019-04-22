//Validate Contact
    var btnContact = document.forms['contact-form']['btnContact'];
    btnContact.onclick = function () {
    if(validateContact()){
        alert('Your message have been sent successfully!');
        window.location.href = "/homepage";
      }
    };

    function validateContact() {
      var isValid = true;
      var isValidName = true;
      var isValidEmail = true;
      var isValidSubject = true;

      var txtName = document.forms['contact-form']['name'];
      if (txtName.value == null || txtName.value.length == 0) {
          isValidName = false;
      }
      var txtEmail = document.forms['contact-form']['email'];
      if (txtEmail.value == null || txtEmail.value.length == 0) {
          isValidEmail = false;
      }
      var txtSubject = document.forms['contact-form']['subject'];
      if (txtSubject.value == null || txtSubject.value.length == 0) {
          isValidSubject = false;
      }

      isValid = isValidName && isValidEmail && isValidSubject;
      return isValid;
    }
