import styled, { css } from 'styled-components';

import { Button as MuiButton } from '../Button';

const IconButtonSizeVariants = {
  small: css`
    padding: 0 17px;
    height: 36px;
    width: 36px;
    
    .MuiButton-label {
      font-size: 18px;
      line-height: 18px;
      width: 18px;
    }
    
    .MuiButton-startIcon > *:first-child {
      width: 18px;
      height: 18px;
      font-size: 18px;
    }
  `,
  medium: css`
    padding: 0 23px;
    height: 48px;
    width: 48px;
  
    .MuiButton-label {
      width: 20px;
      font-size: 20px;
      line-height: 20px;
    }

    .MuiButton-startIcon > *:first-child {
      width: 20px;
      height: 20px;
      font-size: 20px;
    }
  `,
  large: css`
    padding: 0 27px;
    height: 56px;
    width: 56px;
  
    .MuiButton-label {
      width: 24px;
      font-size: 24px;
      line-height: 24px;
    }
    
    .MuiButton-startIcon > *:first-child {
      width: 24px;
      height: 24px;
      font-size: 24px;
    }
  `,
};

const IconButtonColorVariants = {
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
    ${({ theme: { custom: { lightTheme: { colors: { button: { backgroundColor }, states } } } } }) => css`
      border: none;
      
      &:hover {
        background-color: ${states.hover};
      }

      &:focus {
        box-shadow: none;
        background-color: ${backgroundColor.plain.focused};
      }

      &:active {
        background-color: ${backgroundColor.outlined.pressed};
      }

      &:disabled {
        background-color: ${backgroundColor.outlined.disabled};
      }

      .MuiButton-label {
        color: ${(props) => props.theme.custom.lightTheme.colors.typographyAndIcons.default.active};
      }
      
    `};
  `,
};

interface Props {
  assign?: keyof typeof IconButtonColorVariants;
  size?: keyof typeof IconButtonSizeVariants;
}

export const IconButton = styled(MuiButton)<Props>`
  min-width: 36px;
  padding: 0;
  color: ${(props) => props.theme.custom.lightTheme.colors.typographyAndIcons.default.active};
  .MuiButton-startIcon span:first-child {
    padding-right: 0px;
  }
  ${({ size }) => css` ${IconButtonSizeVariants[size]}; `};
  ${({ assign }) => css` ${IconButtonColorVariants[assign]}; `};
`;
