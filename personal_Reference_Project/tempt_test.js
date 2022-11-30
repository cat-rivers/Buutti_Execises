const readlineSync = require("readline-sync");
const tools = require("./tools.js");
let loggedIn = false;
const commandList = {
  help: () => help(),
  search: () => console.log("search by Id or name"),
  exit: () => process.exit(),
  login: "login()",
  signup: "signup()",
  borrow: "borrowBook()",
  return: "returnBook()",
  list: "printList()",
  change_name: "changeName()",
  remove_account: "deleteAccount()",
  logout: () => console.log("goodbye"),
};

let greetings = readlineSync.question(
  "Welcome to Oulun kirjasto\nGet the list of available commands by typing 'help'."
);
help();

function exitLibrary() {
  process.stdout.write("Goodbye!");
  process.exit();
}

function getCommand(input) {
  const strInut = input.toString();
  commandList[strInut]();
}

function help() {
  while (greetings !== "help") {
    greetings = readlineSync.question(
      "Get the list of available commands by typing 'help'."
    );
  }

  if (greetings === "help" && loggedIn === false) {
    loggedOutList();
    const index = readlineSync.question("What would you like to do?");
    getCommand(index);
  }

  if (greetings === "help" && loggedIn) {
    loggedInList();
    const index = readlineSync.question("What would you like to do?");
  }
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

const password = () => {
  readlineSync.question("type password: ", {
    hideEchoBack: true,
  });
};

const logIn = () => {
  let idCorrect = false;
  const id = readlineSync.question("Type your ID number: ", {
    hideEchoBack: false,
  });

  password();
};
