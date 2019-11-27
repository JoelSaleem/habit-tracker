import Sidebar from "./layoutComponents/Sidebar";
const { useEffect, useState } = React;
import styled, { withTheme } from "styled-components";

export const UserContext = React.createContext({});

const Container = styled.div`
  display: grid;
  grid-template-columns: 50px 1fr;
  height: 100%;
  flex: 1;
  background: ${({ theme }) => theme.offColourPrimary};
`;

const MainContentWrapper = styled.div`
  margin-bottom: 12px;
  margin-right: 12px;
  display: grid;
  grid-template-rows: 100px 1fr;
  margin-left: 12px;
  color: ${({ theme }) => theme.text};
`;

const getUser = new Promise(resolve => {
  fetch("/api/current_user")
    .then(r => {
      return r.json() || {};
    })
    .then(user => {
      resolve(user);
    });
});

const Layout = ({ children, title }) => {
  const [user, setAuthedUser] = useState({});
  useEffect(() => {
    getUser.then(authedUser => {
      setAuthedUser(authedUser);
    });
  }, []);

  return (
    <Container>
      <UserContext.Provider value={user}>
        <Sidebar />
        <MainContentWrapper>
          <h3>{title}</h3>
          {children}
        </MainContentWrapper>

        <style global jsx>{`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div,
          div#__next > div {
            height: 100%;
            margin: 0;
          }
        `}</style>
      </UserContext.Provider>
    </Container>
  );
};

export default withTheme(Layout);
