import styled from 'styled-components';
import { Typography } from '../../Typography';

export const Title = styled(Typography).attrs({ variant: 'caption' })`
  color: ${(props) => `${props.theme.custom.lightTheme.colors.typographyAndIcons.inverse.active} !important`};
`;
