import styled from "styled-components";

const Input = styled.textarea`
  flex: 1;
  border: none;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.brandColour};
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  height: 24px;
  padding-left: 4px;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  padding-right: 12px;
  align-items: flex-end;
  padding-bottom: 12px;
`;

const Title = styled.div`
  padding: 0 12px 0 0;
`;

export default ({ onChange, value, title }) => {
  return (
    <Container>
      {title && <Title>{title}:</Title>}
      <Input value={value} onChange={onChange} />
    </Container>
  );
};
