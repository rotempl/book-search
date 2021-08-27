import { createGlobalStyle, css } from "styled-components";
import { colors, fontFamilies } from "./globalVariables";

export const GlobalStyle = createGlobalStyle`
${() =>
  css`
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-track {
      background-color: transparent;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${colors.gray};
      border-radius: 20px;
    }
    ::-webkit-scrollbar-button {
      display: none;
    }
  `}

  *, *:before, *:after {
    box-sizing: border-box;
  }
  html {
  font-size: 10px;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  height: 100%;
  }

  body {
    margin: 0;
    font-family: ${fontFamilies.SourceSansPro};
    font-size: 1.6rem;
    height: 100%;
    width: 100vw;
    background-color: ${colors.blue};
    padding: 2rem;
    color: ${colors.white}
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  input  {
    font-family: ${fontFamilies.SourceSansPro};
    &:-webkit-autofill::first-line {
      font-family: ${fontFamilies.SourceSansPro};
    }
  }

  /* RESET BUTTON STYLES */
  button {
      display: inline-block;
      border: none;
      padding: 0;
      margin: 0;
      text-decoration: none;
      background: ${colors.gray};
      color: ${colors.white};
      font-family: ${fontFamilies.SourceSansPro};
      font-size: 1rem;
      cursor: pointer;
      text-align: center;
      -webkit-appearance: none;
      -moz-appearance: none;
  }

  button:focus {
      outline: none;
  }

  button:active {
      transform: scale(0.99);
  }

table {
  border-collapse: collapse;
  border-spacing: 0;
}
ol,
ul {
  list-style: none;
}
q:before,
q:after,
blockquote:before,
blockquote:after {
  content: '';
}
a:focus {
  outline: thin dotted;
}
a:hover,
a:active {
  outline: 0;
}

.root{ 
  height: 100%;
}

`;
