import Todo from "./Todo";
import styled from "styled-components";
import { useSelector } from "react-redux";

function List() {
  const todos = useSelector((state) => state.todos);
  console.log(todos);
  return (
    <div>
      <Box>
        <ul>
          <h3>a thing to do</h3>
          {todos
            .filter((todo) => todo.isDone === false)
            .map((todo) => (
              <Todo key={todo.id} {...todo} />
            ))}
        </ul>
        <ul>
          <h3>Success!</h3>
          {todos
            .filter((todo) => todo.isDone === true)
            .map((todo) => (
              <Todo key={todo.id} {...todo} />
            ))}
        </ul>
      </Box>
    </div>
  );
}

const Box = styled.div`
  background-color: #e9e6e4;
  height: 700px;
  border-top: 1px solid rgba(71, 71, 71, 1);
  margin-top: 35px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  & h3 {
    text-align: center;
  }
  & ul {
    padding: 0;
    list-style-type: none;
  }
`;

export default List;
