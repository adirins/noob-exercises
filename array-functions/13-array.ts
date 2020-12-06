// ## Exercise #13

// Turn an array of numbers into a total of all the numbers.


function total(arr: number[]) {
    return arr.reduce((a, b) => a + b)
}

console.log(total([1, 2, 3])); // 6