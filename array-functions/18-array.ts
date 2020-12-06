// ## Exercise #18

// Turn an array of voter objects into a count of how many people voted.

type Voters =
    {
        name: string,
        age: number,
        voted: boolean,
    }


function totalVotes(arr: Voters[]) {
    return arr.filter(item => item.voted).length
}

const voters = [
    { name: "Bob", age: 30, voted: true },
    { name: "Jake", age: 32, voted: true },
    { name: "Kate", age: 25, voted: false },
    { name: "Sam", age: 20, voted: false },
    { name: "Phil", age: 21, voted: true },
    { name: "Ed", age: 55, voted: true },
    { name: "Tami", age: 54, voted: true },
    { name: "Mary", age: 31, voted: false },
    { name: "Becky", age: 43, voted: false },
    { name: "Joey", age: 41, voted: true },
    { name: "Jeff", age: 30, voted: true },
    { name: "Zack", age: 19, voted: false },
];
console.log(totalVotes(voters)); // 7
