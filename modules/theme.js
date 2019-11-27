let _theme = "dark";
let _listeners = [];

const themes = {
  light: {
    brandColour: "#6a1b9a",
    primary: "#6a1b9a",
    offColourPrimary: "#ededed",
    accent1: "#9c4dcc",
    accent2: "#ae52d4",
    iconColor: "#fff",
    background: "#fff",
    text: "#000"
  },
  dark: {
    brandColour: "#6a1b9a",
    primary: "#000",
    offColourPrimary: "#1e1c1f",
    accent1: "#282230",
    accent2: "#372e42",
    background: "#171717",
    iconColor: "#6a1b9a",
    text: "#fff"
  }
};

export const getTheme = () => {
  return themes[_theme];
};

export const getThemeName = () => _theme;

export const setTheme = themeName => {
  _theme = themeName;
  _listeners.forEach(({ callback }) => {
    if (_.isFunction(callback)) {
      callback();
    }
  });
};

export const registerListeners = listener => {
  _listeners.push(listener);
};
