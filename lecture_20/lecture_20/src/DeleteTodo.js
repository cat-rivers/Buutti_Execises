import { Button, CloseButton } from "react-bootstrap";
const DeleteTodo = props => {
  const { id, handleDelete } = props;

  return (
    <CloseButton
      className="btn-close"
      onClick={() => handleDelete(id)}
    ></CloseButton>
  );
};

export default DeleteTodo;
