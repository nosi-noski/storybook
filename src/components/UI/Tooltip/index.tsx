import * as React from 'react';
import styled, { css } from 'styled-components';
import { Tooltip as MuiTooltip } from '@material-ui/core';

export const Tooltip = styled(({ className, ...props }) => (
  <MuiTooltip {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-tooltip {
    background: ${(props) => props.theme.custom.lightTheme.colors.background.inverse};
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0.4px;
    text-align: center;
  }
`;
