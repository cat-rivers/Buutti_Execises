import { useState } from "react"
import "./GridOfNames.css"

const ButtonExample = ({name}) => {
    const [hasBeenClicked, setHasBeenClicked] = useState(false)
    const handleClick = () =>{
        return (setHasBeenClicked(!hasBeenClicked))
    }
  
    return (   
            <button onClick={ handleClick} className = {hasBeenClicked ? "color-green" : "color-red"}  > {name}</button>
        
    )
}

export default ButtonExample