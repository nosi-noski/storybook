import styled from 'styled-components';
import { Paper as MuiPaper } from '@material-ui/core';
import { Button as MuiButton } from '../Button';
import No_notifications from '../../../assets/No_notifications.png';

export const Paper = styled(MuiPaper)`
  width: 375px;
  height: 500px;
  max-width: 375px;
  max-height: 60vh;
  box-shadow: ${(props) => props.theme.custom.lightTheme.colors.boxShadow.paper};
  position: absolute;
  right: 0;
  top: 0;
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
`;

export const Bottom = styled.div`
  height: 36px;
  padding: 8px;
  display: flex;
  flex: 1 1 auto;
  justify-content: center;
  align-content: center;
`;

export const NoNotificationsImg = styled.img.attrs({ src: No_notifications })`
  width: 300px;
  height: 300px;
`;

export const Button = styled(MuiButton)`
  color: ${(props) => props.theme.custom.lightTheme.colors.typographyAndIcons.default.error};
`;

export const Item = styled.div`
  height: 88px;
  padding: 16px;
  background-color: cadetblue;
`;
