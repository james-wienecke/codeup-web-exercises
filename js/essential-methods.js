$(document).ready(function () {
    let heading = $('#heading').html();
    // alert(heading);
    let cardContents = $('.card').html();

    // jQuery will select the first element if there are multiple
    // alert(cardContents);

    $('.card').html("<h2>Hello from javascript</h2>");

    // we can chain methods
    let box = $('#box');
    box.css('background-color', 'cyan')
        .css('border', '8px solid cadetblue')
        .css({ // we can also pass an object
            'background-color': 'red',
            'border': '8px solid maroon'
        });
    // alert(box.css('background'));

    // jquery works sequentially like this
    $('h2').addClass('highlighted');

    $('.highlighted').click(function () {
        $(this).removeClass('highlighted');
    })
});