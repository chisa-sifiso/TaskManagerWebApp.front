import React, { useState, useEffect } from "react";
import api from "../services/api";
import "./TaskForm.css";

const TaskForm = ({ taskToEdit, onTaskSaved }) => {
    const [task, setTask] = useState({
        title: "",
        description: "",
        status: "Pending",
        dueDate: "",
    });

    useEffect(() => {
        if (taskToEdit) setTask(taskToEdit);
    }, [taskToEdit]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (task.id) {
                await api.put(`/tasks/${task.id}`, task);
            } else {
                await api.post("/tasks", task);
            }
            onTaskSaved();
            setTask({ title: "", description: "", status: "Pending", dueDate: "" });
        } catch (error) {
            console.error("Error saving task:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>{task.id ? "Edit Task" : "Add Task"}</h2>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Description:</label>
                <textarea
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Status:</label>
                <select
                    name="status"
                    value={task.status}
                    onChange={handleChange}
                >
                    <option value="Pending">Pending</option>
                    <option value="Completed">Completed</option>
                </select>
            </div>
            <div>
                <label>Due Date:</label>
                <input
                    type="date"
                    name="dueDate"
                    value={task.dueDate}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">{task.id ? "Update Task" : "Add Task"}</button>
        </form>
    );
};

export default TaskForm;
