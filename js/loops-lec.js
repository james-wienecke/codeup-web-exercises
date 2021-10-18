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