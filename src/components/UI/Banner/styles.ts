import styled, { css } from 'styled-components';
import { Typography } from '../Typography';
import { Button as MuiButton } from '../Button';

export const ContainerColorVariants = {
  info: css`
    ${({ theme: { custom: { lightTheme: { colors: { background } } } } }) => css`
        background: ${background.link};
    `}
  `,
  success: css`
    ${({ theme: { custom: { lightTheme: { colors: { background } } } } }) => css`
        background: ${background.success};
    `}
  `,
  warning: css`
    ${({ theme: { custom: { lightTheme: { colors: { background } } } } }) => css`
        background: ${background.warning};
    `}
  `,
  error: css`
    ${({ theme: { custom: { lightTheme: { colors: { background } } } } }) => css`
        background: ${background.error};
    `}
  `,
  default: css`
    ${({ theme: { custom: { lightTheme: { colors: { background } } } } }) => css`
        background: ${background.default};
    `}
  `,
  gradient: css`
    ${() => css`
      background: linear-gradient(22.62deg, #4330D8 -0.51%, #5C37D4 16.16%, #8147C5 38.82%, #914FBE 48.2%, #AC5BB1 62.53%, #D56F9E 86.89%);
    `}
  `,
};

interface Props {
  color: keyof typeof ContainerColorVariants;
}

export const Container = styled.div<Props>`
  position: absolute;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-flow: row wrap;
  width: 688px;
  max-width: 688px;
  min-height: 36px;
  padding: 16px 16px 0;
  border-radius: ${(props) => props.theme.custom.border.radius12};
  ${({ color }) => css`${ContainerColorVariants[color]};`};
`;

export const Title = styled(Typography).attrs({ variant: 'body2' })`
  display: flex;
  align-items: center;
  margin-right: 8px;
  margin-bottom: 16px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;
`;

interface ButtonProp {
  hasMargin: boolean;
}
export const Button = styled(MuiButton)<ButtonProp>`
  margin-left: ${({ hasMargin }) => (hasMargin ? '8px' : 0)};
  font-size: 14px;
  line-height: 20px;
  border: transparent;
  width: fit-content;
  &:hover {
    border-color: transparent;
    background-color: transparent;
  }
  
`;
