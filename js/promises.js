"use strict";

$(document).ready(() => {
    const getUserEvent = (user) => {
        fetch(`https://api.github.com/users/${user}/events`, {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
            .then((res) => res.json())
            .then((data) => {
                let pushes = data.filter(event => event.type === 'PushEvent');
                console.log(pushes[0].created_at);
            });
    }
    getUserEvent('james-wienecke');
});