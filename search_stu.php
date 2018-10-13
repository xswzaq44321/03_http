<?php
$ID = $_GET["ID"];
$arr = json_decode(file_get_contents("students.json"), true);
foreach($arr as $key => $val){
  if($key == $ID)
    echo "Hello, ".$val."<br/>";
}
?>
