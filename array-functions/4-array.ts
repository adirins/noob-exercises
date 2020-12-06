// ## Exercise #4

// Capitalize each of an array of names.

function capitalizeNames(arr: string[]) {
    return arr.map(item => item.charAt(0).toUpperCase() + item.slice(1).toLowerCase())
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]