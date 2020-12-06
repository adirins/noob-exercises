
// ## Exercise #1

// Print the rectange with a size of `n` x `n` where `n` is a number provided by user.

// _Example:_

// ```
// > Enter the number:
// > 10
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// **********
// ```



function steps1(n: number) {

        for (let i = 1; i < n + 1; i++) {
        console.log(`${"*".repeat(n)}`)
    }
}

steps1(10)
