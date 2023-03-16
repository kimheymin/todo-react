import { useState } from "react";
import "./App.css";
import TodoAddForm from "./components/TodoAddForm";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "장보기", status: "active" },
    { id: 2, text: "쇼핑하기", status: "active" },
  ]);

  const handleAdd = (added) => {
    setTodos([...todos, added]);
  };

  return (
    <div className="todoList">
      <ul>
        {todos.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <TodoAddForm addTodo={handleAdd} />
    </div>
  );
}

export default App;
