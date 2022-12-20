//get name and post
//submit event listener
//create a div
//create an H2 with name
//create p with post
//create delete button
let posts = [
	{
		name: "cata",
		id: 1,
		post: "lorem ipsum 1",
	},
	{
		name: "cata",
		id: 2,
		post: "lorem ipsum 2",
	},
	{
		name: "cata",
		id: 3,
		post: "lorem ipsum 3",
	},
];

const postForm = document.getElementById("postForm");
const postBoard = document.getElementById("postBoard");
const newPostBtn = document.getElementById("newPostBtn");

newPostBtn.addEventListener("click", toggleFormVisibility);
postForm.addEventListener("submit", newPost);

function toggleFormVisibility() {
	if (postForm.style.display === "none") {
		postForm.style.display = "block";
	} else {
		postForm.style.display = "none";
	}
}

function newPost() {}

function renderPost({post, name, id}) {
	const newDiv = document.createElement("div");
	const newBtn = document.createElement("button");
	newBtn.innerHTML = "Delete";
	const newP = document.createElement("p");
	newP.innerHTML = post;
	newBtn.addEventListener("click", () => deletePost(id));
	newDiv.appendChild(newP);
	newDiv.appendChild(newBtn);
	return newDiv;
}

function removeAllChildNodes(parent) {
	while (parent.firstChild) {
		parent.removeChild(parent.firstChild);
	}
}

function renderPosts() {
	removeAllChildNodes(postBoard);
	posts.map(renderPost).forEach((node) => {
		postBoard.appendChild(node);
	});
}

function deletePost(postid) {
	console.log("deleting!");
	console.log(postid);
	posts = posts.filter(({id}) => {
		console.log({postid, id});
		return postid !== id;
	});
	renderPosts();
}

document.addEventListener("DOMContentLoaded", renderPosts);
