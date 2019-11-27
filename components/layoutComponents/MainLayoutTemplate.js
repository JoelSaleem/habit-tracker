import styled, { withTheme } from "styled-components";

const Wrapper = styled.div`
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);
  border-top-right-radius: 4px;
  border-top-left-radius: 0px;
  background-color: ${({ theme }) => {
    return  theme.primary;
  }};
  display: grid;
  grid-template-rows: 1fr 105px;
`;

const MainLayoutTemplate = ({ children}) => {
  return <Wrapper>{children}</Wrapper>;
};

export default withTheme(MainLayoutTemplate);
