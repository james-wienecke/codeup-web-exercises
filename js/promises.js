"use strict";

$(document).ready(() => {

    const setupGithubUserSearchSection = () => {
        const convertTimestampToDate = (timestamp) => {
            const date = new Date(timestamp);
            return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear() + 1} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}.`;
        }

        const getUserEvent = user => {
            fetch(`https://api.github.com/users/${user}/events`,
                {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
                .then(res => res.json())
                .then(data => {
                    let pushes = data.filter(event => event.type === 'PushEvent');
                    $('#github-user-name').text(user);
                    $('#github-user-time').text(convertTimestampToDate(pushes[0].created_at));
                    // add the repo's name and a link to the main page
                    fetch(`https://api.github.com/repos/${pushes[0].repo.name}`,
                        {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
                        .then(res => res.json())
                        .then(data => {
                            $('#github-user-repo').empty()
                                .append($(document.createElement('a'))
                                    .text(data.name)
                                    .attr('href', data.html_url));
                        });

                })
                .catch(() => console.error('Github API request failed. Check your input.'));
        }

        $('#github-user-search-submit').on('click', (e) => {
            e.preventDefault();
            getUserEvent($('#gh-user-input').val())
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
                    .then(time => $result.text(`Waited for ${time/1000} seconds`))
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
    // initial page setup
    (() => {
        setupGithubUserSearchSection();
        setupWaitAndPromisesSection();
    })();
});