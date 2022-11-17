let x = 0;
let y = 0;

const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";
const newArr = commandList.split("");

for (const i in newArr) {
  if (newArr[i] === "N") {
    newArr[i] = 0;
  }
  if (newArr[i] === "E") {
    newArr[i] = 1;
  }
  if (newArr[i] === "S") {
    newArr[i] = 2;
  }
  if (newArr[i] === "W") {
    newArr[i] = 3;
  }
  if (newArr[i] === "C") {
    newArr[i] = 4;
  }
  if (newArr[i] === "B") {
    newArr[i] = 5;
  }
}

const functionZero = () => {
  y += 1;
};
const functionOne = () => {
  x += 1;
};
const functionTwo = () => {
  y -= 1;
};
const functionThree = () => {
  x -= 1;
};
const functionFour = () => {
  y = y;
  x = x;
};

const newArrayOfFunctions = [
  functionZero,
  functionOne,
  functionTwo,
  functionThree,
  functionFour,
];

for (const i in newArr) {
  if (newArr[i] !== 5) {
    newArrayOfFunctions[newArr[i]]();
  } else {
    break;
  }
}

console.log(newArr);
console.log("y is: " + y);
console.log("x is: " + x);
