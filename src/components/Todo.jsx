import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

export const Todo = () => {
  const [inputValue, setInputValue] = useState(" ")
  //to store data in array 
  const [task, setTask] = useState([]);
  const [DateTime, setDateTime] = useState();
  const handleInputChange = (value) => {
    setInputValue(value);
  }
  const handleFormSubmit = (inputValue) => {
    if (!inputValue) return; //data ko store mat krna
    if (task.includes(inputValue)) return;
    // porany data ko rakho or new ko bhi
    setTask((prev) => [...prev, inputValue]) //spread operator 

  };
  // // console.log("Interval")
  // setInterval(() => {
  //   const now = new Date();
  //   // convert into locatstring 
  //   const formatteddate = now.toLocaleDateString();
  //   const formattedTime = now.toLocaleTimeString();
  //   // 1000 miliseconds = 1 sec
  //   setDateTime(`${formatteddate} - ${formattedTime}`)
  // }, 1000);
  // Delete Function 
  const handledeleteTodo = (value) => {
    //task k andr array h
    // console.log(task);
    // console.log(value);
    //updatedtask me array h us mese filter method return karega 
    //wahi values jo return krta h jo unique hn 
    const updatedTask = task.filter((curTask) => curTask !== value);
    setTask(updatedTask);
  }
  const handleClearTodo = () => {
    setTask([]);
  }

  return (
    <>
      <section className="todo-container">
        <header>
          <h1>Todo List</h1>
       <TodoDate />

        </header>
        <TodoForm onAddTodo={handleFormSubmit} />

        <section className="myUnOrdList">
          <ul>
            {
              task.map((curTask, index) => {
                return (
                  <TodoList
                    key={index}
                    data={curTask}
                    onClick={handledeleteTodo} />
                );
              })
            }
          </ul>
        </section>
        <section>
          <button className="clear-btn" onClick={handleClearTodo}>Reset All</button>
        </section>
      </section>
    </>
  );
};


