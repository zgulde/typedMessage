# Typing-Animated Messages!

## [Demo][demo]

 This API you to quickly and easily create awesome-looking animated messages on your webpage. It animates a message one character at a time, creating a typewriter-style animation.

 Based on [Lea Verou's CSS typing animation][1].

## Quick Start

    var myTypedMessage = new TypedMessage($display, 'Hello, World');

    $('#some-btn').click(function(){
        myTypedMessage.show();
    });

This will show the message on the $display element when some-btn is clicked.

## Overview

- [Usage](#usage)
- [Methods](#methods)
- [Example](#example)
- [License](#license)

## Usage


- Include jQuery
- Include typedMessage.js in your javascript scripts
- The message should only be one line, the animation breaks otherwise.

-----------------------------------------------

The contructer takes four agruments, all of which are optional, however the $display element must be set in order to see the message. If arguments are passed to the contructor, they must be in order.

    TypedMessage($display, message, delay, duration)

- `$display` 
    - a jQuery object where the message will be displayed
- `message` 
    - a string containing the message to be animated
    - default value is `"text not set!"`
- `delay` 
    - delay before the animation starts
    - a number in seconds
    - default value is `0`
- `duration` 
    - duration of the animation
    - a number in seconds
    - default value is `3`

Create a message and attatch it to a display, and then you can manipulate it in various ways (see [methods](#methods) below).

    var myMessage = new TypedMessage($('#my-display'), 'Time is an illusion. Lunchtime doubly so.');

    ...

    myMessage.show();

You can also create a one time message to display e.g.

    var $myDisplay = $('#an-h-one-i-want-animated');
    TypedMesssage($myDisplay, 'The Holy Hand Grenade of Antioch').show();

Note that you will not be able to erase or change the message if you choose to use it this way.

## Methods

- displaying the message
    - `show()` animates the message
    - `erase()` animates the removal of the message
- animation duration and delay
    - `duration([duration])` both a getter and a setter, will return the current duration if no arguments are passed, or set the duration of the animation
    - `delay([delay])` like `duration()` will get or set the delay before the the animation takes place
    - all times are in seconds and the arguments passed are numbers
- message text and display element
    - `text([message])` both a getter and a setter, will return the current message or will change the message
    - `display([$display])` both a getter and a setter, will return the current display element, or set a new one
- All displaying and setting methods will return the object, so they can be chained together thusly: 

    `myMessage.text('lorem ipsum').delay(1.5).duration(4).show();`
    
## Example

HTML

    <h1 id="#main-display"></h1>
    <h2 id="sub-display"></h2>

JS

    var myMessage1 = new TypedMessage($('#main-display'), 'Greetings Visitors', 0, 5);
    var myMessage2 = new TypedMessage($('#sub-display'));

    myMessage2.text('This must be Thursday. I never could get the hang of Thursdays.');
    myMessage2.duration(2).delay( myMessage1.duration() );

    myMessage1.show();
    myMessage2.show();

## License

The [MIT License][2]


[demo]: http://zgulde.github.io/typed_message_demo.html
[1]: http://lea.verou.me/2011/09/pure-css3-typing-animation-with-steps/
[2]: https://opensource.org/licenses/MIT
