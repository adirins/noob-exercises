// ## Exercise #1

// Input: Array of elements

// ```javascript
// ["h", "o", "l", "a"];
// ```

// Output: String with comma delimited elements of the array in the same order.

// ```javascript
// "h,o,l,a";

// ```


const chars = ["h", "o", "l", "a"]

const hola = (chars: string[]) => {
  return chars.toString()
};

console.log(hola(chars)); 
