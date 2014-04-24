// you can enter your JS here!

$(function(){

//	$('form').change(function(){

var total = 0;

/*
	$('select').change(function(){
		var unitPrice = $(this).attr('data-itemprice');
		var noOfItems = $(this).val();
		total += unitPrice * noOfItems;
		console.log(total);
//		logging(unitPrice + " " + noOfItems);

*/

    $('form').change(function()
    {
       var total = 0;

	    $('select').change(function() {
          	var price = $(this).attr('data-itemprice'),
            qty = $(this).nextAll("select:first").val();
			console.log(price, qty, price*qty);
          	var totalA = price*qty;
          	total += totalA;	    	
	    });

		console.log(total);

    });


});