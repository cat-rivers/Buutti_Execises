const readlineSync = require("readline-sync");
const tools = require("./tools.js");
let loggedIn = false;

function exitLibrary() {
  process.stdout.write("Goodbye!");
  process.exit();
}

const getCommand = (input) => {
  const strInput = input.toString();
  commandList[strInput]();
};

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

  const id = readlineSync.question("Type your ID number to login: ");
  const user = tools.checkUserInfo(id);

  if (user) {
    idCorrect = true;
    console.log("Account found");

    if (tools.checkPassword(user.password)) {
      console.log(`Welcome, ${user["name"]}`);
      return {...state, loggedIn: true};
    } else {
      return {...state, loggedIn: false};
    }
  } else {
    console.log("Id not found. try again");
    return logIn(state);
  }
};

const signup = (state) => {};

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
  logout: (state) => ({...state, loggedIn: false}),
};

const greeting = `
Welcome to Cats Library of Tech Books!.
`;
const prompt =
  "What would you like to do?\nGet the list of available commands by typing 'help'.";

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
