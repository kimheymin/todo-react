import uuid from "react-uuid";
import React, { useState } from "react";

function TodoAddForm({ addTodo }) {
  const [form, setForm] = useState({ id: "", text: "", status: "" });

  const handleChange = (e) => {
    const text = e.target.value;
    setForm({ id: uuid(), text, status: "active" });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    addTodo(form);
    setForm({ id: "", text: "", status: "" });
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
