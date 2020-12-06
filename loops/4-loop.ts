// ## Exercise #4

// _Example:_

// ```
// > Enter the number:
// > 5
// > Select the character:
// > $
// $
// $ $
// $ $ $
// $ $ $ $
// $ $ $ $ $
// ```


function steps4(n: number, z: string) {

    for (let i = 1; i < n + 1; i++) {
    console.log(`${z.repeat(i)}`)
}
}

steps4(5,"$")