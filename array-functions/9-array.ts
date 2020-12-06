// ## Exercise #9

// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// Example:

// ```javascript
// [1, 2, 2]; // => 1^2 + 2^2 + 2^2 = 9.
// ```

function squareSum(arr: number[]) {
    return arr.map(item => item * item).reduce((a, b) => a + b)
}

console.log(squareSum([1, 2, 2])) 
