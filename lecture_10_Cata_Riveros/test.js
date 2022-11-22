
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
  
  

  console.log(voterResults(votersList))
  

  


        
         


  
