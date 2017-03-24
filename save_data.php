<?php

include('savedata.inc.php');

//Receive variables from JavaScript
$paradigm = $_POST["paradigm"];
$time = $_POST["time"];
$trial = $_POST["trial_number"];
$stimuli = $_POST["stimuli_number"];
$probe = $_POST["probe"];
$prime = $_POST["prime"];
$code = $_POST["code"];
$response = $_POST["response"];
$rt = $_POST["rt"];
$serial = $_POST["subject"];

$ipstr = $_SERVER['REMOTE_ADDR'];

//Insert variables into database
mysql_query("INSERT INTO $table (IP,paradigm,time,serial, trial, stimuli, prime, probe, code, response, rt) 
VALUES ('$ipstr','$paradigm','$time','$serial', '$trial', '$stimuli', '$prime','$probe','$code','$response', '$rt');");


//Disconnect
mysql_close($conn);

php?>


