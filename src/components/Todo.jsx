import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./Todo.css";

export const Todo = () => {
  const [inputValue, setInputValue] = useState(" ")
  //to store data in array 
  const [task, setTask] = useState([]);
  const handleInputChange = (value) => {
    setInputValue(value);
  }
  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue) return; //data ko store mat krna
    if (task.includes(inputValue)) return;
    // porany data ko rakho or new ko bhi
    setTask((prev) => [...prev, inputValue]) //spread operator 
    setInputValue(""); //input empty krne k lye 
  }
  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>

        </header>
        <section className="form">

        </section>
        <form onSubmit={handleFormSubmit}>

          <div>
            <input type="text" autoComplete="off"
              className="todo-input"
              value={inputValue}
              onChange={() => handleInputChange(event.target.value)}
            />
          </div>
          <div>
            <button type="submit">Add Task</button>

          </div>
        </form>
    
      <section className="myUnOrdList">
        <ul>
          {
            task.map((curTask, index) => {
              return <li key={index} className="todo-item">
                <span>{curTask}</span>
                <button className="check-btn">
                  <MdCheck />
                </button>
                <button className="delete-btn">
                  <MdDeleteForever />
                </button>
              </li>
            })
          }
        </ul>
      </section>
        </section>
    </>
  );
};


