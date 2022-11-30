const readlineSync = require("readline-sync");
const choicesLoggedOut = ["help", "quit", "search", "signup", "login"];
const choicesLoggedIn = [
  "help",
  "quit",
  "search",
  "list",
  "borrow",
  "return",
  "change_name",
  "remove_account",
  "logout",
];

let loggedIn = false;

let greetings = readlineSync.question(
  "Welcome to Oulun kirjasto\nGet the list of available commands by typing 'help'."
);
help();

function help() {
  while (greetings !== "help") {
    greetings = readlineSync.question(
      "Get the list of available commands by typing 'help'."
    );
  }

  if (greetings === "help" && loggedIn === false) {
    const index = readlineSync.keyInSelect(
      choicesLoggedOut,
      "What would you like to do?"
    );
  }

  if (greetings === "help" && loggedIn) {
    const index = readlineSync.keyInSelect(
      choicesLoggedIn,
      "What would you like to do?"
    );
  }
}

const logIn = () => {
  readlineSync.question("Type your ID number: ", {
    hideEchoBack: false,
  });
  const password = () => {
    readlineSync.question("type password: ", {
      hideEchoBack: true, // The typed text on screen is hidden by `*` (default).
    });
  };
  password();
};

logIn();
