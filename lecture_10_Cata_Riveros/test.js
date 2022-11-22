const { array } = require("yargs");

const votersList = [
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

let youngPeopleVotes = 0

const voteResults = { 
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0 
  }
  
  const functions = [
    () => voteResults.numYoungVotes =+ 1,
    () => voteResults.numYoungPeople =+ 1,
    () => voteResults.numMidVotesPeople =+ 1,
    () => voteResults.numMidsPeople =+ 1,
    () => voteResults.numOldVotesPeople =+ 1,
    () => voteResults.numOldsPeople =+ 1,    
  ]
  


// ]

function resulter (array, func, i){
  
    
        if( array.age < 25 && array.voted === true ) {func[0]()}   
        if( array.age < 25 ) {func[1]()}   
        // if( array[i].age > 24 && array[i].age < 36 && array[i].voted === true) {func[2]()}   
        // if( array[i].age > 24 && array[i].age < 36) {func[3]()}   
        // if( array[i].age < 25 ) {func[4]()}   
        // if( array[i].age < 25 ) {func[5]()}   
        
         
}

for(let i = 0; i < votersList.length; i++){
   console.log(  resulter(votersList[i], functions, i))
}

console.log(voteResults)



// const votersResults = (array) => {
//     const youngVotes = array.reduce(
//       (count, voters) =>
//         voters.age < 26 && voters.voted === true ? count + 1 : count,
//       0
//     );
  
//     const youngPeople = array.reduce(
//       (count, voters) => (voters.age < 26 ? count + 1 : count),
//       0
//     );
  
//     const numMidVotesPeople = array.reduce(
//       (count, voters) =>
//         voters.age > 25 && voters.age < 36 && voters.voted === true
//           ? count + 1
//           : count,
//       0
//     );
//     const numMidPeople = array.reduce(
//       (count, voters) => (voters.age > 25 && voters.age < 36 ? count + 1 : count),
//       0
//     );
//     const numOldVotesPeople = array.reduce(
//       (count, voters) =>
//         voters.age > 35 && voters.voted === true ? count + 1 : count,
//       0
//     );
//     const numOldPeople = array.reduce(
//       (count, voters) => (voters.age > 35 ? count + 1 : count),
//       0
//     );
  
//     return {
//       NumYoungVotes: youngVotes,
//       NumYoungPeople: youngPeople,
//       NumMidVotes: numMidVotesPeople,
//       NumMidPeople: numMidPeople,
//       NumOldVotes: numOldVotesPeople,
//       NumOldPeople: numOldPeople,
//     };
//   };
  
