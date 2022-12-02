const readlineSync = require("readline-sync");
const tools = require("./tools.js");
let loggedIn = false;
let LoggedUser;

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

/*const logIn = (state) => {
  let idCorrect = false;

  const id = readlineSync.question("Type your ID number to login: ");
  const user = tools.checkUserInfo(id);

  if (user) {
    idCorrect = true;
    console.log("Account found");

    if (tools.checkPassword(user.password)) {
      console.log(`Welcome, ${user["name"]}`);
      LoggedUser = user;
      return {...state, loggedIn: true};
    } else {
      return {...state, loggedIn: false};
    }
  } else {
    console.log("Id not found. try again");
    return logIn(state);
  }
};*/

const logIn = (state, n = 0) => {
	let idCorrect = false;

	const id = readlineSync.question("Type your ID number to login: ");
	const user = tools.checkUserInfo(id);

	if (user) {
		idCorrect = true;
		console.log("Account found");

		if (tools.checkPassword(user.password)) {
			console.log(`Welcome, ${user["name"]}`);
			LoggedUser = user;
			return {...state, loggedIn: true};
		} else {
			return {...state, loggedIn: false};
		}
	} else {
		while (n < 3) {
			console.log("Id not found. try again");
			return logIn(state, n + 1);
		}
		return state;
	}
};

const signup = (state) => {
	const userName = readlineSync.question("Input your name: \n");

	const newPassword = () => {
		const userPassword = readlineSync.question("Input new password: \n", {
			hideEchoBack: true,
		});
		const userPasswordConfirm = readlineSync.question(
			"Input new password: \n",
			{
				hideEchoBack: true,
			}
		);
		if (userPassword === userPasswordConfirm) {
			const user = tools.addUser(userName, userPassword);
			console.log(`
      Password matches.
      Your account is now created.
      your ID is ${user.id}
      Store your ID number in a safe place.
      Inout 'login' to login into your account.
      `);
		} else {
			console.log("Password does not match.");
			newPassword();
		}
	};
	newPassword();
	return state;
};

const listBooksBorrowed = (state) => {
	console.log(state);
	//filter db for books with borrower_id
	//matching loggedUser.id
	//return books as numbered array
	return state;
};

const borrowBook = (state) => {
	console.log(state);
	//getBookByAuthorAndTitle()
	//bookDetails()
	//change boook status to borrowed,
	// push borrower ID to userID
	//update db.json
	return state;
};
const searchBook = (state) => {
	console.log(state);
	const userSearchWord = readlineSync.question(
		"Search for a book to borrow:\n"
	);
	const book = tools.searchAndSelectBook(userSearchWord);

	console.log(book);
	//book info printed for chosen book
	//if logged in, borrow()
	// if not --> ask what do you want to do?
	return state;
};

const returnBook = (state) => {
	console.log(state);
	//List borroewd books(listBooksBorrowed())
	// choose number of book to return(index?)
	//control for invalid input
	// Return the book (update info in db.json )
	//update info in user info
	return state;
};

const commandList = {
	help: help,
	search: searchBook,
	exit: process.exit,
	login: logIn,
	signup: signup,
	borrow: borrowBook,
	return: returnBook,
	list: listBooksBorrowed,
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

		state = commandList[commandName]
			? commandList[commandName](state)
			: state;
	}
};

startApp();
