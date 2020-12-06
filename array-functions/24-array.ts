// ## Exercise #24

// Write a function that takes a string and returns an object representing the character count for each letter.


const countLetters = function (text: string) {
  return text.split('').reduce((total, letter) => {
    total[letter] ? total[letter]++ : total[letter] = 1;
    return total;
  }, {});

};

console.log(countLetters("abbcccddddeeeee")); // => {a:1, b:2, c:3, d:4, e:5}


