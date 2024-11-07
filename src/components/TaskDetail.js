import React from "react";

const TaskDetail = ({ task }) => {
  if (!task) return <p>No Task Selected</p>;

  return (
    <div>
      <h2>{task.title}</h2>
      <p>{task.description}</p>
      <p>Status: {task.status}</p>
      <p>Due Date: {task.dueDate}</p>
    </div>
  );
};

export default TaskDetail;
