import { useState } from "react";
import { Button } from "react-bootstrap";
import "./App.css";

const TodoNote = ({ object, id, onCompletionToggle, onChange }) => {
  const [completed, setCompleted] = useState(object.complete);
  const [editMode, setEditMode] = useState(false);

  const editModeFalse = () => {
    return (
      <>
        <p className="form-check-label">{object.text}</p>
        <Button onClick={() => setEditMode(true)}>Edit </Button>
      </>
    );
  };

  const editModeTrue = () => {
    return (
      <>
        <input type="text" placeholder="new text" />
        <button onClick={() => setEditMode(false)} name="sumbit">
          Save
        </button>
      </>
    );
  };

  return (
    <div
      className={completed ? "todo-note color-green" : " todo-note color-red"}
    >
      <form>
        <input
          className="form-check-input"
          type="checkbox"
          checked={completed}
          onClick={() => {
            setCompleted(!completed);
            onCompletionToggle(id);
          }}
        />
        {!editMode ? editModeFalse() : editModeTrue()}

        <Button className="btn-close"></Button>
      </form>
    </div>
  );
};

export default TodoNote;
