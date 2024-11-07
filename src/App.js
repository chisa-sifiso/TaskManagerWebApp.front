import React, { useState } from "react";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
    const [taskToEdit, setTaskToEdit] = useState(null);

    const handleTaskEdit = (task) => {
        setTaskToEdit(task);
    };

    const handleTaskSaved = () => {
        setTaskToEdit(null);
    };

    return (
        <div className="App">
            <h1>Task Manager</h1>
            <TaskForm taskToEdit={taskToEdit} onTaskSaved={handleTaskSaved} />
            <TaskList onEdit={handleTaskEdit} />
        </div>
    );
}

export default App;
