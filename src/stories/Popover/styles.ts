import styled from 'styled-components';
import { Typography } from '../../components/UI/Typography';
import { Button as MiuButton } from '../../components/UI/Button';

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
