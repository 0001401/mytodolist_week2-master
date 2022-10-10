import styled from "styled-components";

function Header() {
  return (
    <Box>
      <h3>Todolist</h3>
      <p>sy</p>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0px 20px 0px 20px;
`;

export default Header;
