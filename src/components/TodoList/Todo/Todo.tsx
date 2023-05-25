import { useState } from "react";
import { TodoButtons } from "./TodoButtons";
import { TodoTitle } from "./TodoTitle";

export type TodoObject = {
  id: string;
  title: string;
  isComplete: boolean;
};

type TodoProps = {
  key: string;
  todo: TodoObject;
  updateTodo: (id: string, updatedTodo: TodoObject) => void;
  deleteTodo: (id: string) => void;
};

export function Todo(props: TodoProps) {
  const { todo, updateTodo, deleteTodo } = props;
  const { title, isComplete } = todo;

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedTodoTitle, setEditedTodoTitle] = useState<string>(title);

  function onClickToggle() {
    const updatedTodo = { ...todo, isComplete: !todo.isComplete };
    updateTodo(todo.id, updatedTodo);
  }

  function onClickEdit() {
    setIsEditing(!isEditing);
  }

  function onClickDelete() {
    deleteTodo(todo.id);
  }

  function onClickDone() {
    const updatedTodo = { ...todo, title: editedTodoTitle };
    updateTodo(todo.id, updatedTodo);
    setIsEditing(false);
  }

  return (
    <div className="todo">
      <TodoTitle
        title={title}
        isComplete={isComplete}
        isEditing={isEditing}
        editedTodoTitle={editedTodoTitle}
        setEditedTodoTitle={setEditedTodoTitle}
      />
      <TodoButtons
        isComplete={isComplete}
        isEditing={isEditing}
        onClickToggle={onClickToggle}
        onClickEditOrDone={isEditing ? onClickDone : onClickEdit}
        onClickDelete={onClickDelete}
      />
    </div>
  );
}
