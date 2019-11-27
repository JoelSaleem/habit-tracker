import Layout from "../components/Layout";
import Card from "../components/layoutComponents/Card";
import Footer from "../components/Footer";
import Button from "../components/Button";

import styled from "styled-components";
import Dashboard from "../components/Dashboard";
import CreateNew from "../components/CreateNew";

const { useState } = React;

export const OpenRoutes = {
  DASHBOARD: "DASHBOARD",
  CREATE: "CREATE",
  EDIT_ONE: "EDIT_ONE",
  LIST: "LIST",
  METRICS: "METRICS"
};

export default props => {
  const [display, setDisplay] = useState(OpenRoutes.DASHBOARD);

  let component = null;
  switch (display) {
    case OpenRoutes.DASHBOARD:
      component = <Dashboard setDisplay={setDisplay} />;
      break;
    case OpenRoutes.CREATE:
      component = <CreateNew />;
  }

  return (
    <Layout title="Messages">
      <Card>
        <>
        Messaages:
        Date time
        phone
        exact message
          {
            {
              [OpenRoutes.DASHBOARD]: <Dashboard setDisplay={setDisplay} />,
              [OpenRoutes.CREATE]: <CreateNew />
            }[display]
          }
        </>
      </Card>
      <Footer
        leftButtons={<Button>Test</Button>}
        rightButtons={[<Button>Test</Button>, <Button>Test</Button>]}
      />
    </Layout>
  );
};
