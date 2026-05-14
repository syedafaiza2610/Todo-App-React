import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({data,onClick,onHandleCheckTodo,onCheck}) => {
  return (
    <li className="todo-item">
      <span className={onCheck ? "checkList" : "notCheckList"}>{data}</span>
      <button className="check-btn" onClick={()=> onHandleCheckTodo(data)}>
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onClick(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

//    <span className={checked ? "checkList" : "notCheckList"}>{data}</span> onClick={() => onHandleCheckedTodo(data)}