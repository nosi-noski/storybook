import styled from 'styled-components';

export const MatIcon = styled.span`
  @font-face {
    font-display: block;
    font-family: "BeelineIcons";
    font-style: normal;
    font-weight: 400;
    src: 
    url("../../../../src/assets/fonts/icons/BeelineIcons.woff2?1623067636998") format("woff2"),
    url("../../../../src/assets/fonts/icons/BeelineIcons.woff?1623067636998") format("woff"),
    url("../../../../src/assets/fonts/icons/BeelineIcons.ttf?1623067636998") format("ttf");
  }
  
  background-repeat: no-repeat;
  display: inline-block;
  margin: auto;
  fill: currentColor;
  height: 24px;
  width: 24px;
  font-size: 24px;
  line-height: 1;
  font-family: ${(props) => props.theme.custom.fontFamily.beelineIcons};
  .MuiButton-iconSizeSmall > *:first-child {
    font-size: 24px;
  }
`;
