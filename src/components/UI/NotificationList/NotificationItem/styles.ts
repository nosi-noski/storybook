import styled from 'styled-components';
import { Typography } from '../../Typography';

interface Props {
  isViewed: boolean;
}

export const Item = styled.div<Props>`
  direction: ltr;
  display: flex;
  flex-direction: row;
  width: -webkit-fill-available;
  width: -moz-available;
  min-height: 56px;
  padding: 16px;
  border-bottom: 1px solid rgba(226, 226, 226, 1);
  cursor: pointer;
  background-color: ${({ isViewed }) => (isViewed ? 'none' : 'rgba(207, 216, 220, 0.3)')};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MessageRow = styled.span`
  display: flex;
  max-height: 40px;
  overflow: hidden;
  word-break: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
export const DateRow = styled(MessageRow)`
  padding-top: 8px;
`;
export const Author = styled(Typography).attrs({ variant: 'body2' })`
  font-size: inherit !important;
  line-height: inherit !important;
  font-weight: 700 !important;
  display: inline-block;
`;
export const Title = styled(Typography)`
  font-size: 13px !important;
  line-height: 16px !important;
`;
export const DateTime = styled(Typography)`
  font-size: 12px !important;
  line-height: 16px !important;
  color: ${(props) => props.theme.custom.lightTheme.colors.label.color.default}
`;

export const AvatarImg = styled.img`
  padding-right: 16px;
  width: 40px;
  height: 40px;
`;
