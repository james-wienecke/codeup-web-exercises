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
 */
	let wedOctArr = ["a", "b", "c", "d", "e"];
	function wedOctArrFun (arr) {
		return arr[arr.length - 2];
	}
	console.log(wedOctArrFun(wedOctArr));
/* THU 21-10-21 Warmup:
Write a function named moveToEnd that takes in an array and returns the array with the original first index
moved to the last index of the array.
 */
	let thuOctArr = ['b', 'z', 'f', 'h', 'e', 'l'];
	function moveToEnd(arr) {
		let newArr = [...arr];			// i ain't a fan of javascript's destructive tendencies >:(
		newArr.push(newArr.shift());	// i protecccc the original array from this pain
		return newArr;					// it's ok bb only the new array was chopped up and rearranged
	}
	console.log(thuOctArr);
	console.log(moveToEnd(thuOctArr));
	console.log(thuOctArr);
/* MON 25-10-21 Warmup:
Visit the pokemon and pick your favorite pokemon. Create a JavaScript object that represents them,
the more info the better. We will be using this for the lecture today!
 */
	let cyndaquil = {
		dexNumber: 155,
		name: 'cyndaquil',
		title: 'fire mouse pokemon',
		type: 'fire',
		evolution: 'quilava',
		ability: ['blaze', 'flash fire'],
		height: {
			meters: 0.5,
			imperial: {
				feet: 1,
				inches: 8
			}
		},
		weight: {
			kilos: 7.9,
			pounds: 17.4
		},
		description: 'The fire that spouts from its back burns hottest when it is angry. The flaring flames intimidate foes.',
		movesFromLvlUp: ['tackle', 'leer', 'smokescreen', 'ember', 'quick attack', 'flame wheel', 'swift', 'flamethrower'],
		eggGroup: 'field'
	}
/* TUE 26-10-21 Warmup:
Write a function that accepts an array as an argument, and that returns an array of objects that have a
nationality property of "Canadian".
 */
	var wrestlers = [
		{
			name: "Bret Hart",
			nationality: "Canadian"
		}, {
			name: "Shawn Michaels",
			nationality: "American"
		}, {
			name: "Christian Cage",
			nationality: "Canadian"
		}, {
			name: "Keiji Mutoh",
			nationality: "Japanese"
		}, {
			name: "Eddy Guerrero",
			nationality: "American"
		}, {
			name: "Owen Hart",
			nationality: "Canadian"
		}
	];
	function getCanadianWrestlers (wrestlers) {
		let canadianWrestlers = [];
		wrestlers.forEach((wrestler) => {
			if (wrestler.nationality === "Canadian") canadianWrestlers.push(wrestler);
		});
		return canadianWrestlers;
	}
	console.log(getCanadianWrestlers(wrestlers));
	/* Warmup 27-10-21
	Find the area of the circle and round it to the nearest whole number with the Math object
	 */
	let circle = {
		radius: 36
	}
	function areaOfCircle () {
		let area = Math.PI * Math.pow(circle.radius, 2);
		console.log('area of the circle with radius of', circle.radius, 'is:', Math.round(area));
	}
	areaOfCircle();
    /* Warmup 29-10-21
     * No warmup?
     * 
     */
	/* Warmup 01-11-21
	 * How was your halloween?????? ate a lot of candy :)
	 *
	 */
	/* Warmup 02-11-21
	 * Create a function that takes in an array of objects, and returns the object with the
	 * highest quantity.
	 */
	var groceries = [
		{
			name: "carrots",
			quantity: 5
		},{
			name: "yams",
			quantity: 50
		},{
			name: "oranges",
			quantity: 9
		},{
			name: "onions",
			quantity: 2
		},{
			name: "cucumbers",
			quantity: 6
		},{
			name: "potatoes",
			quantity: 8
		}
	];
	function getHighestQuantity (objs) {
		let highest =  {
			quantity: Number.MIN_SAFE_INTEGER,
		}
		objs.forEach((elem) => {
			if (elem.quantity > highest.quantity) {
				highest = elem;
			}
		});
		return highest;
	}
	console.log(getHighestQuantity(groceries));
	/* Warmup 03-11-21
	 * Write a function named 'sortByName' that takes an array of objects, and
	 * returns an array of objects in alphabetical order based on the 'name' property.
	 */
	var products = [
		{
			name: 'Playstation 5',
			price: 599.99
		}, {
			name: 'Logitech Wireless Mouse',
			price: 23.99
		}, {
			name: 'Macbook Pro',
			price: 1099.99
		}, {
			name: 'GoPro HERO10',
			price: 399.99
		}, {
			name: '12" & 6" Metal Ruler Set',
			price: 5.99
		}];
	function sortByName (array) {
		return array.sort((a, b) => {
			return a.name.localeCompare(b.name);
		});
	}
	console.log(sortByName(products));
	/* Warmup 9-11-21
	 * Write a function that takes an array of objects and returns an object with the
	 * lowest height property. Consider the
	 */
	var bBallPlayers = [
		{
			name: "Hakeem Olajuwon",
			height: 213
		}, {
			name: "Muggsy Bogues",
			height: 160
		}, {
			name: "Chris Paul",
			height: 183
		}, {
			name: "Bol Bol",
			height: 218
		}, {
			name: "Moochie Norris",
			height: 185
		}, {
			name: "Manu Ginobili",
			height: 198
		}
	];
	function getLowestHeight (objects) {
		let lowest = {
			obj: {},
			height: Number.MAX_SAFE_INTEGER
		};
		objects.forEach((elem) => {
			if (elem.height < lowest.height)  {
				lowest.obj = elem;
				lowest.height = elem.height;
			}
		});
		return lowest.obj;
	}
	console.log(getLowestHeight(bBallPlayers));

	/* Warmup 9-11-21
	 * Write a function that takes an array of objects and returns an object with the
	 * lowest height property. Consider the
	 */
	var myCharacter = {
		name: 'James of Vinland',
		hitPoints: 100,
		class: 'Warrior',
		abilities: {
			attack: (me, obj) => {
				let roll = Math.floor(Math.random() * me.weapon.damage);
				obj.hitPoints -= roll;
				console.log(`${me.name} attacked ${obj.name} for ${roll} damage!`);
				console.log(`${obj.name} has ${obj.hitPoints} hit points remaining.`);
			}
		},
		magicPoints: 0,
		weapon: {
			name: 'silver sabre',
			damage: 16,
			type: 'sword'
		}
	}
	var enemy = {
		name: 'Savage Orc',
		hitPoints: 100,
		class: 'Warrior',
		magicPoints: 0,
	}
	myCharacter.abilities.attack(myCharacter, enemy);
  /* Warmup 12-11-21 */
	function getRandomElem (arr) {
		return arr[Math.floor(Math.random() * arr.length)];
	}
	console.log(getRandomElem(['rock', 'paper', 'scissors', 'spock', 'lizard']));
	/* Warmup 16-11-21
	What command do I run to create my branch?
	git checkout -b firstname-lastname

	How many times can I commit my work?
	Infinity

	When do we push our branch?
	The end of the assessment, the instructor will say so.

	What command do I run when I push my branch up?
	git push origin firstname-lastname

	 */
}());
