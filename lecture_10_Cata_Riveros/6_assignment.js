// Cleanup oh my god my brain is burning >.<"

const objectArray = [
  {x: 14, y: 21, type: "tree", toDelete: false},
  {x: 1, y: 30, type: "house", toDelete: false},
  {x: 22, y: 10, type: "tree", toDelete: true},
  {x: 5, y: 34, type: "rock", toDelete: true},
  null,
  {x: 19, y: 40, type: "tree", toDelete: false},
  {x: 35, y: 35, type: "house", toDelete: false},
  {x: 19, y: 40, type: "tree", toDelete: true},
  {x: 24, y: 31, type: "rock", toDelete: false},
];

// a) setting toDelete(true) to null
for (const i in objectArray) {
  if (objectArray[i] !== null && objectArray[i].toDelete === true) {
    objectArray[i] = null;
  }
}


// b) 

const newObj = objectArray.map((obj, index ) => {
    if(obj !== null && obj.toDelete === true){
       obj = null
    }
    return obj
})



console.log(objectArray) // original array of objects modified
console.log(newObj) // new array of objects

