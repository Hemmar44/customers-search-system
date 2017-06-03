
$(function(){
	//sum on other than name and product;
		var yesornoValue = $(".yesorno:checked").val();
		var globalValue = ""
		var sum = 0;
		var tableButtons = '</button><button type="button" id="delete" class="btn btn-warning btn-sm">Delete</button>'
		var inputValue = "";
		var min = 0;
		var max = 0;
		var get = 1;

        function serveAjax(msg) {

            var array = msg.split("||");
            $("#dataTable tbody").html(array[0]).show();
            $("#links").html(array[1]);
            $("#sum").text(array[2]);
        }

		console.log("yesornovalue = " + yesornoValue + ", globalValue = " + globalValue + ", min = " + min);
    	console.log("min = " + min + ", inputValue = " + inputValue + ", get = " + get);
    	//on load call	
    	$.ajax({
  			method: "POST",
  			url: "ajax/Getdata.php",
  			context: this,
  			data: { column: globalValue, value: inputValue, completed: yesornoValue, min:min, max:max, get:1},
			success: function( msg ) {
            serveAjax(msg);
    		
    		}
    	});
    	//on change links
		$("#links").on("click", "a", function() {
			get = $(this).attr("data");
			console.log("yesornovalue = " + yesornoValue + ", globalValue = " + globalValue + ", min = " + min);
    		console.log("min = " + min + ", inputValue = " + inputValue + ", get = " + get);
			$.ajax({
  			method: "POST",
  			url: "ajax/Getdata.php",
  			context: this,
  			data: { column: globalValue, value: inputValue, completed: yesornoValue, min:min, max:max, get:get},
			success: function( msg ) {
    		var array = msg.split("||");
    		$("#dataTable tbody").html(array[0]).show();
    		$("#links").html(array[1]);
    		}

    	});
			 
		});
		//completed or not or all
		$(".yesorno").on("change", function(){
        		yesornoValue = $(this).val()
        		var dataSelector = $("#dataSelector").val();
        		$("#dataTable tbody").hide();
        			switch(yesornoValue) {
    				case "No":
    				console.log("yesornovalue = " + yesornoValue + ", globalValue = " + globalValue + ", min = " + min);
    				console.log("min = " + min + ", inputValue = " + inputValue + ", get = " + get);
    				$.ajax({
			  			method: "POST",
			  			url: "ajax/Getdata.php",
			  			context: this,
			  			data: { column: globalValue, value: inputValue, completed: yesornoValue, min:min, max:max, get:1},
						success: function( msg ) {
			    		serveAjax(msg)
			    		}
			    	});

       				break;

    				case "Yes":
    				console.log("yesornovalue = " + yesornoValue + ", globalValue = " + globalValue + ", min = " + min);
    				console.log("min = " + min + ", inputValue = " + inputValue + ", get = " + get);
    				$.ajax({
			  			method: "POST",
			  			url: "ajax/Getdata.php",
			  			context: this,
			  			data: { column: globalValue, value: inputValue, completed: yesornoValue, min:min, max:max, get:1},
						success: function( msg ) {
			    		serveAjax(msg)
			    		}	
			    	});
    				
        			break;
    				
    				default:
    				console.log("yesornovalue = " + yesornoValue + ", globalValue = " + globalValue + ", min = " + min);
    				console.log("min = " + min + ", inputValue = " + inputValue + ", get = " + get);
    				$.ajax({
			  			method: "POST",
			  			url: "ajax/Getdata.php",
			  			context: this,
			  			data: { column: globalValue, value: inputValue, completed: yesornoValue, min:min, max:max, get:1},
						success: function( msg ) {
			    		serveAjax(msg)
			  			
		  				}
  					})
    			};
        	});
    		//choosing property
    		$("#dataSelector").on("change", function() {
    			sum = 0;
    			$("#dataTable td, #dataTable th").css("background-color", "white");
    			globalValue = $(this).val();
    			//alert(globalValue)
    			if(globalValue === "Choose...")
    				{
    					$(".search").hide();
    					return;
    				}
    			else {
    				var me = $("#by" + globalValue);
    				me.show();
    				me.siblings("div").hide();
    				}

    			$("#searchBy" + globalValue).keyup(function(){
    				$("#dataTable tbody").hide();
    				inputValue = $(this).val();
    				console.log("yesornovalue = " + yesornoValue + ", globalValue = " + globalValue + ", min = " + min);
    				console.log("min = " + min + ", inputValue = " + inputValue + ", get = " + get);
					$.ajax({
			  			method: "POST",
			  			url: "ajax/Getdata.php",
			  			context: this,
			  			data: { column: globalValue, value: inputValue, completed: yesornoValue, min: 0, max: 0, get:1},
						success: function( msg ) {
			    		serveAjax(msg)
			    		}
			    	});
				});

				$("#searchBy" + globalValue).change(function(){
    				$("#dataTable tbody").hide();
    				inputValue = $(this).val();
    				console.log("yesornovalue = " + yesornoValue + ", globalValue = " + globalValue + ", min = " + min);
    				console.log("min = " + min + ", inputValue = " + inputValue + ", get = " + get);
					$.ajax({
			  			method: "POST",
			  			url: "ajax/Getdata.php",
			  			context: this,
			  			data: { column: globalValue, value: inputValue, completed: yesornoValue, min:0, max:0, get:1},
						success: function( msg ) {
			    		serveAjax(msg)
			    		}
			    	});
				});

				$("#min" + globalValue).keyup(function(){
    				$("#dataTable tbody").hide();
    				min = $(this).val();
    				max = $("#max" + globalValue).val();
    				console.log("yesornovalue = " + yesornoValue + ", globalValue = " + globalValue + ", min = " + min);
    				console.log("min = " + min + ", inputValue = " + inputValue + ", get = " + get);
					$.ajax({
			  			method: "POST",
			  			url: "ajax/Getdata.php",
			  			context: this,
			  			data: { column: globalValue, value:"", completed: yesornoValue, min: min, max: max, get:1},
						success: function( msg ) {
			    		serveAjax(msg)
                    			    		}
			    	
			    	});
			    	
				});

				$("#max" + globalValue).keyup(function(){
    				$("#dataTable tbody").hide();
    				min = $("#min" + globalValue).val();
    				max = $(this).val();
    				console.log("yesornovalue = " + yesornoValue + ", globalValue = " + globalValue + ", min = " + min);
    				console.log("min = " + min + ", inputValue = " + inputValue + ", get = " + get);
					$.ajax({
			  			method: "POST",
			  			url: "ajax/Getdata.php",
			  			context: this,
			  			data: { column: globalValue, value:"", completed: yesornoValue, min: min, max: max, get:1},
						success: function( msg ) {
			    		serveAjax(msg)			    		}
			    	
			    	});
			    	
				});
			});
        });

	    	//this is the end of a search engine!

	       //Add customer page
	    			
        	//counts commission on newcustomer page
	$(function(){
    		$("#margin").on("blur", function() {
    			var amount = $("#amount").val();
    			var margin = $("#margin").val();

    			var commission = (amount * margin).toFixed(2); 

    			$("#commission").val(commission);
    		});

    		$(".message").delay(5000).fadeOut();
    });

		  //Edit page

    var message = "<div class='alert alert-info'>Enter the name of a customer You would like to find</div>";
    var edit = "<button type='button' id='editButton' class='btn btn-primary btn-sm'>Edit</button>";
    var remove = "<button type='button' id='deleteButton' class='btn btn-warning btn-sm'>Delete</button>";
    var cancel = "<button type='button' id='cancelButton' class='btn btn-secondary btn-sm'>Cancel</button>";
    var save = "<button type='button' id='saveButton' class='btn btn-primary btn-sm'>Save</button>";
    var confirm = "<button type='button' id='confirmButton' class='btn btn-primary btn-sm'>Yes</button>";
    var table = $("#editDataTable");

    $(function(){
          $("#search").on("click", function(){
            var nameVal = $(this).closest("#searchDiv").find("#name").val();
            var name = $(this).closest("#searchDiv").find("#name");
            if (nameVal === "") {
                name.addClass("redBorder");
            }
            else {
                name.removeClass("redBorder");
                $.ajax({
                method: "GET",
                url: "ajax/Search.php",
                context: this,
                data: { name: nameVal},
                success: function( msg ) {
                var array = msg.split("||")
                $("div#message").html(array[0]);
                //alert(array[0].length);
                //for now not the best solution!
                if(array[0].length < 50) {
                    $("#editDataTable").hide();
                    }
                else {
                    $("#editDataTable").show();
                    $("#editDataTable tbody").html(array[1])
                    $("#buttons").html("");
                    table.addClass("click");
                    }                    
                }
                });
            }

            $("#name").on("focus", function(){
                $("div#message").html(message);
                $("#buttons").html("");
            })
            //have to add a class that's the simplest way
            $("#editDataTable").on("click", ".rows", function(){
                
                if(table.hasClass("click")) {
                $(this).siblings().fadeOut();
                $("div#message").html("<div class='alert alert-info'>Choose action you would like to perform</div>")
                $("#buttons").html(edit + remove + cancel);
                table.removeClass("click");
            }
            });

            $("body").on("click", "#cancelButton", function() {
                $.ajax({
                method: "GET",
                url: "ajax/Search.php",
                context: this,
                data: { name: nameVal},
                success: function( msg ) {
                var array = msg.split("||")
                $("div#message").html(message);
                if(array[1] === "No records") {
                    $("#editDataTable").hide();
                    }
                else {
                    table.show().addClass("click");
                    $("#editDataTable tbody").html(array[1])
                    $("#buttons").html("");
                    }
                 }
                });
            }); 
            
            $("div#message").on("click", "#confirmButton", function(){
                var id = $(".id:visible").text();
                //alert(id);
                $.ajax({
                method: "GET",
                url: "ajax/Delete.php",
                context: this,
                data: { id: id},
                success: function( msg ) {
                $("div#message").html(msg);
                $("#editDataTable").hide();
                $("#buttons").html("");
                    
                 }
                });
            });

            $("#buttons").on("click", "#deleteButton", function() {
                $("div#message").html("<div class='alert alert-danger'>Are you sure? " + confirm + cancel + "</div>" );
            });

        

            $("#buttons").on("click", "#editButton", function() {
                var editMessage = "<div class='alert alert-info'>Yo can change only fields that are higlighted green, just double click on them</div>";
                $(".editable:visible").css("background-color","#dff0d8").removeClass("editable");
                $("div#message").html(editMessage);  
                $(this).closest("#buttons").html(save + cancel);
                
                 
            });

             //after edit is clicked think about it some more                   
            table.on("mouseenter", ".Name, .Institution, .Margin, .Amount", function(){
                if(table.hasClass("click") || $(this).hasClass("editable") ) {
                    $(this).off("dblclick");
                }
                else{
                    var text = $(this).text();
                    $(this).on("dblclick", function(){
                        var input = "<input type='text' class='NameAndInstitution' value='"+ text +"'>"
                        var thisClass = $(this).attr("class");
                        var array = thisClass.split(' ');
                        thisClass = array[0];
                        $(this).html(input);
                        $(this).find("input").focus();

                        $("div#message").html("<div class='alert alert-info'>Enter new "+ thisClass +"</div>");
                        });
                    }
            });

            table.on("mouseenter", ".Product, .Advisor, .Completed", function(){
                if(table.hasClass("click") || $(this).hasClass("editable") ) {
                    $(this).off("dblclick");
                }
                else {
                    $(this).on("dblclick", function(){
                        var thisClass = $(this).attr("class");
                        var array = thisClass.split(' ');
                        thisClass = array[0];
                        $.ajax({
                            method: "GET",
                            url: "ajax/Select.php",
                            context: this,
                            data: { column: thisClass},
                            success: function( msg ) {
                            $(this).html(msg);
                            $(this).find("select").focus();
                            $("div#message").html("<div class='alert alert-info'>You can select new value now</div>");
                            }
                        });
                    });
                }
            });

            table.on("blur", "input, select", function(){
                var value = $(this).val();
                $(this).closest("td").text(value);
                $("div#message").html("<div class='alert alert-info'>You can save, modify more data or cancel</div>");
                var commission = $(".Commission:visible");
                var margin = $(".Margin:visible");
                var amount = $(".Amount:visible");
                commission.text(Number(margin.text()) * Number(amount.text()));
            });

            $("#buttons").on("click", "#saveButton", function(){
                var data = []
                $(".save:visible").each(function(){
                    var text = $(this).text();
                    data.push(text);

                })
                $.ajax({
                method: "GET",
                url: "ajax/Save.php",
                context: this,
                data: { data: data},
                success: function( msg ) {
                $("div#message").html(msg);
                    
                 }
                });
            })

            
        
        });
        
        



    });
    		
    			
    			
    		


		
        	

        	
        	
        	




    
    		

        
    
    