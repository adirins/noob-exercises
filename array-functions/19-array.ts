// ## Exercise #19

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once.

type Wishes =
    {
        title: string,
        price: number,
    }

function shoppingSpree(arr: Wishes[]) {
    return arr.map(item=>item.price).reduce((acc,curr)=> (acc + curr))
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 },
];

console.log(shoppingSpree(wishlist)); // 227005
