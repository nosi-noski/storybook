import styled, { css } from 'styled-components';
import { Paper as MuiPaper } from '@material-ui/core';
import { Button as MuiButton } from '../Button';
import { Typography } from '../Typography';
import EmptyNotificationListImg from '../../../assets/Empty-Notification-List.png';

interface Props {
  count: number;
  vertical: string;
  horizontal: string;
}

export const Paper = styled(MuiPaper)<Props>`
  width: 375px;
  max-width: 375px;
  min-height: ${({ count }) => {
    if (!count) {
      return '450px';
    }
    if (count === 1) {
      return '141px';
    }
    return '200px';
  }};
  max-height: ${({ count }) => {
    if (!count) {
      return '450px';
    }
    if (count === 1) {
      return '141px';
    }
    return '450px';
  }};
  ${({ vertical, horizontal }) => css`
      ${vertical}: 0;
      ${horizontal}: 0;
  `};
  border-radius: 0px 0px 2px 2px;
  box-shadow: ${(props) => props.theme.custom.lightTheme.colors.boxShadow.paper};
  position: absolute;
  display: flex;
  flex-direction: column;
`;

export const Middle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
  align-items: center;
  overflow-y: auto;
  scrollbar-color: ${(props) => props.theme.custom.lightTheme.colors.typographyAndIcons.default.disabled} transparent;
  scrollbar-width: thin;
  ::-webkit-scrollbar{
    width: 4px;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.custom.lightTheme.colors.typographyAndIcons.default.disabled};
    border-radius: 16px;
  }
`;

export const Bottom = styled.div`
  height: 36px;
  padding: 8px 0;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-content: center;
`;

export const EmptyListImg = styled.img.attrs({ src: EmptyNotificationListImg })`
  width: 300px;
  height: 300px;
`;
export const EmptyListTitle = styled(Typography)`
  font-size: 14px !important;
  line-height: 16px !important;
  color: ${(props) => props.theme.custom.lightTheme.colors.typographyAndIcons.custom.title};
`;
export const EmptyListText = styled(Typography).attrs({ variant: 'caption' })`
  font-size: 10px !important;
  line-height: 14px !important;
  padding-top: 8px;
  color: ${(props) => props.theme.custom.lightTheme.colors.typographyAndIcons.custom.title};
`;
export const LinkButton = styled.button`
  font-size: 10px;
  line-height: 14px;
  font-weight: 700;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  color: ${(props) => props.theme.custom.lightTheme.colors.typographyAndIcons.custom.title};
`;

export const Button = styled(MuiButton)`
  color: ${(props) => props.theme.custom.lightTheme.colors.typographyAndIcons.default.error};
  font-weight: 700;
  padding: 8px;
  &:disabled {
    color: ${(props) => props.theme.custom.lightTheme.colors.typographyAndIcons.default.disabled};
  }
  &:hover {
    background-color: transparent;
  }
`;
