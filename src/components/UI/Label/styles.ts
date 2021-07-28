import { Typography as MiuTypography } from '@material-ui/core';
import styled, { css } from 'styled-components';

export const ColorLabelVariants = {
  info: css`
    ${({ theme: { custom: { lightTheme: { colors: { label: { color, backgroundColor } } } } } }) => css`
      color: ${color.info};
      background: ${backgroundColor.info};
    `};
  `,

  success: css`
    ${({ theme: { custom: { lightTheme: { colors: { label: { color, backgroundColor } } } } } }) => css`
      color: ${color.success};
      background: ${backgroundColor.success};
    `};
  `,

  warning: css`
    ${({ theme: { custom: { lightTheme: { colors: { label: { color, backgroundColor } } } } } }) => css`
      color: ${color.warning};
      background: ${backgroundColor.warning};
    `};
  `,

  error: css`
    ${({ theme: { custom: { lightTheme: { colors: { label: { color, backgroundColor } } } } } }) => css`
      color: ${color.error};
      background: ${backgroundColor.error};
    `};
  `,

  default: css`
    ${({ theme: { custom: { lightTheme: { colors: { label: { color, backgroundColor } } } } } }) => css`
      color: ${color.default};
      background: ${backgroundColor.default};
    `};
  `,
};

interface Props {
  category? : keyof typeof ColorLabelVariants;
}

export const MuiLabel = styled(MiuTypography)<Props>`
  width: fit-content;
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 300px;
  font-size: 12px;
  line-height: 16px;
  
  *:first-child {
    font-size: 18px;
    line-height: 18px;
    margin: 0px;
    width: 18px;
    height: 18px;
  }
  
  padding: ${(props) => (typeof props.children === 'string' ? '4px 12px' : '3px')};

  ${({ category }) => css`${ColorLabelVariants[category]}; `};
`;
