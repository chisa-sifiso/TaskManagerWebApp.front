import React, { useEffect, useState } from "react";
import api from "../services/api";

const TaskList = ({ onEdit }) => {
    const [tasks, setTasks] = useState([]);

    const fetchTasks = async () => {
        try {
            const response = await api.get("/tasks");
            setTasks(response.data);
        } catch (error) {
            console.error("Error fetching tasks:", error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await api.delete(`/tasks/${id}`);
            setTasks(tasks.filter((task) => task.id !== id));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    return (
        <div>
            <h2>Task List</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <h3>{task.title}</h3>
                        <p>{task.description}</p>
                        <p>Status: {task.status}</p>
                        <p>Due Date: {task.dueDate}</p>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                        <button onClick={() => onEdit(task)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskList;
