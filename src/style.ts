import { createGlobalStyle } from "styled-components";

export const theme = {
    pageBackground: "#f5f5f5",
    errorBackground: "#faeae8",
    errorTextColor: "red",
    successBackground: "#dcf9eb",
    successTextColor: "green",
    neutralBackground: "lightgray",
    neutralTextColor: "#747474",
    textColor: "black",
    textColorDimmed: "gray",
    textSizeSmall: "0.75rem",
    textSize: "0.813rem",
    textSizeBigger: "1rem",
    textSizeBig: "1.063rem",
    textSizeLarge: "1.875rem",
    backgroundColor: "white",
    baseRadius: "0.25rem",
    basePadding: "0.938rem",
    morePadding: "1.25rem",
    baseMargin: "0.625rem",
    moreMargin: "1.25rem",
    separatorColor: "#ddd",
    linkTextColor: "#4c5df3",
};

export function fromTheme(themePropName: keyof typeof theme) {
    return theme[themePropName];
}

const Style = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${fromTheme("pageBackground")};
    font-size: ${fromTheme("textSize")};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;

export default Style;
