const DeleteTodo = props => {
  const { id, handleDelete } = props;

  return (
    <button className="btn-close" onClick={() => handleDelete(id)}>
      x
    </button>
  );
};

export default DeleteTodo;
