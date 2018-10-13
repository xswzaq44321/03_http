<?php
$arr = json_decode(file_get_contents("students.json"), true);
foreach($arr as $key => $val){
  echo "\"" . $key . "\":\"" . $val . "\"<br/>";
}
?>
