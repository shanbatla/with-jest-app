import React, { useRef, useState } from "react";

export default function Amex() {
  const [todoList, setTodoList] = useState<Array<string>>([])

  const inputRef = useRef<HTMLInputElement>(null)

  function addTodo(): void {
    if (inputRef.current !== null && inputRef.current.value.length > 0) {
      setTodoList([...todoList, inputRef.current.value])
      inputRef.current.value = ''
    }
  }

  function removeTodo(idx: number) {
    const newTododList = [...todoList.slice(0, idx), ...todoList.slice(idx + 1, todoList.length + 1)]
    setTodoList(newTododList)
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
              <div key={idx}>
                <div>{todo}</div>
                <div>
                  <button onClick={() => removeTodo(idx)}>Remove</button>
                  <button>Move to In Progress</button>
                </div>
              </div>
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