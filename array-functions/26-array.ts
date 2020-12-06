// ## Exercise #26

// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

const sheep = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];


const sheepIsPresent = function (sheep: boolean[]) {
    
    return sheep.filter(item=>item===true).length
 
 };

 console.log(sheepIsPresent(sheep))

// The correct answer would be 17.