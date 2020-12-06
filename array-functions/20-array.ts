// ## Exercise #20

// Given an array of arrays, flatten them into a single array


function flatten(arr: any[]) {
    return arr
        .reduce((newArray: any, item: any) => {
            newArray.push(...item);
            return newArray;
        })
}

var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
