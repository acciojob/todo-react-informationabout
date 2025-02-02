import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [task, setTask] = useState(""); // State to hold input value
  const [tasks, setTasks] = useState([]); // State to hold the list of tasks

  const handleInputChange = (e) => {
    setTask(e.target.value); // Update the task state with input value
  };

  const handleAddTask = () => {
    if (task) { // Only add if the input is not empty
      setTasks([...tasks, task]); // Add the new task to the list
      setTask(""); // Clear the input field
    }
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task !== taskToDelete)); // Remove task from list
  };

  return (
    <div>
      <input 
        type="text" 
        value={task} 
        onChange={handleInputChange} 
        placeholder="Enter a task"
      />
      <button onClick={handleAddTask}>Add Todo</button>

      <ul>
        {tasks.map((taskItem, index) => (
          <li key={index}>
            {taskItem} 
            <button onClick={() => handleDeleteTask(taskItem)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
