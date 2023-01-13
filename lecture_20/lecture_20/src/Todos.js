import { useState } from "react";
import TodoCard from "./TodoCard";
import AddTodo from "./AddTodo";
import uuid4 from "uuid4";

const defaultTodos = [
  { id: 1, text: "Buy potatoes", complete: true },
  { id: 2, text: "Make food", complete: false },
  { id: 3, text: "Exercise", complete: false },
  { id: 4, text: "Do the dishes", complete: false },
  { id: 5, text: "Floss the teeth", complete: false },
  { id: 6, text: "Play videogames", complete: true },
];

// given a filter string
// return a function that can be used with array.filter

const makeTodoFilterFunction = filter => todo =>
  todo.text.toLowerCase().includes(filter.toLowerCase());

const TodoList = ({ todos, toggleComplete, handleDelete }) =>
  todos.map(todo => (
    <TodoCard
      key={todo.id}
      object={todo}
      text={todo.text}
      onToggleComplete={toggleComplete}
      handleDelete={handleDelete}
    />
  ));

const Todos = () => {
  const [todos, setTodos] = useState(defaultTodos);
  const [filter, setFilter] = useState("");

  const toggleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  const onAddNewTodo = task => {
    const newTodoList = [
      { id: uuid4(), text: task, complete: false },
      ...todos,
    ];
    setTodos(newTodoList);
  };

  const handleDelete = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <>
      <pre>{filter}</pre>
      <input value={filter} onChange={e => setFilter(e.target.value)}></input>
      <AddTodo onAddNewTodo={onAddNewTodo} />
      <TodoList
        todos={todos.filter(makeTodoFilterFunction(filter))}
        toggleComplete={toggleComplete}
        handleDelete={handleDelete}
      />
    </>
  );
};

export default Todos;
