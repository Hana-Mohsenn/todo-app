import { useState } from "react";
function TaskItem({ task, onDeleteTask, onEditTask }) {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  function saveEdit() {
    if (editedTask.trim() === "") return;

    onEditTask(editedTask);
    setIsEditing(false);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={isCompleted}
        onChange={() => setIsCompleted(!isCompleted)}
      />

      {isEditing ? (
        <input
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)}
        />
      ) : (
        <span
          style={{
            textDecoration: isCompleted ? "line-through" : "none",
          }}
        >
          {task}
        </span>
      )}

      {isEditing ? (
        <button className="save-btn" onClick={saveEdit}>
          Save
        </button>
      ) : (
        <button className="edit-btn" onClick={() => setIsEditing(true)}>
          Edit
        </button>
      )}

      <button className="delete-btn" onClick={onDeleteTask}>
        Delete
      </button>
    </li>
  );
}

export default TaskItem;
