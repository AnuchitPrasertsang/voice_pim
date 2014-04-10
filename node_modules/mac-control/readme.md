#  mac-control

    // install
    
    npm install mac-control
    
    // .js
    
    var mc = require("mac-control");
    mc.keyPress("a");

Send key commands to Mac OS from Node. 

This module features key holding and releasing, making development things like game controllers super easy!

## mc.keyPress( ) 

Will press keys given to it.

## mc.keyHold( ) 

Holds a key until it's told to be released.

## mc.keyRelease( )

Releases a key thats being held.

## Usage

Arguments can be given as a keycode as a number, particular button as a string or as an array filled with either.

Using keyPress with an array will press the keys in order, then release them in the same order.

Future work on this module will include mouse control, volume and brightness.

## Examples

    mc.keyPress(12);  // q
    
    mc.keyPress("b"); // b
    
    mc.keyPress("T"); // t

    mc.keyPress("tab"); // tab key

## Passing arrays

    mc.keyPress(["shift","q"]); // Q
    
    mc.keyPress(["a","b"," ","c"]); // ab c

    mc.keyPress(["shift","a","b","c"]); // ABC
    
    mc.keyPress(["shift","2"]); // @

# keyHold / keyRelease examples
    
    mc.keyHold("b");

    setTimeout(function(){
        mc.keyRelease("b");
    },1000);
    
    mc.keyHold("shift");
    mc.keyPress("a");
    mc.keyRelease("shift");

## Supported non-letter strings:

tab, command/cmd, control/ctrl, alt/option/opt, enter/return, delete/del, 
function/fn, escape/esc, capslock/caps, up, down, left, right, shift

##  Shift key modifier table
    //   a z 1 2 3 4 5 6 7 8 9 0 - = [ ] ; ' \ ` , . /
    //   A Z ! @ £ $ % ^ & * ( ) _ + { } : " | ~ < > ?
    
    May differ depending on your keyboard layout.
    
## Proposed features
    
    mc.keyPress("a",true,2000,callback); // key repeat, duration of press, callback function 
    
