import styled from 'styled-components';
import { Tooltip as MuiTooltip } from '@material-ui/core';

export const Tooltip = styled(MuiTooltip)`
  & .MuiTooltip-tooltip {
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0px;
    text-align: center;
    background: ${(props) => props.theme.custom.lightTheme.colors.background.inverse};
  }
`;
