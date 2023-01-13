import { useState } from "react";

const AddTodo = props => {
  const { onAddNewTodo } = props;
  const [taskTodo, setTaskTodo] = useState("");

  const inputTask = e => {
    setTaskTodo(e.target.value);
  };
  return (
    <form>
      <input
        onChange={e => inputTask(e)}
        type="text"
        name="submit"
        value={taskTodo}
        placeholder="Add new Todo"
      />
      <button
        onClick={e => {
          e.preventDefault();
          onAddNewTodo(taskTodo);
        }}
      >
        Add New
      </button>
    </form>
  );
};

export default AddTodo;
