(function() {
    console.log("For Loop exercise:")
    console.log("[Multiplication Tables]")
    /* 2.
    Create a function named showMultiplicationTable that accepts a
    number and console.logs the multiplication table for that number
    (just multiply by the numbers 1 through 10)
     */
    function showMultiplicationTables(number) {
        console.log(`Displaying multiplication table (1-10) for ${number}`);
        for (let i = 1; i <= 10; i++) {
            console.log(`${number} x ${i} = ${number * i}`)
        }
    }
    showMultiplicationTables(7);

    console.log("For Loop exercise:")
    console.log("[10 Random Numbers]")
    /* 3.
    Use a for loop and the code from the previous lessons to generate
    10 random numbers between 20 and 200 and output to the console
    whether each number is odd or even.
     */
    function oddOrEven(number) {
        return (number % 2 === 0) ? "even" : "odd";
    }

    function randNumInRange(low, hi) {
        return Math.floor(Math.random() * (hi - low + 1) + low);
    }

    function tenRandomNumberCheck(min, max) {
        for (let i = 0; i < 10; i++) {
            let num = randNumInRange(min, max);
            console.log(`${num} is ${num % 2 === 0 ? 'even' : 'odd'}.`);
        }
    }

    tenRandomNumberCheck(20, 200);


    console.log("For Loop exercise:")
    console.log("[Number Pyramid]");
    /* 4.
    Create a for loop that uses console.log to create the output shown below.
    1
    22
    333
    4444
    55555
    666666
    7777777
    88888888
    999999999
     */
    (function () {
        let numberNumberTimes = (num) => {
            let numberLine = '';
            for (let i = 0; i < num; i++) {
                numberLine += num.toString();
            }
            return numberLine;
        }
        for (let i = 1; i < 10; i++) {
            console.log(numberNumberTimes(i));
        }
    }());

    console.log("For Loop exercise:")
    console.log("[100 to 5 Decrement by 5]");
    /* 5.
    Create a for loop that uses console.log to create output 100 to 5 decrementing by 5
     */
    (function () {
        for (let i = 100; i > 0; i -= 5) {
            console.log(i);
        }
    }());

}());