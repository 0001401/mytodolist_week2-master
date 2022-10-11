import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail() {
  const params = useParams();

  const todos = useSelector((state) => state.todos);

  const todo = todos.find((todo) => todo.id === parseInt(params.id));

  return (
    <DIV>
      <BOX>
        <h3>{todo.title}</h3>
        <p>{todo.body}</p>
      </BOX>
    </DIV>
  );
}

const DIV = styled.div`
  padding: 30px;
  height: 800px;
  margin: auto;
  & p {
    font-size: 12px;
  }
`;

const BOX = styled.div`
  margin: 10px 10px 10px 10px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 25px;
  width: 300px;
  height: 150px;
  padding: 50px;
  margin: 0 auto;
  text-align: center;
  margin-top: 100px;
`;

export default Detail;
