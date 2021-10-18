function incrementUntilTen(num) {
    var iterations = 0;
    while(num < 10) {
        iterations++;
        num++;
    }
    return iterations;
}

console.log(incrementUntilTen(7), "expected 3");
console.log(incrementUntilTen(27), "expected 0");

// While loops will only run if the condition is true. If condition is already false when while is evaluated,
// the loop will not be run

do {
    console.log("I'm loop!");
} while (false);

// A Do-While loop will loop at least once, even if condition is false

// For loops will run a specific number of times. More math-y stuff, very powerful! JS also has for each and for of loops

for (let i = 0; i <= 10; i++) {
    console.log("this loop has run", i, "times");
}

function sayHelloXTimes(num) {
    console.log("Saying 'Hello'", num, "times.");
    for (let i = 0; i < num; i++) {
        console.log("Hello.");
    }
}

sayHelloXTimes(3);
sayHelloXTimes(25);
sayHelloXTimes(5);