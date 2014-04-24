// you can enter your JS here!

$(function(){

//	$('form').change(function(){


	$('select').change(function(){
		var unitPrice = $(this).attr('data-itemprice');
		var noOfItems = $(this).val();
		var total = unitPrice * noOfItems;
		console.log(total);
//		logging(unitPrice + " " + noOfItems);
	});	






	var total = 0;

	$('select').change(function(){
		selectItem(total);
		logging(selectItem(total));
	});	

	function selectItem(total) {

		var unitPrice = $(this).attr('data-itemprice');
		var no_of_rooms = $(this).val();
//		total += unitPrice * no_of_rooms;

		logging(unitPrice + " " + no_of_rooms);
	};


	function logging(something){
		console.log(something);
	};

/*
		var total_amount = 0;


		$('select').change(function(){

			var room_type=$(this).attr('name');
			var no_of_rooms = parseFloat($(this).val());

			var typePrice = 0;

			var total_of_all;

			if (room_type === "room[basic2]") {
				typePrice = 88.99;
			}
			else if (room_type === "room[basicfamily]") {
				typePrice = 98.99;
			}
			else if (room_type === "room[deluxe2]") {
				typePrice = 109.99;
			}
			else if (room_type === "room[deluxefamily]") {
				typePrice = 112.99;
			}
			else if (room_type === "room[bridalsuite]") {
				typePrice = 167.99;
			}
			else if (room_type === "room[presidentsuite]") {
				typePrice = 301.99;
			}
			else if (room_type === "room[oneplusone]") {
				typePrice = 78.99;
			}
			else if (room_type === "room[single]") {
				typePrice = 28.99;
			}
			else if (room_type === "room[queen]") {
				typePrice = 99.99;
			}
			else if (room_type === "room[basement1]") {
				typePrice = 9.99;
			}

			else if (room_type === "room[megaxl]") {
				typePrice = 412.99;
			}

			var abc = no_of_rooms*typePrice;

			var short_amount = abc.toFixed(2);

//			var total_fxd = Number(total_amount) + Number(short_amount);
			var total_fxd = Number(total_amount) + Number(short_amount);

			total_amount = total_fxd.toFixed(2);

//			total_amount += short_amount;

			console.log(total_amount);

			$('#total_amount_of_reservation').html(total_amount);

	//		console.log(no_of_rooms*typePrice);


		}); // END Select 

//	}); // End Form

});

$(document).ready(function(){

	var data = { "rooms" :[
			{
				"type" : "room[basic2]",
				"price" : 88.99 
			},
			{
				"type" : "room[basicfamily]",
				"price" : 98.99 
			},
			{
				"type" : "room[deluxe2]",
				"price" : 109.99 
			},
			{
				"type" : "room[deluxefamily]",
				"price" : 112.99 
			},
			{
				"type" : "room[bridalsuite]",
				"price" : 167.99 
			},
			{
				"type" : "room[presidentsuite]",
				"price" : 301.99 
			},
			{
				"type" : "room[oneplusone]",
				"price" : 78.99 
			},
			{
				"type" : "room[single]",
				"price" : 28.99 
			},
			{
				"type" : "room[queen]",
				"price" : 99.99 
			},
			{
				"type" : "room[basement1]",
				"price" : 99.99 
			},
			{
				"type" : "room[megaxl]",
				"price" : 412.99 
			},
	]}

	var output = "";
		for (var i in data.rooms) {		
			output += "\n " + "Room Type: " + data.rooms[i].type + "\t\t\t" + "Price: " + data.rooms[i].price ;
		};
//	console.log(output);
*/

});