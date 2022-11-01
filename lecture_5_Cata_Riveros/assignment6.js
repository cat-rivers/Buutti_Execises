const books = [
  {
    name: "Dune",
    pageCount: 412,
    isRead: false,
  },
  {
    name: "The eye of the World",
    pageCount: 782,
    isRead: false,
  },
];

console.log(books);

for (let i = 0; i < books.length; i++) {
  if (books[i].isRead === false) {
    books[i].isRead = !books[i].isRead;
  }
}
console.log(books);
