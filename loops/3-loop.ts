// ## Exercise #3

// _Example:_

// ```
// > Enter the number:
// > 5
// *****
// *   *
// *   *
// *   *
// *****
// ```

function steps3(n: number) {

    for (let i = 1; i < n; i++) {
        if (i === 1) {
            console.log(`${"*".repeat(n)}`)
        } else {
            console.log(`*${" ".repeat(n - 2)}*`)
        }
    }
    console.log(`${"*".repeat(n)}`)
}
steps3(5)