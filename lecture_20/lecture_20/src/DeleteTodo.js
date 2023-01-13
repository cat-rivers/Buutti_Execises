const DeleteTodo = props => {
  const { id, handleDelete } = props;

  return <button onClick={() => handleDelete(id)}>Delete</button>;
};

export default DeleteTodo;
