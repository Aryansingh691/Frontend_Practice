function TodoItem({ todo, setTodos }) {

  const deleteTodo = () => {
    setTodos((prev) => prev.filter((t) => t.id !== todo.id));
  };

  const toggleTodo = () => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  return (
    <div>
      <span
        onClick={toggleTodo}
        style={{
          textDecoration: todo.completed ? "line-through" : "none",
          cursor: "pointer"
        }}
      >
        {todo.text}
      </span>

      <button onClick={deleteTodo}>Delete</button>
    </div>
  );
}

export default TodoItem;