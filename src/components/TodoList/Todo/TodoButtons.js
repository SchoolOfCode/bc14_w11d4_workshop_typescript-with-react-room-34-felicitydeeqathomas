export function TodoButtons(props) {
  const {
    isEditing,
    isComplete,
    onClickToggle,
    onClickDelete,
    onClickEditOrDone,
  } = props;

  return (
    <div className="todo-buttons">
      {!isEditing && (
        <button className="toggle-button" onClick={onClickToggle}>
          {isComplete ? "Mark Not Done" : "Mark Done"}
        </button>
      )}
      {!isComplete && (
        <button className="edit-button" onClick={onClickEditOrDone}>
          {isEditing ? "Done" : "Edit"}
        </button>
      )}
      {!isEditing && (
        <button className="delete-button" onClick={onClickDelete}>
          Delete
        </button>
      )}
    </div>
  );
}
