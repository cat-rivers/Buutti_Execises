const computers = [
  {id: "computer 1", time: 42, energy: 600},
  {id: "computer 2", time: 57, energy: 480},
];


//Ternary operation

(computers[0].energy * computers[0].time) < (computers[1].energy * computers[1].time)
                ? console.log("computer 1 is more efficient")
                : console.log("computer 2 is more efficient")

// extra __________________

console.log( (computers[0].energy * computers[0].time) < (computers[1].energy * computers[1].time)
              ? "computer 1 is more efficient" 
              : "computer 2 is more efficient")