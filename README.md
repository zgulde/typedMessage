# Typing-Animated Messages!

## [Demo][demo]

Based on [Lea Verou's CSS typing animation][1]. This allows you to quickly and easily create awesome-looking typed messages on your webpage.

### Overview
- [Usage](#usage)
- [Methods](#methods)
- [Example](#example)

## Usage

- Include jQuery
- Include typedMessage.js in your javascript scripts
- Include this line in your CSS

    `@keyframes typing{ from{width: 100%;} to{width: 0;} }`

- The $display element must be 
    - positioned relatively
    - a monospace font
    - not have a fixed width i.e. the width must be the size of the message being displayed

All it takes to get up and running is two lines:

    var myTypedMessage = new TypedMessage($display, 'Hello, World');
    myTypedMessage.show();

The contructer takes four agruments, all of which are optional, however the $display element must be set in order to see the message and if arguments are passed they must be in order.

    TypedMessage($display, message, delay, duration)

- `$display` 
    - a jQuery object where the message will be displayed
- `message` 
    - a string containing the message to be animated
    - default value is `text not set!`
- `delay` 
    - delay before the animation starts
    - a number in seconds
    - default value is `0`
- `duration` 
    - duration of the animation
    - a number in seconds
    - default value is `3`

## Methods

- displaying the message
    - `show()` animates the message
    - `erase()` animates the removal of the message
- animation duration and delay
    - all times are in seconds and the arguments passed are numbers
    - `duration([duration])` both a getter and a setter, will return the current duration if no arguments are passed, or set the duration of the animation
    - `delay([delay])` like `duration()` will get or set the delay before the the animation takes place
- message text and display element
    - `text([message])` both a getter and a setter, will return the current message or will change the message
    - `display([$display])` both a getter and a setter, will return the current display element, or set a new one
- All displaying and setting methods will return the object, so they can be chained together

    `myMessage.text('lorem ipsum').delay(1.5).duration(4).show();`
    
## Example

    var myMessage1 = new TypedMessage($mainDisplay, 'Greetings Visitors', 0, 5);
    var myMessage2 = new TypedMessage($subDisplay);
    myMessage2.text('Welcome to my awesome website!').duration(2);
    myMessage2.delay( myMessage1.duration() );
    myMessage1.show();
    myMessage2.show();




[demo]: http://zgulde.github.io/typed_message_demo.html
[1]: http://lea.verou.me/2011/09/pure-css3-typing-animation-with-steps/