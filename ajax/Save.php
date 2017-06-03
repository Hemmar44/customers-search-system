<?php

require_once '/../classes/Sale.php';

$sale=new Sale($database);
//print_r($_GET);
//$day = "";
if($sale->database()->update("sales", $_GET["data"][0], [
		"name" => $_GET["data"][1],
		"product" => $_GET["data"][2],
		"institution" => $_GET["data"][3],
		"amount" => intval($_GET["data"][4]),
		"advisor" => $_GET["data"][5],
		"margin" => floatval($_GET["data"][6]),
		"commission" => floatval($_GET["data"][7]),
		"completed" => $_GET["data"][8]
	])){

	$sale->success("Database successfully updated, you can update more data or cancel any unsaved changes");
}
else {
	$sale->failure("Database maintenance, please try again later");
}



?>