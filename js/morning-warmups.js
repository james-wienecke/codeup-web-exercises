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

/* TUE 19-10-21 Warmup:
Write a program that logs the numbers from 1 to 100. But for multiples of 3, log "Fizz"
and for multiples of five, log "Buzz". For multiples of 3 and 5, log "FizzBuzz".

naive first attempt conditional flow in js:
			if (i % 3 === 0 || i % 5 === 0) {
				let str = '';
				if (i % 3 === 0) {
					str += "Fizz";
				}
				if (i % 5 === 0) {
					str += "Buzz";
				}
				console.log(str);
			} else {
				console.log(i);
			}
 */

	(function () {
		for (let i = 1; i <=100; i++) {
			if (i % 15 === 0) console.log("FizzBuzz");
			else if (i % 3 === 0) console.log("Fizz");
			else if (i % 5 === 0) console.log("Buzz");
			else console.log(i);
		}
	}());
/* WED 20-10-21 Warmup:
Create a function called secondToLast that accepts an array as an argument and will return
the second to last element in the argument passed via array
	const arrayWedOct =
 */
	(function (arr) {
		return arr[arr.length - 2];
	}());
}());
