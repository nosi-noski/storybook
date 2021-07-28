import styled, { css } from 'styled-components';
import { Typography as MuiTypography } from '@material-ui/core';

/**
 * TODO:
 * сейчас есть проблема с типографикой
 * если попытаться в верхеуровневом компоненте поменять какой-то из стилей указанных ниже,
 * этого сделать не выйдет, т.к. селекторы используемые нами в этом компоненте
 * будут выше по приоритету, пока можно решить только добавив !important к соответствующему свойству
 * надо найти другое решение
 * Пример
 * const RedCaption = styled(Typography).attrs({ variant: 'caption' })`
 *   color: red;
 * `; - не будет работать
 *
 * const RedCaption = styled(Typography).attrs({ variant: 'caption' })`
 *   color: red !important;
 * `; - будет работать
 */

export const Typography = styled(MuiTypography)`
  ${({ theme: { custom: { lightTheme: { colors: { typographyAndIcons } } } } }) => css`
    color: ${typographyAndIcons.default.active};
    font-style: normal;
    font-weight: normal;
    h1& {
      font-weight: 500;
      font-size: 64px;
      line-height: 82px;
    }
    h2& {
      font-weight: 500;
      font-size: 48px;
      line-height: 62px;
    }
    h3& {
      font-size: 34px;
      line-height: 44px;
    }
    h4& {
      font-weight: bold;
      font-size: 24px;
      line-height: 32px;
    }
    h5& {
      font-weight: bold;
      font-size: 20px;
      line-height: 28px;
    }

    &.MuiTypography-subtitle1, &.MuiTypography-subtitle2, &.MuiTypography-subtitle3 {
      font-weight: 500;
    }
    &.MuiTypography-subtitle1 {
      font-size: 18px;
      line-height: 24px;
    }
    &.MuiTypography-subtitle2 {
      font-size: 16px;
      line-height: 22px;
    }
    &.MuiTypography-subtitle3 {
      font-size: 14px;
      line-height: 20px;
    }

    &.MuiTypography-body1 {
      font-size: 18px;
      line-height: 24px;
    }
    &.MuiTypography-body2 {
      font-size: 16px;
      line-height: 22px;
    }
    &.MuiTypography-body3 {
      font-size: 14px;
      line-height: 20px;
    }

    &.MuiTypography-caption {
      font-size: 12px;
      font-weight: 400;
      line-height: 16px;
      color: ${typographyAndIcons.default.inactive};
    }

    &.MuiTypography-overline {
      font-size: 10px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 1.2px;
      text-transform: uppercase;
      color: ${typographyAndIcons.default.inactive};
    }
  `};
`;
