import styled from "styled-components";

const Input = styled.input`
  flex: 1;
  border: none;
  background-color: transparent;
  border-bottom: 1px solid ${({ theme }) => theme.brandColour};
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  height: 24px;
  padding-left: 4px;
`;

const Container = styled.div`
  display: flex;
  padding-right: 12px;
`;

const Title = styled.div`
  padding: 6px 12px 0 0;
`;

export default ({ onChange, value, title }) => {
  return (
    <Container>
      {title && <Title>{title}:</Title>}
      <Input value={value} onChange={onChange} />
    </Container>
  );
};
