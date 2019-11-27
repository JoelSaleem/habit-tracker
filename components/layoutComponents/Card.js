import styled from "styled-components";

const Container = styled.div`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.3);
  padding-top: 12px;
  padding-left: 12px;
  border-radius: 10px;
  background: ${({ theme }) => theme.background};
`;

export default ({ children }) => {
  return <Container>{children}</Container>;
};
