"use strict";

$(document).ready(() => {
    const getUserEvent = (user) => {
        fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
            .then((res) => res.json())
            .then((data) => {
                let pushes = data.filter(event => event.type === 'PushEvent');
                console.log(pushes[0].created_at);
            })
            .catch(() => console.log('Github API request failed. Check your input.'));
    }
    getUserEvent('james-wienecke');

    const wait = (time) => {
        const myPromise = new Promise((resolve, reject) => {
                if (typeof time !== 'number') reject(time);
                let timeout = setTimeout(() => {
                    resolve(time);
                }, time);
            })
        return myPromise;
        };

    const logTime = (time) => `resolved in ${time}ms`;
    const logTimeFail = (time) => `Bad input? arg: ${time}, arg type: ${typeof time}`;

    wait(2000)
        .then((time) => console.log(logTime(time)))
        .catch((time) => console.error(logTimeFail(time)));
    wait(1000)
        .then((time) => console.log(logTime(time)))
        .catch((time) => console.error(logTimeFail(time)));
    wait('cat')
        .then((time) => console.log(logTime(time)))
        .catch((time) => console.error(logTimeFail(time)));
});