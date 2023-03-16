import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";

function TodoAddForm({ addTodo }) {
  const [form, setForm] = useState({ id: "", text: "", status: "" });

  const handleChange = (e) => {
    const text = e.target.value;
    setForm({ id: uuidv4(), text, status: "active" });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addTodo(form);
  };

  return (
    <footer className="todoForm">
      <form onSubmit={handleAdd}>
        <input type="text" value={form.text} onChange={handleChange} />
        <button>add</button>
      </form>
    </footer>
  );
}

export default TodoAddForm;
