import styled from 'styled-components';
import { Typography } from '../../../Typography';
import { Button as MiuButton } from '../../../Button';

export const Container = styled.div``;

export const Title = styled(Typography).attrs({ variant: 'h5' })`
  color: ${(props) => props.theme.custom.lightTheme.colors.typographyAndIcons.inverse.active};
  margin-bottom: 15;
`;

export const Content = styled(Typography).attrs({ variant: 'body3' })`
 color: ${(props) => props.theme.custom.lightTheme.colors.typographyAndIcons.inverse.active};
`;

export const Bottom = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled(MiuButton).attrs({ assign: 'plain' })`
  color: ${(props) => props.theme.custom.pallete.primary[200]};
`;

export const Dots = styled.div`
  display: flex;
  align-items: center;
`;

export const Dot = styled.div`
  cursor: pointer;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin-left: 12px;
  background-color: rgba(102, 102, 102, 1);
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
  &.active {
    background-color: ${(props) => props.theme.custom.lightTheme.colors.background.default};
  }
`;
