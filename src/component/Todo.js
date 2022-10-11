import styled from "styled-components";
import { useDispatch } from "react-redux";
import { checkTodo, deleteTodo } from "../redux/modules/todos";
import Detail from "./Detail";

function Todo({ id, title, body, isDone }) {
  const dispatch = useDispatch();

  //액션을 디스패치한다 -> 주문서를 접수한다

  const todoCheck = () => {
    dispatch(checkTodo(id));
  };

  const todoDelete = () => {
    dispatch(deleteTodo(id));
  };

  return (
    <li>
      <Box>
        <More>
          <a href="./Detail">more</a>
        </More>
        <h2>{title}</h2>
        <p>{body}</p>
        <button onClick={() => todoDelete()}>Delete</button>
        <button onClick={() => todoCheck()}>
          {isDone ? "Cancel" : "Done"}
        </button>
      </Box>
    </li>
  );
}

const Box = styled.div`
  width: 300px;
  height: 200px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.4);
  & p {
    margin-left: 20px;
    font-size: 12px;
  }
  & button {
    margin-left: 60px;
    margin-top: 60px;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid gray;
  }
  & h2 {
    padding-top: 15px;
    padding-left: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid gray;
    font-size: 14px;
  }
`;

const More = styled.div`
  float: right;
  margin-right: 20px;
  margin-top: 15px;
  font-size: 12px;
  & a {
    text-decoration: none;
    color: black;
  }
`;

export default Todo;
