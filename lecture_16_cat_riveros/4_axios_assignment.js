const axios = require("axios");

//--------------------------------------------------------------------
//a) with Axios.get ------------
async function getFakeStoreProducts() {
	await axios
		.get("https://fakestoreapi.com/products", {
			headers: {"Accept-Encoding": "gzip,deflate,compress"},
		})
		.then((res) => {
			res.data.map((element, i) => console.log(i + 1, element.title));
		})
		.catch((res) => {
			console.log("failed");
		});
}

getFakeStoreProducts();
//--------------------------------------------------------------------
//b) with Axios.get--------------------------------

async function addFakeStoreProduct(name, price, description, category) {
	axios({
		method: "post",
		url: "https://fakestoreapi.com/products",
		data: {
			title: name,
			price: price,
			description: description,
			category: category,
		},
	}).then((res) => console.log("id number: ", res.data.id));
}

addFakeStoreProduct("hat", 12.5, "its a hat", "accessory");

//--------------------------------------------------------------------
//c) with axios--------------------------------

async function deleteProduct(productId) {
	axios({
		method: "delete",
		url: `https://fakestoreapi.com/products/${productId}`,
	}).then((res) => console.log("Deleted item:", res.data.title));
}

deleteProduct(3);
