//a)--------------------------------
async function waitFor(milliseconds) {
	const promesa = new Promise((res, rej) => {
		setTimeout(() => {
			res("boop");
		}, milliseconds);
	});
	await promesa;
	console.log("success");
}

waitFor(2000);

//b)--------------------------------

function delay(time, text) {
	return new Promise((res, rej) => {
		setTimeout(() => {
			console.log(text);
			res();
		}, time);
	});
}

async function countSeconds() {
	let i = 1;
	while (i < 11) {
		await delay(1000, i);
		i++;
	}
}

countSeconds();
