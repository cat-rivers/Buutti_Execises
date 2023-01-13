import "./TodoCard.css";
import DeleteTodo from "./DeleteTodo";

const TodoCard = props => {
  const { object, text, onToggleComplete, handleDelete } = props;

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
      <p> {text}</p>
      <button className="btn-close">x</button>
      <DeleteTodo id={object.id} handleDelete={handleDelete} />
    </div>
  );
};

export default TodoCard;
