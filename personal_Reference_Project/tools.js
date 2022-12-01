// Library node App
const fs = require("fs");
const readlineSync = require("readline-sync");
const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({dictionary: "number", length: 5});

// read db.json
const getDB = () => {
  const data = fs.readFileSync("./db.json");
  return JSON.parse(data.toString());
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
  const booksArray = Object.entries(dbObject);

  const findExact = (data) => {
    const [i, book] = data;
    return (
      book.author.toString().toLowerCase().includes(author) &&
      book.title.toString().toLowerCase().includes(bookTitle)
    );
  };
  const findPartial = (data) => {
    const [i, book] = data;
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
  console.log(n);
  if (n >= 3) return false;
  const passwordTry = readlineSync.question("Type password: ", {
    hideEchoBack: true,
  });
  return userToCheck === passwordTry ? true : checkPassword(userToCheck, n + 1);
};

// const checkPassword = (passwrd, userToCheck) => {
//   return userToCheck.password === passwrd ? true : false;
// };

// function that prints ook details
const bookDetails = (book) => {
  const dbObject = getDB();
  // $ Ulysses by James Joyce (1922)
  // $ Books in library: 2
  // $ Available for borrowing: 1
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
  bookDetails,
  printDate,
  checkUserInfo,
  checkPassword,
};
