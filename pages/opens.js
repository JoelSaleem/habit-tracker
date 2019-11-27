import fetch from "isomorphic-unfetch";
import Layout from "../components/Layout";
import Card from "../components/layoutComponents/Card";
import Footer from "../components/Footer";
import Button, { getRouteButton } from "../components/Button";

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

  const btnData2Component = b => {
    if (b.isVisible(display)) {
      return b.getButton(setDisplay);
    }

    return null;
  };

  const saveMessageTemplate = () => {
    console.log("clicked");
    fetch("http://localhost:3000/open", {
      method: "POST",
      body: JSON.stringify({ message: "test" })
    });
  };

  const leftButtonGetters = [
    {
      getButton() {
        return getRouteButton(setDisplay, "Back", OpenRoutes.DASHBOARD);
      },
      isVisible() {
        return display === OpenRoutes.CREATE;
      }
    }
  ];

  const rightButtonGetters = [
    {
      getButton() {
        return <Button onClick={saveMessageTemplate}>Submit</Button>;
      },
      isVisible() {
        return display === OpenRoutes.CREATE;
      }
    }
  ];

  return (
    <Layout title="Opens">
      <Card>
        {
          {
            [OpenRoutes.DASHBOARD]: <Dashboard setDisplay={setDisplay} />,
            [OpenRoutes.CREATE]: <CreateNew />
          }[display]
        }
      </Card>
      <Footer
        leftButtons={leftButtonGetters.map(btnData2Component)}
        rightButtons={rightButtonGetters.map(btnData2Component)}
      />
    </Layout>
  );
};
