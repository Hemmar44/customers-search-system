<?php

require_once '/../classes/Sale.php';

$sale=new Sale($database);

$name = htmlentities($_GET["name"]);

$data = "";
$count = 0;
$message = "";

if($customers = $sale->database()->selectLike("sales", "name", $name)) {
	$count = count($customers);
	$sale->success("We have found " . $count . " records in our database, click on one You would like to change");
	echo "||" . $sale->drawTable($customers, "editable", "save");
}
else {
	$sale->failure("No records");
}