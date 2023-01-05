import "./GridOfNames.css"
import { useState } from "react";


const ButtonMaker = ({array}) =>{
    
    const [clicked, setClicked] = useState("color-red");
	const onClicked = () => {
		clicked !== "color-red" ? setClicked("color-red") : setClicked("color-green");
	};

	// const colorClass = () => {
	// 	return !clicked ? "color-red" : "color-green";
	// };

	return (
		<div className="row">
			{array.map((element) => (
				<button onClick={onClicked} className={clicked}>
					{element}
				</button>
			))}
		</div>
	);
    
}

const GridOfNames = () => {
    
    const names = [
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
        <div>
            <ButtonMaker array = {names}/>
        </div>
      )
      
   }


export default GridOfNames