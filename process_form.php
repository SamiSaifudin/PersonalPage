<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $email = $_POST["email"];
        $emailSubject = $_POST["emailSubject"];
        $message = $_POST["message"];

        // Build the email message
        $to = ""; // Replace with your actual email address
        $subject = $emailSubject;
        $headers = "From: $email\r\n";
        $headers .= "Reply-To: $email\r\n";
        $messageBody = "Email: $email\n\n$message";

        // Send the email
        mail($to, $subject, $messageBody, $headers);
        exit();
    }
?>

