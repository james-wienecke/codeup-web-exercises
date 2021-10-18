(function() {
    console.log("While Loop exercise:")
    console.log("[Powers of Two]")
    /* Create a while loop that uses console.log() to create the output shown below
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

    console.log("While Loop exercise:")
    console.log("[Ice Cream Seller]")
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
    console.log(`I have to sell ${allCones} ice cream cones before I can go back home and pet my dogs and cats...`);
    // This expression will generate a random number between 1 and 5
    //Math.floor(Math.random() * 5) + 1;
    // iceCreamReport is main logical body of exercise part
    function iceCreamReport(all, delta) {
        // this little function will handle silly english plural cases if passed the quantity of objects being described
        const plural = (d) => { return (d != 1) ? `s` : `` };
        // maybe some people don't like them but I've become addicted to template literals.
        // I actually had to remove some from other parts of today's exercise to increase output info density
        if (all < 0) {
            return `Cannot sell ${delta} cone${plural(delta)}. I could only sell ${all + delta} cone${plural(all + delta)}.`;
        } else {
            return `Yay! ${delta} cone${plural(delta)} sold. ${all} cone${plural(all)} left to go!`;
        }
    }
    // main loop happens in this block. continue selling ice cream cones until there are no more cones to sell! yum
    do {
        let boughtCones = Math.floor(Math.random() * 5) + 1;
        allCones -= boughtCones;
        console.log(iceCreamReport(allCones, boughtCones));
    } while (allCones > 0);
    console.log("Time to go home!");
}());