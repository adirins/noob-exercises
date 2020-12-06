// ## Exercise #21

// Given an array of potential voters, return an object representing the results of the vote

// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.


const voter = [
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

type VoterType = {
    name: string,
    age: number,
    voted: boolean,
}

function voterResults(arr: VoterType[]) {
    let numYoungVotes = arr.filter(item => item.age <= 25 && item.voted).length;
    let numYoungPeople = arr.filter(item => item.age <= 25).length;
    let numMidVotesPeople = arr.filter(item => item.age <= 35 && item.age >= 26 && item.voted).length;
    let numMidsPeople = arr.filter(item => item.age <= 35 && item.age >= 26).length;
    let numOldVotesPeople = arr.filter(item => item.age >= 35 && item.voted).length;
    let numOldsPeople = arr.filter(item => item.age >= 35).length;

    return { numYoungVotes, numYoungPeople, numMidVotesPeople, numMidsPeople, numOldVotesPeople, numOldsPeople }
}


console.log(voterResults(voter));

// Returned value shown below:
// {
//     numYoungVotes: 1,
//     numYoungPeople: 4,
//     numMidVotesPeople: 3,
//     numMidsPeople: 4,
//     numOldVotesPeople: 3,
//     numOldsPeople: 4
// }