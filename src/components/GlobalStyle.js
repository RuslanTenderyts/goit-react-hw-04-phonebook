import { createGlobalStyle } from 'styled-components';
import 'modern-normalize'

const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

  p {
    margin: 0;
  }
  
  button {
    padding: 2px 10px;
    background-color: white;
    border-radius: 6px;
    border: 1px solid #d5d3d3;
    font-size: 10px;

    :hover {
        box-shadow: 0 4px 2px -2px gray;
    }
    :active {
        border: 1px solid transparent;
        background-color: blue;
        color: white;
    }
  }

  input {
    border: 1px solid #d5d3d3;

    :focus {
      box-shadow: 0px 0px 2px 2px #5ca5f9;;
      outline-width: 0px;
    }
  }
`;

 
export default GlobalStyle;