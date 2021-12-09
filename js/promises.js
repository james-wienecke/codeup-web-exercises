"use strict";

$(document).ready(() => {

    // utility function for the demo
    const formatDemoTimeStamp = (time) => {
        const hour = String(time.getHours()).padStart(2, '0');
        const min = String(time.getMinutes()).padStart(2, '0');
        const sec = String(time.getSeconds()).padStart(2, '0');
        const ms = String(time.getMilliseconds()).padStart(3, '0');
        return `${hour}:${min}:${sec}.${ms}`;
    }

    // we use this broadly scoped object to toggle verbose logging for the initial demo mode
    let demoRunning = { gh: true, wait: true, };

    const setupGithubUserSearchSection = () => {
        const formatDate = (timestamp) => {
            const date = new Date(timestamp);
            return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear() + 1} at `
                + `${String(date.getHours()).padStart(2, '0')}:`
                + `${String(date.getMinutes()).padStart(2, '0')}:`
                + `${String(date.getSeconds()).padStart(2, '0')}.`;
        }

        const getUserEvent = user => {
            const timeStart = new Date();
            fetch(`https://api.github.com/users/${user}/events`,
                {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
                .then(res => res.json())
                .then(data => {
                    let pushes = data.filter(event => event.type === 'PushEvent');
                    $('#github-user-name').text(user);
                    const timeStamp = formatDate(pushes[0].created_at)
                    $('#github-user-time').text(timeStamp);
                    // console.log for demo
                    let timeResponse1 = new Date()
                    if (demoRunning.gh) {
                        console.log(`user: ${user}`, `time changed: ${timeStamp}`);
                        console.log(`<< Github section 1st response time delta: ${(timeResponse1 - timeStart)}ms >>`);
                    }
                    // add the repo's name and a link to the main page
                    fetch(`https://api.github.com/repos/${pushes[0].repo.name}`,
                        {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
                        .then(res => res.json())
                        .then(data => {
                            $('#github-user-repo').empty()
                                .append($(document.createElement('a'))
                                    .text(data.name)
                                    .attr('href', data.html_url));
                            // console.log for demo
                            if (demoRunning.gh) {
                                console.log(`repo name: ${data.name}`, `repo link:`, data.html_url);
                                const timeResponse2 = new Date();
                                console.log(`<< Github section 2nd response time delta: ${(timeResponse2 - timeResponse1)}ms >>`);
                                console.log(`<< Github section total time delta: ${(timeResponse2 - timeStart)}ms >>`);
                                console.log(`<< [Demo]: Demo github section complete. Timestamp: ${formatDemoTimeStamp(timeResponse2)} >>`);
                                demoRunning.gh = false;
                            }
                        });

                })
                .catch(() => console.error('Github API request failed. Check your input.'));
        }

        $('#github-user-search-submit').on('click', (e) => {
            e.preventDefault();
            getUserEvent($('#gh-user-input').val())
            $('#gh-user-input').val('');
        });
    }

    const setupWaitAndPromisesSection = () => {
        // main wait function from exercise
        // utility functions for wait
        const logTime = time => console.log(`resolved in ${time}ms`);
        const logTimeFail = time => console.error(typeof time, time, `argument invalid`);

        // wait promise setup
        const wait = time => {
            return new Promise((resolve, reject) => {
                if (typeof time !== 'number') reject(time);
                let timeout = setTimeout(() => {
                    resolve(time);
                }, time);
            });
        }

        // dom setup

        // build up the input for waiting
        const createWaitInputGroup = (index) => {
            const $label = $(document.createElement('p'))
                .addClass('text-secondary text-monospace pr-2 my-auto')
                .attr('id', `wait-input-label-${index}`)
                .text(`Wait #${index + 1}`);

            const $input = $(document.createElement('input'))
                .addClass('form-control wait-input')
                .attr('id', `wait-time-input-${index}`)
                .attr('type', 'text')
                .attr('placeholder', 'Enter a time to wait in seconds')
                .attr('aria-label', 'specify time to wait')
                .attr('aria-describedby', 'time-to-wait');

            const $button = $(document.createElement('div'))
                .addClass('input-group-append wait-button')
                .append($(document.createElement('button'))
                    .addClass('btn btn-primary')
                    .attr('id', `wait-time-submit-${index}`)
                    .attr('type', 'button')
                    .text('Start waiting!')
                    .data('index', index));

            return $(document.createElement('div'))
                .addClass('input-group wait-input-group align-content-center py-1')
                .append($label, $input, $button);
        }

        // build up the wait results display
        const createWaitResultsElem = index => {
            const $label = $(document.createElement('p'))
                .addClass('text-secondary text-monospace py-2 my-auto mr-2')
                .attr('id', `wait-result-label-${index}`)
                .text(`Wait #${index + 1}`)

            const $result = $(document.createElement('p'))
                .addClass('text-primary py-2 my-auto ml-2')
                .attr('id', `wait-result-${index}`)
                .text('');

            return $(document.createElement('div'))
                .addClass('input-group-append wait-display')
                .append($label, $result);
        }

        // DOM event handling for wait section

        // listen to trigger the wait for user's input
        const setupWaitEventListeners = () => {
            $('.wait-button').on('click', function (e) {
                e.preventDefault();
                const index = $(this).children('button').data('index');
                const input = parseFloat($(this).parent().children('input').val());
                const $result = $(`#wait-result-${index}`).text('');
                wait(input * 1000)
                    .then(time => {
                        $result.text(`Waited for ${time/1000} seconds`);
                        // console logging for demo
                        if (demoRunning.wait) {
                            logTime(time);
                            console.log(`<< [Demo]: Demo wait for promise section complete. Timestamp: ${formatDemoTimeStamp(new Date())} >>`)
                            demoRunning.wait = false;
                        }
                    })
                    .catch(time => logTimeFail(time));
            });
        }

        // creates as many pairs of wait input/output elements as specified
        const buildWaitElements = index => {
            let $input = $('#wait-input-container').empty();
            let $results = $('#wait-results-container').empty()
            for (let i = 0; i < index; i++) {
                $input.append(createWaitInputGroup(i))
                $results.append(createWaitResultsElem(i))
            }
            setupWaitEventListeners()
        }


        // setup on page load with default selection number of elements
        (() => {
            buildWaitElements($('#pref-wait-num').val());
        })();


        // allow user to change number of wait inputs
        $('#pref-wait-num').on('change', function (e) {
            buildWaitElements($(this).val());
        });
    }
    const demo = () => {
        console.log(`<< [Demo]: Demo start. Timestamp: ${formatDemoTimeStamp(new Date())} >>`);
        // demo github history lookup
        $('#gh-user-input').val('james-wienecke');
        $('#github-user-search-submit').trigger('click');

        // demo wait for promise
        $('#wait-time-input-0').val('1.337');
        $('.wait-button').trigger('click');
    }

    // initial page setup
    (() => {
        setupGithubUserSearchSection();
        setupWaitAndPromisesSection();

        demo();
    })();
});