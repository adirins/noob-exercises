// ## Exercise #27

// Can you find the needle in the haystack?

// Write a function `findNeedle()` that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so: "found the needle at position 5"


const find = ['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']


const findNeedle = (a: string[]) => {
    return a.indexOf("needle")
};

console.log(`found the needle at position ${findNeedle(find)}`)




// should return "found the needle at position 5"