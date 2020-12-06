// ## Exercise #2

// As in `Exercise #1` print a rectangle, but this time draw stars separated by a space.

// _Example:_

// ```
// > Enter the number:
// > 3
// * * *
// * * *
// * * *
// ```

function steps2(n: number) {

    for (let i = 1; i < n + 1; i++) {
    console.log(`${"* ".repeat(n)}`)
}
}

steps2(3)