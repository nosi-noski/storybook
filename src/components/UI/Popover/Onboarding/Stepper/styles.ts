import styled from 'styled-components';
import { Step as MuiStep } from '@material-ui/core';

interface Props {
  active: boolean;
}

export const Step = styled(MuiStep)<Props>`
  width: 8px;
  height: 8px;
  padding: 0;
  margin: 0 6px;
  border-radius: 50%;
  cursor: pointer;
  
  &.MuiStep-root:first-child {
    margin-left: 0px;
  }
  &.MuiStep-root:last-child {
    margin-right: 0px;
  }

  background-color: ${({ theme, active }) => {
    if (active) {
      return theme.custom.lightTheme.colors.background.default;
    }
    return theme.custom.lightTheme.colors.typographyAndIcons.inverse.disabled;
  }};
`;
