//Validate Login
    var btnLogin = document.forms['login-form']['btnLogin'];
    btnLogin.onclick = function () {
    if(validateLogin()){
        alert('Login successfully!');
        window.location.href = "/homepage";
      }
    };

    function validateLogin() {
      var isValidLogin = true;
      var isValidEmailLogin = true;
      var isValidPasswordLogin = true;

      var txtEmailLogin = document.forms['login-form']['email'];
      if (txtEmailLogin.value == null || txtEmailLogin.value.length == 0) {
          isValidEmailLogin = false;
      }
      var txtPasswordLogin = document.forms['login-form']['password'];
      if (txtPasswordLogin.value == null || txtPasswordLogin.value.length == 0) {
          isValidPasswordLogin = false;
      }

      isValidLogin = isValidEmailLogin && isValidPasswordLogin;
      return isValidLogin;
    }

    //Validate Register
        var btnRegister = document.forms['register-form']['btnRegister'];
        btnRegister.onclick = function () {
        if(validateRegister()){
            alert('Register successfully!');
            window.location.href = "/homepage";
          }
        };

        function validateRegister() {
          var isValidRegister = true;
          var isValidEmailRegister = true;
          var isValidPasswordRegister = true;
          var isValidRePasswordRegister = true;
          var isValidPhoneRegister = true;

          var txtEmailRegister = document.forms['register-form']['email'];
          if (txtEmailRegister.value == null || txtEmailRegister.value.length == 0) {
              isValidEmailRegister = false;
          }
          var txtPasswordRegister = document.forms['register-form']['password'];
          if (txtPasswordRegister.value == null || txtPasswordRegister.value.length == 0) {
              isValidPasswordRegister = false;
          }
          var txtRePasswordRegister = document.forms['register-form']['re-password'];
          if (txtRePasswordRegister.value == null || txtRePasswordRegister.value.length == 0) {
              isValidRePasswordRegister = false;
          }
          var txtPhoneRegister = document.forms['register-form']['re-password'];
          if (txtPhoneRegister.value == null || txtPhoneRegister.value.length == 0) {
              isValidPhoneRegister = false;
          }

          isValidLogin = isValidEmailLogin && isValidEmailLogin && isValidRePasswordRegister && isValidPhoneRegister;
          return isValidRegister;
        }
