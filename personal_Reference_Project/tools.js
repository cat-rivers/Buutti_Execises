// Library node App
const fs = require("fs");
const readlineSync = require("readline-sync");
const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({dictionary: "number", length: 5});

// read db.json
const getDB = () => {
	const data = fs.readFileSync("./db.json");
	return JSON.parse(data.toString()).map(({published, ...book}) => ({
		...book,
		published: new Date(published),
	}));
};
// write- db.update json
const updateDB = (updatedDB) => {
	fs.writeFileSync("./db.json", JSON.stringify(updatedDB));
};

// Read users.json
const getUsers = () => {
	const data = fs.readFileSync("./users.json");
	return JSON.parse(data.toString());
};
// write-update users.json
const updateUsers = (updatedUsers) => {
	fs.writeFileSync("./users.json", JSON.stringify(updatedUsers));
};

//function to add new users to users.json

const addUser = (name, password) => {
	const users = getUsers();
	const newUser = {
		name: name,
		password: password,
		id: uid(),
		books: [],
		books_history: [],
	};

	users.push(newUser);
	updateUsers(users);
	return checkUserInfo(newUser.id);
};

// Function returns book by isbn code - else return null
const getBookByISBN = (isbn) => {
	// my db.json as javascript objects and as an array for easier handling
	const dbObject = getDB();
	const booksArray = Object.entries(dbObject);
	const findExact = (data) => {
		const [i, book] = data;
		return book.isbn === isbn;
	};
	const exactMatch = booksArray.filter(findExact);
	return exactMatch.length > 0 ? exactMatch : null;
};

// This function will return book either if there is an exact match, or a partial one.
const getBookByAuthorAndTitle = (authorName, title) => {
	const dbObject = getDB();
	const author = authorName.toString().toLowerCase();
	const bookTitle = title.toString().toLowerCase();
	const booksArray = dbObject;

	const findExact = (book) => {
		return (
			book.author.toString().toLowerCase().includes(author) &&
			book.title.toString().toLowerCase().includes(bookTitle)
		);
	};
	const findPartial = (book) => {
		return (
			book.author.toString().toLowerCase().includes(author) ||
			book.title.toString().toLowerCase().includes(bookTitle)
		);
	};
	const exactMatch = booksArray.filter(findExact);

	return exactMatch.length > 0 ? exactMatch : booksArray.filter(findPartial);
};

// const checkUserInfo = (idNum) => {
//   const idStr = idNum.toString();
//   const users = getUsers();
//   const result = users.find((element) => element.id === idStr);
//   return result;
// };

const checkUserInfo = (idNum) => {
	const idStr = idNum.toString();
	const users = getUsers();
	const result = users.find((element) => element.id === idStr);
	return result;
};

const checkPassword = (userToCheck, n = 0) => {
	if (n >= 3) return false;
	const passwordTry = readlineSync.question("Type password: ", {
		hideEchoBack: true,
	});
	return userToCheck === passwordTry
		? true
		: checkPassword(userToCheck, n + 1);
};

// const checkPassword = (passwrd, userToCheck) => {
//   return userToCheck.password === passwrd ? true : false;
// };

const isBorrowed = ({borrower_id}) => !borrower_id;

const renderBook = ({published, copies, title, author}) => {
	const totalCopies = copies.length;
	const available = copies.filter(isBorrowed).length;
	const yearPublished = published.getFullYear();
	return `
  ${title} by ${author} (${yearPublished})
    Books in library: ${totalCopies}
    Available for borrowing: ${available}
    .... 
  `;
};

const pickABook = (books) => {
	const bookIndex = readlineSync.keyInSelect(books, "pick a book: ");
	return books[bookIndex];
};

// function that prints ook details
const searchAndSelectBook = (book) => {
	// array of results
	// i.e. list of books
	const books = getBookByAuthorAndTitle(book, book).map(renderBook);

	if (books.length > 0) {
		return pickABook(books);
	}
};

// function print date
const printDate = () => {
	// print date based on date string
};

// ******************   Testing  ************************

module.exports = {
	getDB,
	updateDB,
	getUsers,
	updateUsers,
	addUser,
	getBookByAuthorAndTitle,
	getBookByISBN,
	searchAndSelectBook,
	printDate,
	checkUserInfo,
	checkPassword,
};
