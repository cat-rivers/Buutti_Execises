
import { useState } from "react";
import { Container, Button , Col ,Row, Card} from 'react-bootstrap';




const TodoNote = ({object , id}) => {
    
    const [completed, setCompleted] = useState(object.complete)
    
	return (
		<div className="todo-note" >
        <form key={id}>
			<input className="form-check-input" type="checkbox" checked= {completed} onClick = {() =>setCompleted(!completed)} /> 
            <p className="form-check-label"> {object.text}</p>
           
            <Button className="remove  btn-close "></Button>
            <p >{completed.toString()} {id}</p>
        </form>
            
		</div>
	);
};


export default TodoNote