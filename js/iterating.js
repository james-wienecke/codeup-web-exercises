(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    console.log("[ARRAY INIT]");
    let names = ["John", "Chloe", "Nick", "Alex"];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("[ARRAY LENGTH]");
    console.log(names.length);
    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("[ARRAY LITERAL INDEX ACCESS]");
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log("[ARRAY FOR LOOP ITERATION]");
    for (let i = 0; i < names.length; i++) {
        console.log(names[i]);
    }
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log("[ARRAY FOR EACH ITERATION]");
    names.forEach((elem) => {
        console.log(elem);
    });
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    console.log("[ARRAY - THREE FUNCTIONS]");
    function first (array) {
        return array[0];
    }

    function second (array) {
        return array[1];
    }

    function third (array) {
        return array[2];
    }

    let arr = [1, 2, 3, 4, 5, 6, 7];

    console.log("first output " + first(arr), "second output " + second(arr), "third output " + third(arr));
})();
