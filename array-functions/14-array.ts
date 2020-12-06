// ## Exercise #14

// Turn an array of numbers into a long string of all those numbers.



function stringConcat(arr: number[]) {
    return arr.toString().split(',').join('')
}

console.log(stringConcat([1, 2, 3])); // "123"