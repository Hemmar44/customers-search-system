<?php

$column = lcfirst($_GET["column"]);

require_once '/../classes/Sale.php';

$sale=new Sale($database);

$select = "";

$select .= "<select>";

if($selectors = $sale->database()->selectDistinct("sales", $column)){
	foreach ($selectors as $option) {
			$select .= "<option value={$option[$column]}> {$option[$column]} </option>";
		}
	$select .= "</select>";
	}


echo $select;
?>