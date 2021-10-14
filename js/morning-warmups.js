"use strict";
(function() {
	/* WED 13-10-21 Warmup:
	Write a function that returns 7.

	Write a conditional statement checking a boolean value that is false. Will the code in the if statement be run?
	*/
	function returnSeven () {
		return 7;
	}

	var notTrue = false;
	if (notTrue) {
		console.log("This line will not be run.");
	}

	/* THU 14-10-21 Warmup:
	Write a ternary expression to set a variable of hadBreakfastMessage to a string expressing
	whether or not you have had breakfast. You will use the variable hadBreakfast as your condition.
	*/

	var hadBreakfast = Boolean(Math.round(Math.random()));

	var hadBreakfastMessage = (hadBreakfast) ? "I had breakfast!" : "I didn't have breakfast...";
	console.log(hadBreakfastMessage);

}());
