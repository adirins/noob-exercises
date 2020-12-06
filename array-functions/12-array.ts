// ## Exercise #12

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


function reverse(N: number) {

    return N.toString().split('').reverse().map(item => parseInt(item))

}

console.log(reverse(348597)) 