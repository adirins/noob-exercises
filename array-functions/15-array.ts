// ## Exercise #15

// Given an array of numbers, return a new array that has only the numbers that are 5 or greater.


function fiveAndGreaterOnly(arr: number[]) {
    return arr.filter(item => item >= 5).map(item => item)
}

console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]