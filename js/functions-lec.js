"use strict";

// a function is a block of reusable code that preforms a specific task.
// functions usually take an input and produces an output.

// - prompt()
// - confirm()
// - alert()

var yourName = prompt("What is your name?"); // returns a string

// function todaysDate(param1, param2) {
// 	do something;
// 	return something;
// }

function todaysDate(greeting) {
	return greeting + Date();
}

// execute function
var date = todaysDate("Today's date is: ");

console.log(date);

// echo("<string to echo>");
// function definition
function echo(phrase) {
	return phrase + " " + phrase;
}
console.log(echo(echo("hello")));
// ("hello hello") -> echo("hello hello") -> ("hello hello hello hello")

// global variable example (globalVar)
var globalVar = "i'm a global variable";
console.log(globalVar);

// function expression / anonymous function
var sayBye = function (name) {
	// local variable example (localVar)
	var localVar = "i'm a local variable";
	console.log(localVar);
	return "Goodbye " + name;
}
console.log(sayBye(yourName));

// create a function that takes in two Number parameters to find
// the hypotenuse angle.

function findHypotenuse (a, b) {
	var result = Math.sqrt((a * a) + (b * b));
	return result;
}

// have a hypothetical triangle with known side lengths of 4 and 5
console.log(findHypotenuse(4, 5));

// functions do not require parameters, here we just print "four"
function printFour() {
	return "four";
}
console.log(printFour());

// scope defines where variables and functions can be accessed.
// GLOBAL SCOPE:
// elements defined outside of a function are effectively "global" elements,
// which can be accessed anywhere
// LOCAL SCOPE:
// elements defined inside of a function are "local" elements,
// which are only accessible from within a function call.
