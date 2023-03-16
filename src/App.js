import { useState } from "react";
import "./App.css";
import { DarkModeProvider } from "./components/context/DarkModeContext";
import TodoAddForm from "./components/TodoAddForm";
import TodoFilter from "./components/TodoFilter";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "장보기", status: "active" },
    { id: 2, text: "쇼핑하기", status: "active" },
  ]);

  const handleAdd = (added) => {
    setTodos([...todos, added]);
  };

  const handleDelete = (deleted) => {
    setTodos(todos.filter((del) => del.text != deleted.text));
  };
  return (
    <DarkModeProvider>
      <div className="todoList">
        <TodoFilter />
        <ul>
          {todos.map((item) => (
            <li key={item.id}>
              <TodoItem todo={item} delTodo={handleDelete} />
            </li>
          ))}
        </ul>
        <TodoAddForm addTodo={handleAdd} />
      </div>
    </DarkModeProvider>
  );
}

export default App;
