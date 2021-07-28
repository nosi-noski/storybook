import styled, { css } from 'styled-components';

import {
  Dialog as MuiDialog,
  DialogActions as MuiDialogActions,
  DialogContent as MuiDialogContent,
} from '@material-ui/core';

import { Typography } from '../Typography';

export const Dialog = styled(MuiDialog)`
  display: block;
  
  .MuiBackdrop-root {
    background-color: transparent;
  }
  
  .MuiDialog-paper {
    width: 600px;
    max-height: 50vh;
    padding: 23px 0 16px;
    box-shadow: ${(props) => props.theme.custom.lightTheme.colors.boxShadow.paper};
    border-radius: ${(props) => props.theme.custom.border.radius12};
  }
`;

export const DialogTitle = styled(Typography)`
  padding: 0 24px 13px;
  display: flex;
  flex-direction: row;
`;
export const DialogContent = styled(MuiDialogContent)`
  ${({ dividers }) => (dividers && css` overflow-y: auto;`)};
  
  ::-webkit-scrollbar {
    width: 7px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.custom.lightTheme.colors.typographyAndIcons.default.inactive};
    border-radius: 16px;
  }
`;

export const DialogContentText = styled(Typography)`
  padding: 0 24px;
  display: block;
  word-break: break-all;
  text-align: initial;
`;

export const DialogActions = styled(MuiDialogActions)`
  padding: 16px 24px 0;
`;

export const Title = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 100%;
  align-items: center;
`;
