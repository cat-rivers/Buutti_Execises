let x = 0;
let y = 0;

const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";
const newArr = commandList.split("");
const lettersToNumbers = {N: 0, E: 1, S: 2, W: 3, C: 4, B: 5};

// modify newArr to have numbers instead of letters
for (command of newArr) {
  newArr.splice(newArr.indexOf(command), 1, lettersToNumbers[command]);
}

// Functions that execute commands
const functionZero = () => (y += 1);
const functionOne = () => (x += 1);
const functionTwo = () => (y -= 1);
const functionThree = () => (x -= 1);
const functionFour = () => {
  y = y;
  x = x;
};

// Array of functions
const newArrayOfFunctions = [
  functionZero,
  functionOne,
  functionTwo,
  functionThree,
  functionFour,
];

// Loop through newArr and execute as commanded. Breaks when hits 5
for (const i in newArr) {
  if (newArr[i] !== 5) {
    newArrayOfFunctions[newArr[i]]();
  } else {
    break;
  }
}

console.log("y is: " + y);
console.log("x is: " + x);
