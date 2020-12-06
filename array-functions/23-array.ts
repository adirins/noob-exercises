// ## Exercise #23

// Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the alphabet by one.

// Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use Ascii code to acomplish this.


const shiftLetters = function (text: string) {
    return text.split('').map(item => item.charCodeAt(0) + 1).map(item => String.fromCharCode(item))
};

console.log(shiftLetters("hello")); // => 'ifmmp'
console.log(shiftLetters("abcxyz")); // => "bcdyz{"
