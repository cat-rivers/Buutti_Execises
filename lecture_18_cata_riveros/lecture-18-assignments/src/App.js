import "./App.css";
import DisappearingButton from "./DisappearingButton";
import ToggleButton from "./ToggleButton"
import GridOfNames from "./GridOfNames"
import ButtonExample from "./ButtonExample"

function App() {
	
	const people = [
        "Anakin Skywalker",
        "Leia Organa",
        "Han Solo",
        "C-3PO",
        "R2-D2",
        "Darth Vader",
        "Obi-Wan Kenobi",
        "Yoda",
        "Palpatine",
        "Boba Fett",
        "Lando Calrissian",
        "Jabba the Hutt",
        "Mace Windu",
        "Padmé Amidala",
        "Count Dooku",
        "Qui-Gon Jinn",
        "Aayla Secura",
        "Ahsoka Tano",
        "Ki-Adi-Mundi",
        "Luminara Unduli",
        "Plo Koon",
        "Kit Fisto",
        "Shmi Skywalker",
        "Beru Whitesun",
        "Owen Lars"
      ];
	return (
		<div className="App">
			<h2> Assignment 1</h2>
			<ToggleButton />

			<h2> Assignment 2</h2>

			<div className="disappearingButtons">
				<DisappearingButton number={1} />
				<DisappearingButton number={2} />
				<DisappearingButton number={3} />
				<DisappearingButton number={4} />
				<DisappearingButton number={5} />
			</div>

			<h2> Assignment 3</h2>
			<GridOfNames />
			
			
			
			<h2>Example</h2>
			<div className="row">{people.map((person) => <ButtonExample name = {person} />)}</div>
			
		</div>
	);
}

export default App;
