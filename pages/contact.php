<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <?php

  $conn = mysqli_connect("localhost", "root", "");
  $base = mysqli_select_db($conn, "the_base");

  if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }

  if(isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message'])){
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $req = "INSERT INTO CONTACT VALUES ('$name', '$email', '$message')";
    mysqli_query($conn, $req);
  }

  mysqli_close($conn);
  ?>
</body>
</html>