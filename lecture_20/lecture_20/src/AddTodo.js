import { useState } from "react";

const AddTodo = props => {
  const { onAddNewTodo } = props;
  const [taskTodo, setTaskTodo] = useState("Add new Task");

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
      />
      <button
        onClick={e => {
          e.preventDefault();
          onAddNewTodo(taskTodo);
        }}
      >
        {" "}
        Add new Todo{" "}
      </button>
    </form>
  );
};

export default AddTodo;
