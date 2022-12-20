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

function addBookToList(e) {
	console.log("hello");
	e.preventDefault();
	const bookName = document.getElementById("bookName").value;
	const pageCount = document.getElementById("pageCount").value;
	books.push({pageCount, name: bookName});
	renderBooks();
}

function renderBook({pageCount, name}) {
	const newP = document.createElement("p");
	newP.innerHTML = `${name} (${pageCount})`;
	return newP;
}

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function renderBooks() {
	removeAllChildNodes(bookList);
	books.map(renderBook).forEach((node) => {
		bookList.appendChild(node);
	});
}
