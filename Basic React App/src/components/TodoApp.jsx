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

  

  const handleForm = (e) => {
    e.preventDefault();
    setTaskList((prevValue) => {
      return [...prevValue, { id: uuidv4(), task }];
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
                  {task.task}
                  <button className="btn" onClick={() => handleDelete(task.id)}>Delete</button>
                  <button className="btn" onClick={() => handleUpperCase(task.id)}>UpperCase</button>
              </li>
            ))
          }
        </ol>
      </div>

    </div>
  );
}
