const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
let atLeastThreeLang = users.filter(user => user.languages.length >= 3);
console.log(atLeastThreeLang);

// Use .map to create an array of strings where each element is a user's email address
let userEmails = users.map(user => user.email);
console.log(userEmails);

// Use .reduce to get the total years of experience from the list of users. Once you get
// the total of years you can use the result to calculate the average.
let totalYears = users.reduce((years, user) => years + user.yearsOfExperience, 0);
let avgYears = totalYears / users.length;
console.log(avgYears);

// Use .reduce to get the longest email from the list of users.
let longestEmail = users.reduce((longest, user) => {
    if (longest.length < user.email.length) longest = user.email;
    return longest;
},'');
console.log(longestEmail);

// Use .reduce to get the list of user's names in a single string.
// Example: Your instructors are: ryan, luis, zach, fernando, justin.
let userNames = users.reduce((names, user, i) => {
    // if we're at the last index, don't bother adding comma and space
    if (i === users.length - 1) names += `${user.name}`;
    // otherwise add the comma and space for readability
    else names += `${user.name}, `;
    return names
} , '')
console.log(userNames)

// Use .reduce to get the unique list of languages from the list of users.

let userLangs = users.reduce((langCount, user) => {
    // if (typeof langCount[user.languages] === 'undefined') {
    //     langCount[user.languages] = 1;
    // }
    // else {
    //     langCount[user.languages] += 1;
    // }
    for (let lang of user.languages) {
        if (typeof langCount[lang] === 'undefined') {
            langCount[lang] = 1;
        }
        else {
            langCount[lang] += 1;
        }
    }
    return langCount;
}, {});
let uniqueLangs = Object.keys(userLangs).reduce((langs, langStr, i, arr) => {
    // if we're at the last index, don't bother adding comma and space
    if (i === arr.length - 1) langs += `${langStr}`;
    // otherwise add the comma and space for readability
    else langs += `${langStr}, `;
    return langs
}, '');
console.log(uniqueLangs);