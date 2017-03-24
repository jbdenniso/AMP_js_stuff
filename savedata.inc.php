<?php
//Connect to database
$host = "webdb.nyu.edu";
$database = "krosch_db";
$username = "krosch_db_u";
$password = "-";
$table = "GunToolPriming";
        
$conn = mysql_connect($host, $username, $password);
mysql_select_db($database, $conn) or die( "Unable to select database");

?>