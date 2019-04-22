// Validate Feedback
  var btnFeedback = document.forms['feedback-form']['btnFeedback'];
      btnFeedback.onclick = function () {
      if(validateFeedback()){
          alert('Thank you for your Feedback!');
          window.location.href = "/homepage";
        }
      };

      function validateFeedback() {
        var isValid = true;
        var isValidName = true;
        var isValidEmail = true;

        var txtName = document.forms['feedback-form']['name'];
        if (txtName.value == null || txtName.value.length == 0) {
            isValidName = false;
        }
        var txtEmail = document.forms['feedback-form']['email'];
		    var atposition = txtEmail.value.indexOf("@");
        if (atposition < 1 || (atposition + 1)>= txtEmail.value.length ) {
            isValidEmail = false;
        }
        isValid = isValidName && isValidEmail;
        return isValid;
		}
