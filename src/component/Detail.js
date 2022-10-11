import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function Detail() {
  const params = useParams();
  const navigate = useNavigate();

  const todos = useSelector((state) => state.todos);

  const todo = todos.find((todo) => todo.id === parseInt(params.id));

  return (
    <DIV>
      <BOX>
        <h3>{todo.title}</h3>
        <p>{todo.body}</p>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          list
        </button>
      </BOX>
    </DIV>
  );
}

const DIV = styled.div`
  margin: 0px 0px 0px 0px;
  padding: 30px;
  height: 1000px;
  width: 100%;
  margin: auto;

  & p {
    font-size: 12px;
  }
  & button {
    margin-top: 200px;
    border: none;
    background-color: transparent;
    border-bottom: 1px solid gray;
    color: gray;
  }
`;

const BOX = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
  border-radius: 25px;
  width: 300px;
  height: 150px;
  padding: 50px;
  margin: 0 auto;
  text-align: center;
  margin-top: 100px;
`;

export default Detail;
