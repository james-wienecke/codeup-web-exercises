"use strict";

$(document).ready(() => {
    const getUserEvent = user => {
        fetch(`https://api.github.com/users/${user}/events`,
            {headers: {'Authorization': `token ${GITHUB_TOKEN}`}})
            .then(res => res.json())
            .then(data => {
                let pushes = data.filter(event => event.type === 'PushEvent');
                // console.log(user, 'last push on:', pushes[0].created_at);
                $('#github-user-name').text(user);
                $('#github-user-time').text(pushes[0].created_at);
            })
            .catch(() => console.log('Github API request failed. Check your input.'));
    }
    getUserEvent('james-wienecke');

    $('#github-user-search-submit').on('click', (e) => {
        e.preventDefault();
        getUserEvent($('#gh-user-input').val())
    });

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




    /*  <section id="wait-input-container" class="">
            <div class="input-group">
                <input type="text" class="form-control wait-input" id="wait-time-input-0" placeholder="Enter a time to wait in seconds"
                       aria-label="specify time to wait" aria-describedby="time-to-wait">
                <div class="input-group-append">
                    <button class="btn btn-primary" type="button" id="wait-time-submit-0">Start waiting!</button>
                </div>
            </div>
        </section>
     */
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
    $('#wait-input-container').append(createWaitInputGroup(0))
    $('#wait-input-container').append(createWaitInputGroup(1))

    /*
            <div class="wait-display">
                <h5>Waiting for <span class="wait-label"></span></h5>
                <p class="wait-result"></p>
            </div>
     */
    const createWaitResultsElem = index => {
        const $label = $(document.createElement('h5'))
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

    $('#wait-results-container').append(createWaitResultsElem(0))
    $('#wait-results-container').append(createWaitResultsElem(1))

    $('.wait-button').on('click', function (e) {
        e.preventDefault();
        const index = $(this).children('button').data('index');
        const input = parseFloat($(this).parent().children('input').val());
        wait(input * 1000)
            .then(time => $(`#wait-result-${index}`).text(`Waited for ${time/1000} seconds`))
            .catch(time => logTimeFail(time));
    });
});