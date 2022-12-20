const jokes = [
	{
		id: 513,
		joke: "Ransu Karvakuono does not code in cycles, he codes in strikes.",
		categories: ["nerdy"],
	},
	{
		id: 423,
		joke: "Ransu Karvakuono had to stop washing his clothes in the ocean. The tsunamis were killing people.",
		categories: [],
	},
	{
		id: 490,
		joke: "Ransu Karvakuono doesn't need to use AJAX because pages are too afraid to postback anyways.",
		categories: ["nerdy"],
	},
	{
		id: 124,
		joke: "Ransu Karvakuono once worked as a weatherman for the San Diego evening news. Every night he would make the same forecast: Partly cloudy with a 75% chance of Pain.",
		categories: [],
	},
	{
		id: 389,
		joke: "Ransu Karvakuono has banned rainbows from the state of North Dakota.",
		categories: [],
	},
	{
		id: 47,
		joke: "There is no theory of evolution, just a list of creatures Ransu Karvakuono allows to live.",
		categories: [],
	},
	{
		id: 545,
		joke: "Ransu Karvakuono's brain waves are suspected to be harmful to cell phones.",
		categories: [],
	},
	{
		id: 461,
		joke: "Ransu Karvakuono finished World of Warcraft.",
		categories: ["nerdy"],
	},
	{
		id: 60,
		joke: "When Ransu Karvakuono calls 1-900 numbers, he doesn't get charged. He holds up the phone and money falls out.",
		categories: [],
	},
	{
		id: 501,
		joke: "Ransu Karvakuono's programs never exit, they terminate.",
		categories: ["nerdy"],
	},
	{
		id: 26,
		joke: "Ransu Karvakuono is the only human being to display the Heisenberg uncertainty principle - you can never know both exactly where and how quickly he will roundhouse-kick you in the face.",
		categories: ["nerdy"],
	},
	{
		id: 384,
		joke: "Ransu Karvakuono was the original sculptor of Mount Rushmore. He completed the entire project using only a bottle opener and a drywall trowel.",
		categories: [],
	},
	{
		id: 382,
		joke: "Ransu Karvakuono once participated in the running of the bulls. He walked.",
		categories: [],
	},
	{
		id: 179,
		joke: "Ransu Karvakuono's favourite cut of meat is the roundhouse.",
		categories: [],
	},
	{
		id: 505,
		joke: "Ransu Karvakuono can spawn threads that complete before they are started.",
		categories: ["nerdy"],
	},
	{
		id: 412,
		joke: "Ransu Karvakuono knows the last digit of pi.",
		categories: ["nerdy"],
	},
	{
		id: 277,
		joke: "Ransu Karvakuono can blow bubbles with beef jerky.",
		categories: [],
	},
	{
		id: 380,
		joke: "Ransu Karvakuono does not follow fashion trends, they follow him. But then he turns around and kicks their ass. Nobody follows Ransu Karvakuono.",
		categories: [],
	},
	{
		id: 500,
		joke: "Ransu Karvakuono can access the DB from the UI.",
		categories: ["nerdy"],
	},
	{
		id: 589,
		joke: "Dark spots on the Moon are the result of Ransu Karvakuono's shooting practice.",
		categories: [],
	},
	{
		id: 222,
		joke: "Industrial logging isn't the cause of deforestation. Ransu Karvakuono needs toothpicks.",
		categories: [],
	},
	{
		id: 165,
		joke: "The last thing you hear before Ransu Karvakuono gives you a roundhouse kick? No one knows because dead men tell no tales.",
		categories: [],
	},
	{
		id: 28,
		joke: "Ransu Karvakuono is not hung like a horse. Horses are hung like Ransu Karvakuono.",
		categories: [],
	},
	{
		id: 511,
		joke: "Every SQL statement that Ransu Karvakuono codes has an implicit &quot;COMMIT&quot; in its end.",
		categories: ["nerdy"],
	},
	{
		id: 507,
		joke: "Ransu Karvakuono can install iTunes without installing Quicktime.",
		categories: ["nerdy"],
	},
	{
		id: 530,
		joke: "Ransu Karvakuono can dereference NULL.",
		categories: ["nerdy"],
	},
	{
		id: 533,
		joke: "The Ransu Karvakuono Eclipse plugin made alien contact.",
		categories: ["nerdy"],
	},
	{
		id: 225,
		joke: "Ransu Karvakuono is the reason why Waldo is hiding.",
		categories: [],
	},
	{
		id: 180,
		joke: "When J. Robert Oppenheimer said &quot;I am become death, the destroyer Of worlds&quot;, He was not referring to the atomic bomb. He was referring to the Ransu Karvakuono halloween costume he was wearing.",
		categories: [],
	},
	{
		id: 213,
		joke: "How many Ransu Karvakuono's does it take to change a light bulb? None, Ransu Karvakuono prefers to kill in the dark.",
		categories: [],
	},
	{
		id: 109,
		joke: "It takes Ransu Karvakuono 20 minutes to watch 60 Minutes.",
		categories: [],
	},
	{
		id: 381,
		joke: "Diamonds are not, despite popular belief, carbon. They are, in fact, Ransu Karvakuono fecal matter. This was proven a recently, when scientific analysis revealed what appeared to be Jean-Claude Van Damme bone fragments inside the Hope Diamond.",
		categories: [],
	},
	{
		id: 286,
		joke: "The square root of Ransu Karvakuono is pain. Do not try to square Ransu Karvakuono, the result is death.",
		categories: [],
	},
	{
		id: 292,
		joke: "If you were somehow able to land a punch on Ransu Karvakuono your entire arm would shatter upon impact. This is only in theory, since, come on, who in their right mind would try this?",
		categories: [],
	},
	{
		id: 223,
		joke: "Ransu Karvakuono smells what the Rock is cooking... because the Rock is Ransu Karvakuono's personal chef.",
		categories: [],
	},
	{
		id: 557,
		joke: "Ransu Karvakuono can read from an input stream.",
		categories: ["nerdy"],
	},
	{
		id: 283,
		joke: "The only sure things are Death and Taxes. when Ransu Karvakuono goes to work for the Verohallinto, they'll be the same thing.",
		categories: [],
	},
	{
		id: 157,
		joke: "A study showed the leading causes of death are: 1. Heart disease, 2. Ransu Karvakuono, 3. Cancer",
		categories: [],
	},
	{
		id: 304,
		joke: "It is said that looking into Ransu Karvakuono's eyes will reveal your future. Unfortunately, everybody's future is always the same: death by a roundhouse-kick to the face.",
		categories: [],
	},
	{
		id: 23,
		joke: "Time waits for no man. Unless that man is Ransu Karvakuono.",
		categories: [],
	},
	{
		id: 396,
		joke: "Only Ransu Karvakuono can prevent forest fires.",
		categories: [],
	},
	{
		id: 365,
		joke: "Ransu Karvakuono has never won an Academy Award for acting... because he's not acting.",
		categories: [],
	},
	{
		id: 150,
		joke: "Superman once watched an episode of Walker, Texas Ranger. He then cried himself to sleep.",
		categories: [],
	},
	{
		id: 399,
		joke: "In the movie &quot;The Matrix&quot;, Ransu Karvakuono is the Matrix. If you pay close attention in the green &quot;falling code&quot; scenes, you can make out the faint texture of his beard.",
		categories: [],
	},
	{
		id: 99,
		joke: "Ransu Karvakuono has 12 moons. One of those moons is the Earth.",
		categories: [],
	},
	{
		id: 388,
		joke: "The Manhattan Project was not intended to create nuclear weapons, it was meant to recreate the destructive power in a Ransu Karvakuono Roundhouse Kick. They didn't even come close.",
		categories: [],
	},
	{
		id: 94,
		joke: "Ransu Karvakuono has the greatest Poker-Face of all time. He won the 1983 World Series of Poker, despite holding only a Joker, a Get out of Jail Free Monopoly card, a 2 of clubs, 7 of spades and a green #4 card from the game UNO.",
		categories: [],
	},
	{
		id: 259,
		joke: "When Ransu Karvakuono does division, there are no remainders.",
		categories: [],
	},
	{
		id: 408,
		joke: "Love does not hurt. Ransu Karvakuono does.",
		categories: [],
	},
	{
		id: 305,
		joke: "Ransu Karvakuono knows everything there is to know - Except for the definition of mercy.",
		categories: [],
	},
	{
		id: 372,
		joke: "Ransu Karvakuono once rode a nine foot grizzly bear through an automatic car wash, instead of taking a shower.",
		categories: [],
	},
	{
		id: 88,
		joke: "Ransu Karvakuono doesn't shave; he kicks himself in the face. The only thing that can cut Ransu Karvakuono is Ransu Karvakuono.",
		categories: [],
	},
	{
		id: 586,
		joke: "Ransu Karvakuono already went to Moon and Mars, that's why there are no signs of life.",
		categories: [],
	},
	{
		id: 464,
		joke: "&quot;It works on my machine&quot; always holds true for Ransu Karvakuono.",
		categories: ["nerdy"],
	},
	{
		id: 316,
		joke: "In the medical community, death is referred to as &quot;Ransu Karvakuono Disease&quot;",
		categories: [],
	},
	{
		id: 193,
		joke: "Most boots are made for walkin'. Ransu Karvakuono's boots ain't that merciful.",
		categories: [],
	},
	{
		id: 472,
		joke: "When Ransu Karvakuono is web surfing websites get the message &quot;Warning: Internet Explorer has deemed this user to be malicious or dangerous. Proceed?&quot;.",
		categories: ["nerdy"],
	},
	{
		id: 186,
		joke: "Fear is not the only emotion Ransu Karvakuono can smell. He can also detect hope, as in &quot;I hope I don't get a roundhouse kick from Ransu Karvakuono.&quot;",
		categories: [],
	},
	{
		id: 491,
		joke: "Ransu Karvakuono doesn't use reflection, reflection asks politely for his help.",
		categories: ["nerdy"],
	},
	{
		id: 340,
		joke: "A man once claimed Ransu Karvakuono kicked his ass twice, but it was promptly dismissed as false - no one could survive it the first time.",
		categories: [],
	},
	{
		id: 324,
		joke: "Ransu Karvakuono drinks napalm to quell his heartburn.",
		categories: [],
	},
	{
		id: 431,
		joke: "Rules of fighting: 1) Don't bring a knife to a gun fight. 2) Don't bring a gun to a Ransu Karvakuono fight.",
		categories: [],
	},
	{
		id: 554,
		joke: "Ransu Karvakuono can install a 64 bit OS on 32 bit machines.",
		categories: ["nerdy"],
	},
	{
		id: 603,
		joke: "Ghosts are actually caused by Ransu Karvakuono killing people faster than Death can process them.",
		categories: [],
	},
	{
		id: 428,
		joke: "In the first Jurassic Park movie, the Tyrannosaurus Rex wasn't chasing the jeep. Ransu Karvakuono was chasing the Tyrannosaurus AND the jeep.",
		categories: [],
	},
	{
		id: 37,
		joke: "If you spell Ransu Karvakuono in Scrabble, you win. Forever.",
		categories: [],
	},
	{
		id: 151,
		joke: "Ransu Karvakuono doesn't step on toes. Ransu Karvakuono steps on necks.",
		categories: [],
	},
	{
		id: 149,
		joke: "Ransu Karvakuono proved that we are alone in the universe. We weren't before his first space expedition.",
		categories: [],
	},
	{
		id: 206,
		joke: "Ransu Karvakuono destroyed the periodic table, because Ransu Karvakuono only recognizes the element of surprise.",
		categories: [],
	},
	{
		id: 440,
		joke: "Most tough men eat nails for breakfast. Ransu Karvakuono does all of his grocery shopping at K-Rauta.",
		categories: [],
	},
	{
		id: 68,
		joke: "When Ransu Karvakuono falls in water, Ransu Karvakuono doesn't get wet. Water gets Ransu Karvakuono.",
		categories: [],
	},
	{
		id: 416,
		joke: "Ransu Karvakuono plays racquetball with a waffle iron and a bowling ball.",
		categories: [],
	},
];

//_________________
function randomizer(arrayLength) {
	return Math.ceil(Math.random() * arrayLength);
}
const jokeWall = document.getElementById("jokeWall");
const randomBtn = document.getElementById("randomBtn");
const nerdyBtn = document.getElementById("nerdyBtn");
const allJokesBtn = document.getElementById("allJokesBtn");
const deleteBtn = document.getElementById("deleteBtn");
randomBtn.addEventListener("click", randomJoke);
nerdyBtn.addEventListener("click", nerdyJokes);
allJokesBtn.addEventListener("click", allJokes);
deleteBtn.addEventListener("click", deleteFirst);

function appendJoke(joke) {
	const newElement = document.createElement("p");
	newElement.innerHTML = joke;
	jokeWall.appendChild(newElement);
}

function randomJoke() {
	const findJoke = jokes[randomizer(jokes.length)].joke;
	appendJoke(findJoke);
}

function nerdyJokes() {
	const nerdies = jokes.filter((element) =>
		element.categories.includes("nerdy")
	);
	const findJoke = nerdies[randomizer(nerdies.length)].joke;
	appendJoke(findJoke);
}

function allJokes() {
	for (let joke of jokes) {
		appendJoke(joke.joke);
	}
}

function deleteFirst() {
	const findChildJoke = jokeWall.getElementsByTagName("p");
	jokeWall.removeChild(findChildJoke[1]);
}
