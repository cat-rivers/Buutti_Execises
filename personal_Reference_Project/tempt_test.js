const readlineSync = require("readline-sync");
const tools = require("./tools.js");
let loggedIn = false;

function exitLibrary() {
  process.stdout.write("Goodbye!");
  process.exit();
}

function getCommand(input) {
  const strInut = input.toString();
  commandList[strInut]();
}

function help(state) {
  state.loggedIn ? loggedInList() : loggedOutList();
  return state;
}

function loggedOutList() {
  let i = 0;
  while (i <= 4) {
    process.stdout.write(`${Object.keys(commandList)[i]}\n`);
    i++;
  }
}
function loggedInList() {
  for (key of Object.keys(commandList)) {
    process.stdout.write(`${key}\n`);
  }
}

const logIn = (state) => {
  let idCorrect = false;

  const id = readlineSync.question("Type your ID number: ", {
    hideEchoBack: false,
  });

  const password = readlineSync.question("type password: ", {
    hideEchoBack: true,
  });

  return {...state, loggedIn: true};
};

const commandList = {
  help: help,
  search: () => console.log("search by Id or name"),
  exit: process.exit,
  login: logIn,
  signup: "signup()",
  borrow: "borrowBook()",
  return: "returnBook()",
  list: "printList()",
  change_name: "changeName()",
  remove_account: "deleteAccount()",
  logout: (state) => ({loggedIn: false}),
};

const greeting = `
Welcome to Oulun kirjasto
Get the list of available commands by typing 'help'.
`;
const prompt = "What would you like to do?";

const startApp = () => {
  // start the UI loop

  let state = {loggedIn: false};

  console.log(greeting);

  while (true) {
    console.log(state);

    const commandName = readlineSync.question(prompt);

    state = commandList[commandName] ? commandList[commandName](state) : state;
  }
};

startApp();
