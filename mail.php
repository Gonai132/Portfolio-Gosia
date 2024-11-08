<?php

$name = $_POST["name"];
$from = $_POST["email"];
$subject = "Wiadomość z formularza ze strony Portfolio Gosia";
$to = "kontakt@portfolio-gosia.pl";
$message = $_POST["msg"];

$txt = "Imię: " . $name . "\r\n" . "Email: " . $from . "\r\n" . "\r\n" . "Treść: " . $message;

$headers = "From: " . $to . "\r\n";
$headers .= "Reply-To: " . $from . "\r\n";

$mail_status = mail($to, $subject, $txt, $headers);

if ($mail_status) {
    header("Location: /index.html?mail_status=sent#scrollContact");
} else {
    header("Location: /index.html?mail_status=error#scrollContact");
}