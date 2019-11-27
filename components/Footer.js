import styled from "styled-components";

const Container = styled.div`
  background: ${({ theme }) => theme.primary};
  width: 100%;
  height: 40px;

  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.3);
  margin-top: 8px;
  border-radius: 10px;

  display: grid;
  grid-template-columns: auto 1fr;
`;

const LeftGroup = styled.div`
  padding-top: 1px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 8px;
`;

const RightGroup = styled.div`
  padding-top: 1px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: 8px;
`;

export default ({ rightButtons, leftButtons }) => {
  return (
    <Container>
      <LeftGroup>{leftButtons}</LeftGroup>
      <RightGroup>{rightButtons}</RightGroup>
    </Container>
  );
};
