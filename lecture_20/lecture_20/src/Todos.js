import { useState } from "react";
import TodoCard from "./TodoCard";
import AddTodo from "./AddTodo";
import uuid4 from "uuid4";
import { Button, Container, Form, Row, Col } from "react-bootstrap";

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

const TodoList = ({ todos, toggleComplete, handleDelete, editTodoText }) =>
  todos.map(todo => (
    <TodoCard
      key={todo.id}
      object={todo}
      text={todo.text}
      onToggleComplete={toggleComplete}
      handleDelete={handleDelete}
      onChangeEditTodo={editTodoText}
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

  const editTodoText = (id, newText) => {
    setTodos(
      todos.map(todo => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <Container>
      <Row>
        <Col className="col-6 text-center text-primary">
          <h1> Todo App</h1>
        </Col>
      </Row>

      <Row className="mx-2">
        <Col className="col-4 ">
          <Form>
            <Form.Control
              className="my-2"
              value={filter}
              onChange={e => setFilter(e.target.value)}
              placeholder="Filter"
            />
          </Form>
        </Col>
      </Row>

      <Row className="mx-2">
        <Col className="col-4">
          <AddTodo onAddNewTodo={onAddNewTodo} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TodoList
            todos={todos.filter(makeTodoFilterFunction(filter))}
            toggleComplete={toggleComplete}
            handleDelete={handleDelete}
            editTodoText={editTodoText}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Todos;
