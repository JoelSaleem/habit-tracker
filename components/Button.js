import styled from "styled-components";

const Button = styled.button`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.iconColor};
  border: none;
  border-radius: 4px;
  height: 32px;
  width: 60px;
  background-position: center;
  transition: background 0.4s;

  &:hover {
    background: ${({ theme }) => theme.accent1};
  }

  &:active {
    background-color: ${({ theme }) => theme.accent2};
    background-size: 100%;
    transition: background 0s;
  }
`;

export default props => <Button {...props}>{props.children}</Button>;

export const getRouteButton = (setDisplay, text, route) => {
  return (
    <Button
      onClick={() => {
        setDisplay(route);
      }}
    >
      {text}
    </Button>
  );
};
