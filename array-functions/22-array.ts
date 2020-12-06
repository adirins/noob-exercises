// ## Exercise #22

// Write a new function called swapCase that takes a string of words and capitalizes every second word starting from the first one.




const swapCase = (text: string) => {
    return text
        .split(' ')
        .map((item, i) => {
            if (i % 2 === 0) {
                return item.toUpperCase()
            } else {
                return item.toLowerCase()
            }
        })
        .join(' ')
};

console.log(swapCase("hey gurl, lets javascript together sometime")); // => "HEY gurl, LETS javascript TOGETHER sometime"
