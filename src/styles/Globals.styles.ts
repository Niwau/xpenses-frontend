import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`

  :root {
    font-size: 8px;
    --light-gray: #E7E7E7;
    --pink: #F75672;
    --black: #181818;
  }

  * {
    padding: 0;
    box-sizing: border-box;
    margin: 0;
  }

  input, button, h2, p, label {
    font-family: Inter, 'sans-serif';
  }

  span {
    color: var(--pink);
  }

`