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
  flex-direction: row;
`;

export const Button = styled(MiuButton).attrs({ assign: 'plain' })`
  color: ${(props) => props.theme.custom.pallete.primary[200]};
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  `;

export const Stepper = styled.div`
  align-self: center;
  flex: 1 1 auto;
`;
