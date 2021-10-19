(function (){
    "use strict";
    console.log("[ FRUITS ARRAY : allIndexesOf() ]");
    let fruits = ["apple", "banana", "orange", "apple", "pineapple"];

    function allIndexesOf(array, value) {
        let indexArr = [];
        array.forEach((elem, i) => {
            if (elem === value) indexArr.push(i);
        });
        return indexArr;
    }

    console.log(allIndexesOf(fruits, "apple"));
    console.log(allIndexesOf(fruits, "guava"));
    console.log(allIndexesOf(fruits, "pineapple"));

    console.log("[ BUGS ARRAY : REMOVE ALL ]");
    var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
    /*
    removeAll(bugs, "ant") should return ["mosquito", "scorpion",   "mosquito", "typo", "reference error", "type error"]
    removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant",   "ant", "typo", "reference error", "type error"]
    removeAll(bugs, "roach") should return the original array b/c "roach" has no occurrances.
     */
    function removeAll(array, value) {
        let cleanArray = [];
        array.forEach((elem) => {
            if (elem !== value) cleanArray.push(elem);
        });
        return cleanArray;
    }

    console.log(removeAll(bugs, "ant"));
    console.log(removeAll(bugs, "mosquito"));
    console.log(removeAll(bugs, "roach"));

    console.log("[ randomIntBetween(min, max) ]");
    function randomIntBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    console.log("[ coinFlip() ]");
    function coinFlip() {
        return randomIntBetween(0, 1);
    }
    console.log(listOfRollsFromDieFunc(5, coinFlip));

    console.log("[ twoDice() ]");
    function twoDice() {
        return randomIntBetween(2, 12);
    }
    console.log(listOfRollsFromDieFunc(8, twoDice));

    console.log("[ twentySidedDie() ]")
    function twentySidedDie() {
        return randomIntBetween(1, 20);
    }
    console.log(listOfRollsFromDieFunc(12, twentySidedDie));

    console.log("[ twelveSidedDie() ]");
    function twelveSidedDie() {
        return randomIntBetween(1, 12);
    }
    console.log(listOfRollsFromDieFunc(6, twelveSidedDie));

    console.log("[ tetrahedron() ]");
    function tetrahedron() {
        return randomIntBetween(1, 4);
    }
    console.log(listOfRollsFromDieFunc(4, tetrahedron));

    console.log("[ rollDie() & listOfRolls(num) ]");
    function rollDie() {
        return randomIntBetween(1, 6);
    }

    function listOfRolls(num) {
        let rollList = [];
        for (let i = 0; i < num; i++) {
            rollList.push(rollDie());
        }
        return rollList;
    }
    console.log(listOfRolls(8));

    console.log("[ listOfRollsFromDieFunc(numRolls, dieFunc) ]");
    function listOfRollsFromDieFunc(numRolls, dieFunc) {
        let results = [];
        for (let i = 0; i < numRolls; i++) {
            results.push(dieFunc());
        }
        return results;
    }

    console.log(listOfRollsFromDieFunc(5, rollDie));
    console.log(listOfRollsFromDieFunc(12, twelveSidedDie));
    console.log(listOfRollsFromDieFunc(12, twentySidedDie));

    /**
     * JS Array Practice
     * Intermediate Array practice: array creation, iteration, and manipulation
     */

    // TEST ARRAYS!!!!!! GET 'EM WHILE THEY'RE HOT!!!!!!!
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

// Exercise 0. Write a function named first() that returns only the first element of an array
    function first(array) {
        return array[0];
    }
    console.log(first(colors));

// Exercise 1. Write a function named secondToLast() that returns the second to last element
    function secondToLast(array) {
        return array[array.length - 2];
    }
    console.log(secondToLast(colors));

// Exercise 2. Write a function named rest() that takes an an array and returns an array containing everything except the first element.
    function rest(array) {
        return array.slice(1, (array.length - 1));
    }
    console.log(rest(colors));

// Exercise 3. Write a function named getLongestString that takes in an array of strings and returns the longest string of that array
    function getLongestString(array) {
        let longest = '';
        array.forEach((elem) => {
            if (elem.length > longest.length) longest = elem;
        });
        return longest;
    }
    console.log(getLongestString(colors));
    console.log(getLongestString(bugs));

// Exercise 3.1 Write a function named getShortestString that takes in an array of strings and returns the shortest string in that array.
    function getShortestString(array) {
        let shortest = getLongestString(array);
        array.forEach((elem) => {
            if (elem.length < shortest.length) shortest = elem;
        });
        return shortest;
    }
    console.log(getShortestString(colors));
    console.log(getShortestString(bugs));

// Exercise 4. Write a function named addTwoArrays that takes in two, one dimensional arrays. The function should return a single array containing all of the elements of the first array along with all of the elements of the second array
// Example: addTwoArrays([1, 2, 3], [4, 5, 6]) should return [1, 2, 3, 4, 5, 6]
    function addTwoArrays(arr1, arr2) {
        return arr1.concat(arr2);
    }
    console.log(addTwoArrays([1, 2, 3], [4, 5, 6]));

// Exercise 5. Write a function named getUniqueValues that takes in an array and returns the array without any duplicates
// Example: getUniqueValues(["a", "b", "a", "b", "c", "c"]) should return ["a", "b", "c"]
    function getUniqueValues(array) {
        let uniques = new Set(array);
        return Array.from(uniques);
    }
    console.log(getUniqueValues(["a", "b", "a", "b", "c", "c"]));
// Exercise 6. Write a function named reverseArray that takes in an array and returns it reversed, but without altering the original array.
    function reverseArray(array) {
        return Array.from(array).reverse();
    }
    console.log(bugs);
    console.log(reverseArray(bugs));
    console.log(bugs);

// Exercies 7. Write a function named getRandomQuote().
//   Inside of the function, create an array of strings where each string is a quote or thought you find inspirational
//   getRandomQuote should generate a random number between 0 and the array's length minus 1
//   use the randomly generated number as your index
//   return a random quote.

    function getRandomQuote() {
        const quotes = [
            "Ape together, strong.",
            "I punch the floor so hard my bosses' screensaver deactivates.",
            "No, I detest trickery. But if we ourselves are to suffer deception, our hands are no longer bound.",
            "Who is the bigger fool: the fool, or the one who follows him.",
            "That sign can't stop me because I can't read!"
        ];
        return quotes[randomIntBetween(0, quotes.length - 1)];
    }
    console.log(getRandomQuote());

// Exercise 8. Write a function named getIndexesOf() that takes in two arguments.
// The first argument should be a specific numeral or character
// The second argument should be any given string
// getIndexesOf() should return an array containing all of the indexes of that character in the string
// Example: getIndexesOf("a", "banana") should return the array [1, 3, 5]
// Example: getIndexesOf("z", "banana") should return an empty array [] since there are no "z" characters in "banana"
    function getIndexesOf(char, string) {
        let indexArr = [];
        for (let i = 0; i < string.length; i++) {
            if (string[i] === char) indexArr.push(i);
        }
        return indexArr;
    }
    console.log("banana", getIndexesOf("a", "banana"));
    console.log("banana", getIndexesOf("z", "banana"));
// Exercise 9. Write a function named removeAll.
// It should accept an array and a value
// removeAll should return an array with all of the original contents EXCEPT for the provided value
// iterate across the input array
// output array
// Example: removeAll([1, 2, 3], 2) should return [1, 3]
// Example 2: removeAll([2, 2, 3, 4, 5, 2, 2], 2) should return [3, 4, 5]
    console.log(removeAll([1, 2, 3], 2));
    console.log(removeAll([2, 2, 3, 4, 5, 2, 2], 2));

// Exercise 10. Write a function named firstTenFibonacciNumbers() that returns an array of the first ten fibonacci numbers
    function fibonacci(x, y) {
        return x + y;
    }

    function firstTenFibonacciNumbers() {
        let f = [0, 1];
        for (let i = 2; i < 10; i++) {
            f.push(fibonacci(f[f.length - 1], f[f.length - 2]));
        }
        return f;
    }
    console.log(firstTenFibonacciNumbers());

// Exercise 11. Write a function named getNFibonacci(n) that returns an array containing the first n fibonacci numbers
    function getNFibonacci(n) {
        let f = [0, 1];
        for (let i = 2; i < n; i++) {
            f.push(fibonacci(f[f.length - 1], f[f.length - 2]));
        }
        return f;
    }
    console.log(getNFibonacci(10));
    console.log(getNFibonacci(35));

// Exercise 12. Write a function named moveFirstToLast() that takes in an array
// the function should return the array with the first element at the end
// Example: moveFirstToLast([1, 2, 3, 4]) should return [2, 3, 4, 1]
    function moveFirstToLast(array) {
        array.push(array.shift());
        return array;
    }
    console.log(moveFirstToLast([1, 2, 3, 4]));

// Exercise 13. Write a function named zip() that takes in two arrays with the same number of elements
// Zip returns a new array of arrays where each element is an array of the two elements at the same index
// Example: zip([1, 2, 3], [4, 5, 6]) returns [[1, 4], [2, 5], [3, 6])
// Example: zip(["a", "b", "c"], ["x", "y", "z"]) returns [["a", "x"], ["b", "y"], ["c", "z"]]
    function zip(arr1, arr2) {
        let merged = [];
        for (let i = 0; i < arr1.length; i++) {
            merged.push([arr1[i], arr2[i]]);
        }
        return merged;
    }
    console.log(zip([1, 2, 3], [4, 5, 6]));
    console.log(zip(["a", "b", "c"], ["x", "y", "z"]));
}());