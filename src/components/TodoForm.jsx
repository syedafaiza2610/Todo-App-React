import { useState } from "react";
import { BiCheck } from "react-icons/bi";

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});

  const handleInputChange = (value) => {
    // now i need id , content , checked
    setInputValue({id: value , content:value, checked: false});
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    onAddTodo(inputValue);
    setInputValue({id: "" , content:"", checked: ""}); //input empty krne k lye 
   
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div>
          <input
            type="text"
            className="todo-input"
            autoComplete="off"
            value={inputValue.content}
            onChange={(event) => handleInputChange(event.target.value)}
          />
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add Task
          </button>
        </div>
      </form>
    </section>
  );
};
