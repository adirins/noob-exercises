// ## Exercise #7

// You get an array of numbers, return the sum of all of the positives ones.
// ```javascript
// [1, -4, 7, 12]; // => 1 + 7 + 12 = 20
// ```

function positives(arr: number[]) {
    return arr.filter(item => item >= 0).reduce((a, b) => a + b)
}

console.log(positives([1, -4, 7, 12])) // => 1 + 7 + 12 = 20