<?php






include("layouts/header.php");
?>

<div class=col-md-12>
	<div class="text-right">
		<a href="newcustomer.php">Add a customer</a>
		<a href="data.php">Browse Data</a>
	</div>
	<div id="message"> 
		<div class="alert alert-info">
			Enter the name of a customer You would like to find
		</div>
	</div>
<div id="searchDiv" class="form-group">

<input type="text" name="name" id="name">
<button id="search" class="btn btn-primary btn-sm">Search</button>
</div>


<table id="editDataTable" class="table table-sm table-bordered table-hover click">
			  <thead>
			    <tr>
			      <th>#</th>
			      <th class="name">Name</th>
			      <th class="product">Product</th>
			      <th class="institution">Institution</th>
			      <th class="amount">Amount</th>
			      <th class="advisor">Advisor</th>
			      <th class="margin">Margin</th>
			      <th class="commission">Commission</th>
			      <th class="completed">Completed</th>
			      <th class="date">Date</th>
			    </tr>
			  </thead>
			  <tbody >
			  	<!--ajax call-->
			  </tbody>
			</table>
		<div id="buttons"></div>



</div>


<?php
include("layouts/footer.php");
?>