<!DOCTYPE html>
<html>
<head>
    <meta name="description" content="MetSense something went wrong the site dose not exist">
    <title>404 not working</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="author" content="Metsense">

</head>
<!--stylesheet if website dosen't work properly-->
<style>
    section{
        height: 92vh;
        width: 100vw;
        z-index: 100;
        top: 8vh;
        text-align: center;
        color: #4A4544;
    }
    h1{
        font-weight: 800;
        margin-top: 10vh;
        font-size: 5vh;
        text-transform: uppercase;
    }
    h2{
        font-size: 4vh;
    }
    h3{
        font-size: 3vh;
    }
    section img{
        width: 40vw;
        height: auto;
        margin-top: 10vh;
    }
    a{
        color: #0080CF;
    }
</style>
<body>
<?php
include "include_pages/nav.php";
?>
<section>
    <h1>Welcome WO Metsense</h1>
    <h2>This page doesn't exist!</h2>
    <h3>Not to worry. You can head back to our <a href="index.php">HOMEPAGE</a>.</h3>

    <img src="img/404_img.jpg" alt="404 image">
</section>

</body>
</html>