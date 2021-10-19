"use strict";
(function (){

    // Make arrays with brackets
    let testArray = [];
    // array initialized, but it's an empty array

    let instructors = ["David", "Jay", "Javier", "Codey the Duck"];
    // This array has 4 elements now. This array is made of 4 strings, but in JS,
    // not all elements in an array have to be of the same type.
    let falsyValues = [false, null, "", undefined, 0, NaN];

    // What can we do with arrays?
    // Count the length of the array:
    console.log(instructors.length);

    // Arrays are zero indexed. We can access the value at an index in an array with brackets
    console.log(instructors[1]);

    // there are lots of things to do with array length properties
    let randomIndex = Math.floor(Math.random() * instructors.length);
    console.log(instructors[randomIndex]);

    // interestingly, javascript is very forgiving with arrays. console logging an array prints
    // out the whole array as an object with lots of detail!
    console.log(instructors)

    // accessing an entire array can be done with iteration!
    for (let i = 0; i < instructors.length; i++) {
        console.log(`one of your instructors is ${instructors[i]}.`)
    }
    // arrays are zero indexed, so a traditional for loop should start with index at 0 and
    // end when index < array.length

    // arrays are often used to do stuff a bit more complicated than that however
    function testAllForfalsy(array) {
        let finalVal = -1;
        for (let i = 0; i < array.length; i++) {
            if (array[i]) {
                console.log("Array value at index " + i + " is true");
                finalVal = i;
                break;
            }
        }
        if (finalVal === -1) {
            console.log("All values of array are falsy");
        }
        return finalVal;
    }
    testAllForfalsy(falsyValues);

    // We can also have a for each loop. for each can be given a function with up to three args
    // arrayThing.forEach(function(element, index, array){
    //      ...do stuff...
    // })

    // Notice we pass an unnamed function into foreach. it's worth noting the names of the args for this 'callback function'
    // are ones we can define ourselves, but what each parameter is meant to represent will not.
    // Parameter 1: represents an element from an array, specifically the array being accessed with the loop
    // Parameter 2: optional, but  represents the index at the start of the iteration
    // Parameter 3: optional, requires p2 but is for the array itself

    instructors.forEach(function (instructor, index, array) {
        console.log("Instructor #" + parseFloat(index + 1) + " of " + array.length + " is " + instructor);
    })

    let numbers = [17,22,34,52,6];

    numbers.forEach(function (number, index) {
        if (index % 2 === 0) {
            console.log(number * 2);
        }
    })

    function introduction (name) {
        console.log("Hi, my name is " + name);
    }
instructors.forEach(introduction);
}());