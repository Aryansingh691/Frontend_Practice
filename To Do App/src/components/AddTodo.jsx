import { useState } from "react";

function TodoForm({ setTodos }) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input) return;

    setTodos((prev) => [
      ...prev,
      { id: Date.now(), text: input, completed: false }
    ]);

    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />
      <button>Add</button>
    </form>
  );
}

export default TodoForm;