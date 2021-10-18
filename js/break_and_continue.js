(function(){
// prompt user for odd number between 1 and 50
function isOdd(num) {
    return (num % 2 === 0) ? false : true;
}
function isInRange(min, max, num) {
    return (num >= min) && (num <= max);
}
while (true) {
    var userNum = parseFloat(prompt("Enter an odd number between 1 and 50"));
    if (isOdd(userNum) && isInRange(1, 50, userNum)) {
        break;
    }
}
console.log("Number to skip is", userNum);
for (let i = 0; i <= 50; i++) {
    if (isOdd(i)) {
        if (i === userNum) {
            console.log("Yikes! Skipping user number:", userNum);
        } else {
            console.log("Here's an odd number:", i);
        }
    } else {
        continue;
    }
}
}());