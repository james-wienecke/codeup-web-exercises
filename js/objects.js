"use strict";
(function() {
    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    console.log("[ person & sayHello ]");
    let person = {
        firstName: "James",
        lastName: "Wienecke",
        sayHello: function () {
            return `Hello from ${this.firstName} ${this.lastName}!`;
        }
    };

    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */

    console.log(person.sayHello());

    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to
     * more than $200. If a shopper spends more than $200, they get a 12%
     * discount. Write a JS program, using conditionals, that logs to the
     * browser, how much Ryan, Cameron and George need to pay. We know that
     * Cameron bought $180, Ryan $250 and George $320. Your program will have to
     * display a line with the name of the person, the amount before the
     * discount, the discount, if any, and the amount after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */
    console.log("[ shoppers discount ]")
    let shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];

    function calcDiscount(total) {
        return (total > 200) ? total - (total * 0.12) : total;
    }
    (function() {
        shoppers.forEach(elem => {
            console.log(`Shopper: ${elem.name}`);
            console.log(`Total before discount: $${elem.amount.toFixed(2)}`);
            console.log(`After discount: $${calcDiscount(elem.amount).toFixed(2)}`);
        })
    })();

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    console.log("[ Books ]");
    let books = [];

    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */

    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     * - Create a function named `showBookInfo` that accepts a book object and
     *   outputs the information described above. Refactor your loop to use your
     *   `showBookInfo` function.
     */
    function createBook (title, authorName) {
        let author = authorName.split(' ');
        return {
            name: title,
            author: {
                first: author[0],
                last: author[1],
                name: function () { return `${this.first} ${this.last}`; }
            },
            keywords: [],
            addKeywords: function (newKeywords) { this.keywords.push(newKeywords); },
            available: true,
            dateAvailable: 'now',
            lend: function () {
                this.available = false;
                this.dateAvailable = new Date(new Date + 12096e5);
            },
            receive: function () {
                this.available = true;
                this.dateAvailable = 'now';
            }
        }
    }

    function showBookInfo (book, index) {
        console.log(`Book #${index + 1}`);
        console.log(`Title: ${book.name}`);
        console.log(`Author: ${book.author.name()}`);
    }

    function listBooks() {
        books.forEach((book, index) => {
            showBookInfo(book, index);
            console.log(`---`);
        });
    }

    books.push(createBook('Dune', 'Frank Herbert'));
    books.push(createBook('Blindsight', 'Peter Watts'));
    books.push(createBook('Three Body Problem', 'Cixin Liu'));
    books.push(createBook('Imagica', 'Clive Barker'));
    books.push(createBook('Weaveworld', 'Clive Barker'));
    books.push(createBook('Annihilation', 'Jeff VanderMeer'));
    books.push(createBook('Blood Meridian', 'Cormac Mccarthy'));
    books.push(createBook('1Q84', 'Haruki Murakami'));
    listBooks();
})();
