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
    console.log(name, value);
    setTodo({ ...todo, [name]: value });
  };

  const onSubmitHandeler = (event) => {
    event.preventDefault();
    dispatch(addTodo(todo));
    setTodo(init);
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
          <button>Add</button>
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