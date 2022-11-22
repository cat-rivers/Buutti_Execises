// Reduce
//https://coursework.vschool.io/array-reduce-exercises/

// 1)
 function numberOne() {
  console.log("exercise 1: ")
   function totalSum(arr) {
     return arr.reduce((a, b) => a + b);
   }
   console.log(totalSum([1, 2, 3]));
 }

 // 2)

 function numberTwo() {
  console.log("Exercise 2: ")
   function stringConcat(arr) {
     return arr.reduce((a, b) => a + b, "");
   }

   console.log(stringConcat([1, 2, 3]));
 }

// 3)
const voters = [
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



function numberThree() { 
  console.log("Exercise 3: ")
  function countVotes(array) {
    return array.reduce((count, {voted}) => voted? count +1 : count, 0)
  }

console.log(countVotes(voters));
}



// 4)

function numberFour () {
  console.log("Exercise 4: ")
  const wishlist = [
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
}


// 5) flatten arrays
function numberFive (){
  console.log("Exercise 5: ")
  const arrays = [
      ["1", "2", "3"],
      [true],
      [4, 5, 6]
  ];

  function flatten(array){
      return array.reduce((flatArray , arr) => flatArray.concat(arr), [])
  }

  // const tesArr = arrays.flat() >-- this exists so not sure why the reduce..... 
  console.log(flatten(arrays))
}

// 6) kesken 

function numberSix (){
  console.log("Exercise 6: ")
  const functions = [
    (count, voter) => voter.age < 26 && voter.voted === true ? count + 1 : count,
    (count, voter) => voter.age < 26 ? count + 1 : count,
    (count, voter) => voter.age > 25 && voter.age < 36 && voter.voted === true? count + 1: count,
    (count, voter) => voter.age > 25 && voter.age < 36 ? count + 1 : count,
    (count, voter) => voter.age > 35 && voter.voted === true ? count + 1 : count,
    (count, voter) => voter.age > 35 ? count + 1 : count  
  ]
    
  function voterResults(array, func) {
      
    const results = functions.map(arg => array.reduce(arg , 0))

    const voteResults = { 
        numYoungVotes: results[0],
        numYoungPeople: results[1],
        numMidVotesPeople: results[2],
        numMidsPeople: results[3],
        numOldVotesPeople: results[4],
        numOldsPeople: results[5] 
    }     
    return voteResults 
  }

  console.log(voterResults(voters))
}



numberOne();
numberTwo();
numberThree();
numberFour();
numberFive();
numberSix()