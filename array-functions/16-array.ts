// ## Exercise #16

// Given an array of numbers, return a new array that only includes the even numbers.


function evensOnly(arr: number[]) {
    return arr.filter(item=>item%2===0).map(item=>item)
}

console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]