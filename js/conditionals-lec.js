"use strict";
(function(){
	// IF statements: runs a block of code if a given logical statement is true
	
	// condition: When I run out of milk
	// action: I go to the store to get more milk
	// if (milk === 0) {
	// 	goToStore();
	// }
	
	// TODO: I want to write a block of code that logs a message to the console when a variable is set to 5
	var five = 5;
	if (five === 5) {
		console.log("yup, that's five.");
	}

	//TODO: I want to build a function that returns a string when I pass a number as an argument
	/*
	function isItANumber (parameter) {
		var string = "That ain't a number, smh."
		if (typeof(parameter) === "number") {
			string =  "That's a number!";
		}
		return string;
	}
	*/

	// IF-ELSE statements: code that runs when a condition is met, but will also run with a default state.
	// if (condition) {
	// 	I will run if condition is true
	// } else {
	// 	I will run if the condition is false
	// }
	//
	// condition: When I run out of milk AND have a cow
	// action (positive branch): I get more milk from my cow
	// action (negative branch): I get more milk from the store
	// if (hasCow) {
	// 	goToCow();
	// } else {
	// 	goToStore();
	// }
	
	function isItANumber(parameter) {
		if (typeof parameter === "number") {
			var string = "That's a number.";
		} else {
			var string = "This ain't a number.";
		}
		return string;
	}
	console.log("Is 4 a number?", isItANumber(4));
	console.log("Is baby a number?", isItANumber("baby"));
}());
