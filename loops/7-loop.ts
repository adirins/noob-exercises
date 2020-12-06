// ## Exercise #7

// _Example:_

// ```
// > Enter the number:
// > 4
// + - - +
// | - - |
// | - - |
// + - - +
// ```

function steps7(n: number) {

    for (let i = 1; i < n; i++) {
        if (i === 1) {
            console.log(`+${"-".repeat(n-2)}+`)
        } else {
            console.log(`|${"-".repeat(n - 2)}|`)
        }
    }
    console.log(`+${"-".repeat(n-2)}+`)
}
steps7(4)