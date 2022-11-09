let x = 0;
let y = 0;
let yOperation = 0;
let xOperation = 0;

const commandList = "NNEESSWWCNNEEENNNCEESSSWNNNECEESWWNNNEEEBENNNEEE";

const commandCount = (letter, command) => {
  let count = 0;

  for (let i = 0; i < command.length; i++) {
    if (command.charAt(i).toLowerCase() === letter) {
      count++;
    }
  }
  console.log(count);
};

// if (letter === "n") {
//     y = y + count;
//   }
//   if (letter === "e") {
//     x = x + count;
//   }
//   if (letter === "s") {
//     y = y - count;
//   }
//   if (letter === "w") {
//     x = x - count;
//   }
//   if (letter === "c") {
//     continue;
//   }
//   if (letter === "b") {
//     break;
//   }
commandCount("n", commandList);
commandCount("e", commandList);
commandCount("s", commandList);
commandCount("w", commandList);
commandCount("c", commandList);
commandCount("b", commandList);
