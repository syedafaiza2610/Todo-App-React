import { useState } from "react";
import "./Todo.css";

export const Todo = () => {
  const [inputValue , setInputValue] = useState(" ")
  const handleInputChange = (value) => {
    setInputValue(value);
  }

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>

      </header>
      <section className="form">

      </section>
      <form>

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
    </section>
  );
};
