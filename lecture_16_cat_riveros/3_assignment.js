const axios = require("axios");

//  Example for Jarkko

// With one prodcut at a time
async function getUser() {
	await axios
		.get("https://fakestoreapi.com/products/1")
		.then((response) => console.log(response.data));
}

getUser();

//All products

async function getAllPoroducts() {
	await axios
		.get("https://fakestoreapi.com/products")
		.then((res) => console.log(res.data))
		.catch((res) => {
			console.log("failed");
		});
}

getAllPoroducts();
