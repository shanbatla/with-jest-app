import React from "react";

export default function Amex() {
  return (
    <div className="amex-container">
      <div className="add-task-container">
        <div>
          <h2>Add Task</h2>
          <input type="text" />
          <button>Add Task</button>
        </div>
      </div>
      <div className="task-container">
        <div className="todo">
          <h1>To Do:</h1>
        </div>
        <div className="inprogress">
          <h1>In Progress:</h1>
        </div>
        <div className="done">
          <h1>Done:</h1>
        </div>
      </div>
    </div>
  );
}