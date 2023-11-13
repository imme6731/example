import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
${reset}

*{
 box-sizing: border-box;
}

ul, li{
    list-style: none;
}

body{
    font-family: 'Noto Sans KR', sans-serif;
    color: white;
}
`;
