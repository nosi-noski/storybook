import styled from 'styled-components';

export const MatIcon = styled.span`
  background-repeat: no-repeat;
  display: inline-block;
  margin: auto;
  fill: currentColor;
  height: 24px;
  width: 24px;
  font-size: 24px;
  line-height: 1;
  font-family: ${(props) => props.theme.custom.fontFamily.beelineIcons};
  .MuiButton-iconSizeSmall span:first-child {
    font-size: 24px;
  }
`;
