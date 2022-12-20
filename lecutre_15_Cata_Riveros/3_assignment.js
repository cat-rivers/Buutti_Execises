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
		post: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid temporibus quis qui, harum, tempore dolor laboriosam ducimus tenetur doloribus eius quibusdam quas, corporis libero sint sapiente earum ut excepturi numquam!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate odio id ratione, rerum a recusandae quisquam sed? Ratione sit architecto officiis molestiae quos tenetur? Nesciunt, laborum quos? Cupiditate, voluptatem. Non?",
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

function newPost(e) {
	e.preventDefault();
	const formName = document.getElementById("formName").value;
	const formPost = document.getElementById("formPost").value;
	const postId = new Date().getTime();
	const postObj = {name: formName, id: postId, post: formPost};
	posts.push(postObj);
	toggleFormVisibility();
	renderPost(postObj);
	console.log(posts);
	renderPosts();
}

function renderPost({name, id, post}) {
	const newDiv = document.createElement("div");
	["col-12", "my-3", "newDiv"].forEach((dv) => newDiv.classList.add(dv));
	const newBtn = document.createElement("button");
	["btn", "btn-danger", "px-5"].forEach((clss) => newBtn.classList.add(clss));
	newBtn.innerHTML = "Delete";
	const newP = document.createElement("p");
	newP.innerHTML = post;
	const newH2 = document.createElement("h2");
	newH2.innerHTML = name;
	newBtn.addEventListener("click", () => deletePost(id));
	newDiv.appendChild(newH2);
	newDiv.appendChild(newBtn);
	newDiv.appendChild(newP);
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

// function renderPost({post, name, id}) {
// 	const newDiv = document.createElement("div");
// 	const newBtn = document.createElement("button");
// 	newBtn.innerHTML = "Delete";
// 	const newP = document.createElement("p");
// 	newP.innerHTML = post;
// 	newBtn.addEventListener("click", () => deletePost(id));
// 	newDiv.appendChild(newP);
// 	newDiv.appendChild(newBtn);
// 	return newDiv;
// }
