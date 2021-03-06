// Special StyledComponent that handles global styles
// https://www.styled-components.com/docs/api#createglobalstyle

import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

const GlobalStyle = createGlobalStyle`
  ${normalize()}
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
´ html, body {
    height: 100%;
    width: 100%;
  }

  html, body {
    font-family: ${props => props.theme.type
    .base}, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width:100%;
    height: 100%;
    font-size: 16px;
    background-color: ${props => props.theme.colors.greyDark};
    color: ${props => props.theme.colors.white};
  }

  #root {
    height: 100%;
    width: 100%;
  }
  `;

export default GlobalStyle;
