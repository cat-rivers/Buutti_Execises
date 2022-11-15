// Deletion

const fruits = ["banana", "apple", "grapefruit", "pear", "pineapple", "lemon"];

//this function  deletes any fruit you want from the array :)
const fruitDeleter = (array, fruit) => {
  const index = array.indexOf(fruit);
  array.splice(index, 1);
};

//dont like pears?  GONE!
fruitDeleter(fruits, "pear");
console.log(fruits);

//APPLES?!!! they suck. they. ARE. GONEEE
fruitDeleter(fruits, "apple");
console.log(fruits);
