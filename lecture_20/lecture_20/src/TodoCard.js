import "./TodoCard.css";
import DeleteTodo from "./DeleteTodo";
import { useState } from "react";
import EditTodo from "./EditTodo";

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
        <p> {text}</p>
      ) : (
        <EditTodo
          text={text}
          onChangeEditTodo={text => {
            console.log(text);
            onChangeEditTodo(object.id, text);
            setEditMode(!editMode);
          }}
        />
      )}

      <DeleteTodo id={object.id} handleDelete={handleDelete} />

      {!editMode && <button onClick={() => setEditMode(true)}>Edit</button>}
    </div>
  );
};

export default TodoCard;
