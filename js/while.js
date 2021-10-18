(function() {
    /*
    Create a while loop that uses console.log() to create the output shown below
    2
    4
    8
    16
    32
    64
    128
    256
    512
    1024
    2048
    4096
    8192
    16384
    32768
    65536
     */

    let counter = 2;
    while (counter < 100000) {
        console.log(counter);
        counter = counter << 1; // :^)
    }

    /* DO WHILE LOOP
    An ice cream seller can't go home until she sells all of her cones.
    First write enough code that generates a random number between 50 and 100
    representing the amount of cones to sell before you start your loop.
    Inside of the loop your code should generate another random number between
    1 and 5, simulating the amount of cones being bought by her clients. Use a
    do-while loop to log to the console the amount of cones sold to each person.
     */

// This is how you get a random number between 50 and 100
    let allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
//Math.floor(Math.random() * 5) + 1;
    do {
        let boughtCones = Math.floor(Math.random() * 5) + 1;
        allCones -= boughtCones;
        console.log(iceCreamReport(allCones, boughtCones));
    } while (allCones > 0);
    console.log("Time to go home!")

    function iceCreamReport(all, delta) {
        const plural = function() { return (delta > 1) ? `s` : `` };
        if (all < 0) {
            return `Cannot sell ${delta} cone${plural(delta)}. I could only sell ${all + delta} cone${plural(all + delta)}...`;
        } else {
            return `Yay! ${delta} cone${plural(delta)} sold. ${all} cone${plural(all)} left to go!`;
        }
    }
}());