const lookUpScores = {
    S: 8,
    A: 6,
    B: 4,
    C: 3,
    D: 2,
    F: 0
}

// a) -----------------------
const command = "AABBSDE"
const arr1 = command.split("")

const calculateTotalScore = (input) => {
  let sum = 0;
  for (l of input) {
    sum += lookUpScores[l];
  }
  return sum;
};

console.log(calculateTotalScore("AABBCC"))
console.log(calculateTotalScore("SSFFF"))
console.log(calculateTotalScore("DFCBDABSB"))


// b) -----------------------

const calculateAverageScore = (input) => {
    
   return  calculateTotalScore(input)/input.length
      
}


console.log(calculateAverageScore("DFCBDABSB"))
console.log(calculateAverageScore("AABBCC"))


// c) ----------------------------

const arrGrades = [ "AABAACAA", "FFDFDCCDCB", "ACBSABA", "CCDFABABC" ];


const averagesTotals = arrGrades.map(element => calculateAverageScore(element))
console.log(averagesTotals)