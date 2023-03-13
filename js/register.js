$(document).ready(function() {
    $("#register-form").submit(function(event) {
        event.preventDefault();
    });

    $(".submit_btn").click(function() {
        // Get form input values
        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();
        var cpassword = $("#cpassword").val();
        console.log(username, email, password)

        // Validate form input values
        var error_message = "";
        if (username.trim() == "") {
            error_message += "<p>Please enter your first name.</p>";
        }

        if (email.trim() == "") {
            error_message += "<p>Please enter your email address.</p>";
        } else {
            var email_regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email_regex.test(email.trim())) {
                error_message += "<p>Please enter a valid email address.</p>";
            }
        }
        if (password.trim() == "") {
            error_message += "<p>Please enter a password.</p>";
        } else if (password.length < 8) {
            error_message += "<p>Your password must be at least 8 characters long.</p>";
        }
        if (cpassword.trim() == "") {
            error_message += "<p>Please confirm your password.</p>";
        } else if (cpassword != password) {
            error_message += "<p>Your passwords do not match.</p>";
        }

        if (error_message != "") {
            $("#error-message").html(error_message);
        } else {
            $.ajax({
                type: "POST",
                url: "../php/register.php",
                data: {
                    username: username,
                    email: email,
                    password: password
                },
                success: function(response) {
                    alert('Registered Successfully')
                    window.location.href = 'login.html'
                },
                error: function(response) {
                    alert('Failed')
                }
            });
        }
    });
});


