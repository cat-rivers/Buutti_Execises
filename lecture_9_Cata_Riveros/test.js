let x = 0;
let y = 0;

const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";
const arr = commandList.split("");

for (const i in arr) {
  if (arr[i] === "N") {
    arr[i] = 0;
  }
  if (arr[i] === "E") {
    arr[i] = 1;
  }
  if (arr[i] === "S") {
    arr[i] = 2;
  }
  if (arr[i] === "W") {
    arr[i] = 3;
  }
  if (arr[i] === "C") {
    arr[i] = 4;
  }
  if (arr[i] === "B") {
    arr[i] = 5;
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
const functionFive = () => {};

const arrayOfFunctions = [
  functionZero,
  functionOne,
  functionTwo,
  functionThree,
  functionFour,
  functionFive,
];

for (const i in arr) {
  if (arr[i] !== 5) {
    arrayOfFunctions[arr[i]]();
  } else {
    break;
  }
}

console.log(arr);
console.log(y);
console.log(x);
