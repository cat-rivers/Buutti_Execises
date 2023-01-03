import BookListUi from "./bookList";

function App() {
	const fullname = "Cat Rivers ";
	const age = 31;

	const planetList = [
		{name: "Hoth", climate: "Ice"},
		{name: "Tattooine", climate: "Desert"},
		{name: "Alderaan", climate: "Temperate"},
		{name: "Mustafar", climate: "Volcanic"},
	];

	function Greetings(props) {
		return (
			<div>
				<h2 className="assignment">Assignment 1 </h2>
				<p>
					My name is {props.name} and I am {props.age} years old!
				</p>
			</div>
		);
	}

	function R2D2() {
		return (
			<div>
				<h2 className="assignment"> Assignment 2</h2>
				<div className="r2d2">
					<img src="./r2d2.jpg" alt="I am R2D2"></img>
					<h2>Hello, I am R2D2!</h2>
					<p>
						<i>BeeYoop BeeDeepBoom Weeop DEEpaEEya!</i>
					</p>
				</div>
			</div>
		);
	}

	function Planets(props) {
		return (
			<div>
				<h2 className="assignment"> Assignment 3</h2>

				<table className="tableOfPlanets">
					<tr>
						<th>Name</th>
						<th>Climate</th>
					</tr>
					{props.array.map((planet) => (
						<tr>
							<td>{planet.name}</td> <td>{planet.climate}</td>
						</tr>
					))}
				</table>
			</div>
		);
	}

	return (
		<div className="container">
			<Greetings name={fullname} age={age} />
			<R2D2 image />
			<Planets array={planetList} />
			<BookListUi />
		</div>
	);
}

export default App;
