//a) with fetch --------------------------------
function getFakeStoreProducts() {
	const productsArray = fetch("https://fakestoreapi.com/products")
		.then((res) => res.json())
		.then((json) => {
			json.map((element, i) => console.log(i + 1, element.title));
		});
}
getFakeStoreProducts();
//--------------------------------------------------------------------
//b) with fetch--------------------------------
async function addFakeStoreProduct(name, price, description, category) {
	fetch("https://fakestoreapi.com/products", {
		method: "POST",
		body: JSON.stringify({
			title: name,
			price: price,
			description: description,
			category: category,
		}),
	})
		.then((res) => res.json())
		.then((json) => console.log("id number:", json.id));
}

addFakeStoreProduct("hat", 12.5, "its a hat", "accessory");
//--------------------------------------------------------------------
//c) with fetch--------------------------------

async function deleteFakeStoreProduct(productId) {
	fetch(`https://fakestoreapi.com/products/${productId}`, {
		method: "DELETE",
	})
		.then((res) => res.json())
		.then((json) => console.log("Deleted item: ", json.title));
}

deleteFakeStoreProduct(3);
