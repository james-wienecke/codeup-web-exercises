"use strict";

console.log('Hello from external JavaScript!');
alert("Welcome to my Website!");
var favColor = prompt("What is your favorite color?");
alert("Great, " + favColor + " is my favorite color too!");


// movie rental exercise
alert("You have rented some movies for $3 a night.");
// collect user input
var daysRentedMermaid = parseFloat(prompt("How nights have you rented 'The Little Mermaid?'?"));
var daysRentedBrotherBear = parseFloat(prompt("How nights have you rented 'Brother Bear'?"));
var daysRentedHercules = parseFloat(prompt("How nights have you rented 'Hercules'?"));
// calculate total rental cost
var moviesTotalRentalDays = daysRentedMermaid + daysRentedBrotherBear + daysRentedHercules;
var moviesCostPerNight = 3;
var moviesTotal = moviesCostPerNight * moviesTotalRentalDays;
// display total
alert("Your total cost for movie rentals is $" + moviesTotal.toFixed(2) + ".");

// contractor wages exercise
alert("You are working as a contractor. For an hour of work, Google pays $400, Amazon $380, and Facebook $350.");
// collect user input
var hoursGoogle = parseFloat(prompt("How many hours did you work for Google?"));
var hoursAmazon = parseFloat(prompt("How many hours did you work for Amazon?"));
var hoursFacebook = parseFloat(prompt("How many hours did you work for Facebook?"));
// hourly rate for each company
var wageGoogle = 400;
var wageAmazon = 380;
var wageFacebook = 350;
// calculate total pay
var contractorTotalPay = wageGoogle * hoursGoogle + wageAmazon * hoursAmazon + wageFacebook * hoursFacebook;
// display total
alert("You earned a total of $" + contractorTotalPay.toFixed(2) + " for your work.");

// class enrollment exercise
alert("A student can only enroll in this class if it is not full and doesn't conflict with their schedule.");
// collect user input
var classNotFull = confirm("Is there still room in the class?");
var classSchedule = confirm("Is the student's schedule free to enroll in the class?");
// logic for valid enrollment
var classValid = classNotFull && classSchedule;
// display results
alert("Enrollment is possible: " + classValid)

// product offer exercise
alert("A product offer requires the offer to still be valid, as well as a 2 item minimum purchase. Premium members are exempt from the minimum.");
// collect user input
var offerCountItems = parseFloat(prompt("How many items in the purchase?"));
var offerExpires = confirm("Is offer still valid?");
var offerPremium = confirm("Premium member?");
// logic for offer eligibility
var offerValid = offerExpires && (offerPremium || (offerCountItems > 2));
// display results
alert("Product offer valid: " + offerValid)