import React, { useState } from "react";
import { useEffect } from "react";
import "./ToDoApp.css";

export default function ToDoApp() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }
  function add() {
    setList((list) => [task, ...list]);
  }
  function deleteTask(e) {
    list.splice(e.target.id, 1);
    setList((list) => [...list]);
  }
  return (
    <div className="container">
      <input type="text" className="input" onChange={handleChange} />
      <button className="add" onClick={add}>
        Add Items
      </button>
      <div className="list">
        <h3 className="output">{task}</h3>
        <div className="tasksList">
          {list.map((e, i) => {
            if (e) {
              return (
                <div className="item">
                  <h3 className="task" contentEditable="true">
                    {e}
                  </h3>
                  <button className="delete" id={i} onClick={deleteTask}>
                    Delete Item
                  </button>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}
