import "./App.css";
import DisappearingButton from "./DisappearingButton";
import ToggleButton from "./ToggleButton"
import GridOfNames from "./GridOfNames"

function App() {
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
		</div>
	);
}

export default App;
