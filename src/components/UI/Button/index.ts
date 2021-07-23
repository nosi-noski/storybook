import styled, { css } from 'styled-components';
import { Button as MuiButton } from '@material-ui/core';

const ButtonSizeVariants = {
  small: css`
      padding: 8px 16px;
      height: 36px;
      .MuiButton-label {
        font-size: 14px;
        line-height: 20px;
      }
  `,
  medium: css`
      padding: 13px 20px;
      height: 48px;
      .MuiButton-label {
        font-size: 16px;
        line-height: 22px;
      }
  `,
  large: css`
      padding: 16px 24px;
      height: 56px;
      .MuiButton-label {
        font-size: 18px;
        line-height: 24px;
      }
  `,
};

const ButtonColorVariants = {
  contained: css`
     ${({ theme: { custom: { lightTheme: { colors: { button: { backgroundColor }, typographyAndIcons } } } } }) => css`
      background-color: ${backgroundColor.contained.active};
      border: none;
      &:hover {
        box-shadow: none;
        background-color: ${backgroundColor.contained.hovered};
      }
      &:focus {
        box-shadow: none;
        background-color: ${backgroundColor.contained.focused};
      }
      &:active {
        background-color: ${backgroundColor.contained.pressed};
      }
      &:disabled {
        background-color: ${backgroundColor.contained.active};
      }
     .MuiButton-label {
        color: ${typographyAndIcons.default.active};
     }
    `};
  `,
  outlined: css`
     ${({ theme: { custom: { lightTheme: { colors: { button: { backgroundColor, borderColor }, borders, typographyAndIcons } } } } }) => css`
        border: 1px solid ${borders.border};
        background-color: ${backgroundColor.outlined.active};
        &:hover {
          box-shadow: none;
          background-color: ${backgroundColor.outlined.hovered};
          border-color:  ${borderColor.outlined.hovered};
        }

        &:focus {
          box-shadow: none;
          background-color: ${backgroundColor.outlined.focused};
          border-color:  ${borderColor.outlined.focused};
        }

        &:active {
          background-color: ${backgroundColor.outlined.pressed};
          border-color:  ${borderColor.outlined.pressed};
        }

        &:disabled {
          background-color: ${backgroundColor.outlined.active};
          border-color:  ${borderColor.outlined.active};
        }

       .MuiButton-label {
          color: ${typographyAndIcons.default.active};
          border-color:  ${borderColor.outlined.disabled};
       }
     `};
  `,
  plain: css`
    ${({ theme: { custom: { lightTheme: { colors: { button: { backgroundColor, borderColor }, typographyAndIcons } } } } }) => css`
      border: none;
      background-color: ${backgroundColor.plain.active};
      color: ${typographyAndIcons.default.link};
      &:hover {
        background-color: ${backgroundColor.plain.hovered};
      }

      &:focus {
        background-color: ${backgroundColor.plain.focused};
        box-shadow: 0 0 0 1px ${borderColor.plain.focused};
      }

      &:active {
        border: none;
        background-color: ${backgroundColor.plain.pressed};
      }

      &:disabled {
        background-color: ${backgroundColor.plain.disabled};
        color: ${typographyAndIcons.default.link};
      }

      .MuiButton-label {
        color: ${typographyAndIcons.default.link}
      }
    `};
  `,
};

interface Props {
  assign?: keyof typeof ButtonColorVariants;
  size?: keyof typeof ButtonSizeVariants;
}

export const Button = styled(MuiButton)<Props>`
  min-width: 40px;
  border-radius: ${(props) => props.theme.custom.border.radius12};
  box-shadow: none;
  color: ${(props) => props.theme.custom.lightTheme.colors.typographyAndIcons.default.active};
  font-style: normal;
  text-transform: none;
  font-weight: 500;
  letter-spacing: 0;
  text-align: center;


  .MuiButton-startIcon > *:first-child {
    font-size: 24px;
    padding-right: 8px;
  }
  .MuiButton-startIcon > div {
    text-transform: initial;
  }
  .MuiButton-startIcon {
    margin: 0;
  }
  &:disabled {
    opacity: 0.48;
  }

  ${({ size }) => css` ${ButtonSizeVariants[size || 'small']}; `};
  ${({ assign }) => css` ${ButtonColorVariants[assign || 'contained']}; `};
`;
