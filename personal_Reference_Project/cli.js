const readlineSync = require("readline-sync");
const tools = require("./tools.js");
const colors = require("colors");

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

const logIn = (state, n = 0) => {
	let idCorrect = false;

	const id = readlineSync.question("Type your ID number to login: ");
	const user = tools.checkUserInfo(id);

	if (user) {
		idCorrect = true;
		console.log("Account found");

		if (tools.checkPassword(user.password)) {
			console.log(`Welcome, ${user["name"]}`);
			return {...state, user, loggedIn: true};
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

const twoWeeksFromNow = () => {
	const a = new Date(2000, 1, 1);
	const b = new Date(2000, 1, 14);
	return new Date(Number(new Date()) + (b - a));
};

const updateCopy = (copy, userId) => ({
	...copy,
	status: "borrowed",
	borrower_id: userId,
	due_date: twoWeeksFromNow().toISOString(),
});

const borrowCopy = (book, userId) => {
	console.log(tools.renderBook(book));
	console.log("Thank you for Borrowing.\nRemember to return in 2 weeks");
	const copyIndex = book.copies.findIndex((copy) => !copy.borrower_id);
	return {
		...book,
		copies: book.copies.map((copy, index) =>
			index === copyIndex ? updateCopy(copy, userId) : copy
		),
	};
};

const borrowBook = (state, bookToBorrow) => {
	return {
		...state,
		user: {
			...state.user,
			books: [...state.user.books, bookToBorrow.isbn],
			books_history: [...state.user.books_history, bookToBorrow.isbn],
		},
		books: state.books.map((book) => {
			return book.isbn === bookToBorrow.isbn
				? borrowCopy(bookToBorrow, state.user.id)
				: book;
		}),
	};
};
const searchBook = (state) => {
	const userSearchWord = readlineSync.question(
		"Search for a book to borrow:\n"
	);
	const book = tools.searchAndSelectBook(state, userSearchWord);

	return state.loggedIn && tools.isBorrowable(book)
		? readlineSync.keyInYN("Would you like to borrow this book?\n")
			? borrowBook(state, book)
			: state
		: state;
};

const returnBook = (state) => {
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
	exit: (state) => {
		tools.updateDB(state);
		tools.saveUser(state.user);
		process.exit();
	},
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

	let state = {
		loggedIn: false,
		books: tools.getDB(),
	};

	console.log(greeting);

	while (true) {
		const commandName = readlineSync.question(prompt);

		state = commandList[commandName]
			? commandList[commandName](state)
			: state;
	}
};

startApp();
