// ## Exercise #5

// _Example:_

// ```
// > Enter the number:
// > 5
// *.....*
// .*...*.
// ..*.*..
// ...*...
// ..*.*..
// .*...*.
// *.....*
// ```

function steps5(n: number) {

    for (let i = 1; i < n + 3; i++) {
    console.log(`${".".repeat(2*i-2)}${"*".repeat(n+2-i)}${".".repeat(n)}${"*".repeat(i)}${".".repeat(2*i-2)}`)
}
}

steps5(5)