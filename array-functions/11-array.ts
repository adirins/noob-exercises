
// ## Exercise #11

// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:


function contentArray(N: number) {

    return Array.apply(null, { length: N }).map(Number.call, Number)

}

console.log(contentArray(5)) 