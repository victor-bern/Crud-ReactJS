import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #1CA2EA;
    font-family: 'Epilogue', sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button {
    font: 16px Epilogue, sans-serif
  }
  button{
    cursor: pointer;
  }
`;
