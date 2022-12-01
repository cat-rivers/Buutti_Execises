// const readlineSync = require("readline-sync");
// const tools = require("./tools.js");
// let loggedIn = false;

// function exitLibrary() {
//   process.stdout.write("Goodbye!");
//   process.exit();
// }

// const getCommand = (input) => {
//   const strInput = input.toString();
//   commandList[strInput]();
// };

// function help(state) {
//   state.loggedIn ? loggedInList() : loggedOutList();
//   return state;
// }

// function loggedOutList() {
//   let i = 0;
//   while (i <= 4) {
//     process.stdout.write(`${Object.keys(commandList)[i]}\n`);
//     i++;
//   }
// }
// function loggedInList() {
//   for (key of Object.keys(commandList)) {
//     process.stdout.write(`${key}\n`);
//   }
// }

// const logIn = (state) => {
//   let idCorrect = false;

//   const id = readlineSync.question("Type your ID number: ", {
//     hideEchoBack: false,
//   });
//   const user = tools.checkUserInfo(id);
//   if (user) {
//     idCorrect = true;
//     const password = readlineSync.question("type password: ", {
//       hideEchoBack: true,
//     });
//     if (tools.checkPassword(password, user)) {
//       return {...state, loggedIn: true};
//     } else {
//       console.log("wrong password");
//       return {...state};
//     }

//     // if (password === user.password) {
//     //   return {...state, loggedIn: true};
//     // } else {
//     //   console.log("wrong password");
//     //   return {...state};
//     // }
//   } else {
//     console.log("Wrong id. type 'help'");
//     return {...state, loggedIn: false};
//   }
// };

// const commandList = {
//   help: help,
//   search: () => console.log("search by Id or name"),
//   exit: process.exit,
//   login: logIn,
//   signup: "signup()",
//   borrow: "borrowBook()",
//   return: "returnBook()",
//   list: "printList()",
//   change_name: "changeName()",
//   remove_account: "deleteAccount()",
//   logout: (state) => ({...state, loggedIn: false}),
// };

// const greeting = `
// Welcome to Cats Library of Tech Books!.
// `;
// const prompt =
//   "What would you like to do?\nGet the list of available commands by typing 'help'.";

// const startApp = () => {
//   // start the UI loop

//   let state = {loggedIn: false};

//   console.log(greeting);

//   while (true) {
//     console.log(state);

//     const commandName = readlineSync.question(prompt);

//     state = commandList[commandName] ? commandList[commandName](state) : state;
//   }
// };

// startApp();
