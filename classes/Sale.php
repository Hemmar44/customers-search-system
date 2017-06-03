<?php

require_once 'Database.php';

class Sale {

	protected $database;

	public function __construct(Database $database) {

		$this->database = $database;

	}

	public function database() {

		return $this->database;
	}

	public function success($message) {

		echo '<div class="alert alert-success">'. $message . '</div>';
	}

	public function failure($message) {

		echo '<div class="alert alert-warning">'. $message . '</div>';
	}

	public function properMessage($condition, $messageTrue, $messageFalse) {

		if($condition){
			echo '<div class="alert alert-success">'. $messageTrue . '</div>';
		}
		else {

			echo '<div class="alert alert-warning">'. $messageFalse . '</div>';
		}
	}

	public function drawTable($arrays = [], $editable = "", $save = "") {
		$data = "";
		foreach ($arrays as $array) {
			$data .= "<tr class='rows'>";
			$data .= "<td class='id {$save}'>{$array['id']}</td>";
			$data .= "<td class='Name {$editable} {$save}'>{$array['name']}</td>";
			$data .= "<td class='Product {$editable} {$save}'>{$array['product']}</td>";
			$data .= "<td class='Institution {$editable} {$save}'>{$array['institution']}</td>";
			$data .= "<td class='Amount {$editable} {$save}'>{$array['amount']}</td>";
			$data .= "<td class='Advisor {$editable} {$save}'>{$array['advisor']}</td>";
			$data .= "<td class='Margin {$editable} {$save}'>{$array['margin']}</td>";
			$data .= "<td class='Commission {$save}'>{$array['commission']}</td>";
			$data .= "<td class='Completed {$editable} {$save}'>{$array['completed']}</td>";
			$data .= "<td class='Date {$save}'>". date('F Y', strtotime($array['date'])) ."</td>";
			$data .= "</tr>";
		}
		return $data;
	}
}

$database = new Database;
/*
$sale = new Sale($database);

$sale->database()->insert('sales', [
	"name" => "Kosmowski",
	"product" => "Mortgage",
	"institution" => "Millennium",
	"amount" => 300000,
	"advisor" => "Marcin",
	"margin" => 0.011,
	"commission" => 4600
	]);

	$database = new Database;

	
	
    public function insert($tableName, $fields=[]){
        //inserts value into table
        //names (fields keys) must equals tables headers
            $names = "(". implode(", ",array_keys($fields)).")";
        //generate proper amount of question marks
            $marks = "(".str_repeat('?, ', count($fields)-1).'?)';
        //takes values of fields
            $values = array_values($fields);
            $sql = "INSERT INTO {$tableName} {$names} VALUES {$marks}";
            $stmt = $this->_pdo->prepare($sql);
            $stmt->execute($values);
    }
    */

