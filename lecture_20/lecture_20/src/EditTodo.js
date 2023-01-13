import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const EditTodo = props => {
  const { onChangeEditTodo, text } = props;
  const [value, setValue] = useState(text);
  return (
    <>
      <Form>
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
      </Form>
    </>
  );
};

export default EditTodo;
