import {createGlobalStyle} from "styled-components";

// TODO: use rems?
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
    textSizeSmall: "12px",
    textSize: "13px",
    textSizeBigger: "15px",
    textSizeBig: "16px",
    textSizeLarge: "30px",
    backgroundColor: "white",
    baseRadius: "4px",
    basePadding: "15px",
    morePadding: "20px",
    baseMargin: "10px",
    moreMargin: "20px",
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

export default Style