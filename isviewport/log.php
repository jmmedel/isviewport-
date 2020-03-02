
<?php
header('Access-Control-Allow-Headers :*');



$title = $_POST['mainpage'];
$device = $_POST['UA'];
// open the file "demosaved.csv" for writing
$file = fopen('demosaved.csv', 'a');
 

fputcsv($file, array('Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5'));
 

 

 
// Close the file
fclose($file);

?>
