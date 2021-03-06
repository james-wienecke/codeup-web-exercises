"use strict";

// key constants.
const leftKey = 'ArrowLeft';
const upKey = 'ArrowUp';
const rightKey = 'ArrowRight';
const downKey = 'ArrowDown';
const aKey = 'a';
const bKey = 'b';
const enterKey = 'Enter';
const shiftKey = 'Shift';

// the konami code as an array of key values
const konamiCode = [upKey, upKey, downKey, downKey, leftKey, rightKey, leftKey, rightKey, bKey, aKey, enterKey];
// keep an array containing the last few key values
let keyHistory = [];
// we will use this for some big css animation for interval control
let colorInterval = null;

$(document).ready(function () {
    // keyboard input
    $(document).keyup(function(event) {
        keyCodeHandling(event.key);
    });

    // mouse click input
    $('.button').on('click', function(event) {
        // mouse click event has its target processed to find what the element's corresponding key would be
        keyCodeHandling(idToKeyLookup($(event.currentTarget).attr('id')));
        // after this point both mouse and key events are treated identically
    })

    // here we tally up all the key info and listen for konami code pattern
    function keyCodeHandling (key) {
        // if key is a single character key (ie. a-z & A-Z) convert to lower case
        if (key.length === 1) key = key.toLocaleLowerCase();
        // store the key event's value
        keyHistory.push(key);
        // if the button corresponds to a button on the controller, flash it
        showAndHide($(`#${keyToIdLookup(key)}-key`));
        // try and match start of pattern so we can refresh key event history
        if    ((keyHistory[keyHistory.length - 1] === downKey)
            && (keyHistory[keyHistory.length - 2] === upKey)
            && (keyHistory[keyHistory.length - 3] === upKey)) {
            keyHistory = [upKey, upKey, downKey];
            console.log('listening for konami code');
        }
        // check for konami code pattern
        if (keyHistory.length >= 11) {
            konamiCodeCheck(keyHistory.slice(-11)); // konami code is 11 inputs long, we only want last 11 inputs
        }
        // trim array
        if (keyHistory.length >= 33) {
            keyHistory = keyHistory.slice(-11); // we keep one konami code's worth of the key history when we trim
        }
    }

    function konamiCodeCheck (keys) {
        if (arraysEqual(keys, konamiCode)) {
            console.log('Konami code entered');
            // fun DOM party stuff
            codeActivated();
        }
    }

    function codeActivated () {
        // show the code detected element
        $('#code-detected').css('display', 'inline');
        // begin changing the background color to a random color from a huge list
        colorInterval = setInterval(() => {
            let randomColor = CSS_COLOR_NAMES[Math.floor(Math.random() * CSS_COLOR_NAMES.length)];
            $('body').css('background-color', `${randomColor}`);
            $('#konami').css('color', `${randomColor}`);
        }, 750);
        // we will stop the color changing and stuff with this setTimeout
        setTimeout(function () {
            clearInterval(colorInterval);
            colorInterval = null;
            $('body').css('background-color', 'black');
            $('#konami').css('color', 'white');
            $('#code-detected').css('display', 'none');
        }, 20000);
    }

    // convert key value to element id
    function keyToIdLookup(key) {
        switch(key) {
            case leftKey:
                return 'left';
            case upKey:
                return 'up';
            case rightKey:
                return 'right';
            case downKey:
                return 'down';
            case aKey:
                return 'a';
            case bKey:
                return 'b';
            case enterKey:
                return 'start';
            case shiftKey:
                return 'select';
        }
    }

    // convert from element id to key value
    function idToKeyLookup(keyName) {
        switch(keyName) {
            case 'left-key':
                return leftKey;
            case 'right-key':
                return rightKey;
            case 'up-key':
                return upKey;
            case 'down-key':
                return downKey;
            case 'a-key':
                return aKey;
            case 'b-key':
                return bKey;
            case 'start-key':
                return enterKey;
            case 'select-key':
                return shiftKey;
        }
    }

    // compare two arrays
    function arraysEqual(a, b) {
        if (a === b) return true;
        if (a == null || b == null) return false;
        if (a.length !== b.length) return false;

        for (let i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) return false;
        }
        return true;
    }

    // small little general method for showing and then hiding an element for a given time via opacity
    function showAndHide(elem) {
        elem.css('opacity', '0.92');
        setTimeout(hide.bind(null, elem), 150);
        function hide(elem) {
            elem.css('opacity', '0');
        }
    }
});