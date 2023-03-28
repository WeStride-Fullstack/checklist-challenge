import React, { useState } from "react";
import "./App.css";
import AddTaskComponent from "./components/AddTaskComponent";
import TaskComponent from "./components/TaskComponent";

function App() {
  const [tasks, setTasks] = useState([]);
  return (
    <div className="container d-flex flex-column w-50">
      <h1 className="mt-5">Checklist:</h1>
      {tasks.map((task) => {
        return <TaskComponent value={task} />;
      })}
      <AddTaskComponent />
    </div>
  );
}

export default App;
