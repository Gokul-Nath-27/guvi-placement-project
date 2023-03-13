<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Getting the input data
    $name = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $conn = new mysqli('localhost', 'root', '', 'registration');
    if (!$conn) {
        die('Error: Could not connect to database.');
    }   

    $stmt = $conn->prepare("insert into users (username, email, password) values ('$name', '$email', '$password')");

    if ($stmt->execute()) {
        $response = array('success' => true);
    } else {
        $response = array('success' => false, 'message' => 'Error inserting data into database.');
    }
    $stmt->close();
    $conn->close();
}
?>
