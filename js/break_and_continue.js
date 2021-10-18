(function(){
    console.log("Break and Continue exercise:")
    console.log("[Odd numbers with user input]")
    // prompt user for odd number between 1 and 50
    // using arrow functions & anonymous functions for practice. not the best place for them but...... fun
    const isOdd = (num) => num % 2 !== 0; // implicit return
    const isInRange = (min, max, num) => { return (num >= min) && (num <= max); }
    let userNum = 0;
    while (true) {
        userNum = parseFloat(prompt("Enter an odd number between 1 and 50"));
        if (isOdd(userNum) && isInRange(1, 50, userNum)) {
            break;
        }
    }
    console.log("Number to skip is", userNum);
    for (let i = 1; i <= 50; i += 2) {  // starting on 1 and increment by 2 to only check odd numbers
        if (isOdd(i)) {
            if (i === userNum) {
                console.log("Yikes! Skipping user's number:", userNum);
            } else {
                console.log("Here's an odd number:", i);
            }
        } else {
            continue; // this should literally NEVER run but it's here for the sake of exercise completion
        }
}
}());