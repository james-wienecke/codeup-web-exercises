"use strict";

console.log('Hello from external JavaScript!');
alert("Welcome to my Website!");
var favColor = prompt("What is your favorite color?");
alert("Great, " + favColor + " is my favorite color too!");


// movie rental exercise
var daysRentedMermaid = prompt("You have rented some movies for $3 a night. How nights have you rented 'The Little Mermaid?'?");
var daysRentedBrotherBear = prompt("How nights have you rented 'Brother Bear'?");
var daysRentedHercules = prompt("How nights have you rented 'Hercules'?");
var moviesTotal = 3 * (Number(daysRentedMermaid) + Number(daysRentedBrotherBear) + Number(daysRentedHercules));
alert("Your total cost for movie rentals is $" + moviesTotal);

// contractor wages exercise
alert("You are working as a contractor. For an hour of work, Google pays $400, Amazon $380, and Facebook $350");
var wageGoogle = 400;
var hoursGoogle = prompt("How many hours did you work for Google?");
var wageAmazon = 380;
var hoursAmazon = prompt("How many hours did you work for Amazon?");
var wageFacebook = 350;
var hoursFacebook = prompt("How many hours did you work for Facebook?");
var paidTotal = wageGoogle * Number(hoursGoogle) + wageAmazon * Number(hoursAmazon) + wageFacebook * Number(hoursFacebook);
alert("You earned a total of $" + paidTotal + " for your work.");

// class enrollment exercise
alert("A student can only enroll in this class if it is not full and doesn't conflict with their schedule.");
var classNotFull = confirm("Is there still room in the class?");
var classSchedule = confirm("Is the student's schedule free to enroll in the class?");
if (classNotFull && classSchedule) {
    alert("Enrollment is possible.");
} else {
    alert("Enrollment is not possible");
}

// product offer exercise
alert("A product offer requires the offer to still be valid, as well as a 2 item minimum purchase. Premium members are exempt from the minimum");
var purchaseItems = prompt("How many items in the purchase?");
var weekOfferExpires = confirm("Is offer still valid?");
var premiumMembership = confirm("Premium member?");
var offerValid = weekOfferExpires && (premiumMembership || (Number(purchaseItems) > 2));
if (offerValid) {
    alert("Product offer can be applied.");
} else {
    alert("Product offer invalid.");
}