// ## Exercise #3

// Take an array of numbers and make them strings.


function stringItUp(arr: number[]) {
  return arr.map(item => item.toString())
}

console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]
