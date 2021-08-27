import React from 'react';
import styled, { css } from 'styled-components';
import { Tooltip as MuiTooltip } from '@material-ui/core';
import { TooltipProps, TooltipStylesMapType } from './interfaces';

export const TooltipTypeVariants:TooltipStylesMapType = {
  helper: css`
    padding: 12px 16px;
    width: 400px;
    max-width: 480px;
  `,
  onboarding: css`
      padding: 20px 24px 16px;
      min-width: 320px;
  `,
};

export const Tooltip = styled(({ className, ...props }) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))<TooltipProps>`
  & .MuiTooltip-tooltip {
    border-radius: ${(props) => props.theme.custom.border.radius12};
    color: ${(props) => props.theme.custom.lightTheme.colors.typographyAndIcons.inverse.active};
    background: ${(props) => props.theme.custom.lightTheme.colors.background.inverse};
    padding: ${({ type }) => {
    if (type === 'helper') {
      return '12px 16px';
    }
    return '20px 24px 16px;';
  }};
    min-width: ${({ type }) => {
    if (type === 'helper') {
      return '368px';
    }
    return '272px;';
  }};
    max-width: ${({ type }) => {
    if (type === 'helper') {
      return '448px';
    }
    return '';
  }};
  }
  & .MuiTooltip-arrow {
    color: ${(props) => props.theme.custom.lightTheme.colors.background.inverse};
  }
`;
