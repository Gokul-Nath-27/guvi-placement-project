<?php
// Check if the form has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Get the input data
    $name = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $conn = new mysqli('localhost', 'root', '', 'data');
    if (!$conn) {
        die('Error: Could not connect to database.');
    }   
    // Prepare the SQL statement with placeholders
    $stmt = $conn->prepare("insert into users (name, email, password) values ('$name', '$email', '$password')");

    if ($stmt->execute()) {
        $response = array('success' => true);
    } else {
        $response = array('success' => false, 'message' => 'Error inserting data into database.');
    }

    $stmt->close();
    $conn->close();
}
?>
