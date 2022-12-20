// get form
const form = document.getElementById("bookForm");
const bookList = document.getElementById("bookList");

//get book title.value
//get page count.value
//event listener on submit
form.addEventListener("submit", addBookToList);

//add book to array of objects
//append to  (HTML) to show in client side

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

function addBookToList(e) {
	e.preventDefault();
	console.log("hello");
	const bookName = document.getElementById("bookName");
	const pageCount = document.getElementById("pageCount");
	console.log(bookName.value);
	console.log(pageCount.value);
}

addBookToList();
