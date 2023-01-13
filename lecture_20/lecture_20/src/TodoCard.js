import "./TodoCard.css";
import DeleteTodo from "./DeleteTodo";
import { useState } from "react";
import EditTodo from "./EditTodo";
import { Button, Container, Form } from "react-bootstrap";
const TodoCard = props => {
  const { object, text, onToggleComplete, handleDelete, onChangeEditTodo } =
    props;

  const [editMode, setEditMode] = useState(false);

  return (
    <div
      className={
        object.complete ? "todo-card color-green" : "todo-card color-red"
      }
    >
      <input
        className="checkbox "
        type="checkbox"
        checked={object.complete}
        onClick={() => {
          onToggleComplete(object.id);
        }}
      />
      {!editMode ? (
        <p className="display-1"> {text}</p>
      ) : (
        <EditTodo
          text={text}
          onChangeEditTodo={text => {
            onChangeEditTodo(object.id, text);
            setEditMode(!editMode);
          }}
        />
      )}

      <DeleteTodo id={object.id} handleDelete={handleDelete} />

      {!editMode && <Button onClick={() => setEditMode(true)}>Edit</Button>}
    </div>
  );
};

export default TodoCard;
