import "./App.css";
import { useState } from "react";
import AddTask from "./AddTask";
import TaskItem from "./TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");

  function addTask() {
    if (taskName.trim() === "") return;

    setTasks([...tasks, taskName]);
    setTaskName("");
  }

  function deleteTask(indexToDelete) {
    setTasks(tasks.filter((task, index) => index !== indexToDelete));
  }

  function editTask(indexToEdit, newTask) {
    setTasks(
      tasks.map((task, index) => (index === indexToEdit ? newTask : task)),
    );
  }

  return (
    <div className="App">
      <h1>My To-Do List</h1>
      <AddTask
        onAddTask={addTask}
        taskName={taskName}
        setTaskName={setTaskName}
      />
      <ul>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            onDeleteTask={() => deleteTask(index)}
            onEditTask={(newTask) => editTask(index, newTask)}
          />
        ))}
      </ul>
    </div>
  );
}
export default App;
