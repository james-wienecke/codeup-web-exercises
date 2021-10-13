"use strict";
(function(){
	// IF statements: runs a block of code if a given logical statement is true
	//
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
	/*
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
	*/
	// IF-ELSE IF-ELSE statements: code a chain of if/else statements to give different results
	// for different conditions.
	//
	// if (condition1) {
	// 	run this code:
	// } else if (condition2) {
	// 	since condition1 wasn't met and this was, run this code:
	// } else {
	// 	I run by default
	// }
	// if (hasCow) {
	// 	goToCow();
	// } else if (hasGoat) {
	// 	goToGoat();
	// } else {
	// 	goToStore();
	// }
	//
	// TODO: build a function that takes a number and will return 3 different strings for an
	// argument less than, greater than, and equal to 35.
	function isThisThirtyFive (num) {
		if (num < 35) {
			return "Less than 35";
		} else if (num > 35) {
			return "Greater than 35";
		} else {
			return "Equal to 35";
		}
	}

	console.log(isThisThirtyFive(40));
	console.log(isThisThirtyFive(0));
	console.log(isThisThirtyFive(35));

	// TERNARY expression: an experssion to set a value based on boolean evaulation
	// var message = (booleanValue) ? "Operation was true" : "Operation was false";
	// consider: "Are we out of milk? If we are, I'll head to the store. But if we have milk,
	// I want to eat cereal
	//
	// var action = (gotMilk) ? "Make cereal" : "I'll go to the store";
	//
	// TODO: refactor isItANumber into a ternary expression.
	function isItANumber (parameter) {
		return (typeof parameter === "number") ? "Yup, that's a number 💯" : "That is not a number";
		// inexplicable chrome console unicode support check here ------^ spoilers it failed
		// also possibly hard crashed my macbook. but it also could have been my vim setup.
	}
	console.log("Is 4 a number?", isItANumber(4));
	console.log("Is baby a number?", isItANumber("baby"));
	
	// SWITCH statement: a statement with multiple conditions that will trigger based on the
	// value of a variable.
	var color = prompt("What is your favorite color?").toLowerCase();

	switch (color) {
		case "grey":
		case "gray":
			alert("Is it grey or gray?");
			break;
		case "green":
			alert("Great choice!");
			break;
		case "purple":
			alert("Sophisticated!");
			break;
		case "red":
			alert("Solidarity!");
			break;
		default:
			alert(color + "? That's fine, I guess.");
			break;
	}

	// consider: "I don't have a cow, goat, or camel. I guess I'll go to the store..."
	var animal = "dog";
	switch (animal) {
		case "cow":
			console.log("Milk cow");
			break;
		case "goat":
			console.log("Milk goat");
			break;
		case "camel":
			console.log("Milk camel");
			break;
		default:
			console.log("Go to store");
			break;
	}

	// TODO: make a switch statment with a prompt for the user to input their favorite sandwich meat.
	// If they like "olive loaf" we should congratulate them for their bold choice. If the choose
	// brisket we should return a different alert, one congratulating them for making the "right" choice.
	// All other responses produce an alert expressing apathy.
	var favLunchMeat = prompt("Please select your favorite sandwich meat");
	switch (favLunchMeat) {
		case "olive loaf":
			alert("Bold choice!");
			break;
		case "brisket":
			alert("Ah, the only correct option.");
			break;
		default:
			alert("Oh... Sure, that's fine...");
			break;
	}
}());
