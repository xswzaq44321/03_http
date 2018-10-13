<?php
$ID = $_GET["ID"];
$name = $_GET["name"];
echo $ID.",".$name;
$arrne[$ID] = $name;
$arr = json_decode(file_get_contents("students.json"), true);
$arr[$ID] = $name;
file_put_contents("students.json", json_encode($arr));
?>
