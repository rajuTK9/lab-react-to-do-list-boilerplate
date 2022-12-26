import React, { useState } from "react";
import { useEffect } from "react";
import "./ToDoApp.css";

export default function ToDoApp() {
  const [task, setTask] = useState();
  const [list, setList] = useState([]);
  const [toAdd, setAdd] = useState(false);

  useEffect(() => {
    // first;
    console.log("object");
    add;
    // return () => {
    //   second;
    // };
  }, [list]);

  function handleChange(e) {
    setTask(e.target.value);
    setAdd(false);
  }
  function add() {
    console.log("Before ", list);
    setList((list) => [task, ...list]);
    console.log("After ", list);
    // setAdd(true);
  }
  function update(ev) {
    console.log(ev.target.value);
    setAdd(false);
  }
  function deleteTask(e) {
    console.log(e.target.id);
    let newList = list;
    list.splice(e.target.id, 1);
    console.log("before deletion :", list);
    setList((list) => [...list]);
    console.log("after deletion: ", list);
  }

  {
    console.log("outer list: ", list);
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
            if (e)
              return (
                <div className="item">
                  <h3 className="task">{e}</h3>
                  <button className="delete" id={i} onClick={deleteTask}>
                    Delete Item
                  </button>
                </div>
              );
          })}
        </div>
      </div>
    </div>
  );
}
