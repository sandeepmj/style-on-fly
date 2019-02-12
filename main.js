// Add in external javascript file
$(document).ready(function () { //verifies all HTML loaded

	$("#hi-gandhi").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		$('#gandhi').addClass('highlight'); /*Note no # or . for class being added*/
		$(this).prop('disabled', true);
	});

	$("#hi-angelou").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		$('#angelou').addClass('highlight');
		$(this).prop('disabled', true);
	});

	$('#style-hed').on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		$("h3").addClass("headline");
		$(this).prop('disabled', true);
	});

	$('#style-multi').on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		console.log("multi is clicked");
		// console.log('hello');
		$(this).prop('disabled', true);

		$('.authors').addClass("someStyling somePadding biggerText addBorder"); // note multiple IDs and classes
		$("#hi-gandhi, #hi-angelou").prop('disabled', true); // we disabled the highlight buttons highlight got activated
	});




	//adding multiple classes to single element
	$("#swap-div").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		$(".container").addClass('newDiv');
		$(this).prop('disabled', true);
	});

	$("#hide-div").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		$(".dog").addClass('hide-pretty-please');
		$(this).prop('disabled', true);
	});

	// reset all IDs and classes

	$("#reset-all").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		$("#gandhi, #angelou, h3, .authors, .container, .dog").removeClass("highlight headline someStyling somePadding biggerText addBorder newDiv hide-pretty-please  ");
		$("button").prop('disabled', false);

	});
}); //closes all the functions