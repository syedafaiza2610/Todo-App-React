import { useState } from "react";
import { MdCheck, MdDeleteForever } from "react-icons/md";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { TodoDate } from "./TodoDate";

const todoKey = "reactTodo";
export const Todo = () => {
  const [inputValue, setInputValue] = useState(" ")
  //to store data in array 
  const [task, setTask] = useState(() => {
      const rawTodos = localStorage.getItem(todoKey);
  if (!rawTodos) return [];
  return JSON.parse(rawTodos);
  });

  const [DateTime, setDateTime] = useState();
  const handleInputChange = (value) => {
    setInputValue(value);
  }
  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content) return; //data ko store mat krna
    // if (task.includes(inputValue)) return;

    const ifTodoContentMatched = task.find((curTask) => curTask.content === content);
    if (ifTodoContentMatched) return;
    // porany data ko rakho or new ko bhi
    setTask((prev) => [...prev, { id, content, checked }]) //spread operator 

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
    const updatedTask = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTask);
  }
  const handleClearTodo = () => {
    setTask([]);
  }
  const handleCheckedTodo = (content) => {
    const updatedTask = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      } else {
        return curTask;
      }
    })
    setTask(updatedTask)
  }
  localStorage.setItem("reactTodo", JSON.stringify(task))
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
              task.map((curTask) => {
                return (
                  <TodoList
                    key={curTask.id}
                    data={curTask.content}
                    onClick={handledeleteTodo}
                    onCheck={curTask.checked}
                    onHandleCheckTodo={handleCheckedTodo} />
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


