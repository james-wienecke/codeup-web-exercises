"use strict";

$(document).ready(() => {
    const getUserEvent = user => {
        fetch(`https://api.github.com/users/${user}/events`,
            {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
            .then(res => res.json())
            .then(data => {
                let pushes = data.filter(event => event.type === 'PushEvent');
                console.log(user, 'last push on:', pushes[0].created_at);
            })
            .catch(() => console.log('Github API request failed. Check your input.'));
    }
    getUserEvent('james-wienecke');

    const wait = time => {
        return new Promise((resolve, reject) => {
            if (typeof time !== 'number') reject(time);
            let timeout = setTimeout(() => {
                resolve(time);
            }, time);
        });
        }

    const logTime = time => console.log(`resolved in ${time}ms`);
    const logTimeFail = time => console.error(typeof time, time, `argument invalid`);

    wait(2000)
        .then(time => logTime(time))
        .catch(time => logTimeFail(time));
    wait(1000)
        .then(time => logTime(time))
        .catch(time => logTimeFail(time));
    wait('cat')
        .then(time => logTime(time))
        .catch(time => logTimeFail(time));

});