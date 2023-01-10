import 'bootstrap/dist/css/bootstrap.min.css';
import TodoNote from "./TodoNote"
import "./App.css"
import { useState } from 'react';

const App = () =>  {
  
  
  const defaultTodos = [
    {id: 1, text: 'Buy potatoes', complete: false},
    {id: 2, text: 'Make food', complete: true},
    {id: 3, text: 'Exercise', complete: false},
    {id: 4, text: 'Do the dishes', complete: false},
    {id: 5, text: 'Floss the teeth', complete: false},
    {id: 6, text: 'Play videogames', complete: true},
]

const [todoList, setTodoList] = useState(defaultTodos)

return (
  <div className='App'>
    {todoList.map((element) =>  <TodoNote object={element} id= {element.id} />)}
 
  </div>
)

}

export default App;
