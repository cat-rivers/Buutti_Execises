// Reduce
//https://coursework.vschool.io/array-reduce-exercises/

// 1)
function totalSum(arr) {
  return arr.reduce((a, b) => a + b);
}
console.log(totalSum([1, 2, 1, 3, 4]));

// 2)

function stringConcat(arr) {
  return arr.reduce((a, b) => a + b, "");
}

console.log(stringConcat([1, 2, 3]));

// 3)
var voters = [
  {name: "Bob", age: 30, voted: true},
  {name: "Jake", age: 32, voted: true},
  {name: "Kate", age: 25, voted: false},
  {name: "Sam", age: 20, voted: false},
  {name: "Phil", age: 21, voted: true},
  {name: "Ed", age: 55, voted: true},
  {name: "Tami", age: 54, voted: true},
  {name: "Mary", age: 31, voted: false},
  {name: "Becky", age: 43, voted: false},
  {name: "Joey", age: 41, voted: true},
  {name: "Jeff", age: 30, voted: true},
  {name: "Zack", age: 19, voted: false},
];



function countVotes(array) {
    return array.reduce((count, {voted}) => voted? count +1 : count, 0)
  }

console.log(countVotes(voters));



// 4)


var wishlist = [
  {title: "Tesla Model S", price: 90000},
  {title: "4 carat diamond ring", price: 45000},
  {title: "Fancy hacky Sack", price: 5},
  {title: "Gold fidgit spinner", price: 2000},
  {title: "A second Tesla Model S", price: 90000},
];

function shoppingSpree(arr) {
  return arr.reduce((cost, {price}) => cost + price, 0)
}
console.log(shoppingSpree(wishlist))


// 5) flatten arrays

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

function flatten(array){
    return array.reduce((flatArray , arr) => flatArray.concat(arr), [])
}

// const tesArr = arrays.flat() >-- this exists so not sure why the reduce..... 
console.log(flatten(arrays))


// 6) kesken 

function voterResults(array) {
    const reducer = () => { array.reduce((count, {voted}) => voted? count +1 : count, 0)}
  }