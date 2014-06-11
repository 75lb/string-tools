"use strict";

/**
Some useful functions for working with strings
@module
@alias s
*/

/** some cross platform symbols (`tick` and `cross`) */
exports.symbol = symbol();
exports.fill = fill;
exports.padRight = padRight;
exports.escapeRegExp = escapeRegExp;
exports.repeat = repeat;


/**
escape special regular expression characters
@example
```js
> w.escapeRegExp("(.*)");
'\\(\\.\\*\\)'
```
*/
function escapeRegExp(string){
    return string
        ? string.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1")
        : "";
}

/**
Create a new string filled with the supplied character
@param {string} - the fill character
@param {number} - the length of the output string
@returns {string}
@example
```js
> w.fill("a", 10)
'aaaaaaaaaa'
> w.fill("ab", 10)
'aaaaaaaaaa'
```
*/
function fill(fillWith, len){
    var buffer = new Buffer(len);
    buffer.fill(fillWith);
    return buffer.toString();
}

/**
Add padding to the right of a string
@param {string} - the string to pad
@param {number} - the desired final width
@param {string} [padWith=" "] - the padding character
@returns {string}
@example
```js
> w.padRight("clive", 1)
'clive'
> w.padRight("clive", 1, "-")
'clive'
> w.padRight("clive", 10, "-")
'clive-----'
```
*/
function padRight(input, width, padWith){
    padWith = padWith || " ";
    if (input.length < width){
        return input + fill(padWith, width - input.length);
    } else {
        return input;
    }
}

function symbol(){
    return {
        tick: process.platform === "win32" ? "√" : "✔︎",
        cross: process.platform === "win32" ? "×": "✖"
    };
}

/**
returns the input string repeated the specified number of times
@param {string} - input string to repeat
@param {number} - the number of times to repeat
@returns {string}
*/
function repeat(input, times){
    var output = "";
    for (var i = 0; i < times; i++){
        output += input;
    }
    return output;
}