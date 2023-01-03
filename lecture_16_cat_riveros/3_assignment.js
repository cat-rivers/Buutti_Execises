const axios = require("axios");

// async function getUniversities() {
// 	await axios
// 		.get("http://universities.hipolabs.com/search?country=Finland", {
// 			headers: {"Accept-Encoding": "gzip,deflate,compress"},
// 		})
// 		.then((res) => console.log(res.data));
// }

// console.log(getUniversities());
// getUniversities();

// new Promise((res, rej) => {
// 	res(getUniversities());
// }).then((universities) => {
// 	// universities.map((element) => console.log(element.name));
// 	console.log(universities);
// });

//--------------------------

async function getUniversities() {
	await fetch("http://universities.hipolabs.com/search?country=Finland").then(
		(res) => console.log(res.json())
	);

	// json.map((element) => console.log(element.name));
}

getUniversities();
// new Promise((res, rej) => {
// 	res(getUniversities());
// }).then((val) => {
// 	console.log(val);
// });
