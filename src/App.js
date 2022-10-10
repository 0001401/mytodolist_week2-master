import "./App.css";
import styled from "styled-components";
import Todolist from "./pages/Todolist";

const BackGround = styled.div`
  width: 800px;
  max-width: 1200px;
  background-color: #e9e6e4;
  margin: 0 auto;
`;

function App() {
  return (
    <BackGround>
      <Todolist />
    </BackGround>
  );
}

export default App;
