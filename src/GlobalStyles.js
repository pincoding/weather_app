import { createGlobalStyle } from "styled-components"
import reset from "styled-reset"

export const GlobalStyles = createGlobalStyle`

${reset}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body{
    font-family: "Noto Sans KR", sans-serif;
}

`;

//css gradient