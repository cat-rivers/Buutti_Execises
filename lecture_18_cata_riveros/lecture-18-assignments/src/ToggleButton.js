import { useState } from "react";


const ToggleButton = () => {
    const [clicked, setClicked] = useState(false);
	const toggleFunc = () => {
		clicked 
        ? setClicked(false) 
        : setClicked(true);
	};
	return (
		<div>
			<button onClick={toggleFunc}>Toggle Text</button>
			{clicked === true && 
            <p>"Fear is the path to the darkside" </p>}
		</div>
	);

}

export default ToggleButton