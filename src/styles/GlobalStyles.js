import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    border: 0;
    background: none;
    font-family: sans-serif
  }

  html, body, #root {
    height: 100vh;
    /* width: 100vw; */
  }

  :root {
    font-size: 60%;

    --color-primary: #2185D0;
    --color-primary-dark: #58A0E1;

    --color-warning: #F2711C;
    --color-warning-dark: #F78837;

    --color-light: #E0E1E2;

    --color-confirm: #21BA45;
    --color-confirm-dark: #59D07A;

    --color-danger: #DB2828;
    --color-danger-dark: #E24642;

    --color-background-dark: #1B1C1D;
  }

  @media (min-width: 700px) {
    :root {
      font-size: 62.5%;
    }
  }

`;
