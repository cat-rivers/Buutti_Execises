const students = [
	{name: "Sami", score: 24.75},
	{name: "Heidi", score: 20.25},
	{name: "Jyrki", score: 27.5},
	{name: "Helinä", score: 26.0},
	{name: "Maria", score: 17.0},
	{name: "Yrjö", score: 14.5},
];

const tableBody = document.getElementById("tableBody");
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", makeTable);

function makeTable() {
	for (let student of students) {
		const newTr = document.createElement("tr");
		const newTdName = document.createElement("td");
		const newTdScore = document.createElement("td");
		newTdName.innerHTML = student.name;
		newTdScore.innerHTML = student.score;

		newTr.appendChild(newTdName);
		newTr.appendChild(newTdScore);
		tableBody.appendChild(newTr);
	}
	toggleBtn.removeEventListener("click", makeTable);
}

function toggleTable() {
	if (tableBody.style.display != "none") {
		tableBody.style.display = "none";
	} else {
		tableBody.style.display = "block";
	}
}

toggleBtn.addEventListener("click", toggleTable);
