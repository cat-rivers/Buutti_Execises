
import { useState } from "react";
import { Button } from 'react-bootstrap';
import "./App.css"




const TodoNote = ({object , id , onCompletionToggle}) => {
    
    const [completed, setCompleted] = useState(object.complete)
 

	return (
		<div  className={completed ? "todo-note color-green" : " todo-note color-red"}>
        <form >
			<input className="form-check-input" type="checkbox" checked= {completed} onClick = {() =>
                {setCompleted(!completed) ; onCompletionToggle(id)}} /> 
            <p className="form-check-label"> {object.text}</p>
           
            <Button className= "btn-close"></Button>
            <p >{completed.toString()} {id}</p>
        </form>
    

		</div>
	);
};


export default TodoNote