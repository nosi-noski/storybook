import styled from 'styled-components';
import { Typography } from '../../Typography';

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  max-height: 72px;
  padding: 16px;
  background-color: rgba(207, 216, 220, 0.3);
  border-bottom: 1px solid rgba(226, 226, 226, 1);
`;
export const Message = styled.div`
  display: flex;
`;
export const Date = styled(Message)`
  padding-top: 8px;
`;
export const Author = styled(Typography).attrs({ variant: 'body2' })`
  font-size: 13px !important;
  line-height: 16px !important;
  font-weight: 700 !important;
  display: contents;
`;
export const Title = styled(Typography)`
  font-size: 13px !important;
  line-height: 16px !important;
  display: contents;
`;
export const DateTime = styled(Typography)`
  font-size: 13px !important;
  line-height: 16px !important;
  color: ${(props) => props.theme.custom.lightTheme.colors.label.color.default}
`;
