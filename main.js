// Add in external javascript file
$(document).ready(function () { //verifies all HTML loaded

	$("#hi-gandhi").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		$('#gandhi').addClass('active'); /*Note no # or . for class being added*/
		$(this).prop('disabled', true);
	});

	$("#hi-angelou").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		$('#angelou').addClass('active');
		$(this).prop('disabled', true);
	});

	$('#style-hed').on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		$("h3").addClass("active");
		$(this).prop('disabled', true);
	});

	$('#style-multi').on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		console.log("multi is clicked");
		// console.log('hello');
		$(this).prop('disabled', true);

		$('#gandhi, #angelou, .authors').addClass("active"); // note multiple IDs and classes
		$("#hi-gandhi, #hi-angelou").prop('disabled', true); // we disabled the highlight buttons highlight got activated
	});




	//adding multiple classes to single element
	$("#swap-div").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		$(".container").addClass('active');
		$(this).prop('disabled', true);
	});

	$("#hide-div").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		$(".dog").addClass('active');
		$(this).prop('disabled', true);
	});

	// reset all IDs and classes

	$("#reset-all").on("click", function (e) {
		e.preventDefault(); //disable the button's default behavior
		$(".highlight, h3, .authors, .container, .dog").removeClass("active");
		$("button").prop('disabled', false);

	});
}); //closes all the functions