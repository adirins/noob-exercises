// ## Exercise #17

// Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

function fiveCharactersOrFewerOnly(arr: string[]) {
    return arr.filter(item => item.length <= 5).map(item => item).sort((a, b) => (a.length - b.length))
}

console.log(
    fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])
); // ["by", "dog", "wolf", "eaten"]