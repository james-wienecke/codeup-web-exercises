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

// function expression / anonymous function
var sayBye = function (name) {
	return "Goodbye " + name;
}
console.log(sayBye(yourName));
