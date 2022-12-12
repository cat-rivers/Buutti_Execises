const bookForm = document.querySelector("#bookForm");
const bookList = document.querySelector("#bookList");

bookForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const bookNameInput = bookForm.elements.bookName;
  const bookPagesInput = bookForm.elements.bookPage;
  addBook(bookNameInput.value, bookPagesInput.value);
  bookNameInput.value = "";
  bookPagesInput.value = "";
});

const addBook = (bookName, bookPage) => {
  const newBook = document.createElement("p");
  newBook.append(`${bookName} (${bookPage} pages)`);
  bookList.append(newBook);
};

bookList.addEventListener("click", function (e) {
  e.target.nodeName === "P" && e.target.remove();
});