import styled from "styled-components";

export default function NoMatch() {
  return (
    <NoMatchStyled>
      <h1>INVALID ROUTE</h1>
    </NoMatchStyled>
  );
}

const NoMatchStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
