import React, { useState } from "react";
import "./TodoApp.css";
import { v4 as uuidv4 } from "uuid";

export default function TodoApp() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleDelete = (id) => {
    setTaskList((prevList) => {
      return prevList.filter(task => task.id != id);
    })
  }
  
  const handleUpperCase = (id) => {
    setTaskList((prevList) => {
      return prevList.map(task => {
        if(task.id === id) {
          return {
            ...task,
            task: task.task.toUpperCase()
          }
        }
        else {
          return {
            ...task
          }
        }
      })
    })
  }

  const handleCompleted = (id) => {

    setTaskList((prevList) => {
      return prevList.map(task => {
        if(task.id === id) {
          return {
            ...task,
            isDone: !task.isDone
          }
        }
        else {
          return {
            ...task
          }
        }
      })
    })
  }

  

  const handleForm = (e) => {
    e.preventDefault();
    setTaskList((prevValue) => {
      return [...prevValue, { id: uuidv4(), task, isDone: false }];
    });
    setTask("");
    
  };

  return (
    <div className="todo-app">
      <h1 className="todo-heading">Todo App</h1>
      <form className="todo-form" onSubmit={handleForm}>
        <input
          type="text"
          placeholder="i will finish english story book today."
          onChange={handleInput}
          value={task}
          required
        />
        <button type="submit">Add task</button>
      </form>
      <div className="todo-output">
        <ol>
          {
            taskList.map((task) => (
              <li key={task.id}>
                  <span className={task.isDone ? "toggle-strike" : ""}>{task.task}</span>
                  <button className="btn" onClick={() => handleDelete(task.id)}>Delete</button>
                  <button className="btn" onClick={() => handleCompleted(task.id)}>
                    { task.isDone ?  <span>Undo</span> : <span>Done</span>  }
                  </button>
              </li>
            ))
          }
        </ol>
      </div>

    </div>
  );
}
