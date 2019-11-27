import _ from "lodash";
import DoneIcon from "@material-ui/icons/Done";
import AddIcon from "@material-ui/icons/Add";
import PersonIcon from "@material-ui/icons/Person";
import LightIcon from "@material-ui/icons/Highlight";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import ListIcon from "@material-ui/icons/List";
import { useRouter } from "next/router";
import SidebarButton from "./SidebarButton";
import MainLayoutTemplate from "./MainLayoutTemplate";

import { UserContext } from "../Layout";

import { getThemeName, setTheme } from "../../modules/theme";

const buttonsTop = [
  {
    icon: <DoneIcon />,
    tooltip: "Home",
    href: "/",
    key: "home"
  },
  {
    icon: <AddIcon />,
    tooltip: "Opens",
    href: "/opens",
    key: "open"
  },
  {
    icon: <AddIcon />,
    tooltip: "Messages",
    href: "/messages",
    key: "messages"
  },
  {
    icon: <ListIcon />,
    tooltip: "Projects",
    href: "/projects",
    key: "list"
  },
  {
    icon: <TrendingUpIcon />,
    tooltip: "Tracking",
    href: "/tracking",
    key: "tracking"
  }
];

const buttonsBottom = [
  {
    icon: <LightIcon />,
    tooltip: "Toggle Theme",
    onClick() {
      const theme = getThemeName();
      switch (theme) {
        case "light":
          setTheme("dark");
          break;
        case "dark":
          setTheme("light");
          break;
        default:
          setTheme("dark");
      }
    },
    key: "theme"
  },
  {
    icon: <PersonIcon />,
    tooltip: "Log In",
    href: user => {
      if (_.isEmpty(user)) {
        return "/auth/google";
      }

      return "/api/logout";
    },
    shouldHighlight(user) {
      return !_.isEmpty(user);
    },
    key: "user"
  }
];

const mapButtonDataToComponents = (pushFn, buttons, route, user) => {
  // ! TODO: SET THEME HEEERREEE USING ON CLICK
  // * THEN, ACTUALLY PUT THEMES IN STYLED-COMPONENTS
  return _.map(
    buttons,
    ({ key, icon, tooltip, href, shouldHighlight, onClick }) => {
      const isFocused =
        href === route || (shouldHighlight && shouldHighlight(user));

      return (
        <SidebarButton
          isFocused={isFocused}
          key={key}
          icon={icon}
          tooltip={tooltip}
          href={_.isFunction(href) ? href(user) : href}
          onClick={onClick}
          pushFn={pushFn}
        />
      );
    }
  );
};

const Sidebar = ({ user }) => {
  const { route, push } = useRouter();

  return (
    <MainLayoutTemplate>
      <>
        <div>{mapButtonDataToComponents(push, buttonsTop, route, user)}</div>
        <div>{mapButtonDataToComponents(push, buttonsBottom, route, user)}</div>
      </>{" "}
    </MainLayoutTemplate>
  );
};

export default props => {
  return (
    <UserContext.Consumer>
      {user => {
        return <Sidebar {...props} user={user} />;
      }}
    </UserContext.Consumer>
  );
};
