import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  
  @font-face {
    font-display: block;
    font-family: "BeelineIcons";
    font-style: normal;
    font-weight: 400;
    src: url("./BeelineIcons.woff2?1623067636998") format("woff2"),
    url("./BeelineIcons.woff?1623067636998") format("woff"),
    url("./BeelineIcons.ttf?1623067636998") format("ttf");
  }
`;
