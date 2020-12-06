// ## Exercise #9

// _Examples:_

// ```
// > Enter the number:
// > 1
//   |
// * | *
// ```

// ```
// > Enter the number:
// > 4
//      |
//    * | *
//   ** | **
//  *** | ***
// **** | ****
// ```
function steps9(n: number) {

    for (let i = 1; i < n + 2; i++) {
    console.log(`${" ".repeat(n+1-i)}${"*".repeat(i-1)}|${"*".repeat(i-1)}`)
}
}

steps9(1)
steps9(4)