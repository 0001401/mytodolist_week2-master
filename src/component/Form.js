import styled from "styled-components";
import { useState } from "react";
import { addTodo } from "../redux/modules/todos";
import { useDispatch } from "react-redux";

function Form() {
  const init = { id: 0, title: "", body: "", isDone: false };

  const [todo, setTodo] = useState(init);
  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;

    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandeler = (event) => {
    event.preventDefault(); // ㅎㅎ..새로고침 막는 애 form태그가 갖고있는 기본동작을 맞아주는 애
    dispatch(addTodo(todo));
    setTodo(init); // 전송하면 초깃값으로 돌아갈 수 있게!
  };

  return (
    <Box>
      <form onSubmit={onSubmitHandeler}>
        <DivBox>
          <label>Title :</label>
          <input
            type="text"
            name="title"
            onChange={onChangeHandler}
            value={todo.title}
          />
          <label>Todo :</label>
          <input
            type="text"
            name="body"
            onChange={onChangeHandler}
            value={todo.body}
          />
          <button type="submit">Add</button>
        </DivBox>
      </form>
    </Box>
  );
}

// styled-component

const Box = styled.div`
  background-color: #e9e6e4;
  height: 40px;
  border-top: 1px solid rgba(71, 71, 71, 1);
`;

const DivBox = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;
  margin-top: 25px;
  & label {
    margin-left: 15px;
    margin-right: 15px;
  }
  & input {
    border: none;
    background-color: transparent;
    border-bottom: 1px solid black;
    width: 200px;
  }
  & button {
    margin-left: 150px;
    border: none;
    background-color: transparent;
  }
`;

export default Form;
