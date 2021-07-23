import styled, { css } from 'styled-components';
import { Typography } from '@material-ui/core';

const CommonStyleVariants = {
  basic: css`
    ${({ theme: { custom: { lightTheme: { colors: { typographyAndIcons } } } } }) => css`
      display: flex;
      align-items: center;
      text-align: center;
      color: ${typographyAndIcons.default.active};
    `};
  `,
};

const TypographyHSizeVariants = {
  Size1: css`
    ${() => css`
      font-style: normal;
      font-weight: 500;
      font-size: 64px;
      line-height: 82px;
    `};
  `,
  Size2: css`
    ${() => css`
      font-style: normal;
      font-weight: 500;
      font-size: 48px;
      line-height: 62px;
    `};
  `,
  Size3: css`
    ${() => css`
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 44px;
    `};
  `,
  Size4: css`
    ${() => css`
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 32px;
    `};
  `,
  Size5: css`
    ${() => css`
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 28px;
    `};
  `,
};

const TypographySubtitleSizeVariants = {
  Size1: css`
    ${() => css`
      font-style: normal;
      font-weight: 500;
      font-size: 18px;
      line-height: 24px;
    `};
  `,
  Size2: css`
    ${() => css`
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 22px;
    `};
  `,
  Size3: css`
    ${() => css`
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 20px;
    `};
  `,
};

const TypographyBodySizeVariants = {
  Size1: css`
    ${() => css`
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 24px;
    `};
  `,
  Size2: css`
    ${() => css`
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 22px;
    `};
  `,
  Size3: css`
    ${() => css`
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 20px;
    `};
  `,
};

interface HProps {
  size: keyof typeof TypographyHSizeVariants;
}

interface SubtitleProps {
  size: keyof typeof TypographySubtitleSizeVariants;
}

interface BodyProps {
  size: keyof typeof TypographyBodySizeVariants;
}

export const H = styled(Typography)<HProps>`
  ${CommonStyleVariants.basic};
  ${({ size }) => css` ${TypographyHSizeVariants[size || 'Size5']}; `};
`;

export const Subtitle = styled(Typography)<SubtitleProps>`
  ${CommonStyleVariants.basic};
  ${({ size }) => css` ${TypographySubtitleSizeVariants[size || 'Size3']}; `};
`;

export const Body = styled(Typography)<BodyProps>`
  ${CommonStyleVariants.basic};
  ${({ size }) => css` ${TypographyBodySizeVariants[size || 'Size3']}; `};
`;
