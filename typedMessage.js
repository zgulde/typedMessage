$(document).ready(function(){
    $('<style>').text('@keyframes typing{ from{width: 100%;} to{width: 0;} }').appendTo($('head'));
});

function TypedMessage($display, message, animationDelay, animationDuration){

    // set default values if they are not passed
    this.message = (!message) ? 'text not set!' : message;
    this.$display = (!$display) ? 'display element not set!' : $display;
    this.animationDelay = (!animationDelay) ? 0 : animationDelay*1000;
    this.animationDuration = (!animationDuration) ? 3 : animationDuration;

     // create the animated span
    this.$innerSpan = $('<span>').css({
        'position': 'absolute',
        'top': '0',
        'right': '0',
        'width': '0',
        'height': '100%',
        'background-color': 'white',
        'border-left': '1px solid black',
        'animation': 'typing '+this.animationDuration+'s steps('+this.message.length+',end)'
    }).html('&nbsp;');


    // container for the inner animated span
    this.$outerSpan = $('<span>').css({
        'position': 'relative',
        'font-family': 'monospace'
    });

    this.show = function(){
        var $innerSpan = this.$innerSpan;
        var $outerSpan = this.$outerSpan;
        var $display = this.$display;
        var message = this.message;
        $innerSpan.css('animation-direction','normal');

        setTimeout( function(){
            $outerSpan.html(message); 
            $outerSpan.appendTo($display);
            $innerSpan.appendTo($outerSpan);
        }, this.animationDelay);

        setTimeout( function(){
            $outerSpan.html(message);
        }, this.animationDelay + (1000*this.animationDuration + 10) ) ;

        return this;
    };

    this.erase = function(){
        var $innerSpan = this.$innerSpan;
        var $outerSpan = this.$outerSpan;
        $innerSpan.css('animation-direction','reverse');
        
        setTimeout( function(){
            $innerSpan.appendTo($outerSpan);
        }, this.animationDelay);

        setTimeout( function(){
            $outerSpan.html('');
        }, this.animationDelay + (1000*this.animationDuration) - 10 ) ;
        return this;
    };

    this.delay = function(delay){
        if ( (typeof delay) === 'undefined') {
            return (this.animationDelay / 1000);
        } else {
            this.animationDelay = delay * 1000;
            return this;
        }
    };

    this.duration = function(duration){
        if (!duration) {
            return this.animationDuration;
        } else {
            this.animationDuration = duration;
            this.$innerSpan.css('animation-duration',this.animationDuration+'s');
            return this;
        }
    };

    this.text = function(text){
        if (!text) {
            return this.message;
        } else {
            this.message = text;
            this.$innerSpan.css('animation-timing-function','steps('+text.length+',end)');
            return this;
        }
    };

    this.display = function($display){
        if (!$display) {
            return this.$display;
        } else {
            this.$display = $display;
            return this;
        }
    };

    return this;
}
