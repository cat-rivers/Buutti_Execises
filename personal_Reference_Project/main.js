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

const dbObject = getDB();
const booksArray = Object.entries(dbObject);

const getBookByISBN = (isbn) => {
  const findExact = (data) => {
    const [i, book] = data;
    return book.isbn === isbn;
  };
  const exactMatch = booksArray.filter(findExact);
  return exactMatch.length > 0 ? exactMatch : null;
};

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

// const updateUser = () => {
//     const db = getDB();
//     do something with the db
//     const updatedDB = functionThatChangesDB(...)
//     updateDB(updatedDB);
// }

console.log("Books by isbn: \n", getBookByISBN("9781449325862"));
console.log(
  "Books by Author name or Title name: \n",
  getBookByAuthorAndTitle("nnn", "java")
);
