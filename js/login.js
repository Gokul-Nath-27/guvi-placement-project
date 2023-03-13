
$(document).ready(function () {
    // validating form inputs ;
    $("#login_form").validate();

    $("#log_btn").click(function (e) {
        e.preventDefault()
        if (document.getElementById("login_form").checkValidity()){

        $user = $("#email").val()
        $password = $("#password").val()
        
        $.ajax({
          url: "../php/login.php",
          method: "post",
          data: $("#login_form").serialize() + "&action=login",
          success: function (response) {
            console.log(response)
            if (response != "Login Failed check your email and password !") {
              localStorage.setItem("Auth", response);
              window.location = "profile.html";
            } else {
              console.log(response)
              alert("Email and password wrong!")
            }
          },
        });
      }
      return true;
    });
  });
  