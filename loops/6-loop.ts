// ## Exercise #6

// _Example: _

//     ```
// > Enter the number:
// > 5
// ******
// .*****
// ..****
// ...***
// ....**
// .....*
// ```
function steps6(n: number) {

    for (let i = 1; i < n + 2; i++) {
        console.log(`${".".repeat(i - 1)}${"*".repeat(n+1- i)}`)
    }
}

steps6(5)