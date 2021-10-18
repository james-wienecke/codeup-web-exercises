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

	/* FRI 15-10-21 Warmup:
	Write a function called 'typeCheck' that takes an input and returns a string of the data type entered.
	If the data type is a string, return the string "Haha, it's a string of string!"

	Tests:
	typeCheck('')
	typeCheck(isNaN());
	typeCheck(!false * 3);
	typeCheck(4 + '4');
	 */

	function typeCheck (input) {
		return typeof input === 'string' ? 'Haha, it\'s a string of string!' : typeof input;
	}

	console.log(typeCheck(''));
	console.log(typeCheck(isNaN()));
	console.log(typeCheck(!false * 3));
	console.log(typeCheck(4 + '4'));

/* MON 18-10-21 Warmup:
When writing code to test our tests it's important to put yourself in the mindset of a junior/senior dev
This will help you in ensuring our tests are fully comprehensive.
When writing code with tests provided to me it's important for me to write code that is:
	-A. Write code with minimal effectiveness to green all the tests			<====<<
	-B. With full functionality so as to ensure my function works as intended
	-C. Both.
 */
}());
