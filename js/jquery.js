"use strict";

const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;
const aKey = 65;
const bKey = 66;
const enterKey = 13;

const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
let last11keys = [];

let colorChangingBG = null;



$(document).ready(function () {
    // keyboard input
    $(document).keyup(function(event) {
        keyCodeHandling(event.keyCode);
    });

    // mouse click input
    $('.button').on('click', function(event) {
        keyCodeHandling(idtoKeyCodeLookup($(event.currentTarget).attr('id')))
    })

    // here we tally up all the key info and listen for konami code pattern
    function keyCodeHandling (keyCode) {
        // store the key event
        last11keys.push(keyCode);
        keyCodeButtonFlash(keyCode);
        // try and match start of pattern so we can refresh key history
        if        ((last11keys[last11keys.length - 1] === 40)
            && (last11keys[last11keys.length - 2] === 38)
            && (last11keys[last11keys.length - 3] === 38)) {
            last11keys = [38, 38, 40];
            console.log('listening for konami code');
        }
        // check for konami code pattern
        if (last11keys.length >= 11) {
            konamiCodeCheck();
            last11keys = [];
        }
    }

    function konamiCodeCheck () {
        if (arraysEqual(last11keys, konamiCode)) {
            console.log('Konami code entered');
            // fun DOM party stuff
            $('#code-detected').css('display', 'inline');
            colorChangingBG = setInterval(() => {
                let randomColor = CSS_COLOR_NAMES[Math.floor(Math.random() * CSS_COLOR_NAMES.length)];

                $('body').css('background-color', `${randomColor}`);
                $('#konami').css('color', `${randomColor}`);
            }, 750);
            setTimeout(function () {
                clearInterval(colorChangingBG);
                colorChangingBG = null;
                $('body').css('background-color', 'black');
                $('#konami').css('color', 'white');
                $('#code-detected').css('display', 'none');
            }, 15000);
        }
    }

    // convert keycode to element id
    function keyCodeButtonFlash(key) {
        switch(key) {
            case leftKey:
                showAndHide($('#left-key'));
                return 'left';
            case upKey:
                showAndHide($('#up-key'));
                return 'up';
            case rightKey:
                showAndHide($('#right-key'));
                return 'right';
            case downKey:
                showAndHide($('#down-key'));
                return 'down';
            case aKey:
                showAndHide($('#a-key'));
                return 'a';
            case bKey:
                showAndHide($('#b-key'));
                return 'b';
            case enterKey:
                showAndHide($('#start-key'));
                return 'start';
        }
    }

    // convert from element id to keycode
    function idtoKeyCodeLookup(keyName) {
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