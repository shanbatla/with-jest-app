import React, { useRef, useState } from "react";

type ItemList = Array<string>;

export default function Amex() {
  const [todoList, setTodoList] = useState<ItemList>([]);
  const [inProgressList, setInProgressList] = useState<ItemList>([]);
  const [doneList, setDoneList] = useState<ItemList>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  function addTodo(): void {
    if (inputRef.current !== null && inputRef.current.value.length > 0) {
      setTodoList([...todoList, inputRef.current.value]);
      inputRef.current.value = "";
    }
  }

  function removeTodo(idx: number): void {
    setTodoList(removeItem(idx, todoList));
  }

  function moveToInprogress(idx: number): void {
    setInProgressList([...inProgressList, todoList[idx]]);
    removeTodo(idx);
  }

  function moveBackToTodo(idx: number): void {
    setTodoList([...todoList, inProgressList[idx]]);
    setInProgressList(removeItem(idx, inProgressList));
  }

  function moveToDone(idx: number): void {
    setDoneList([...doneList, inProgressList[idx]]);
    setInProgressList(removeItem(idx, inProgressList));
  }

  function moveBackToInProgress(idx: number): void {
    setInProgressList([...inProgressList, doneList[idx]]);
    setDoneList(removeItem(idx, doneList));
  }

  function remove(idx: number): void {
    setDoneList(removeItem(idx, doneList));
  }

  function removeItem(idx: number, list: ItemList): ItemList {
    const newList = [
      ...list.slice(0, idx),
      ...list.slice(idx + 1, list.length + 1),
    ];
    return newList;
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
                  <button onClick={() => moveToDone(idx)}>Move to done</button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="done">
          <h1>Done:</h1>
          {doneList.map((doneItem, idx) => {
            return (
              <div key={idx}>
                <div>{doneItem}</div>
                <button onClick={() => moveBackToInProgress(idx)}>
                  Move back
                </button>
                <button onClick={() => remove(idx)}>Remove</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
