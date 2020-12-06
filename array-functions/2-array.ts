// ## Exercise #2

// Make an array of numbers that are doubles of the first array.


function doubleNumbers(arr: number[]): any {
    return arr.map(item => item * 2)
}

console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]