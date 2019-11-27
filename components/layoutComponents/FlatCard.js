import styled from "styled-components";

const Container = styled.div`
  background: ${({ theme }) =>
    theme.accent2 + "66"}; // 66 corresponds to 0.2 opacity
  border-radius: 10px;
  padding: 4px;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  display: inline-flex;
`;

export default ({ children }) => {
  return <Container>{children}</Container>;
};
