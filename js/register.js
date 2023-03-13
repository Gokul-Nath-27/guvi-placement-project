$(document).ready(function() {
    // Prevent form submission on button click
    $("#register-form").submit(function(event) {
        event.preventDefault();
    });

    // Handle form submission on continue button click
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
        // if (lastname.trim() == "") {
        //     error_message += "<p>Please enter your last name.</p>";
        // }
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

        // Display error message if there are any errors
        if (error_message != "") {
            $("#error-message").html(error_message);
        } else {
            // Send form data to server using AJAX
            $.ajax({
                type: "POST",
                url: "../php/register.php",
                data: {
                    username: username,
                    email: email,
                    password: password
                },
                success: function(response) {
                    console.log("sucess");
                },
                error: function(xhr, status , error) {
                    
                    console.log(xhr.responseText);
                }
            });
        }
    });
});


