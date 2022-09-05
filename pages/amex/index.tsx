import React, { useRef, useState } from "react";

export default function Amex() {
  const [todoList, setTodoList] = useState<Array<string | null>>([])

  const inputRef = useRef<HTMLInputElement>(null)

  function addTodo(): void {
    if (inputRef.current !== null && inputRef.current.value.length > 0) {
      setTodoList([...todoList, inputRef.current.value])
    }
  }

  return (
    <div className="amex-container">
      <div className="add-task-container">
        <div>
          <h2>Add Task</h2>
          <input type="text" ref={inputRef} />
          <button onClick={addTodo}>Add Task</button>
        </div>
      </div>
      <div className="task-container">
        <div className="todo">
          <h1>To Do:</h1>
          {todoList.map((todo, idx) => {
            return (
              <div key={idx}>{todo}</div>
            )
          })}
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