// ## Exercise #10

// Write a method, that will get an integer array as parameter and will process every number from this array.
// Return a new array with processing every number of the input-array like this:

// ```javascript
// [4, 3, 9, 7, 2, 1]; // => [2,9,3,49,4,1]
// ```

// If the number has an integer square root, take this, otherwise square the number.

// The input array should not be modified!

function square(arr: number[]) {

    return arr.map(item => {
        if (Math.sqrt(item) % 1 === 0) {
            return (Math.sqrt(item))
        } else {
            return (item * item)
        }
    })
}

console.log(square([4, 3, 9, 7, 2, 1])) 