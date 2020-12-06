// ## Exercise #5

// Make an array of strings of the names.

type Names = {
    name: string,
    age: number,
}

function namesOnly(arr: Names[]) {
    return arr.map(item => item.name)
}

console.log(
    namesOnly([
        {
            name: "Angelina Jolie",
            age: 80,
        },
        {
            name: "Eric Jones",
            age: 2,
        },
        {
            name: "Paris Hilton",
            age: 5,
        },
        {
            name: "Kayne West",
            age: 16,
        },
        {
            name: "Bob Ziroll",
            age: 100,
        },
    ])
);
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]