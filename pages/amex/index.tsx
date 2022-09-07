import React, { useRef, useState } from "react";

export default function Amex() {
  const [todoList, setTodoList] = useState<Array<string>>([]);
  const [inProgressList, setInProgressList] = useState<Array<string>>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  function addTodo(): void {
    if (inputRef.current !== null && inputRef.current.value.length > 0) {
      setTodoList([...todoList, inputRef.current.value]);
      inputRef.current.value = "";
    }
  }

  function removeTodo(idx: number): void {
    const newTodoList = [
      ...todoList.slice(0, idx),
      ...todoList.slice(idx + 1, todoList.length + 1),
    ];
    setTodoList(newTodoList);
  }

  function moveToInprogress(idx: number): void {
    setInProgressList([...inProgressList, todoList[idx]]);
    removeTodo(idx);
  }

  function moveBackToTodo(idx: number): void {
    setTodoList([...todoList, inProgressList[idx]]);
    const newInProgressList = [
      ...inProgressList.slice(0, idx),
      ...inProgressList.slice(idx + 1, inProgressList.length + 1),
    ];
    setInProgressList(newInProgressList);
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
                  <button onClick={() => moveToInprogress(idx)}>
                    Move to In Progress
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="inprogress">
          <h1>In Progress:</h1>
          {inProgressList.map((inProgressItem, idx) => {
            return (
              <div key={idx}>
                <div>{inProgressItem}</div>
                <div>
                  <button onClick={() => moveBackToTodo(idx)}>Move back</button>
                  <button>Move to done</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="done">
          <h1>Done:</h1>
        </div>
      </div>
    </div>
  );
}
