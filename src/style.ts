import {createGlobalStyle} from "styled-components";

export const theme = {
    pageBackground: "#f5f5f5",
    backgroundColor: "white",
    baseRadius: "4px",
    basePadding: "15px",
    baseMargin: "10px",
    separatorColor: "#ddd"
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
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
  }
`;

export default Style