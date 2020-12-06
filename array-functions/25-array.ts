// ## Exercise #25

// Write a function that takes a string and a target, and returns true or false if the target is present in the string.


const isPresent = function (text: string, target: string) {
   // return text.includes(target)
   return text.split('').map(item => item === target)

};

console.log(isPresent("abcd", "b")); // => true
console.log(isPresent("efghi", "a")); // => false

