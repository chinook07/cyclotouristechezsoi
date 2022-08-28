import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    html {
        scrollbar-color: $coul6 $coul2;
    }
    body {
        font-family: "Trebuchet MS", Helvetica, sans-serif;
        margin: 0;
    }
    :root {
        --c1: #e9d985;
        --c2: #b2bd7e;
        --c3: #749c75;
        --c4: #0e3b10;
        --c5: #6a5d7b;
        --c6: #5d4a66;
    }
`