import { useState } from "react";

export function AddTodo(props) {
  const { addTodo } = props;

  const [todoTitle, setTodoTitle] = useState("");

  function onChange(e) {
    setTodoTitle(e.target.value);
  }

  function onClickAdd() {
    if (todoTitle.trim() === "") {
      return;
    }
    addTodo(todoTitle);
    setTodoTitle("");
  }

  return (
    <div className="add-todo">
      <span className="add-todo-prefix">👉</span>
      <input
        type="text"
        placeholder="I need to ..."
        value={todoTitle}
        onChange={onChange}
      />
      <button className="add-todo-add" onClick={onClickAdd}>
        Add
      </button>
    </div>
  );
}
