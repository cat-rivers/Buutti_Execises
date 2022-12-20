const books = [
	{
		name: "Dune",
		pageCount: 412,
	},
	{
		name: "The eye of the World",
		pageCount: 782,
	},
];

const form = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");
form.addEventListener("submit", addBookToList);

function newObject(bookName, Bookpages) {
	const newBook = {name: bookName, pageCount: Bookpages};
	books.push(newBook);
	return newBook;
}

function appendBook(book) {
	const newP = document.createElement("p");
	newP.innerHTML = `${book.name} (${book.pageCount}) `;
	bookList.appendChild(newP);
}

function addBookToList(e) {
	console.log("hello");
	e.preventDefault();
	const bookName = document.getElementById("bookName");
	const pageCount = document.getElementById("pageCount");
	const newBook = newObject(bookName.value, pageCount.value);
	appendBook(newBook);
}
