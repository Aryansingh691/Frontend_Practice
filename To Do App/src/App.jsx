import { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>Todo App</h1>

      <input
        placeholder="Enter task"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={() => {
        if (input === "") return;
        setTodos([...todos, input]);
        setInput("");
      }}>
        Add
      </button>

      {todos.map((item, index) => (
        <div key={index}>
          {item}
          <button onClick={() => {
            const newList = todos.filter((_, i) => i !== index);
            setTodos(newList);
          }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;