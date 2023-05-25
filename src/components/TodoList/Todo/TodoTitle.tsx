type AddTodoTitleProps = {
  title: () => void;
  isComplete: () => void;
  isEditing: () => void;
  editedTodoTitle: () => void;
  setEditedTodoTitle: () => void;
}


export function TodoTitle(props: AddTodoTitleProps) {
  const { isEditing, isComplete, title, editedTodoTitle, setEditedTodoTitle } =
    props;

  function onTodoTitleChange(e) {
    const newTodoTitle = e.target.value;
    setEditedTodoTitle(newTodoTitle);
  }

  return (
    <div className="todo-title">
      <span>{isComplete ? `✔️` : `❌`}</span>
      {isEditing ? (
        <input
          className="edit-todo"
          type="text"
          value={editedTodoTitle}
          onChange={onTodoTitleChange}
        />
      ) : (
        <div className={`${isComplete && "todo-done"}`}>{title}</div>
      )}
    </div>
  );
}
