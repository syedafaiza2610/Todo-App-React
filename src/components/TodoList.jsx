import { MdCheck, MdDeleteForever } from "react-icons/md";

export const TodoList = ({data,onClick}) => {
  return (
    <li className="todo-item">
      <span>{data}</span>
      <button className="check-btn">
        <MdCheck />
      </button>
      <button className="delete-btn" onClick={() => onClick(data)}>
        <MdDeleteForever />
      </button>
    </li>
  );
};

//    <span className={checked ? "checkList" : "notCheckList"}>{data}</span> onClick={() => onHandleCheckedTodo(data)}