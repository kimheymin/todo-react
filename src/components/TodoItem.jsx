import React, { useState } from "react";

function TodoItem({ todo, delTodo }) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((check) => !check);

    if (checked) {
      // return { ...todo, status: "Completed" };
      todo.status = "Completed";
    } else {
      console.log(todo);
      todo.status = "active";
    }
  };
  const handleDelete = () => {
    delTodo(todo);
  };

  return (
    <div>
      <input
        type="checkbox"
        name="checked"
        id="checked"
        checked={checked}
        onChange={handleChange}
      />
      {todo.text}
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}

export default TodoItem;
