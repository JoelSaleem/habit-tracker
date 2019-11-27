import React, { useState } from "react";
import purple from "@material-ui/core/colors/purple";
import grey from "@material-ui/core/colors/grey";
import styled, { withTheme } from "styled-components";

const iconStyle = { height: 24, width: 24, flex: 1 };

const Button = styled.button`
  border-width: 0px;
  border-radius: 10px;
  height: 50px;
  width: 50px;
  min-width: 50px;
  padding: 6px 8px;
  flex: 1;
  color: ${({ theme }) => theme.iconColor};
  background: ${({ theme, isFocused }) => {
    let colour = isFocused ? "accent1" : "primary";

    return theme[colour];
  }};
  background-position: center;
  transition: background 0.4s;
  
  &:hover {
    background: ${({ theme }) => theme.accent1}
    radial-gradient(
      circle,
      transparent 1%,
      ${({ theme }) => theme.accent2} 1%
      )
      center/15000%;
      transition: background 0.4;
  }

  &:active {
    background-color: ${({ theme }) => theme.accent1};
    background-size: 100%;
    transition: background 0.4s;
  }
`;

// TODO: TOOLTIP
const SidebarButton = ({ pushFn, icon, tooltip, href, isFocused, onClick }) => {
  return (
    <Button
      key={href}
      isFocused={isFocused}
      onClick={() => {
        if (_.isFunction(onClick)) {
          onClick();
        } else {
          pushFn(href);
        }
      }}
    >
      {React.cloneElement(icon, { style: iconStyle })}
    </Button>
  );
};

export default withTheme(SidebarButton);
