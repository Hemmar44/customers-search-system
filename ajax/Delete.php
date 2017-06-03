<?php
	
	require_once '/../classes/Sale.php';

	$sale=new Sale($database);

	$id = $_GET["id"];

	
	if($row = $database->delete("sales", "id", $id)){

		$sale->success("Database successfully updated, You can search for another customer");
	}
	else {
		
		$sale->failure("Uuups something was wrong");
	
	}

	







?>