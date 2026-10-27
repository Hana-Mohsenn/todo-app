function AddTask({ onAddTask, taskName, setTaskName }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Add a new task!"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            onAddTask();
          }
        }}
      />
      <button className="add-btn" onClick={onAddTask}>
        Add
      </button>
    </div>
  );
}

export default AddTask;
