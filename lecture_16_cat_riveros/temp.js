//a)--------------------------------

{
	function getFakeStoreProducts() {
		const productsArray = fetch("https://fakestoreapi.com/products")
			.then((res) => res.json())
			.then((json) => {
				json.map((element, i) => console.log(i + 1, element.title));
			});
	}

	getFakeStoreProducts();
}
