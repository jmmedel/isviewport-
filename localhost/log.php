<?php

if(!isset($_SERVER['HTTP_REFERER'])){
    // redirect them to your desired location
    header('location:index.php');
    
}
$title = $_POST['mainpage'];
$device = $_POST['UA'];
// open the file "demosaved.csv" for writing
$file = fopen('demosaved.csv', 'a');
 

fputcsv($file, array($title,$device));
 

 

 
// Close the file
fclose($file);

?>
