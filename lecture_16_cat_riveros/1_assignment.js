//a)--------------------------------

function sumAll(limit) {
	let sum = 0;
	for (let i = 1; i < limit; i++) {
		sum += i;
	}
	return sum;
}
console.log("Exercise a)");
console.log(sumAll(10));

//b)--------------------------------

new Promise((resolve, reject) => {
	resolve(sumAll(5000));
}).then((val) => {
	console.log("Exercise b)");
	console.log(val);
});

//c)--------------------------------
new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve(sumAll(5000));
	}, 2000);
}).then((val) => {
	console.log("Exercise c)");
	console.log(val);
});

//d)--------------------------------

function createDelayedCalculation(limit, milliseconds) {
	new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(sumAll(limit));
		}, milliseconds);
	}).then((result) => {
		console.log("Exercise d)");
		console.log(result);
	});
}

createDelayedCalculation(11, 3000);
