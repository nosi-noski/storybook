import React from 'react';
import styled, { css } from 'styled-components';
import { TextField as MuiTextField, TextFieldClasses } from '@material-ui/core';

const TextFieldSizeVariants = {
  small: css`
    ${() => css`

      .MuiInputBase-root.MuiInputBase-formControl.MuiInputBase-sizeSmall,
      .MuiOutlinedInput-notchedOutline {
        height: 36px;
      }

      .MuiInputBase-input {
        padding: 7px 16px;
      }

      .MuiInputLabel-outlined.MuiInputLabel-shrink.MuiInputLabel-sizeSmall {
        display: none;
      }
    `};
  `,
  medium: css`
    ${() => css`
      .MuiInputBase-root.MuiInputBase-formControl.MuiInputBase-sizeMedium,
      .MuiOutlinedInput-notchedOutline {
        height: 48px;
      }

      .MuiInputBase-input {
        padding: 13px 16px;
      }

      .MuiInputLabel-root.MuiInputLabel-animated.MuiFormLabel-root {
        top: -2px;
      }

      .MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-shrink.MuiFormLabel-root {
        margin-top: -3px;
        left: 3px;
      }
    `};
  `,
  large: css`
    .MuiInputBase-root.MuiInputBase-formControl.MuiInputBase-sizeLarge,
    .MuiOutlinedInput-notchedOutline {
      height: 56px;
    }

    .MuiInputBase-input {
      padding: 17px 16px;
    }

    .MuiInputLabel-root.MuiInputLabel-animated.MuiFormLabel-root {
      margin-top: 2px;
    }

    .MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-shrink.MuiFormLabel-root {
      left: 3px;
      margin-top: -1px;
    }
  `,
};

export interface TextFieldProps extends TextFieldClasses {
  size?: keyof typeof TextFieldSizeVariants
}

export const TextField = styled(MuiTextField).attrs({ variant: 'outlined' })<TextFieldProps>`

  ${({ size }) => css` ${TextFieldSizeVariants[size || 'small']}; `};
  border: transparent;

  ${({
    theme: {
      custom: {
        lightTheme: {
          colors: {
            typographyAndIcons,
            borders,
            background,
          },
        },
        border,
      },
    },
  }) => css`

    border-radius: ${border.radius12};

    &:focus {
      background: none;
      border-color: ${borders.borderFocusedTextField};
    }
    &:disabled {
      border: transparent;
    }

    &:active {
      border-color: ${borders.borderFocusedTextField};
    }

    .MuiInputBase-root {
      color: ${typographyAndIcons.default.inactive};
    }

    fieldset {
      border-radius: ${border.radius12};
      border: transparent;
    }

    .MuiOutlinedInput-root {
      border-radius: ${border.radius12};
    }

    .MuiInputBase-input {
      border: 1px solid transparent;
      border-radius: ${border.radius12};
      background: ${background.controls};
    }
    .MuiInputBase-input:hover {
      border: 1px solid ${borders.borderFocusedTextField};
    }

    .MuiInputBase-input.Mui-disabled:hover {
      border: 1px solid transparent;
    }

    .MuiInputBase-input:focus {
      background: none;
      border: 1px solid ${borders.borderFocusedTextField};
    }

    .MuiInputBase-root:focus,
    .MuiInputBase-root:hover,
    .MuiTextField-root{
      background: none;
    }

    .MuiFormHelperText-root.Mui-error {
      color: ${typographyAndIcons.default.error};
    }
    .MuiInputBase-root.Mui-error {
      background-color: ${background.errorTextField};
      border-color: ${borders.borderError};
    }
    .MuiInputBase-root.Mui-error.Mui-focused {
      background-color: transparent;
    }

    .MuiOutlinedInput-root.Mui-error .MuiInputBase-input {
      border: 1px solid ${borders.borderError};
      background-color: transparent;
    }

    .MuiInputLabel-outlined.MuiInputLabel-shrink {
      transform: translate(14px, 8px) scale(0.75);
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 16px;
      display: flex;
      align-items: center;
      color: ${typographyAndIcons.default.inactive};
      mix-blend-mode: normal
    }

    .MuiInputBase-input {
      height: 20px;
      font-size: 16px;
      line-height: 20px;
    }

    .MuiInputLabel-root.MuiInputLabel-formControl.MuiInputLabel-shrink.MuiFormLabel-root {
      font-size: 12px;
      line-height: 16px;
    }

    .MuiInputLabel-root.MuiInputLabel-animated.MuiFormLabel-root {
      font-size: 16px;
      line-height: 20px;
    }
  `}
`;
