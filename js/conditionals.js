"use strict";
(function(){
/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];

function analyzeColor (colorName) {
	switch (colorName) {
		case 'red':
			return colorName + " makes me think about Cormac McCarthy's book 'Blood Meridian, or the Evening Redness in the West' and I don't like thinking about that book.";
		case 'orange':
			return colorName + " is the color of the setting sun";
		case 'yellow':
			return colorName + " is the color of ripe lemons";
		case 'green':
			return colorName + " is the color of leaves in springtime";
		case 'blue':
			return colorName + " is the color of the deep ocean";
		case 'indigo':
			return colorName + " is the color of the sky after sunset";
		case 'violet':
			return colorName + " is the color of lavender";
		default:
			return "Unrecognized output";
	}
}
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColor = prompt("Pick a color!");
alert(analyzeColor(userColor));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal (luckyNumber, totalAmount) {
	switch (luckyNumber) {
		case 0:
			return (totalAmount - (totalAmount * 0)).toFixed(2);
		case 1:
			return (totalAmount - (totalAmount * 0.1)).toFixed(2);
		case 2:
			return (totalAmount - (totalAmount * 0.25)).toFixed(2);
		case 3:
			return (totalAmount - (totalAmount * .35)).toFixed(2);
		case 4:
			return (totalAmount - (totalAmount * .05)).toFixed(2);
		case 5:
			return (totalAmount - (totalAmount * 1)).toFixed(2);
		default:
			console.log("Invalid lucky number: " + luckyNumber);
			return totalAmount.toFixed(2);
	}
}
// test various inputs
console.log(calculateTotal(0, 100)); // result should be 100
console.log(calculateTotal(1, 100)); // result should be 90
console.log(calculateTotal(2, 100)); // result should be 75
console.log(calculateTotal(3, 100)); // result should be 65
console.log(calculateTotal(4, 100)); // result should be 50
console.log(calculateTotal(5, 100)); // result should be 0
console.log(calculateTotal(6, 100)); // all other numbers log invalid number and return unmodified totalAmount

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
var luckyNumber = Math.floor(Math.random() * 6);

var userBill = parseFloat(prompt("What was your bill?")).toFixed(2);
alert("Your lucky number was " + luckyNumber + " and your bill was $" + userBill + ". Your bill after your lucky number discount is: $" + calculateTotal(luckyNumber, userBill));
/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// function handleNumber
function handleNumber (input) {
	// these three functions preform the checks and formatting for the alerts displaying info about the number
	function evenOrOdd (input) {
		return (input % 2 === 0) ? input + " is even." : input + " is odd.";
	}

	function numberPlusOneHundred (input) {
		return input + " + 100 is " + (input + 100);
	}

	function negativeOrPositive (input) {
		return (Math.sign(input) >= 0) ? input + " is positive." : input + " is negative.";
	}
	// this conditional checks if user's input is a valid number or not
	if (isNaN(Number(input))) {
		alert(input + " is NOT a valid number.");
	} else {
		input = parseFloat(input);
		alert(evenOrOdd(input));
		alert(numberPlusOneHundred(input));
		alert(negativeOrPositive(input));
	}
}


// confirm if user wants to enter a number
if (confirm("Do you want to enter a number?")) {
	// prompt for a number
	handleNumber(prompt("Enter a number."));
}
}());
