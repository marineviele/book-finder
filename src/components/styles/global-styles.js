import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  
  html,
  body,
  #root {
    height: 100%;
  }
  
  body {
    font-family: ${props => props.theme.text.main};
    background: ${props => props.theme.colors.primary};
    -webkit-fonyt-smoothing: antialiased;
    color: ${props => props.theme.colors.text};
    min-width: 600px; 

  }
  
  input,
  button,
  textearea {
    font-family: ${props => props.theme.text.main};
  }
  
  button {
    cursor: pointer;
  }

  h3 {
    font-size: 21px;
  }
  
  h4 {
    font-size: 14px;
  }
  
  p {
    font-size: 12px;
  }
  
  a {
    color: ${props => props.theme.colors.text};
    text-decoration: none;
  }
`;
