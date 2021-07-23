import styled from 'styled-components';
import { Label as Typography } from 'components/UI/Label';
import { Button as MuiButton } from 'components/UI/Button';

export const Row = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: flex-start;
  flex-direction: row;
  padding: 10px;
`;

export const Label = styled(Typography)`
  margin: 10px;
`;
