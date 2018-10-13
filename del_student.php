<?php
$ID = $_GET["ID"];
$arr = json_decode(file_get_contents("students.json"), true);
echo $ID.";";
foreach($arr as $key => $val){
  if($key == $ID)
    unset($arr[$key]);
}
file_put_contents("students.json", json_encode($arr));
?>
