import {useState} from "react";

const DisappearingButton = ( {number}) => {
	const [clicked, setClicked] = useState(false);
	const toggleFunc = () => {
		clicked 
        ? setClicked(false) 
        : setClicked(true);
	};
	return (
		<div>
			<div>
				{!clicked && (
					<button onClick={toggleFunc}>Button {number}</button>
				)}
			</div>
		</div>
	);
};

export default DisappearingButton;
