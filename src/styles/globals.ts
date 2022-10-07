import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.baseHover};
  }

  body {
    background: ${(props) => props.theme.baseCard};
    color: ${(props) => props.theme.baseText};
    font-family: 'Roboto', sans-serif;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem ;
  }
`