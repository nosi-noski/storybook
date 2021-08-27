import styled from 'styled-components';
import { MobileStepper as MuiMobileStepper } from '@material-ui/core';

export const MobileStepper = styled(MuiMobileStepper)`
  padding: 0;
  background-color: transparent;
  .MuiMobileStepper-dot {
    width: 8px;
    height: 8px;
    margin-right: 12px;
    background-color: rgba(102, 102, 102, 1);

  }
  .MuiMobileStepper-dotActive {
    background-color: ${(props) => props.theme.custom.lightTheme.colors.background.default}
  }
  
  .MuiMobileStepper-dots {
    //position: absolute;
    //bottom: 60px;
  }
`;
