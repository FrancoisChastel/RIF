<?php
if (isset($_POST['submit'])) {

  // Form variables
  $name = $_POST['name'];
  $firstname = $_POST['firstname'];
  $email = $_POST['email'];
  $company = $_POST['company'];
  $message = $_POST['message'];

  // Mail variables
  $subject = "Mail de ".$name;
  $ToEmail = 'olivier.vicente@insa-lyon.fr';
  $mailheader = "From: ".$email."\r\n";
  $mailheader .= "Reply-To: ".$email."\r\n";
  $mailheader .= "Reply-To: MIME-Version: 1.0\r\n";
  $mailheader .= "Content-type: text/html; charset=iso-8859-1\r\n";
  $MESSAGE_BODY = "Name: ".$name." ".$firstname." (".$company.")"."<br>";
  $MESSAGE_BODY .= "Email: ".$email."<br>";
  $MESSAGE_BODY .= "Message: ".nl2br($message)."<br>";

  // Sending mail
  if(mail($ToEmail, $subject, $MESSAGE_BODY, $mailheader))
  {
    echo "<script>alert('Email envoyé!');</script>";
    echo "<script>document.location.href='/'</script>";
  }
  else
  {
    echo "<script>alert('Le mail n'a pas pu être envoyé. Veuillez réessayer plus tard');</script>";
    echo "<script>document.location.href='/'</script>";
  }

}
