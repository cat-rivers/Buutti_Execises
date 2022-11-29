// Library node App
const fs = require("fs");
const readlineSync = require("readline-sync");

const getDB = () => {
  const data = fs.readFileSync("./db.json");
  return JSON.parse(data.toString());
};

const updateDB = (updatedDB) => {
  fs.writeFileSync("./db.json", JSON.stringify(updatedDB));
};

// my db.json as javascript objects and as an array for easier handling
const dbObject = getDB();
const booksArray = Object.entries(dbObject);

// Function returns book by isbn code - else return null
const getBookByISBN = (isbn) => {
  const findExact = (data) => {
    const [i, book] = data;
    return book.isbn === isbn;
  };
  const exactMatch = booksArray.filter(findExact);
  return exactMatch.length > 0 ? exactMatch : null;
};

// This function will return book either if there is an exact match, or a partial one.
const getBookByAuthorAndTitle = (authorName, title) => {
  const author = authorName.toString().toLowerCase();
  const bookTitle = title.toString().toLowerCase();

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

// function that prints ook details
const bookDetails = (book) => {
  // $ Ulysses by James Joyce (1922)
  // $ Books in library: 2
  // $ Available for borrowing: 1
};

// const updateUser = () => {
//     const db = getDB();
//     do something with the db
//     const updatedDB = functionThatChangesDB(...)
//     updateDB(updatedDB);
// }

// Testing

// console.log("Books by isbn: \n", getBookByISBN("9781449325862"));
// console.log(
//   "Books by Author name or Title name: \n",
//   getBookByAuthorAndTitle("nnn", "java")
// );
