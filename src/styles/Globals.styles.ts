import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`

  :root {
    font-size: 8px;
    --light-gray: #E7E7E7;
    --gray:       #848484;
    --pink:       #F75672;
    --black:      #181818;
    --red:        #FF3535;
    --green:      #37AB00;
  }

  * {
    padding: 0;
    box-sizing: border-box;
    margin: 0;
  }

  input, button, h2, p, label, h1, h3, span {
    font-family: Inter, 'sans-serif';
  }

  span {
    color: var(--pink);
  }

`