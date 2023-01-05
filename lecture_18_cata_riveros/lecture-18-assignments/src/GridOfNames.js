import "./GridOfNames.css"
import { useState } from "react";


const ButtonMaker = ({array}) =>{
    
    // clicked is an object that has the name indices
    // as keys and the value is boolean describing
    // if the button at the index is clicked
    const [clicked, setClicked] = useState({});
	const onClicked = (nameIndex) => {
		setClicked({...clicked, [nameIndex]: !clicked[nameIndex]})
	};
    
    const getClass = (nameIndex) => clicked[nameIndex] || false ? 'color-green' : 'color-red'

	return (
		<div className="row">
            {/* <pre>{JSON.stringify(clicked)}</pre> */}
			{array.map((element,idx) => (
				<button 
                    onClick={() => onClicked(idx)} 
                    className={getClass(idx)}>
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