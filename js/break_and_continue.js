(function(){
    // prompt user for odd number between 1 and 50
    // using arrow functions with anonymous functions
    console.log("Break and Continue exercise:")
    console.log("[Odd numbers with user input]")
    const isOdd = (num) => num % 2 !== 0; // implicit return
    const isInRange = (min, max, num) => { return (num >= min) && (num <= max); }
    let userNum = 0;
    while (true) {
        userNum = parseFloat(prompt("Enter an odd number between 1 and 50"));
        if (isOdd(userNum) && isInRange(1, 50, userNum)) {
            break;
        }
    }
    console.log(`Number to skip is`, userNum);
    for (let i = 0; i <= 50; i++) {
        if (isOdd(i)) {
            if (i === userNum) {
                console.log(`Yikes! Skipping user's number:`, userNum);
            } else {
                console.log(`Here's an odd number:`, i);
            }
        } else {
            continue;
        }
}
}());