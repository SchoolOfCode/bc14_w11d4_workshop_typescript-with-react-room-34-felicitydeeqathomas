import { useState } from "react";
import { nanoid } from "nanoid";
import { Todo } from "./Todo/Todo";
import { AddTodo } from "./AddTodo";

const initialTodos = [
  { id: nanoid(), title: "Make some 🔥 noodles", isComplete: false },
  { id: nanoid(), title: "Take care of the cats 🐈🐈🐱", isComplete: true },
  { id: nanoid(), title: "Fix the TV 📺", isComplete: false },
];

export function TodoList() {
  const [todos, setTodos] = useState(initialTodos);

  function addTodo(newTodoTitle) {
    const newTodo = {
      id: nanoid(),
      title: newTodoTitle,
      isComplete: false,
    };
    setTodos([...todos, newTodo]);
  }

  function updateTodo(id, updatedTodo) {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          ...updatedTodo,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  }

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  }

  return (
    <main className="todo-list">
      <h2>Add a Todo</h2>
      <AddTodo addTodo={addTodo} />
      <h2>My Todos</h2>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </main>
  );
}
