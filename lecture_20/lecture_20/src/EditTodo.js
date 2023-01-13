import { useState } from "react";

const EditTodo = props => {
  const { onChangeEditTodo, text } = props;
  const [value, setValue] = useState(text);
  return (
    <>
      <form>
        <input
          onChange={e => setValue(e.target.value)}
          placeholder="change todo text"
        ></input>
        <button
          onClick={e => {
            e.preventDefault();
            onChangeEditTodo(value);
          }}
        >
          Save
        </button>
      </form>
    </>
  );
};

export default EditTodo;
